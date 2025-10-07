"use client";
import React, { useEffect, useState, useMemo } from "react";
import PageBanner from "./_components/PageBanner";
import ExploringGenerative from "./_components/ExploringGenerative";
import UnderstandYourReaders from "./_components/UnderstandYourReaders";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

// images
import downArrow from "@/src/assets/images/downarrow.svg";
import RelatedBlogs from "./_components/RelatedBlogs";
import TalkToExpert from "@/src/common/TalkToExpert";

function Page() {
  const sections = useMemo(
    () => [
      {
        title: "Exploring Generative AI in Content Creation",
        content: <ExploringGenerative />,
      },
      {
        title: "Understand Your Readers",
        content: <UnderstandYourReaders />,
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
      <PageBanner />

      <section>
        <div className="2xl:px-[72px] xl:px-[54px] lg:px-[48px] px-[20px] 2xl:py-[100px] xl:py-[75px] lg:py-[66px] md:py-[45px] py-[50px]">
          <div className="flex 2xl:gap-[80px] xl:gap-[60px] lg:gap-[50px] md:gap-[40px] md:flex-nowrap flex-wrap">
            <div className="md:hidden w-full mb-[40px]">
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
            <aside className="hidden md:block 2xl:w-[465px] xl:w-[400px] lg:w-[370px] md:w-[250px]">
              <div className="sticky 2xl:top-[140px] xl:top-[100px] md:top-[90px]">
                <h2 className="font-semibold text-[#222325] 2xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px]">
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
                              : "text-[#424242]"
                          } transition-all duration-500 2xl:py-2 2xl:ps-[20px] xl:ps-[15px] md:ps-[13px] 2xl:text-base xl:text-12px] md:text-[10.67px] relative after:absolute after:left-0 after:top-0 after:bottom-0 after:w-[3px]`}
                        >
                          {item.title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
            <main className="2xl:w-[calc(100%_-_465px)] xl:w-[calc(100%_-_400px)] lg:w-[calc(100%_-_375px)] md:w-[calc(100%_-_250px)] grid grid-cols-1 2xl:gap-[42px] xl:gap-[30px] md:gap-[25px] gap-[22px]">
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
                    <h2 className="text-[#222325] font-bold 2xl:text-[30px] xl:text-[24px] md:text-[20px] text-[18px] 2xl:mb-5 xl:mb-4 mb-3">
                      {section.title}
                    </h2>
                    <div>{section.content}</div>
                  </section>
                );
              })}
              <div>
                <p className="2xl:text-[20px] xl:text-[18px] lg:text-[17px] text-[15px] font-semibold text-[#222325]">
                  Like what you see? Share with a friend.
                </p>
                <div className="flex gap-3 text-[#222325] 2xl:text-[34px] xl:text-[30px] lg:text-[25px] text-[18px] 2xl:pt-[30px] xl:pt-[22px] pt-[18px]">
                  <Link
                    href=""
                    className="transition-all duration-500 hover:text-[#3563E9]"
                    target="_blank"
                  >
                    <FaFacebookSquare />
                  </Link>
                  <Link
                    href=""
                    className="transition-all duration-500 hover:text-[#3563E9]"
                    target="_blank"
                  >
                    <IoLogoWhatsapp />
                  </Link>
                  <Link
                    href=""
                    className="transition-all duration-500 hover:text-[#3563E9]"
                    target="_blank"
                  >
                    <FaSquareXTwitter />
                  </Link>
                  <Link
                    href=""
                    className="transition-all duration-500 hover:text-[#3563E9]"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>
      <RelatedBlogs />
      <TalkToExpert/>
    </>
  );
}

export default Page;
