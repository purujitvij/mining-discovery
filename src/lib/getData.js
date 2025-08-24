// lib/getData.js
export async function getData(endpoint) {
  // If endpoint already has query params (like /id), add &populate=*
  const url = endpoint.includes("?")
    ? `${process.env.STRAPI_URL}/api/${endpoint}&populate=*`
    : `${process.env.STRAPI_URL}/api/${endpoint}?populate=*`;

  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return res.json();
}
