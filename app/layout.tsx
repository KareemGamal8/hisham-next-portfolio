import localFont from "next/font/local";
import "./globals.css";
import Header from "./design-system/components/Header";
import Footer from "./design-system/components/Footer";

const geistSans = localFont({
  src: "./assets/fonts/Roboto-Black.ttf",
  variable: "--font-geist-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased flex flex-col min-h-[100vh]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
