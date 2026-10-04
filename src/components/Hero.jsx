import Shortener from "./Shortener";
import RecentLinks from "./RecentLinks";

function Hero({ links, onCreate }) {
  return (
    <section
      className="
        bg-[#032b47]
        py-[85px]

        max-[1100px]:py-[75px]
        max-[900px]:py-[65px]
        max-[600px]:py-[50px]
        max-[400px]:py-[40px]
      "
    >
      <div
        className="
          mx-auto
          w-[calc(100%-80px)]
          max-w-[1240px]

          max-[1100px]:w-[calc(100%-60px)]

          max-[900px]:w-[calc(100%-40px)]

          max-[600px]:w-[calc(100%-30px)]

          max-[400px]:w-[calc(100%-24px)]
        "
      >
        {/* MAIN HERO GRID */}

        <div
          className="
            grid
            grid-cols-[1fr_0.95fr]
            items-center
            gap-[70px]

            max-[1150px]:gap-[55px]

            max-[1000px]:grid-cols-[1fr_0.9fr]
            max-[1000px]:gap-[45px]

            max-[950px]:grid-cols-1
            max-[950px]:gap-[45px]
          "
        >
          {/* LEFT CONTENT */}

          <div className="text-white">
            <h1
              className="
                mb-[25px]
                text-[48px]
                font-bold
                leading-[1.1]
                tracking-[-1.5px]

                max-[1100px]:text-[42px]

                max-[950px]:max-w-[750px]

                max-[700px]:text-[36px]

                max-[600px]:mb-[20px]
                max-[600px]:text-[32px]
                max-[600px]:tracking-[-1px]

                max-[450px]:text-[29px]

                max-[380px]:text-[27px]
              "
            >
              URL Shortener, Branded
              <br className="max-[600px]:hidden" />
              <span className="max-[600px]:block">
                {" "}
                Short Links &amp; Analytics
              </span>
            </h1>

            <p
              className="
                mb-[18px]
                max-w-[610px]
                text-[17px]
                leading-[1.7]
                text-white/85

                max-[900px]:max-w-[700px]

                max-[700px]:text-[16px]

                max-[600px]:text-[15px]
                max-[600px]:leading-[1.65]

                max-[450px]:text-[14px]
              "
            >
              Welcome to the original link shortener —
              simplifying the Internet through the power
              of the URL since 2002.
            </p>

            <p
              className="
                mb-[30px]
                max-w-[610px]
                text-[17px]
                leading-[1.7]
                text-white/85

                max-[900px]:max-w-[700px]

                max-[700px]:text-[16px]

                max-[600px]:mb-[25px]
                max-[600px]:text-[15px]
                max-[600px]:leading-[1.65]

                max-[450px]:text-[14px]
              "
            >
              You can use branded domains for fully custom
              links, track link analytics, and enjoy other
              powerful features with our paid plans.
            </p>

            {/* BUTTONS */}

            <div
              className="
                flex
                flex-wrap
                gap-[14px]

                max-[500px]:flex-col
                max-[500px]:w-full
              "
            >
              <button
                className="
                  rounded-[6px]
                  bg-white
                  px-[25px]
                  py-[13px]
                  text-[15px]
                  font-semibold
                  text-black
                  transition-all
                  duration-200
                  hover:bg-[#E6E9EB]
                  hover:shadow-lg

                  max-[500px]:w-full
                "
              >
                View Plans
              </button>

              <button
                className="
                  rounded-[6px]
                  bg-[#1196a5]
                  px-[28px]
                  py-[13px]
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  duration-200
                  hover:bg-[#087f91]
                  hover:shadow-lg

                  max-[500px]:w-full
                "
              >
                Create Free Account
              </button>
            </div>
          </div>

          {/* RIGHT — SHORTENER */}

          <div
            className="
              w-full

              max-[950px]:mx-auto
              max-[950px]:max-w-[700px]
            "
          >
            <Shortener onCreate={onCreate} />
          </div>
        </div>

        {/* RECENT LINKS */}

        <div
          className="
            mt-[45px]

            max-[950px]:mt-[40px]

            max-[600px]:mt-[30px]
          "
        >
          <RecentLinks links={links} />
        </div>
      </div>
    </section>
  );
}

export default Hero;