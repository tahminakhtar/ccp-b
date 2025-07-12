"use client";

import { Locale, routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { ReactNode } from "react";
import { usePathname, useRouter } from '@/i18n/navigation';

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
};

export default function LocaleSwitcherSelect({ defaultValue, label }: Props) {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(nextLocale: string) {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale }
    );
  }

  return (
    <>
    <select defaultValue={defaultValue} onChange={(e) => onSelectChange(e.target.value)} className="h-8 w-[80px] border-none bg-transparent focus:ring-0 focus:ring-offset-0">
      <option value="" disabled>
        {label}
      </option>
      {routing.locales.map((locale) => (
        <option key={locale} value={locale} >
          {locale.toUpperCase()}
        </option>
      ))}
    </select>
    </>
   
  );
}