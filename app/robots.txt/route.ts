export async function GET() {
  const content = `User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://atomichabitsworld.com/sitemap.xml
Content-Signal: ai-train=no, search=yes, ai-input=yes
`
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
