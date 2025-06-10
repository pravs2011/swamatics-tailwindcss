import React, { useState, useEffect } from "react";
import introVideo from "/images/intro-video.mp4";
import MainTemplate from "../../components/Templates/MainTemplates";
import Select from "react-select";

const HomePage = () => {
  const [modalImage, setModalImage] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const [activeStep, setActiveStep] = useState(1);
  const [manufacturingSteps, setManufacturingSteps] = useState([]);
  const [ourVision, setOurVision] = useState([]);
  const [aboutSection, setAboutSection] = useState([]);
  const [productLaunchedSection, setProductLaunchedSection] = useState();
  const [projectsAndCompanyGrowthSection, setProjectsAndCompanyGrowthSection] =
    useState();
  const [performanceMetricsSection, setPerformanceMetricsSection] = useState();
  const [ourClientsSection, setOurClientsSection] = useState();
  const [contactUsSection, setContactUsSection] = useState();

  const openModal = (imageSrc, title) => {
    setModalImage(imageSrc);
    setModalTitle(title);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalTitle("");
  };

  useEffect(() => {
    fetch("/data/home.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Data loaded successfully:", data);
        setManufacturingSteps(data.manufacturingSteps);
        setOurVision(data.ourVision);
        setAboutSection(data.aboutSection);
        setProductLaunchedSection(data.productLaunchedSection);
        setProjectsAndCompanyGrowthSection(
          data.projectsAndCompanyGrowthSection
        );
        setPerformanceMetricsSection(data.performanceMetricsSection);
        setOurClientsSection(data.ourClientsSection);
        setContactUsSection(data.contactUsSection);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  }, []);

  return (
    <MainTemplate>
      {/* Hero Section with Full Width Video */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={introVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex-1">
            {ourVision[0]?.image ? (
              <img
                src={ourVision[0]?.image}
                alt="Swam Vision"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  console.error(
                    "Failed to load vision image:",
                    ourVision[0]?.image
                  );
                  e.target.src = "/images/our-vision.png";
                }}
                onLoad={() => {
                  console.log(
                    "Vision image loaded successfully:",
                    ourVision[0]?.image
                  );
                }}
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                <span className="text-gray-500">Loading image...</span>
              </div>
            )}
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 leading-tight tracking-tight">
              {ourVision[0]?.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {ourVision[0]?.description1}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {ourVision[0]?.description2}
            </p>
            <div className="mt-8">
              <button className="relative bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:transform hover:-translate-y-1 flex items-center gap-3 group">
                <span>Learn More About Us</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight relative inline-block">
              {aboutSection?.title}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {aboutSection?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {aboutSection?.ourStory?.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {aboutSection?.ourStory?.description}
              </p>
            </div>

            <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {aboutSection?.ourMission?.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                {aboutSection?.ourMission?.description}
              </p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-12">
              {aboutSection?.ourCoreValues?.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {aboutSection?.ourCoreValues?.qualityTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {aboutSection?.ourCoreValues?.qualityDescription}
                </p>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {aboutSection?.ourCoreValues?.innovationTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {aboutSection?.ourCoreValues?.innovationDescription}
                </p>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9983 15.5895 20.2 15.402"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13A4.002 4.002 0 0 1 16 11.87"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {aboutSection?.ourCoreValues?.collaborationTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {aboutSection?.ourCoreValues?.collaborationDescription}
                </p>
              </div>
              <div className="relative bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center transition-all duration-300 hover:shadow-lg hover:transform hover:-translate-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M19.4 15A1.65 1.65 0 0 0 20.85 13.35V10.65A1.65 1.65 0 0 0 19.4 9L17.7 7.35A1.65 1.65 0 0 0 15.35 7.35H8.65A1.65 1.65 0 0 0 6.3 7.35L4.6 9A1.65 1.65 0 0 0 3.15 10.65V13.35A1.65 1.65 0 0 0 4.6 15L6.3 16.65A1.65 1.65 0 0 0 8.65 16.65H15.35A1.65 1.65 0 0 0 17.7 16.65L19.4 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {aboutSection?.ourCoreValues?.reliabilityTitle}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {aboutSection?.ourCoreValues?.reliabilityDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Modern Professional Design */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              New Technology Launch
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Advanced Energy Efficient Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our latest breakthrough in industrial blower technology
              with next-generation energy efficiency and performance
            </p>
          </div>

          {/* Featured Product */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 lg:p-12 mb-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Featured Product
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                  Super Helical Hybrid Blower Package
                </h3>
                <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                  100% Energy Efficient solution with cutting-edge technology,
                  next generation innovative design, and unmatched performance
                  for industrial applications.
                </p>

                {/* Key Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 12L11 14L15 10"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                          stroke="white"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                    <span className="text-blue-100">100% Energy Efficient</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-blue-100">Next-Gen Technology</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22S8 18 8 14V7L12 5L16 7V14C16 18 12 22 12 22Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-blue-100">Made in India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="white"
                          strokeWidth="2"
                        />
                        <path
                          d="M12 6V12L16 14"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-blue-100">Low Noise Operation</span>
                  </div>
                </div>

                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-50 hover:transform hover:-translate-y-1 flex items-center gap-3 group">
                  <span>Explore Details</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {/* Technical Diagram */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="w-full h-64 bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                    {/* Technical Diagram Illustration */}
                    <div className="absolute inset-4 border-2 border-white/30 rounded-lg"></div>
                    <div className="absolute top-8 left-8 w-16 h-16 border-2 border-green-400 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute top-8 right-8 w-12 h-12 border-2 border-blue-400 rounded"></div>
                    <div className="absolute bottom-8 left-8 w-20 h-8 border-2 border-purple-400 rounded-full"></div>
                    <div className="absolute bottom-8 right-8 w-10 h-16 border-2 border-yellow-400 rounded"></div>

                    {/* Center Element */}
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Connecting Lines */}
                    <div className="absolute top-1/2 left-1/4 w-8 h-0.5 bg-white/40 -translate-y-1/2"></div>
                    <div className="absolute top-1/2 right-1/4 w-8 h-0.5 bg-white/40 -translate-y-1/2"></div>
                    <div className="absolute left-1/2 top-1/4 w-0.5 h-8 bg-white/40 -translate-x-1/2"></div>
                    <div className="absolute left-1/2 bottom-1/4 w-0.5 h-8 bg-white/40 -translate-x-1/2"></div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-white/80 text-sm">
                      Advanced Engineering Design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 1V6M12 18V23M4.22 4.22L7.86 7.86M16.14 16.14L19.78 19.78M1 12H6M18 12H23M4.22 19.78L7.86 16.14M16.14 7.86L19.78 4.22"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Turbo Blowers - Integrally Geared Type
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                High efficiency single stage centrifugal machine based on high
                speed focused specialized technology for oil-less operation.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-blue-600 font-medium">
                  High Efficiency
                </div>
                <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="14,2 14,8 20,8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="13"
                    x2="8"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="16"
                    y1="17"
                    x2="8"
                    y2="17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Vacuum Pumps With Secondary Suction
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ideally suited for processes requiring medium vacuums such as
                degassing, exhausting and pneumatic conveying applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-green-600 font-medium">
                  Air Injection
                </div>
                <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-all duration-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 16V8C20.9996 7.64928 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.27L13 2.27C12.696 2.09446 12.3511 2.00205 12 2.00205C11.6489 2.00205 11.304 2.09446 11 2.27L4 6.27C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64928 3 8V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="7.5,4.21 12,6.81 16.5,4.21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="7.5,19.79 7.5,14.6 3,12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="21,12 16.5,14.6 16.5,19.79"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline
                    points="12,22.08 12,17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Advanced Manufacturing Systems
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                State-of-the-art manufacturing processes with integrated quality
                control and precision engineering capabilities.
              </p>
              <div className="flex items-center justify-between">
                <div className="text-sm text-purple-600 font-medium">
                  Precision Built
                </div>
                <button className="text-gray-400 hover:text-blue-600 transition-colors duration-200">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Discover how our energy-efficient solutions can reduce
                operational costs and improve performance for your industrial
                applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  <span>Request Quote</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-blue-600 hover:text-blue-600 hover:transform hover:-translate-y-1">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-24 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              Manufacturing Processes
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-6xl mx-auto">
            {/* Main Content Area */}
            <div className="flex-1 lg:max-w-2xl">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={manufacturingSteps[activeStep - 1]?.image}
                  alt={manufacturingSteps[activeStep - 1]?.title}
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    console.error(
                      "Failed to load manufacturing image:",
                      manufacturingSteps[activeStep - 1]?.image
                    );
                    // Fallback to a default image based on step
                    const fallbackImages = {
                      1: "/images/SuperHelicalHybridBlower.png",
                      2: "/images/TurboBlowers-integrallyGearedType.png",
                      3: "/images/VacuumPumpsWithSecondarySuction.png",
                      4: "/images/SuperHelicalHybridBlower.png",
                      5: "/images/TurboBlowers-integrallyGearedType.png",
                    };
                    e.target.src =
                      fallbackImages[activeStep] ||
                      "/images/SuperHelicalHybridBlower.png";
                  }}
                  onLoad={() => {
                    console.log(
                      "Manufacturing image loaded successfully:",
                      manufacturingSteps[activeStep - 1]?.image
                    );
                  }}
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider">
                    STEP {String(activeStep).padStart(2, "0")}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {manufacturingSteps[activeStep - 1]?.title}
                  </h3>
                  <p className="text-gray-200 text-lg mb-4 leading-relaxed">
                    {manufacturingSteps[activeStep - 1]?.description}
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    {manufacturingSteps[activeStep - 1]?.details}
                  </p>
                </div>
              </div>
            </div>

            {/* Steps Grid */}
            <div className="lg:w-80">
              {/* First Step - Larger */}
              <div
                className={`mb-6 p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeStep === 1
                    ? "bg-blue-500 text-white shadow-xl"
                    : "bg-white text-gray-800 shadow-lg hover:shadow-xl border border-gray-200"
                }`}
                onClick={() => setActiveStep(1)}
              >
                <div
                  className={`text-4xl font-bold mb-3 ${
                    activeStep === 1 ? "text-white" : "text-blue-500"
                  }`}
                >
                  01
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-semibold">Request</div>
                  <div className="text-lg font-semibold">Quotation</div>
                </div>
              </div>

              {/* Remaining Steps - 2x2 Grid */}
              <div className="grid grid-cols-2 gap-4">
                {manufacturingSteps.slice(1).map((step) => (
                  <div
                    key={step.id}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeStep === step.id
                        ? "bg-blue-500 text-white shadow-xl"
                        : "bg-white text-gray-800 shadow-lg hover:shadow-xl border border-gray-200"
                    }`}
                    onClick={() => setActiveStep(step.id)}
                  >
                    <div
                      className={`text-3xl font-bold mb-3 ${
                        activeStep === step.id ? "text-white" : "text-blue-500"
                      }`}
                    >
                      {String(step.id).padStart(2, "0")}
                    </div>
                    <div className="space-y-1">
                      {step.title.split(" ").map((word, index) => (
                        <div
                          key={index}
                          className="text-sm font-semibold leading-tight"
                        >
                          {word}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects & Company Growth */}
      <section className="py-20 px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Projects & Company Growth
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Driving innovation and excellence across industries with our
              cutting-edge solutions and strategic partnerships
            </p>
          </div>

          {/* Growth Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 3V21H21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12L12 7L16 11L21 6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">
                PROJECTS COMPLETED
              </div>
              <div className="text-xs text-gray-400">
                Successfully delivered across 25+ countries
              </div>
            </div>

            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="7" r="4" stroke="white" strokeWidth="2" />
                  <path
                    d="M23 21V19C23 18.1645 22.7155 17.3541 22.2094 16.7006C21.7033 16.047 20.9983 15.5895 20.2 15.402"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 3.13A4.002 4.002 0 0 1 16 11.87"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">200+</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">
                GLOBAL CLIENTS
              </div>
              <div className="text-xs text-gray-400">
                Trusted by leading organizations worldwide
              </div>
            </div>

            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">60+</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">
                YEARS OF EXPERIENCE
              </div>
              <div className="text-xs text-gray-400">
                Pioneering industrial solutions since 1960
              </div>
            </div>

            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-2">45</div>
              <div className="text-sm font-semibold text-gray-300 mb-2">
                MANUFACTURING FACILITIES
              </div>
              <div className="text-xs text-gray-400">
                State-of-the-art facilities across India
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Performance Metrics
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to excellence
              and continuous improvement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="text-sm font-medium text-gray-300 mb-2">
                Client Satisfaction
              </div>
              <div className="text-4xl font-bold text-white mb-4">98%</div>
              <div className="text-xs text-gray-400 mb-4">
                Customer Service Rate
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>

            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="text-sm font-medium text-gray-300 mb-2">
                Energy Efficiency
              </div>
              <div className="text-4xl font-bold text-white mb-4">45%</div>
              <div className="text-xs text-gray-400 mb-4">
                Average Energy Savings
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>

            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="text-sm font-medium text-gray-300 mb-2">
                Project Success
              </div>
              <div className="text-4xl font-bold text-white mb-4">99%</div>
              <div className="text-xs text-gray-400 mb-4">
                On-time Delivery Rate
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: "99%" }}
                ></div>
              </div>
            </div>

            <div className="group bg-gray-700 bg-opacity-50 rounded-xl p-6 text-center shadow-xl transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-3 hover:scale-105">
              <div className="text-sm font-medium text-gray-300 mb-2">
                Global Reach
              </div>
              <div className="text-4xl font-bold text-white mb-4">85%</div>
              <div className="text-xs text-gray-400 mb-4">
                International Projects
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2">
                <div
                  className="bg-purple-500 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Client Reviews */}
      <section className="relative py-24 px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="absolute inset-0 bg-white opacity-75"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">
              {ourClientsSection?.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {ourClientsSection?.description}
            </p>
          </div>

          {/* Overall Rating */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 mb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="text-6xl font-bold text-blue-600 mb-4">4.9</div>
              <div className="flex justify-center lg:justify-start mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-yellow-400"
                  >
                    <path
                      d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                      fill="#FFD700"
                      stroke="#FFD700"
                      strokeWidth="1"
                    />
                  </svg>
                ))}
              </div>
              <div className="text-gray-600 text-lg">
                Based on 150+ client reviews
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-12">
                  5 star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 w-8">
                  85%
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-12">
                  4 star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "12%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 w-8">
                  12%
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-12">
                  3 star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "2%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 w-8">
                  2%
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-12">
                  2 star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 w-8">
                  1%
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 w-12">
                  1 star
                </span>
                <div className="flex-1 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "0%" }}
                  ></div>
                </div>
                <span className="text-sm font-medium text-gray-700 w-8">
                  0%
                </span>
              </div>
            </div>
          </div>

          {/* Client Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {ourClientsSection?.clients?.map((client) => (
              <div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-2"
                key={client.id}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 text-lg">
                      {client.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {client.designation}
                    </p>
                    <span className="text-gray-500 text-xs">
                      {client.company}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-yellow-400"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"
                          fill="#FFD700"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed italic">
                    "{client.testimonial}"
                  </p>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">{client.reviewDate}</span>
                  <span className="text-green-600 font-medium">
                    ✓ Verified Purchase
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                100% Satisfaction
              </h4>
              <p className="text-gray-600">
                Guaranteed quality and performance
              </p>
            </div>
            <div className="text-center transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22S8 18 8 14V7L12 5L16 7V14C16 18 12 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Certified Quality
              </h4>
              <p className="text-gray-600">
                ISO certified manufacturing standards
              </p>
            </div>
            <div className="text-center transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M12 6V12L16 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                24/7 Support
              </h4>
              <p className="text-gray-600">
                Round-the-clock technical assistance
              </p>
            </div>
            <div className="text-center transition-all duration-300 hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 hover:rotate-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                Global Reach
              </h4>
              <p className="text-gray-600">Serving clients in 25+ countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Newsletter */}
      <section className="py-20 px-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-700">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Stay Updated with Industry Insights
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Subscribe to our newsletter and get the latest updates on
                industrial innovations, product launches, and expert insights
                delivered directly to your inbox.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Latest Technology Updates
                    </h4>
                    <p className="text-white/80 text-sm">
                      Be the first to know about cutting-edge industrial
                      solutions
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 11H15M9 15H15M17 21L12 16L7 21V5C7 4.46957 7.21071 3.96086 7.58579 3.58579C7.96086 3.21071 8.46957 3 9 3H15C15.5304 3 16.0391 3.21071 16.4142 3.58579C16.7893 3.96086 17 4.46957 17 5V21Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Exclusive Case Studies
                    </h4>
                    <p className="text-white/80 text-sm">
                      Access detailed project insights and success stories
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 13A5 5 0 0 0 8.9 8.9L4.9 4.9A10 10 0 0 0 1 12L3 14L1 16A10 10 0 0 0 4.9 19.1L8.9 15.1A5 5 0 0 0 10 13ZM13 10A5 5 0 0 0 15.1 8.9L19.1 4.9A10 10 0 0 0 12 1L10 3L8 1A10 10 0 0 0 4.9 4.9L8.9 8.9A5 5 0 0 0 13 10Z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Industry Best Practices
                    </h4>
                    <p className="text-white/80 text-sm">
                      Learn from expert recommendations and technical guides
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="8.5"
                        cy="7"
                        r="4"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 8V14L17 11"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Expert Webinars
                    </h4>
                    <p className="text-white/80 text-sm">
                      Invitations to exclusive online sessions and workshops
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Join 5,000+ Industry Professionals
              </h3>
              <p className="text-gray-600">
                Get weekly insights delivered to your inbox
              </p>
            </div>

            <form className="space-y-6">
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <polyline
                      points="22,6 12,13 2,6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-gray-800"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Subscribe Now</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 2L11 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22 2L15 22L11 13L2 9L22 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div className="flex flex-wrap gap-3 justify-center">
                <div className="flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-2 rounded-full text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L11 14L15 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                  <span>No spam, ever</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 text-green-600 px-3 py-2 rounded-full text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22S8 18 8 14V7L12 5L16 7V14C16 18 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Privacy protected</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 text-gray-600 px-3 py-2 rounded-full text-sm">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 6L6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 6L18 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Unsubscribe anytime</span>
                </div>
              </div>

              <p className="text-center text-sm text-gray-500">
                By subscribing, you agree to our{" "}
                <a href="#" className="text-purple-600 hover:underline">
                  Privacy Policy
                </a>{" "}
                and consent to receive updates from our company.
              </p>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-gray-800">5,000+</div>
                  <div className="text-sm text-gray-600">
                    Active Subscribers
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex -space-x-2 mb-2">
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                      alt="User 1"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=32&h=32&fit=crop&crop=face"
                      alt="User 2"
                    />
                    <img
                      className="w-8 h-8 rounded-full border-2 border-white"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                      alt="User 3"
                    />
                    <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      +
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">
                    Join industry leaders
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Let's Start Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? We'd love to hear from
              you and discuss how we can help your business thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Panel - Get in Touch */}
            <div className="bg-gray-800 bg-opacity-50 rounded-3xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We're here to help you succeed. Reach out to us through any of
                  the channels below, and we'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <polyline
                        points="22,6 12,13 2,6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Email Us
                    </h4>
                    <p className="text-indigo-400 font-medium mb-1">
                      info@swamatics.com
                    </p>
                    <span className="text-gray-400 text-sm">
                      We'll respond within 24 hours
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.19 12.85C3.49998 10.2412 2.44825 7.27099 2.12 4.18C2.09501 3.90347 2.12788 3.62476 2.21649 3.36162C2.3051 3.09849 2.44748 2.85669 2.63519 2.65162C2.8229 2.44655 3.05028 2.28271 3.30495 2.17052C3.55962 2.05833 3.83444 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.11 3.72C9.23662 4.68007 9.47144 5.62273 9.81 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51355 12.4135 11.5865 14.4865 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Call Us
                    </h4>
                    <p className="text-indigo-400 font-medium mb-1">
                      +91 9876543210
                    </p>
                    <span className="text-gray-400 text-sm">
                      We're available from 9 AM to 6 PM, Monday to Friday
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      Visit Us
                    </h4>
                    <p className="text-indigo-400 font-medium mb-1">
                      123 Main Street, Anytown, USA
                    </p>
                    <span className="text-gray-400 text-sm">
                      We're located in the heart of the city, easily accessible
                      from major highways
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.95718 14.8821 3.284C14.0247 3.61083 13.2884 4.19445 12.773 4.95371C12.2575 5.71297 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39624C5.36074 6.60667 4.01032 5.43666 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3V3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 8C18.1217 8 20.1566 8.84285 21.6569 10.3431C23.1571 11.8434 24 13.8783 24 16V21H20V16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14C17.4696 14 16.9609 14.2107 16.5858 14.5858C16.2107 14.9609 16 15.4696 16 16V21H12V16C12 13.8783 12.8429 11.8434 14.3431 10.3431C15.8434 8.84285 17.8783 8 20 8H16Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <rect
                        x="2"
                        y="9"
                        width="4"
                        height="12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="4"
                        cy="4"
                        r="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-700 hover:bg-indigo-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2"
                        y="3"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 21L12 17L16 21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Panel - Send us a Message */}
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  Tell us about your project and we'll get back to you with a
                  tailored solution.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Service Interested In
                  </label>
                  <Select
                    id="service"
                    name="service"
                    placeholder="Select a service"
                    className="react-select-container"
                    classNamePrefix="react-select"
                    options={[
                      { value: "web-development", label: "Web Development" },
                      { value: "mobile-apps", label: "Mobile Applications" },
                      { value: "cloud-solutions", label: "Cloud Solutions" },
                      { value: "consulting", label: "Technology Consulting" },
                      { value: "other", label: "Other" },
                    ]}
                    isSearchable={false}
                    styles={{
                      control: (base) => ({
                        ...base,
                        border: "1px solid #d1d5db",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        boxShadow: "none",
                        "&:hover": {
                          borderColor: "#6366f1",
                        },
                      }),
                      option: (base, state) => ({
                        ...base,
                        backgroundColor: state.isSelected
                          ? "#6366f1"
                          : state.isFocused
                          ? "#f3f4f6"
                          : "white",
                        color: state.isSelected ? "white" : "#1f2937",
                      }),
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project, timeline, and any specific requirements..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all duration-200 resize-vertical"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <span>Send Message</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 2L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 2L15 22L11 13L2 9L22 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-screen overflow-hidden shadow-2xl transform transition-all duration-300 animate-in fade-in zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              onClick={closeModal}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="relative">
              <img
                src={modalImage}
                alt={modalTitle}
                className="w-full h-auto max-h-96 object-contain"
              />
            </div>
            <div className="p-6 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 text-center">
                {modalTitle}
              </h3>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default HomePage;
