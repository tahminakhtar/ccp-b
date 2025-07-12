import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from '@/components/common/LocaleSwitcher';
 
import Image from "next/image";
import Link from 'next/link';

export default async function Home() {
  const home = await getTranslations('home');
  const about = await getTranslations('about');
  return (
    <>
      <h1>{home('title')}</h1>
      <LocaleSwitcher />
      {/* <Image src="/images/logo.png" alt="Logo" width={150} height={150} /> */}
      <Link href="/about">{about('title')}</Link>
    </>
  );
}
