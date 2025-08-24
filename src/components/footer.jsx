import { FOOTER, SOCIAL_LINKS } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[url(/footer-bg.png)] bg-cover bg-center text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">
          {/* Left Section: Logo + Description + Socials */}
          <div className="flex flex-col justify-between gap-6 lg:gap-8 lg:pr-10 lg:border-r border-white w-full lg:w-1/2">
            <div>
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  width={100} 
                  height={100}
                />
              </Link>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-200 lg:w-3/4">
                Mining Discovery provides daily mining news, a weekly mining
                newsletter, a monthly mining magazine and an interactive mining
                website for mining companies, mining associations and mining
                executives globally.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-row items-center gap-4 flex-wrap">
              {SOCIAL_LINKS.map((item) => (
                <Link 
                  key={item.platform} 
                  href={item.url}
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={item.icon}
                    alt={item.platform}
                    width={25}
                    height={25}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section: Footer Links */}
          <div className="lg:pl-10 w-full lg:w-1/2 flex flex-col justify-start lg:justify-end lg:items-end">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-col gap-3 lg:gap-4">
              {FOOTER.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path} 
                  className="hover:underline text-sm sm:text-base transition-colors hover:text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-600 px-4 sm:px-6 lg:px-28">
        <p className="text-center text-xs sm:text-sm text-gray-300 leading-relaxed">
          &copy; {new Date().getFullYear()} Mining Discovery – Daily Mining
          Updates - Design by Mining Discovery
        </p>
      </div>
    </footer>
  );
}