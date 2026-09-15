import type { Metadata } from "next";
import { Navbar } from "@/components/navigation";
import { Footer } from "@/components/portfolio";
import { profile } from "@/data/profile";
import "./globals.css";
const title = "Alikhan Yedilbayev | Computer Science & AI Engineer";
const description =
  "Computer Science student at San José State University building software, AI systems, intelligent agents, and machine learning projects.";
export const metadata: Metadata = {
  ...(profile.siteUrl ? { metadataBase: new URL(profile.siteUrl) } : {}),
  title: { default: title, template: "%s | Alikhan Yedilbayev" },
  description,
  icons: { icon: "/favicon.svg" },
  openGraph: { title, description, type: "website", locale: "en_US" },
  twitter: { card: "summary", title, description },
};
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'||t==='light'?t:window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}catch{document.documentElement.dataset.theme='dark'}`;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Navbar />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <div className="container">
          <Footer />
        </div>
      </body>
    </html>
  );
}
