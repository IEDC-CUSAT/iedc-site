import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IEDC CUSAT - Innovation and Entrepreneurship Development Cell",
  description: "Explore innovation and entrepreneurship at IEDC CUSAT, where ideas transform into reality.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="IEDC CUSAT fosters innovation, startups, and entrepreneurial skills. Learn about our programs, events, and success stories." />
        <meta name="keywords" content="Innovation, Entrepreneurship, Startups, CUSAT, IEDC, Technology, Development Cell, Entrepreneurial Skills" />
        <meta property="og:title" content="IEDC CUSAT - Innovation and Entrepreneurship Development Cell" />
        <meta property="og:description" content="Explore innovation and entrepreneurship at IEDC CUSAT, where ideas transform into reality." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://iedcdomain.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IEDC CUSAT - Innovation and Entrepreneurship Development Cell" />
        <meta name="twitter:description" content="Explore innovation and entrepreneurship at IEDC CUSAT, where ideas transform into reality." />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "IEDC CUSAT",
            "url": "https://iedcdomain.com",
            "logo": "https://iedcdomain.com/logo.jpg",
            "sameAs": [
              "https://www.facebook.com/iedc",
              "https://twitter.com/iedc",
              "https://www.linkedin.com/in/iedc/"
            ]
          }
        `}
        </script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
