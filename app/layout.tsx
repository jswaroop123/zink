// app/layout.tsx
import "../styles/globals.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer";
import Link from "next/link";

export const metadata = {
  title: "Zink Portfolio",
  description: "Developer portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex bg-black text-white">
          <Sidebar />
          <main className="flex-1 p-6 flex flex-col">
            {/* Navigation */}
            <header className="flex justify-end mb-6 space-x-4">
              <Link href="/" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                About
              </Link>
              <Link href="/projects" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                Projects
              </Link>
              <Link href="/contact" className="px-4 py-2 bg-gray-800 rounded hover:bg-gray-700 transition">
                Contact
              </Link>
            </header>

            <div className="flex-1">{children}</div>

            <Footer />
          </main>
        </div>
      </body>
    </html>
  );
}
