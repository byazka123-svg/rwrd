
import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h3 className="text-base text-brand-orange font-bold tracking-wider uppercase">{subtitle}</h3>
      <h2 className="text-4xl md:text-5xl font-bold font-serif text-brand-green mt-2">{title}</h2>
    </div>
  );
};

export default SectionTitle;
