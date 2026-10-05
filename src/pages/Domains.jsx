import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "How Do I Create a Branded Link?",
    answer:
      "Branded links can be created using URL shorteners like TinyURL. Either bring your own domain or register a new one, associate it with your TinyURL account, then start shortening and sharing. See our help files for more information.",
  },
  {
    question: "How Do I Shorten a URL With a Custom Name?",
    answer:
      "To shorten a URL with a custom name on the TinyURL platform, simply copy and paste the long link in the space provided, pick a connected custom domain from the dropdown, enter in a unique link alias (ex. “example” for “mybranded.link/example”) and click 'Shorten URL'.",
  },
  {
    question:
      "How Does Having a Branded URL Benefit My Marketing Campaigns?",
    answer:
      "When branded links are used in marketing campaigns, they tend to receive more clicks because customers are more likely to trust a link with a known brand name. Branded links matter because branding matters, so whenever your marketing materials involve links of any kind, take the time to set yourself up for success by providing audiences with links they can trust.",
  },
  {
    question:
      "Can I Use My Existing Domain for Creating Branded Shortened Links?",
    answer:
      "Yes, you can use a domain you currently own — provided that it doesn’t have any existing content built on top of it.",
  },
];

function Domains() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#142b38] font-sans">
      <Navbar />

      <main>
        <section
          className="
            overflow-hidden
            bg-[#032f4c]
            px-5
            py-[55px]

            max-[900px]:py-[50px]

            max-[600px]:px-[15px]
            max-[600px]:py-[42px]

            max-[400px]:py-[35px]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1160px]
              items-center
              gap-[35px]
              md:grid-cols-2

              max-[1000px]:gap-[25px]

              max-[900px]:grid-cols-1
              max-[900px]:gap-[35px]
            "
          >
            <div className="text-white">
              <h1
                className="
                  max-w-[570px]
                  text-[42px]
                  font-extrabold
                  leading-[1.16]
                  tracking-[-1.1px]

                  max-[1100px]:text-[38px]

                  max-[1000px]:text-[36px]

                  max-[900px]:max-w-[700px]
                  max-[900px]:text-[38px]

                  max-[700px]:text-[34px]

                  max-[600px]:text-[31px]

                  max-[450px]:text-[28px]

                  max-[380px]:text-[26px]
                "
              >
                Custom Domains:
                <br />
                Your Links, Your Branding
              </h1>

              <p
                className="
                  mt-[24px]
                  max-w-[555px]
                  text-[15px]
                  leading-[1.65]
                  text-white/90

                  max-[900px]:max-w-[700px]

                  max-[600px]:mt-[20px]
                  max-[600px]:text-[14px]

                  max-[400px]:text-[13px]
                "
              >
                Branded domains are used exclusively to create short,
                appealing, and informative links that put your branding or
                core message front-and-center.
              </p>

              <p
                className="
                  mt-[18px]
                  max-w-[555px]
                  text-[15px]
                  leading-[1.65]
                  text-white/90

                  max-[900px]:max-w-[700px]

                  max-[600px]:mt-[15px]
                  max-[600px]:text-[14px]

                  max-[400px]:text-[13px]
                "
              >
                TinyURL subscribers can purchase domains directly through our
                platform. Try it now!
              </p>

              <a
                href="/"
                className="
                  mt-[22px]
                  inline-flex
                  rounded-[5px]
                  bg-[#1597a5]
                  px-[17px]
                  py-[10px]
                  text-[13px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#0e8490]

                  max-[600px]:mt-[19px]
                  max-[600px]:px-[16px]
                  max-[600px]:py-[9px]
                  max-[600px]:text-[12px]
                "
              >
                Get Started
              </a>
            </div>

            <div
              className="
                flex
                justify-center

                max-[900px]:mt-[5px]
              "
            >
              <img
                src="/image.png"
                alt="Custom Domains"
                className="
                  h-auto
                  w-full
                  max-w-[520px]
                  object-contain

                  max-[1100px]:max-w-[470px]

                  max-[900px]:max-w-[500px]

                  max-[600px]:max-w-[430px]

                  max-[400px]:max-w-[350px]
                "
              />
            </div>
          </div>
        </section>

        <section
          className="
            bg-white
            py-[90px]

            max-[1100px]:py-[75px]

            max-[900px]:py-[65px]

            max-[600px]:py-[50px]
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
            "
          >
            <h2
              className="
                text-center
                text-[40px]
                font-bold
                leading-[1.15]
                tracking-[-1px]
                text-[#082942]

                max-[1100px]:text-[37px]

                max-[900px]:text-[34px]

                max-[700px]:text-[31px]

                max-[600px]:text-[28px]

                max-[450px]:text-[25px]
              "
            >
              How You Can Use Branded Domains on TinyURL
            </h2>

            <div
              className="
                mt-[55px]
                grid
                grid-cols-3
                gap-[45px]

                max-[1100px]:gap-[30px]

                max-[1000px]:mt-[45px]
                max-[1000px]:grid-cols-1
                max-[1000px]:gap-[35px]

                max-[600px]:mt-[35px]
                max-[600px]:gap-[25px]
              "
            >
              <article
                className="
                  rounded-[10px]
                  px-[22px]
                  py-[20px]
                  text-center

                  max-[1000px]:px-[15px]
                  max-[600px]:py-[15px]
                "
              >
                <h3
                  className="
                    text-[18px]
                    font-bold
                    text-[#082942]

                    max-[600px]:text-[17px]
                  "
                >
                  Register a Domain
                </h3>

                <p
                  className="
                    mx-auto
                    mt-[19px]
                    max-w-[300px]
                    text-[14px]
                    leading-[1.65]
                    text-[#687987]

                    max-[600px]:mt-[15px]
                    max-[600px]:text-[13px]
                  "
                >
                  It’s as easy as online shopping—browse for available domains
                  and click to purchase. After a little bit of setup time,
                  you’re ready to go!
                </p>

                <div className="mt-[28px] flex justify-center">
                  <div className="group">
                    <img
                      src="/image copy.png"
                      alt="Register a Domain"
                      className="
                        h-[180px]
                        w-[245px]
                        object-contain
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:scale-[1.12]

                        max-[600px]:h-[160px]
                        max-[600px]:w-[220px]
                      "
                    />
                  </div>
                </div>
              </article>

              <article
                className="
                  rounded-[10px]
                  px-[22px]
                  py-[20px]
                  text-center

                  max-[1000px]:px-[15px]
                  max-[600px]:py-[15px]
                "
              >
                <h3
                  className="
                    text-[18px]
                    font-bold
                    text-[#082942]

                    max-[600px]:text-[17px]
                  "
                >
                  Bring Your Own Domain
                </h3>

                <p
                  className="
                    mx-auto
                    mt-[19px]
                    max-w-[300px]
                    text-[14px]
                    leading-[1.65]
                    text-[#687987]

                    max-[600px]:mt-[15px]
                    max-[600px]:text-[13px]
                  "
                >
                  Already have the perfect, unused domain for link shortening?
                  Bring it on over—we’ll walk you through the small handful of
                  steps to get started.
                </p>

                <div className="mt-[28px] flex justify-center">
                  <div className="group">
                    <img
                      src="/image copy 2.png"
                      alt="Bring Your Own Domain"
                      className="
                        h-[180px]
                        w-[245px]
                        object-contain
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:scale-[1.12]

                        max-[600px]:h-[160px]
                        max-[600px]:w-[220px]
                      "
                    />
                  </div>
                </div>
              </article>

              <article
                className="
                  rounded-[10px]
                  px-[22px]
                  py-[20px]
                  text-center

                  max-[1000px]:px-[15px]
                  max-[600px]:py-[15px]
                "
              >
                <h3
                  className="
                    text-[18px]
                    font-bold
                    text-[#082942]

                    max-[600px]:text-[17px]
                  "
                >
                  Bring Your Own Subdomain
                </h3>

                <p
                  className="
                    mx-auto
                    mt-[19px]
                    max-w-[300px]
                    text-[14px]
                    leading-[1.65]
                    text-[#687987]

                    max-[600px]:mt-[15px]
                    max-[600px]:text-[13px]
                  "
                >
                  You can also import your own subdomains for even more ways
                  to keep your links descriptive and click-worthy.
                </p>

                <div className="mt-[28px] flex justify-center">
                  <div className="group">
                    <img
                      src="/image copy 3.png"
                      alt="Bring Your Own Subdomain"
                      className="
                        h-[180px]
                        w-[245px]
                        object-contain
                        transition-transform
                        duration-300
                        ease-out
                        group-hover:scale-[1.12]

                        max-[600px]:h-[160px]
                        max-[600px]:w-[220px]
                      "
                    />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#168d9b]">
          <div
            className="
              mx-auto
              grid
              max-w-[1200px]
              items-center
              md:grid-cols-2

              max-[767px]:grid-cols-1
            "
          >
            <div
              className="
                h-full
                min-h-[380px]
                w-full
                overflow-hidden

                max-[900px]:min-h-[350px]

                max-[767px]:min-h-[320px]

                max-[600px]:min-h-[300px]

                max-[450px]:min-h-[260px]
              "
            >
              <img
                src="/image copy 4.png"
                alt="First Year Free"
                className="
                  block
                  h-full
                  min-h-[380px]
                  w-full
                  object-cover

                  max-[900px]:min-h-[350px]

                  max-[767px]:min-h-[320px]

                  max-[600px]:min-h-[300px]

                  max-[450px]:min-h-[260px]
                "
              />
            </div>

            <div
              className="
                px-[55px]
                py-[65px]
                text-white

                max-[1100px]:px-[45px]

                max-[900px]:px-[35px]
                max-[900px]:py-[50px]

                max-[767px]:px-[30px]
                max-[767px]:py-[45px]

                max-[600px]:px-[28px]
                max-[600px]:py-[40px]

                max-[400px]:px-[20px]
                max-[400px]:py-[35px]
              "
            >
              <h2
                className="
                  max-w-[500px]
                  text-[30px]
                  font-extrabold
                  leading-[1.2]

                  max-[1000px]:text-[28px]

                  max-[767px]:text-[29px]

                  max-[600px]:text-[27px]

                  max-[450px]:text-[25px]
                "
              >
                Get the First Year Free for Certain Domains
              </h2>

              <p
                className="
                  mt-[22px]
                  max-w-[500px]
                  text-[14px]
                  leading-[1.7]
                  text-white/90

                  max-[600px]:mt-[18px]
                  max-[600px]:text-[13px]
                "
              >
                Get your branded domain and create short links that are
                recognizable, memorable, and ready for your campaigns.
              </p>

              <p
                className="
                  mt-[18px]
                  max-w-[500px]
                  text-[14px]
                  leading-[1.7]
                  text-white/90

                  max-[600px]:mt-[15px]
                  max-[600px]:text-[13px]
                "
              >
                Standard billing applies after the free year has lapsed.
              </p>

              <div
                className="
                  mt-[25px]
                  flex
                  flex-wrap
                  gap-[12px]

                  max-[500px]:flex-col
                  max-[500px]:w-full
                "
              >
                <a
                  href="/plans"
                  className="
                    rounded-[6px]
                    bg-white
                    px-[25px]
                    py-[13px]
                    text-[15px]
                    font-semibold
                    text-[black]
                    transition-all
                    duration-200
                    hover:bg-[#E6E9EB]
                    hover:shadow-lg

                    max-[600px]:px-[22px]
                    max-[600px]:py-[11px]
                    max-[600px]:text-[14px]

                    max-[500px]:w-full
                    max-[500px]:text-center
                  "
                >
                  View Plans
                </a>

                <a
                  href="/"
                  className="
                    rounded-[6px]
                    bg-white
                    px-[25px]
                    py-[13px]
                    text-[15px]
                    font-semibold
                    text-[black]
                    transition-all
                    duration-200
                    hover:bg-[#E6E9EB]
                    hover:shadow-lg

                    max-[600px]:px-[22px]
                    max-[600px]:py-[11px]
                    max-[600px]:text-[14px]

                    max-[500px]:w-full
                    max-[500px]:text-center
                  "
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          className="
            bg-white
            px-5
            py-[82px]

            max-[1000px]:py-[70px]

            max-[600px]:px-[15px]
            max-[600px]:py-[50px]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              items-center
              gap-[60px]
              md:grid-cols-2

              max-[1000px]:gap-[40px]

              max-[767px]:grid-cols-1
            "
          >
            <div>
              <h2
                className="
                  text-[30px]
                  font-extrabold
                  leading-[1.2]
                  text-[#142b38]

                  max-[1000px]:text-[28px]

                  max-[767px]:text-[29px]

                  max-[600px]:text-[26px]

                  max-[450px]:text-[24px]
                "
              >
                Send Links Your Audiences Will Trust Enough To Click
              </h2>

              <p
                className="
                  mt-[23px]
                  max-w-[500px]
                  text-[14px]
                  leading-[1.7]
                  text-[#65747b]

                  max-[600px]:mt-[18px]
                  max-[600px]:text-[13px]
                "
              >
                Sharing URLs shortened with your brand&apos;s domain name is
                an easy way to let users know they can trust what you&apos;re
                sharing. It&apos;s got your name on it, after all, and higher
                trust in your branded links translates to better click-through
                rates.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/image copy 5.png"
                alt="Send Links"
                className="
                  h-auto
                  w-full
                  max-w-[470px]
                  object-contain

                  max-[1000px]:max-w-[430px]

                  max-[767px]:max-w-[470px]

                  max-[500px]:max-w-[400px]
                "
              />
            </div>
          </div>
        </section>

        <section
          className="
            bg-[#f7f8f8]
            px-5
            py-[80px]

            max-[1000px]:py-[70px]

            max-[600px]:px-[15px]
            max-[600px]:py-[50px]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              items-center
              gap-[65px]
              md:grid-cols-2

              max-[1000px]:gap-[40px]

              max-[767px]:grid-cols-1
            "
          >
            <div
              className="
                order-2
                flex
                justify-center
                md:order-1
              "
            >
              <img
                src="/image copy 6.png"
                alt="Serve Short Links"
                className="
                  h-auto
                  w-full
                  max-w-[470px]
                  object-contain

                  max-[1000px]:max-w-[430px]

                  max-[767px]:max-w-[470px]

                  max-[500px]:max-w-[400px]
                "
              />
            </div>

            <div className="order-1 md:order-2">
              <h2
                className="
                  text-[30px]
                  font-extrabold
                  leading-[1.2]
                  text-[#142b38]

                  max-[1000px]:text-[28px]

                  max-[767px]:text-[29px]

                  max-[600px]:text-[26px]

                  max-[450px]:text-[24px]
                "
              >
                Serve Short Links With Big Personality
              </h2>

              <p
                className="
                  mt-[23px]
                  max-w-[510px]
                  text-[14px]
                  leading-[1.7]
                  text-[#65747b]

                  max-[600px]:mt-[18px]
                  max-[600px]:text-[13px]
                "
              >
                Tired of sending links with the generic tinyurl.com domain?
                No problem. Send fully branded, short URLs from the convenience
                of your TinyURL dashboard. Not only is this convenient for you
                (and your audiences), but it builds trust and familiarity over
                time.
              </p>
            </div>
          </div>
        </section>

        <section
          className="
            bg-white
            px-5
            py-[82px]

            max-[1000px]:py-[70px]

            max-[600px]:px-[15px]
            max-[600px]:py-[50px]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              items-center
              gap-[65px]
              md:grid-cols-2

              max-[1000px]:gap-[40px]

              max-[767px]:grid-cols-1
            "
          >
            <div>
              <h2
                className="
                  text-[30px]
                  font-extrabold
                  leading-[1.2]
                  text-[#142b38]

                  max-[1000px]:text-[28px]

                  max-[767px]:text-[29px]

                  max-[600px]:text-[26px]

                  max-[450px]:text-[24px]
                "
              >
                Quick and Easy Configuration: Brand Your Links in a Snap
              </h2>

              <p
                className="
                  mt-[23px]
                  max-w-[510px]
                  text-[14px]
                  leading-[1.7]
                  text-[#65747b]

                  max-[600px]:mt-[18px]
                  max-[600px]:text-[13px]
                "
              >
                We like to keep things short and simple. Adding a domain can
                be as easy as hitting “purchase,” and no more complicated than
                changing up a few configurations with your domain provider.
                In any case, we’ll walk you through the simple steps to get
                started.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/image copy 7.png"
                alt="Quick Configuration"
                className="
                  h-auto
                  w-full
                  max-w-[470px]
                  object-contain

                  max-[1000px]:max-w-[430px]

                  max-[767px]:max-w-[470px]

                  max-[500px]:max-w-[400px]
                "
              />
            </div>
          </div>
        </section>

        <section
          className="
            bg-[#f7f8f8]
            px-5
            py-[80px]

            max-[1000px]:py-[70px]

            max-[600px]:px-[15px]
            max-[600px]:py-[50px]
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1120px]
              items-center
              gap-[65px]
              md:grid-cols-2

              max-[1000px]:gap-[40px]

              max-[767px]:grid-cols-1
            "
          >
            <div
              className="
                order-2
                flex
                justify-center
                md:order-1
              "
            >
              <img
                src="/image copy 8.png"
                alt="Complete Branded Short URL Management"
                className="
                  h-auto
                  w-full
                  max-w-[480px]
                  object-contain

                  max-[1000px]:max-w-[440px]

                  max-[767px]:max-w-[480px]

                  max-[500px]:max-w-[400px]
                "
              />
            </div>

            <div className="order-1 md:order-2">
              <h2
                className="
                  text-[30px]
                  font-extrabold
                  leading-[1.2]
                  text-[#142b38]

                  max-[1000px]:text-[28px]

                  max-[767px]:text-[29px]

                  max-[600px]:text-[26px]

                  max-[450px]:text-[24px]
                "
              >
                Complete Branded Short URL Management
              </h2>

              <p
                className="
                  mt-[23px]
                  max-w-[510px]
                  text-[14px]
                  leading-[1.7]
                  text-[#65747b]

                  max-[600px]:mt-[18px]
                  max-[600px]:text-[13px]
                "
              >
                If you have several branded domains connected, you’ll have an
                easy time managing and using them with our platform. Spot
                configuration issues in a jiffy, and get convenient
                notifications when your next payment is due for domains
                registered through us.
              </p>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="
            bg-white
            py-[90px]

            max-[1100px]:py-[75px]

            max-[900px]:py-[65px]

            max-[600px]:py-[50px]
          "
        >
          <div
            className="
              mx-auto
              grid
              w-[calc(100%-80px)]
              max-w-[1340px]
              grid-cols-[240px_minmax(0,1fr)]
              items-center
              gap-[77px]

              max-[1200px]:w-[calc(100%-60px)]

              max-[1100px]:grid-cols-[220px_minmax(0,1fr)]
              max-[1100px]:gap-[55px]

              max-[900px]:w-[calc(100%-40px)]
              max-[900px]:grid-cols-1
              max-[900px]:items-start
              max-[900px]:gap-[40px]

              max-[600px]:w-[calc(100%-30px)]
              max-[600px]:gap-[30px]
            "
          >
            <div
              className="
                flex
                items-center

                max-[900px]:justify-center
              "
            >
              <h2
                className="
                  text-[48px]
                  font-bold
                  leading-[1.08]
                  tracking-[-1.5px]
                  text-[#082942]

                  max-[1200px]:text-[45px]

                  max-[1100px]:text-[42px]

                  max-[900px]:text-center
                  max-[900px]:text-[40px]

                  max-[600px]:text-[32px]

                  max-[450px]:text-[29px]
                "
              >
                Frequently

                <br className="max-[900px]:hidden" />

                <span className="max-[900px]:ml-[8px]">
                  Asked
                </span>

                <br className="max-[900px]:hidden" />

                <span className="max-[900px]:ml-[8px]">
                  Questions
                </span>
              </h2>
            </div>

            <div className="w-full border-t border-[#d8e0e4]">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={item.question}
                    className="border-b border-[#d8e0e4]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="
                        flex
                        min-h-[67px]
                        w-full
                        items-center
                        justify-between
                        gap-[20px]
                        px-[46px]
                        py-[18px]
                        text-left
                        transition-colors
                        duration-200
                        hover:bg-[#fafcfd]

                        max-[1100px]:px-[30px]

                        max-[900px]:gap-[15px]

                        max-[600px]:min-h-[62px]
                        max-[600px]:px-[15px]
                        max-[600px]:py-[17px]
                      "
                    >
                      <span
                        className="
                          text-[18px]
                          font-semibold
                          leading-[1.3]
                          text-[#082942]

                          max-[900px]:text-[17px]

                          max-[600px]:text-[15px]

                          max-[400px]:text-[14px]
                        "
                      >
                        {item.question}
                      </span>

                      <span
                        className="
                          flex
                          shrink-0
                          items-center
                          justify-center
                          text-[#082942]
                        "
                      >
                        {isOpen ? (
                          <ChevronUp
                            size={20}
                            strokeWidth={2}
                            className="max-[600px]:h-[18px] max-[600px]:w-[18px]"
                          />
                        ) : (
                          <ChevronDown
                            size={20}
                            strokeWidth={2}
                            className="max-[600px]:h-[18px] max-[600px]:w-[18px]"
                          />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div
                        className="
                          px-[46px]
                          pb-[25px]

                          max-[1100px]:px-[30px]

                          max-[600px]:px-[15px]
                          max-[600px]:pb-[20px]
                        "
                      >
                        <p
                          className="
                            max-w-[900px]
                            text-[15px]
                            leading-[1.75]
                            text-[#627482]

                            max-[600px]:text-[14px]

                            max-[400px]:text-[13px]
                          "
                        >
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default Domains;