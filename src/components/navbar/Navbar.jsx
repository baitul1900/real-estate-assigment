import { Logo } from "../svg/Svg";

const Navbar = () => {
  // Define the menu items in an array
  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "blog-grids.html" },
  ];

  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-4 py-3">
            {/* Logo */}
            <a
              href="index.html"
              className="navbar-logo block w-60 max-w-full px-4"
            >
              <Logo />
            </a>

            {/* Navigation Menu */}
            <ul className="hidden lg:flex">
              {/* Use map to dynamically render menu items */}
              {menuItems.map((item, index) => (
                <li className="group relative" key={index}>
                  <a
                    href={item.href}
                    className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Sign In/Sign Up Buttons */}
            <div className="sm:flex">
              <a
                href="signin.html"
                className="flex-1 loginBtn px-[22px] py-2 text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>
              <a
                href="signup.html"
                className="signUpBtn rounded-md bg-white bg-opacity-20 px-6 py-2 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
