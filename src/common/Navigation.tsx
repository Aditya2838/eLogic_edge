"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

  const NavBar: React.FC = () => {
  // Desktop dropdown state
  const [activeDropdown, setActiveDropdown] = useState<null | string>(null);
  const dropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const dropdownTimers = useRef<Record<string, NodeJS.Timeout | null>>({});
  
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<null | string>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const menus = [
    {
      id: "iot",
      title: "Industrial IoT Solutions",
      overviewHref: "/our-industrial-solutions",
      items: [
        { title: "Energy Monitoring", href: "/energy-consumption-monitoring" },
        { title: "Condition Monitoring", href: "/machine-condition-monitoring" },
        { title: "Productivity Monitoring", href: "/oee-and-production-monitoring" },
        { title: "Case Studies", href: "/our-works" },
      ],
    },
    {
      id: "services",
      title: "Product Development",
      overviewHref: "/our-process",
      items: [
        { title: "Embedded Hardware Design", href: "/services-overview/embedded-hardware-design" },
        { title: "Embedded Software Design", href: "/services-overview/embedded-software-design" },
        { title: "Human-machine Interface Development", href: "/services-overview/human-machine-interface-ux-development" },
        { title: "Wireless Systems Development", href: "/services-overview/wireless-systems-development" },
        { title: "Mechanical & Industrial Design", href: "/services-overview/mechanical-and-industrial-design" },
        { title: "Manufacturing Support", href: "/services-overview/manufacturing-optimization-support" },
        { title: "IoT Application Development", href: "/services-overview/custom-iot-apps-development" },
        { title: "Technology Consulting", href: "/services-overview/technology-compliance-consulting" },
        { title: "Projects", href: "/our-works" },

      ],
    },
    {
      id: "products",
      title: "Products",
      items: [
        { title: "Edge Connect Series", href: "/" },
        { title: "Field Connect Series", href: "/" },
      ],
    },
    {
      id: "company",
      title: "Company", 
      items: [
        { title: "About-us", href: "/about-us" },
        { title: "Team", href: "/our-team" },
        { title: "Careers", href: "/careers" },
      ],
    },
    {
      id: "Resources",
      title: "Resources", 
      items: [
        { title: "Blogs", href: "/blogs" },
        { title: "Projects", href: "/our-works" },
        { title: "Press", href: "/" },
      ],
    },
  ];
 
  const handleDropdownEnter = (id: string) => {
    Object.keys(dropdownTimers.current).forEach((key) => {
      const timer = dropdownTimers.current[key];
      if (key !== id && timer) {
        clearTimeout(timer);
        dropdownTimers.current[key] = null;
      }
      if (key !== id) {
        setActiveDropdown(null);
      }
    });
      setActiveDropdown(id);
  };
  
  const handleDropdownLeave = (id: string) => {
    dropdownTimers.current[id] = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);  
  };
  
  const cancelDropdownClose = (id: string) => {
    const timer = dropdownTimers.current[id]; 
      if (timer) {
      clearTimeout(timer);
      dropdownTimers.current[id] = null;
    }
  };
    // Toggle mobile dropdown
  const toggleMobileDropdown = (id: string) => {
    setOpenMobileDropdown(prev => prev === id ? null : id);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    if (!isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  };


  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden min-[768px]:flex gap-6  md:text-xs xl:text-sm 2xl:text-lg relative z-50">
        {menus.map((menu) => (
          <div
            key={menu.id}
            className="relative group"
            ref={(el) => {
              dropdownRefs.current[menu.id] = el;
            }}
            
                onMouseLeave={() => handleDropdownLeave(menu.id)}
            onMouseEnter={() => handleDropdownEnter(menu.id)}
          >
            {menu.overviewHref ? (
              <Link
                href={menu.overviewHref}
                className="nav-btn text-white flex items-center gap-1 2xl:py-[38px] xl:py-[19.5px] py-[16.5px] 2xl:px-[10px] hover:text-[#3563E9]"
                onMouseEnter={() => cancelDropdownClose(menu.id)}
              >
                {menu.title}
                {menu.items.length > 0 && (
                  <FaChevronDown
                    className={`w-[12px] transition-transform ${
                      activeDropdown === menu.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
            ) : (
              <button
                className="nav-btn text-white flex items-center gap-1 2xl:py-[38px] xl:py-[19.5px] py-[16.5px] 2xl:px-[10px] hover:text-[#3563E9]"
                onClick={() => setActiveDropdown(activeDropdown === menu.id ? null : menu.id)}
                onMouseEnter={() => cancelDropdownClose(menu.id)}
              >
                {menu.title}
                {menu.items.length > 0 && (
                  <FaChevronDown
                    className={`w-[12px] transition-transform ${
                      activeDropdown === menu.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
            )}

            {menu.items.length > 0 && (
              <ul 
                className={`absolute mt-0 w-full min-w-[200px] bg-white shadow-md rounded-md py-2 z-50 transition-all duration-200 ${
                  activeDropdown === menu.id 
                    ? "opacity-100 visible translate-y-0" 
                    : "opacity-0 invisible -translate-y-1"
                }`}
                onMouseEnter={() => cancelDropdownClose(menu.id)} 
              >
                {menu.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-black hover:bg-[#f0f4ff] hover:text-[#3563E9] transition"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        
        <div className="flex items-center max-[1279px]:hidden">
          <Link
            className="nav-btn text-white flex items-center gap-1 2xl:py-[38px] xl:py-[19.5px] py-[16.5px] px-[10px] hover:text-[#3563E9]"
            href="/contact-us">
            Contact Us
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="min-[768px]:hidden text-[#3563E9] focus:outline-none z-[20]"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <FaTimes className="h-6 w-6" />
        ) : (
          <FaBars className="h-6 w-6" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`min-[768px]:hidden bg-white w-full absolute left-0 top-[102px] min-h-[calc(100vh_-_62px)] flex flex-col justify-between transition-all duration-300 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col">
          {menus.map((menu) => (
            <li key={menu.id} className="relative">
             <div className="flex flex-col">
              {menu.overviewHref ? (
                <div className="flex items-center justify-between border-t border-t-[#E5E5E5]">
                  <Link
                    href={menu.overviewHref}
                    className="py-[18px] flex-1 text-black font-normal text-base px-[20px] focus:text-[#3563E9]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                  {menu.items.length > 0 && (
                    <button
                      onClick={() => toggleMobileDropdown(menu.id)}
                      className="py-2 px-[20px] text-[#3563E9] text-sm"
                    >
                      <FaChevronDown
                        className={`transform transition-all duration-300 ${
                          openMobileDropdown === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-between border-t border-t-[#E5E5E5]">
                  <button
                    className="py-[18px] flex-1 text-left text-black font-normal text-base px-[20px] focus:text-[#3563E9]"
                    onClick={() => toggleMobileDropdown(menu.id)}
                  >
                    {menu.title}
                  </button>
                  {menu.items.length > 0 && (
                    <button
                      onClick={() => toggleMobileDropdown(menu.id)}
                      className="py-2 px-[20px] text-[#3563E9] text-sm"
                    >
                      <FaChevronDown
                        className={`transform transition-all duration-300 ${
                          openMobileDropdown === menu.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>
              )}
            </div>
              
              {openMobileDropdown === menu.id && (
                <div className="flex flex-col mb-3">
                  {menu.items.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-black text-[14px] transition-all duration-500 hover:text-[#3563E9] py-2 px-[40px]"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        
        <div className="px-[20px] lg:pt-10 md:pt-7 pt-0 pb-14 w-full">
          <Link
            className="bg-[#3563E9] text-white w-full h-[48px] flex justify-center items-center py-[2px] text-[16px] font-semibold rounded-[16px] capitalize duration-500 hover:bg-black hover:text-white"
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;