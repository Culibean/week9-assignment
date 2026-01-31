import { Orbitron } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: "500",
});

export const metadata = {
  title: "Skylog",
  description: "An aviation social media platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body className={orbitron.className}>
          <Header />
          <header className="flex justify-end items-center p-4 gap-4 h-16"></header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
