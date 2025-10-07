"use client";
import React, { useEffect, useMemo, useState } from "react";
import Introduction from "./Introduction";
import Definitions from "./Definitions";
import InformationCollection from "./InformationCollection";
import PersonalData from "./PersonalData";
import UsageData from "./UsageData";
import TrackingCookiesData from "./TrackingCookiesData";
import ExamplesCookies from "./ExamplesCookies";
import UseData from "./UseData";
import RetentionData from "./RetentionData";
import TransferData from "./TransferData";
import DisclosureData from "./DisclosureData";
import SecurityData from "./SecurityData";
import ContactUsView from "./ContactUsView";
import OtherData from "./OtherData";
import Image from "next/image";

import downArrow from "@/src/assets/images/downarrow.svg";


function PrivacyPolicyText() {
  const sections = useMemo(
    () => [
      {
        title: "Introduction",
        content: <Introduction />,
      },
      {
        title: "Definitions",
        content: <Definitions />,
      },
      {
        title: "Information Collection and Use",
        content: <InformationCollection />,
      },
      {
        title: "Personal Data",
        content: <PersonalData />,
      },
      {
        title: "Usage Data",
        content: <UsageData />,
      },
      {
        title: "Tracking Cookies Data",
        content: <TrackingCookiesData />,
      },
      {
        title: "Examples of Cookies we use:",
        content: <ExamplesCookies />,
      },
      {
        title: "Other Data",
        content: <OtherData />,
      },
      {
        title: "Use of Data",
        content: <UseData />,
      },
      {
        title: "Retention of Data",
        content: <RetentionData />,
      },
      {
        title: "Transfer of Data",
        content: <TransferData />,
      },
      {
        title: "Disclosure of Data",
        content: <DisclosureData />,
      },
      {
        title: "Security of Data",
        content: <SecurityData />,
      },
      {
        title: "Contact Us",
        content: <ContactUsView />,
      },
      
    ],
    []
  );

  const [activeSection, setActiveSection] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50px 0px -50px 0px",
      threshold: 0.5,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(
        section.title.replace(/\s+/g, "-").toLowerCase()
      );
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      <section>
        <div className="bg-[#EEF1F5] 2xl:pt-[100px] xl:pt-[75px] lg:pt-[66px] md:pt-[45px] pt-[50px] 2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] md:pb-0 pb-12">
          <div className="flex 2xl:gap-[30px] md:flex-nowrap flex-wrap">
            <div className="hidden w-full mb-[40px]">
              <button
                className="text-[#1B1B1F] text-[18px] font-semibold py-2 rounded-lg w-full flex justify-between items-center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-start flex pe-2">
                  {dropdownOpen
                    ? activeSection
                      ? sections.find(
                          (s) =>
                            s.title.replace(/\s+/g, "-").toLowerCase() ===
                            activeSection
                        )?.title
                      : "In this article"
                    : "In this article"}
                </span>
                <span>
                  <Image src={downArrow} alt="" />
                </span>
              </button>
              {dropdownOpen && (
                <ul className="bg-white shadow-md rounded-lg mt-2">
                  {sections.map((item, index) => {
                    const sectionId = item.title
                      .replace(/\s+/g, "-")
                      .toLowerCase();
                    return (
                      <li key={index}>
                        <a
                          href={`#${sectionId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(sectionId);
                            if (element) {
                              const headerOffset = 200;
                              const elementPosition =
                                element.getBoundingClientRect().top +
                                window.scrollY;
                              window.scrollTo({
                                top: elementPosition - headerOffset,
                                behavior: "smooth",
                              });
                            }
                            setDropdownOpen(false);
                          }}
                          className={`block px-4 py-2 ${
                            activeSection === sectionId
                              ? "text-[#3464FC]"
                              : "text-[#424242]"
                          } hover:bg-gray-100`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
            <aside className="hidden md:block 2xl:w-[341px] xl:w-[255px] md:w-[227.33px]">
              <div className="sticky 2xl:top-[140px] xl:top-[100px] md:top-[90px]">
                <h2 className="font-semibold text-[#424242] 2xl:text-[27px] xl:text-[25px] lg:text-[22px] md:text-[21px]">
                  In this article
                </h2>
                <ul className="2xl:pt-[20px] xl:pt-[15px] md:pt-[12px] grid grid-cols-1 2xl:gap-y-[10px] xl:gap-y-[7.5px] md:gap-y-[7px] font-semibold text-[#424242]">
                  {sections.map((item, index) => {
                    const sectionId = item.title
                      .replace(/\s+/g, "-")
                      .toLowerCase();
                    return (
                      <li key={index}>
                        <a
                          href={`#${sectionId}`}
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(sectionId);
                              if (element) {
                              const headerOffset = 130;
                              const elementPosition =
                                element.getBoundingClientRect().top +
                                window.scrollY;
                              window.scrollTo({
                                top: elementPosition - headerOffset,
                                behavior: "smooth",
                              });
                            }
                            setDropdownOpen(false);
                          }}
                          className={`block ${
                            activeSection === sectionId
                              ? "text-[#3464FC] after:bg-[#3464FC]"
                              : "text-[#424242] hover:text-[#3464FC] after:hover:bg-[#3464FC]"
                          } test-dev transition-all duration-500 2xl:py-2 2xl:ps-[20px] xl:ps-[15px] md:ps-[13px] 2xl:text-base xl:text-12px] md:text-[10.67px] relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-[3px]`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

            {/* Content Sections */}
            <main className="2xl:w-[calc(100%_-_341px)] xl:w-[calc(100%_-_255px)] md:w-[calc(100%_-_227.33px)] w-full grid-cols-1 grid 2xl:ps-[30px] xl:ps-[22.5px] md:ps-[20px] 2xl:gap-y-[30px] xl:gap-y-[22.5px] md:gap-y-[22px] gap-y-[20px]">
              {sections.map((section) => {
                const sectionId = section.title
                  .replace(/\s+/g, "-")
                  .toLowerCase();
                return (
                  <section
                    key={sectionId}
                    id={sectionId}
                    className="scroll-mt-16"
                  >
                    <h2 className="text-[#1B1B1F] font-semibold 2xl:text-[27px] xl:text-[20.25px] text-[18px]">
                      {section.title}
                    </h2>
                    <div>{section.content}</div>
                  </section>
                );
              })}
            </main>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicyText;
