'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState(null);

  // Projects slide index
  const [projectIndex, setProjectIndex] = useState(0);

  // Services slide index
  const [servicesIndex, setServicesIndex] = useState(0);

  // Marketing slide index
  const [marketingIndex, setMarketingIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const openContact = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      const modal = document.getElementById('contact-modal');
      if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  };

  // Bespoke services data
  const solutions = [
    {
      title: 'Custom Software Development',
      desc: 'Transform your unique ideas into tailored software solutions, expertly developed to address challenges across diverse industries and deliver results.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      link: '/services'
    },
    {
      title: 'AI Development',
      desc: 'Leverage AI-powered solutions to provide highly personalized customer experiences, enhance business processes, and enable data-driven decision-making.',
      icon: '/static/image-4-63db7d350e3cd67f28ca8b33dcf1cef2.svg',
      link: '/ai-development-services'
    },
    {
      title: 'Cloud Solutions',
      desc: 'Effortlessly deploy, host, and manage your cloud accounts with enhanced security for your digital assets, all while enjoying greater flexibility and scalability.',
      icon: '/static/aws-1-190df557f9928077bad72632cdce1100.svg',
      link: '/cloud-services'
    },
    {
      title: 'Web Development',
      desc: 'Experience cutting-edge web solutions, including specialized web apps, stunning websites, and responsive designs, providing seamless functionality and capabilities to meet diverse needs.',
      icon: '/static/image-4-63db7d350e3cd67f28ca8b33dcf1cef2.svg',
      link: '/web-development'
    },
    {
      title: 'UI/UX Services',
      desc: 'Our UI/UX design experts meticulously craft seamless, user-centric interfaces to deliver a seamless, intuitive, and memorable user experience.',
      icon: '/static/image-2-98def466ffad6bb96a80307b6c6de166.svg',
      link: '/design'
    }
  ];

  // Featured projects
  const projects = [
    {
      title: 'MD Ally',
      desc: 'An advanced 911 eco system that offers real-time support for non-critical patients.',
      image: '/static/md-ally-new-75b67c05461a186e8ad66ce00b769896.webp',
      link: '/case-studies'
    },
    {
      title: 'Codeaid',
      desc: 'A powerful testing platform that assesses developers against realistic challenges.',
      image: '/static/codeaid-new-3d3d79dcb28ca88d9c36345dd1e6bd5f.webp',
      link: '/case-studies'
    },
    {
      title: 'Mediphany',
      desc: 'Robust radiology imaging software that helps patients read their MRI and CTI scans.',
      image: '/static/mediphany-new-63647b1eedd5451afebd628ee0cece34.webp',
      link: '/case-studies'
    },
    {
      title: 'ShadeWave',
      desc: 'A shade-matching tool that refines dental color mapping with precision and ease.',
      image: '/static/shadewave-new-d1b7a18ddff2990e7742e7f7a72edf70.webp',
      link: '/case-studies'
    },
    {
      title: 'Akillion',
      desc: 'A user-friendly and intuitive interface that simplifies complex tasks',
      image: '/static/Akillion-a884273317be9e8f62d3ba681edd405c.webp',
      link: '/portfolio'
    },
    {
      title: 'ECS Clinical',
      desc: 'The cloud-based app bridging healthcare communication with secure, enterprise-level messaging.',
      image: '/static/ecs-clinical-new-2d9317286faef0d9b48bcb943553a656.webp',
      link: '/portfolio'
    }
  ];

  // Marketing services
  const marketingServices = [
    {
      title: 'SEO Services',
      desc: 'Maximize your visibility with our expert SEO strategies, including thorough keyword research and on-page optimization.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      link: '/services'
    },
    {
      title: 'Email Marketing',
      desc: 'Engage your audience with tailored email marketing campaigns focused on nurturing leads and building lasting customer relationships.',
      icon: '/static/image-2-98def466ffad6bb96a80307b6c6de166.svg',
      link: '/services'
    },
    {
      title: 'Paid Search',
      desc: 'Drive targeted traffic and achieve measurable results with our expertly managed, results-focused paid search campaigns.',
      icon: '/static/image-4-63db7d350e3cd67f28ca8b33dcf1cef2.svg',
      link: '/services'
    },
    {
      title: 'Lead Generation',
      desc: 'Fuel your sales growth with our dynamic lead generation solutions, targeting the right audience on the right platforms for maximized conversions.',
      icon: '/static/image-4-63db7d350e3cd67f28ca8b33dcf1cef2.svg',
      link: '/services'
    },
    {
      title: 'GEO Services',
      desc: 'Optimize your brand for greater visibility on AI platforms with solutions designed for stronger AI-driven discovery and long-term digital relevance.',
      icon: '/static/image-1-18cf23f6aa2a7f33e6520ca15b651ca0.svg',
      link: '/services'
    }
  ];

  // Testimonials
  const testimonials = [
    {
      quote: "ZYNITH TECHNOLOGY is an amazing team. They're talented and responsive, and they always come to the table with brilliant ideas.",
      name: 'Angela DiMarco',
      role: 'CEO, FindUniquelyU.com'
    },
    {
      quote: "They were accommodating of the changes in the scope and flexible in meeting our vision for the final product.",
      name: 'Josh Polster',
      role: 'CEO, Mediphany'
    },
    {
      quote: "It's a genuine partnership, and we like their hard work.",
      name: 'James Kazakavage',
      role: 'Marketing Director, KidsTale Playgrounds'
    },
    {
      quote: "We're organically ranking for many relevant industry key words and are actively working to build domain authority.",
      name: 'Vincent Michaels',
      role: 'Company Owner, Houston Pump & Gear'
    },
    {
      quote: "ZYNITH TECHNOLOGY is very flexible and presents high-level expertise at a reasonable cost.",
      name: 'Paul Geller',
      role: 'Founder, Thankster'
    },
    {
      quote: "They've been able to take on just about anything I throw at them.",
      name: 'Eryn Hardwick',
      role: 'CEO, Homegrown Nursery'
    },
    {
      quote: "They hold their team members to a very high standard, which has been very valuable to us.",
      name: 'Steven Gardner',
      role: 'President, Orthoselect LLC'
    }
  ];

  // FAQs
  const faqs = [
    {
      q: 'Do you offer custom software development solutions?',
      a: "Of course! Custom software solutions are what we live and breathe. Our team is dedicated to crafting solutions that perfectly fit each of our clients' specific needs, ensuring optimal functionality and alignment with business goals."
    },
    {
      q: 'How do you ensure the security of the software you develop?',
      a: 'Ensuring software security is a top priority for us. We employ stringent best practices and up-to-date protocols in our development process. Each piece of software undergoes rigorous testing to safeguard against vulnerabilities.'
    },
    {
      q: 'Can you help with both front-end and back-end development?',
      a: 'Indeed, we can. We have experts in both back-end and front-end development, allowing us to deliver a holistic approach that ensures a smooth, efficient, and integrated software solution.'
    },
    {
      q: 'What is your pricing structure?',
      a: 'Our pricing structure is designed to cater to the diverse needs of our clients. We primarily operate on an hourly rate basis. For managed projects, we provide a detailed estimation breakdown that includes the working hours and a blended hourly rate for the entire team involved. For staff augmentation, the hourly rates are determined based on individual seniority and their specific tech stack expertise, ensuring transparency and fairness in our pricing.'
    },
    {
      q: 'Can you integrate third-party APIs or services into the software?',
      a: 'Certainly. Integration of third-party APIs or services is something we handle routinely. Our team is adept at seamlessly incorporating various services to enhance the functionality and efficiency of your software.'
    },
    {
      q: 'Do you offer any post-launch marketing or promotion services?',
      a: "Yes, we do. Beyond software development, we have a dedicated marketing team that is ready to assist you with post-launch marketing and promotion. Our specialists can help strategize and implement effective marketing campaigns to boost your product's visibility and reach to your target audience."
    },
    {
      q: 'What AI software development services do you offer?',
      a: 'We offer a range of custom AI development services, including AI strategic consulting, generative AI, machine learning, ChatGPT integration, and more.'
    },
    {
      q: 'Why choose us for your AI solutions?',
      a: "As a leading AI development company, we craft AI solutions that embrace the latest tech, solve unique challenges, and fuel growth. Our team's not afraid to push boundaries, delivering smarter, future-ready solutions that set you apart."
    }
  ];

  return (
    <>
      {/* =========================================================================
           SECTION 0: HERO SECTION (Pixel-Perfect Match to Scopic)
           ========================================================================= */}
      <section className="w-full relative font-inter overflow-hidden bg-[#02122B]">
        {/* Background Desktop */}
        <div className="hidden md:block w-full h-dvh">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            alt="Hero Background"
            src="/static/hero-background-2x-5613b4a8a4fbcdb26102a56ae6fae6af.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Background Mobile */}
        <div className="block md:hidden w-full h-dvh">
          <img
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            alt="Hero Background"
            src="/static/hero-background-2x-5613b4a8a4fbcdb26102a56ae6fae6af.webp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content Overlay */}
        <div className="w-full h-full absolute top-0 left-0">
          <div className="w-full max-w-7xl mx-auto h-full px-6 sm:px-10">
            <div className="flex justify-center items-center w-full h-full">
              <div className="w-full md:w-1/2 flex flex-col items-start pt-20 md:pt-0">
                <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold text-left mb-6 md:mb-9 leading-tight">
                  Global software development company crafting secure,<br />AI-enabled solutions
                </h1>
                <p className="text-white text-base sm:text-lg md:text-2xl text-left mb-10 md:mb-14 leading-relaxed font-normal">
                  As a top software development company, ZYNITH TECHNOLOGY builds smart solutions by merging custom software development with AI innovation to fuel business growth.
                </p>
                <div className="flex justify-center md:justify-start w-full">
                  <button
                    onClick={openContact}
                    className="bg-green-scopic text-white font-bold px-14 sm:px-16 py-4 rounded-full w-full md:w-auto flex justify-center items-center cursor-pointer shadow-lg hover:scale-105 transition-transform duration-300"
                  >
                    Let's Talk
                  </button>
                </div>
              </div>
              <div className="w-full md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        </div>

        {/* Curved Bottom Divider SVG */}
        <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
          <svg
            width="100%"
            height="56px"
            viewBox="0 0 1280 140"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[15px] lg:h-[56px] object-fill transform scale-y-[-1]"
          >
            <g fill="#02122B">
              <path d="M640 140C286.54 140 0 0 0 0h1280S993.46 140 640 140z" />
            </g>
          </svg>
        </div>
      </section>


      {/* =========================================================================
           SECTION 1: 20 YEARS / MILESTONES (Pixel-Perfect Match to Scopic)
           ========================================================================= */}
      <section className="w-full relative overflow-hidden font-inter py-10 pb-20 top-[-1px] bg-[#02122B]">
        <div className="relative w-full max-w-7xl mx-auto px-5 md:px-10">
          <div className="flex flex-col gap-14">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
              <div className="flex flex-col gap-8">
                <div className="bg-white/10 rounded-full px-3 py-2 w-fit">
                  <span className="text-yellow-scopic text-base tracking-[0.2em] font-semibold">2006 - 2026</span>
                </div>
                
                <h2 className="text-[30px] lg:text-[38px] font-medium leading-[1.2] text-white">
                  20 Years of Building Software That <span className="text-yellow-scopic">Drives Growth</span>
                </h2>

                <div className="text-base text-white leading-[1.6] space-y-2.5">
                  <p>
                    What began with fewer than five people has grown into a global team spanning <span className="text-yellow-scopic font-semibold">90+ countries</span> and <span className="text-yellow-scopic font-semibold">1,500+ successful projects</span> delivered.
                  </p>
                  <p>
                    For two decades, ZYNITH TECHNOLOGY has helped businesses innovate, scale, and solve complex challenges through custom software development, digital marketing, and emerging technologies.
                  </p>
                  <p>
                    This milestone reflects the people, partnerships, and ideas that shaped our journey — and the exciting future ahead.
                  </p>
                </div>

                <div>
                  <Link
                    href="/about-us"
                    className="flex lg:inline-flex items-center justify-center bg-yellow-scopic text-dark-blue-scopic font-semibold px-6 py-[17px] rounded-full hover:opacity-90 transition duration-300"
                  >
                    Learn About Our Journey
                  </Link>
                </div>

                {/* Mobile graphic */}
                <img
                  loading="lazy"
                  alt="20 Years at ZYNITH TECHNOLOGY"
                  src="/static/image-78-20years.webp"
                  className="w-full lg:hidden rounded-lg mt-4"
                />
              </div>

              {/* Desktop graphic */}
              <div className="hidden lg:flex justify-center items-center">
                <img
                  loading="lazy"
                  alt="20 Years at ZYNITH TECHNOLOGY"
                  src="/static/image-78-20years.webp"
                  className="w-full max-w-lg object-contain"
                />
              </div>
            </div>

            {/* Desktop Metrics Bar */}
            <div className="hidden lg:flex items-center justify-between border-t border-white/10 pt-6 h-[100px]">
              <div className="flex items-center gap-2.5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 32 32" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m16 4V3m-19 8h22M5 21h22M5 7h22a2 2 0 012 2v18a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
                </svg>
                <div>
                  <p className="font-bold text-4xl text-white leading-tight">20+</p>
                  <p className="text-[13px] text-white/70">Years in Business</p>
                </div>
              </div>
              <div className="w-px h-[66px] bg-white/20"></div>

              <div className="flex items-center gap-2.5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-bold text-4xl text-white leading-tight">1,500+</p>
                  <p className="text-[13px] text-white/70">Projects Delivered</p>
                </div>
              </div>
              <div className="w-px h-[66px] bg-white/20"></div>

              <div className="flex items-center gap-2.5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-bold text-4xl text-white leading-tight">90+</p>
                  <p className="text-[13px] text-white/70">Countries</p>
                </div>
              </div>
              <div className="w-px h-[66px] bg-white/20"></div>

              <div className="flex items-center gap-2.5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <p className="font-bold text-4xl text-white leading-tight">1,000+</p>
                  <p className="text-[13px] text-white/70">People Involved</p>
                </div>
              </div>
              <div className="w-px h-[66px] bg-white/20"></div>

              <div className="flex items-center gap-2.5">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <div>
                  <p className="font-bold text-4xl text-white leading-tight">4.5</p>
                  <p className="text-[13px] text-white/70">Glassdoor Rating</p>
                </div>
              </div>
            </div>

            {/* Mobile Metrics Grid */}
            <div className="lg:hidden border-t border-white/10 pt-6 grid grid-cols-2 gap-y-6">
              <div>
                <p className="font-bold text-4xl text-white leading-tight">20+</p>
                <p className="text-[13px] text-white/70">Years in Business</p>
              </div>
              <div>
                <p className="font-bold text-4xl text-white leading-tight">1,500+</p>
                <p className="text-[13px] text-white/70">Projects Delivered</p>
              </div>
              <div>
                <p className="font-bold text-4xl text-white leading-tight">90+</p>
                <p className="text-[13px] text-white/70">Countries</p>
              </div>
              <div>
                <p className="font-bold text-4xl text-white leading-tight">1,000+</p>
                <p className="text-[13px] text-white/70">People Involved</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
           SECTION 2: BESPOKE SOFTWARE SOLUTIONS (5 Authentic Cards with -mt-14)
           ========================================================================= */}
      <section className="py-16 w-full bg-white">
        <h2 className="text-3xl sm:text-4.5xl text-dark-blue-scopic text-center font-bold mb-6">
          Our Bespoke Software Solutions
        </h2>
        <p className="text-center text-dark-blue-scopic mb-5 px-5 md:px-20 lg:px-64 xl:px-96 leading-relaxed">
          Your vision is unique, and your software should be too. Our bespoke software development services and custom AI solutions push the limits of innovation. We craft impact-driven, AI-enabled software solutions that help companies scale smarter, achieve measurable growth, and stay ahead in the modern business world.
        </p>
        <p className="text-center text-dark-blue-scopic mb-20 px-5 md:px-20 lg:px-64 xl:px-96 leading-relaxed">
          With our services, you can achieve the perfect unity between your vision, your audience, and the rapidly evolving digital world.
        </p>

        {/* 5 Cards Row */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-10">
            {solutions.map((item, idx) => (
              <div key={idx} className="bg-white px-4 py-6 rounded-2xl shadow-card-shadow flex flex-col justify-between border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="flex justify-center -mt-14 mb-3">
                    <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-tr from-[#0068C8] to-[#008EDE] p-3 shadow-md flex items-center justify-center">
                      <img loading="lazy" alt={item.title} className="w-8 h-8 object-contain filter invert" src={item.icon} />
                    </div>
                  </div>
                  <h3 className="text-dark-blue-scopic text-lg text-center font-bold mb-3 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-dark-blue-scopic text-center mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex justify-center items-end pt-2">
                  <Link
                    href={item.link}
                    className="bg-white border text-green-scopic-dark border-green-scopic-dark px-7 py-2.5 rounded-full text-xs font-bold cursor-pointer hover:bg-green-scopic hover:text-white transition duration-300"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setServicesIndex((prev) => Math.max(0, prev - 1))}
              className="w-12 h-12 rounded-full bg-light-blue-scopic flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              aria-label="Previous service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button
              onClick={() => setServicesIndex((prev) => Math.min(solutions.length - 1, prev + 1))}
              className="w-12 h-12 rounded-full bg-light-blue-scopic flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              aria-label="Next service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>


      {/* =========================================================================
           SECTION 3: CLIENTS / TRUSTED BY LEADING COMPANIES
           ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6 md:px-10">
        <h6 className="text-1.5xl font-bold text-blue-scopic text-center mb-2">Our Clients</h6>
        <h2 className="text-3xl sm:text-4.5xl text-dark-blue-scopic text-center font-bold mb-10">
          Trusted by Leading Companies
        </h2>
        <div className="overflow-hidden py-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <span className="text-2xl font-black text-[#35CFDF] tracking-wider">akillion</span>
            </div>
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <img loading="lazy" alt="McMillan" src="/static/mc-millan-ffab4f7058601255223eddcfa4d0e81a.svg" className="max-h-10 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <span className="text-2xl font-bold text-[#2AAAE2]">Mediphany</span>
            </div>
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <span className="text-2xl font-extrabold text-[#0F4466] tracking-widest">PURECARS</span>
            </div>
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <img loading="lazy" alt="Xerxes" src="/static/xerxes-6548dd8bee3fe9f8d6e6a884ff30ba49.svg" className="max-h-10 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <span className="text-2xl font-bold text-[#1B4F85]">KL OWEN</span>
            </div>
            <div className="flex-shrink-0 flex justify-center items-center h-12">
              <img loading="lazy" alt="Ortho Select" src="/static/ortho-select-a3de061d550827f25ebb591c84557d27.webp" className="max-h-10 w-auto object-contain" />
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
           SECTION 4: PROJECTS WE ARE PROUD OF (2 Cards Side-by-Side as in Screenshot)
           ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto my-20 px-4 sm:px-6 md:px-10">
        <h6 className="text-1.5xl font-bold text-blue-scopic text-center mb-2">Projects</h6>
        <h2 className="text-3xl sm:text-4.5xl text-dark-blue-scopic text-center font-bold mb-4">
          Projects We Are Proud Of
        </h2>
        <p className="text-center text-dark-blue-scopic px-6 lg:px-60 mb-14 leading-relaxed">
          From Boston, USA, and the rest of the world, ZYNITH TECHNOLOGY has been the all-in-one software development company helping small to midsize businesses pivot towards long-lasting success.
        </p>

        {/* Exactly 2 featured side-by-side cards */}
        <div className="w-full mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: MD Ally */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  loading="lazy"
                  alt="MD Ally"
                  src={projects[projectIndex % projects.length].image}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-dark-blue-scopic text-xl text-center font-bold mb-2">
                {projects[projectIndex % projects.length].title}
              </h3>
              <p className="text-xs text-center text-slate-600 mb-6 px-4 flex-grow">
                {projects[projectIndex % projects.length].desc}
              </p>
              <div className="flex justify-center pb-4">
                <Link
                  href="/case-studies"
                  className="bg-transparent border border-green-scopic-dark text-green-scopic-dark px-6 py-2 rounded-full text-xs font-bold hover:bg-green-scopic hover:text-white transition duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>

            {/* Card 2: Codeaid */}
            <div className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  loading="lazy"
                  alt="Codeaid"
                  src={projects[(projectIndex + 1) % projects.length].image}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <h3 className="text-dark-blue-scopic text-xl text-center font-bold mb-2">
                {projects[(projectIndex + 1) % projects.length].title}
              </h3>
              <p className="text-xs text-center text-slate-600 mb-6 px-4 flex-grow">
                {projects[(projectIndex + 1) % projects.length].desc}
              </p>
              <div className="flex justify-center pb-4">
                <Link
                  href="/case-studies"
                  className="bg-transparent border border-green-scopic-dark text-green-scopic-dark px-6 py-2 rounded-full text-xs font-bold hover:bg-green-scopic hover:text-white transition duration-300"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center mt-10 space-x-6">
            <button
              onClick={() => setProjectIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1))}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#175bbb] to-[#0796de] flex items-center justify-center cursor-pointer text-white shadow-md hover:opacity-90"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              onClick={() => setProjectIndex((prev) => (prev + 1) % projects.length)}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#175bbb] to-[#0796de] flex items-center justify-center cursor-pointer text-white shadow-md hover:opacity-90"
              aria-label="Next project"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Green CTA Pill Button */}
        <div className="flex justify-center mt-8">
          <Link
            className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-16 py-4 rounded-full transition duration-300 shadow-lg hover:scale-105"
            href="/portfolio"
          >
            View our Portfolio
          </Link>
        </div>
      </section>


      {/* =========================================================================
           SECTION 5: DIGITAL MARKETING SOLUTIONS / ZYNITH STUDIOS
           ========================================================================= */}
      <section className="w-full max-w-7xl mx-auto my-24 px-4 md:px-10">
        {/* Brand Logo at Top */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <img src="/assets/zynith-mark.svg" alt="ZYNITH Studios" className="h-10 w-10 object-contain" />
            <span className="text-2xl font-black text-dark-blue-scopic tracking-wide">ZYNITH Studios</span>
          </div>
        </div>

        <h6 className="text-1.5xl font-bold text-blue-scopic text-center mb-2">Digital Marketing Solutions</h6>
        <h2 className="text-3xl sm:text-4.5xl text-dark-blue-scopic text-center font-bold mb-4 leading-tight">
          The marketing services you need.<br className="hidden sm:inline" />
          The results you deserve.
        </h2>
        <p className="text-sm text-center text-dark-blue-scopic px-6 md:px-60 mb-16 leading-relaxed">
          Our digital marketing team at ZYNITH Studios ensures that your brand-new product or service doesn't go unnoticed. By combining creative solutions with strategic insight, we bring your vision to life while capturing the attention it deserves in the digital sphere. Visit our site to learn how our services can help you achieve long-term growth.
        </p>

        {/* 5 Cards Row */}
        <div className="w-full mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-10">
            {marketingServices.map((item, idx) => (
              <div key={idx} className="bg-white px-4 py-6 rounded-2xl shadow-card-shadow flex flex-col justify-between border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
                <div>
                  <div className="flex justify-center -mt-14 mb-3">
                    <div className="w-[70px] h-[70px] rounded-full bg-gradient-to-tr from-[#0068C8] to-[#008EDE] p-3 shadow-md flex items-center justify-center">
                      <img loading="lazy" alt={item.title} className="w-8 h-8 object-contain filter invert" src={item.icon} />
                    </div>
                  </div>
                  <h3 className="text-dark-blue-scopic text-lg text-center font-bold mb-3 mt-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-dark-blue-scopic text-center mb-6 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="flex justify-center items-end pt-2">
                  <Link
                    href={item.link}
                    className="text-blue-scopic font-bold text-xs hover:underline cursor-pointer"
                  >
                    Explore more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-3 mb-10">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setMarketingIndex((prev) => Math.max(0, prev - 1))}
              className="w-12 h-12 rounded-full bg-light-blue-scopic flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              aria-label="Previous marketing service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button
              onClick={() => setMarketingIndex((prev) => Math.min(marketingServices.length - 1, prev + 1))}
              className="w-12 h-12 rounded-full bg-blue-scopic flex items-center justify-center hover:opacity-80 transition cursor-pointer"
              aria-label="Next marketing service"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Green Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-16 py-4 rounded-full transition duration-300 shadow-lg hover:scale-105"
          >
            View all Marketing Services
          </Link>
        </div>
      </section>


      {/* =========================================================================
           SECTION 6: INDUSTRIES (2 Rows x 4 Columns Photo Cards as in Screenshot)
           ========================================================================= */}
      <section className="zt-industries-section w-full mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-5 mb-12">
          <h6 className="text-1.5xl font-bold text-blue-scopic text-center mb-2">Industries</h6>
          <h2 className="text-3xl sm:text-4.5xl text-dark-blue-scopic text-center font-bold mb-4">
            Your Industry, Empowered by Custom Solutions
          </h2>
          <p className="text-center text-dark-blue-scopic px-6 md:px-60 mb-5 leading-relaxed">
            As a team of seasoned software development experts, we have a rich history of partnering with businesses from various sectors. Our deep understanding of the distinct challenges and intricacies of each industry ensures we tailor our solutions to your business needs.
          </p>
          <p className="text-center text-dark-blue-scopic px-6 md:px-60 mb-8 leading-relaxed">
            Some of the key industries we've worked with include:
          </p>
        </div>

        {/* 8 Photo Cards in 2 Rows of 4 Columns */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* 1. Medical */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Medical"
                src="/static/4f62e9ab3a19a3035725cb8d8d85695c/90089/medical.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.22)] to-[rgba(0,122,255,0.78)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/healthcare" className="text-2xl font-bold hover:underline">
                    Medical
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Finance */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Finance"
                src="/static/05d7c2bd64b765e8deb601a1ca47a5d9/90089/finance.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.22)] to-[rgba(0,97,255,0.45)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/finance" className="text-2xl font-bold hover:underline">
                    Finance
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Trading */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Trading"
                src="/static/fa9c5b8e46552045197de1da79acbc9b/90089/trading.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.51)] to-[rgba(0,137,216,0.66)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/trading" className="text-2xl font-bold hover:underline">
                    Trading
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Manufacturing */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Manufacturing"
                src="/static/5190432f5bdc252eacf87dcae140a970/90089/manufacturing.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.38)] to-[rgba(0,107,201,0.69)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/manufacturing" className="text-2xl font-bold hover:underline">
                    Manufacturing
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Entertainment */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Entertainment"
                src="/static/020aae6c8b67ec7690d77b7c40e132d7/90089/entertainment.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.22)] to-[rgba(0,122,255,0.78)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/entertainment" className="text-2xl font-bold hover:underline">
                    Entertainment
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Fitness */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Fitness"
                src="/static/cbb6236ed6a17c6d80f91acb4eece75b/90089/fitness.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.51)] to-[rgba(0,137,216,0.66)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/fitness" className="text-2xl font-bold hover:underline">
                    Fitness
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. Education */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Education"
                src="/static/43a3eccb2908c1f651e5d3f21f3d7520/90089/education.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.38)] to-[rgba(0,107,201,0.69)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/education" className="text-2xl font-bold hover:underline">
                    Education
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Retail & E-Commerce */}
            <div className="relative aspect-square rounded-xl overflow-hidden group shadow-md cursor-pointer">
              <img
                loading="lazy"
                alt="Retail"
                src="/static/4f62e9ab3a19a3035725cb8d8d85695c/90089/medical.jpg"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter hue-rotate-180"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,0,0,0.45)] to-[rgba(0,87,255,0.7)] p-6 flex items-end">
                <div className="text-white flex w-full justify-between items-center">
                  <Link href="/solutions/retail" className="text-2xl font-bold hover:underline">
                    Retail
                  </Link>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
           SECTION 7: ABOUT US / MEET ZYNITH TECHNOLOGY (Beach Photo from Screenshot)
           ========================================================================= */}
      <section className="zt-about-us-section w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-5 lg:px-20 items-center">
        <div>
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-100">
            <img
              loading="lazy"
              alt="Meet ZYNITH TECHNOLOGY"
              src="/static/new-about-us-image-3b85e5b4cff491477c0d4883047c6f9e.svg"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div>
          <h6 className="text-1.5xl font-bold text-blue-scopic mb-1">About us</h6>
          <h2 className="text-3xl sm:text-4.5xl text-dark-blue-scopic font-bold mb-3">Meet ZYNITH TECHNOLOGY</h2>
          <p className="text-dark-blue-scopic text-lg mb-3 font-medium">
            We're the software development company that positions you for success.
          </p>
          <p className="text-dark-blue-scopic text-sm mb-6 leading-relaxed">
            Fueled by a shared passion for creating digital solutions that drive results and coupled with our diverse expertise spanning multiple industries, we've successfully assisted businesses ranging from healthcare to finance, e-commerce to manufacturing, and many more. But don't just take our word for it; our portfolio and testimonials vividly narrate our success stories, bearing witness to our unwavering commitment to turning bold ideas into tangible, lasting success stories.
          </p>
          <div className="flex justify-start">
            <Link
              href="/about-us"
              className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-14 py-4 rounded-full transition duration-300 w-full lg:w-auto flex justify-center items-center cursor-pointer shadow-lg hover:scale-105"
            >
              About Us
            </Link>
          </div>
        </div>
      </section>


      {/* =========================================================================
           SECTION 8: TESTIMONIALS (Curved Blue Container as in Screenshot)
           ========================================================================= */}
      <section className="my-20">
        <div className="w-full max-w-7xl mx-auto px-4 mb-6">
          <p className="text-1.5xl font-bold text-blue-scopic text-center mb-1">Testimonials</p>
          <h2 className="text-3xl md:text-4.5xl text-dark-blue-scopic text-center font-bold mb-4 px-4 sm:px-0">
            Hear it from Our Clients
          </h2>
          <p className="text-base sm:text-lg text-center text-dark-blue-scopic px-4 lg:px-80 leading-relaxed">
            There's nothing quite as rewarding as knowing our solutions make a significant impact. Hear from our esteemed clients who have experienced first-hand the transformative power of our services.
          </p>
        </div>

        {/* Solid Curved Blue Container with Decorative Graphic & Controls */}
        <div className="zt-testimonials-container relative font-inter py-16 md:py-24 max-w-7xl mx-auto px-6 sm:px-14 md:px-24 overflow-hidden shadow-2xl">
          {/* Authentic Scopic Background SVG Graphic */}
          <img
            loading="lazy"
            alt="Testimonial background"
            src="/static/background-testimonial-e48f9215a50b1d8244655ccb0883e7cf.svg"
            className="w-full h-full object-cover absolute top-0 left-0 z-10 pointer-events-none"
          />

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="zt-testimonials-nav-btn prev hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="zt-testimonials-nav-btn next hidden sm:flex"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <div className="w-full h-full relative z-20 flex flex-col justify-center items-center text-center">
            {/* Gold Quote Mark SVG */}
            <div className="mb-5 flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="67" height="67" viewBox="0 0 67 67" fill="none">
                <path d="M50.2498 50.25C51.3603 50.25 52.4254 49.8088 53.2108 49.0235C53.9961 48.2382 54.4373 47.1731 54.4373 46.0625V35.8366C54.4373 34.726 53.9961 33.6609 53.2108 32.8756C52.4254 32.0903 51.3603 31.6491 50.2498 31.6491H44.4375C44.4375 30.1793 44.5254 28.7053 44.6971 27.2355C44.9567 25.6778 45.3923 24.2917 45.9953 23.0815C46.6024 21.8671 47.3813 20.9166 48.3361 20.2214C49.2866 19.4426 50.4968 19.0531 51.9708 19.0531V12.5625C49.5463 12.5625 47.4274 13.0817 45.6058 14.1202C43.8001 15.1482 42.2476 16.5676 41.0624 18.2742C39.8728 20.1558 38.996 22.2176 38.4661 24.3796C37.9322 26.7655 37.6709 29.2043 37.6872 31.6491V46.0625C37.6872 47.1731 38.1284 48.2382 38.9137 49.0235C39.699 49.8088 40.7642 50.25 41.8747 50.25H50.2498ZM25.1247 50.25C26.2353 50.25 27.3004 49.8088 28.0858 49.0235C28.8711 48.2382 29.3122 47.1731 29.3122 46.0625V35.8366C29.3122 34.726 28.8711 33.6609 28.0858 32.8756C27.3004 32.0903 26.2353 31.6491 25.1247 31.6491H19.3125C19.3125 30.1793 19.4004 28.7053 19.5721 27.2355C19.8317 25.6778 20.2673 24.2917 20.8702 23.0815C21.4774 21.8671 22.2563 20.9166 23.2111 20.2214C24.1616 19.4426 25.3718 19.0531 26.8458 19.0531V12.5625C24.4212 12.5625 22.3024 13.0817 20.4808 14.1202C18.6751 15.1482 17.1226 16.5676 15.9374 18.2742C14.7478 20.1558 13.871 22.2176 13.3411 24.3796C12.8072 26.7655 12.5459 29.2043 12.5622 31.6491V46.0625C12.5622 47.1731 13.0034 48.2382 13.7887 49.0235C14.574 49.8088 15.6392 50.25 16.7497 50.25H25.1247Z" fill="#FFC501"/>
              </svg>
            </div>

            <p className="testimonial-quote">
              &quot;{testimonials[activeTestimonial].quote}&quot;
            </p>

            <h3 className="testimonial-name">
              {testimonials[activeTestimonial].name}
            </h3>
            <h4 className="testimonial-role">
              {testimonials[activeTestimonial].role}
            </h4>

            {/* Slider Indicator Dots */}
            <div className="flex justify-center items-center gap-3 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`zt-testimonial-dot ${activeTestimonial === idx ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
           SECTION 9: FREQUENTLY ASKED QUESTIONS (8 Wide Accordion Items)
           ========================================================================= */}
      <section className="font-inter w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-32 py-20">
        <h2 className="text-3xl sm:text-4xl md:text-4.5xl text-dark-blue-scopic text-center font-bold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border-0 shadow-accordion-shadow rounded-2xl bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none bg-white text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-normal text-dark-blue-scopic">
                    {item.q}
                  </h3>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full text-white bg-[linear-gradient(138.2deg,#009ee3_10.28%,#2246b6_95.81%)] flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : 'rotate-0'
                    }`}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 px-6 pt-1 border-t border-slate-50">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* =========================================================================
           SECTION 10: ROCKET BANNER (Pixel-Perfect Match to Scopic)
           ========================================================================= */}
      <section className="w-full relative my-12">
        <div className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[640px] flex items-center shadow-2xl">
          {/* Rocket Background Image Desktop */}
          <div className="hidden lg:block absolute inset-0 w-full h-full">
            <img
              loading="lazy"
              alt="Rocket Background"
              src="/static/c8e5ecccc16a0453e382163efd3706a7/0d3c9/rocket-background.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Rocket Background Image Mobile */}
          <div className="lg:hidden absolute inset-0 w-full h-full">
            <img
              loading="lazy"
              alt="Rocket Background"
              src="/static/c8e5ecccc16a0453e382163efd3706a7/0d3c9/rocket-background.jpg"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Overlay on Right Side */}
          <div className="relative z-10 w-full p-6 sm:p-10 lg:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 items-center">
              <div className="hidden md:block"></div>
              <div className="flex flex-col max-w-xl">
                <h3 className="text-white text-3xl sm:text-4xl md:text-4.5xl font-extrabold mb-5 leading-tight">
                  Ready to Level Up Your Impact with Advanced Tech Innovation?
                </h3>
                <p className="text-white text-sm sm:text-base mb-8 leading-relaxed">
                  Step into a future of untapped possibilities and substantial gains. With ZYNITH TECHNOLOGY as your ally, expect a journey marked by tailored tech innovation, increased profit margins, and a dominant presence in your industry.
                </p>
                <div>
                  <button
                    onClick={openContact}
                    className="bg-green-scopic hover:bg-gradient-to-b hover:from-[#3cd2ac] hover:to-[#1fae84] text-white font-bold px-10 py-4 rounded-full transition duration-300 w-full lg:w-auto flex items-center justify-center cursor-pointer shadow-lg hover:scale-105"
                  >
                    Request a Free Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
