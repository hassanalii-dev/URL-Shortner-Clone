import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const questions = [
  {
    question: "What Is a URL Shortener?",
    answer:
      "A URL shortener, also known as a link shortener, is a useful tool that trims long and intricate URLs into shorter and more understandable links.",
  },
  {
    question: "How Does a URL Shortener Work?",
    answer:
      "URL shorteners work like simple signposts: they create new links (redirects) that serve the single purpose of bouncing users to an eventual destination. Since all URLs are essentially just instructions for where your web browser should send you online, you can think of shortening a URL as turning geographic coordinates into handy, easy-to-understand street addresses.",
  },
  {
    question: "What Are the Benefits of Using a Short URL?",
    answer:
      "Brands, organizations, and individuals use link shorteners to make sharing links more convenient. They make it possible to fit links into emails, social media posts, print materials, billboards, or even make it so links can be read aloud on audio-dependent media like podcasts. With our paid plans, you can even shorten links using your own brand’s domain, and then track detailed click analytics for sharper, faster decision-making!",
  },
  {
    question: "What Is a Custom URL Shortener?",
    answer:
      "A custom URL shortener (also known as a branded URL shortener) is a link shortener that lets you use a personalized domain in place of a default like tinyurl.com. These fully custom or branded links are great for building trust with audiences, earning higher click-through rates, giving more information about a link’s destination, and improving brand recall.",
  },
  {
    question: "How Do I Shorten a URL for Free?",
    answer:
      "You can shorten a URL for free using TinyURL’s link shortening platform. The process is incredibly straightforward: Just visit our URL shortener tool on your browser of choice, key in your long URL into the indicated field, and generate a shortened URL by clicking the 'Shorten URL' button. If you’re feeling creative, you can try and attach a unique back half (ex. tinyurl.com/example) by using the ‘Alias’ field.",
  },
  {
    question: "How Do I Know Your Service Is Reliable and Scalable?",
    answer:
      "TinyURL is a cutting-edge link-shortening platform that caters to a broad user base looking for a robust method to shorten and brand links. Our platform is trusted by big brands around the world for creating links that are safe, reliable, and never expire. We’ve created billions of short, branded links so far!",
  },
  {
    question: "Can I Use a Domain I Already Own?",
    answer:
      "Certainly, you can! We pride ourselves on offering personalization features and flexibility so users can create fully customized links. Our paid plans let you register or import top-level domains (example.com) or subdomains (subdomain.example.com) provided they don’t have web content built on top of them.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section
      id="faq"
      className="
        bg-white
        py-[90px]
        max-[1100px]:py-[75px]
        max-[900px]:py-[65px]
        max-[600px]:py-[50px]
        max-[400px]:py-[40px]
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

          max-[1200px]:gap-[60px]

          max-[1100px]:grid-cols-[210px_minmax(0,1fr)]
          max-[1100px]:gap-[50px]

          max-[900px]:w-[calc(100%-40px)]
          max-[900px]:grid-cols-1
          max-[900px]:items-start
          max-[900px]:gap-[40px]

          max-[600px]:w-[calc(100%-30px)]
          max-[600px]:gap-[30px]

          max-[400px]:w-[calc(100%-24px)]
          max-[400px]:gap-[25px]
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

              max-[1100px]:text-[40px]

              max-[900px]:text-center
              max-[900px]:text-[38px]

              max-[700px]:text-[34px]

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
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="border-b border-[#d8e0e4]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
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

                    max-[900px]:min-h-[64px]

                    max-[700px]:gap-[15px]
                    max-[700px]:px-[22px]

                    max-[600px]:min-h-[62px]
                    max-[600px]:px-[15px]
                    max-[600px]:py-[17px]

                    max-[400px]:gap-[10px]
                    max-[400px]:px-[12px]
                  "
                >
                  <span
                    className="
                      text-[18px]
                      font-semibold
                      leading-[1.3]
                      text-[#082942]

                      max-[900px]:text-[17px]

                      max-[700px]:text-[16px]

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

                      max-[900px]:pb-[23px]

                      max-[700px]:px-[22px]

                      max-[600px]:px-[15px]
                      max-[600px]:pb-[20px]

                      max-[400px]:px-[12px]
                      max-[400px]:pb-[18px]
                    "
                  >
                    <p
                      className="
                        max-w-[900px]
                        text-[15px]
                        leading-[1.75]
                        text-[#627482]

                        max-[700px]:text-[14px]

                        max-[600px]:text-[14px]
                        max-[600px]:leading-[1.7]

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
  );
}

export default FAQ;