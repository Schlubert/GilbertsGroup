// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-alpine-green text-white py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <img
          src="/logo-gilberts-white.png"
          alt="Gilberts Group logo"
          className="h-8 w-auto mb-4 md:mb-0"
        />
        <p className="text-sm text-emerald-100">
          © {new Date().getFullYear()} Gilberts Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
