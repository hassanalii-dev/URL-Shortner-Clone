import { useState } from "react";

function Analytics() {
  const cards = [
    {
      title: "Unlimited Tracked Clicks",
      text: "We don’t believe in making you suffer for your success: track as many clicks as you earn with our Pro plans!",
      image: "/image copy 10.png",
    },
    {
      title: "Detailed Link Analytics",
      text: "Get actionable, detailed insights into your social media, emails, ads, and any other platforms where click-through matters.",
      image: "/image copy 11.png",
    },
    {
      title: "Branded Domains",
      text: "Links shortened using your own custom domain are more professional, more trustworthy, and more clickable.",
      image: "/image copy 12.png",
    },
    {
      title: "Fully Custom Links",
      text: "Create short links that put your brand front-and-center! Attaching your brand domain to TinyURL is quick and intuitive.",
      image: "/image copy 13.png",
    },
    {
      title: "Bulk Short URLs",
      text: "Need tons of unique, rule-based links quickly? Shorten several links in a single go using our platform or API.",
      image: "/image copy 14.png",
    },
    {
      title: "Link Management",
      text: "Worried about finding one or two essential links in a tide of thousands? We solve that with intuitive management features.",
      image: "/image copy 15.png",
    },
  ];

  const [activeCard, setActiveCard] = useState(0);

  const activeImage = cards[activeCard].image;

  return (
    <>
      <section className="overflow-hidden bg-[#1594a5] py-0">
        <div className="mx-auto w-[calc(100%-80px)] max-w-[1240px] max-[900px]:w-[calc(100%-40px)] max-[600px]:w-[calc(100%-30px)]">
          <div
            className="
              grid
              grid-cols-2
              items-stretch
              gap-[70px]
              max-[1100px]:gap-[45px]
              max-[900px]:grid-cols-1
              max-[900px]:gap-0
            "
          >
            <div
              className="
                h-[566px]
                w-full
                overflow-hidden
                max-[900px]:h-[430px]
                max-[700px]:h-[350px]
                max-[600px]:h-[300px]
              "
            >
              <img
                src="/image copy 20.png"
                alt="Link Shortening Done Quick and Easy"
                className="
                  block
                  h-full
                  w-full
                  object-cover
                  object-center
                "
              />
            </div>

            <div
              className="
                flex
                items-center
                py-[70px]
                pr-[10px]
                text-white
                max-[1100px]:py-[55px]
                max-[900px]:px-0
                max-[900px]:py-[55px]
                max-[600px]:py-[45px]
              "
            >
              <div className="w-full">
                <h2
                  className="
                    mb-[24px]
                    max-w-[560px]
                    text-[38px]
                    font-bold
                    leading-[1.15]
                    tracking-[-1px]
                    max-[1100px]:text-[34px]
                    max-[900px]:max-w-[700px]
                    max-[700px]:text-[31px]
                    max-[600px]:text-[28px]
                  "
                >
                  Link Shortening Done Quick and Easy
                </h2>

                <p
                  className="
                    mb-[18px]
                    max-w-[600px]
                    text-[16px]
                    leading-[1.7]
                    text-white/90
                    max-[600px]:text-[15px]
                  "
                >
                  Our URL shortener is not only among the first-ever link
                  shorteners on the Internet — it's the best out there.
                </p>

                <p
                  className="
                    mb-[18px]
                    max-w-[600px]
                    text-[16px]
                    leading-[1.7]
                    text-white/90
                    max-[600px]:text-[15px]
                  "
                >
                  Shorten links for social media, blogs, SMS, emails, ads,
                  and almost anything both off- and online.
                </p>

                <p
                  className="
                    mb-[28px]
                    max-w-[600px]
                    text-[16px]
                    leading-[1.7]
                    text-white/90
                    max-[600px]:text-[15px]
                  "
                >
                  Wave goodbye to long, clunky links and give your audiences
                  the experiences they deserve!
                </p>

                <div
                  className="
                    flex
                    flex-wrap
                    gap-[14px]
                    max-[500px]:flex-col
                    max-[500px]:items-stretch
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
                      text-[#087f91]
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
                      bg-white
                      px-[25px]
                      py-[13px]
                      text-[15px]
                      font-semibold
                      text-[#087f91]
                      transition-all
                      duration-200
                      hover:bg-[#E6E9EB]
                      hover:shadow-lg
                      max-[500px]:w-full
                    "
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="
          bg-white
          py-[90px]
          max-[900px]:py-[65px]
          max-[600px]:py-[50px]
        "
      >
        <div
          className="
            mx-auto
            w-[calc(100%-80px)]
            max-w-[1240px]
            max-[900px]:w-[calc(100%-40px)]
            max-[600px]:w-[calc(100%-30px)]
          "
        >
          <div
            className="
              mx-auto
              mb-[65px]
              max-w-[760px]
              text-center
              max-[900px]:mb-[50px]
              max-[600px]:mb-[40px]
            "
          >
            <h2
              className="
                mb-[18px]
                text-[40px]
                font-bold
                leading-[1.15]
                tracking-[-1px]
                text-[#082942]
                max-[1000px]:text-[36px]
                max-[900px]:text-[34px]
                max-[700px]:text-[30px]
                max-[600px]:text-[28px]
              "
            >
              Your One-Stop Solution for Branding and Managing Links
            </h2>

            <p
              className="
                mb-[25px]
                text-[16px]
                leading-[1.7]
                text-[#526575]
                max-[600px]:text-[15px]
              "
            >
              We offer a comprehensive suite of premium features to allow
              users to brand and manage links conveniently and confidently.
            </p>

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
                max-[500px]:max-w-[280px]
              "
            >
              View Plans
            </button>
          </div>

          <div
            className="
              grid
              grid-cols-[1fr_1.15fr_1fr]
              items-center
              gap-[45px]
              max-[1100px]:gap-[30px]
              max-[1000px]:grid-cols-1
              max-[1000px]:gap-[30px]
            "
          >
            <div className="flex flex-col gap-[8px]">
              {cards.slice(0, 3).map((card, index) => (
                <div
                  key={card.title}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`
                    cursor-pointer
                    rounded-[10px]
                    px-[22px]
                    py-[20px]
                    transition-all
                    duration-300
                    max-[1000px]:px-[20px]
                    max-[700px]:px-[18px]
                    max-[600px]:py-[18px]
                    ${
                      activeCard === index
                        ? "bg-[#f1fbfc]"
                        : "bg-transparent"
                    }
                  `}
                >
                  <h3
                    className={`
                      mb-[8px]
                      text-[18px]
                      font-bold
                      transition-colors
                      duration-300
                      max-[700px]:text-[17px]
                      ${
                        activeCard === index
                          ? "text-[#1196a5]"
                          : "text-[#082942]"
                      }
                    `}
                  >
                    {card.title}
                  </h3>

                  <p
                    className="
                      text-[14px]
                      leading-[1.65]
                      text-[#687987]
                      max-[600px]:text-[13px]
                    "
                  >
                    {card.text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="
                flex
                min-h-[380px]
                items-center
                justify-center
                overflow-hidden
                rounded-[12px]
                bg-[#f5f9fa]
                p-[15px]
                max-[1000px]:order-first
                max-[1000px]:min-h-[420px]
                max-[800px]:min-h-[360px]
                max-[700px]:min-h-[300px]
                max-[600px]:min-h-[260px]
                max-[600px]:p-[12px]
              "
            >
              {activeImage && (
                <img
                  src={activeImage}
                  alt={cards[activeCard].title}
                  key={activeImage}
                  className="
                    block
                    h-auto
                    max-h-[440px]
                    w-full
                    object-contain
                    transition-all
                    duration-300
                    max-[1000px]:max-h-[400px]
                    max-[800px]:max-h-[350px]
                    max-[600px]:max-h-[280px]
                  "
                />
              )}
            </div>

            <div className="flex flex-col gap-[8px]">
              {cards.slice(3, 6).map((card, index) => {
                const realIndex = index + 3;

                return (
                  <div
                    key={card.title}
                    onMouseEnter={() => setActiveCard(realIndex)}
                    className={`
                      cursor-pointer
                      rounded-[10px]
                      px-[22px]
                      py-[20px]
                      transition-all
                      duration-300
                      max-[1000px]:px-[20px]
                      max-[700px]:px-[18px]
                      max-[600px]:py-[18px]
                      ${
                        activeCard === realIndex
                          ? "bg-[#f1fbfc]"
                          : "bg-transparent"
                      }
                    `}
                  >
                    <h3
                      className={`
                        mb-[8px]
                        text-[18px]
                        font-bold
                        transition-colors
                        duration-300
                        max-[700px]:text-[17px]
                        ${
                          activeCard === realIndex
                            ? "text-[#1196a5]"
                            : "text-[#082942]"
                        }
                      `}
                    >
                      {card.title}
                    </h3>

                    <p
                      className="
                        text-[14px]
                        leading-[1.65]
                        text-[#687987]
                        max-[600px]:text-[13px]
                      "
                    >
                      {card.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Analytics;