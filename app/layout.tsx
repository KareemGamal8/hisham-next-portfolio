import localFont from "next/font/local";
import "./globals.css";
import Header from "./design-system/components/Header";
import Footer from "./design-system/components/Footer";
import AffixButton from "./design-system/buttons/AffixButton";
import WhatsappButton from "./design-system/buttons/WhatsappButton";
import { Toaster } from "react-hot-toast";

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
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 1500,
            style: {
              background: "#0f0714",
              color: "white",
              border: "3px solid #1c263d",
              fontWeight: 600,
            },
          }}
        />
        <Header />
        <AffixButton />
        <WhatsappButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
