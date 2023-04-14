
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";



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
