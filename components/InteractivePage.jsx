'use client';

import React, { useEffect } from 'react';

export default function InteractivePage({ html }) {
  useEffect(() => {
    // Accordion handling for FAQs and collapsing cards
    const buttons = document.querySelectorAll('button[aria-expanded]');
    buttons.forEach((btn) => {
      btn.onclick = (e) => {
        e.preventDefault();
        const isExp = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!isExp));
        
        // Rotate SVG arrow
        const svg = btn.querySelector('svg');
        if (svg) {
          if (!isExp) {
            svg.classList.add('rotate-90');
          } else {
            svg.classList.remove('rotate-90');
          }
        }

        // Toggle panel display
        const content = btn.nextElementSibling;
        if (content) {
          if (!isExp) {
            content.style.display = 'block';
            content.classList.remove('hidden');
          } else {
            content.style.display = 'none';
            content.classList.add('hidden');
          }
        }
      };
    });

    // Contact modal opener
    const contactLinks = document.querySelectorAll(
      'a[href="/contact-us"], a[href="/contact-us/"], button[data-contact-trigger]'
    );
    contactLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        const modal = document.getElementById('contact-modal');
        if (modal) {
          e.preventDefault();
          modal.classList.add('open');
          document.body.style.overflow = 'hidden';
        }
      });
    });

    // Handle any Read More expandable blocks in cards
    const readMoreButtons = document.querySelectorAll('button:not([aria-expanded])');
    readMoreButtons.forEach((btn) => {
      if (btn.textContent && btn.textContent.trim().toLowerCase().includes('read more')) {
        btn.onclick = (e) => {
          e.preventDefault();
          const modal = document.getElementById('contact-modal');
          if (modal) {
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
          }
        };
      }
    });
  }, [html]);

  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
