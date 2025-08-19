'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full shadow-md bg-white px-16 py-2 flex items-center justify-between">
      {/* Left: Logo */}
      <div className="text-2xl font-bold border border-gray-300 rounded-lg text-gray-800 p-1">
  <Link href="/">
    <Image
      src="/assets/logo/youtaxLogo.png"
      alt="Logo"
      width={130}
      height={20}
    />
  </Link>
</div>



      {/* Center: Navigation */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link href="/services" className="hover:text-blue-600 transition-colors">
          Services
        </Link>
        <Link href="/solutions" className="hover:text-blue-600 transition-colors">
          Solutions
        </Link>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Resources
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Pricing
        </Link>
        <Link href="/about-us" className="hover:text-blue-600 transition-colors">
          About Us
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Career
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Contact Us
        </Link>
      </nav>

      {/* Right: Button */}
      <div>
        <Link href="/book">
          <button className="primary-btn px-5 py-2 rounded-lg transition-all">
            Book Consultation
          </button>
        </Link>
      </div>
    </header>
  );
}
