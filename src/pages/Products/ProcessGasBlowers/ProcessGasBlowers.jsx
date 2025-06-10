import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaCogs,
  FaIndustry,
  FaChartLine,
  FaShieldAlt,
  FaTools,
  FaLeaf,
  FaThermometerHalf,
  FaTachometerAlt,
  FaVolumeDown,
  FaWrench,
  FaCheckCircle,
  FaDownload,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaRecycle,
  FaLightbulb,
  FaAward,
  FaRocket,
  FaPlay,
  FaArrowRight,
  FaStar,
  FaUsers,
  FaCertificate,
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
} from "react-icons/fa";

const ProcessGasBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "Improved Sealing System",
      description:
        "Advanced leak-proof sealing technology for gas circulation applications",
      details:
        "Mechanical seals fitted when application warrants, ensuring zero leakage for critical gas handling processes",
      benefit: "100% leak-proof operation",
    },
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: "Special Construction Materials",
      description:
        "Materials specifically selected based on the nature of gas being handled",
      details:
        "Corrosion-resistant materials and coatings designed for specific gas compositions and operating conditions",
      benefit: "Extended equipment life",
    },
    {
      icon: <FaAtom className="text-2xl text-white" />,
      title: "Multi-Gas Compatibility",
      description:
        "Handles diverse industrial gases including Hydrogen, Nitrogen, Oxygen, and more",
      details:
        "Engineered for Biogas, CO2, Methane, Mixed Gas, BF Gas, Coke Oven Gas applications",
      benefit: "Versatile gas handling",
    },
    {
      icon: <FaIndustry className="text-2xl text-white" />,
      title: "Chemical Process Optimization",
      description:
        "Specifically designed for circulation of gases in chemical processes",
      details:
        "Optimized for continuous operation in demanding chemical and petrochemical environments",
      benefit: "Process efficiency boost",
    },
  ];

  const gasTypes = [
    {
      name: "Hydrogen",
      symbol: "H₂",
      icon: <FaAtom />,
      color: "#3b82f6",
      applications: ["Petrochemical", "Refining", "Steel Production"],
    },
    {
      name: "Nitrogen",
      symbol: "N₂",
      icon: <FaFlask />,
      color: "#10b981",
      applications: ["Inerting", "Blanketing", "Food Processing"],
    },
    {
      name: "Oxygen",
      symbol: "O₂",
      icon: <FaWind />,
      color: "#f59e0b",
      applications: ["Combustion", "Oxidation", "Medical"],
    },
    {
      name: "Biogas",
      symbol: "CH₄",
      icon: <FaRecycle />,
      color: "#10b981",
      applications: ["Energy Recovery", "Waste Treatment", "Power Generation"],
    },
    {
      name: "Carbon Dioxide",
      symbol: "CO₂",
      icon: <FaLeaf />,
      color: "#6b7280",
      applications: [
        "Food Processing",
        "Chemical Synthesis",
        "Enhanced Oil Recovery",
      ],
    },
    {
      name: "Methane",
      symbol: "CH₄",
      icon: <FaFire />,
      color: "#ef4444",
      applications: ["Natural Gas", "Landfill Gas", "Digester Gas"],
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description: "Gas circulation and boosting in chemical manufacturing",
      icon: <FaFlask />,
      image: "🧪",
      benefits: [
        "Precise gas flow control",
        "Chemical compatibility",
        "Process optimization",
      ],
    },
    {
      title: "Petrochemical Industry",
      description:
        "Handling of process gases in refineries and petrochemical plants",
      icon: <FaOilCan />,
      image: "⚗️",
      benefits: [
        "High-pressure capability",
        "Corrosion resistance",
        "Continuous operation",
      ],
    },
    {
      title: "Steel & Metal Processing",
      description: "BF Gas and Coke Oven Gas handling in steel plants",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "High-temperature operation",
        "Dust handling capability",
        "Robust construction",
      ],
    },
    {
      title: "Power Generation",
      description: "Biogas and natural gas boosting for power plants",
      icon: <FaRocket />,
      image: "⚡",
      benefits: ["Energy efficiency", "Reliable gas supply", "Low maintenance"],
    },
    {
      title: "Environmental Systems",
      description:
        "Gas handling in environmental control and treatment systems",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: [
        "Emission control",
        "Environmental compliance",
        "Clean technology",
      ],
    },
    {
      title: "Food & Pharmaceutical",
      description:
        "Inert gas handling for food processing and pharmaceutical applications",
      icon: <FaShieldAlt />,
      image: "🍃",
      benefits: ["Contamination-free", "FDA compliance", "Sterile operation"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 85,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 1.1 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Operation",
      value: "Continuous Duty",
      icon: <FaTools />,
      color: "#f59e0b",
    },
    {
      parameter: "Sealing",
      value: "Leak-Proof Design",
      icon: <FaShieldAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "40+ Years Experience",
      description: "Four decades of expertise in gas handling technology",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "Multi-Gas Capability",
      description: "Handles diverse industrial gases safely and efficiently",
      icon: <FaAtom />,
      stat: "10+",
      unit: "Gas Types",
    },
    {
      title: "Global Installations",
      description: "Trusted by industries worldwide for critical applications",
      icon: <FaGlobe />,
      stat: "500+",
      unit: "Installations",
    },
    {
      title: "Zero Leakage",
      description: "Advanced sealing technology ensures leak-proof operation",
      icon: <FaShieldAlt />,
      stat: "100%",
      unit: "Leak-Proof",
    },
  ];

  // Using the official process gas blowers image from Swamatics website
  const productImageUrl =
    "https://swamatics.com/wp-content/uploads/2024/05/Process-Gas-BlowersGas-Boosters-600x465.jpg";

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='0.5'/></pattern></defs><rect width='100' height='100' fill='url(%23grid)'/></svg>")`,
          }}
        />

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-white lg:text-left text-center">
            <br />
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/30">
              <FaAtom className="text-amber-400" />
              <span>Process Gas Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Advanced
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Process Gas Blowers
              </span>
            </h1>
            <p className="text-lg lg:text-xl leading-relaxed mb-8 opacity-90">
              Engineered for chemical process gas circulation and boosting.
              Handle diverse industrial gases including Hydrogen, Nitrogen,
              Oxygen, Biogas, CO₂, Methane, and specialized process gases with
              unmatched reliability and leak-proof performance.
            </p>

            <div className="flex justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 leading-none">
                  85,000
                </div>
                <div className="text-sm opacity-80 mt-2">M³/Hr Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 leading-none">
                  1.1
                </div>
                <div className="text-sm opacity-80 mt-2">Bar Pressure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-amber-400 leading-none">
                  100%
                </div>
                <div className="text-sm opacity-80 mt-2">Leak-Proof</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-800 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/30">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 text-white rounded-full font-semibold border border-white/30 backdrop-blur-lg transition-all duration-300 hover:bg-white/30 hover:-translate-y-1">
                <FaPlay />
                <span>Technical Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Pulsing background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-gradient-radial from-white/15 via-white/5 to-transparent rounded-full animate-pulse" />

              <img
                src={productImageUrl}
                alt="Process Gas Blower"
                className="w-full h-auto rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105 bg-white/10 p-4 backdrop-blur-lg border border-white/20"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating specs - hidden on mobile */}
              <div className="absolute inset-0 pointer-events-none overflow-visible z-10 hidden lg:block">
                <div
                  className="absolute top-[15%] -right-[15%] bg-white/95 backdrop-blur-lg px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg border-2 border-white/80 min-w-[100px] justify-center whitespace-nowrap z-15 animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "0s" }}
                >
                  <FaShieldAlt />
                  <span>Leak-Proof</span>
                </div>
                <div
                  className="absolute top-[60%] -left-[20%] bg-white/95 backdrop-blur-lg px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg border-2 border-white/80 min-w-[100px] justify-center whitespace-nowrap z-15 animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "1s" }}
                >
                  <FaAtom />
                  <span>Multi-Gas</span>
                </div>
                <div
                  className="absolute bottom-[25%] -right-[10%] bg-white/95 backdrop-blur-lg px-4 py-1.5 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg border-2 border-white/80 min-w-[100px] justify-center whitespace-nowrap z-15 animate-bounce"
                  style={{ animationDuration: "3s", animationDelay: "2s" }}
                >
                  <FaCogs />
                  <span>Chemical Grade</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gas Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Supported Gas Types
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Engineered to handle diverse industrial gases with precision and
              safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {gasTypes.map((gas, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 relative overflow-hidden group"
                style={{ borderLeftColor: gas.color }}
              >
                {/* Hover effect top bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: gas.color }}
                />

                <div className="text-4xl mb-4" style={{ color: gas.color }}>
                  {gas.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {gas.name}
                  </h3>
                  <div
                    className="text-lg font-semibold mb-4"
                    style={{ color: gas.color }}
                  >
                    {gas.symbol}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {gas.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-black/5 px-3 py-1 rounded-2xl text-xs font-medium text-gray-600"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Advanced Technology Features
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized design elements for safe and efficient gas handling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent relative overflow-hidden group ${
                  activeFeature === index
                    ? "border-indigo-500 -translate-y-2 shadow-2xl"
                    : "hover:-translate-y-2 hover:shadow-2xl hover:border-indigo-500"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 transition-opacity duration-300 ${
                    activeFeature === index
                      ? "opacity-5"
                      : "group-hover:opacity-5 opacity-0"
                  }`}
                />

                <div className="w-15 h-15 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 relative z-10">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm relative z-10">
                  <FaCheckCircle />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600 text-sm leading-relaxed">
                    <p>{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Technical Specifications
              </h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Our process gas blowers are engineered for demanding chemical
                and industrial applications, delivering reliable performance
                with specialized materials and advanced sealing systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-white/20"
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-2 opacity-80">
                        {spec.parameter}
                      </h4>
                      <div
                        className="text-lg font-bold"
                        style={{ color: spec.color }}
                      >
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <FaAward />
                  <span>ATEX Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  <FaShieldAlt />
                  <span>Leak-Proof Design</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md">
                <img
                  src={productImageUrl}
                  alt="Process Gas Blower Specifications"
                  className="w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                {/* Tech highlights - positioned around the image */}
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  {/* Improved Sealing System - Top */}
                  <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Improved Sealing System
                  </div>

                  {/* Special Construction Materials - Left side */}
                  <div className="absolute top-[35%] -left-[15%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Special Construction Materials
                  </div>

                  {/* Mechanical Seals Available - Right side */}
                  <div className="absolute top-[55%] -right-[15%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Mechanical Seals Available
                  </div>

                  {/* Chemical Process Optimized - Bottom */}
                  <div className="absolute bottom-[15%] left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full text-xs font-semibold text-gray-800 shadow-xl border-2 border-white/80 whitespace-nowrap">
                    Chemical Process Optimized
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Industrial Applications
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Powering critical processes across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 border-2 border-transparent shadow-lg ${
                    selectedApplication === index
                      ? "border-indigo-500 translate-x-4 shadow-2xl"
                      : "hover:translate-x-4 hover:border-indigo-500 hover:shadow-2xl"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-3xl min-w-[60px] text-center">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-indigo-500 transition-transform duration-300 ${
                      selectedApplication === index ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-2xl lg:sticky lg:top-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl text-gray-800 font-medium"
                    >
                      <FaCheckCircle className="text-emerald-500 text-lg" />
                      <span>{benefit}</span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 p-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose SWAM Process Gas Blowers
            </h2>
            <p className="text-lg lg:text-xl text-gray-600">
              Proven expertise in specialized gas handling applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="text-center px-6 py-10 bg-gradient-to-br from-slate-50 to-slate-200 rounded-2xl transition-all duration-300 relative overflow-hidden group hover:-translate-y-4 hover:shadow-2xl"
              >
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />

                <div className="text-4xl text-indigo-500 mb-6 relative z-10">
                  {advantage.icon}
                </div>
                <div className="mb-6 relative z-10">
                  <div className="text-3xl lg:text-4xl font-extrabold text-gray-800 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-base text-gray-600 font-semibold mt-1">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-4 relative z-10">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center">
        <div className="max-w-6xl mx-auto px-8">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Need a Custom Gas Handling Solution?
            </h2>
            <p className="text-lg lg:text-xl leading-relaxed opacity-90 mb-10 max-w-2xl mx-auto">
              Our technical experts will help you select the right process gas
              blower for your specific gas type and application requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-12">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-gray-800 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/30">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white rounded-full font-semibold border border-white/30 backdrop-blur-lg transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                <FaDownload />
                <span>Download Product Catalog</span>
              </button>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FaPhone className="text-amber-400" />
                <span>+91-99103-02163</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FaEnvelope className="text-amber-400" />
                <span>sales@swamatics.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-80">
                <FaMapMarkerAlt className="text-amber-400" />
                <span>C-2, Sector-3, Noida-201301, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full text-xl cursor-pointer z-50 flex items-center justify-center transition-all duration-300 hover:bg-black/90 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Process Gas Blower - Expanded View"
                  className="w-full h-auto max-h-[60vh] object-contain"
                />
                <div className="p-8 bg-white">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Process Gas Blower/Compressor
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Advanced Gas Circulation & Boosting System
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <span className="bg-gray-100 px-4 py-2 rounded-2xl text-sm text-gray-700 font-medium">
                      Capacity: Up to 85,000 M³/Hr
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-2xl text-sm text-gray-700 font-medium">
                      Pressure: Up to 1.1 bar 'g'
                    </span>
                    <span className="bg-gray-100 px-4 py-2 rounded-2xl text-sm text-gray-700 font-medium">
                      Operation: Leak-Proof & Continuous Duty
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default ProcessGasBlowers;
