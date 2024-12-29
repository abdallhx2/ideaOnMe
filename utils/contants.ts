import { NavigationItem, Project, Service } from '@/types';
import { Code, Cog, Database, Palette, Smartphone, Terminal } from 'lucide-react';

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', path: '#home' },
  { id: 'about', label: 'About', path: '#about' },
  { id: 'portfolio', label: 'Portfolio', path: '#portfolio' },
  { id: 'services', label: 'Services', path: '#services' },
  { id: 'contact', label: 'Contact', path: '#contact' },
];



export const services: Service[] = [
  {
    id: 'web-dev',
    icon: Code,
    title: 'Web Development',
    description: 'Building responsive and performant web applications using modern technologies.',
  },
  {
    id: 'ui-ux',
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces that enhance user experience.',
  },
  {
    id: 'mobile-dev',
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with React Native.',
  },
  {
    id: 'backend-dev',
    icon: Database,
    title: 'Backend Development',
    description: 'Building robust and scalable server-side applications and APIs.',
  },
  {
    id: 'devops',
    icon: Terminal,
    title: 'DevOps',
    description: 'Setting up CI/CD pipelines and managing cloud infrastructure.',
  },
  {
    id: 'maintenance',
    icon: Cog,
    title: 'Maintenance',
    description: 'Providing ongoing support and maintenance for web applications.',
  }
];


export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'Github',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'Linkedin',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'Twitter',
  },
];

export const images = {
  portfolio: {
    project1: '/images/portfolio/p1.jpg',
    project2: '/images/portfolio/project2.jpg',
    project3: '/images/portfolio/project3.jpg',
  },
  about: {
    team: '/images/about/team.jpg',
    office: '/images/about/office.jpg',
  },
  hero: '/images/backgrounds/hero.jpg',
  logo: '/images/icons/logo.svg',
} as const;

export const categories = ['All', 'Web', 'Mobile', 'UI/UX'] as const;

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: images.portfolio.project1,
    category: 'Web',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '2',
    title: 'Social Media App',
    description: 'Mobile app for connecting creative professionals',
    image: images.portfolio.project2,
    category: 'Mobile',
    tags: ['React Native', 'Firebase', 'Redux'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '3',
    title: 'Dashboard Design',
    description: 'Modern dashboard interface for data analytics',
    image: images.portfolio.project3,
    category: 'UI/UX',
    tags: ['Figma', 'Tailwind CSS', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#'
  },
  {
    id: '4',
    title: 'Dashboard Design',
    description: 'Modern dashboard interface for data analytics',
    image: images.portfolio.project3,
    category: 'UI/UX',
    tags: ['Figma', 'Tailwind CSS', 'Chart.js'],
    githubUrl: '#',
    liveUrl: '#'
  }
  
];

export const skills = [
  { name: 'React & Next.js', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js & Express', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  
] as const;