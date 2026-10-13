import ContactClient from './ContactClient';
import BreadcrumbSchema from '../../components/BreadcrumbSchema';

export const metadata = {
  title: 'Contact Us For IT & Web Related Services - ApexTech+',
  description: 'Contact ApexTech+ for professional IT services, web development, custom software, and application solutions. Connect with our team to discuss your project requirements.',
  openGraph: {
    title: 'Contact Us For IT & Web Related Services - ApexTech+',
    description: 'Contact ApexTech+ for professional IT services, web development, custom software, and application solutions. Connect with our team to discuss your project requirements.',
    url: 'https://www.apextechplus.com/contact',
    siteName: 'ApexTech+',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us For IT & Web Related Services - ApexTech+',
    description: 'Contact ApexTech+ for professional IT services, web development, custom software, and application solutions. Connect with our team to discuss your project requirements.',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Contact Us', path: '/contact' }]} />
      <ContactClient />
    </>
  );
}
