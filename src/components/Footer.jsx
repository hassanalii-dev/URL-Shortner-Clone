const footerData = [
  {
    title: "Features",
    links: [
      "Link Editor",
      "Link Management",
      "Branded Links",
      "Short URL Tracking",
      "QR Code Generator",
      "Short URL API",
    ],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "For Developers",
      "Our Proven Process",
      "About Us",
    ],
  },
  {
    title: "Contact Us",
    links: [
      "Help Desk",
      "Contact Sales",
      "Contact Support",
      "Report Abuse",
    ],
  },
  {
    title: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Accessibility Statement",
      "Privacy Manager",
    ],
  },
];

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[19px] w-[19px]"
    >
      <path
        fill="currentColor"
        d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[19px] w-[19px]"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[19px] w-[19px]"
    >
      <path
        fill="currentColor"
        d="M5 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1 0-5ZM3 10h4v11H3V10Zm6 0h3.8v1.5h.05c.53-1 1.82-2 3.75-2 4.01 0 4.75 2.64 4.75 6.08V21h-4v-4.8c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55V21H9V10Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-[19px] w-[19px]"
    >
      <path
        fill="currentColor"
        d="M5.1 4h4.2l3.25 4.38L16.3 4h2.6l-5.15 5.92L19.5 20h-4.2l-3.75-5.05L7.05 20h-2.6l5.5-6.6L5.1 4Zm3.8 1.8H7.2l8.55 12.4h1.7L8.9 5.8Z"
      />
    </svg>
  );
}

function Footer() {
  return (
    <footer
      className="
        bg-linear-to-r
        from-[#063d56]
        via-[#07566d]
        to-[#032b47]
        text-white
      "
    >
      <div
        className="
          mx-auto
          w-[calc(100%-80px)]
          max-w-[1240px]
          py-[65px]

          max-[1100px]:py-[55px]

          max-[900px]:w-[calc(100%-40px)]
          max-[900px]:py-[50px]

          max-[600px]:w-[calc(100%-30px)]
          max-[600px]:py-[40px]

          max-[400px]:w-[calc(100%-24px)]
          max-[400px]:py-[35px]
        "
      >
        <div
          className="
            grid
            grid-cols-[1fr_260px]
            gap-[70px]

            max-[1100px]:grid-cols-[1fr_230px]
            max-[1100px]:gap-[50px]

            max-[900px]:grid-cols-1
            max-[900px]:gap-[45px]
          "
        >
          {/* LEFT SIDE */}

          <div
            className="
              grid
              grid-cols-4
              gap-[35px]

              max-[1100px]:gap-[25px]

              max-[900px]:grid-cols-4
              max-[900px]:gap-[30px]

              max-[700px]:grid-cols-2
              max-[700px]:gap-x-[35px]
              max-[700px]:gap-y-[40px]

              max-[450px]:grid-cols-1
              max-[450px]:gap-y-[30px]
            "
          >
            {footerData.map((column) => (
              <div key={column.title}>
                {/* COLUMN TITLE */}

                <h3
                  className="
                    mb-[20px]
                    text-[16px]
                    font-bold
                    text-white

                    max-[600px]:mb-[15px]
                    max-[600px]:text-[15px]
                  "
                >
                  {column.title}
                </h3>

                {/* LINKS */}

                <div className="flex flex-col items-start gap-[11px]">
                  {column.links.map((link) => (
                    <a
                      href="#"
                      key={link}
                      className="
                        text-[14px]
                        leading-[1.5]
                        text-white/70
                        transition-colors
                        duration-200
                        hover:text-white

                        max-[600px]:text-[13px]
                      "
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}

          <div
            className="
              flex
              flex-col
              items-end
              text-right

              max-[900px]:items-start
              max-[900px]:text-left
            "
          >
            {/* SOCIAL ICONS */}

            <div
              className="
                mb-[28px]
                flex
                items-center
                gap-[10px]

                max-[900px]:mb-[25px]

                max-[450px]:gap-[8px]
              "
            >
              <a
                href="#"
                aria-label="Facebook"
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  text-white/80
                  transition-all
                  duration-200
                  hover:-translate-y-[2px]
                  hover:border-white
                  hover:bg-white
                  hover:text-[#063d56]

                  max-[450px]:h-[36px]
                  max-[450px]:w-[36px]
                "
              >
                <FacebookIcon />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  text-white/80
                  transition-all
                  duration-200
                  hover:-translate-y-[2px]
                  hover:border-white
                  hover:bg-white
                  hover:text-[#063d56]

                  max-[450px]:h-[36px]
                  max-[450px]:w-[36px]
                "
              >
                <InstagramIcon />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  text-white/80
                  transition-all
                  duration-200
                  hover:-translate-y-[2px]
                  hover:border-white
                  hover:bg-white
                  hover:text-[#063d56]

                  max-[450px]:h-[36px]
                  max-[450px]:w-[36px]
                "
              >
                <LinkedinIcon />
              </a>

              <a
                href="#"
                aria-label="X"
                className="
                  flex
                  h-[38px]
                  w-[38px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/25
                  text-white/80
                  transition-all
                  duration-200
                  hover:-translate-y-[2px]
                  hover:border-white
                  hover:bg-white
                  hover:text-[#063d56]

                  max-[450px]:h-[36px]
                  max-[450px]:w-[36px]
                "
              >
                <XIcon />
              </a>
            </div>

            {/* LOGO */}

            <div
              className="
                mb-[18px]
                text-[30px]
                font-black
                tracking-[-1.5px]
                text-white

                max-[600px]:text-[28px]

                max-[450px]:mb-[15px]
                max-[450px]:text-[26px]
              "
            >
              TINYURL
            </div>

            {/* COPYRIGHT */}

            <p
              className="
                mb-[4px]
                text-[13px]
                text-white/60

                max-[450px]:text-[12px]
              "
            >
              © 2026 TinyURL LLC
            </p>

            <p
              className="
                text-[13px]
                text-white/60

                max-[450px]:text-[12px]
              "
            >
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;