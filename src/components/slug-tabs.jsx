"use client";

import Link from "next/link";
import React from "react";

export default function SlugTabs({ categories = [], basePath = "/news" }) {
  return (
    <div className="flex flex-row gap-4 flex-wrap items-center justify-center">
      {categories.map((cat) => (
        <Link key={cat.id} href={`${basePath}/${cat.slug}`}>
          <h2 className="px-2 rounded-lg cursor-pointer transition text-white hover:text-gray-300">
            {cat.title}
          </h2>
        </Link>
      ))}
    </div>
  );
}
