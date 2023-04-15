import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import Image from "next/image"; //will add image later
const ProjectPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <main className="flex-grow">
          {/* Project Image */}
          <div
            className="bg-cover bg-center h-64"
            style={{
              backgroundImage: "url('images/banner.png')",
            }}
          ></div>

          {/* Project Info */}
          <section className="container mx-auto px-6 py-10">
            <h1 className="text-4xl font-bold mb-4 font-lato">
              Save Japanese Milk Farms
            </h1>
            <p className="text-lg mb-6 font-nunito">
              This is a use case for milk farmers in Japan. Currently farms are
              suffering from low consumption, high price of crops due to all
              world crisis. Not only they have to dump tons of milks, the
              governments are paying them to kill their milk cows. 1/3 of Milk
              farms in Hokkaido shutdown business. Government cannot solve
              everything. Therefore, I suggest a decentralized solution to this,
              which is a platform they can get help for fundraising (to help
              themselves and get crowdsourced).<br></br> You can of course buy
              milk and NFTs, but also can invest in new projects, suggest ideas,
              and offer skills and time instead of donation! Your work of proof
              will be recorded indefinetely on blockchain. We will use chatGPT
              and human service to analyse possible solutions such as export
              milks abroad, marketing for new recepes Japanese people can digest
              and branding. We can initiate with cow NFT, which is associated
              with the farms and their cows and you can get sticker if you buy
              their NFT specific product at convinience store or supermarket.
            </p>
            <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
              Donate
            </button>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 rounded h-4 mb-4">
              <div
                className="h-full text-xs text-center text-white font-semibold bg-blue-500 rounded"
                style={{ width: "75%" }}
              >
                75% Funded
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="font-nunito">
                <h2 className="text-2xl font-semibold mb-2">Amount Raised</h2>
                <p>$12,345</p>
              </div>
              <div className="font-nunito">
                <h2 className="text-2xl font-semibold mb-2">
                  Number of Backers
                </h2>
                <p>123</p>
              </div>
              <div className="font-nunito">
                <h2 className="text-2xl font-semibold mb-2">Duration</h2>
                <p>30 days</p>
              </div>
            </div>
          </section>

          {/* Project Narrative */}
          <section className="container mx-auto px-6 py-10">
            <div className="space-y-12">
              {/* Story 1 */}
              <div className="space-y-4" data-aos="fade-up">
                <h2 className="text-2xl font-bold font-lato ">
                  Problem 1: Lack of Awareness to Milk
                </h2>
                <p className="text-lg font-nunito">
                  It is reported that 70% of Japanese are genetically lactose
                  intolerlate. Means a lot of Japanese people cannot naturally
                  digest raw milk. However, since it contains a lot of nutrition
                  such as calcium, milks were offered at schools and kids had
                  chance to be used to milks. Japanese lack calcium in general,
                  means their bones can be fragile when they get older. It is
                  said that people do not know many recipes that contains milk,
                  as milk is relatively new to Japan compared to traditional
                  Washoku. A new marketing strategy is needed to popularize
                  milk.{" "}
                </p>
                {/* <div className="w-full h-64 relative">
                  <Image
                    src="https://source.unsplash.com/random/800x450"
                    alt="Story 1"
                    layout="responsive"
                    width={800}
                    height={450}
                    className="rounded-lg"
                  />
                </div> */}
              </div>
            </div>
            {/* Story 2 */}
            <div className="space-y-4" data-aos="fade-up">
              <h2 className="text-2xl font-bold font-lato">
                Problem 2: Too dependant on Government
              </h2>
              <p className="text-lg font-nunito">
                The issue with Japanese culture is that it places a high value
                on conformity and hierarchy. This has led to a social structure
                where farmers are often dependent on government subsidies and
                regulations. In the case of milk farmers, the government sets
                the price for milk and provides subsidies to ensure that farmers
                can make a living. However, this system has led to an oversupply
                of milk and a lack of innovation in the industry. Additionally,
                many young people are not interested in becoming farmers, which
                could lead to a shortage of workers in the future. Overall, the
                dependence on government subsidies and regulations has created a
                lack of flexibility and innovation in the agricultural industry
                in Japan.
              </p>
              {/* <div className="w-full h-64 relative">
                <Image
                  src="/images/toppage-cow.png"
                  alt="Story 2"
                  layout="responsive"
                  width={800}
                  height={450}
                  className="rounded-lg"
                />
              </div> */}

              {/* Story 3 */}
              <div className="space-y-4" data-aos="fade-up">
                <h2 className="text-2xl font-bold font-lato">
                  Problem3: It is Complicated, but There is Hope.
                </h2>
                <p className="text-lg font-nunito">
                  Milk Farmers has been facing numerous challenges such as war,
                  COVID-19, and a significant percentage of lactose intolerant
                  population. Additionally, the Japanese culture is not known
                  for taking initiative and building community hubs, leading to
                  over-dependence on government support for milk farmers.
                  However, there is hope as international transport has
                  improved, thanks to COVID-19, and now there is the possibility
                  of exporting milk to the Middle East, which has a high demand
                  for milk products. This endeavor requires the collaboration of
                  various stakeholders, and we aspire to create a website to
                  facilitate this initiative.
                </p>
                {/* <div className="w-full h-64 relative">
                  <Image
                    src="/images/toppage-cow.png"
                    alt="Story 3"
                    className="rounded-lg w-full"
                  />
                </div> */}
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="container mx-auto px-6 py-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Buy NFTs
              </button>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Invest in Project
              </button>
              <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mb-4">
                Lend Your Talent
              </button>
            </div>
          </section>
        </main>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
