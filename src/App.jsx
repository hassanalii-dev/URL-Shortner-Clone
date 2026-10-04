import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Analytics from "./components/Analytics";
import Statistics from "./components/Statistics";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Plans from "./pages/Plans";
import Domains from "./pages/Domains";

function getPage() {
  const path = window.location.pathname.toLowerCase();

  if (path === "/plans" || path === "/app/pricing") {
    return "plans";
  }

  if (path === "/domains" || path === "/app/branded-domains") {
    return "domains";
  }

  return "home";
}

function App() {
  const [page, setPage] = useState(getPage);
  const [links, setLinks] = useState([]);

  function addLink(newLink) {
    setLinks((currentLinks) => [
      newLink,
      ...currentLinks,
    ].slice(0, 5));
  }

  useEffect(() => {
    const handlePopState = () => {
      setPage(getPage());
    };

    window.addEventListener("popstate", handlePopState);

    const handleClick = (event) => {
      const link = event.target.closest("a[href]");

      if (!link) return;

      const url = new URL(link.href, window.location.origin);

      const paths = [
        "/",
        "/plans",
        "/domains",
        "/app/pricing",
        "/app/branded-domains",
      ];

      if (
        url.origin !== window.location.origin ||
        !paths.includes(url.pathname)
      ) {
        return;
      }

      event.preventDefault();

      window.history.pushState({}, "", url.pathname);
      setPage(getPage());

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    document.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (page === "plans") {
    return <Plans />;
  }

  if (page === "domains") {
    return <Domains />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-[#082942]">
      <Navbar />

      <main>
        <Hero
          links={links}
          onCreate={addLink}
        />

        <Features />

        <Analytics />

        <Statistics />

        <FAQ />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;