function CTA() {
  return (
    <section
      className="
        bg-[#032b47]
        px-5
        py-[85px]
        text-center
        max-[900px]:py-[65px]
        max-[600px]:px-[15px]
        max-[600px]:py-[50px]
      "
    >
      <div
        className="
          mx-auto
          w-[calc(100%-80px)]
          max-w-[850px]
          max-[900px]:w-[calc(100%-40px)]
          max-[600px]:w-full
        "
      >
        <h2
          className="
            mb-[20px]
            text-[42px]
            font-bold
            leading-[1.15]
            tracking-[-1px]
            text-white
            max-[1000px]:text-[38px]
            max-[900px]:text-[36px]
            max-[700px]:text-[32px]
            max-[600px]:mb-[16px]
            max-[600px]:text-[29px]
            max-[450px]:text-[26px]
          "
        >
          Ready for Shorter, Smarter Links?
        </h2>

        <p
          className="
            mx-auto
            mb-[30px]
            max-w-[720px]
            text-[17px]
            leading-[1.7]
            text-white/80
            max-[900px]:max-w-[650px]
            max-[700px]:text-[16px]
            max-[600px]:mb-[25px]
            max-[600px]:text-[15px]
            max-[450px]:text-[14px]
          "
        >
          Transform a long link into a short, trackable one using our
          platform. Create a free account or subscribe to a paid plan today!
        </p>

        <div
          className="
            flex
            flex-wrap
            items-center
            justify-center
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
    </section>
  );
}

export default CTA;