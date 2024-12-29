import React from 'react';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '@/types';

type ProjectCardProps = Omit<Project, 'id'>;

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-2 py-1 text-xs bg-white/20 rounded-full">
    {label}
  </span>
);

const ProjectLink: React.FC<{
  href: string;
  icon: React.ReactNode;
  label: string;
}> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm hover:text-blue-400 transition-colors"
  >
    {icon}
    {label}
  </a>
);

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl,
}) => {
  return (
    <div className="group relative bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg">
      <div className="aspect-video relative overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={`${title} project thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            priority={false}
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {/* Project Info */}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm mb-4">{description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            
            {/* Links */}
            <div className="flex gap-4">
              {githubUrl && (
                <ProjectLink
                  href={githubUrl}
                  icon={<Github size={16} />}
                  label="Source"
                />
              )}
              {liveUrl && (
                <ProjectLink
                  href={liveUrl}
                  icon={<ExternalLink size={16} />}
                  label="Live Demo"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;