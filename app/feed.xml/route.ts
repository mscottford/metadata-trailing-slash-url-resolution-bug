import convert from 'xml-js';

export async function GET() {
  const feed = {
    _declaration: {
      _attributes: {
        encoding: 'UTF-8',
        version: '1.0',
      },
    },
    rss: {
      _attributes: {
        version: '2.0',
        'xmlns:atom': 'http://www.w3.org/2005/Atom',
      },
      channel: {
        title: {
          _text: "Sample title",
        },
        description: {
          _text: "Sample description"
        },
        link: {
          _text: "https://example.com/",
        },
        "atom:link": {
          _attributes: {
            href: "https://example.com/feed.xml",
            rel: "self",
            type: "application/rss+xml",
          },
        }
      }
    }
  }

  const xml = convert.js2xml(feed, { compact: true, spaces: 2 });

  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml' } });
}
