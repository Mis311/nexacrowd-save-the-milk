import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <nav></nav>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* Add the main content here */}
      </main>
      <Footer />
    </>
  );
}
