import { Info } from "lucide-react";

function RecentLinks({ links }) {
  return (
    <div className="w-full">
      <h2
        className="
          mb-[23px]
          text-[23px]
          font-bold
          leading-none
          text-white

          max-[900px]:text-[21px]

          max-[600px]:mb-[18px]
          max-[600px]:text-[19px]

          max-[400px]:text-[18px]
        "
      >
        Your Recent Links:
      </h2>

      <div
        className="
          flex
          min-h-[47px]
          w-full
          items-center
          rounded-[8px]
          bg-[#f5f6f7]
          px-[12px]
          shadow-[0_3px_10px_rgba(0,0,0,0.04)]

          max-[600px]:px-[9px]

          max-[400px]:rounded-[6px]
          max-[400px]:px-[7px]
        "
      >
        {links && links.length > 0 ? (
          <div className="flex w-full flex-col">
            {links.map((link) => (
              <div
                key={link.id}
                className="
                  flex
                  min-h-[47px]
                  items-center
                  justify-between
                  gap-[15px]
                  border-b
                  border-[#e2e6e9]
                  py-[8px]
                  last:border-b-0

                  max-[700px]:gap-[12px]

                  max-[600px]:items-center
                  max-[600px]:gap-[10px]
                  max-[600px]:py-[9px]

                  max-[450px]:items-start
                  max-[450px]:gap-[8px]
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                  "
                >
                  <strong
                    className="
                      truncate
                      text-[14px]
                      font-bold
                      text-[#111827]

                      max-[600px]:text-[13px]

                      max-[400px]:text-[12px]
                    "
                    title={link.short}
                  >
                    {link.short}
                  </strong>

                  <span
                    className="
                      truncate
                      text-[12px]
                      text-[#66717b]

                      max-[600px]:text-[11px]

                      max-[400px]:text-[10px]
                    "
                    title={link.original}
                  >
                    {link.original}
                  </span>
                </div>

                <a
                  href={link.original}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    shrink-0
                    rounded-[4px]
                    bg-[#16869f]
                    px-[15px]
                    py-[6px]
                    text-[12px]
                    font-semibold
                    text-white
                    transition
                    hover:bg-[#087f91]

                    max-[600px]:px-[13px]
                    max-[600px]:py-[6px]
                    max-[600px]:text-[11px]

                    max-[450px]:px-[11px]
                    max-[450px]:py-[6px]

                    max-[380px]:px-[9px]
                    max-[380px]:text-[10px]
                  "
                >
                  Open
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="
              flex
              min-h-[47px]
              w-full
              items-center
              gap-[9px]
              text-[15px]
              font-semibold
              text-[#111827]

              max-[600px]:gap-[7px]
              max-[600px]:text-[13px]

              max-[400px]:text-[12px]
            "
          >
            <Info
              size={16}
              strokeWidth={2.5}
              className="shrink-0 max-[600px]:h-[15px] max-[600px]:w-[15px]"
            />

            <span className="truncate">
              No links yet in your history
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentLinks;