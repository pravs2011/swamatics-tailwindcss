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
  FaBolt,
  FaWind,
  FaGasPump,
  FaWarehouse,
  FaBoxes,
  FaAtom,
  FaFire,
  FaSeedling,
  FaLayerGroup,
  FaCompressArrowsAlt,
  FaExpand,
  FaSync,
  FaWeight,
  FaEye,
  FaLock,
  FaFlask,
  FaTint,
  FaSnowflake,
  FaMicrochip,
  FaSpa,
  FaOilCan,
  FaCircle,
  FaWater,
  FaCube,
  FaExpandArrowsAlt,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

// Custom animations
const customStyles = {
  "@keyframes fadeInUp": {
    from: {
      opacity: 0,
      transform: "translateY(30px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes slideDown": {
    from: {
      opacity: 0,
      transform: "translateY(-20px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes float": {
    "0%, 100%": {
      transform: "translateY(0px)",
    },
    "50%": {
      transform: "translateY(-10px)",
    },
  },
};

// Add styles to head
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = Object.entries(customStyles)
    .map(([key, value]) => {
      if (typeof value === "object") {
        return `${key} { ${Object.entries(value)
          .map(([k, v]) => `${k}: ${v};`)
          .join(" ")} }`;
      }
      return `${key} { ${value} }`;
    })
    .join(" ");
  document.head.appendChild(styleSheet);
}

const MechanicalVaccumBoosters = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaExpandArrowsAlt className="feature-icon" />,
      title: "High Vacuum Boosting",
      description:
        "Boosts high vacuum up to one micron in combination with conventional vacuum mechanical pumps",
      details:
        "Specifically designed to work with backing pumps to achieve ultra-high vacuum levels from 50 Torr to one micron",
      benefit: "Ultra-high vacuum capability",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Advanced Sealing System",
      description:
        "Highly reliable sealing system with piston ring type labyrinth seals and rotary seals",
      details:
        "Features piston ring type labyrinth seals with rotary seal between conveying and bearing chambers, plus neutral chamber design",
      benefit: "Complete vacuum tightness",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Capacity Range",
      description:
        "Available in different models with capacity from 500 M³/Hr to 52,000 M³/Hr",
      details:
        "Comprehensive range of models to suit various industrial applications with flexible capacity options",
      benefit: "Scalable solutions",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Flexible Drive Options",
      description:
        "Drive arrangement options include direct coupled or V-belts depending on model and operating conditions",
      details:
        "Splash oil lubrication on both ends with choice of direct coupling or V-belt drive systems for optimal performance",
      benefit: "Versatile configuration",
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description:
        "Distillation, crystallization, and chemical reaction processes requiring high vacuum",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Chemical distillation",
        "Crystallization processes",
        "Reaction vessel evacuation",
      ],
    },
    {
      title: "Pharmaceutical Manufacturing",
      description:
        "Freeze drying, solvent recovery, and sterile processing applications",
      icon: <FaMicrochip />,
      image: "💊",
      benefits: [
        "Freeze drying systems",
        "Solvent recovery",
        "Sterile processing",
      ],
    },
    {
      title: "Electronics & Semiconductors",
      description:
        "Vacuum coating, sputtering, and semiconductor manufacturing processes",
      icon: <FaBolt />,
      image: "🔌",
      benefits: ["Vacuum coating", "Sputtering systems", "Chip manufacturing"],
    },
    {
      title: "Research Laboratories",
      description:
        "Scientific research applications requiring ultra-high vacuum environments",
      icon: <FaAtom />,
      image: "🔬",
      benefits: [
        "Scientific research",
        "Material testing",
        "Analytical equipment",
      ],
    },
    {
      title: "Metallurgy & Heat Treatment",
      description:
        "Vacuum furnaces, degassing, and metal processing applications",
      icon: <FaFire />,
      image: "🔥",
      benefits: ["Vacuum furnaces", "Metal degassing", "Heat treatment"],
    },
    {
      title: "Food Processing",
      description:
        "Freeze drying, packaging, and food preservation applications",
      icon: <FaBoxes />,
      image: "🥫",
      benefits: ["Freeze drying", "Vacuum packaging", "Food preservation"],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "52,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 10⁻³ Torr",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Minimum Capacity",
      value: "500 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Operating Range",
      value: "50 Torr to 1 micron",
      icon: <FaExpandArrowsAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Ultra-High Vacuum",
      description:
        "Achieves vacuum levels up to 10⁻³ Torr in multi-stage configuration for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "10⁻³",
      unit: "Torr",
    },
    {
      title: "High Displacement",
      description:
        "Exceptional pumping capacity up to 52,000 M³/Hr for large-scale vacuum operations",
      icon: <FaChartLine />,
      stat: "52,000",
      unit: "M³/Hr",
    },
    {
      title: "Robust Construction",
      description:
        "Compact design with robust construction suitable for continuous duty operation",
      icon: <FaShieldAlt />,
      stat: "Continuous",
      unit: "Duty",
    },
    {
      title: "Universal Compatibility",
      description:
        "Can be used with all types of backing pumps for flexible system integration",
      icon: <FaTools />,
      stat: "All Types",
      unit: "Backing Pumps",
    },
  ];

  const workingPrinciple = {
    title: "Mechanical Vacuum Booster Technology",
    description:
      "Mechanical vacuum boosters work in combination with conventional vacuum pumps to boost high vacuum levels. The state-of-the-art design features unique sealing systems ensuring complete vacuum tightness and leak-proof construction for reliable operation.",
    steps: [
      {
        step: "1",
        title: "Primary Vacuum Creation",
        description:
          "Backing pump creates initial vacuum while booster operates at low inlet pressure",
      },
      {
        step: "2",
        title: "Vacuum Amplification",
        description:
          "Mechanical booster amplifies vacuum level through high-speed rotor operation",
      },
      {
        step: "3",
        title: "Enhanced Performance",
        description:
          "Combined system achieves ultra-high vacuum from 50 Torr to one micron",
      },
    ],
  };

  const productImageUrl = "/images/Mechanical-Vacuum.jpg";

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
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-[fadeInUp_0.8s_ease-out]">
              <FaStar className="text-blue-400" />
              <span>Advanced Vacuum Technology</span>
            </div>
            <h1 className="text-6xl font-extrabold leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Mechanical
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Vacuum Boosters
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              SWAM Mechanical Vacuum Boosters work in combination with
              conventional vacuum pumps to boost high vacuum up to one micron.
              Featuring state-of-the-art design with advanced sealing systems
              for complete vacuum tightness and leak-proof construction.
            </p>

            <div className="flex gap-8 mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  52,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  10⁻³
                </div>
                <div className="text-sm text-slate-400 mt-1">Torr Vacuum</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Ultra-High
                </div>
                <div className="text-sm text-slate-400 mt-1">Performance</div>
              </div>
            </div>

            <div className="flex gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <img
                src={productImageUrl}
                alt="Mechanical Vacuum Booster - Ultra-High Vacuum Technology"
                className="relative z-10 max-w-full h-auto cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-white backdrop-blur-lg px-4 py-2 rounded-full text-gray-800 text-sm animate-float">
                  <FaExpandArrowsAlt className="text-blue-400" />
                  <span>High Vacuum</span>
                </div>
                <div
                  className="absolute top-1/2 -right-4 flex items-center gap-2 bg-white backdrop-blur-lg px-4 py-2 rounded-full text-gray-800 text-sm animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaShieldAlt className="text-green-400" />
                  <span>Advanced Sealing</span>
                </div>
                <div
                  className="absolute bottom-4 left transform -translate-x-1/2 flex items-center gap-2 bg-white backdrop-blur-lg px-4 py-2 rounded-full text-gray-800 text-sm animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <FaChartLine className="text-yellow-400" />
                  <span>High Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Vacuum Booster Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the engineering excellence that makes our Mechanical
              Vacuum Boosters the preferred choice for ultra-high vacuum
              applications requiring exceptional performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 cursor-pointer transition-all duration-300 border ${
                  activeFeature === index
                    ? "border-blue-500 shadow-xl transform -translate-y-2"
                    : "border-gray-200 shadow-md hover:shadow-lg hover:border-blue-300 hover:-translate-y-1"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 text-2xl transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-600 text-white"
                      : "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                  <FaCheckCircle />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200 animate-[slideDown_0.3s_ease-out]">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Working Principle & Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Understanding mechanical vacuum booster technology that combines
              with backing pumps to achieve ultra-high vacuum levels for
              demanding industrial applications
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-600 font-semibold mb-6">
                  <FaExpandArrowsAlt />
                  <span>Vacuum Booster Technology</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Mechanical Vacuum Booster Working Principle"
                  className="w-full h-auto rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none lg:block hidden">
                  <div className="absolute top-8 left-8 flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-md">
                      Piston Ring Seals
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-md">
                      Rotary Sealing System
                    </div>
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium text-gray-700 shadow-md">
                      Drive Mechanism
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaShieldAlt />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Advanced Sealing System
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Highly reliable sealing with piston ring type labyrinth seals,
                  rotary seals between chambers, and neutral chamber design for
                  complete vacuum tightness
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Seal Type:</span>
                    <span className="text-sm font-semibold text-gray-900">
                      Piston Ring + Rotary
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Tightness:</span>
                    <span className="text-sm font-semibold text-gray-900">
                      Leak Proof
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaChartLine />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Wide Capacity Range
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Available in different models with capacity ranging from 500
                  M³/Hr to 52,000 M³/Hr to suit various industrial applications
                  and requirements
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      500 - 52,000 M³/Hr range
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Multiple model options
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaGears />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Flexible Drive Configuration
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Drive arrangements include direct coupled or V-belt options
                  with splash oil lubrication system for reliable operation
                  under various conditions
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Direct or V-belt drive
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Splash oil lubrication
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gray-100 text-gray-600 rounded-xl flex items-center justify-center mb-4 text-xl">
                  <FaTools />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Material Options
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Standard construction from high quality cast iron inoculated
                  for vacuum duty. Optional stainless steel, ductile iron with
                  special coatings available
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      High quality cast iron
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Stainless steel options
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Mechanical Vacuum Boosters deliver exceptional ultra-high vacuum
                performance with proven specifications designed for demanding
                applications requiring precise vacuum control and reliability.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-2xl" style={{ color: spec.color }}>
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
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
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 rounded-2xl p-6 mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Standard Performance Range
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Vacuum Range:</span>
                    <span className="font-semibold text-gray-900">
                      50 Torr to 1 micron
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Multi-stage Vacuum:</span>
                    <span className="font-semibold text-gray-900">
                      Up to 10⁻³ Torr
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Construction:</span>
                    <span className="font-semibold text-gray-900">
                      Cast Iron, SS, Ductile Iron
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Duty:</span>
                    <span className="font-semibold text-gray-900">
                      Continuous Operation
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <FaCertificate className="text-blue-600" />
                  <span className="text-blue-800 font-medium">
                    ISO 9001:2015
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <FaAward className="text-green-600" />
                  <span className="text-green-800 font-medium">
                    CE Certified
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <FaShieldAlt className="text-purple-600" />
                  <span className="text-purple-800 font-medium">
                    5 Year Warranty
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Mechanical Vacuum Booster Technical Specifications"
                  className="w-full h-auto rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Ultra-High Vacuum
                  </div>
                  <div className="absolute top-1/4 left-4 bg-green-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Advanced Sealing
                  </div>
                  <div className="absolute bottom-1/4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Robust Construction
                  </div>
                  <div className="absolute bottom-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    Flexible Drive Options
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Ultra-high vacuum solutions for precision applications requiring
              exceptional vacuum levels and reliable performance across diverse
              industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg"
                      : "bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {app.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                    <FaArrowRight
                      className={`transition-all duration-300 ${
                        selectedApplication === index
                          ? "text-blue-600 transform rotate-90"
                          : "text-gray-400"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-gray-600">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-6">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white/70 rounded-lg p-3"
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Mechanical Vacuum Boosters
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Advanced vacuum booster technology for ultra-high vacuum
              performance and exceptional reliability in demanding applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gray-900 leading-tight">
                    {advantage.stat}
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salient Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Salient Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive features that make SWAM Mechanical Vacuum Boosters
              the preferred choice for ultra-high vacuum applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaCube />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Compact Design
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Robust construction suitable for continuous duty operation with
                space-efficient design
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaTools />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Universal Compatibility
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Can be used with all types of backing pumps for flexible system
                integration
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaSync />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Flexible Flow Arrangement
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Choice of horizontal and vertical flows to suit installation
                requirements
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaChartLine />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Wide Capacity Range
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Large number of models: 500 M³/hr to 52,000 M³/hr capacity
                options
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaGears />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Drive Flexibility
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Compatible with flanged motor, V-belt drive, or gear box drive
                options
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <FaAward />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                High Reliability
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Unique advanced technology sealing system ideally suited for
                high vacuum applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Ultra-High Vacuum Solutions?
            </h2>
            <p className="text-xl mb-10 text-blue-100 leading-relaxed">
              Connect with our engineering experts to discover how Mechanical
              Vacuum Boosters can enhance your processes with ultra-high vacuum
              performance, reliable operation, and advanced sealing technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-3 bg-blue-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-blue-400 transition-colors duration-300 border-2 border-blue-400">
                <FaDownload />
                <span>Download Technical Brochure</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
              <div className="flex items-center gap-2">
                <FaPhone className="text-blue-300" />
                <span>+91-99103-02163</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-blue-300" />
                <span>sales@swamatics.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-300" />
                <span>Noida, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-xl hover:bg-gray-700 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Mechanical Vacuum Booster - Ultra-High Vacuum Technology - Expanded View"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mechanical Vacuum Booster
                  </h3>
                  <p className="text-lg text-gray-600 mb-4">
                    Ultra-High Vacuum Technology
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      Capacity: Up to 52,000 M³/Hr
                    </span>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      Vacuum: Up to 10⁻³ Torr
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                      Range: 50 Torr to 1 micron
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

export default MechanicalVaccumBoosters;
