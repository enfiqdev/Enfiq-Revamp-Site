"use client";

import Image from "next/image";

interface Service {
  num: string;
  title: string;
  description: string;
  bullets: string[];
}

type Props = {
  service: Service;
};

const formatBullet = (bullet: string) => {
  const mapping: { [key: string]: { bold: string; regular: string } } = {
    "Brand identity design": { bold: "Brand identity design", regular: "" },
    "UX/UI design": { bold: "UX/UI design", regular: "" },
    "Web & product visuals": { bold: "Web & product visuals", regular: "" },
    "High-fidelity prototyping": { bold: "High-fidelity prototyping", regular: "" },

    "Web application development": { bold: "Web application development", regular: "" },
    "Mobile app development": { bold: "Mobile app development", regular: "" },
    "Backend & API development": { bold: "Backend & API development", regular: "" },
    "Custom dashboards & software": { bold: "Custom dashboards & software", regular: "" },

    "Custom Framer & WP development": { bold: "Custom Framer & WP development", regular: "" },
    "Responsive design for all devices": { bold: "Responsive design for all devices", regular: "" },
    "CMS setup & content management": { bold: "CMS setup & content management", regular: "" },
    "Landing pages, blogs & business sites": { bold: "Landing pages, blogs & business sites", regular: "" },

    "On-page & off-page SEO": { bold: "On-page & off-page SEO", regular: "" },
    "Technical SEO audits": { bold: "Technical SEO audits", regular: "" },
    "Keyword research & strategy": { bold: "Keyword research & strategy", regular: "" },
    "Content optimization": { bold: "Content optimization", regular: "" },

    "Social media reels & shorts": { bold: "Social media reels & shorts", regular: "" },
    "YouTube video editing": { bold: "YouTube video editing", regular: "" },
    "Promo & brand videos": { bold: "Promo & brand videos", regular: "" },
    "Motion graphics & titles": { bold: "Motion graphics & titles", regular: "" },

    "Business process automation": { bold: "Business process automation", regular: "" },
    "Lead, CRM & sales workflows": { bold: "Lead, CRM & sales workflows", regular: "" },
    "Custom triggers, logic & alerts": { bold: "Custom triggers, logic & alerts", regular: "" },
    "API & app integrations": { bold: "API & app integrations", regular: "" },
  };

  const match = mapping[bullet];

  if (match) {
    return (
      <>
        <span style={{ fontWeight: 700 }}>{match.bold}</span>
        {match.regular}
      </>
    );
  }

  const words = bullet.split(" ");

  if (words.length <= 2) {
    return <span style={{ fontWeight: 700 }}>{bullet}</span>;
  }

  return (
    <>
      <span style={{ fontWeight: 700 }}>
        {words.slice(0, 2).join(" ")}
      </span>{" "}
      {words.slice(2).join(" ")}
    </>
  );
};

export default function ServiceCard({ service }: Props) {
  return (
  <div className="flex flex-col xl:flex-row items-start xl:items-stretch justify-between w-full max-w-[1144px] mx-auto gap-[32px] sm:gap-[40px] xl:gap-[60.31px] xl:h-[448px]">
      {/* Mobile Numbers */}
      <div className="flex xl:hidden items-center justify-between w-full max-w-[560px] mx-auto px-4 mb-2">
        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "1",
            color: "#D41717",
          }}
        >
          {service.num}
        </span>

        <div className="flex-1 max-w-[200px] sm:max-w-[300px] md:max-w-[360px] flex flex-row items-center justify-between px-4">
          {[
            "w-[28px] sm:w-[75px]",
            "w-[18px] sm:w-[40px]",
            "w-[12px] sm:w-[30px]",
            "w-[8px] sm:w-[20px]",
            "w-[6px] sm:w-[10px]",
            "w-[4px] sm:w-[6px]",
          ].map((widthClass, i) => (
            <div
              key={i}
              className={`h-[2px] rounded-full shrink-0 transition-all duration-300 ${widthClass}`}
              style={{
                backgroundColor: i === 0 ? "#D41717" : "#707070",
              }}
            />
          ))}
        </div>

        <span
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontWeight: 400,
            fontSize: "48px",
            lineHeight: "1",
            color: "#707070",
          }}
        >
          06
        </span>
      </div>

      {/* Left Wrapper */}
      <div className="relative flex flex-row items-center flex-1 min-w-0 w-full xl:min-w-[450px] xl:h-full max-w-[560px] mx-auto px-4 xl:max-w-none xl:px-0">

        {/* Desktop Number Column */}
        <div
          className="hidden xl:flex absolute top-0 bottom-0 left-0 flex-col items-center justify-between"
          style={{ width: "54.11px" }}
        >

          {/* Top Number */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: "54.11px", height: "75px" }}
          >
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "61.84px",
                lineHeight: "74.21px",
                color: "#D41717",
              }}
            >
              {service.num}
            </span>
          </div>
{/*the idth ofthe dashes are modified in descending order*/}
<div className="flex-1 w-full flex flex-col items-center justify-between py-2 sm:py-3 md:py-4">
  {[75, 40, 30, 20, 10, 6].map((height, i) => (
    <div
      key={i}
      className="w-[2px] rounded-full transition-all duration-300"
      style={{
        height: `${height}px`,
        backgroundColor: i === 0 ? "#D41717" : "#707070",
      }}
    />
  ))}
</div>

          {/* Bottom Number */}
          <div
            className="flex items-center justify-center shrink-0"
            style={{ width: "54.11px", height: "75px" }}
          >
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontWeight: 400,
                fontSize: "61.84px",
                lineHeight: "74.21px",
                color: "#707070",
              }}
            >
              06
            </span>
          </div>
        </div>

        {/* Spacer */}
        <div
          style={{
            width: "54.11px",
            marginRight: "39.61px",
          }}
          className="shrink-0 hidden xl:block"
        />

        {/* Content */}
        <div className="flex-1 flex flex-col gap-[10px] xl:gap-[16px] py-[6px] w-full text-left items-start">

          <h3
            className="text-[#000000]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "23.19px",
              lineHeight: "32.46px",
              letterSpacing: "0%",
            }}
          >
            {service.title}
          </h3>

          <p
            className="text-[#707070] text-[15.46px] leading-[21.64px]"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0%",
              fontWeight: 400,
            }}
          >
            {service.description}
          </p>

          <ul className="flex flex-col gap-[8px] mt-[2px] xl:mt-[8px] w-fit text-left">
            {service.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex flex-row items-start gap-[12px] min-h-[28px] h-auto py-0.5"
              >
                <span className="w-[8px] h-[8px] bg-[#D41717] rounded-full shrink-0 mt-[10px]" />

                <span
                  className="text-[#000000]"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "19.32px",
                    fontWeight: 700,
                    lineHeight: "27.05px",
                    letterSpacing: "0%",
                  }}
                >
                  {formatBullet(bullet)}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Image */}
      <div
  className="relative w-full xl:w-[560px] xl:h-full flex items-center justify-center shrink-0 mt-[4px] xl:mt-0 px-4 xl:px-0"
>
  <div
    className="relative w-full h-[180px] xs:h-[220px] sm:h-[280px] md:h-[332px] rounded-[16px] overflow-hidden shadow-sm"
    style={{ maxWidth: "560px" }}
  >
    <Image
      src="/images/assets/pinkSticker.png"
      alt={service.title}
      fill
      className="object-cover"
      sizes="560px"
    />
  </div>
</div>
    </div>
  );
}