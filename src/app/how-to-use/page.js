import { permanentRedirect } from 'next/navigation';

export const metadata = {
  title: 'ApexTech+ | Elite Enterprise Web Architecture Agency',
  description: "Discover ApexTech+'s enterprise web architecture expertise, delivering scalable, secure, and high-performance digital solutions tailored to complex business requirements.",
  alternates: {
    canonical: '/how-to-work-with-us',
  },
};

export default function HowToUse() {
  permanentRedirect('/how-to-work-with-us');
}
