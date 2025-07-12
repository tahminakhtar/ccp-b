import { createNavigation } from "next-intl/navigation";
import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'pt', 'bn'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  // The path to the locale files
  pathnames:{
    "/about": {
      "en": "/about",
      "pt": "/sobre",
      "bn": "/বিষয়ে"      
    },
  },
});
export type Locale = (typeof routing.locales)[number];