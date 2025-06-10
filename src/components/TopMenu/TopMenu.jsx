import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo-black.png";
import { useNavigate } from "react-router-dom";

const TopMenu = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRefs = useRef({});
  const hoverTimeoutRef = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleDropdownHover = (dropdown, event) => {
    // Only handle hover on desktop
    if (!isMobile) {
      // Clear any existing timeout
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      setActiveDropdown(dropdown);
    }
  };

  const handleDropdownLeave = () => {
    // Only handle leave on desktop
    if (!isMobile) {
      // Add a small delay before closing to prevent accidental closes
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150);
    }
  };

  // Check if dropdown content is scrollable
  const checkScrollable = (element) => {
    if (!element) return false;
    return element.scrollHeight > element.clientHeight;
  };

  const handleDropdownClick = (dropdown) => {
    // Handle clicks on mobile or as fallback
    if (isMobile) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open dropdowns when toggling mobile menu
    setActiveDropdown(null);
  };

  // Dropdown content data
  const dropdownContent = {
    introduction: {
      sections: [
        {
          title: "About",
          links: [
            {
              name: "Welcome From CEO",
              description: "Message from our Chief Executive Officer",
              link: "/welcome-from-ceo",
            },
            {
              name: "About Us",
              description: "Learn about our company and values",
              link: "/about",
            },
            {
              name: "History",
              description: "Our company's journey and milestones",
              link: "/history",
            },
            {
              name: "Mission and Vision",
              description: "Our mission statement and future vision",
              link: "/mission-and-vision",
            },
          ],
        },
        {
          title: "Operations",
          links: [
            {
              name: "Plants",
              description: "Our manufacturing facilities and locations",
              link: "/plants",
            },
            {
              name: "Quality And Testing Systems",
              description: "Our quality assurance and testing processes",
              link: "/introduction",
            },
            {
              name: "Engineering & Design",
              description: "Our engineering capabilities and design services",
              link: "/engineering-design",
            },
            {
              name: "Health and Safety",
              description: "Our commitment to workplace safety",
              link: "/health-and-safety",
            },
          ],
        },
        {
          title: "Credentials",
          links: [
            {
              name: "Certificates",
              description: "Our certifications and accreditations",
              link: "/certificates",
            },
          ],
        },
      ],
    },
    product: {
      sections: [
        {
          title: "Blower Division",
          links: [
            {
              name: "Rotary Twin & Tri Lobe Blowers",
              description: "Rotary Twin & Tri Lobe Blowers",
              link: "/rotary-piston-blowers",
            },
            {
              name: "Process Gas Blowers",
              description: "Process Gas Blowers/ Gas Boosters",
              link: "/process-gas-blowers",
            },
            {
              name: "Turbo Blowers",
              description: "Turbo Blowers- Integrally Geared Type",
              link: "/turbo-blowers",
            },
            {
              name: "Super Helical Hybrid Blower",
              description: "Super Helical Hybrid Blower",
              link: "/super-helical-hybrid-blower",
            },
            {
              name: "Truck Blowers",
              description: "Truck Blowers",
              link: "/truck-blowers",
            },
            {
              name: "Bio Gas Blowers",
              description: "Bio Gas Blowers/Compressors",
              link: "/bio-gas-blowers-compressors",
            },
            {
              name: "Vacuum Pumps",
              description: "Vacuum Pumps With Secondary Suction/Air Injection",
              link: "/air-injection",
            },
            {
              name: "Rotary Sliding Vane Compressors",
              description: "Rotary Sliding Vane Compressors",
              link: "/rotary-sliding-vane-compressors",
            },
            {
              name: "Centrifugal Blowers",
              description: "Centrifugal Blowers",
              link: "/centrifugal-fans-blowers",
            },
            {
              name: "SR Series Blowers",
              description: "SR Series Blowers",
              link: "/sr-series-blowers",
            },
          ],
        },
        {
          title: "Vaccum Division",
          links: [
            {
              name: "Dry Screw Vacuum Pump",
              description: "Dry Screw Vacuum Pump - Combined Variable Pitch",
              link: "/dry-screw-vaccum-pump",
            },
            {
              name: "Liquid Ring Vacuum Pump",
              description: "Liquid Ring Vacuum Pump",
              link: "/liquid-ring-vacuum-pumps",
            },
            {
              name: "Oil Vane Vacuum Pump",
              description: "Oil Vane Vacuum Pump",
              link: "/oil-vane-vacuum-pump-2",
            },
            {
              name: "Mechanical Vacuum Boosters",
              description: "Mechanical Vacuum Boosters",
              link: "/mechanical-vacuum-boosters",
            },
            {
              name: "MVR Blowers",
              description: "MVR Blowers",
              link: "/mvr-blowers",
            },
            {
              name: "Vacuum Systems And Packages",
              description: "Vacuum Systems And Packages",
              link: "/vacuum-systems-and-packages",
            },
            {
              name: "Condenser Exhausters",
              description: "Condenser Exhausters",
              link: "/condenser-exhausters",
            },
          ],
        },
        {
          title: "Other Products",
          links: [
            {
              name: "Shell And Tube Type",
              description: "Shell And Tube Type Heat Exchangers",
              link: "/shell-and-tube-type-heat-exchangers",
            },
            {
              name: "Acoustic Enclosures & Silencers",
              description: "Acoustic Enclosures And Silencers",
              link: "/acoustic-enclosures-and-silencers",
            },
          ],
        },
      ],
    },
    activities: {
      sections: [
        {
          title: "Activities",
          links: [
            {
              name: "Events",
              description: "Events",
              link: "/events",
            },
            {
              name: "Testimonials",
              description: "Testimonials",
              link: "/testimonials",
            },
            {
              name: "Awards",
              description: "Awards",
              link: "/awards",
            },
          ],
        },
      ],
    },
    blog: {
      sections: [
        {
          title: "Latest Posts",
          links: [
            {
              name: "Industry Insights",
              description: "Latest trends and insights",
            },
            {
              name: "Product Updates",
              description: "New features and improvements",
            },
            { name: "Best Practices", description: "Tips and best practices" },
          ],
        },
        {
          title: "Categories",
          links: [
            { name: "Technology", description: "Tech-related articles" },
            { name: "Business", description: "Business strategy and tips" },
            { name: "Tutorials", description: "How-to guides and tutorials" },
          ],
        },
      ],
    },
  };

  return (
    <>
      {/* CSS to hide scrollbars in WebKit browsers */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .mobile-menu::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <nav className="fixed md:top-4 md:left-1/2 md:transform md:-translate-x-1/2 md:w-[95%] md:max-w-[1320px] md:rounded-xl top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-xl shadow-lg border-b md:border border-white/20 z-[10000] transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo Container */}
          <div className="flex items-center gap-2 z-10">
            <img
              src={logo}
              alt="Material Kit 2"
              className="h-8 w-auto cursor-pointer"
              style={{ width: "150px", height: "auto" }}
              onClick={() => navigate("/")}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors z-10"
            onClick={toggleMobileMenu}
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 top-3" : "top-1"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : "top-3"
                }`}
              />
              <span
                className={`absolute block h-0.5 w-6 bg-gray-700 transform transition duration-300 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              />
            </div>
          </button>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-2">
            {/* Home - Simple navigation item without dropdown */}
            <div className="relative">
              <button
                className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium whitespace-nowrap"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </div>

            {/* Dynamic Dropdown Items */}
            {Object.keys(dropdownContent).map((key) => (
              <div
                key={key}
                className="relative group"
                onMouseEnter={(e) => handleDropdownHover(key, e)}
                onMouseLeave={handleDropdownLeave}
              >
                {/* Invisible bridge to prevent hover gaps */}
                {!isMobile && activeDropdown === key && (
                  <div className="absolute top-full left-0 right-0 h-6 bg-transparent z-40" />
                )}
                <button
                  className={`px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium whitespace-nowrap flex items-center gap-1 ${
                    activeDropdown === key ? "text-blue-600 bg-blue-50" : ""
                  }`}
                  onClick={() => handleDropdownClick(key)}
                >
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Mega Dropdown */}
                {!isMobile && activeDropdown === key && (
                  <div
                    className={`absolute left-1/2 transform -translate-x-1/2 ${
                      dropdownContent[key].sections.length === 1
                        ? "min-w-[300px] max-w-[400px]"
                        : dropdownContent[key].sections.length === 2
                        ? "min-w-[500px] max-w-[600px]"
                        : "min-w-[600px] max-w-[800px]"
                    } bg-white/98 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl z-50 transition-all duration-300 animate-in slide-in-from-top-2`}
                    style={{ top: "calc(100% + 1.5rem)" }}
                  >
                    {/* Background with subtle gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-gray-50/95 rounded-xl" />

                    {/* Scrollable Content Container */}
                    <div
                      ref={(el) => {
                        dropdownRefs.current[key] = el;
                        if (el && !isMobile) {
                          setTimeout(() => {
                            const isScrollable = checkScrollable(el);
                            if (isScrollable) {
                              el.classList.add("scrollable");
                            } else {
                              el.classList.remove("scrollable");
                            }
                          }, 100);
                        }
                      }}
                      className="relative z-10 max-h-[80vh] overflow-y-auto overflow-x-hidden hide-scrollbar"
                      style={{
                        scrollbarWidth: "none" /* Firefox */,
                        msOverflowStyle: "none" /* Internet Explorer 10+ */,
                      }}
                    >
                      {/* Grid Content */}
                      <div
                        className={`grid gap-8 p-8 ${
                          dropdownContent[key].sections.length === 1
                            ? "grid-cols-1 justify-center"
                            : dropdownContent[key].sections.length === 2
                            ? "grid-cols-2"
                            : "grid-cols-3"
                        }`}
                      >
                        {dropdownContent[key].sections.map((section, index) => (
                          <div
                            key={index}
                            className="min-w-[200px] animate-in fade-in-50 duration-300"
                            style={{ animationDelay: `${index * 50}ms` }}
                          >
                            <h3 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide border-b-2 border-blue-100 pb-2">
                              {section.title}
                            </h3>
                            <ul className="space-y-1">
                              {section.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                  <a
                                    href={link.link || "#"}
                                    className="block p-3 rounded-lg transition-all duration-200 group hover:bg-blue-50 hover:shadow-md hover:translate-x-1 hover:border-blue-100"
                                    onClick={(e) => {
                                      if (!link.link) {
                                        e.preventDefault();
                                      }
                                      // Close dropdown after click
                                      setActiveDropdown(null);
                                    }}
                                  >
                                    <span className="block text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                                      {link.name}
                                    </span>
                                    <span className="block text-xs text-gray-600 mt-1 group-hover:text-gray-700">
                                      {link.description}
                                    </span>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Contact Us - Simple navigation item without dropdown */}
            <div className="relative">
              <button className="px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium whitespace-nowrap">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[9998] md:hidden">
          <div
            className="pt-20 pb-8 px-6 h-full overflow-y-auto mobile-menu"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Mobile Home */}
            <div className="mb-4">
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-lg"
                onClick={() => {
                  navigate("/");
                  setIsMobileMenuOpen(false);
                }}
              >
                Home
              </button>
            </div>

            {/* Mobile Dropdown Items */}
            {Object.keys(dropdownContent).map((key) => (
              <div key={key} className="mb-4">
                <button
                  className={`w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-lg flex items-center justify-between ${
                    activeDropdown === key ? "text-blue-600 bg-blue-50" : ""
                  }`}
                  onClick={() => handleDropdownClick(key)}
                >
                  {key.charAt(0).toUpperCase() +
                    key.slice(1).replace(/([A-Z])/g, " $1")}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === key ? "rotate-180" : ""
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Mobile Submenu */}
                {activeDropdown === key && (
                  <div className="mt-3 mb-2 bg-gray-50/50 rounded-xl p-4">
                    {dropdownContent[key].sections.map((section, index) => (
                      <div key={index} className="mb-6 last:mb-0">
                        <h3 className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wide border-b border-blue-200 pb-2">
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <a
                                href={link.link || "#"}
                                className="block p-3 rounded-lg transition-all duration-200 bg-white/70 border border-gray-100 hover:bg-blue-50 hover:border-blue-200"
                                onClick={(e) => {
                                  if (!link.link) {
                                    e.preventDefault();
                                  }
                                  setActiveDropdown(null);
                                  setIsMobileMenuOpen(false);
                                }}
                              >
                                <span className="block text-sm font-semibold text-gray-800">
                                  {link.name}
                                </span>
                                <span className="block text-xs text-gray-600 mt-1">
                                  {link.description}
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Contact Us */}
            <div className="mb-4">
              <button className="w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 font-medium text-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopMenu;
