import "../src/assets/css/tailwind.css";
import AboutSection from "./components/aboutSection/AboutSection";
import Contact from "./components/contact_components/Contact";
import Cta from "./components/CTA/Cta";
import FaqCards from "./components/faq/FaqCards";
import FeatureCard from "./components/featuresCard/FeatureCard";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import PropertiseCard from "./components/propartiesCard/PropertiseCard";
import { FaqBgBlue, FaqBgGreen } from "./components/svg/Svg";
import TeamMemberr from "./components/teamCards/teamMemberr";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Features
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  Main Features Of Play
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <FeatureCard />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
            <span className="mb-2 block text-lg font-semibold text-primary">
              Properties
            </span>
            <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
              Grab your Dream Property
            </h2>
            <p className="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>

          <PropertiseCard />
        </div>
      </section>

      <AboutSection />

      <Cta />

      {/* faq section here */}
      <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[520px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  FAQ
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Any Questions? Look Here
                </h2>
                <p className="mx-auto max-w-[485px] text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          {/* card goes here */}
          <FaqCards />
        </div>
        <div>
          <span className="absolute left-4 top-4 -z-[1]">
            <FaqBgGreen />
          </span>
          <span className="absolute bottom-4 right-4 -z-[1]">
            <FaqBgBlue />
          </span>
        </div>
      </section>
      {/* faq section here end */}

      {/* tem member here */}
      <section
        id="team"
        className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Our Team Members
                </span>
                <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                  Our Clients
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          {/* card goes here */}
          <TeamMemberr />
        </div>
      </section>
      {/* tem member here end */}

      {/* contact */}
      <Contact />
      {/* contact end */}

      {/* footer */}
      <Footer />
      {/* footer end */}
    </>
  );
}

export default App;
