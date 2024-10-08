import { Faq } from "../svg/Svg";

const FaqCards = () => {
  const faqData = [
    {
      id: 1,
      title: "Is TailGrids Well-documented?",
      description:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
    },
    {
      id: 2,
      title: "Is TailGrids Well-documented?",
      description:
        "It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content ui/ux strategy that we do writing your first blog post.",
    },
  ];
  return (
    <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4 lg:w-1/2">
        {faqData.map((items) => {
          return (
            <div className="mb-12 flex lg:mb-[70px] " key={items.id}>
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <Faq />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {items?.title}
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  {items?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-full px-4 lg:w-1/2">
        {faqData.map((items) => {
          return (
            <div className="mb-12 flex lg:mb-[70px] " key={items.id}>
              <div className="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-primary text-white sm:mr-6 sm:h-[60px] sm:max-w-[60px]">
                <Faq />
              </div>
              <div className="w-full">
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  {items?.title}
                </h3>
                <p className="text-base text-body-color dark:text-dark-6">
                  {items?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqCards;
