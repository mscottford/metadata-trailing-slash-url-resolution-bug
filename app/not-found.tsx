import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      canonical: `/404.html`,
    },
    openGraph: {
      url: `/404.html`,
    }
  }
}

export default async function NotFound() {
  return <div>
    <h1>Not Found</h1>
    <p>Sorry, the page you were looking for could not be found.</p>
  </div>
}
