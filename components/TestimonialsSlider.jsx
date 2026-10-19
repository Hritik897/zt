'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    quote: "The team delivered beyond expectations. Their deep technical grasp of artificial intelligence and responsive UI design resulted in a platform that doubled our user retention within three months. Communication was proactive, transparent, and flawless.",
    name: "Angela DiMarco",
    title: "CEO, FindUniquelyU.com",
    initials: "AD",
    bg: "bg-blue-100 text-blue-600"
  },
  {
    quote: "Building cloud PACS radiology tools requires surgical precision and unwavering compliance. Their engineering architects mastered WebGL and DICOM standards with remarkable speed. They truly function as our proprietary CTO team.",
    name: "Josh Polster",
    title: "CEO, Mediphany",
    initials: "JP",
    bg: "bg-emerald-100 text-emerald-600"
  },
  {
    quote: "Working with ZYNITH TECHNOLOGY has been an absolute game changer for our orthodontic software products. Their dedicated development teams are disciplined, communicative, and deliver robust code on schedule without exception.",
    name: "Steven Gardner",
    title: "President, Orthoselect LLC",
    initials: "SG",
    bg: "bg-purple-100 text-purple-600"
  },
  {
    quote: "They helped us rethink our algorithmic pipeline from the ground up. Our platform latency dropped by 70%, and user satisfaction reached an all-time high. I recommend them unconditionally for mission-critical software engineering.",
    name: "Paul Geller",
    title: "Founder, Thankster",
    initials: "PG",
    bg: "bg-amber-100 text-amber-600"
  }
];

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1));
  };

  return (
    <div className="w-full">
      <div className="flex justify-end items-center gap-3 mb-6">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition shadow-sm cursor-pointer"
          aria-label="Previous review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-slate-700 transition shadow-sm cursor-pointer"
          aria-label="Next review"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.slice(0, 3).map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                ★★★★★
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-8">
                "{item.quote}"
              </p>
            </div>
            <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
              <div className={`w-12 h-12 rounded-full ${item.bg} font-bold flex items-center justify-center text-lg`}>
                {item.initials}
              </div>
              <div>
                <h4 className="font-bold text-dark-blue-scopic text-base">{item.name}</h4>
                <p className="text-xs text-slate-500 font-medium">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
