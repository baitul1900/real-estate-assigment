/* eslint-disable react/prop-types */
const Button = ({ href, className, children, target = "_self" }) => {
  return (
    <>
      <a
        href={href}
        target={target}
        className={`inline-flex items-center justify-center rounded-md px-7 py-[14px] text-center text-base font-medium transition duration-300 ease-in-out ${className}`}
      >
        {children}
      </a>
    </>
  );
};

export default Button;
