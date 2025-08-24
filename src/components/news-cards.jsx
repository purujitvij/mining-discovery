import { formatDateToMonthDay } from "@/utils/dateFormatter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NewsCards({
  title,
  description,
  author,
  publishedOn,
  newsId,
}) {
  // Function to trim description to ~50 words
  const trimDescription = (text, wordLimit = 10) => {
    const words = text?.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ");
  };

  return (
    <div className="bg-news-bg rounded-2xl shadow-md overflow-hidden flex flex-col sm:flex-row w-full max-w-3xl mb-6">
      {/* Image Section */}
      <div className="w-full sm:w-1/3 h-48 sm:h-auto">
        <Image
          src="/test.png"
          alt="News Image"
          width={400}
          height={300}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 uppercase border-b-2 pb-2">
            {title}
          </h1>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-3">
            {trimDescription(description, 10)}

            <Link
              href={`/news/news-detail/${newsId}`}
              className="text-primary cursor-pointer hover:underline ml-1 font-medium"
            >
              ... Read more
            </Link>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 space-y-2 sm:space-y-0 pt-3 border-t border-gray-200 sm:border-t-0">
          <p className="text-primary font-medium">
            {formatDateToMonthDay(publishedOn)}
          </p>
          <p className="text-xs sm:text-sm">
            By: <span className="font-medium text-gray-700">{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
}