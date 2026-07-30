import React from 'react';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>UMAID SHAHZAD MUGHAL — Junior Full Stack Developer</title>
        <meta name="description" content="Portfolio of Umaid Shahzad Mughal, Junior Full Stack Developer specializing in MERN/PERN, REST APIs, and scalable backend architectures." />
      </head>
      <body className="bg-[#fcf8f9] dark:bg-[#12161b] text-[#1c1b1c] dark:text-[#f3f0f0] antialiased selection:bg-[#dae6d2] selection:text-[#141e12]">
        {children}
      </body>
    </html>
  );
}
