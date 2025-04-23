const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

(async () => {
  const sitemap = new SitemapStream({ hostname: "https://www.yourdomain.com" });
  const writeStream = createWriteStream("./public/sitemap.xml");
  sitemap.pipe(writeStream);

  const urls = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/about", changefreq: "monthly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.8 },
    // Add other static or dynamic URLs
  ];

  urls.forEach((url) => sitemap.write(url));

  sitemap.end();
  await streamToPromise(writeStream);
  console.log("✅ sitemap.xml generated successfully!");
})();
