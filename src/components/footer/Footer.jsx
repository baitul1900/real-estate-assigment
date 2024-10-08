import {
  FacebookFooter,
  InstaFooter,
  LinkedinFooter,
  Logo,
  TwitterFooter,
} from "../svg/Svg";
import blogFooterOne from "../../assets/images/blog/blog-footer-01.jpg";
import blogFooterTwo from "../../assets/images/blog/blog-footer-02.jpg";

const socialMediaLinks = [
  { Component: FacebookFooter, href: "javascript:void(0)" },
  { Component: TwitterFooter, href: "javascript:void(0)" },
  { Component: InstaFooter, href: "javascript:void(0)" },
  { Component: LinkedinFooter, href: "javascript:void(0)" },
];

const aboutLinks = [
  { name: "Home", href: "javascript:void(0)" },
  { name: "Features", href: "javascript:void(0)" },
  { name: "About", href: "javascript:void(0)" },
];

const featureLinks = [
  { name: "How it works", href: "javascript:void(0)" },
  { name: "Privacy policy", href: "javascript:void(0)" },
  { name: "Terms of Service", href: "javascript:void(0)" },
  { name: "Refund policy", href: "javascript:void(0)" },
];

const blogPosts = [
  {
    img: blogFooterOne,
    alt: "blog",
    text: "I think really important to design with...",
  },
  {
    img: blogFooterTwo,
    alt: "blog",
    text: "Recognizing the need is the primary...",
  },
];

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Logo and Social Media Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <a
                href="javascript:void(0)"
                className="mb-6 inline-block max-h-[100px]"
              >
                <Logo />
              </a>
              <p className="mb-8 lg:max-w-[270px] text-base text-gray-7">
                We create digital experiences for brands and companies by using
                technology.
              </p>
              <div className="-mx-3 flex items-center">
                {socialMediaLinks.map(({ Component, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="px-3 text-gray-7 hover:text-white"
                  >
                    <Component />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* About Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                About Us
              </h4>
              <ul>
                {aboutLinks.map(({ name, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Features
              </h4>
              <ul>
                {featureLinks.map(({ name, href }, index) => (
                  <li key={index}>
                    <a
                      href={href}
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Latest Blog Posts */}
          <div className="w-full px-4 md:w-2/3 lg:w-6/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Latest blog
              </h4>
              <div className="flex flex-col gap-8">
                {blogPosts.map(({ img, alt, text }, index) => (
                  <a
                    key={index}
                    href="blog-details.html"
                    className="group flex items-center gap-[22px]"
                  >
                    <div className="overflow-hidden rounded">
                      <img src={img} alt={alt} />
                    </div>
                    <span className="max-w-[180px] text-base text-gray-7 group-hover:text-white">
                      {text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
