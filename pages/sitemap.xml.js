import React from 'react'
import dataProject from '../lib/copywriting/data.js'


const sitemapXml = data => {
  let latestPost = 0;
  let blogsXML = "";
  let projectsXML = "";


  data.allBlog.map(post => {
    const postDate = Date.parse(post.created_at);
    if (!latestPost || postDate > latestPost) {
      latestPost = postDate;
    }

    const blogURL = `https://studio.dignite/blog/${post.slug}/`;
    blogsXML += `
      <url>
        <loc>${blogURL}</loc>
        <lastmod>${postDate}</lastmod>
        <priority>0.50</priority>
      </url>`;
  });

  dataProject.home.ProjectAll.map(project => {
    const projectURL = `https://studio.dignite/project/${project.slug}/`;
    projectsXML += `
      <url>
        <loc>${projectURL}</loc>
        <priority>0.50</priority>
      </url>`;
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://studio.dignite/</loc>
        <lastmod>${latestPost}</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://studio.dignite/about</loc>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://studio.dignite/projects</loc>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://studio.dignite/blog</loc>
        <priority>0.80</priority>
      </url>
      ${projectsXML}
      ${blogsXML}
    </urlset>`;
};

class Sitemap extends React.Component {
    static async getInitialProps( ctx ) {
        const res = await fetch(`${process.env.API_HOST_API}/allBlog`)
        const data = await res.json()
        ctx.res.setHeader("Content-Type", "text/xml");
        ctx.res.write(sitemapXml(data));
        ctx.res.end();
    }
}

export default Sitemap;