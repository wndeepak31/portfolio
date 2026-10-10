"use client";
import { usePathname } from 'next/navigation';

export default function CanonicalLink() {
  const pathname = usePathname();
  // Format the path to avoid trailing slashes (e.g. /faq instead of /faq/)
  const formattedPath = pathname === '/' ? '' : pathname;
  const canonicalUrl = `https://www.apextechplus.com${formattedPath}`;
  
  return <link rel="canonical" href={canonicalUrl} />;
}
