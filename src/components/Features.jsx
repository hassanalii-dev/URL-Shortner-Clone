const features = [
  {
    title: "Detailed Link Analytics",
    text: "Stay on top of your links' performance and get insights into the clicks you earn and people you reach.",
    image: "/image copy 16.png",
  },
  {
    title: "Fully Branded Domains",
    text: "Customize every part of your links with branded domains — say goodbye to default link shortening!",
    image: "/image copy 17.png",
  },
  {
    title: "Bulk Short URLs",
    text: "Scale your communications with our API, and create thousands of unique short links in the blink of an eye.",
    image: "/image copy 18.png",
  },
  {
    title: "Link Management",
    text: "Take full control of your links: search, edit, and manage thousands at a time from a convenient dashboard.",
    image: "/image copy 19.png",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="
        bg-white
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
        <h2
          className="
            mb-[55px]
            text-center
            text-[40px]
            font-bold
            leading-[1.15]
            tracking-[-1px]
            text-[#082942]

            max-[1100px]:mb-[50px]
            max-[1100px]:text-[36px]

            max-[900px]:mb-[45px]
            max-[900px]:text-[34px]

            max-[700px]:text-[31px]

            max-[600px]:mb-[35px]
            max-[600px]:text-[28px]

            max-[450px]:text-[25px]
          "
        >
          TinyURL Plans Include:
        </h2>

        <div
          className="
            grid
            grid-cols-4
            gap-x-[45px]
            gap-y-[60px]

            max-[1150px]:gap-x-[30px]

            max-[1050px]:grid-cols-2
            max-[1050px]:gap-x-[45px]
            max-[1050px]:gap-y-[55px]

            max-[700px]:gap-x-[25px]
            max-[700px]:gap-y-[45px]

            max-[600px]:grid-cols-1
            max-[600px]:gap-y-[45px]

            max-[450px]:gap-y-[40px]
          "
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                min-w-0
              "
            >
              <div>
                <h3
                  className="
                    mb-[12px]
                    text-[20px]
                    font-bold
                    leading-[1.25]
                    text-[#082942]

                    max-[900px]:text-[19px]

                    max-[600px]:text-[20px]

                    max-[450px]:text-[19px]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    text-[15px]
                    leading-[1.65]
                    text-[#627482]

                    max-[900px]:text-[14px]

                    max-[600px]:text-[15px]

                    max-[450px]:text-[14px]
                  "
                >
                  {feature.text}
                </p>
              </div>

              <div
                className="
                  mt-[28px]
                  flex
                  min-h-[210px]
                  items-end
                  justify-center
                  overflow-hidden
                  px-[10px]
                  pt-[20px]

                  max-[1050px]:min-h-[220px]

                  max-[700px]:min-h-[210px]

                  max-[600px]:min-h-[230px]
                  max-[600px]:px-[15px]

                  max-[450px]:min-h-[210px]
                "
              >
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="
                      block
                      h-auto
                      w-full
                      max-w-[280px]
                      object-contain
                      transition-transform
                      duration-500
                      ease-out
                      hover:scale-[1.08]

                      max-[1050px]:max-w-[300px]

                      max-[600px]:max-w-[320px]
                    "
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;