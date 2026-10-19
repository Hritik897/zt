'use client';

import React, { useState } from 'react';

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      text: "Hello! 👋 Welcome to ZYNITH TECHNOLOGY. How can we help you build your digital experience today?",
      isUser: false
    }
  ]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const newMsgs = [...messages, { text: query, isUser: true }];
    setMessages(newMsgs);
    setInput('');

    setTimeout(() => {
      const lower = query.toLowerCase();
      let reply = "Thank you for reaching out! At ZYNITH TECHNOLOGY, we craft tailored digital experiences and AI-powered solutions. Would you like to schedule an introductory consultation with our engineering team?";

      if (lower.includes('service') || lower.includes('what do you do')) {
        reply = "We offer 10 core services: Custom Software, Web & Mobile Apps, AI & Machine Learning, Cloud & DevOps, UI/UX Design, Enterprise Solutions, QA Automation, Dedicated Teams, and Consulting. Which area would you like to explore?";
      } else if (lower.includes('quote') || lower.includes('price') || lower.includes('cost') || lower.includes('talk')) {
        reply = "We would love to prepare a customized technical proposal! Click the 'Let's Talk' button at the top of the page or share your project details and we will reach out within 24 hours.";
      } else if (lower.includes('ai') || lower.includes('machine learning')) {
        reply = "Our AI & Machine Learning team builds computer vision systems, LLM integrations, automated agents, and predictive analytics that optimize enterprise workflows. Would you like to review our case studies?";
      }

      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    }, 600);
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-launcher"
        aria-label="Open ZYNITH AI Assistant"
      >
        <div className="chat-launcher-badge"></div>
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
        </svg>
      </button>

      {/* Chat Window Dialog */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="flex items-center gap-3">
            <div className="chat-avatar">
              Z
              <span className="chat-avatar-badge"></span>
            </div>
            <div>
              <h4 className="chat-header-title">Zynith AI Assistant</h4>
              <p className="chat-header-status">Online • Intelligent Digital Guide</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="chat-close-btn" aria-label="Close chat">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="chat-body">
          {messages.map((m, idx) => (
            <div key={idx} className={`chat-bubble-${m.isUser ? 'user' : 'bot'}`}>
              {m.text}
            </div>
          ))}

          <div className="chat-chips-container">
            <button onClick={() => handleSend("What services do you offer?")} className="chat-chip">What services do you offer?</button>
            <button onClick={() => handleSend("I want to request a quote")} className="chat-chip">Request a quote</button>
            <button onClick={() => handleSend("Tell me about your AI capabilities")} className="chat-chip">AI capabilities</button>
          </div>
        </div>

        <div className="chat-input-bar">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your message..."
            className="chat-input-field"
          />
          <button
            onClick={() => handleSend()}
            className="chat-send-btn"
            aria-label="Send message"
          >
            <svg className="w-4 h-4 transform rotate-45 -ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
