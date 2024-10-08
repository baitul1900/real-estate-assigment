import {
  FeatureSvg,
  FeatureSvgFour,
  FeatureSvgThree,
  FeatureSvgTwo,
} from "../svg/Svg";

const FeatureCard = () => {
  const featuresCard = [
    {
      id: 1,
      title: "Premium Property Listings",
      description:
        "Discover an array of hand-picked properties that meet the highest standards of luxury and comfort.",
      icon: <FeatureSvg />,
    },
    {
      id: 2,
      title: "Personalized Property Matching",
      description:
        "Our advanced matching system pairs you with properties that align with your specific needs and desires.",
      icon: <FeatureSvgTwo />,
    },
    {
      id: 3,
      title: "Expert Guidance and Support",
      description:
        "Benefit from the expertise of our dedicated team of real estate professionals.",
      icon: <FeatureSvgThree />,
    },

    {
      id: 4,
      title: "Virtual Tours",
      description:
        "Take advantage of our cutting-edge virtual tours and 3D walkthroughs to explore properties from the comfort of your home.",
      icon: <FeatureSvgFour />,
    },
  ];
  return (
    <div className="-mx-4 flex flex-wrap">
      {featuresCard.map((item) => {
        return (
          <div className="w-full px-4 md:w-1/2 lg:w-1/4" key={item.id}>
            <div className=" group mb-12">
              <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                {item?.icon}
              </div>
              <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                {item?.title}
              </h4>
              <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                {item?.description}
              </p>
              <a
                href="javascript:void(0)"
                className="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
              >
                Learn More
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FeatureCard;
