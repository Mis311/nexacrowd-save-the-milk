
import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FeaturedCard from '../components/FeaturedCard';
import Marketplace from "@/components/Marketplace";


export default function Home() {
  return (
    <>
      <Navbar />
      <nav></nav>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="container mx-auto px-6 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeaturedCard
            title="Project 1"
            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Learn More"
          />
          <FeaturedCard
            title="Project 2"
            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Learn More"
          />
          <FeaturedCard
            title="Project 3"
            headline="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Learn More"
          />
          
        </div>
        <Marketplace />
      </section>
      </main>
      <Footer />
    </>
  );
}
