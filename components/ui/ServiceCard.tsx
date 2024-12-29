import React, { useEffect, useState } from 'react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const cardElement = document.getElementById(`service-${service.id}`);
    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) {
        observer.unobserve(cardElement);
      }
    };
  }, [service.id]);

  return (
    <div 
      id={`service-${service.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative p-6 rounded-xl shadow-lg 
                 transform transition-all duration-700 ease-in-out
                 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                 ${isHovered ? 'scale-105 -translate-y-2' : 'scale-100 translate-y-0'}
                 ${isHovered ? 'bg-blue-600' : 'bg-white dark:bg-gray-700'}`}
    >
      <div className="relative mb-6 inline-block">
        <div className={`w-16 h-16 rounded-lg
                        flex items-center justify-center 
                        transition-all duration-500 ease-in-out
                        ${isHovered ? 'bg-white bg-opacity-20 rotate-6 scale-110' : 'bg-blue-100'}`}>
          <Icon className={`w-8 h-8 transition-all duration-500 ease-in-out
                          ${isHovered ? 'text-white rotate-12' : 'text-blue-600'}`} />
        </div>
        <div className={`absolute -inset-0.5 rounded-lg bg-blue-400
                        blur transition-opacity duration-500
                        ${isHovered ? 'opacity-50' : 'opacity-0'}`} />
      </div>

      <h3 className={`text-xl font-semibold mb-3 
                      transition-colors duration-500 ease-in-out
                      ${isHovered ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
        {service.title}
      </h3>
      <p className={`transition-colors duration-500 ease-in-out
                     ${isHovered ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}>
        {service.description}
      </p>
    </div>
  );
};