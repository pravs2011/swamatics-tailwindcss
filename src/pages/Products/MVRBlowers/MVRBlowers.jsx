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
  FaGem,
  FaCube,
  FaCookie,
  FaUtensils,
  FaBatteryFull,
  FaCompress,
  FaWater,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const MVRBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: "Next Generation Technology",
      description:
        "Advanced Mechanical Vapour Re-Compressor equipped with latest features for enhanced reliability, energy efficiency and lower maintenance",
      details:
        "State-of-the-art design incorporating modern engineering principles for superior performance in vapor recompression applications",
      benefit: "Advanced reliability",
    },
    {
      icon: <FaGears className="text-2xl text-white" />,
      title: "Computer Generated Rotor Profile",
      description:
        "Precision-engineered rotor profiles with computer-generated design enabling better uniform clearance and higher volumetric efficiency",
      details:
        "Optimized rotor geometry ensures consistent performance with minimal clearance variations for maximum efficiency",
      benefit: "Higher efficiency",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "Rugged Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design, aiming at low deflection and reduced sound levels for reliable operation",
      details:
        "Robust construction with optimized shaft design minimizes vibration and operational noise while ensuring long service life",
      benefit: "Reliable operation",
    },
    {
      icon: <FaBatteryFull className="text-2xl text-white" />,
      title: "Energy Efficient Design",
      description:
        "Engineered for optimal energy efficiency with advanced vapor compression technology for reduced operational costs",
      details:
        "Innovative design focuses on minimizing energy consumption while maintaining high performance standards",
      benefit: "Energy savings",
    },
  ];

  const applications = [
    {
      title: "Evaporation Systems",
      description:
        "Mechanical vapor recompression for evaporation processes in chemical and food industries",
      icon: <FaTint />,
      image: "💧",
      benefits: [
        "Energy efficient evaporation",
        "Steam economy improvement",
        "Process optimization",
      ],
    },
    {
      title: "Distillation Processes",
      description:
        "Vapor recompression for distillation columns improving energy efficiency and reducing steam consumption",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: ["Steam savings", "Energy recovery", "Process efficiency"],
    },
    {
      title: "Concentration Applications",
      description:
        "Concentration of solutions and liquids with mechanical vapor recompression technology",
      icon: <FaCompress />,
      image: "🎯",
      benefits: ["Solution concentration", "Energy recovery", "Cost reduction"],
    },
    {
      title: "Heat Recovery Systems",
      description:
        "Recovery of waste heat through mechanical vapor recompression for improved overall efficiency",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: [
        "Waste heat recovery",
        "Energy optimization",
        "Sustainability",
      ],
    },
    {
      title: "Crystallization Processes",
      description:
        "MVR technology for crystallization applications in pharmaceutical and chemical industries",
      icon: <FaGem />,
      image: "💎",
      benefits: [
        "Controlled crystallization",
        "Energy efficiency",
        "Product quality",
      ],
    },
    {
      title: "Desalination Plants",
      description:
        "Thermal desalination with mechanical vapor recompression for fresh water production",
      icon: <FaWater />,
      image: "🌊",
      benefits: [
        "Fresh water production",
        "Energy efficient",
        "Environmental friendly",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 35,000 M³/hr",
      icon: <FaWind />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure Range",
      value: "Up to 1.1 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vacuum Capability",
      value: "Up to 60%",
      icon: <FaCompress />,
      color: "#f59e0b",
    },
    {
      parameter: "Technology",
      value: "Mechanical Vapor Recompression",
      icon: <FaGears />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Flow Capacity",
      description:
        "Readily available for flows up to 35,000 M³/hr with consistent performance across the entire operating range",
      icon: <FaWind />,
      stat: "35,000",
      unit: "M³/hr Flow",
    },
    {
      title: "Energy Efficiency",
      description:
        "Advanced MVR technology significantly reduces energy consumption while maintaining high compression ratios",
      icon: <FaBatteryFull />,
      stat: "High",
      unit: "Efficiency",
    },
    {
      title: "Low Maintenance",
      description:
        "Next generation design with advanced features enables lower maintenance requirements and extended service intervals",
      icon: <FaTools />,
      stat: "Low",
      unit: "Maintenance",
    },
    {
      title: "Versatile Operation",
      description:
        "Capable of handling pressure up to 1.1 kg/cm² and vacuum up to 60% for diverse industrial applications",
      icon: <FaGears />,
      stat: "Multi",
      unit: "Application",
    },
  ];

  const workingPrinciple = {
    title: "Mechanical Vapor Recompression Technology",
    description:
      "MVR Blowers operate by compressing vapor from evaporation processes and reusing it as heating medium, creating a highly energy-efficient closed-loop system that significantly reduces steam consumption and operational costs.",
    steps: [
      {
        step: "1",
        title: "Vapor Compression",
        description:
          "Low-pressure vapor from evaporation process is compressed by the MVR blower to higher pressure and temperature",
      },
      {
        step: "2",
        title: "Heat Transfer",
        description:
          "Compressed vapor serves as heating medium in the evaporator, transferring its latent heat to the process",
      },
      {
        step: "3",
        title: "Condensation & Recycle",
        description:
          "Vapor condenses back to liquid and the cycle repeats, creating an energy-efficient closed-loop system",
      },
    ],
  };

  const productImageUrl = "/images/MVR-Blowers.jpg";

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
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Next Generation MVR Technology</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              MVR
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Blowers
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              SWAM offers advanced Next Generation Mechanical Vapour
              Re-Compressor technology equipped with latest features for
              enhanced reliability, energy efficiency and lower maintenance.
              Ruggedly built with computer-generated rotor profiles enabling
              better uniform clearance and higher volumetric efficiency for
              flows up to 35,000 M³/hr.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  35,000
                </div>
                <div className="text-sm text-slate-400 mt-1">M³/hr Flow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  1.1
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  kg/cm² Pressure
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  60%
                </div>
                <div className="text-sm text-slate-400 mt-1">Vacuum</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] flex justify-center items-center">
              <div className="absolute w-full h-full bg-radial-gradient from-blue-500/10 to-transparent rounded-full animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="MVR Blowers - Mechanical Vapor Recompression Technology"
                className="max-w-[400px] max-h-[400px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer relative z-10"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute w-full h-full pointer-events-none hidden lg:block">
                <div
                  className="absolute top-[15%] -left-[10%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] h-2 min-h-[40px] justify-center text-center animate-bounce"
                  style={{ animationDelay: "0s" }}
                >
                  <FaGears className="text-blue-600" />
                  <span>MVR Technology</span>
                </div>
                <div
                  className="absolute top-[50%] -right-[15%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] h-2 min-h-[40px] justify-center text-center animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaBatteryFull className="text-blue-600" />
                  <span>Energy Efficient</span>
                </div>
                <div
                  className="absolute bottom-[20%] -left-[5%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md min-w-[120px] max-w-[180px] h-2 min-h-[40px] justify-center text-center animate-bounce"
                  style={{ animationDelay: "4s" }}
                >
                  <FaRocket className="text-blue-600" />
                  <span>Next Generation</span>
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced MVR Technology Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the cutting-edge engineering features that make our MVR
              Blowers the reliable choice for energy-efficient vapor
              recompression across diverse industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all duration-300 border border-slate-200 relative overflow-hidden cursor-pointer group ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-2xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 transition-opacity duration-300 ${
                    activeFeature === index
                      ? "opacity-5"
                      : "opacity-0 group-hover:opacity-5"
                  }`}
                ></div>

                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                    activeFeature === index
                      ? "scale-110 rotate-3"
                      : "group-hover:scale-110 group-hover:rotate-3"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="relative z-10 text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="relative z-10 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                  <FaCheckCircle />
                  <span className="text-green-600">{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="relative z-10 mt-4 pt-4 border-t border-slate-200">
                    <p className="text-sm text-slate-500">{feature.details}</p>
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Working Principle & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the mechanical vapor recompression technology that
              delivers exceptional energy efficiency and process optimization
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <FaGears />
                  <span>MVR Technology</span>
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
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
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
                  alt="MVR Blowers Working Principle"
                  className="w-full h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute w-full h-full pointer-events-none hidden lg:block">
                  <div className="absolute top-[20%] -left-[20%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-ping"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Vapor Compression
                    </div>
                  </div>
                  <div className="absolute top-[50%] -right-[25%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-ping"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Heat Recovery
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] -left-[15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-ping"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Energy Efficiency
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <FaBatteryFull className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Energy Efficient Operation
                </h4>
                <p className="opacity-90 leading-relaxed mb-6">
                  Advanced MVR technology significantly reduces energy
                  consumption by reusing vapor energy, creating substantial
                  operational savings
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">Efficiency:</span>
                    <span className="font-semibold">High Energy Recovery</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">Operation:</span>
                    <span className="font-semibold">Continuous</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaWind className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  High Flow Capacity
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Readily available for flows up to 35,000 M³/hr with consistent
                  performance across the entire operating range
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>35,000 M³/hr capacity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>Consistent performance</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaGears className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Computer Generated Rotor Profile
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Precision-engineered rotor profiles enable better uniform
                  clearance and higher volumetric efficiency
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>Uniform clearance</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>Higher efficiency</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Rugged Construction
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Ruggedly built with appropriate rotor shaft design for low
                  deflection, reduced sound levels and reliable operation
                </p>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>Low deflection design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-600" />
                    <span>Reduced sound levels</span>
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
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                MVR Blowers deliver exceptional performance with proven
                specifications designed for energy efficiency, reliability, and
                consistent operation in demanding vapor recompression
                applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ color: spec.color }}
                      >
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-800 mb-1">
                          {spec.parameter}
                        </h4>
                        <div className="font-bold text-slate-900">
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-3xl p-12 mb-8">
                <h4 className="text-2xl font-bold text-slate-800 mb-6">
                  Key Performance Features
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Flows up to 35,000 M³/hr capacity</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Pressure capability up to 1.1 kg/cm²</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Vacuum capability up to 60%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-600" />
                    <span>Low deflection and reduced sound levels</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-semibold text-slate-800 shadow-sm">
                  <FaCertificate className="text-blue-600" />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-semibold text-slate-800 shadow-sm">
                  <FaAward className="text-blue-600" />
                  <span>CE Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-semibold text-slate-800 shadow-sm">
                  <FaShieldAlt className="text-blue-600" />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="MVR Blowers Technical Specifications"
                  className="w-full h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none hidden lg:flex flex-col justify-around items-end pr-8">
                  <div
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-pulse"
                    style={{ animationDelay: "0s" }}
                  >
                    Next Generation Technology
                  </div>
                  <div
                    className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-pulse"
                    style={{ animationDelay: "1s" }}
                  >
                    Energy Efficient Operation
                  </div>
                  <div
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-pulse"
                    style={{ animationDelay: "2s" }}
                  >
                    Computer Generated Profile
                  </div>
                  <div
                    className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg animate-pulse"
                    style={{ animationDelay: "3s" }}
                  >
                    Rugged Construction
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Versatile MVR solutions for diverse industrial applications
              requiring energy-efficient vapor recompression and heat recovery
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-4">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      selectedApplication === index
                        ? "bg-blue-50 border-blue-200 shadow-lg"
                        : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                    onClick={() => setSelectedApplication(index)}
                  >
                    <div className="text-4xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-slate-800 mb-2">
                        {app.title}
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                    <FaArrowRight className="text-slate-400" />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
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
                      className="flex items-center gap-3 bg-white p-4 rounded-xl"
                    >
                      <FaCheckCircle className="text-green-600" />
                      <span className="font-medium text-slate-800">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
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
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM MVR Blowers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advanced mechanical vapor recompression technology for
              energy-efficient operations and superior performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-10 text-center border border-slate-200 hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600 transition-all duration-300"
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
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Energy-Efficient MVR Technology?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Connect with our engineering experts to discover how MVR Blowers can
            revolutionize your processes with advanced vapor recompression
            technology, significant energy savings, and proven reliability for
            demanding industrial applications.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-white/10 border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm opacity-90">
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
              <span>Noida, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md border-0 rounded-full text-white text-2xl cursor-pointer z-10 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col max-h-[90vh]">
              <div className="flex-1 flex flex-col overflow-hidden">
                <img
                  src={modalImage}
                  alt="MVR Blowers - Mechanical Vapor Recompression Technology - Expanded View"
                  className="w-full h-auto max-h-[70vh] object-contain bg-slate-50 select-none"
                  style={{
                    userDrag: "none",
                    WebkitUserDrag: "none",
                    KhtmlUserDrag: "none",
                    MozUserDrag: "none",
                    OUserDrag: "none",
                  }}
                />
                <div className="p-8 bg-white border-t border-slate-200">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    MVR Blowers
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Mechanical Vapor Recompression Technology
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Flow: Up to 35,000 M³/hr
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Pressure: Up to 1.1 kg/cm²
                    </span>
                    <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                      Vacuum: Up to 60%
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

export default MVRBlowers;
