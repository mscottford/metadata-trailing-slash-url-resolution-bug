import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL('https://example.com'),
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': [
          {
            title: 'Example',
            url: '/feed.xml',
          }
        ],
      },
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
