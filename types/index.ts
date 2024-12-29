import { categories } from "@/utils/contants";
import { LucideIcon } from "lucide-react";

// النوع الأساسي للتنقل
export type NavigationItem = {
    id: string;
    label: string;
    path: string;
  };
  
  export type Category = typeof categories[number];

  export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    category: Category | string;
    tags: string[];
    githubUrl?: string;
    liveUrl?: string;
  }
  
  export interface Service {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
  }
  
  export type Testimonial = {
    id: string;
    name: string;
    role: string;
    content: string;
    image: string;
  };