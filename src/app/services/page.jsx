import Advertisment from "@/components/advertisment";
import Projects from "@/components/projects";
import Reports from "@/components/reports";
import SlugTabs from "@/components/slug-tabs";
import { getData } from "@/lib/getData";
import React from "react";

export default async function Services() {
  const adData = await getData("advertisements");
  const projectData = await getData("projects");
  const reportData = await getData("reports");
  const servicesData = await getData("services-categories");

 const categories = servicesData?.data?.map((item) => ({
    id: item.id,
    title: item.category,
    slug: item.slug,
    sections: item.news_sections || []
  })) || [];

  return (
    <main>
      <section className="bg-black-bg">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-6">
            Services
          </h1>
         <SlugTabs categories={categories} basePath="/services" />
        </div>
      </section>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Left Sidebar - Ads (Hidden on mobile, shown on desktop) */}
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

          {/* Main Content - Services Description */}
          <main className="flex-1 mt-4 lg:mt-0">
            <></>

            {/* Mobile Ads - Show only on mobile/tablet */}
            <div className="lg:hidden mt-8 space-y-4">
              <h3 className="text-lg font-semibold mb-4">Sponsored</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {adData.data.slice(0, 4).map((ad, index) => (
                  <Advertisment
                    key={index}
                    image={`${process.env.STRAPI_URL}${ad.ads_image.url}`}
                    alt={ad.altText}
                  />
                ))}
              </div>
            </div>
          </main>

          {/* Right Sidebar - Projects + Reports */}
          <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <div className="space-y-8">
              {/* Projects Section */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
                  Projects
                </h3>
                <div className="space-y-4">
                  {projectData.data.map((project, index) => (
                    <Projects
                      key={index}
                      image={`${process.env.STRAPI_URL}${project.project_image.url}`}
                      alt={project.title}
                      description={project.project_title}
                    />
                  ))}
                </div>
              </div>

              {/* Reports Section */}
              <div className="bg-gray-50 p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-xl font-semibold mb-4 pb-2 border-b-2 border-gray-200">
                  Reports
                </h3>
                <div className="space-y-4">
                  {reportData.data.map((report, index) => (
                    <Reports
                      key={index}
                      image={`${process.env.STRAPI_URL}${report.reports_image.url}`}
                      alt={report.title}
                      description={report.title}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}