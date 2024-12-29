import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechStart',
    image: '/api/placeholder/400/400',
    content: 'Working with this team was an absolute pleasure. Their attention to detail and technical expertise exceeded our expectations.',
    company: 'TechStart',
    companyLogo: '/api/placeholder/100/100'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    image: '/api/placeholder/400/400',
    content: 'They delivered our project on time and with exceptional quality. The communication throughout the process was outstanding.',
    company: 'InnovateCorp',
    companyLogo: '/api/placeholder/100/100'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    image: '/api/placeholder/400/400',
    content: 'The website they built for us perfectly captures our brand identity. Their design sensibility is truly remarkable.',
    company: 'DesignHub',
    companyLogo: '/api/placeholder/100/100'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Startup Founder',
    image: '/api/placeholder/400/400',
    content: 'Their expertise in modern web technologies helped us launch our startup successfully. Highly recommended!',
    company: 'NextGen',
    companyLogo: '/api/placeholder/100/100'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTestimonial = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.offsetWidth;
      containerRef.current.scrollTo({
        left: scrollAmount * index,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      scrollToTestimonial(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
      scrollToTestimonial(currentIndex + 1);
    }
  };

  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Here&apos;s what some of our clients have to say about our work
          </p>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
                ${currentIndex === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentIndex === testimonials.length - 1}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full 
                ${currentIndex === testimonials.length - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-700 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Container */}
            <div
              ref={containerRef}
              className="overflow-hidden"
            >
              <div className="flex transition-transform duration-300 ease-in-out">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8 mx-auto max-w-4xl">
                      <div className="flex flex-col md:flex-row gap-8 items-center">
                        {/* Image Column */}
                        <div className="w-full md:w-1/3">
                          <div className="relative">
                            <div className="aspect-square rounded-2xl overflow-hidden">
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {/* Decorative Quote Icon */}
                            <div className="absolute -top-4 -right-4 bg-blue-500 rounded-full p-3">
                              <Quote className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          {/* Company Logo */}
                          <div className="mt-4 flex justify-center">
                            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-600 rounded-full p-3">
                              <img
                                src={testimonial.companyLogo}
                                alt={testimonial.company}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Content Column */}
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                          <blockquote className="text-lg text-gray-600 dark:text-gray-300 mb-6 italic">
                            &quot;{testimonial.content}&quot;
                          </blockquote>
                          <div>
                            <h4 className="font-semibold text-xl mb-1">{testimonial.name}</h4>
                            <p className="text-gray-500 dark:text-gray-400">
                              {testimonial.role} at {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    scrollToTestimonial(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${index === currentIndex 
                      ? 'bg-blue-500 w-6' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;