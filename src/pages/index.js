import Navbar from "../components/layout/Navbar";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FeaturedCard from "../components/FeaturedCard";
import Marketplace from "@/components/Marketplace";

export default function Home() {
  return (
    <>
      <Navbar />
      <nav></nav>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <section className="container mx-auto px-6 my-10 w-fit">
          <h1 className="text-3xl font-semibold mb-6" id="toppicks">
            Top Picks
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-fit">
            <FeaturedCard
              title="Eco-Friendly Urban Farm"
              headline="Revolutionizing the way we grow and consume food in urban environments with our sustainable vertical farm."
              imageURL="/images/farm.jpg"
              raisedAmount={1860040}
              buttonText="Learn More"
              imageWidth={300}
              imageHeight={400}
            />
            <FeaturedCard
              title="Solar-Powered Water Purifier"
              headline="Bringing clean and safe drinking water to remote communities using innovative solar-powered water purification technology."
              imageURL="/images/solar.jpg"
              buttonText="Learn More"
              raisedAmount={1460340}
              imageWidth={300}
              imageHeight={400}
            />
            <FeaturedCard
              title="Educational VR Experience"
              headline="Immerse yourself in a virtual reality adventure that makes learning fun, engaging, and accessible for everyone."
              imageURL="/images/vr.jpg"
              buttonText="Learn More"
              raisedAmount={5840242}
              imageWidth={300}
              imageHeight={400}
            />
          </div>
          <Marketplace id="marketplace" />
        </section>
      </main>
      <Footer />
    </>
  );
}
