import { getTranslations } from 'next-intl/server';
import React from 'react';

const AboutPage: React.FC = async () => {
  const t_about = await getTranslations('about');
  return (
    <div>
      <h1>{t_about('title')}</h1>
      <p>{t_about('description')}</p>
    </div>
  );
};

export default AboutPage;