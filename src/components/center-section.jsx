
import React from "react";
import NewsCards from "./news-cards";
import { getData } from "@/lib/getData";

export default async function CenterSection() {
  const newsData = await getData("news-categories");


  return (
    <div className="flex flex-col gap-4 mt-4">
      
    </div>
  );
}
