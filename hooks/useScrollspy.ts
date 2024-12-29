import { useState, useEffect } from 'react';

export const useScrollspy = (sectionIds: string[], offset: number = 0) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const listener = () => {
      // الحصول على موقع التمرير الحالي
      const scrollPosition = window.scrollY + offset;

      // العثور على القسم النشط
      const section = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        return scrollPosition >= offsetTop && scrollPosition < (offsetTop + rect.height);
      });

      // تحديث القسم النشط
      if (section) {
        setActiveSection(section);
      }
    };

    // إضافة مستمع التمرير
    window.addEventListener('scroll', listener, { passive: true });
    listener(); // تشغيل أول مرة

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [sectionIds, offset]);

  return activeSection;
};