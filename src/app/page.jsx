import Advertisment from "@/components/advertisment";
import { getData } from "@/lib/getData";
import { formatDateToMonthDay } from "@/utils/dateFormatter";
import React from "react";

export default async function Home() {
  const adData = await getData("advertisements");
  const newsData = await getData("news-categories");

  // filter for "Latest News" category
  const latestNewsCategory = newsData.data.find(
    (category) => category.category === "Latest News"
  );

  return (
    <main>
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar Ads */}
          <aside className="hidden lg:block lg:w-64 xl:w-80 flex-shrink-0">
            <div className="space-y-4">
              {adData.data.map((ad, index) => (
                <Advertisment
                  key={index}
                  image={`${process.env.STRAPI_URL}${ad.ads_image.url}`}
                  alt={ad.altText}
                />
              ))}
            </div>
          </aside>

          <section className=" flex flex-row gap-8 ">
            <div>Hello</div>

            {/* Latest News Section */}
            <div>
              <h1 className="text-2xl font-bold mb-4">Latest News</h1>
              {latestNewsCategory ? (
                latestNewsCategory.news_sections.map((news, index) => (
                  <div
                    key={index}
                    className="rounded-lg border-2 border-black p-4 mb-4"
                  >
                    <h2 className="text-lg font-semibold">{news.title}</h2>
                    <div className="flex flex-row justify-between text-sm text-gray-500 mt-4">
                      <p className="text-primary">
                        {formatDateToMonthDay(news.createdAt)}
                      </p>
                      <p>{news.author}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>No Latest News available.</p>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
