"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin, Mail } from 'lucide-react';

const PortfolioWebsite = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // إنشاء المراجع لجميع الأقسام
  const sectionRefs = {
    home: React.useRef(null),
    about: React.useRef(null),
    portfolio: React.useRef(null),
    services: React.useRef(null),
    testimonials: React.useRef(null),
    contact: React.useRef(null)
  };

  // عناصر التنقل
  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  // روابط التواصل الاجتماعي
  const socialLinks = [
    { Icon: Github, label: 'GitHub', url: '#' },
    { Icon: Linkedin, label: 'LinkedIn', url: '#' },
    { Icon: Mail, label: 'Email', url: 'mailto:example@example.com' }
  ];

  // تبديل الوضع المظلم
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // مراقب التقاطع للقسم النشط
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50% 0px',
        threshold: 0
      }
    );

    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  // وظيفة التمرير السلس
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false); // إغلاق القائمة المتنقلة بعد النقر
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* الرأس */}
        <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">Portfolio</div>
              
              {/* التنقل في سطح المكتب */}
              <div className="hidden md:flex items-center space-x-8">
                {navigationItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-blue-500'
                        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* تبديل السمة وقائمة الجوال */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Toggle dark mode"
                >
                  {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                </button>
                
                <button
                  className="md:hidden"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* التنقل في الجوال */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 py-4">
                {navigationItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </nav>
        </header>

        {/* المحتوى الرئيسي */}
        <main className="pt-20">
          {/* قسم البطل */}
          <section 
            ref={sectionRefs.home}
            id="home" 
            className="relative min-h-screen flex items-center justify-center"
          >
            {/* خلفية متحركة */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
              <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 50 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      width: `${Math.random() * 4 + 1}px`,
                      height: `${Math.random() * 4 + 1}px`,
                      animation: `float ${Math.random() * 10 + 5}s linear infinite`
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="text-center px-6">
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Creative Developer
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Bringing ideas to life through code and design
              </p>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                View Work
              </button>
            </div>
          </section>

          {/* قسم حول */}
          <section 
            ref={sectionRefs.about}
            id="about" 
            className="py-20 px-6"
          >
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="/api/placeholder/400/400"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-2xl" />
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold">
                    Hi, I'm <span className="text-blue-500">John Doe</span>
                  </h3>
                  <p className="text-lg">
                    I'm a passionate full-stack developer with over 5 years of experience
                    in creating beautiful and functional web applications. I specialize
                    in React, Node.js, and modern web technologies.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Skills</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          React & Next.js
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          Node.js & Express
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          UI/UX Design
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Experience</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          5+ Years Development
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          50+ Projects
                        </li>
                        <li className="flex items-center">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                          20+ Happy Clients
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                    Download CV
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* قسم المشاريع */}
          <section 
            ref={sectionRefs.portfolio}
            id="portfolio" 
            className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
          >
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">My Work</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((project) => (
                  <div
                    key={project}
                    className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
                  >
                    <div className="aspect-video">
                      <img
                        src={`/api/placeholder/600/400`}
                        alt={`Project ${project}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* الطبقة العلوية */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                        <p className="text-sm mb-4">
                          A brief description of the project and the technologies used.
                        </p>
                        <div className="flex space-x-4">
                          <button className="px-4 py-2 bg-blue-500 rounded-full text-sm hover:bg-blue-600 transition-colors">
                            View Details
                          </button>
                          <button className="px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
                            Live Demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* قسم الخدمات */}
          <section 
            ref={sectionRefs.services}
            id="services" 
            className="py-20 px-6"
          >
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Services</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Web Development',
                    description: 'Building responsive and performant web applications using modern technologies.',
                    icon: '🚀'
                  },
                  {
                    title: 'UI/UX Design',
                    description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
                    icon: '🎨'
                  },
                  {
                    title: 'Mobile Development',
                    description: 'Developing cross-platform mobile applications with React Native.',
                    icon: '📱'
                  },
                  {
                    title: 'API Development',
                    description: 'Building robust and scalable REST APIs for your applications.',
                    icon: '⚙️'
                  },
                  {
                    title: 'Consultation',
                    description: 'Technical consultation and architecture planning for your projects.',
                    icon: '💡'
                  },
                  {
                    title: 'Maintenance',
                    description: 'Ongoing support and maintenance for your web applications.',
                    icon: '🔧'
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section 
            ref={sectionRefs.testimonials}
            id="testimonials" 
            className="py-20 px-6 bg-gray-50 dark:bg-gray-800"
          >
            <div className="container mx-auto">
              <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Sarah Johnson',
                    role: 'CEO at TechStart',
                    content: 'Working with John was an absolute pleasure. His attention to detail and technical expertise exceeded our expectations.',
                    image: '/api/placeholder/100/100'
                  },
                  {
                    name: 'Michael Chen',
                    role: 'Product Manager',
                    content: 'John delivered our project on time and with exceptional quality. His communication throughout the process was outstanding.',
                    image: '/api/placeholder/100/100'
                  },
                  {
                    name: 'Emily Rodriguez',
                    role: 'Creative Director',
                    content: 'The website John built for us perfectly captures our brand identity. His design sensibility is truly remarkable.',
                    image: '/api/placeholder/100/100'
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{testimonial.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section 
            ref={sectionRefs.contact}
            id="contact" 
            className="py-20 px-6"
          >
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
              
              <div className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500"
                      placeholder="Project inquiry"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 rounded-lg border dark:bg-gray-600 dark:border-gray-500 h-32 resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Social Links */}
          <div className="fixed left-6 bottom-6 flex flex-col space-y-4">
            {socialLinks.map(({ Icon, label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* Footer */}
          <footer className="py-8 px-6 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} John Doe. All rights reserved.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default PortfolioWebsite;