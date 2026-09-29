"use client";
import { usePathname } from 'next/navigation';
import CTA from './CTA';

export default function ConditionalCTA() {
  const pathname = usePathname();
  
  // Hide the global CTA on the contact page because it's completely redundant
  if (pathname === '/contact') {
    return null;
  }
  
  return <CTA />;
}
