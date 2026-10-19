import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import CaseStudyModal from '../components/CaseStudyModal';
import ChatAssistant from '../components/ChatAssistant';

export const metadata = {
  title: {
    default: 'ZYNITH TECHNOLOGY — Building Intelligent Digital Experiences',
    template: '%s | ZYNITH TECHNOLOGY'
  },
  description: 'ZYNITH TECHNOLOGY is a premier custom software and AI engineering consultancy. We deliver scalable web apps, mobile solutions, cloud architecture, and intelligent enterprise systems.',
  keywords: [
    'Zynith Technology',
    'Custom Software Development',
    'Web Application Development',
    'Mobile App Development',
    'AI & Machine Learning',
    'Cloud Computing & DevOps',
    'UI/UX Design',
    'Enterprise Software Solutions',
    'QA Automation & Software Testing',
    'Dedicated Development Teams',
    'Digital Transformation Consulting'
  ],
  authors: [{ name: 'ZYNITH TECHNOLOGY Engineering' }],
  creator: 'ZYNITH TECHNOLOGY',
  publisher: 'ZYNITH TECHNOLOGY',
  metadataBase: new URL('https://zynithtechnology.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zynithtechnology.com',
    title: 'ZYNITH TECHNOLOGY — Building Intelligent Digital Experiences',
    description: 'Transforming businesses with intelligent digital experiences, custom software, and cutting-edge AI solutions.',
    siteName: 'ZYNITH TECHNOLOGY',
    images: [
      {
        url: '/assets/zynith-logo.svg',
        width: 1200,
        height: 630,
        alt: 'ZYNITH TECHNOLOGY Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ZYNITH TECHNOLOGY — Building Intelligent Digital Experiences',
    description: 'Transforming businesses with intelligent digital experiences, custom software, and cutting-edge AI solutions.',
    images: ['/assets/zynith-logo.svg']
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: '/assets/zynith-mark.svg',
    shortcut: '/assets/zynith-mark.svg',
    apple: '/assets/zynith-mark.svg'
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#001f3e'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col font-inter text-dark-blue-scopic bg-white selection:bg-cyan-scopic selection:text-white antialiased">
        <Header />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
        <ContactModal />
        <CaseStudyModal />
        <ChatAssistant />
      </body>
    </html>
  );
}
