import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy & Data Protection',
  description: 'Learn how ZYNITH TECHNOLOGY collects, uses, and safeguards your personal data. Fully compliant with GDPR, CCPA, and global data privacy regulations.',
  openGraph: {
    title: 'Privacy Policy | ZYNITH TECHNOLOGY',
    url: 'https://zynithtechnology.com/privacy-policy',
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen pt-28 pb-20">
      <div className="w-full bg-[#02122B] text-white py-14 px-5 mb-14">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">Privacy Policy</h1>
          <p className="text-slate-300 text-sm">Last Updated: October 2026</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-8 bg-white p-8 sm:p-12 rounded-3xl shadow-card-shadow border border-slate-100 text-slate-700 space-y-6 text-sm leading-relaxed">
        <h2 className="text-xl font-bold text-dark-blue-scopic">1. Introduction</h2>
        <p>
          ZYNITH TECHNOLOGY ("we", "our", or "us") is dedicated to protecting the privacy and confidentiality of individuals who visit our website or interact with our software consulting services. This Privacy Policy details our practices concerning data collection, usage, and protection.
        </p>

        <h2 className="text-xl font-bold text-dark-blue-scopic">2. Information We Collect</h2>
        <p>
          We only collect personal information that you voluntarily provide to us when requesting a project consultation, subscribing to technical publications, or submitting employment applications. This may include your full name, work email address, company name, telephone number, and technical project specifications.
        </p>

        <h2 className="text-xl font-bold text-dark-blue-scopic">3. How We Use Your Information</h2>
        <p>
          Information collected is utilized exclusively for:
        </p>
        <ul className="list-disc pl-6 space-y-1.5">
          <li>Evaluating technical project requirements and delivering customized feasibility proposals.</li>
          <li>Communicating directly with you regarding your service requests and engineering inquiries.</li>
          <li>Ensuring contractual and compliance adherence, including Non-Disclosure Agreements (NDAs).</li>
          <li>Improving our website performance, security, and user experience.</li>
        </ul>

        <h2 className="text-xl font-bold text-dark-blue-scopic">4. Confidentiality & Non-Disclosure</h2>
        <p>
          We treat all proprietary architectural descriptions, source code repositories, and business workflows shared with us as strictly confidential under bilateral NDAs. We do not sell, rent, or lease client data to third parties.
        </p>

        <h2 className="text-xl font-bold text-dark-blue-scopic">5. Data Security</h2>
        <p>
          We maintain institutional administrative, technical, and physical safeguards designed to protect personal data against accidental, unlawful, or unauthorized destruction, loss, alteration, access, or disclosure, in alignment with ISO 27001 and SOC 2 security protocols.
        </p>

        <h2 className="text-xl font-bold text-dark-blue-scopic">6. Contacting Us</h2>
        <p>
          If you have any questions or concerns regarding this Privacy Policy or our data handling practices, please contact our Data Protection Officer at: <a href="mailto:privacy@zynithtechnology.com" className="text-blue-600 font-semibold hover:underline">privacy@zynithtechnology.com</a>.
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
