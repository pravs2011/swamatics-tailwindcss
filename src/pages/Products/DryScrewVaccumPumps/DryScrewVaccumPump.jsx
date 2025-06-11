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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const DryScrewVaccumPump = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="feature-icon" />,
      title: "Combined Variable Pitch Technology",
      description:
        "Advanced dry screw technology with variable pitch design for superior vacuum performance and reliability",
      details:
        "Developed by highly skilled engineers with advanced design principles for superior performance and high reliability in demanding vacuum applications",
      benefit: "Superior vacuum performance",
    },
    {
      icon: <FaLeaf className="feature-icon" />,
      title: "Oil-Free Operation",
      description:
        "Complete oil-free design eliminates contamination and reduces environmental impact with zero effluent",
      details:
        "No contamination of process stream, no effluent, no pollution, and no waste disposal costs, making it environmentally friendly",
      benefit: "Zero contamination",
    },
    {
      icon: <FaSnowflake className="feature-icon" />,
      title: "Deep Vacuum Capability",
      description:
        "Achieves ultimate vacuum up to 0.01 Torr with consistent performance across varying conditions",
      details:
        "Deeper vacuum and more flexible operation with no variation in vacuum resulting from changing seasons and utility conditions",
      benefit: "Consistent deep vacuum",
    },
    {
      icon: <FaRecycle className="feature-icon" />,
      title: "Immediate Solvent Recovery",
      description:
        "Direct solvent recovery at pump exhaust for immediate reuse and cost savings",
      details:
        "Immediate solvent recovery capability at pump exhaust reduces operational costs and improves process efficiency",
      benefit: "Cost-effective recovery",
    },
  ];

  const applications = [
    {
      title: "Chemical Processing",
      description:
        "Distillation, crystallization, and solvent recovery in chemical industries",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Solvent recovery",
        "Distillation processes",
        "Chemical synthesis",
      ],
    },
    {
      title: "Pharmaceutical",
      description:
        "Freeze drying, tablet coating, and API manufacturing processes",
      icon: <FaSpa />,
      image: "💊",
      benefits: ["Freeze drying", "Tablet coating", "API manufacturing"],
    },
    {
      title: "Food Processing",
      description:
        "Vacuum packaging, freeze drying, and food preservation applications",
      icon: <FaBoxes />,
      image: "🍕",
      benefits: ["Vacuum packaging", "Food preservation", "Freeze drying"],
    },
    {
      title: "Semiconductor",
      description: "Wafer processing, etching, and clean room applications",
      icon: <FaMicrochip />,
      image: "🔬",
      benefits: [
        "Wafer processing",
        "Etching applications",
        "Clean environments",
      ],
    },
    {
      title: "Plastics & Polymers",
      description:
        "Vacuum forming, degassing, and polymer processing applications",
      icon: <FaLayerGroup />,
      image: "🔧",
      benefits: ["Vacuum forming", "Degassing processes", "Polymer processing"],
    },
    {
      title: "Research & Laboratory",
      description: "Laboratory vacuum systems and research applications",
      icon: <FaAtom />,
      image: "🔬",
      benefits: [
        "Laboratory systems",
        "Research applications",
        "Analytical processes",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "3,500 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Ultimate Vacuum",
      value: "0.01 Torr",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design Type",
      value: "Combined Variable Pitch",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Oil-Free Dry Screw",
      icon: <FaLeaf />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "No Contamination",
      description:
        "Oil-free operation ensures no contamination of process stream for pure vacuum applications",
      icon: <FaLeaf />,
      stat: "Zero",
      unit: "Contamination",
    },
    {
      title: "Deep Vacuum",
      description:
        "Ultimate vacuum capability up to 0.01 Torr for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "0.01",
      unit: "Torr",
    },
    {
      title: "High Capacity",
      description:
        "Exceptional pumping speed up to 3,500 M³/Hr for large-scale operations",
      icon: <FaChartLine />,
      stat: "3,500",
      unit: "M³/Hr",
    },
    {
      title: "Lower Costs",
      description:
        "Reduced total cost of ownership with lower maintenance and utility costs",
      icon: <FaBolt />,
      stat: "Lower",
      unit: "Operating Cost",
    },
  ];

  const workingPrinciple = {
    title: "Dry Screw Vacuum Technology",
    description:
      "The combined variable pitch screw rotors create vacuum through positive displacement action. The screws mesh together with precise clearances, trapping and moving gas from inlet to outlet, achieving deep vacuum without oil contamination.",
    steps: [
      {
        step: "1",
        title: "Gas Intake",
        description:
          "Process gas enters through the inlet port as screws create vacuum",
      },
      {
        step: "2",
        title: "Compression",
        description:
          "Variable pitch screws compress gas progressively with no oil contact",
      },
      {
        step: "3",
        title: "Exhaust",
        description:
          "Compressed gas discharged with immediate solvent recovery capability",
      },
    ],
  };

  const productImageUrl = "/images/dry-Screw-Vacuum-Pump.jpg";

  const openModal = (imageUrl) => {
    setModalImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <>
      <style jsx>{`
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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .bg-radial-gradient {
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.1) 0%,
            transparent 70%
          );
        }
      `}</style>
      <MainTemplate>
        {/* Hero Section */}
        <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
            }}
          />
          <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <br />
              <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate__animated animate__fadeInUp">
                <FaStar className="text-blue-400" />
                <span>Advanced Vacuum Technology</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate__animated animate__fadeInUp animate__delay-1s">
                Dry Screw
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Vacuum Pump
                </span>
              </h1>
              <p className="text-xl leading-relaxed text-slate-300 mb-10 animate__animated animate__fadeInUp animate__delay-2s">
                SWAM Dry Screw Vacuum Pumps feature combined variable pitch
                technology developed by highly skilled engineers for advanced
                design, superior performance, and high reliability. Experience
                oil-free operation with no contamination, deeper vacuum
                capability, and immediate solvent recovery.
              </p>

              <div className="flex gap-8 mb-10 animate__animated animate__fadeInUp animate__delay-3s">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">3,500</div>
                  <div className="text-sm text-slate-400 mt-1">
                    M³/Hr Capacity
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">0.01</div>
                  <div className="text-sm text-slate-400 mt-1">Torr Vacuum</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">
                    Oil-Free
                  </div>
                  <div className="text-sm text-slate-400 mt-1">Operation</div>
                </div>
              </div>

              <div className="flex gap-4 animate__animated animate__fadeInUp animate__delay-4s">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <FaDownload />
                  <span>Download Brochure</span>
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 backdrop-blur-lg px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all">
                  <FaPlay />
                  <span>Watch Demo</span>
                </button>
              </div>
              <br />
            </div>

            <div className="relative flex justify-center items-center">
              <div className="relative w-[500px] h-[500px] flex justify-center items-center">
                <div className="absolute w-full h-full bg-radial-gradient from-blue-500/10 to-transparent rounded-full animate-pulse-slow"></div>
                <img
                  src={productImageUrl}
                  alt="Dry Screw Vacuum Pump - Combined Variable Pitch Technology"
                  className="max-w-[400px] max-h-[400px] object-contain filter drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer z-10"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="z-100 absolute w-full h-full hidden lg:block">
                  <div className="absolute top-[15%] left-[-10%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center">
                    <FaGears className="text-blue-600" />
                    <span>Variable Pitch</span>
                  </div>
                  <div
                    className="absolute top-[50%] right-[-15%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center"
                    style={{ animationDelay: "2s" }}
                  >
                    <FaLeaf className="text-blue-600" />
                    <span>Oil-Free</span>
                  </div>
                  <div
                    className="absolute bottom-[20%] left-[-5%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg animate-float min-w-[120px] max-w-[180px] h-10 justify-center"
                    style={{ animationDelay: "4s" }}
                  >
                    <FaRecycle className="text-blue-600" />
                    <span>Solvent Recovery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Advanced Dry Screw Technology
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Discover the revolutionary engineering features that make our
                Dry Screw Vacuum Pumps the most reliable and efficient choice
                for contamination-free vacuum applications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 text-center relative overflow-hidden border border-slate-200 cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? "transform -translate-y-2 shadow-2xl border-blue-600"
                      : "hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                  } ${
                    activeFeature === index
                      ? "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-600/5 before:to-blue-400/5 before:opacity-100"
                      : ""
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div
                    className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform ${
                      activeFeature === index
                        ? "scale-110 rotate-3"
                        : "hover:scale-110 hover:rotate-3"
                    }`}
                  >
                    <span className="text-white text-2xl">{feature.icon}</span>
                  </div>
                  <h3 className="relative z-10 text-xl font-semibold text-slate-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 text-slate-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="relative z-10 flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                    <FaCheckCircle />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="relative z-10 mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-500">
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
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Working Principle & Technology
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Understanding the combined variable pitch screw technology that
                delivers oil-free, contamination-free vacuum with superior
                performance
              </p>
            </div>

            <div className="flex flex-col gap-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                    <FaGears />
                    <span>Variable Pitch Screw Technology</span>
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
                        <div>
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
                    alt="Dry Screw Vacuum Pump Working Principle"
                    className="w-full h-auto filter drop-shadow-lg hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => openModal(productImageUrl)}
                  />
                  <div className="absolute w-full h-full pointer-events-none hidden lg:block">
                    <div className="absolute top-[20%] left-[-20%] flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                        <div className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"></div>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-lg whitespace-nowrap">
                        Variable Pitch Screws
                      </div>
                    </div>
                    <div className="absolute top-[50%] right-[-25%] flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                        <div
                          className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"
                          style={{ animationDelay: "1s" }}
                        ></div>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-lg whitespace-nowrap">
                        Oil-Free Chamber
                      </div>
                    </div>
                    <div className="absolute bottom-[25%] left-[-15%] flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-600 rounded-full relative">
                        <div
                          className="absolute w-6 h-6 bg-blue-600 opacity-30 rounded-full -top-1.5 -left-1.5 animate-pulse"
                          style={{ animationDelay: "2s" }}
                        ></div>
                      </div>
                      <div className="bg-white px-4 py-2 rounded-2xl text-xs font-semibold text-slate-800 shadow-lg whitespace-nowrap">
                        Precise Clearances
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technology Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-gradient-to-br from-blue-600 to-blue-400 text-white rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                    <FaLeaf className="text-xl" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">
                    Oil-Free Operation
                  </h4>
                  <p className="opacity-90 leading-relaxed mb-6">
                    Complete oil-free design ensures no contamination of process
                    stream with zero effluent and no pollution
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-sm opacity-80">Contamination:</span>
                      <span className="font-semibold">Zero</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-sm opacity-80">Effluent:</span>
                      <span className="font-semibold">None</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <FaTachometerAlt className="text-xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Deep Vacuum Performance
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Achieves ultimate vacuum up to 0.01 Torr with consistent
                    performance regardless of seasonal variations
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        0.01 Torr ultimate vacuum
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        Season-independent operation
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <FaRecycle className="text-xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Immediate Solvent Recovery
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Direct solvent recovery at pump exhaust for immediate reuse,
                    reducing operational costs and improving efficiency
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">Immediate recovery</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">Cost reduction</span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <FaTools className="text-xl text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-4">
                    Lower Maintenance Costs
                  </h4>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    Advanced design with fewer moving parts and oil-free
                    operation significantly reduces maintenance requirements and
                    costs
                  </p>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        Reduced maintenance
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FaCheckCircle className="text-green-600" />
                      <span className="text-slate-700">
                        Lower operating costs
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
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                  Technical Specifications
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Dry Screw Vacuum Pumps deliver exceptional vacuum performance
                  with industry-leading specifications designed for reliability,
                  efficiency, and contamination-free operation in demanding
                  applications.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  {specifications.map((spec, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-6 border-l-4 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all"
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
                    Key Benefits & Advantages
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        No contamination of process stream
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        Deeper vacuum and more flexible operation
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        No effluent, no pollution, no waste disposal costs
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">
                        Lower total cost of ownership
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
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
                    alt="Dry Screw Vacuum Pump Technical Specifications"
                    className="w-full h-auto rounded-2xl hover:scale-105 transition-transform cursor-pointer"
                    onClick={() => openModal(productImageUrl)}
                  />
                  <div className="absolute inset-0 pointer-events-none overflow-visible hidden lg:block">
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center">
                      Variable Pitch Technology
                    </div>
                    <div
                      className="absolute top-1/4 -right-16 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center"
                      style={{ animationDelay: "1.5s" }}
                    >
                      Oil-Free Operation
                    </div>
                    <div
                      className="absolute bottom-1/4 -left-16 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center"
                      style={{ animationDelay: "3s" }}
                    >
                      Deep Vacuum Capability
                    </div>
                    <div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600/95 text-white px-5 py-3 rounded-3xl text-xs font-semibold backdrop-blur-lg animate-float shadow-lg border border-white/20 min-w-[140px] max-w-[230px] h-6 flex items-center justify-center text-center"
                      style={{ animationDelay: "4.5s" }}
                    >
                      Solvent Recovery
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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Industrial Applications
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Oil-free vacuum solutions for demanding applications requiring
                contamination-free environments and deep vacuum performance
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="flex flex-col gap-4">
                {applications.map((app, index) => (
                  <div
                    key={index}
                    className={`bg-slate-50 rounded-2xl p-6 flex items-center gap-4 cursor-pointer border-2 transition-all ${
                      selectedApplication === index
                        ? "bg-white border-blue-600 transform translate-x-2 shadow-lg"
                        : "border-transparent hover:bg-white hover:border-blue-600 hover:transform hover:translate-x-2 hover:shadow-lg"
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
                      className={`text-slate-400 transition-all ${
                        selectedApplication === index
                          ? "text-blue-600 transform translate-x-1"
                          : ""
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

                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full font-semibold text-sm hover:transform hover:-translate-y-1 hover:shadow-lg transition-all">
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
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Why Choose SWAM Dry Screw Vacuum Pumps
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Advanced oil-free technology for superior vacuum performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-10 text-center border border-slate-200 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-600 transition-all"
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
        <section className="py-24 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">
                Ready for Oil-Free Vacuum Technology?
              </h2>
              <p className="text-lg mb-12 opacity-90">
                Connect with our engineering experts to discover how Dry Screw
                Vacuum Pumps can enhance your processes with contamination-free
                operation, deeper vacuum capability, and immediate solvent
                recovery.
              </p>

              <div className="flex justify-center gap-4 mb-12 flex-wrap">
                <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <FaPhone />
                  <span>Get Expert Consultation</span>
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 backdrop-blur-lg px-8 py-4 rounded-full font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all">
                  <FaDownload />
                  <span>Download Technical Brochure</span>
                </button>
              </div>

              <div className="flex justify-center gap-8 flex-wrap">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <FaPhone />
                  <span>+91-99103-02163</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <FaEnvelope />
                  <span>sales@swamatics.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-8 animate-fadeIn"
            onClick={closeModal}
          >
            <div
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-lg border-0 rounded-full text-white text-2xl cursor-pointer z-10 flex items-center justify-center hover:bg-black/70 hover:scale-110 transition-all"
                onClick={closeModal}
              >
                ×
              </button>
              <div className="flex flex-col max-h-[90vh]">
                <div className="flex-1 flex flex-col overflow-hidden">
                  <img
                    src={modalImage}
                    alt="Dry Screw Vacuum Pump - Combined Variable Pitch Technology - Expanded View"
                    className="w-full h-auto max-h-[70vh] object-contain bg-slate-50 select-none"
                    draggable="false"
                  />
                  <div className="p-8 bg-white border-t border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Dry Screw Vacuum Pump
                    </h3>
                    <p className="text-slate-600 mb-4">
                      Combined Variable Pitch Technology
                    </p>
                    <div className="flex gap-4 flex-wrap">
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        Capacity: Up to 3,500 M³/Hr
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        Vacuum: Up to 0.01 Torr
                      </span>
                      <span className="bg-slate-100 px-4 py-2 rounded-2xl text-sm text-slate-800 font-medium">
                        Operation: Oil-Free
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </MainTemplate>
    </>
  );
};

export default DryScrewVaccumPump;
