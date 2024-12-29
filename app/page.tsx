'use client';

import React, { useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Portfolio } from '@/components/sections/Portfolio';
import { Services } from '@/components/sections/Services';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/contact';
import { useScrollspy } from '@/hooks/useScrollspy';

export default function Home() {
  const activeSection = useScrollspy(['home', 'about', 'portfolio', 'services', 'testimonials', 'contact'], 100);


  
  // منع التمرير السلس عند تحميل الصفحة
  useEffect(() => {
    // إزالة class التمرير السلس
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    // إعادة تفعيل التمرير السلس بعد التحميل
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = 'smooth';
    }, 0);
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      
      {/* Main Content */}
      <div className="pt-16"> {/* إضافة padding لتعويض Header الثابت */}
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </div>

      <Footer />
    </>
  );
}