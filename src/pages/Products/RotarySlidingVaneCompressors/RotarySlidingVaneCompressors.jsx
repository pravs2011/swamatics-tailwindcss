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
  FaTruck,
  FaSnowflake,
  FaFilter,
  FaCube,
  FaCompress,
  FaEye,
} from "react-icons/fa";

const RotarySlidingVaneCompressors = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: "CNC Machine Manufacturing",
      description:
        "High precision manufacturing on CNC machines ensures very high accuracies",
      details:
        "State-of-the-art CNC machining technology delivers exceptional precision and reliability for demanding applications",
      benefit: "High precision accuracy",
    },
    {
      icon: <FaLeaf className="text-2xl text-white" />,
      title: "Energy Efficient Design",
      description:
        "Most advance and energy efficient sliding vane compressors for bio gas applications",
      details:
        "Optimized design reduces energy consumption while maintaining superior performance for bio gas and landfill gas applications",
      benefit: "Energy efficient operation",
    },
    {
      icon: <FaCompress className="text-2xl text-white" />,
      title: "High Pressure Capability",
      description:
        "Develops pressure up to 3.5 bar for various industrial applications",
      details:
        "Robust design capable of handling high pressure requirements up to 3.5 bar gauge for demanding industrial processes",
      benefit: "Up to 3.5 bar pressure",
    },
    {
      icon: <FaCube className="text-2xl text-white" />,
      title: "Variable Volume Chambers",
      description:
        "Individual cells with reducing volumes create efficient compression",
      details:
        "Sliding vanes create individual compression chambers with reducing volumes during rotation from suction to discharge",
      benefit: "Efficient compression cycle",
    },
  ];

  const workingPrinciple = {
    title: "Working Principle",
    description: "Advanced sliding vane compression technology",
    steps: [
      {
        step: "1",
        title: "Eccentric Rotation",
        description:
          "A cylindrical rotor turns eccentrically in cylindrical stator of larger diameter",
        icon: <FaCogs />,
      },
      {
        step: "2",
        title: "Half Moon Chamber",
        description:
          "The free space left between stator and rotor is half moon shaped",
        icon: <FaCube />,
      },
      {
        step: "3",
        title: "Sliding Vanes",
        description:
          "Stratified plastic blades slide freely in slots milled in the rotor",
        icon: <FaEye />,
      },
      {
        step: "4",
        title: "Compression Chambers",
        description:
          "Centrifugal force pushes vanes against casing, creating individual cells with reducing volumes",
        icon: <FaCompress />,
      },
    ],
  };

  const applications = [
    {
      title: "Steel Plant Mix Gas Boosters",
      description: "Boosting mixed gases in steel manufacturing processes",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Reliable gas boosting",
        "Industrial grade performance",
        "Continuous operation",
      ],
    },
    {
      title: "Cement Plant Landfill Gas",
      description: "Handling landfill gases for cement production applications",
      icon: <FaRecycle />,
      image: "🏗️",
      benefits: [
        "Landfill gas utilization",
        "Environmental compliance",
        "Energy recovery",
      ],
    },
    {
      title: "Water Treatment Plant Bio Gas",
      description: "Bio gas compression for water treatment facilities",
      icon: <FaLeaf />,
      image: "💧",
      benefits: [
        "Bio gas handling",
        "Treatment efficiency",
        "Clean energy utilization",
      ],
    },
    {
      title: "Biogas Applications",
      description: "Specialized compression for biogas and renewable energy",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: [
        "Renewable energy support",
        "Environmental friendly",
        "Sustainable operation",
      ],
    },
    {
      title: "Landfill Gas Systems",
      description: "Efficient handling of landfill gases for energy recovery",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: ["Gas recovery", "Emission control", "Energy generation"],
    },
    {
      title: "Industrial Gas Boosting",
      description: "General industrial applications requiring gas compression",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Versatile applications",
        "Reliable performance",
        "Industrial durability",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 5100 M³/Hr (3000 CFM)",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 3.5 bar gauge",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Manufacturing",
      value: "CNC Machine Precision",
      icon: <FaCogs />,
      color: "#f59e0b",
    },
    {
      parameter: "Applications",
      value: "Bio Gas & Landfill Gas",
      icon: <FaLeaf />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "CNC Precision",
      description:
        "Manufactured on CNC machines for high accuracy and reliability",
      icon: <FaCogs />,
      stat: "CNC",
      unit: "Precision",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced design for maximum energy efficiency in bio gas applications",
      icon: <FaLeaf />,
      stat: "Energy",
      unit: "Efficient",
    },
    {
      title: "High Pressure",
      description:
        "Capable of developing pressure up to 3.5 bar for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "3.5",
      unit: "Bar",
    },
    {
      title: "High Capacity",
      description:
        "Available for flows up to 3000 CFM for large scale operations",
      icon: <FaChartLine />,
      stat: "5100",
      unit: "M³/Hr",
    },
  ];

  // Using the specified image path
  const productImageUrl = "images/rotary-Sliding-Vane-Compressors.jpg";

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
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <FaCompress className="text-blue-400" />
              <span>Compression Technology</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Rotary Sliding
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Vane Compressors
              </span>
            </h1>

            <p className="text-xl leading-relaxed text-slate-300 mb-10">
              SWAM offers most advance and energy efficient sliding vane
              compressors for bio gas landfill gases with pressure up to 3.5 bar
              and manufactured on CNC Machine. The Sliding vane compressor have
              very high accuracies and are available for flows up to 3000 CFM
              (5100 M³/Hr).
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  5100
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  3.5
                </div>
                <div className="text-sm text-slate-400 mt-1">Bar Pressure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  CNC
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  Precision Manufacturing
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <FaDownload />
                <span>Download Sliding Vane Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
                <FaPlay />
                <span>Technical Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl">
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/30 to-transparent rounded-3xl animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="Rotary Sliding Vane Compressors"
                className="w-full h-full object-contain rounded-2xl relative z-10 transition-transform duration-300 hover:scale-105 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating specs - hidden on mobile */}
              <div className="absolute inset-0 pointer-events-none hidden lg:block">
                <div className="absolute z-100 top-1/5 -left-10 bg-white/90 backdrop-blur-sm border border-blue-300 rounded-full px-5 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce">
                  <FaCogs className="text-blue-600" />
                  <span>CNC Precision</span>
                </div>
                <div
                  className="absolute z-100 top-3/5 -right-10 bg-white/90 backdrop-blur-sm border border-blue-300 rounded-full px-5 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaLeaf className="text-blue-600" />
                  <span>Bio Gas Ready</span>
                </div>
                <div
                  className="absolute z-100 bottom-1/5 left-10 bg-white/90 backdrop-blur-sm border border-blue-300 rounded-full px-5 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce"
                  style={{ animationDelay: "4s" }}
                >
                  <FaCompress className="text-blue-600" />
                  <span>3.5 Bar Pressure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-600 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FaCogs
                className="animate-spin"
                style={{ animationDuration: "3s" }}
              />
              <span>How It Works</span>
            </div>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-6">
              {workingPrinciple.title}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {workingPrinciple.description}
            </p>
          </div>

          {/* Central Flow Diagram */}
          <div className="relative mb-16">
            {/* Connection Lines - Hidden on mobile */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1000 300">
                <defs>
                  <linearGradient
                    id="flowGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                  </linearGradient>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#3b82f6"
                      opacity="0.7"
                    />
                  </marker>
                </defs>

                {/* Curved flow line */}
                <path
                  d="M 125 150 Q 300 100, 375 150 Q 500 200, 625 150 Q 750 100, 875 150"
                  stroke="url(#flowGradient)"
                  strokeWidth="3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="animate-pulse"
                  style={{ animationDuration: "2s" }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {workingPrinciple.steps.map((step, index) => {
                const colors = [
                  {
                    bg: "from-emerald-500 to-teal-600",
                    accent: "emerald-500",
                    light: "emerald-50",
                  },
                  {
                    bg: "from-blue-500 to-indigo-600",
                    accent: "blue-500",
                    light: "blue-50",
                  },
                  {
                    bg: "from-purple-500 to-violet-600",
                    accent: "purple-500",
                    light: "purple-50",
                  },
                  {
                    bg: "from-orange-500 to-red-600",
                    accent: "orange-500",
                    light: "orange-50",
                  },
                ];
                const color = colors[index];

                return (
                  <div
                    key={index}
                    className="relative group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Step Number Badge */}
                    <div
                      className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${color.bg} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {step.step}
                    </div>

                    {/* Main Card */}
                    <div
                      className={`bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl border-2 border-transparent hover:border-${color.accent} relative overflow-hidden group-hover:bg-${color.light}/50`}
                    >
                      {/* Animated Background */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${color.accent}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`absolute w-2 h-2 bg-${color.accent}/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping`}
                            style={{
                              left: `${20 + i * 15}%`,
                              top: `${30 + (i % 3) * 20}%`,
                              animationDelay: `${i * 200}ms`,
                              animationDuration: "2s",
                            }}
                          />
                        ))}
                      </div>

                      {/* Icon Container */}
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${color.bg} flex items-center justify-center mb-6 text-3xl text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg relative z-10`}
                      >
                        <div className="group-hover:animate-pulse">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-slate-900">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700">
                          {step.description}
                        </p>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-2">
                          <div
                            className={`h-1 bg-${color.accent}/20 rounded-full flex-1 overflow-hidden`}
                          >
                            <div
                              className={`h-full bg-gradient-to-r ${color.bg} rounded-full transition-all duration-1000 group-hover:w-full`}
                              style={{ width: "0%" }}
                            />
                          </div>
                          <span
                            className={`text-xs font-semibold text-${color.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                          >
                            {index + 1}/4
                          </span>
                        </div>
                      </div>

                      {/* Hover Glow Effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${color.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                      ></div>
                    </div>

                    {/* Arrow Connector - Visible only on larger screens */}
                    {index < workingPrinciple.steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                        <div
                          className={`w-12 h-8 text-${color.accent} group-hover:animate-pulse`}
                        >
                          <FaArrowRight className="w-full h-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <FaCompress className="mx-auto text-4xl mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-3">
                Complete Compression Process
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto leading-relaxed">
                These four synchronized steps create an efficient, continuous
                compression cycle that delivers reliable performance for bio gas
                and landfill gas applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Advanced Technology Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              High precision sliding vane technology with CNC manufacturing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-3xl p-10 shadow-md transition-all duration-300 cursor-pointer border-2 relative overflow-hidden ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-xl border-blue-600"
                    : "border-transparent hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 transition-opacity duration-300 ${
                    activeFeature === index ? "opacity-5" : "hover:opacity-5"
                  }`}
                ></div>

                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110">
                  {feature.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm mb-4">
                  <FaCheckCircle />
                  <span className="text-emerald-600">{feature.benefit}</span>
                </div>

                {activeFeature === index && (
                  <div className="bg-slate-50 p-6 rounded-2xl mt-4 animate-pulse">
                    <p className="text-slate-600 text-sm leading-relaxed m-0">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-6">
                Technical Specifications
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our rotary sliding vane compressors are engineered for bio gas
                and landfill gas applications, delivering reliable performance
                with CNC precision manufacturing and energy efficient operation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-l-4 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div
                      className="text-2xl mb-2"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500 mb-1 uppercase tracking-wider">
                        {spec.parameter}
                      </h4>
                      <div className="text-xl font-bold text-slate-800">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-sm font-semibold text-slate-800 shadow-sm">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-sm font-semibold text-slate-800 shadow-sm">
                  <FaCogs />
                  <span>CNC Precision</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full text-sm font-semibold text-slate-800 shadow-sm">
                  <FaShieldAlt />
                  <span>Reliable Performance</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative bg-white rounded-3xl p-8 shadow-lg max-w-md transition-transform duration-300 hover:scale-105">
                <img
                  src={productImageUrl}
                  alt="Sliding Vane Compressor Specifications"
                  className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />

                {/* Tech highlights - hidden on mobile */}
                <div className="absolute -top-2 -left-2 -right-2 -bottom-2 pointer-events-none z-10 hidden lg:block">
                  <div className="absolute top-1/5 -left-1/5 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-md animate-bounce">
                    CNC Machine Manufacturing
                  </div>
                  <div
                    className="absolute top-2/5 -right-1/4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-md animate-bounce"
                    style={{ animationDelay: "1.5s" }}
                  >
                    Energy Efficient Design
                  </div>
                  <div
                    className="absolute bottom-1/3 -left-1/4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-md animate-bounce"
                    style={{ animationDelay: "3s" }}
                  >
                    Up to 3.5 Bar Pressure
                  </div>
                  <div
                    className="absolute bottom-1/10 -right-1/5 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap shadow-md animate-bounce"
                    style={{ animationDelay: "4.5s" }}
                  >
                    Bio Gas Compatible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Specialized for bio gas, landfill gas, and industrial gas boosting
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 bg-white rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "border-blue-600 transform translate-x-4 shadow-md bg-gradient-to-r from-blue-50 to-blue-25"
                      : "border-slate-200 hover:border-blue-600 hover:transform hover:translate-x-2 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-25"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-2xl w-15 h-15 flex items-center justify-center bg-slate-50 rounded-2xl">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`text-slate-400 transition-all duration-300 ${
                      selectedApplication === index
                        ? "transform translate-x-1 text-blue-600"
                        : "group-hover:transform group-hover:translate-x-1 group-hover:text-blue-600"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-3xl p-10 sticky top-8">
              <div className="text-center mb-8">
                <div className="text-3xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-slate-600">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl font-medium text-slate-800"
                    >
                      <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                      <span className="text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white border-none rounded-full font-semibold cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Why Choose SWAM Sliding Vane Compressors
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              CNC precision manufacturing with energy efficient design for bio
              gas applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mx-auto mb-6 text-2xl text-white transition-transform duration-300 hover:scale-110">
                  {advantage.icon}
                </div>

                <div className="mb-6">
                  <div className="text-4xl font-extrabold text-blue-600 leading-none block">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mt-1">
                    {advantage.unit}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              Need a Custom Sliding Vane Compressor?
            </h2>
            <p className="text-lg leading-relaxed mb-12 opacity-90">
              Our technical experts will help you select the right sliding vane
              compressor for your specific bio gas, landfill gas, or industrial
              gas boosting application requirements.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <FaPhone />
                <span>Get Technical Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/30 rounded-full font-semibold transition-all duration-300 hover:bg-white/20">
                <FaDownload />
                <span>Download Sliding Vane Brochure</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-8 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <FaPhone />
                <span>+91-99103-02163</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope />
                <span>sales@swamatics.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt />
                <span>C-2, Sector-3, Noida-201301, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 text-white border-none cursor-pointer flex items-center justify-center text-2xl z-10 transition-all duration-300 hover:bg-black/90 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="flex flex-col">
              <div className="relative bg-slate-50 p-8 text-center">
                <img
                  src={modalImage}
                  alt="Rotary Sliding Vane Compressors - Expanded View"
                  className="max-w-full max-h-[60vh] object-contain rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="p-8 bg-white text-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Rotary Sliding Vane Compressors
                </h3>
                <p className="text-slate-600 mb-4">
                  CNC Precision Compression Technology
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="bg-slate-50 px-4 py-2 rounded-3xl text-sm font-medium text-slate-800">
                    Capacity: Up to 5100 M³/Hr (3000 CFM)
                  </span>
                  <span className="bg-slate-50 px-4 py-2 rounded-3xl text-sm font-medium text-slate-800">
                    Pressure: Up to 3.5 bar gauge
                  </span>
                  <span className="bg-slate-50 px-4 py-2 rounded-3xl text-sm font-medium text-slate-800">
                    Manufacturing: CNC Machine Precision
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainTemplate>
  );
};

export default RotarySlidingVaneCompressors;
