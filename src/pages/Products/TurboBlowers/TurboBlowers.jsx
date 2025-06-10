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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import "../../../styles/animations.css";

const TurboBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaBolt className="feature-icon" />,
      title: "High Speed Technology",
      description:
        "Advanced single stage centrifugal machine with high speed focused specialized technology",
      details:
        "Oil-less operation with precision-engineered impellers for maximum efficiency",
      benefit: "Up to 95% efficiency",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Integrally Geared Design",
      description:
        "Speed increasing gearbox geared up to impeller working speed for optimal performance",
      details:
        "Constant speed operation around 3000 rpm from motor with intelligent speed control",
      benefit: "Consistent performance",
    },
    {
      icon: <FaWind className="feature-icon" />,
      title: "Variable Guide Vanes",
      description:
        "Diffuser vanes and inlet guide vanes for dynamic airflow regulation",
      details:
        "Variable inlet guide vanes optimize power consumption and handle pressure changes",
      benefit: "45-100% turndown range",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description: "Completely oil-free design ensuring clean air delivery",
      details:
        "Advanced bearing technology eliminates oil contamination in airflow",
      benefit: "100% oil-free guarantee",
    },
  ];

  const applications = [
    {
      title: "Wastewater Treatment",
      description: "Aeration systems for biological treatment processes",
      icon: <FaRecycle />,
      image: "💧",
      benefits: ["Efficient aeration", "Energy savings", "Precise control"],
    },
    {
      title: "Pneumatic Conveying",
      description: "Material handling and transport systems",
      icon: <FaIndustry />,
      image: "📦",
      benefits: [
        "Gentle material handling",
        "Consistent pressure",
        "Reliable operation",
      ],
    },
    {
      title: "Process Air Supply",
      description: "Industrial process air and combustion air",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Process optimization",
        "Precise air delivery",
        "Energy efficient",
      ],
    },
    {
      title: "HVAC Systems",
      description: "Large scale ventilation and air conditioning",
      icon: <FaWind />,
      image: "🌪️",
      benefits: ["Climate control", "Air circulation", "Quiet operation"],
    },
    {
      title: "Chemical Processing",
      description: "Chemical and petrochemical plant applications",
      icon: <FaThermometerHalf />,
      image: "🧪",
      benefits: [
        "Corrosion resistance",
        "Process reliability",
        "Safety compliance",
      ],
    },
    {
      title: "Power Generation",
      description: "Combustion air for power plants",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["High reliability", "Continuous operation", "Fuel efficiency"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 21,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 1.0 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Speed",
      value: "High Speed Centrifugal",
      icon: <FaTachometerAlt />,
      color: "#f59e0b",
    },
    {
      parameter: "Control",
      value: "Variable Guide Vanes",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Advanced Technology",
      description:
        "Single stage centrifugal with high speed specialized technology",
      icon: <FaRocket />,
      stat: "95%",
      unit: "Efficiency",
    },
    {
      title: "Energy Savings",
      description: "Variable guide vanes optimize power consumption",
      icon: <FaLeaf />,
      stat: "30%",
      unit: "Energy Saved",
    },
    {
      title: "Turndown Range",
      description: "Flexible operation from 45% to 100% capacity",
      icon: <FaTachometerAlt />,
      stat: "45-100%",
      unit: "Range",
    },
    {
      title: "Oil-Free Design",
      description: "Completely oil-free operation for clean applications",
      icon: <FaShieldAlt />,
      stat: "100%",
      unit: "Oil-Free",
    },
  ];

  const productImageUrl = "/images/Integrally-Geared-Type.png";

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
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white space-y-8">
            <br />
            <div className="inline-flex mt-10 items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold animate-fade-in-up">
              <FaStar className="text-blue-400" />
              <span>Integrally Geared Type</span>
            </div>

            <h1 className="text-6xl font-extrabold leading-tight animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:both]">
              High Efficiency
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Turbo Blowers
              </span>
            </h1>

            <p className="text-xl leading-relaxed text-slate-300 animate-fade-in-up [animation-delay:0.4s] [animation-fill-mode:both]">
              Experience the most advanced single stage centrifugal machine with
              high speed focused specialized technology. SWAM's turbo blowers
              deliver exceptional efficiency with completely oil-free operation.
            </p>

            <div className="flex gap-8 animate-fade-in-up [animation-delay:0.6s] [animation-fill-mode:both]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  21,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  95%
                </div>
                <div className="text-sm text-slate-400 mt-1">Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  100%
                </div>
                <div className="text-sm text-slate-400 mt-1">Oil-Free</div>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up [animation-delay:0.8s] [animation-fill-mode:both]">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] flex justify-center items-center">
              {/* Background glow */}
              <div className="absolute w-full h-full bg-gradient-radial from-blue-500/10 to-transparent rounded-full animate-pulse"></div>

              <img
                src={productImageUrl}
                alt="Turbo Blowers - Integrally Geared Type"
                className="max-w-[400px] max-h-[400px] object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105 cursor-pointer z-10 relative"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating spec bubbles - hidden on mobile */}
              <div className="absolute z-1000 w-full h-full pointer-events-none hidden lg:block">
                <div className="absolute top-[15%] left-[-10%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float min-w-[120px] max-w-[180px] justify-center">
                  <FaBolt className="text-blue-600" />
                  <span>High Speed</span>
                </div>
                <div className="absolute top-1/2 right-[-15%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float [animation-delay:2s] min-w-[120px] max-w-[180px] justify-center">
                  <FaGears className="text-blue-600" />
                  <span>Integrally Geared</span>
                </div>
                <div className="absolute bottom-[20%] left-[-5%] bg-white/95 backdrop-blur-md border border-white/20 rounded-[25px] px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float [animation-delay:4s] min-w-[120px] max-w-[180px] justify-center">
                  <FaLeaf className="text-blue-600" />
                  <span>Oil-Free</span>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Turbo Technology Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the innovative technologies that make our turbo blowers
              the most efficient in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all duration-300 border border-slate-200 relative overflow-hidden cursor-pointer group ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 transition-opacity duration-300 ${
                    activeFeature === index
                      ? "opacity-5"
                      : "opacity-0 group-hover:opacity-5"
                  }`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                      activeFeature === index
                        ? "scale-110 rotate-3"
                        : "group-hover:scale-110 group-hover:rotate-3"
                    }`}
                  >
                    <div className="text-2xl text-white">{feature.icon}</div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-800 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <div className="flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm">
                    <FaCheckCircle className="text-base" />
                    <span>{feature.benefit}</span>
                  </div>

                  {activeFeature === index && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500">
                        {feature.details}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section - Redesigned */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text ">
              Superior Efficiency Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Revolutionary turbo blower design that maximizes efficiency while
              minimizing energy consumption
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold">
                  <FaBolt />
                  <span>Advanced Centrifugal Technology</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Why Turbo Blowers Are Superior
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Traditional direct-drive blowers operate far from their design
                  point when regulation is required, dramatically reducing
                  efficiency. Our integrally geared turbo blowers maintain
                  optimal efficiency across the entire operating range through
                  innovative vane control technology.
                </p>
                <div className="flex gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 block">
                      20%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Higher Efficiency
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 block">
                      30%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Energy Savings
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 block">
                      45-100%
                    </div>
                    <div className="text-sm text-slate-500 mt-1">
                      Turndown Range
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="Turbo Blower Technology"
                  className="w-full h-auto filter drop-shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute w-full h-full pointer-events-none hidden lg:block">
                  <div className="absolute top-[20%] left-[-20%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-3xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Variable Inlet Guide Vanes
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-[-25%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-3xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      High-Speed Impeller
                    </div>
                  </div>
                  <div className="absolute bottom-[25%] left-[-15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                      <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                    </div>
                    <div className="bg-white px-4 py-2 rounded-3xl text-xs font-semibold text-slate-800 shadow-md whitespace-nowrap">
                      Variable Diffuser Vanes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <FaGears className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4">
                  Constant Speed Operation
                </h4>
                <p className="opacity-90 leading-relaxed mb-6">
                  Motor operates at consistent ~3000 RPM with speed-increasing
                  gearbox delivering optimal impeller speed
                </p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">Motor Speed:</span>
                    <span className="font-semibold">~3000 RPM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm opacity-80">Gear Ratio:</span>
                    <span className="font-semibold">Variable</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaWind className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Variable Diffuser Vanes
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Discharge-side vanes dynamically adjust airflow by changing
                  relative speed through shaped diffuser geometry
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      Maintains compressor curve efficiency
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      Limited curve deformation
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaBolt className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Inlet Guide Vanes
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Pre-rotation device optimizes power consumption by adapting to
                  changing pressure and ambient conditions
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">Power optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">Pressure adaptation</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaLeaf className="text-xl text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Oil-Free Design
                </h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Advanced magnetic bearings and precision engineering eliminate
                  oil contamination completely
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      100% contamination-free air
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-emerald-600 text-base" />
                    <span className="text-slate-700">
                      Food-grade applications
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Efficiency Performance Analysis */}
            <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 rounded-3xl p-12 mt-16 border border-slate-200/50 shadow-xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <FaChartLine className="text-lg" />
                  <span>Performance Analytics</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Efficiency Performance Analysis
                </h3>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  See how our turbo blowers maintain superior efficiency across
                  operating ranges with real-world performance data
                </p>
              </div>

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
                {/* Enhanced Charts Section */}
                <div className="space-y-8">
                  {/* Peak Efficiency Chart */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                      <h4 className="text-xl font-bold text-slate-800">
                        Peak Efficiency Comparison
                      </h4>
                    </div>

                    <div className="space-y-6">
                      {/* Turbo Blowers Bar */}
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            Turbo Blowers
                          </span>
                          <span className="text-2xl font-bold text-blue-600">
                            95%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out flex items-center justify-between px-4 group-hover:from-blue-600 group-hover:to-blue-700"
                            style={{ width: "95%" }}
                          >
                            <span className="text-xs font-semibold text-white">
                              SWAM Turbo
                            </span>
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </div>
                        </div>
                      </div>

                      {/* Conventional Bar */}
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            Conventional
                          </span>
                          <span className="text-xl font-bold text-amber-600">
                            78%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-between px-4"
                            style={{ width: "78%" }}
                          >
                            <span className="text-xs font-semibold text-white">
                              Standard
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Direct Drive Bar */}
                      <div className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-slate-700">
                            Direct Drive
                          </span>
                          <span className="text-xl font-bold text-red-500">
                            65%
                          </span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-between px-4"
                            style={{ width: "65%" }}
                          >
                            <span className="text-xs font-semibold text-white">
                              Basic
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Performance Insight */}
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border-l-4 border-blue-500">
                      <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
                        <FaRocket className="text-blue-600" />
                        <span>
                          Performance Advantage: +17% vs Conventional, +30% vs
                          Direct Drive
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Energy Savings Display */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full"></div>
                      <h4 className="text-xl font-bold text-slate-800">
                        Energy Savings Impact
                      </h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="group bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaLeaf className="text-2xl text-white" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-emerald-600">
                              30%
                            </div>
                            <div className="text-sm text-emerald-700 font-medium">
                              vs Conventional
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs text-emerald-600 font-semibold bg-emerald-100 px-3 py-2 rounded-full">
                          Reduced Energy Consumption
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200 hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <FaBolt className="text-2xl text-white" />
                          </div>
                          <div>
                            <div className="text-3xl font-bold text-blue-600">
                              45%
                            </div>
                            <div className="text-sm text-blue-700 font-medium">
                              vs Direct Drive
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-xs text-blue-600 font-semibold bg-blue-100 px-3 py-2 rounded-full">
                          Lower Operating Costs
                        </div>
                      </div>
                    </div>

                    {/* ROI Calculator */}
                    <div className="mt-8 p-6 bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl text-white">
                      <div className="flex items-center gap-3 mb-4">
                        <FaChartLine className="text-emerald-400 text-xl" />
                        <h5 className="font-bold text-lg">
                          Estimated Annual Savings
                        </h5>
                      </div>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-emerald-400">
                            $25K+
                          </div>
                          <div className="text-xs text-slate-300">
                            Energy Costs
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-400">
                            $15K+
                          </div>
                          <div className="text-xs text-slate-300">
                            Maintenance
                          </div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-purple-400">
                            $40K+
                          </div>
                          <div className="text-xs text-slate-300">
                            Total Savings
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Explanation Section */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full"></div>
                    <h4 className="text-xl font-bold text-slate-800">
                      Why The Superior Performance?
                    </h4>
                  </div>

                  <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          1
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          Design Point Operation
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          Turbo blowers operate closer to their optimal design
                          point across the entire range, maintaining peak
                          efficiency even during variable load conditions.
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-blue-600 font-semibold">
                          <FaCheckCircle />
                          <span>
                            Optimal performance across 45-100% capacity
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          2
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition-colors">
                          Variable Geometry Technology
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          Advanced inlet and diffuser guide vanes adapt
                          dynamically to maintain peak efficiency rather than
                          wasteful throttling methods.
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-emerald-600 font-semibold">
                          <FaCheckCircle />
                          <span>Smart flow control without energy loss</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          3
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-purple-600 transition-colors">
                          Constant Speed Benefits
                        </h5>
                        <p className="text-slate-600 leading-relaxed">
                          Motor operates at peak efficiency (~3000 RPM) while
                          intelligent gearbox optimizes impeller speed for
                          maximum performance.
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-sm text-purple-600 font-semibold">
                          <FaCheckCircle />
                          <span>Eliminates variable speed losses</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
                    <h5 className="font-bold text-lg mb-2">
                      Ready to Optimize Your Operations?
                    </h5>
                    <p className="text-blue-100 mb-4 text-sm">
                      Get a custom efficiency analysis for your facility
                    </p>
                    <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
                      <FaChartLine />
                      <span>Request Analysis</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Technical Excellence Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Header */}
              <div>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <FaAward className="text-lg" />
                  <span>Engineering Excellence</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Technical Excellence
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our turbo blowers deliver exceptional performance with
                  advanced centrifugal technology, providing unmatched
                  efficiency and reliability for demanding industrial
                  applications.
                </p>
              </div>

              {/* Enhanced Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl p-6 border-l-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: spec.color }}
                      >
                        {spec.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {spec.parameter}
                        </h4>
                        <div
                          className="text-2xl font-bold transition-colors duration-300"
                          style={{ color: spec.color }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    </div>

                    {/* Progress indicator based on spec type */}
                    <div className="mt-4">
                      <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            backgroundColor: spec.color,
                            width:
                              spec.parameter === "Capacity"
                                ? "90%"
                                : spec.parameter === "Pressure"
                                ? "85%"
                                : spec.parameter === "Speed"
                                ? "95%"
                                : "88%",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Quality Badges */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                  <FaShieldAlt className="text-blue-600" />
                  Quality Certifications & Warranty
                </h3>
                <div className="flex flex-wrap gap-4">
                  <div className="group bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-2xl px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <FaCertificate className="text-2xl text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-semibold text-emerald-800">
                        ISO 9001:2015
                      </div>
                      <div className="text-xs text-emerald-600">
                        Quality Management
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <FaAward className="text-2xl text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-semibold text-blue-800">
                        CE Certified
                      </div>
                      <div className="text-xs text-blue-600">
                        European Conformity
                      </div>
                    </div>
                  </div>

                  <div className="group bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200 rounded-2xl px-6 py-4 flex items-center gap-3 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <FaShieldAlt className="text-2xl text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="font-semibold text-purple-800">
                        5 Year Warranty
                      </div>
                      <div className="text-xs text-purple-600">
                        Comprehensive Coverage
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <FaRocket className="text-blue-400" />
                  Performance Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      99.5%
                    </div>
                    <div className="text-sm text-slate-300">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">
                      &lt;65dB
                    </div>
                    <div className="text-sm text-slate-300">Noise Level</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-slate-300">Operation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-amber-400 mb-1">
                      50K+
                    </div>
                    <div className="text-sm text-slate-300">Hours MTBF</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Product Visual */}
            <div className="space-y-8">
              {/* Main Product Image */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-slate-200 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 opacity-50"></div>

                <div className="relative">
                  <img
                    src={productImageUrl}
                    alt="Technical Specifications"
                    className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-105 cursor-pointer filter drop-shadow-xl"
                    onClick={() => openModal(productImageUrl)}
                  />

                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full opacity-20"></div>
                </div>
              </div>

              {/* Technology Features Grid - No Overlaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600 to-blue-500 text-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaBolt className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold">High Speed Technology</div>
                      <div className="text-xs text-blue-100">
                        Centrifugal Design
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-blue-100">
                    Advanced impeller design with precision engineering for
                    maximum efficiency.
                  </div>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 text-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaGears className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold">Integrally Geared</div>
                      <div className="text-xs text-emerald-100">
                        Optimal Speed
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-emerald-100">
                    Speed-increasing gearbox for precise impeller speed control.
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-purple-500 text-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaWind className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold">Variable Guide Vanes</div>
                      <div className="text-xs text-purple-100">
                        Flow Control
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-purple-100">
                    Dynamic flow regulation for optimal performance across
                    ranges.
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-600 to-green-500 text-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <FaLeaf className="text-lg" />
                    </div>
                    <div>
                      <div className="font-bold">Oil-Free Design</div>
                      <div className="text-xs text-green-100">
                        Clean Operation
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-green-100">
                    Completely contamination-free air delivery for sensitive
                    applications.
                  </div>
                </div>
              </div>

              {/* Key Benefits Summary */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400" />
                  Why SWAM Turbo Blowers Excel
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>
                      95% peak efficiency with variable load capability
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span>45-100% turndown range without efficiency loss</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span>
                      Oil-free design for clean, contamination-free air
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span>30% lower energy costs vs conventional blowers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Industrial Applications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <FaIndustry className="text-lg" />
              <span>Industry Solutions</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Powering diverse industries with high-efficiency turbo technology,
              delivering reliable performance across critical applications
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 items-start">
            {/* Enhanced Application Tabs */}
            <div className="xl:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FaGlobe className="text-indigo-600" />
                Select Industry
              </h3>
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`group relative cursor-pointer rounded-2xl p-6 transition-all duration-300 border-2 ${
                    selectedApplication === index
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white border-indigo-600 shadow-xl scale-105"
                      : "bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-indigo-300 hover:shadow-lg"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`text-4xl flex-shrink-0 transition-transform duration-300 ${
                        selectedApplication === index
                          ? "scale-110"
                          : "group-hover:scale-110"
                      }`}
                    >
                      {app.image}
                    </div>
                    <div className="flex-1">
                      <h4
                        className={`text-lg font-bold mb-2 transition-colors ${
                          selectedApplication === index
                            ? "text-white"
                            : "text-slate-800 group-hover:text-indigo-600"
                        }`}
                      >
                        {app.title}
                      </h4>
                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          selectedApplication === index
                            ? "text-indigo-100"
                            : "text-slate-600"
                        }`}
                      >
                        {app.description}
                      </p>
                    </div>
                    <FaArrowRight
                      className={`transition-all duration-300 ${
                        selectedApplication === index
                          ? "text-white translate-x-1"
                          : "text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1"
                      }`}
                    />
                  </div>

                  {/* Active indicator */}
                  {selectedApplication === index && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 animate-pulse"></div>
                  )}
                </div>
              ))}
            </div>

            {/* Enhanced Application Showcase */}
            <div className="xl:col-span-2">
              <div className="bg-gradient-to-br from-slate-50 via-white to-indigo-50 rounded-3xl p-8 shadow-xl border border-slate-200">
                {/* Showcase Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl text-4xl text-white mb-6 shadow-lg">
                    {applications[selectedApplication].image}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-3">
                    {applications[selectedApplication].title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                    {applications[selectedApplication].description}
                  </p>
                </div>

                {/* Key Benefits Grid */}
                <div className="mb-8">
                  <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-600" />
                    Key Benefits & Advantages
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {applications[selectedApplication].benefits.map(
                      (benefit, index) => (
                        <div
                          key={index}
                          className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-center gap-3">
                            <FaCheckCircle className="text-emerald-500 text-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="text-slate-700 font-medium text-sm leading-relaxed">
                              {benefit}
                            </span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Application Specifications */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 mb-8">
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FaCogs className="text-indigo-600" />
                    Application Specifications
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">
                          Operating Pressure
                        </span>
                        <span className="font-semibold text-slate-800">
                          0.2 - 1.0 bar
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">
                          Temperature Range
                        </span>
                        <span className="font-semibold text-slate-800">
                          -10°C to +40°C
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">
                          Flow Rate
                        </span>
                        <span className="font-semibold text-slate-800">
                          500 - 21,000 M³/Hr
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">
                          Control Method
                        </span>
                        <span className="font-semibold text-slate-800">
                          Variable Guide Vanes
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">
                          Efficiency
                        </span>
                        <span className="font-semibold text-slate-800">
                          Up to 95%
                        </span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-slate-200">
                        <span className="text-sm text-slate-600">
                          Maintenance
                        </span>
                        <span className="font-semibold text-slate-800">
                          Minimal Required
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Performance Metrics for Selected Application */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">99.2%</div>
                    <div className="text-xs text-blue-100">System Uptime</div>
                  </div>
                  <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">35%</div>
                    <div className="text-xs text-emerald-100">
                      Energy Savings
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-xs text-purple-100">Operation</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2">
                    <FaRocket />
                    <span>Get Custom Solution</span>
                  </button>
                  <button className="flex-1 bg-white hover:bg-slate-50 text-indigo-600 font-semibold py-4 px-6 rounded-xl border border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2">
                    <FaDownload />
                    <span>Download Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Success Stories */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Proven Success Across Industries
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Real-world results from installations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">
                  500+
                </div>
                <div className="text-sm text-slate-300 mb-4">
                  Global Installations
                </div>
                <div className="text-xs text-slate-400">
                  Across 25+ countries
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">
                  98.5%
                </div>
                <div className="text-sm text-slate-300 mb-4">
                  Customer Satisfaction
                </div>
                <div className="text-xs text-slate-400">
                  Based on 2023 survey
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">
                  15+
                </div>
                <div className="text-sm text-slate-300 mb-4">
                  Years Experience
                </div>
                <div className="text-xs text-slate-400">
                  In turbo technology
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose SWAM Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <FaAward className="text-lg" />
              <span>SWAM Advantage</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Why Choose SWAM Turbo Blowers
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Advanced centrifugal technology for superior performance,
              delivering unmatched efficiency and reliability for your critical
              operations
            </p>
          </div>

          {/* Enhanced Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon with animated background */}
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                      <div className="text-3xl text-white group-hover:scale-110 transition-transform duration-300">
                        {advantage.icon}
                      </div>
                    </div>
                    {/* Floating pulse effect */}
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl mx-auto opacity-20 scale-150 animate-pulse group-hover:animate-none"></div>
                  </div>

                  {/* Statistics Display */}
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {advantage.stat}
                    </div>
                    <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                      {advantage.unit}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 text-center leading-relaxed text-sm">
                    {advantage.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="mt-6">
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-emerald-600"
                        style={{
                          width:
                            advantage.title === "Advanced Technology"
                              ? "95%"
                              : advantage.title === "Energy Savings"
                              ? "85%"
                              : advantage.title === "Turndown Range"
                              ? "90%"
                              : "100%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Competitive Comparison */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200 mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
                <FaChartLine className="text-blue-600" />
                Competitive Advantage Analysis
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                See how SWAM Turbo Blowers outperform traditional solutions
                across key metrics
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Comparison Chart */}
              <div className="space-y-6">
                <div className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-slate-700">
                      Energy Efficiency
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500">SWAM: 95%</span>
                      <span className="text-sm text-slate-400">
                        Conventional: 75%
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "95%" }}
                      >
                        <span className="text-xs font-bold text-white">
                          SWAM
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "75%" }}
                      >
                        <span className="text-xs font-medium text-white">
                          Others
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-slate-700">
                      Turndown Range
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500">
                        SWAM: 45-100%
                      </span>
                      <span className="text-sm text-slate-400">
                        Conventional: 70-100%
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "90%" }}
                      >
                        <span className="text-xs font-bold text-white">
                          SWAM
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "60%" }}
                      >
                        <span className="text-xs font-medium text-white">
                          Others
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-slate-700">
                      Maintenance Requirements
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500">
                        SWAM: Minimal
                      </span>
                      <span className="text-sm text-slate-400">
                        Conventional: High
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "95%" }}
                      >
                        <span className="text-xs font-bold text-white">
                          SWAM
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "40%" }}
                      >
                        <span className="text-xs font-medium text-white">
                          Others
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-slate-700">
                      Oil-Free Operation
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-500">SWAM: 100%</span>
                      <span className="text-sm text-slate-400">
                        Conventional: 0%
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-slate-200 rounded-full h-4 mb-2">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-end pr-2"
                        style={{ width: "100%" }}
                      >
                        <span className="text-xs font-bold text-white">
                          SWAM
                        </span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="h-full bg-gradient-to-r from-slate-400 to-slate-500 rounded-full"
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits Summary */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200">
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <FaRocket className="text-blue-600" />
                    Why SWAM Leads the Industry
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">
                          Revolutionary Design
                        </div>
                        <div className="text-xs text-slate-600">
                          Single-stage centrifugal with integrally geared
                          technology
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">
                          Variable Guide Vanes
                        </div>
                        <div className="text-xs text-slate-600">
                          Intelligent flow control without efficiency loss
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">
                          Oil-Free Guarantee
                        </div>
                        <div className="text-xs text-slate-600">
                          100% contamination-free air for sensitive applications
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FaCheckCircle className="text-emerald-500 text-lg mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-800 text-sm">
                          Energy Optimization
                        </div>
                        <div className="text-xs text-slate-600">
                          30% lower energy costs with constant speed operation
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROI Calculator */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 text-white">
                  <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <FaChartLine className="text-emerald-400" />
                    Return on Investment
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-400 mb-1">
                        18-24
                      </div>
                      <div className="text-xs text-slate-300">
                        Months Payback
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400 mb-1">
                        $50K+
                      </div>
                      <div className="text-xs text-slate-300">
                        Annual Savings
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-600">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">
                        3-5x
                      </div>
                      <div className="text-xs text-slate-300">
                        ROI over 10 years
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-3xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                <FaUsers className="text-blue-400" />
                What Our Customers Say
              </h3>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Real feedback from industry leaders who've experienced the SWAM
                advantage
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  "The energy savings exceeded our expectations. 35% reduction
                  in operating costs within the first year."
                </p>
                <div className="text-xs text-slate-400">
                  <div className="font-semibold text-white">
                    Water Treatment Plant
                  </div>
                  <div>Chief Engineer, Mumbai</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  "Oil-free operation was crucial for our food processing. SWAM
                  delivered exactly what we needed."
                </p>
                <div className="text-xs text-slate-400">
                  <div className="font-semibold text-white">
                    Food Processing
                  </div>
                  <div>Operations Manager, Delhi</div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-slate-200 text-sm leading-relaxed mb-4">
                  "Minimal maintenance and 99.5% uptime. The reliability is
                  outstanding for our 24/7 operations."
                </p>
                <div className="text-xs text-slate-400">
                  <div className="font-semibold text-white">Chemical Plant</div>
                  <div>Plant Manager, Gujarat</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl animate-pulse [animation-delay:2s]"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse [animation-delay:4s]"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Main CTA Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 backdrop-blur-md border border-blue-500/30 text-white px-6 py-3 rounded-full text-sm font-semibold mb-8">
                <FaRocket className="text-blue-400" />
                <span>Take the Next Step</span>
              </div>

              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Ready for{" "}
                <span className="bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  Superior Efficiency
                </span>
                ?
              </h2>

              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
                Connect with our technical experts to discover how our turbo
                blowers can optimize your operations with unmatched efficiency,
                reliability, and cost savings.
              </p>

              {/* Value Propositions */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <FaChartLine className="text-2xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    95%
                  </div>
                  <div className="text-xs text-slate-400">Peak Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <FaLeaf className="text-2xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-emerald-400 mb-1">
                    30%
                  </div>
                  <div className="text-xs text-slate-400">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <FaShieldAlt className="text-2xl text-white" />
                  </div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    100%
                  </div>
                  <div className="text-xs text-slate-400">Oil-Free</div>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group relative flex-1 bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center gap-3">
                    <FaPhone className="text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg">Get Expert Consultation</span>
                  </div>
                </button>

                <button className="group flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 hover:border-white/50 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-center justify-center gap-3">
                    <FaDownload className="text-xl group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-lg">Download Brochure</span>
                  </div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400" />
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400" />
                  <span>Custom Solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-emerald-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="space-y-8">
              {/* Contact Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Get in Touch Today
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Our experts are ready to help optimize your operations
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaPhone className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">
                        Call Us Now
                      </div>
                      <div className="text-blue-300 text-lg font-bold">
                        +91-99103-02163
                      </div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaEnvelope className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email Us</div>
                      <div className="text-emerald-300 text-lg font-bold">
                        sales@swamatics.com
                      </div>
                    </div>
                  </div>

                  <div className="group flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FaMapMarkerAlt className="text-white text-lg" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Visit Us</div>
                      <div className="text-purple-300 text-lg font-bold">
                        Noida, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-blue-500/30 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">
                    500+
                  </div>
                  <div className="text-sm text-slate-300">
                    Successful Projects
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600/20 to-emerald-500/10 backdrop-blur-md rounded-2xl p-6 border border-emerald-500/30 text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-slate-300">Years Experience</div>
                </div>
              </div>

              {/* Urgency Element */}
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-6 border border-orange-500/30 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <span className="text-orange-300 font-semibold text-sm">
                    Limited Time Offer
                  </span>
                </div>
                <div className="text-white font-bold text-lg mb-2">
                  Free Energy Audit Worth $2,500
                </div>
                <div className="text-slate-300 text-sm">
                  When you schedule a consultation this month
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA Bar */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-slate-400 mb-6">
                Join industry leaders who've already made the switch to SWAM
                Turbo Blowers
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                <div className="text-slate-500 font-semibold text-sm">
                  Trusted by companies like:
                </div>
                <div className="text-slate-400 text-sm">
                  Water Treatment Plants
                </div>
                <div className="text-slate-400 text-sm">
                  Chemical Industries
                </div>
                <div className="text-slate-400 text-sm">Food Processing</div>
                <div className="text-slate-400 text-sm">Power Generation</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainTemplate>
  );
};

export default TurboBlowers;
