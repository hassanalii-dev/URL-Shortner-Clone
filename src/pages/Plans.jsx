import { useEffect, useState } from "react";
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  CheckCircle2,
} from "lucide-react";

import Navbar from "../components/Navbar.jsx";
import CTA from "../components/CTA.jsx";
import Footer from "../components/Footer.jsx";

/* =========================================================
   FEATURE CATEGORIES
========================================================= */

const categories = [
  "Monthly Volumes",
  "Link Management",
  "Link Branding & Customization",
  "Monitoring & Analytics",
  "Customer Support",
];

/* =========================================================
   PRO SLIDER PLANS
========================================================= */

const proPlans = [
  {
    title: "Pro",
    links: 125,
    price: 9,
    annual: 108,
    linkOverage: "+$1.50 per 10 additional links*",
  },
  {
    title: "Pro 250",
    links: 250,
    price: 13,
    annual: 156,
    linkOverage: "+$1.00 per 10 additional links*",
  },
  {
    title: "Pro 1K",
    links: 1000,
    price: 29,
    annual: 348,
    linkOverage: "+$6.00 per 100 additional links*",
  },
  {
    title: "Pro 2K",
    links: 2000,
    price: 49,
    annual: 588,
    linkOverage: "+$5.00 per 100 additional links*",
  },
  {
    title: "Pro 4K",
    links: 4000,
    price: 65,
    annual: 780,
    linkOverage: "+$4.00 per 100 additional links*",
  },
];

/* =========================================================
   BULK SLIDER PLANS
========================================================= */

const bulkPlans = [
  {
    title: "Bulk 50K",
    links: 50000,
    price: 69,
    annual: 828,
    linkOverage: "+$2.00 per 1000 additional links*",
    clickOverage: "+$0.60 per 1000 additional clicks*",
  },
  {
    title: "Bulk 100K",
    links: 100000,
    price: 99,
    annual: 1188,
    linkOverage: "+$1.50 per 1000 additional links*",
    clickOverage: "+$0.45 per 1000 additional clicks*",
  },
  {
    title: "Bulk 500K",
    links: 500000,
    price: 299,
    annual: 3588,
    linkOverage: "+$0.90 per 1000 additional links*",
    clickOverage: "+$0.27 per 1000 additional clicks*",
  },
  {
    title: "Bulk 1M",
    links: 1000000,
    price: 499,
    annual: 5988,
    linkOverage: "+$0.75 per 1000 additional links*",
    clickOverage: "+$0.22 per 1000 additional clicks*",
  },
  {
    title: "Bulk 2M",
    links: 2000000,
    price: 799,
    annual: 9588,
    linkOverage: "+$0.60 per 1000 additional links*",
    clickOverage: "+$0.18 per 1000 additional clicks*",
  },
  {
    title: "Bulk 4M",
    links: 4000000,
    price: 1349,
    annual: 16188,
    linkOverage: "+$0.50 per 1000 additional links*",
    clickOverage: "+$0.15 per 1000 additional clicks*",
  },
];

/* =========================================================
   FEATURE BREAKDOWN DATA
========================================================= */

const featureSections = [
  {
    id: "monthly-volumes",
    title: "Monthly Volumes",
    rows: [
      {
        name: "Links",
        values: ["30", "125", "50,000", "Custom"],
      },
      {
        name: "Tracked Clicks",
        values: ["×", "Unlimited", "50,000", "Custom"],
      },
    ],
  },

  {
    id: "link-management",
    title: "Link Management",
    rows: [
      {
        name: "Customize URL Aliases",
        values: [true, true, true, true],
      },
      {
        name: "Tag Links",
        values: [false, true, true, true],
      },
      {
        name: "Rename Link Aliases",
        values: [true, true, true, true],
      },
      {
        name: "Edit Link Destinations",
        values: [false, true, true, true],
      },
      {
        name: "Delete Links",
        values: [false, true, true, true],
      },
      {
        name: "Default Link Expiration",
        values: [
          "Never Expire",
          "Never Expires",
          "90 Days",
          "Custom",
        ],
      },
      {
        name: "Set Link Expiration Dates",
        values: [false, true, true, true],
      },
      {
        name: "Shorten by Browser",
        values: [false, true, true, true],
      },
    ],
  },

  {
    id: "link-branding",
    title: "Link Branding & Customization",
    rows: [
      {
        name: "Branded Domains",
        values: ["1", "3", "3", "Custom"],
      },
      {
        name: "Shorten Links with Custom Domains",
        values: [true, true, true, true],
      },
      {
        name: "1 Free Year on Selected Domains",
        values: [false, true, true, true],
      },
      {
        name: "Bring Your Domains to TinyURL",
        values: [false, true, true, true],
      },
      {
        name: "Bring Your Subdomains to TinyURL",
        values: [false, true, true, true],
      },
    ],
  },

  {
    id: "monitoring",
    title: "Monitoring & Analytics",
    rows: [
      {
        name: "Analytics Dashboard",
        values: [false, true, true, true],
      },
      {
        name: "Link Analytics History",
        values: [false, "2 Years", "2 Years", "2 Years"],
      },
      {
        name: "Total Clicks",
        values: [false, true, true, true],
      },
      {
        name: "Clicks over Time",
        values: [false, true, true, true],
      },
      {
        name: "Clicks by Referrer",
        values: [false, true, true, true],
      },
      {
        name: "Clicks by Geography",
        values: [false, true, true, true],
      },
      {
        name: "Clicks by Device Language",
        values: [false, true, true, true],
      },
      {
        name: "Clicks by Device Type",
        values: [false, true, true, true],
      },
      {
        name: "Clicks by OS",
        values: [false, true, true, true],
      },
      {
        name: "Clicks by Browser",
        values: [false, true, true, true],
      },
    ],
  },

  {
    id: "customer-support",
    title: "Customer Support",
    rows: [
      {
        name: "Customer Support Tickets",
        values: [true, true, true, true],
      },
      {
        name: "Dedicated Account Manager",
        values: [false, false, false, true],
      },
      {
        name: "Emergency Phone Support",
        values: [false, false, false, true],
      },
      {
        name: "SLA Uptime Guarantee",
        values: [false, false, false, "99.9%"],
      },
    ],
  },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
  {
    question: "What payment methods do you support?",
    answer:
      "TinyURL supports all major credit cards (Visa, Mastercard, AMEX, etc.) issued anywhere in the world.",
  },
  {
    question: "How will TinyURL bill me for my subscription?",
    answer:
      "Paid subscribers have the option to be billed automatically using the credit card you set for auto-payment. Billing takes place on a monthly or annual basis — depending on the option you selected when you purchased or last updated your subscription.",
  },
  {
    question: "How do I view my invoices?",
    answer:
      "You can find the list of your invoices on the Billing Management page of your Account Settings, when logged into an account with a paid subscription.",
  },
  {
    question: "How do I switch to a different plan?",
    answer:
      "When logged into an account with a paid subscription, you can change plans by navigating to the ‘Subscription’ page, in your Account Settings. From there, you can easily switch plans and payment frequency (ex. Monthly to Annual).",
  },
  {
    question: "How do I update my payment details?",
    answer:
      "You can update your payment details from the Payment Method page of your account settings, when logged into an account with a paid subscription.",
  },
  {
    question:
      "Can I change my subscription from annual to monthly payments?",
    answer:
      "Yes, you can change your subscription from annual to monthly from the Subscription page of your Account Settings. It's as simple as switching a toggle bar to your new billing period preference. Note: Changes in your subscription always apply at the beginning of the next billing period.",
  },
];

/* =========================================================
   FORMAT NUMBER
========================================================= */

function formatNumber(value) {
  return value.toLocaleString("en-US");
}

/* =========================================================
   CUSTOM RANGE SLIDER
========================================================= */

function PricingSlider({
  plans,
  activeIndex,
  onChange,
  leftLabel,
  rightLabel,
}) {
  const maxIndex = plans.length - 1;

  const percentage =
    maxIndex === 0 ? 0 : (activeIndex / maxIndex) * 100;

  return (
    <div className="mt-[17px] max-[600px]:mt-[15px]">
      {/* RANGE LABELS */}

      <div className="flex items-center justify-between">
        <span className="text-[12px] font-medium text-[#111827] max-[450px]:text-[11px]">
          {leftLabel}
        </span>

        <span className="text-[12px] font-medium text-[#111827] max-[450px]:text-[11px]">
          {rightLabel}
        </span>
      </div>

      {/* SLIDER */}

      <div className="relative mt-[7px] h-[18px]">
        <div
          className="
            absolute
            left-0
            right-0
            top-1/2
            h-[5px]
            -translate-y-1/2
            rounded-full
            bg-[#d9dee0]
          "
        />

        <div
          className="
            absolute
            left-0
            top-1/2
            h-[5px]
            -translate-y-1/2
            rounded-full
            bg-[#299a4c]
          "
          style={{
            width: `${percentage}%`,
          }}
        />

        {plans.map((_, index) => {
          const tick =
            maxIndex === 0
              ? 0
              : (index / maxIndex) * 100;

          return (
            <span
              key={index}
              className="
                pointer-events-none
                absolute
                top-1/2
                h-[5px]
                w-[5px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#6f7679]
              "
              style={{
                left: `${tick}%`,
              }}
            />
          );
        })}

        <input
          type="range"
          min="0"
          max={maxIndex}
          step="1"
          value={activeIndex}
          onChange={(event) =>
            onChange(Number(event.target.value))
          }
          className="
            absolute
            left-0
            top-1/2
            z-20
            h-[20px]
            w-full
            -translate-y-1/2
            cursor-pointer
            appearance-none
            bg-transparent
            opacity-0
          "
        />

        <span
          className="
            pointer-events-none
            absolute
            top-1/2
            z-10
            h-[14px]
            w-[14px]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border-2
            border-[#2da052]
            bg-white
            shadow-[0_0_0_4px_rgba(45,160,82,0.18)]
          "
          style={{
            left: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}

/* =========================================================
   PLAN CARD
========================================================= */

function PlanCard({
  title,
  price,
  annualPrice,
  description,
  features,
  button,
  slider,
}) {
  return (
    <div
      className="
        flex
        min-h-[490px]
        flex-col
        rounded-[6px]
        border
        border-[#dce1e3]
        bg-white
        px-[29px]
        py-[31px]

        max-[1100px]:px-[23px]
        max-[1100px]:py-[27px]

        max-[900px]:min-h-[470px]
        max-[700px]:min-h-0

        max-[600px]:px-[22px]
        max-[600px]:py-[25px]

        max-[450px]:px-[19px]
        max-[450px]:py-[23px]
      "
    >
      {/* TITLE */}

      <h3 className="text-[20px] font-semibold text-[#111827] max-[600px]:text-[19px]">
        {title}
      </h3>

      {/* PRICE */}

      <div className="mt-[8px] flex items-baseline">
        <span className="text-[27px] font-bold text-[#111827] max-[600px]:text-[25px]">
          {price}
        </span>

        <span className="ml-[6px] text-[14px] text-[#111827]">
          / mo *
        </span>
      </div>

      {/* ANNUAL */}

      <div className="mt-[3px] text-[13px] text-[#111827]">
        ({annualPrice} / yr)
      </div>

      {/* DESCRIPTION */}

      <p
        className="
          mt-[30px]
          min-h-[48px]
          text-[13px]
          leading-[1.25]

          max-[700px]:mt-[22px]
          max-[700px]:min-h-0
        "
      >
        {description}
      </p>

      {/* SLIDER */}

      {slider && (
        <PricingSlider
          plans={slider.plans}
          activeIndex={slider.activeIndex}
          onChange={slider.onChange}
          leftLabel={slider.leftLabel}
          rightLabel={slider.rightLabel}
        />
      )}

      {/* FEATURES */}

      <div
        className="
          mt-[28px]
          space-y-[11px]

          max-[700px]:mt-[23px]
        "
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-[7px]
              text-[14px]
              leading-[1.15]
              text-[#111827]

              max-[450px]:text-[13px]
            "
          >
            <Check
              size={17}
              strokeWidth={2}
              className="mt-[1px] shrink-0 text-[#29964b]"
            />

            <div>
              <div className="font-medium">
                {feature.main}
              </div>

              {feature.note && (
                <div
                  className="
                    mt-[3px]
                    text-[10px]
                    leading-[1.15]
                    text-[#806634]
                  "
                >
                  {feature.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}

      <button
        type="button"
        className="
          mt-auto
          w-full
          rounded-[4px]
          bg-[#279849]
          py-[10px]
          text-[15px]
          font-semibold
          text-white
          transition
          hover:bg-[#20863f]

          max-[700px]:mt-[30px]
        "
      >
        {button}
      </button>
    </div>
  );
}

/* =========================================================
   FEATURE CELL
========================================================= */

function FeatureCell({ value }) {
  if (value === true) {
    return (
      <Check
        size={18}
        strokeWidth={2.5}
        className="text-[#29964b]"
      />
    );
  }

  if (value === false || value === "×") {
    return (
      <X
        size={17}
        strokeWidth={2}
        className="text-[#777]"
      />
    );
  }

  return (
    <span className="text-center text-[13px] text-[#111827] max-[600px]:text-[12px]">
      {value}
    </span>
  );
}

/* =========================================================
   PLANS PAGE
========================================================= */

function Plans() {
  const [annual, setAnnual] = useState(false);

  const [openFaq, setOpenFaq] = useState(null);

  const [activeCategory, setActiveCategory] =
    useState("Monthly Volumes");

  const [proIndex, setProIndex] = useState(0);

  const [bulkIndex, setBulkIndex] = useState(0);

  const currentPro = proPlans[proIndex];

  const currentBulk = bulkPlans[bulkIndex];

  /* =======================================================
     INTERSECTION OBSERVER
  ======================================================= */

  useEffect(() => {
    const observers = [];

    featureSections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveCategory(
                featureSections.find(
                  (item) =>
                    item.id === entry.target.id
                )?.title || "Monthly Volumes"
              );
            }
          });
        },
        {
          rootMargin: "-25% 0px -60% 0px",
        }
      );

      observer.observe(element);

      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) =>
        observer.disconnect()
      );
    };
  }, []);

  /* =======================================================
     SCROLL TO FEATURE
  ======================================================= */

  function scrollToSection(title) {
    const section = featureSections.find(
      (item) => item.title === title
    );

    if (!section) return;

    const element = document.getElementById(
      section.id
    );

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <div className="min-h-screen bg-[#f7f8f8] text-[#111827] font-sans">
      <Navbar />

      {/* ===================================================
          HERO / PLANS
      =================================================== */}

      <section className="bg-[#f7f8f8]">
        <div
          className="
            mx-auto
            w-[calc(100%-40px)]
            max-w-[1165px]
            pb-[75px]
            pt-[76px]

            max-[1100px]:pb-[60px]
            max-[1100px]:pt-[60px]

            max-[900px]:w-[calc(100%-30px)]
            max-[900px]:pt-[50px]

            max-[600px]:w-[calc(100%-24px)]
            max-[600px]:pb-[50px]
            max-[600px]:pt-[40px]

            max-[450px]:w-[calc(100%-20px)]
          "
        >
          {/* HEADER */}

          <div
            className="
              flex
              items-start
              justify-between

              max-[700px]:flex-col
              max-[700px]:gap-[22px]
            "
          >
            <h1
              className="
                text-[38px]
                font-bold
                tracking-[-1px]

                max-[1100px]:text-[34px]
                max-[900px]:text-[32px]
                max-[700px]:text-[30px]
                max-[500px]:text-[27px]
                max-[400px]:text-[25px]
              "
            >
              Find a plan that meets your needs
            </h1>

            {/* MONTHLY / ANNUALLY */}

            <div
              className="
                flex
                flex-col
                items-end
                gap-[9px]

                max-[700px]:items-start
              "
            >
              <div
                className="
                  flex
                  rounded-full
                  bg-[#178b9d]
                  p-[4px]
                "
              >
                <button
                  type="button"
                  onClick={() => setAnnual(false)}
                  className={`
                    rounded-full
                    px-[15px]
                    py-[6px]
                    text-[13px]
                    font-semibold
                    max-[450px]:px-[13px]
                    max-[450px]:text-[12px]
                    ${
                      !annual
                        ? "bg-white text-[#111827]"
                        : "text-white"
                    }
                  `}
                >
                  Monthly
                </button>

                <button
                  type="button"
                  onClick={() => setAnnual(true)}
                  className={`
                    rounded-full
                    px-[15px]
                    py-[6px]
                    text-[13px]
                    font-semibold
                    max-[450px]:px-[13px]
                    max-[450px]:text-[12px]
                    ${
                      annual
                        ? "bg-white text-[#111827]"
                        : "text-white"
                    }
                  `}
                >
                  Annually
                </button>
              </div>

              {annual && (
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    bg-[#f7c54c]
                    px-[13px]
                    py-[5px]
                    text-[12px]
                    font-semibold

                    max-[450px]:text-[11px]
                    max-[400px]:px-[10px]
                  "
                >
                  <CheckCircle2 size={14} />
                  Pay annually, get 2 months free!
                </div>
              )}
            </div>
          </div>

          {/* =================================================
              PLAN CARDS
          ================================================= */}

          <div
            className="
              mt-[57px]
              grid
              grid-cols-[1.15fr_1fr_1fr_1fr]
              gap-[19px]

              max-[1100px]:mt-[45px]
              max-[1100px]:grid-cols-2
              max-[1100px]:gap-[18px]

              max-[900px]:grid-cols-2

              max-[700px]:grid-cols-1
              max-[700px]:gap-[16px]
            "
          >
            {/* INTRO */}

            <div
              className="
                pr-[25px]

                max-[1100px]:col-span-2
                max-[1100px]:pr-0

                max-[700px]:col-span-1
              "
            >
              <h2
                className="
                  text-[25px]
                  font-bold
                  leading-[1.08]

                  max-[900px]:text-[24px]
                  max-[600px]:text-[23px]
                "
              >
                Get personal with
                <br />
                branded links
              </h2>

              <p className="mt-[25px] text-[15px] leading-[1.35] max-[600px]:mt-[18px]">
                TinyURL&apos;s paid tiers offer powerful
                link branding and customization features.
              </p>

              <p className="mt-[23px] text-[15px] leading-[1.35] max-[600px]:mt-[16px]">
                Because why settle for being noticed when
                you can be remembered?
              </p>

              <p className="mt-[27px] text-[11px] italic max-[600px]:mt-[20px]">
                * Listed prices exclude any applicable taxes.
              </p>
            </div>

            {/* PRO */}

            <PlanCard
              title={currentPro.title}
              price={`$${
                annual
                  ? Math.round(
                      (currentPro.price * 10) / 12
                    )
                  : currentPro.price
              }`}
              annualPrice={currentPro.annual}
              description="Get full access to advanced link analytics, editing and management."
              slider={{
                plans: proPlans,
                activeIndex: proIndex,
                onChange: setProIndex,
                leftLabel: "125",
                rightLabel: "4K",
              }}
              features={[
                {
                  main: `${formatNumber(
                    currentPro.links
                  )} Links / mo`,
                  note: currentPro.linkOverage,
                },
                {
                  main: "Unlimited Tracked Clicks",
                },
                {
                  main: "3 Branded Domains",
                },
              ]}
              button="Subscribe Now"
            />

            {/* BULK */}

            <PlanCard
              title={currentBulk.title}
              price={`$${
                annual
                  ? Math.round(
                      (currentBulk.price * 10) / 12
                    )
                  : currentBulk.price.toLocaleString()
              }`}
              annualPrice={currentBulk.annual}
              description="Generate, edit and manage your links in bulk."
              slider={{
                plans: bulkPlans,
                activeIndex: bulkIndex,
                onChange: setBulkIndex,
                leftLabel: "50K",
                rightLabel: "5M",
              }}
              features={[
                {
                  main: `${formatNumber(
                    currentBulk.links
                  )} Links / mo`,
                  note: currentBulk.linkOverage,
                },
                {
                  main: `${formatNumber(
                    currentBulk.links
                  )} Tracked Clicks / mo`,
                  note: currentBulk.clickOverage,
                },
                {
                  main: "3 Branded Domains",
                },
              ]}
              button="Subscribe Now"
            />

            {/* ENTERPRISE */}

            <div
              className="
                flex
                min-h-[490px]
                flex-col
                rounded-[6px]
                border
                border-[#dce1e3]
                bg-white
                px-[29px]
                py-[31px]

                max-[1100px]:px-[23px]
                max-[1100px]:py-[27px]

                max-[900px]:min-h-[470px]

                max-[600px]:min-h-0
                max-[600px]:px-[22px]
                max-[600px]:py-[25px]

                max-[450px]:px-[19px]
                max-[450px]:py-[23px]
              "
            >
              <h3 className="text-[20px] font-semibold">
                Enterprise
              </h3>

              <div className="mt-[8px] text-[27px] font-bold max-[600px]:text-[25px]">
                Custom
              </div>

              <div className="mt-[3px] text-[13px]">
                (Starts at $3,999 / yr)
              </div>

              <p className="mt-[30px] text-[13px] leading-[1.25] max-[600px]:mt-[22px]">
                A tailor-made plan for enterprises that need
                more than what our regular plans offer.
              </p>

              <div className="mt-[43px] space-y-[12px] max-[600px]:mt-[25px]">
                {[
                  "Custom Number of Links",
                  "Custom Number of Tracked Clicks",
                  "Custom Number of Branded Domains",
                  "99.9% SLA-backed uptime guarantees",
                  "Custom Solutions for Compliance Needs",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-start
                      gap-[7px]
                      text-[14px]
                      leading-[1.15]

                      max-[450px]:text-[13px]
                    "
                  >
                    <Check
                      size={17}
                      className="mt-[1px] shrink-0 text-[#29964b]"
                    />

                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="
                  mt-auto
                  w-full
                  rounded-[4px]
                  bg-[#279849]
                  py-[10px]
                  text-[15px]
                  font-semibold
                  text-white
                  transition
                  hover:bg-[#20863f]

                  max-[600px]:mt-[30px]
                "
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURE BREAKDOWN
      ===================================================== */}

      <section className="bg-[#f7f8f8]">
        <div
          className="
            mx-auto
            w-[calc(100%-40px)]
            max-w-[1165px]
            pb-[85px]

            max-[900px]:w-[calc(100%-30px)]
            max-[700px]:pb-[65px]
            max-[600px]:w-[calc(100%-24px)]
            max-[450px]:w-[calc(100%-20px)]
          "
        >
          <h2
            className="
              text-[31px]
              font-bold

              max-[900px]:text-[29px]
              max-[600px]:text-[27px]
              max-[450px]:text-[25px]
            "
          >
            Feature Breakdown
          </h2>

          <p
            className="
              mt-[15px]
              text-[16px]
              max-[600px]:text-[15px]
              max-[450px]:leading-[1.5]
            "
          >
            Take a detailed look at everything that&apos;s
            included in our subscription plans so you can
            find the one that works for you.
          </p>

          {/* BILLING TOGGLE */}

          <div className="mt-[20px]">
            <div
              className="
                inline-flex
                rounded-full
                bg-[#178b9d]
                p-[4px]
              "
            >
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`
                  rounded-full
                  px-[15px]
                  py-[6px]
                  text-[13px]
                  font-semibold

                  max-[450px]:px-[13px]
                  max-[450px]:text-[12px]

                  ${
                    !annual
                      ? "bg-white text-[#111827]"
                      : "text-white"
                  }
                `}
              >
                Monthly
              </button>

              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`
                  rounded-full
                  px-[15px]
                  py-[6px]
                  text-[13px]
                  font-semibold

                  max-[450px]:px-[13px]
                  max-[450px]:text-[12px]

                  ${
                    annual
                      ? "bg-white text-[#111827]"
                      : "text-white"
                  }
                `}
              >
                Annually
              </button>
            </div>
          </div>

          {/* TABLE */}

          <div
            className="
              mt-[38px]
              grid
              grid-cols-[270px_1fr]
              gap-[18px]

              max-[1000px]:grid-cols-1
              max-[1000px]:gap-[25px]

              max-[600px]:mt-[30px]
            "
          >
            {/* CATEGORY MENU */}

            <aside
              className="
                sticky
                top-[25px]
                self-start

                max-[1000px]:static
              "
            >
              <div
                className="
                  flex
                  flex-col
                  gap-[25px]

                  max-[1000px]:grid
                  max-[1000px]:grid-cols-2
                  max-[1000px]:gap-[10px]

                  max-[600px]:grid-cols-1
                "
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      scrollToSection(category)
                    }
                    className={`
                      min-h-[40px]
                      rounded-[5px]
                      px-3
                      text-[16px]
                      font-medium
                      transition

                      max-[1000px]:min-h-[44px]
                      max-[600px]:text-[15px]

                      ${
                        activeCategory === category
                          ? "bg-[#062d49] text-white"
                          : "bg-white text-[#111827]"
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </aside>

            {/* TABLE */}

            <div
              className="
                min-w-0

                max-[700px]:overflow-x-auto
              "
            >
              {/* TABLE HEADER */}

              <div
                className="
                  grid
                  min-w-[690px]
                  grid-cols-[1.7fr_repeat(4,1fr)]
                  overflow-hidden
                  rounded-t-[7px]
                  border
                  border-[#d9dfe2]
                  bg-white
                "
              >
                <div className="p-[15px] max-[600px]:p-[12px]">
                  <span className="text-[11px] italic">
                    * Listed prices exclude any applicable taxes.
                  </span>
                </div>

                {[
                  ["Free", "$0"],
                  ["Pro", `$${annual ? 9 : 11}`],
                  ["Bulk 50K", `$${annual ? 69 : 83}`],
                  ["Enterprise", "Custom"],
                ].map(([name, price]) => (
                  <div
                    key={name}
                    className="
                      border-l
                      border-[#d9dfe2]
                      p-[15px]

                      max-[600px]:p-[12px]
                    "
                  >
                    <p className="text-[13px] font-semibold max-[600px]:text-[12px]">
                      {name}
                    </p>

                    <p className="mt-[4px] text-[17px] font-bold max-[600px]:text-[15px]">
                      {price}
                      {name !== "Enterprise" && (
                        <span className="text-[11px] font-normal">
                          {" "}
                          / mo
                        </span>
                      )}
                    </p>

                    <button
                      type="button"
                      className="
                        mt-[27px]
                        w-full
                        rounded-[4px]
                        bg-[#279849]
                        py-[8px]
                        text-[13px]
                        font-semibold
                        text-white
                        transition
                        hover:bg-[#20863f]

                        max-[600px]:mt-[20px]
                        max-[600px]:text-[12px]
                      "
                    >
                      {name === "Free"
                        ? "Sign Up"
                        : name === "Enterprise"
                        ? "Contact Sales"
                        : "Subscribe Now"}
                    </button>
                  </div>
                ))}
              </div>

              {/* SECTIONS */}

              {featureSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-[25px]"
                >
                  <div
                    className="
                      mt-[38px]
                      min-w-[690px]
                      overflow-hidden
                      rounded-[7px]
                      border
                      border-[#d9dfe2]
                      bg-white

                      max-[600px]:mt-[28px]
                    "
                  >
                    <div
                      className="
                        bg-[#062d49]
                        px-[18px]
                        py-[10px]
                        text-center
                        text-[16px]
                        font-semibold
                        text-white

                        max-[600px]:px-[12px]
                        max-[600px]:py-[9px]
                        max-[600px]:text-[14px]
                      "
                    >
                      {section.title}
                    </div>

                    {section.rows.map((row) => (
                      <div
                        key={row.name}
                        className="
                          grid
                          min-h-[58px]
                          grid-cols-[1.7fr_repeat(4,1fr)]
                          border-b
                          border-[#e1e4e6]
                          last:border-b-0

                          max-[600px]:min-h-[54px]
                        "
                      >
                        <div
                          className="
                            flex
                            items-center
                            gap-2
                            px-[11px]

                            max-[600px]:px-[9px]
                          "
                        >
                          <span className="text-[14px] font-medium max-[600px]:text-[12px]">
                            {row.name}
                          </span>

                          <CircleHelp
                            size={13}
                            className="shrink-0 text-[#6f7679]"
                          />
                        </div>

                        {row.values.map((value, index) => (
                          <div
                            key={index}
                            className="
                              flex
                              items-center
                              justify-center
                              border-l
                              border-[#e1e4e6]
                            "
                          >
                            <FeatureCell value={value} />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TRUSTED USERS
      ===================================================== */}

      <section className="bg-[#178796]">
        <div
          className="
            mx-auto
            grid
            max-w-[1400px]
            grid-cols-2

            max-[900px]:grid-cols-1
          "
        >
          {/* IMAGE */}

          <div
            className="
              min-h-[420px]
              overflow-hidden

              max-[900px]:min-h-[380px]
              max-[600px]:min-h-[300px]
              max-[450px]:min-h-[250px]
            "
          >
            <img
              src="/image copy 9.png"
              alt="TinyURL Trusted Users"
              className="
                h-full
                min-h-[420px]
                w-full
                object-cover

                max-[900px]:min-h-[380px]
                max-[600px]:min-h-[300px]
                max-[450px]:min-h-[250px]
              "
            />
          </div>

          {/* CONTENT */}

          <div
            className="
              flex
              min-h-[420px]
              flex-col
              justify-center
              px-[75px]
              text-white

              max-[1100px]:px-[50px]

              max-[900px]:min-h-0
              max-[900px]:px-[45px]
              max-[900px]:py-[55px]

              max-[600px]:px-[25px]
              max-[600px]:py-[45px]

              max-[450px]:px-[18px]
              max-[450px]:py-[40px]
            "
          >
            <h2
              className="
                text-[31px]
                font-bold
                leading-[1.35]

                max-[1100px]:text-[28px]
                max-[600px]:text-[26px]
                max-[450px]:text-[23px]
              "
            >
              The URL Shortener Trusted
              <br />
              by 4,488,357 Users
            </h2>

            <p
              className="
                mt-[22px]
                max-w-[540px]
                text-[16px]
                leading-[1.45]

                max-[600px]:mt-[17px]
                max-[600px]:text-[15px]
              "
            >
              TinyURL has created billions of short links
              for marketers, influencers, small business
              owners, and large businesses.
            </p>

            <div
              className="
                mt-[23px]
                flex
                gap-[18px]

                max-[600px]:flex-col
                max-[600px]:gap-[10px]
                max-[600px]:max-w-[350px]
              "
            >
              <button
                type="button"
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

                  max-[600px]:w-full
                "
              >
                Create Free Account
              </button>

              <button
                type="button"
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

                  max-[600px]:w-full
                "
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <section
        className="
          bg-white
          py-[90px]

          max-[900px]:py-[70px]
          max-[600px]:py-[55px]
          max-[450px]:py-[45px]
        "
      >
        <div
          className="
            mx-auto
            grid
            w-[calc(100%-80px)]
            max-w-[1340px]
            grid-cols-[240px_minmax(0,1fr)]
            gap-[77px]

            max-[1100px]:w-[calc(100%-50px)]
            max-[1100px]:gap-[50px]

            max-[900px]:grid-cols-1
            max-[900px]:gap-[35px]

            max-[600px]:w-[calc(100%-30px)]
            max-[600px]:gap-[25px]

            max-[450px]:w-[calc(100%-20px)]
          "
        >
          <div>
            <h2
              className="
                text-[48px]
                font-bold
                leading-[1.08]
                tracking-[-1.5px]
                text-[#082942]

                max-[1100px]:text-[42px]
                max-[900px]:text-[38px]

                max-[600px]:text-[32px]
                max-[450px]:text-[29px]
              "
            >
              Frequently
              <br />
              Asked
              <br />
              Questions
            </h2>
          </div>

          <div className="border-t border-[#d8e0e4]">
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
                      setOpenFaq(
                        isOpen ? null : index
                      )
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

                      max-[1100px]:px-[30px]

                      max-[600px]:min-h-[62px]
                      max-[600px]:gap-[12px]
                      max-[600px]:px-[18px]
                      max-[600px]:py-[15px]

                      max-[450px]:px-[12px]
                    "
                  >
                    <span
                      className="
                        text-[18px]
                        font-semibold
                        text-[#082942]

                        max-[900px]:text-[17px]
                        max-[600px]:text-[15px]
                        max-[450px]:text-[14px]
                      "
                    >
                      {item.question}
                    </span>

                    {isOpen ? (
                      <ChevronUp
                        size={20}
                        className="shrink-0 max-[450px]:size-[18px]"
                      />
                    ) : (
                      <ChevronDown
                        size={20}
                        className="shrink-0 max-[450px]:size-[18px]"
                      />
                    )}
                  </button>

                  {isOpen && (
                    <div
                      className="
                        px-[46px]
                        pb-[25px]

                        max-[1100px]:px-[30px]

                        max-[600px]:px-[18px]
                        max-[600px]:pb-[20px]

                        max-[450px]:px-[12px]
                      "
                    >
                      <p
                        className="
                          max-w-[900px]
                          text-[15px]
                          leading-[1.75]
                          text-[#627482]

                          max-[600px]:text-[14px]
                          max-[450px]:text-[13px]
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

      <Footer />
    </div>
  );
}

export default Plans;