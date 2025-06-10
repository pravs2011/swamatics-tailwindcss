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
  FaMicrochip,
  FaBatteryFull,
  FaDesktop,
  FaSyncAlt,
  FaWater,
  FaOilCan,
  FaFlask,
  FaFire,
  FaWind,
  FaAtom,
} from "react-icons/fa";

const HybridHelicalBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaMicrochip className="feature-icon" />,
      title: "Computer Generated Rotor Profile",
      description:
        "Advanced rotor profile design for better uniform clearances and higher volumetric efficiency",
      details:
        "Precision-engineered rotor profiles generated using advanced CAD/CAM technology for optimal performance",
      benefit: "Higher volumetric efficiency",
    },
    {
      icon: <FaDesktop className="feature-icon" />,
      title: "Integrated VFD & HMI System",
      description:
        "Complete integrated package with VFD Touchscreen, HMI, and complete instruments",
      details:
        "Advanced control system with interlocking and logic control for optimal operation and monitoring",
      benefit: "Smart automation control",
    },
    {
      icon: <FaSyncAlt className="feature-icon" />,
      title: "High Turn Down Capability",
      description:
        "Exceptional turn down capability as low as 20% for process optimization",
      details:
        "Superior operational flexibility compared to conventional blowers with 100-60% turndown limits",
      benefit: "20% minimum turndown ratio",
    },
    {
      icon: <FaBatteryFull className="feature-icon" />,
      title: "Energy Efficient Design",
      description:
        "Advanced technology design for maximum energy efficiency and cost savings",
      details:
        "Optimized for process optimization and energy saving, particularly suited for SBR based STP operations",
      benefit: "Maximum energy savings",
    },
  ];

  const applications = [
    {
      title: "Chemical & Petrochemicals",
      description: "Process optimization in chemical manufacturing plants",
      icon: <FaFlask />,
      image: "🧪",
      benefits: [
        "Process gas circulation",
        "Chemical compatibility",
        "Energy optimization",
      ],
    },
    {
      title: "Waste Water Treatment",
      description: "SBR based STP operations with superior efficiency",
      icon: <FaWater />,
      image: "💧",
      benefits: [
        "20% turndown capability",
        "Process optimization",
        "Energy savings",
      ],
    },
    {
      title: "Power Plants",
      description: "Reliable operation in power generation facilities",
      icon: <FaRocket />,
      image: "⚡",
      benefits: ["Continuous operation", "High reliability", "Low maintenance"],
    },
    {
      title: "Cement Plants",
      description: "Robust performance in demanding cement manufacturing",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Dust handling capability",
        "High-temperature operation",
        "Robust construction",
      ],
    },
    {
      title: "Refineries",
      description: "Process gas handling in refinery operations",
      icon: <FaOilCan />,
      image: "⚗️",
      benefits: [
        "High-pressure capability",
        "Continuous duty",
        "Corrosion resistance",
      ],
    },
    {
      title: "Food Processing",
      description: "Hygienic operation for food industry applications",
      icon: <FaLeaf />,
      image: "🍃",
      benefits: ["Hygienic design", "Food-grade materials", "Clean operation"],
    },
    {
      title: "Environmental Systems",
      description: "Environmental control and treatment applications",
      icon: <FaRecycle />,
      image: "🌱",
      benefits: [
        "Environmental compliance",
        "Emission control",
        "Clean technology",
      ],
    },
    {
      title: "Metallurgy",
      description: "Metal processing and treatment applications",
      icon: <FaFire />,
      image: "🔥",
      benefits: [
        "High-temperature capability",
        "Metal process gases",
        "Industrial grade",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Flow Capacity",
      value: "Up to 55,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Discharge Pressure",
      value: "Up to 1.20 kg/cm²",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Bio-Gas Capacity",
      value: "Up to 35,000 M³/Hr",
      icon: <FaRecycle />,
      color: "#f59e0b",
    },
    {
      parameter: "Turndown Ratio",
      value: "As low as 20%",
      icon: <FaSyncAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "30+ Years Innovation",
      description: "Three decades of experience in advanced blower technology",
      icon: <FaAward />,
      stat: "30+",
      unit: "Years",
    },
    {
      title: "Superior Efficiency",
      description:
        "Higher volumetric efficiency with computer-generated profiles",
      icon: <FaMicrochip />,
      stat: "95%+",
      unit: "Efficiency",
    },
    {
      title: "CNC Precision",
      description: "High accuracy manufacturing on CNC machines",
      icon: <FaCogs />,
      stat: "100%",
      unit: "CNC Made",
    },
    {
      title: "Smart Control",
      description: "Integrated VFD, HMI with complete automation",
      icon: <FaDesktop />,
      stat: "100%",
      unit: "Automated",
    },
  ];

  // Using the specified image name for hybrid helical blowers
  const productImageUrl = "/images/super-Hybrid-Helical-Blowers.png";

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
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes zoom-in-95 {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-in {
          animation-fill-mode: both;
        }

        .fade-in {
          animation-name: fade-in;
        }

        .zoom-in-95 {
          animation-name: zoom-in-95;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

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
            <div className="inline-flex ml-30 mt-20 items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold  animate-pulse">
              <FaMicrochip className="text-blue-400" />
              <span>Next Generation Technology</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              Super
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Helical Hybrid Blower
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              Most advanced machine with complete integrated package featuring
              VFD Touchscreen, HMI, and complete instruments for interlocking
              and logic control. Engineered with computer-generated rotor
              profiles for superior volumetric efficiency and unmatched
              reliability.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  55,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  20%
                </div>
                <div className="text-sm text-slate-400 mt-1">Min Turndown</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  1.20
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  kg/cm² Pressure
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 backdrop-blur-md rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Technical Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative max-w-lg w-full overflow-visible z-10">
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-50"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                  animation: "pulse 3s ease-in-out infinite",
                }}
              />
              <img
                src={productImageUrl}
                alt="Super Helical Hybrid Blower"
                className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer relative z-20"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[15%] right-[5%] bg-white/95 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-50 animate-bounce">
                  <FaMicrochip className="text-blue-600" />
                  <span>Smart Control</span>
                </div>
                <div
                  className="absolute bottom-[25%] left-[5%] bg-white/95 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-50 animate-bounce"
                  style={{ animationDelay: "1s" }}
                >
                  <FaSyncAlt className="text-blue-600" />
                  <span>20% Turndown</span>
                </div>
                <div
                  className="absolute top-[50%] right-[10%] bg-white/95 backdrop-blur-md px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-50 animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaBatteryFull className="text-blue-600" />
                  <span>Energy Efficient</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Highlights Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Advanced Technology Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Next generation helical TR-Series with cutting-edge engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-3 transition-all duration-300 group">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaCogs />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  CNC Precision
                </h3>
                <div className="text-2xl font-bold text-blue-500 mb-4">
                  Manufacturing
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    High Accuracy
                  </span>
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Quality Control
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-emerald-500 hover:-translate-y-3 transition-all duration-300 group">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMicrochip />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Computer Generated
                </h3>
                <div className="text-2xl font-bold text-emerald-500 mb-4">
                  Rotor Profile
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    Uniform Clearances
                  </span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    High Efficiency
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-amber-500 hover:-translate-y-3 transition-all duration-300 group">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Robust Design
                </h3>
                <div className="text-2xl font-bold text-amber-500 mb-4">
                  Heavy Duty
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    Anti-friction Bearings
                  </span>
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Oil Lubricated
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-red-500 hover:-translate-y-3 transition-all duration-300 group">
              <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaDesktop />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Smart Integration
                </h3>
                <div className="text-2xl font-bold text-red-500 mb-4">
                  VFD + HMI
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                    Touchscreen Control
                  </span>
                  <span className="inline-block bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Logic Interlocking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-200/50 px-6 py-2 rounded-full text-blue-600 font-medium mb-6">
              <FaCogs className="text-blue-500" />
              <span>Advanced Engineering</span>
            </div>
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 leading-tight">
              Key Performance Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Enhanced reliability, energy efficiency, and lower maintenance
              with cutting-edge technology that sets new industry standards for
              blower performance
            </p>
            <div className="mt-8 h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl transition-all duration-500 cursor-pointer border border-white/50 overflow-hidden ${
                  activeFeature === index
                    ? "shadow-2xl -translate-y-6 scale-105 border-blue-300/50 bg-white"
                    : "hover:-translate-y-4 hover:shadow-xl hover:border-blue-200/70 hover:bg-white/90"
                }`}
                onClick={() => setActiveFeature(index)}
                style={{
                  transformStyle: "preserve-3d",
                  animation:
                    activeFeature === index
                      ? "float 3s ease-in-out infinite"
                      : "none",
                }}
              >
                {/* Animated Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 transition-opacity duration-500 ${
                    activeFeature === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                ></div>

                {/* Top Progress Line */}
                <div
                  className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out ${
                    activeFeature === index
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></div>

                {/* Side Accent Line */}
                <div
                  className={`absolute left-0 top-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transition-all duration-700 ease-out ${
                    activeFeature === index
                      ? "h-full"
                      : "h-0 group-hover:h-full"
                  }`}
                ></div>

                {/* Enhanced Icon */}
                <div
                  className={`relative w-20 h-20 mb-6 transition-all duration-500 ${
                    activeFeature === index
                      ? "scale-110 rotate-3"
                      : "group-hover:scale-105 group-hover:-rotate-1"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl transition-all duration-500 ${
                      activeFeature === index
                        ? "shadow-lg shadow-blue-500/25"
                        : "group-hover:shadow-md group-hover:shadow-blue-500/20"
                    }`}
                  ></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <div className="text-white text-2xl">{feature.icon}</div>
                  </div>
                  {/* Floating particles effect */}
                  <div
                    className={`absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full transition-all duration-500 ${
                      activeFeature === index
                        ? "opacity-100 animate-ping"
                        : "opacity-0"
                    }`}
                  ></div>
                </div>

                {/* Enhanced Content */}
                <div className="relative z-10">
                  <h3
                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${
                      activeFeature === index
                        ? "text-blue-900"
                        : "text-slate-800 group-hover:text-blue-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </p>

                  {/* Enhanced Benefit Badge */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full mb-4 transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                        : "bg-emerald-50 text-emerald-700 group-hover:bg-emerald-100"
                    }`}
                  >
                    <FaCheckCircle
                      className={`text-sm transition-transform duration-300 ${
                        activeFeature === index ? "scale-110" : ""
                      }`}
                    />
                    <span className="text-sm font-semibold">
                      {feature.benefit}
                    </span>
                  </div>

                  {/* Enhanced Details with Better Animation */}
                  {activeFeature === index && (
                    <div
                      className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-2xl border-l-4 border-blue-500 relative overflow-hidden"
                      style={{
                        animation: "slideDown 0.5s ease-out",
                      }}
                    >
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-pulse"></div>
                      <p className="text-slate-700 text-sm font-medium relative z-10">
                        {feature.details}
                      </p>
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500/10 rounded-full blur-sm"></div>
                    </div>
                  )}
                </div>

                {/* Corner Accent */}
                <div
                  className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-blue-500/10 to-transparent transition-opacity duration-500 ${
                    activeFeature === index
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-50"
                  }`}
                ></div>
              </div>
            ))}
          </div>

          {/* Enhanced Call-to-Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-blue-200/50 px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <FaLightbulb className="text-blue-500 text-xl" />
              <span className="text-slate-700 font-medium">
                Click on any feature to explore detailed specifications
              </span>
              <FaArrowRight className="text-blue-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                The Super Helical Hybrid Blower represents the pinnacle of
                blower technology with rugged construction, appropriate rotor
                shaft design for low deflection, and critical speed
                considerations. Manufactured with high accuracy on CNC machines
                for consistent performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-2xl border-l-4 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-2">
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
                <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  <FaAward />
                  <span>CNC Manufactured</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
                  <FaMicrochip />
                  <span>Smart Control</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md w-full overflow-visible m-8">
                <img
                  src={productImageUrl}
                  alt="Super Helical Hybrid Blower Specifications"
                  className="w-full h-auto rounded-3xl shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  <div className="absolute top-[15%] -right-20 text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200 whitespace-nowrap z-10">
                    Computer Generated Rotor Profile
                  </div>
                  <div className="absolute top-[45%] -left-24 text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200 whitespace-nowrap z-10">
                    VFD Touchscreen Control
                  </div>
                  <div className="absolute bottom-[30%] -right-16 text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200 whitespace-nowrap z-10">
                    Heavy Duty Bearings
                  </div>
                  <div className="absolute bottom-[10%] -left-20 text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200 whitespace-nowrap z-10">
                    CNC Precision Manufacturing
                  </div>
                </div>
                <div className="lg:hidden mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200">
                    Computer Generated Rotor Profile
                  </span>
                  <span className="text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200">
                    VFD Touchscreen Control
                  </span>
                  <span className="text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200">
                    Heavy Duty Bearings
                  </span>
                  <span className="text-xs text-slate-600 p-2 bg-white rounded-3xl shadow-lg border-2 border-slate-200">
                    CNC Precision Manufacturing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Optimized for SBR based STP operations and diverse industrial
              processes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm transition-all duration-300 cursor-pointer border-2 border-transparent ${
                    selectedApplication === index
                      ? "border-blue-500 translate-x-3 shadow-lg"
                      : "hover:translate-x-2 hover:shadow-md hover:border-blue-500"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="w-15 h-15 bg-slate-50 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-blue-600 transition-transform duration-300 ${
                      selectedApplication === index ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg h-fit">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl"
                    >
                      <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 p-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Why Choose SWAM Super Helical Hybrid Blowers
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Leading innovation in next-generation blower technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl text-center transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-blue-500"
              >
                <div className="w-18 h-18 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-extrabold text-blue-600 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wider">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
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

      {/* SBR Optimization Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              SBR Based STP Optimization
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Most suited for Sequential Batch Reactor operations with superior
              efficiency
            </p>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-emerald-500 hover:-translate-y-3 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaSyncAlt />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Superior Turndown
                </h3>
                <div className="text-2xl font-bold text-emerald-500 mb-4">
                  20% Minimum
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                    vs 60% Others
                  </span>
                  <span className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Process Optimization
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-blue-500 hover:-translate-y-3 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaBatteryFull />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Energy Savings
                </h3>
                <div className="text-2xl font-bold text-blue-500 mb-4">
                  Maximum
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    Variable Flow
                  </span>
                  <span className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Optimized Power
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border-l-4 border-amber-500 hover:-translate-y-3 transition-all duration-300 group max-w-sm">
              <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaWater />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  STP Optimized
                </h3>
                <div className="text-2xl font-bold text-amber-500 mb-4">
                  Best Fit
                </div>
                <div className="space-y-2">
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    Wastewater Treatment
                  </span>
                  <span className="inline-block bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Process Control
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 relative overflow-hidden">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-600/30 to-slate-900/30"></div>
          <div className="absolute top-20 left-20 w-96 h-96 bg-slate-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-slate-300/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-slate-500/5 to-slate-400/5 rounded-full blur-3xl"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="2" fill="white"/></pattern></defs><rect width="100%" height="100%" fill="url(%23dots)"/></svg>')`,
          }}
        />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* Enhanced Badge */}
            <div className="inline-flex items-center gap-3 bg-slate-600/20 backdrop-blur-xl border border-slate-400/20 px-8 py-3 rounded-full text-slate-200 font-medium mb-8 hover:bg-slate-500/30 transition-all duration-300">
              <FaRocket className="text-blue-400" />
              <span>Next Generation Technology</span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Title */}
            <h2 className="text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
              Ready to{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Upgrade
              </span>{" "}
              to Smart
              <br className="hidden md:block" />
              Blower Technology?
            </h2>

            {/* Enhanced Description */}
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              Experience the next generation of blower technology with
              integrated smart controls, superior efficiency, and unmatched
              reliability for your critical applications.
              <span className="text-blue-300 font-semibold">
                {" "}
                Join industry leaders who trust SWAM.
              </span>
            </p>

            {/* Enhanced Buttons */}
            <div className="flex gap-6 justify-center mb-16 flex-wrap">
              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl font-bold shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <FaPhone className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10">
                  Get Technical Consultation
                </span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              </button>

              <button className="group relative inline-flex items-center gap-3 px-10 py-5 bg-slate-600/30 backdrop-blur-xl text-white border-2 border-slate-400/30 rounded-2xl font-bold hover:bg-slate-500/40 hover:border-slate-300/50 hover:-translate-y-2 transition-all duration-300">
                <FaDownload className="group-hover:scale-110 transition-transform duration-300" />
                <span>Download Product Brochure</span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-400/10 to-slate-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </button>
            </div>

            {/* Enhanced Stats/Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-slate-700/30 backdrop-blur-xl border border-slate-500/20 p-6 rounded-2xl hover:bg-slate-600/40 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FaAward className="text-blue-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">30+</div>
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  Years of Innovation Excellence
                </p>
              </div>

              <div className="bg-slate-700/30 backdrop-blur-xl border border-slate-500/20 p-6 rounded-2xl hover:bg-slate-600/40 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <FaUsers className="text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">500+</div>
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  Satisfied Industrial Clients
                </p>
              </div>

              <div className="bg-slate-700/30 backdrop-blur-xl border border-slate-500/20 p-6 rounded-2xl hover:bg-slate-600/40 transition-all duration-300 group">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <FaCertificate className="text-purple-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">ISO</div>
                </div>
                <p className="text-slate-300 text-sm font-medium">
                  9001:2015 Certified Quality
                </p>
              </div>
            </div>

            {/* Enhanced Contact Information */}
            <div className="bg-slate-700/20 backdrop-blur-xl border border-slate-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Our Experts
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center gap-3 p-4 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                    <FaPhone className="text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-400 text-xs uppercase tracking-wider">
                      Call Us
                    </div>
                    <div className="text-white font-semibold">
                      +91-99103-02163
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <FaEnvelope className="text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-400 text-xs uppercase tracking-wider">
                      Email Us
                    </div>
                    <div className="text-white font-semibold">
                      sales@swamatics.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-3 p-4 bg-slate-600/30 rounded-xl hover:bg-slate-600/50 transition-all duration-300 group cursor-pointer">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center group-hover:bg-purple-500/30 transition-colors duration-300">
                    <FaMapMarkerAlt className="text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-left">
                    <div className="text-slate-400 text-xs uppercase tracking-wider">
                      Visit Us
                    </div>
                    <div className="text-white font-semibold text-sm">
                      C-2, Sector-3, Noida-201301
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-[9999] p-8 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-md border-none rounded-full w-11 h-11 flex items-center justify-center text-white cursor-pointer z-20 transition-all duration-300 hover:bg-black/95 hover:scale-110 text-2xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-full overflow-hidden flex flex-col">
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 scrollbar-hide">
                <img
                  src={modalImage}
                  alt="Super Helical Hybrid Blower - Expanded View"
                  className="max-w-none max-h-none w-auto h-auto min-w-full min-h-full object-contain block cursor-grab transition-transform duration-300 active:cursor-grabbing"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-30 backdrop-blur-md">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    Super Helical Hybrid Blower
                  </h3>
                  <p className="text-slate-200 mb-6 text-lg drop-shadow-md">
                    Next Generation Smart Blower Technology
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      Capacity: Up to 55,000 M³/Hr
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      Pressure: Up to 1.20 kg/cm²
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      Turndown: As low as 20%
                    </span>
                    <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-md">
                      Features: VFD + HMI + Smart Control
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

export default HybridHelicalBlowers;
