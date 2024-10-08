import HeroImage from "../../assets/images/hero/hero-image.png";
import Button from "../buttons/Button";
import { SvgOneHero, SvgTwoHero } from "../svg/Svg";

const Hero = () => {
  const text = {
    title: "We'll build house of your dream",
    subTitle:
      " We have 9000 more review and our customers trust on out property and quality products.",
  };
  return (
    <div
      id="home"
      className="relative overflow-hidden bg-primary pt-[120px] md:pt-[130px] lg:pt-[160px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4">
            <div className="hero-content  mx-auto max-w-[780px] text-center">
              <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                {text?.title}
              </h1>
              <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                {text?.subTitle}
              </p>
              <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                <li>
                  <Button
                    href="https://links.tailgrids.com/play-download"
                    className="bg-white text-dark shadow-1 hover:bg-gray-200 hover:text-body-color"
                  >
                    Book Now
                  </Button>
                </li>
                <li>
                  <Button
                    href="https://github.com/tailgrids/play-tailwind"
                    target="_blank"
                    className="flex items-center gap-4 rounded-md bg-white/[0.12] text-white hover:bg-white hover:text-dark"
                  >
                    Contact Us
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4">
            <div className=" relative z-10 mx-auto max-w-[845px]">
              <div className="mt-16">
                <img
                  src={HeroImage}
                  alt="hero"
                  className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                />
              </div>
              <div className="absolute -left-9 bottom-0 z-[-1]">
                <SvgOneHero />
              </div>
              <div className="absolute -right-6 -top-6 z-[-1]">
                <SvgTwoHero />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
