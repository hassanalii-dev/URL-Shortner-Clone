import { useState } from "react";
import {
  FileText,
  Code2,
  CircleCheck,
  Newspaper,
  Menu,
  X,
} from "lucide-react";

const menus = {
  features: [
    {
      title: "Link Editor",
      description: "Edit your short links quickly and easily.",
    },
    {
      title: "Link Management",
      description: "Search, edit, and manage your links.",
    },
    {
      title: "Branded Links",
      description: "Create links using your own brand.",
    },
    {
      title: "Short URL Tracking",
      description: "Track clicks and understand your audience.",
    },
    {
      title: "QR Code Generator",
      description: "Create QR codes from your links.",
    },
    {
      title: "Short URL API",
      description: "Scale your communications with our API.",
    },
  ],

  resources: [
    {
      title: "Blog",
      description:
        "Read the latest tips and tricks from the top experts in link shortening.",
      icon: FileText,
    },
    {
      title: "For Developers",
      description:
        "Power your apps and software with automated, fully custom URL shortening.",
      icon: Code2,
    },
    {
      title: "Our Proven Process",
      description:
        "Learn how our customers go from zero to hero with our link management tools.",
      icon: CircleCheck,
    },
    {
      title: "About Us",
      description:
        "Learn about TinyURL's journey as the first link shortener.",
      icon: Newspaper,
    },
  ],
};

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMouseEnterMenu = (menu) => {
    setHoveredItem(menu);
    setActiveMenu(menu);
  };

  const closeDesktopMenu = () => {
    setActiveMenu(null);
    setHoveredItem(null);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setActiveMenu(null);
    setHoveredItem(null);
  };

  return (
    <header
      className="
        relative
        z-[1000]
        w-full
        overflow-visible
        bg-linear-to-r
        from-[#1196a5]
        via-[#087f91]
        to-[#063d56]
        text-white
        shadow-[0_1px_0_rgba(255,255,255,0.08)]
      "
      onMouseLeave={closeDesktopMenu}
    >
      <div
        className="
          mx-auto
          flex
          min-h-[70px]
          w-[calc(100%-80px)]
          max-w-[1240px]
          items-center

          max-[1100px]:w-[calc(100%-60px)]

          max-[900px]:w-[calc(100%-40px)]

          max-[760px]:hidden
        "
      >
        <a
          href="/"
          className="
            shrink-0
            text-[31px]
            font-black
            leading-none
            tracking-[-1.3px]
            text-white
            transition-opacity
            duration-200
            hover:opacity-90

            max-[1100px]:text-[29px]
          "
        >
          TINYURL
        </a>

        <nav
          className="
            ml-[50px]
            flex
            items-center
            gap-[36px]

            max-[1150px]:ml-[38px]
            max-[1150px]:gap-[28px]

            max-[950px]:ml-[30px]
            max-[950px]:gap-[22px]
          "
          onMouseLeave={() => setHoveredItem(null)}
        >
          <a
            href="/plans"
            onMouseEnter={() => setHoveredItem("plans")}
            className={`
              relative
              flex
              h-[70px]
              items-center
              whitespace-nowrap
              text-[16px]
              font-medium
              text-white

              after:absolute
              after:bottom-[17px]
              after:left-0
              after:h-[2px]
              after:w-full
              after:origin-center
              after:bg-white
              after:transition-transform
              after:duration-200

              ${
                hoveredItem === "plans"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }
            `}
          >
            Plans
          </a>

          <button
            type="button"
            onMouseEnter={() => handleMouseEnterMenu("features")}
            className={`
              relative
              flex
              h-[70px]
              items-center
              whitespace-nowrap
              border-0
              bg-transparent
              p-0
              text-[16px]
              font-medium
              text-white

              after:absolute
              after:bottom-[17px]
              after:left-0
              after:h-[2px]
              after:w-full
              after:origin-center
              after:bg-white
              after:transition-transform
              after:duration-200

              ${
                hoveredItem === "features"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }
            `}
          >
            Features
          </button>

          <a
            href="/domains"
            onMouseEnter={() => setHoveredItem("domains")}
            className={`
              relative
              flex
              h-[70px]
              items-center
              whitespace-nowrap
              text-[16px]
              font-medium
              text-white

              after:absolute
              after:bottom-[17px]
              after:left-0
              after:h-[2px]
              after:w-full
              after:origin-center
              after:bg-white
              after:transition-transform
              after:duration-200

              ${
                hoveredItem === "domains"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }
            `}
          >
            Domains
          </a>

          <button
            type="button"
            onMouseEnter={() => handleMouseEnterMenu("resources")}
            className={`
              relative
              flex
              h-[70px]
              items-center
              whitespace-nowrap
              border-0
              bg-transparent
              p-0
              text-[16px]
              font-medium
              text-white

              after:absolute
              after:bottom-[17px]
              after:left-0
              after:h-[2px]
              after:w-full
              after:origin-center
              after:bg-white
              after:transition-transform
              after:duration-200

              ${
                hoveredItem === "resources"
                  ? "after:scale-x-100"
                  : "after:scale-x-0"
              }
            `}
          >
            Resources
          </button>
        </nav>

        <div
          className="
            ml-auto
            flex
            shrink-0
            items-center
            gap-[22px]

            max-[1100px]:gap-[16px]
          "
        >
          <button
            type="button"
            className="
              whitespace-nowrap
              border-0
              bg-transparent
              p-0
              text-[16px]
              font-medium
              text-white
              transition-opacity
              duration-200
              hover:opacity-80
            "
          >
            Log In
          </button>

          <button
            type="button"
            className="
              whitespace-nowrap
              rounded-[4px]
              border
              border-white/20
              bg-[#159db0]
              px-[18px]
              py-[10px]
              text-[16px]
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-[#1aa9bb]
              hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]

              max-[1100px]:px-[15px]
              max-[1100px]:text-[15px]
            "
          >
            Sign Up
          </button>
        </div>
      </div>

      {activeMenu && (
        <div
          className="
            absolute
            left-0
            top-[70px]
            hidden
            w-full
            border-t
            border-[#dfe6e8]
            bg-white
            text-[#111827]
            shadow-[0_15px_35px_rgba(0,0,0,0.13)]

            max-[760px]:hidden
            min-[761px]:block
          "
          onMouseEnter={() => {
            setActiveMenu(activeMenu);
          }}
          onMouseLeave={closeDesktopMenu}
        >
          <div
            className="
              mx-auto
              grid
              min-h-[235px]
              w-[calc(100%-80px)]
              max-w-[1240px]
              grid-cols-[230px_1fr]
              gap-[45px]
              py-[34px]
              pb-[38px]

              max-[1100px]:w-[calc(100%-60px)]
              max-[1100px]:grid-cols-[200px_1fr]
              max-[1100px]:gap-[30px]

              max-[900px]:w-[calc(100%-40px)]
              max-[900px]:grid-cols-[170px_1fr]
              max-[900px]:gap-[25px]
            "
          >
            <div
              className="
                self-center
                text-[31px]
                font-extrabold
                tracking-[-0.5px]
                text-[#111827]

                max-[1100px]:text-[28px]

                max-[900px]:text-[25px]
              "
            >
              {activeMenu === "features" && "Features"}
              {activeMenu === "resources" && "Resources"}
            </div>

            <div
              className="
                grid
                grid-cols-3
                gap-x-[38px]
                gap-y-[30px]

                max-[1100px]:gap-x-[25px]
                max-[1100px]:gap-y-[25px]

                max-[900px]:gap-x-[20px]
                max-[900px]:gap-y-[22px]
              "
            >
              {menus[activeMenu].map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    href="#"
                    key={item.title}
                    className="
                      group
                      flex
                      min-w-0
                      items-start
                      gap-3
                      text-[#111827]
                    "
                  >
                    {Icon && (
                      <div
                        className="
                          mt-[3px]
                          shrink-0
                          text-[#111827]
                          transition-colors
                          duration-200
                          group-hover:text-[#078c9f]
                        "
                      >
                        <Icon
                          size={18}
                          strokeWidth={2}
                        />
                      </div>
                    )}

                    <div className="min-w-0">
                      <h3
                        className="
                          m-0
                          text-[17px]
                          font-extrabold
                          leading-[1.25]
                          transition-colors
                          duration-200
                          group-hover:text-[#078c9f]

                          max-[1100px]:text-[16px]

                          max-[900px]:text-[15px]
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          m-0
                          mt-[5px]
                          max-w-[245px]
                          text-[14px]
                          leading-[1.4]
                          text-[#374151]

                          max-[1100px]:text-[13px]

                          max-[900px]:text-[12px]
                        "
                      >
                        {item.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <div
        className="
          hidden
          min-h-[70px]
          items-center
          px-[20px]

          max-[760px]:flex

          max-[500px]:min-h-[64px]
          max-[500px]:px-[15px]
        "
      >
        <a
          href="/"
          onClick={closeMobileMenu}
          className="
            text-[28px]
            font-black
            leading-none
            tracking-[-1.2px]
            text-white

            max-[500px]:text-[25px]

            max-[380px]:text-[23px]
          "
        >
          TINYURL
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setActiveMenu(null);
          }}
          className="
            ml-auto
            flex
            h-[42px]
            w-[42px]
            shrink-0
            items-center
            justify-center
            rounded-[5px]
            border
            border-white/20
            bg-white/10
            text-white
            transition
            hover:bg-white/20

            max-[500px]:h-[40px]
            max-[500px]:w-[40px]
          "
        >
          {mobileOpen ? (
            <X
              size={23}
              strokeWidth={2}
            />
          ) : (
            <Menu
              size={23}
              strokeWidth={2}
            />
          )}
        </button>
      </div>

      {mobileOpen && (
        <div
          className="
            hidden
            border-t
            border-white/10
            bg-white
            px-[20px]
            pb-[22px]
            pt-[8px]
            text-[#15232c]

            max-[760px]:block

            max-[500px]:px-[15px]
            max-[500px]:pb-[18px]
          "
        >
          <a
            href="/plans"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#e0e5e7]
              py-[14px]
              text-[16px]
              font-semibold
              transition-colors
              hover:text-[#078c9f]

              max-[500px]:py-[13px]
              max-[500px]:text-[15px]
            "
          >
            Plans
          </a>

          <div className="border-b border-[#e0e5e7]">
            <button
              type="button"
              onClick={() => {
                setActiveMenu(
                  activeMenu === "features"
                    ? null
                    : "features"
                );
              }}
              className="
                flex
                w-full
                items-center
                justify-between
                py-[14px]
                text-left
                text-[16px]
                font-semibold
                transition-colors
                hover:text-[#078c9f]

                max-[500px]:py-[13px]
                max-[500px]:text-[15px]
              "
            >
              <span>Features</span>

              <span className="text-[20px]">
                {activeMenu === "features" ? "−" : "+"}
              </span>
            </button>

            {activeMenu === "features" && (
              <div className="pb-[10px]">
                {menus.features.map((item) => (
                  <a
                    href="#"
                    key={item.title}
                    onClick={closeMobileMenu}
                    className="
                      block
                      py-[8px]
                      pl-[12px]
                      text-[14px]
                      text-[#4b5563]
                      transition-colors
                      hover:text-[#078c9f]

                      max-[500px]:py-[7px]
                      max-[500px]:text-[13px]
                    "
                  >
                    <div className="font-semibold text-[#15232c]">
                      {item.title}
                    </div>

                    <div
                      className="
                        mt-[2px]
                        text-[13px]
                        leading-[1.4]

                        max-[500px]:text-[12px]
                      "
                    >
                      {item.description}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/domains"
            onClick={closeMobileMenu}
            className="
              block
              border-b
              border-[#e0e5e7]
              py-[14px]
              text-[16px]
              font-semibold
              transition-colors
              hover:text-[#078c9f]

              max-[500px]:py-[13px]
              max-[500px]:text-[15px]
            "
          >
            Domains
          </a>

          <div className="border-b border-[#e0e5e7]">
            <button
              type="button"
              onClick={() => {
                setActiveMenu(
                  activeMenu === "resources"
                    ? null
                    : "resources"
                );
              }}
              className="
                flex
                w-full
                items-center
                justify-between
                py-[14px]
                text-left
                text-[16px]
                font-semibold
                transition-colors
                hover:text-[#078c9f]

                max-[500px]:py-[13px]
                max-[500px]:text-[15px]
              "
            >
              <span>Resources</span>

              <span className="text-[20px]">
                {activeMenu === "resources" ? "−" : "+"}
              </span>
            </button>

            {activeMenu === "resources" && (
              <div className="pb-[10px]">
                {menus.resources.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      href="#"
                      key={item.title}
                      onClick={closeMobileMenu}
                      className="
                        flex
                        items-start
                        gap-3
                        py-[9px]
                        pl-[12px]
                        text-[#4b5563]
                        transition-colors
                        hover:text-[#078c9f]

                        max-[500px]:py-[8px]
                      "
                    >
                      <Icon
                        size={18}
                        className="mt-[2px] shrink-0"
                      />

                      <div className="min-w-0">
                        <div className="font-semibold text-[#15232c]">
                          {item.title}
                        </div>

                        <div
                          className="
                            mt-[2px]
                            text-[13px]
                            leading-[1.4]

                            max-[500px]:text-[12px]
                          "
                        >
                          {item.description}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            className="
              mt-[18px]
              w-full
              rounded-[4px]
              bg-[#1596a8]
              px-4
              py-[12px]
              text-center
              text-[16px]
              font-semibold
              text-white
              transition
              hover:bg-[#087f91]

              max-[500px]:mt-[15px]
              max-[500px]:py-[11px]
              max-[500px]:text-[15px]
            "
          >
            Log In
          </button>

          <button
            type="button"
            className="
              mt-[10px]
              w-full
              rounded-[4px]
              bg-[#063d56]
              px-4
              py-[12px]
              text-center
              text-[16px]
              font-semibold
              text-white
              transition
              hover:bg-[#082f43]

              max-[500px]:py-[11px]
              max-[500px]:text-[15px]
            "
          >
            Sign Up
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;