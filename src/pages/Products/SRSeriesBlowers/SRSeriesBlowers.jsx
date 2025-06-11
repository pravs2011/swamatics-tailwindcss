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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const SRSeriesBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Computer Generated Axcel Series Profile",
      description:
        "Advanced computer-generated rotor profile optimizes high volumetric efficiency with better uniform clearances",
      details:
        "State-of-the-art rotor profile design ensures maximum efficiency with minimal internal slip losses and optimal gas flow characteristics",
      benefit: "High volumetric efficiency",
    },
    {
      icon: <FaWeight className="feature-icon" />,
      title: "Heavy Duty Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design for tough conditions and high load transmission",
      details:
        "Engineered for demanding industrial environments with heavy-duty antifriction oil lubricated bearings and robust construction",
      benefit: "Maximum durability",
    },
    {
      icon: <FaCogs className="feature-icon" />,
      title: "CNC Machine Precision",
      description:
        "High accuracy manufacturing on CNC machines ensuring precise clearances and reliable operation",
      details:
        "Advanced CNC machining technology guarantees consistent quality and precise tolerances for optimal performance",
      benefit: "Precision engineering",
    },
    {
      icon: <FaLock className="feature-icon" />,
      title: "Special Lip Seal System",
      description:
        "Advanced sealing system with inbuilt pulsation dampeners for smooth, non-pulsating delivery",
      details:
        "Professional-grade sealing technology prevents leakage while integrated dampeners ensure smooth operation with lower sound emission",
      benefit: "Reliable sealing",
    },
  ];

  const applications = [
    {
      title: "Wastewater Treatment",
      description:
        "Aeration systems for biological treatment processes and sludge handling",
      icon: <FaRecycle />,
      image: "🌊",
      benefits: [
        "Efficient aeration",
        "Biological treatment support",
        "Sludge handling",
      ],
    },
    {
      title: "Pneumatic Conveying",
      description:
        "Material transport systems for bulk handling and powder conveying",
      icon: <FaBoxes />,
      image: "📦",
      benefits: [
        "Bulk material transport",
        "Powder conveying",
        "Gentle handling",
      ],
    },
    {
      title: "Industrial Process",
      description:
        "Process gas handling and industrial applications requiring reliable air flow",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Process gas handling",
        "Continuous operation",
        "Low maintenance",
      ],
    },
    {
      title: "Aquaculture Systems",
      description: "Aeration for fish farming and aquaculture applications",
      icon: <FaSeedling />,
      image: "🐟",
      benefits: [
        "Fish pond aeration",
        "Oxygen enrichment",
        "Water circulation",
      ],
    },
    {
      title: "Chemical Processing",
      description:
        "Gas boosting and process applications in chemical industries",
      icon: <FaAtom />,
      image: "⚗️",
      benefits: [
        "Gas boosting",
        "Chemical compatibility",
        "Process reliability",
      ],
    },
    {
      title: "Power Generation",
      description:
        "Auxiliary systems for power plants and utility applications",
      icon: <FaBolt />,
      image: "⚡",
      benefits: [
        "Auxiliary air supply",
        "Cooling systems",
        "Reliable operation",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "80,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure Range",
      value: "Up to 0.6 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design Types",
      value: "Twin & Tri-Lobe",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Single Stage",
      icon: <FaSync />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Capacity",
      description:
        "Exceptional flow capacity up to 80,000 M³/Hr for large-scale industrial operations",
      icon: <FaChartLine />,
      stat: "80,000",
      unit: "M³/Hr",
    },
    {
      title: "Reliable Pressure",
      description:
        "Consistent pressure delivery up to 0.6 kg/cm² in single stage configuration",
      icon: <FaTachometerAlt />,
      stat: "0.6",
      unit: "kg/cm²",
    },
    {
      title: "Dual Design",
      description:
        "Available in both Twin-Lobe and Tri-Lobe designs for versatile applications",
      icon: <FaGears />,
      stat: "Twin/Tri",
      unit: "Lobe Design",
    },
    {
      title: "Energy Efficient",
      description:
        "Advanced rotor profile and precision engineering for optimal energy efficiency",
      icon: <FaBolt />,
      stat: "High",
      unit: "Efficiency",
    },
  ];

  const workingPrinciple = {
    title: "Twin-Lobe Working Principle",
    description:
      "The rotors move opposite to each other, maintaining fine clearances in perfect synchronization through precision timing gears. As rotation proceeds, trapped gas moves along until it reaches the discharge port, raising pressure against system resistance.",
    steps: [
      {
        step: "1",
        title: "Gas Intake",
        description: "Gas enters through the inlet as rotors create vacuum",
      },
      {
        step: "2",
        title: "Compression",
        description: "Rotors trap and compress gas with precise clearances",
      },
      {
        step: "3",
        title: "Discharge",
        description: "Compressed gas delivered smoothly with minimal pulsation",
      },
    ],
  };

  const productImageUrl = "/images/sR-Series-Blowers.jpg";

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
      <section className="min-h-screen bg-black bg-gradient-to-b from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Next Generation Technology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Advanced
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                SR Series Blowers
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10">
              SWAM SR Series Blowers represent the next generation of positive
              displacement technology with advanced features for enhanced
              reliability, energy efficiency, and lower maintenance. Featuring
              computer-generated Axcel Series rotor profiles and precision CNC
              manufacturing for superior performance.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  80,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  0.6
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  kg/cm² Pressure
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  Twin/Tri
                </div>
                <div className="text-sm text-slate-400 mt-1">Lobe Design</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-96 h-96 lg:w-[500px] lg:h-[500px] flex justify-center items-center">
              <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                }}
              ></div>
              <img
                src={productImageUrl}
                alt="SR Series Blowers - Advanced Positive Displacement Technology"
                className="max-w-80 max-h-80 lg:max-w-96 lg:max-h-96 object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer z-10"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute inset-0 pointer-events-none hidden lg:block">
                <div
                  className="absolute top-[15%] -left-[10%] bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] justify-center animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "6s" }}
                >
                  <FaGears className="text-blue-600" />
                  <span>Axcel Profile</span>
                </div>
                <div
                  className=" absolute top-1/2 -right-[15%] bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] justify-center animate-bounce"
                  style={{ animationDelay: "2s", animationDuration: "6s" }}
                >
                  <FaCogs className="text-blue-600" />
                  <span>CNC Precision</span>
                </div>
                <div
                  className="absolute bottom-[20%] -left-[5%] bg-white/95 backdrop-blur-sm border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] justify-center animate-bounce"
                  style={{ animationDelay: "4s", animationDuration: "6s" }}
                >
                  <FaLock className="text-blue-600" />
                  <span>Special Sealing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Next Generation Blower Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the advanced engineering features that make SR Series
              Blowers the most reliable and efficient choice for demanding
              industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all duration-300 border border-slate-200 relative overflow-hidden cursor-pointer group ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-2xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 transition-opacity duration-300 ${
                    activeFeature === index
                      ? "opacity-5"
                      : "group-hover:opacity-5"
                  }`}
                ></div>

                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                    activeFeature === index
                      ? "transform scale-110 rotate-3"
                      : "group-hover:transform group-hover:scale-110 group-hover:rotate-3"
                  }`}
                >
                  <div className="text-2xl text-white">{feature.icon}</div>
                </div>

                <h3 className="relative z-10 text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="relative z-10 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                  <FaCheckCircle className="text-base" />
                  <span>{feature.benefit}</span>
                </div>

                {activeFeature === index && (
                  <div className="relative z-10 mt-4 pt-4 border-t border-slate-200 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-sm text-slate-600">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Working Principle & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the twin-lobe technology that delivers smooth,
              non-pulsating flow with minimal internal slip losses
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <FaSync />
                  <span>Twin-Lobe Technology</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {workingPrinciple.description}
                </p>

                <div className="flex flex-col gap-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="SR Series Blower Working Principle"
                  className="w-full h-auto max-w-md drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none hidden lg:block">
                  <div className="absolute top-[20%] -left-[20%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl shadow-md text-xs font-semibold text-slate-800 whitespace-nowrap">
                      Precision Timing Gears
                    </div>
                  </div>
                  <div className="absolute top-1/2 -right-[25%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl shadow-md text-xs font-semibold text-slate-800 whitespace-nowrap">
                      Twin-Lobe Rotors
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] -left-[15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl shadow-md text-xs font-semibold text-slate-800 whitespace-nowrap">
                      Fine Clearances
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <FaEye className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Precise Clearances
                </h4>
                <p className="opacity-90 leading-relaxed mb-6">
                  Rotors maintain fine clearances in perfect synchronization,
                  ensuring minimal internal slip loss and maximum efficiency
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">
                      Clearance Control:
                    </span>
                    <span className="font-semibold">Precision Maintained</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">Slip Loss:</span>
                    <span className="font-semibold">Minimal</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaVolumeDown className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Smooth Operation
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Non-pulsating, smooth delivery with lower sound emission
                  through advanced rotor design and pulsation dampeners
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">Non-pulsating flow</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">Lower noise levels</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaWeight className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Heavy Duty Design
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Ruggedly built for working under tough conditions with
                  heavy-duty antifriction oil lubricated bearings
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      Tough condition operation
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      High load transmission
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaCogs className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  CNC Precision Manufacturing
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  High accuracy manufacturing on CNC machines with
                  computer-generated Axcel Series lobe profile for optimal
                  performance
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      CNC machine precision
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span className="text-slate-700">
                      Computer-generated profile
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                SR Series Blowers deliver exceptional performance with
                industry-leading specifications designed for reliability,
                efficiency, and long-term operation in demanding environments.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border-l-4 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-800 mb-2">
                        {spec.parameter}
                      </h4>
                      <div
                        className="text-xl font-bold"
                        style={{ color: spec.color }}
                      >
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Salient Features
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      Side suction or side discharge arrangement available
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      Inbuilt pulsation dampeners
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      Heavy duty shaft design
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">
                      Special lip seal sealing system
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
                  <FaCertificate className="text-blue-600" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
                  <FaAward className="text-blue-600" />
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full text-sm font-semibold text-slate-800 border border-slate-200">
                  <FaShieldAlt className="text-blue-600" />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-visible">
                <img
                  src={productImageUrl}
                  alt="SR Series Blower Technical Specifications"
                  className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none overflow-visible hidden lg:block">
                  <div
                    className="absolute -top-[15%] left-1/2 transform -translate-x-1/2 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-sm animate-bounce min-w-[140px] max-w-[230px] text-center"
                    style={{ animationDelay: "0s", animationDuration: "6s" }}
                  >
                    Computer Generated Profile
                  </div>
                  <div
                    className="absolute top-1/4 -right-[40%] bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-sm animate-bounce min-w-[140px] max-w-[230px] text-center"
                    style={{ animationDelay: "1.5s", animationDuration: "6s" }}
                  >
                    CNC Precision
                  </div>
                  <div
                    className="absolute bottom-1/4 -left-[40%] bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-sm animate-bounce min-w-[140px] max-w-[230px] text-center"
                    style={{ animationDelay: "3s", animationDuration: "6s" }}
                  >
                    Heavy Duty Construction
                  </div>
                  <div
                    className="absolute -bottom-[15%] left-1/2 transform -translate-x-1/2 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-sm animate-bounce min-w-[140px] max-w-[230px] text-center"
                    style={{ animationDelay: "4.5s", animationDuration: "6s" }}
                  >
                    Special Sealing System
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Versatile solutions for diverse industrial applications requiring
              reliable positive displacement technology
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`bg-slate-50 rounded-2xl p-6 flex items-center gap-4 cursor-pointer transition-all duration-300 border-2 ${
                    selectedApplication === index
                      ? "bg-white border-blue-600 transform translate-x-2 shadow-md"
                      : "border-transparent hover:bg-white hover:border-blue-600 hover:transform hover:translate-x-2 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-3xl w-16 h-16 flex items-center justify-center bg-white rounded-2xl shadow-sm">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-1">
                      {app.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-slate-400 transition-all duration-300 ${
                      selectedApplication === index
                        ? "text-blue-600 transform translate-x-1"
                        : "group-hover:text-blue-600 group-hover:transform group-hover:translate-x-1"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-3xl p-12 sticky top-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl text-sm font-medium"
                    >
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-800">{benefit}</span>
                    </div>
                  )
                )}
              </div>

              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-full justify-center">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Why Choose SWAM SR Series
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advanced technology for superior industrial performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 text-center transition-all duration-300 border border-slate-200 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-2xl">
                  {advantage.icon}
                </div>
                <div className="mb-6">
                  <div className="text-4xl font-extrabold text-blue-600 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider mt-1">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-600 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Ready for Next Generation Technology?
            </h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Connect with our engineering experts to discover how SR Series
              Blowers can enhance your industrial operations with superior
              reliability, efficiency, and performance.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 backdrop-blur-sm px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Technical Brochure</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-8 opacity-90">
              <div className="flex items-center gap-2 text-sm">
                <FaPhone />
                <span>+91-99103-02163</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaEnvelope />
                <span>sales@swamatics.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaMapMarkerAlt />
                <span>Noida, India</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-sm border-none rounded-full text-white text-2xl cursor-pointer z-10 flex items-center justify-center transition-all duration-300 hover:bg-black/70 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col max-h-[90vh]">
              <div className="flex-1 flex flex-col overflow-hidden">
                <img
                  src={modalImage}
                  alt="SR Series Blowers - Advanced Positive Displacement Technology - Expanded View"
                  className="w-full h-auto max-h-[70vh] object-contain bg-slate-50 select-none"
                  style={{ userDrag: "none", WebkitUserDrag: "none" }}
                />
                <div className="p-8 bg-white border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    SR Series Blowers
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Next Generation Positive Displacement Technology
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Capacity: Up to 80,000 M³/Hr
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Pressure: Up to 0.6 kg/cm²
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Design: Twin & Tri-Lobe Available
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

export default SRSeriesBlowers;
