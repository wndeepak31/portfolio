import HomeClient from './HomeClient';
import BreadcrumbSchema from '../components/BreadcrumbSchema';

export const metadata = {
  title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
  description: 'Partner with ApexTech+ for enterprise web architecture solutions that prioritize scalability, performance, security, and reliable digital infrastructure.',
  openGraph: {
    title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
    description: 'Partner with ApexTech+ for enterprise web architecture solutions that prioritize scalability, performance, security, and reliable digital infrastructure.',
    url: 'https://www.apextechplus.com',
    siteName: 'ApexTech+',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
    description: 'Partner with ApexTech+ for enterprise web architecture solutions that prioritize scalability, performance, security, and reliable digital infrastructure.',
  },
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <>
      <BreadcrumbSchema items={[]} />
      <HomeClient />
    </>
  );
}
