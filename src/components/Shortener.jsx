import { useState } from "react";
import {
  Link2,
  QrCode,
  Send,
  Globe2,
  PenLine,
  ChevronDown,
  Copy,
  Check,
} from "lucide-react";

function Shortener({ onCreate }) {
  const [activeTab, setActiveTab] = useState("shorten");

  const [url, setUrl] = useState("");
  const [domain, setDomain] = useState("tinyurl.com");
  const [alias, setAlias] = useState("");

  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");

  function createLink() {
    setError("");

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    let finalUrl = url.trim();

    if (
      !finalUrl.startsWith("http://") &&
      !finalUrl.startsWith("https://")
    ) {
      finalUrl = `https://${finalUrl}`;
    }

    try {
      new URL(finalUrl);
    } catch {
      setError("Please enter a valid URL.");
      return;
    }

    const generatedAlias =
      alias.trim() || Math.random().toString(36).slice(2, 9);

    const generated = `https://${domain}/${generatedAlias}`;

    setResult(generated);

    if (onCreate) {
      onCreate({
        id: Date.now(),
        original: finalUrl,
        short: generated,
      });
    }
  }

  async function copyResult() {
    if (!result) return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch {
      setError("Unable to copy the URL.");
    }
  }

  return (
    <div className="w-full">
      <div
        className="
          w-full
          overflow-hidden
          rounded-[10px]
          bg-[#f5f6f7]
          shadow-[0_8px_25px_rgba(0,0,0,0.08)]

          max-[600px]:rounded-[8px]
        "
      >
        <div
          className="
            flex
            h-[72px]

            max-[700px]:h-[64px]

            max-[500px]:h-[58px]
          "
        >
          <button
            onClick={() => setActiveTab("shorten")}
            className={`flex flex-1 items-center justify-center gap-[15px] text-[19px] font-bold transition-all duration-200
              max-[700px]:gap-[10px]
              max-[700px]:text-[17px]
              max-[500px]:gap-[7px]
              max-[500px]:text-[14px]
              max-[380px]:text-[13px]
              ${
                activeTab === "shorten"
                  ? "bg-white text-[#17202a]"
                  : "bg-[#16869f] text-white"
              }`}
          >
            <Link2
              size={21}
              strokeWidth={2.5}
              className="shrink-0 max-[500px]:h-[18px] max-[500px]:w-[18px]"
            />

            <span className="whitespace-nowrap">
              Shorten a Link
            </span>
          </button>

          <button
            onClick={() => setActiveTab("qr")}
            className={`flex flex-1 items-center justify-center gap-[15px] text-[19px] font-bold transition-all duration-200
              max-[700px]:gap-[10px]
              max-[700px]:text-[17px]
              max-[500px]:gap-[7px]
              max-[500px]:text-[14px]
              max-[380px]:text-[13px]
              ${
                activeTab === "qr"
                  ? "bg-white text-[#17202a]"
                  : "bg-[#16869f] text-white"
              }`}
          >
            <QrCode
              size={20}
              strokeWidth={2.5}
              className="shrink-0 max-[500px]:h-[18px] max-[500px]:w-[18px]"
            />

            <span className="whitespace-nowrap">
              Generate QR Code
            </span>
          </button>
        </div>

        <div
          className="
            px-[23px]
            pb-[24px]
            pt-[27px]

            max-[800px]:px-[20px]

            max-[600px]:px-[16px]
            max-[600px]:pb-[20px]
            max-[600px]:pt-[22px]

            max-[400px]:px-[12px]
            max-[400px]:pb-[18px]
            max-[400px]:pt-[19px]
          "
        >
          <label
            className="
              mb-[10px]
              flex
              items-center
              gap-[8px]
              text-[18px]
              font-medium
              text-[#111827]

              max-[700px]:text-[17px]

              max-[600px]:gap-[7px]
              max-[600px]:text-[15px]

              max-[400px]:text-[14px]
            "
          >
            <Send
              size={18}
              strokeWidth={2.5}
              className="shrink-0 max-[600px]:h-[17px] max-[600px]:w-[17px]"
            />

            <span>
              Long URL{" "}
              <b className="ml-[4px] text-[#c53b4a]">*</b>
            </span>
          </label>

          <input
            type="text"
            placeholder="Paste long URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="
              h-[43px]
              w-full
              rounded-[5px]
              border
              border-[#cbd2d8]
              bg-white
              px-[12px]
              text-[16px]
              text-[#334155]
              outline-none
              transition-all
              placeholder:text-[#66717b]
              focus:border-[#16869f]
              focus:ring-[2px]
              focus:ring-[#16869f]/15

              max-[600px]:h-[42px]
              max-[600px]:px-[10px]
              max-[600px]:text-[14px]

              max-[400px]:h-[40px]
              max-[400px]:text-[13px]
            "
          />

          <div
            className="
              mt-[23px]
              grid
              grid-cols-2
              gap-[30px]

              max-[900px]:gap-[20px]

              max-[600px]:mt-[19px]
              max-[600px]:grid-cols-1
              max-[600px]:gap-[17px]
            "
          >
            <div>
              <label
                className="
                  mb-[10px]
                  flex
                  items-center
                  gap-[9px]
                  text-[18px]
                  font-medium
                  text-[#111827]

                  max-[700px]:text-[17px]

                  max-[600px]:gap-[7px]
                  max-[600px]:text-[15px]

                  max-[400px]:text-[14px]
                "
              >
                <Globe2
                  size={18}
                  strokeWidth={2.3}
                  className="shrink-0 max-[600px]:h-[17px] max-[600px]:w-[17px]"
                />

                Domain
              </label>

              <div className="relative">
                <select
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  className="
                    h-[43px]
                    w-full
                    appearance-none
                    rounded-[5px]
                    border
                    border-[#cbd2d8]
                    bg-white
                    px-[12px]
                    pr-[40px]
                    text-[16px]
                    text-[#334155]
                    outline-none
                    focus:border-[#16869f]
                    focus:ring-[2px]
                    focus:ring-[#16869f]/15

                    max-[600px]:h-[42px]
                    max-[600px]:px-[10px]
                    max-[600px]:pr-[38px]
                    max-[600px]:text-[14px]

                    max-[400px]:h-[40px]
                    max-[400px]:text-[13px]
                  "
                >
                  <option value="tinyurl.com">tinyurl.com</option>
                </select>

                <ChevronDown
                  size={20}
                  className="
                    pointer-events-none
                    absolute
                    right-[10px]
                    top-1/2
                    -translate-y-1/2
                    text-[#111827]

                    max-[600px]:right-[9px]
                    max-[600px]:h-[18px]
                    max-[600px]:w-[18px]
                  "
                />
              </div>
            </div>

            <div>
              <label
                className="
                  mb-[10px]
                  flex
                  items-center
                  gap-[9px]
                  text-[18px]
                  font-medium
                  text-[#111827]

                  max-[700px]:text-[17px]

                  max-[600px]:gap-[7px]
                  max-[600px]:text-[15px]

                  max-[400px]:text-[14px]
                "
              >
                <PenLine
                  size={18}
                  strokeWidth={2.3}
                  className="shrink-0 max-[600px]:h-[17px] max-[600px]:w-[17px]"
                />

                Alias (optional)
              </label>

              <div
                className="
                  flex
                  h-[43px]
                  overflow-hidden
                  rounded-[5px]
                  border
                  border-[#cbd2d8]
                  bg-white
                  focus-within:border-[#16869f]
                  focus-within:ring-[2px]
                  focus-within:ring-[#16869f]/15

                  max-[600px]:h-[42px]

                  max-[400px]:h-[40px]
                "
              >
                <span
                  className="
                    flex
                    items-center
                    px-[10px]
                    text-[18px]
                    text-[#111827]

                    max-[600px]:px-[9px]
                    max-[600px]:text-[16px]

                    max-[400px]:px-[8px]
                    max-[400px]:text-[15px]
                  "
                >
                  /
                </span>

                <input
                  type="text"
                  placeholder="Add alias here"
                  value={alias}
                  onChange={(e) => setAlias(e.target.value)}
                  className="
                    min-w-0
                    flex-1
                    border-0
                    bg-transparent
                    px-[2px]
                    text-[16px]
                    text-[#334155]
                    outline-none
                    placeholder:text-[#66717b]

                    max-[600px]:text-[14px]

                    max-[400px]:text-[13px]
                  "
                />
              </div>

              <small
                className="
                  mt-[5px]
                  block
                  text-[11px]
                  text-[#66717b]

                  max-[600px]:text-[10px]
                "
              >
                Must be at least 5 characters
              </small>
            </div>
          </div>

          {error && (
            <div
              className="
                mt-[13px]
                rounded-[5px]
                border
                border-red-200
                bg-red-50
                px-[12px]
                py-[8px]
                text-[13px]
                font-medium
                text-red-600

                max-[600px]:mt-[11px]
                max-[600px]:px-[10px]
                max-[600px]:py-[7px]
                max-[600px]:text-[12px]
              "
            >
              {error}
            </div>
          )}

          <button
            onClick={createLink}
            className="
              mt-[27px]
              h-[46px]
              w-full
              rounded-[5px]
              bg-[#218c48]
              text-[19px]
              font-medium
              text-white
              transition-all
              duration-200
              hover:bg-[#197a3d]
              active:scale-[0.99]

              max-[600px]:mt-[23px]
              max-[600px]:h-[44px]
              max-[600px]:text-[16px]

              max-[400px]:h-[42px]
              max-[400px]:text-[15px]
            "
          >
            {activeTab === "shorten"
              ? "Shorten Link"
              : "Generate QR Code"}
          </button>

          <p
            className="
              mt-[20px]
              text-[13px]
              italic
              leading-[1.35]
              text-[#111827]

              max-[600px]:mt-[16px]
              max-[600px]:text-[11px]
              max-[600px]:leading-[1.5]

              max-[400px]:text-[10px]
            "
          >
            By clicking Shorten Link, you agree with our{" "}
            <a
              href="#"
              className="text-[#16869f] hover:underline"
            >
              Terms of Service
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#16869f] hover:underline"
            >
              Privacy Policy
            </a>
            , and{" "}
            <a
              href="#"
              className="text-[#16869f] hover:underline"
            >
              Use of Cookies
            </a>
            .
          </p>

          {result && (
            <div
              className="
                mt-[18px]
                flex
                items-center
                justify-between
                gap-[12px]
                rounded-[6px]
                border
                border-[#b7dfe4]
                bg-[#eefbfc]
                px-[13px]
                py-[11px]

                max-[600px]:mt-[15px]
                max-[600px]:gap-[9px]
                max-[600px]:px-[10px]
                max-[600px]:py-[9px]

                max-[400px]:px-[8px]
              "
            >
              <div className="min-w-0 flex-1">
                <span
                  className="
                    mb-[3px]
                    block
                    text-[11px]
                    text-[#66717b]

                    max-[600px]:text-[10px]
                  "
                >
                  Your shortened link
                </span>

                <strong
                  className="
                    block
                    truncate
                    text-[14px]
                    font-semibold
                    text-[#16869f]

                    max-[600px]:text-[12px]

                    max-[400px]:text-[11px]
                  "
                  title={result}
                >
                  {result}
                </strong>
              </div>

              <button
                onClick={copyResult}
                className="
                  flex
                  h-[35px]
                  w-[35px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[5px]
                  bg-[#16869f]
                  text-white
                  transition
                  hover:bg-[#087f91]

                  max-[600px]:h-[32px]
                  max-[600px]:w-[32px]

                  max-[400px]:h-[30px]
                  max-[400px]:w-[30px]
                "
              >
                {copied ? (
                  <Check
                    size={18}
                    className="max-[600px]:h-[16px] max-[600px]:w-[16px]"
                  />
                ) : (
                  <Copy
                    size={18}
                    className="max-[600px]:h-[16px] max-[600px]:w-[16px]"
                  />
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shortener;