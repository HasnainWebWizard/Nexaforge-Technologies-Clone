import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Nexaforge Technologies",
  description: "Nexaforge Technologies Next.js app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />

        {/* Font Awesome Icons */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          integrity="sha512-ZnlfSCP3KFXKdqlcRZg1ZqGuZomklv..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/logo.png" type="image/icon" />

      </head>

      <body>

        <NavBar />

        {/* Page Content */}
        <main className="px-5 sm:px-10 md:px-18 lg:px-20 pt-20">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
