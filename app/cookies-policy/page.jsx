import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Cookies Policy',
  description: 'Understand how ZYNITH TECHNOLOGY uses cookies to ensure website security and optimal user experience.',
  openGraph: {
    title: 'Cookies Policy | ZYNITH TECHNOLOGY',
    url: 'https://zynithtechnology.com/cookies-policy',
  }
};

export default function CookiesPolicyPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="w-full bg-[#02122B] text-white py-14 px-5 mb-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Cookies Policy</h1>
          <p className="text-slate-300 text-sm">Last Updated: October 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 bg-white p-8 sm:p-12 rounded-3xl shadow-card-shadow border border-slate-100 text-slate-700 space-y-6 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-dark-blue-scopic">1. What Are Cookies?</h2>
        <p>
          Cookies are small text files stored on your browser or device by websites you visit. They are used to make web applications function efficiently, remember preferences, and provide analytical data to website operators.
        </p>

        <h2 className="text-xl font-bold text-dark-blue-scopic">2. Cookies We Use</h2>
        <ul className="list-disc pl-6 space-y-1.5">
          <li><strong>Essential Cookies:</strong> Required for fundamental site navigation, authentication, and security.</li>
          <li><strong>Performance & Analytics Cookies:</strong> Help us measure visitor interactions anonymously to optimize page speeds and user flows.</li>
          <li><strong>Functional Cookies:</strong> Remember your interface preferences, such as selected language or modal dismissal states.</li>
        </ul>

        <h2 className="text-xl font-bold text-dark-blue-scopic">3. Managing Cookie Preferences</h2>
        <p>
          You can adjust your browser settings to decline or delete cookies at any time. However, disabling essential cookies may impact certain interactive functionalities of our platform.
        </p>

        <div className="pt-6 border-t border-slate-100 text-center">
          <Link href="/" className="text-blue-600 font-semibold hover:underline">
            ← Return to ZYNITH TECHNOLOGY Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
