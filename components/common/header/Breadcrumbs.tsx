'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

interface BreadcrumbItem {
  title: string;
  href: string;
}

interface BreadcrumbsProps {
  currentPage: string;
  parents?: BreadcrumbItem[];
}

export default function Breadcrumbs({ 
  currentPage,
  parents = []
}: BreadcrumbsProps) {
  const t = useTranslations('Common');

  return (
    <div className="page-title" data-aos="fade">
      <div className="container">
        <nav className="breadcrumbs">
          <ol>
            {/* Always show Home first */}
            <li>
              <Link href="/">{t('Home')}</Link>
            </li>
            
            {/* Dynamic parent paths */}
            {parents.map((parent, index) => (
              <li key={index}>
                <Link href={parent.href}>{t(parent.title)}</Link>
              </li>
            ))}
            
            {/* Current page */}
            <li className="current">
              {currentPage}
            </li>
          </ol>
        </nav>
        <h1>{currentPage}</h1>
      </div>
    </div>
  );
}