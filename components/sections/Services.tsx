import React, { useEffect, useState } from 'react';
import { services } from '@/utils/contants';
import { ServiceCard } from '../ui/ServiceCard';

export const Services: React.FC = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeaderVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const headerElement = document.getElementById('services-header');
    if (headerElement) {
      observer.observe(headerElement);
    }

    return () => {
      if (headerElement) {
        observer.unobserve(headerElement);
      }
    };
  }, []);

  return (
    <section id="services" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto">
        <div 
          id="services-header"
          className={`text-center transform transition-all duration-1000 
                     ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            My Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            I offer a wide range of services to help you build and maintain your digital presence
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

         
        </div>
      </div>
    </section>
  );
};