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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const LiquidRingVaccumPumps = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  // Custom CSS animations
  const customStyles = `
    .animate-spin-slow {
      animation: spin 3s linear infinite;
    }
    .animate-fade-in {
      animation: fadeIn 0.5s ease-in-out;
    }
    .animate-float {
      animation: float 3s ease-in-out infinite;
    }
    .animation-delay-200 {
      animation-delay: 0.2s;
    }
    .animation-delay-400 {
      animation-delay: 0.4s;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
  `;

  const keyFeatures = [
    {
      icon: <FaWater className="text-blue-500 text-2xl" />,
      title: "Liquid Ring Technology",
      description:
        "Rotary machines where liquid acts as a piston, generally water for most applications",
      details:
        "A balanced rotor with fixed radial blades having slight curvature at the tips revolves in a circular casing containing the liquid",
      benefit: "Reliable liquid seal operation",
      technicalSpecs: {
        sealMedium: "Water (Standard)",
        operationType: "Isothermal Compression",
        efficiency: "85-92%",
        temperatureRange: "5°C to 60°C",
      },
      advantages: [
        "No metal-to-metal contact",
        "Handles condensable vapors",
        "Self-priming operation",
        "Minimal vibration",
      ],
      applications: [
        "Chemical Processing",
        "Power Generation",
        "Food Industry",
      ],
    },
    {
      icon: <FaCircle className="text-blue-500 text-2xl" />,
      title: "Eccentric Rotor Design",
      description:
        "Rotor axis placed eccentric with casing axis creates varying liquid ring distance for efficient compression",
      details:
        "The liquid rotates in the casing forming a circular hollow ring whose internal surface is at varying distance from the rotor axis",
      benefit: "Efficient compression cycle",
      technicalSpecs: {
        eccentricity: "Optimized geometry",
        bladeCount: "6-12 fixed blades",
        rotorMaterial: "Cast Iron / Stainless Steel",
        balancing: "Dynamic balancing",
      },
      advantages: [
        "Uniform compression",
        "Reduced power consumption",
        "Extended service life",
        "Minimal maintenance",
      ],
      applications: ["Vacuum Packaging", "Steam Ejector", "Condenser Systems"],
    },
    {
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      title: "High Capacity Performance",
      description:
        "Achieves capacity up to 30,000 M³/Hr with vacuum up to 90% for demanding applications",
      details:
        "Designed for high-volume applications with consistent performance across various industrial processes",
      benefit: "Superior throughput capability",
      technicalSpecs: {
        maxCapacity: "30,000 M³/Hr",
        vacuumLevel: "Up to 90%",
        powerRange: "3.7 - 22 kW",
        pressureRange: "53 - 67 mbar(a)",
      },
      advantages: [
        "High volume handling",
        "Consistent performance",
        "Energy efficient",
        "Scalable solutions",
      ],
      applications: [
        "Large Scale Manufacturing",
        "Process Industries",
        "Waste Treatment",
      ],
    },
    {
      icon: <FaGears className="text-blue-500 text-2xl" />,
      title: "Versatile Configuration",
      description:
        "Available in multiple materials and configurations to suit specific application requirements",
      details:
        "Standard CI, SS 304, SS 316, SS 316L materials with vertical configuration and various sealing options",
      benefit: "Customizable solutions",
      technicalSpecs: {
        materials: "CI, SS304, SS316, SS316L",
        configuration: "Vertical/Horizontal",
        connections: "Flanged/Threaded",
        sealing: "Mechanical/Packing",
      },
      advantages: [
        "Corrosion resistance",
        "Flexible installation",
        "Custom configurations",
        "Industry compliance",
      ],
      applications: ["Marine Applications", "Pharmaceutical", "Petrochemical"],
    },
  ];

  const applications = [
    {
      title: "Oil and Gas Plants",
      description:
        "Vacuum applications in oil refining, gas processing, and petrochemical operations",
      icon: <FaOilCan />,
      image: "🛢️",
      benefits: [
        "Oil refining processes",
        "Gas processing",
        "Petrochemical operations",
      ],
    },
    {
      title: "Pulp & Paper Industries",
      description:
        "Paper manufacturing, pulp processing, and dewatering applications",
      icon: <FaBoxes />,
      image: "📄",
      benefits: [
        "Paper manufacturing",
        "Pulp processing",
        "Dewatering systems",
      ],
    },
    {
      title: "Power Plants",
      description:
        "Steam condensing systems, turbine applications, and cooling tower operations",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["Steam condensing", "Turbine systems", "Cooling towers"],
    },
    {
      title: "Chemical Plants",
      description:
        "Chemical processing, distillation, and solvent recovery applications",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: ["Chemical processing", "Distillation", "Solvent recovery"],
    },
    {
      title: "Textile Industries",
      description:
        "Fabric processing, dyeing operations, and finishing applications",
      icon: <FaLayerGroup />,
      image: "🧵",
      benefits: [
        "Fabric processing",
        "Dyeing operations",
        "Finishing processes",
      ],
    },
    {
      title: "Jet and Surface Condensers",
      description:
        "Condenser vacuum systems and various industrial condensing applications",
      icon: <FaSnowflake />,
      image: "❄️",
      benefits: [
        "Condenser systems",
        "Industrial condensing",
        "Vacuum creation",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "30,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 90%",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Standard Flow Rate",
      value: "75 – 725 m³/hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Motor Size Range",
      value: "3.7 – 22 Kw",
      icon: <FaBolt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Vacuum Capability",
      description:
        "Achieves up to 90% vacuum with consistent performance for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "90%",
      unit: "Vacuum",
    },
    {
      title: "Large Capacity",
      description:
        "Exceptional pumping capacity up to 30,000 M³/Hr for large-scale industrial operations",
      icon: <FaChartLine />,
      stat: "30,000",
      unit: "M³/Hr",
    },
    {
      title: "Reliable Operation",
      description:
        "Liquid ring technology provides reliable and consistent performance with minimal maintenance",
      icon: <FaShieldAlt />,
      stat: "Reliable",
      unit: "Performance",
    },
    {
      title: "Versatile Materials",
      description:
        "Available in multiple material grades including SS 304, SS 316, SS 316L for corrosive environments",
      icon: <FaTools />,
      stat: "Multi",
      unit: "Material Options",
    },
  ];

  const workingPrinciple = {
    title: "Liquid Ring Vacuum Technology",
    description:
      "The liquid ring vacuum pump operates on the principle where liquid acts as a piston. A balanced rotor with fixed radial blades revolves eccentrically in a casing containing liquid, creating compression and vacuum cycles through the varying liquid ring distance.",
    steps: [
      {
        step: "1",
        title: "Liquid Ring Formation",
        description:
          "Liquid rotates in casing forming circular hollow ring at varying distances from rotor axis",
      },
      {
        step: "2",
        title: "Suction Stroke",
        description:
          "Moving liquid ring acts as piston on suction stroke when nearest to rotor axis",
      },
      {
        step: "3",
        title: "Compression & Discharge",
        description:
          "Chamber volume decreases as liquid ring moves toward center, compressing and discharging gas",
      },
    ],
  };

  const productImageUrl = "/images/liquid-Ring-Vacuum-Pump.jpg";

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
      <style>{customStyles}</style>
      {/* Hero Section */}
      <section className="min-h-screen bg-black bg-gradient-to-br from-black via-gray-900 to-gray-800 flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
              <FaStar className="text-blue-400" />
              <span>Proven Vacuum Technology</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Liquid Ring
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Vacuum Pumps
              </span>
            </h1>

            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-fade-in-up animation-delay-400">
              SWAM Liquid Ring Vacuum Pumps are rotary machines where liquid
              acts as a piston, generally water for most applications. Featuring
              balanced rotor design with fixed radial blades and eccentric
              placement for reliable vacuum performance up to 90% vacuum levels.
            </p>

            <div className="flex gap-8 mb-10 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  30,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  90%
                </div>
                <div className="text-sm text-slate-400 mt-1">Vacuum Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Water Ring
                </div>
                <div className="text-sm text-slate-400 mt-1">Technology</div>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up animation-delay-800">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white bg-white/10 border border-white/20 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl"></div>
              <img
                src={productImageUrl}
                alt="Liquid Ring Vacuum Pump - Water Ring Technology"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute top-4 left-4 z-20 space-y-4 hidden lg:block">
                <div className="bg-white backdrop-blur-md rounded-full px-4 py-2 text-gray-600 text-sm font-medium border border-white/20 animate-float">
                  <FaWater className="inline mr-2" />
                  <span>Liquid Ring</span>
                </div>
                <div className="bg-white backdrop-blur-md rounded-full px-4 py-2 text-gray-600 text-sm font-medium border border-white/20 animate-float animation-delay-200">
                  <FaCircle className="inline mr-2" />
                  <span>Eccentric Design</span>
                </div>
                <div className="bg-white backdrop-blur-md rounded-full px-4 py-2 text-gray-600 text-sm font-medium border border-white/20 animate-float animation-delay-400">
                  <FaChartLine className="inline mr-2" />
                  <span>High Capacity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <FaGears className="animate-spin-slow" />
              <span>Advanced Engineering</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-400 bg-clip-text text-transparent">
              Liquid Ring Vacuum Technology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Discover the proven engineering features that make our Liquid Ring
              Vacuum Pumps the reliable choice for high-capacity vacuum
              applications across diverse industries
            </p>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-3 mb-12">
              {keyFeatures.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-500 scale-125"
                      : "bg-slate-300 hover:bg-slate-400"
                  }`}
                  onClick={() => setActiveFeature(index)}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 cursor-pointer transition-all duration-500 ${
                  activeFeature === index
                    ? "shadow-2xl shadow-blue-500/20 scale-[1.02] border-2 border-blue-200"
                    : "shadow-lg hover:shadow-xl hover:scale-[1.01] border border-slate-200"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                    activeFeature === index
                      ? "bg-gradient-to-br from-blue-50 to-indigo-50 opacity-100"
                      : "opacity-0"
                  }`}
                ></div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeFeature === index
                          ? "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg scale-110"
                          : "bg-slate-100 text-blue-500 group-hover:bg-blue-100"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div
                      className={`text-right transition-opacity duration-300 ${
                        activeFeature === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="text-2xl font-bold text-blue-600">
                        0{index + 1}
                      </div>
                      <div className="text-xs text-slate-500 font-medium">
                        FEATURE
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex items-center gap-3 text-sm text-emerald-600 font-medium mb-6">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-emerald-600 text-xs" />
                    </div>
                    <span>{feature.benefit}</span>
                  </div>

                  {/* Expandable Content */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      activeFeature === index
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-slate-200 pt-6">
                      {/* Technical Details */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                          Technical Details
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                          {feature.details}
                        </p>
                      </div>

                      {/* Technical Specifications */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                          Key Specifications
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {Object.entries(feature.technicalSpecs).map(
                            ([key, value]) => (
                              <div
                                key={key}
                                className="bg-slate-50 rounded-lg p-3"
                              >
                                <div className="text-xs text-slate-500 font-medium mb-1 capitalize">
                                  {key.replace(/([A-Z])/g, " $1").trim()}
                                </div>
                                <div className="text-sm font-semibold text-slate-900">
                                  {value}
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Advantages */}
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                          Key Advantages
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {feature.advantages.map((advantage, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-2 text-sm"
                            >
                              <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                              <span className="text-slate-600">
                                {advantage}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">
                          Typical Applications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {feature.applications.map((app, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium"
                            >
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expand/Collapse Indicator */}
                  <div className="flex justify-center mt-6">
                    <div
                      className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-all duration-300 ${
                        activeFeature === index ? "rotate-180 bg-blue-100" : ""
                      }`}
                    >
                      <FaArrowRight
                        className={`text-slate-400 text-sm transition-transform duration-300 ${
                          activeFeature === index
                            ? "rotate-90 text-blue-500"
                            : ""
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Technology Showcase */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">
                  Why Liquid Ring Technology Leads the Industry
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaShieldAlt className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Proven Reliability</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Over 50 years of proven performance in demanding
                        industrial applications worldwide
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaLeaf className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Environmentally Safe</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Uses water as sealing medium, making it environmentally
                        friendly and safe for all applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FaRocket className="text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Superior Performance</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Delivers consistent vacuum levels up to 90% with
                        exceptional capacity handling
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                  <h4 className="text-xl font-bold mb-6 text-center">
                    Performance Metrics
                  </h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Maximum Vacuum Level</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[90%] h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                        </div>
                        <span className="font-bold">90%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Energy Efficiency</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[92%] h-full bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"></div>
                        </div>
                        <span className="font-bold">92%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Reliability Index</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full overflow-hidden">
                          <div className="w-[95%] h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
                        </div>
                        <span className="font-bold">95%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Principle Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Working Principle & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the liquid ring technology where liquid acts as a
              piston to create reliable vacuum performance with high capacity
              throughput
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-sm font-semibold text-blue-600 mb-8">
                <FaWater />
                <span>Liquid Ring Technology</span>
              </div>

              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                {workingPrinciple.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {workingPrinciple.description}
              </p>

              <div className="space-y-6">
                {workingPrinciple.steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-2">
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

            <div className="relative">
              <img
                src={productImageUrl}
                alt="Liquid Ring Vacuum Pump Working Principle"
                className="w-full h-auto rounded-2xl shadow-xl cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute top-4 right-4 space-y-2 hidden lg:block">
                <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-slate-700 shadow-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full inline-block mr-2"></div>
                  Eccentric Rotor
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-slate-700 shadow-lg">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full inline-block mr-2"></div>
                  Liquid Ring Chamber
                </div>
                <div className="bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 text-xs font-medium text-slate-700 shadow-lg">
                  <div className="w-2 h-2 bg-orange-500 rounded-full inline-block mr-2"></div>
                  Fixed Radial Blades
                </div>
              </div>
            </div>
          </div>

          {/* Technology Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl mb-6">
                <FaWater />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Water Ring Operation
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Generally water is used as the sealing liquid, creating a
                reliable and effective vacuum seal for consistent performance
              </p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Seal Medium:</span>
                  <span className="font-medium text-slate-900">Water</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Operation:</span>
                  <span className="font-medium text-slate-900">Continuous</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6">
                <FaChartLine />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                High Capacity Performance
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Delivers exceptional capacity up to 30,000 M³/Hr with vacuum
                levels up to 90% for demanding industrial applications
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">
                    Up to 30,000 M³/Hr capacity
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">90% vacuum achievement</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6">
                <FaGears />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Versatile Configuration
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Available in vertical configuration with multiple material
                options and sealing arrangements for specific applications
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">Vertical configuration</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">
                    Multiple materials available
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-xl flex items-center justify-center text-blue-500 text-2xl mb-6">
                <FaShieldAlt />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">
                Reliable Operation
              </h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Proven liquid ring technology provides consistent performance
                with minimal maintenance requirements across various industries
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">Proven technology</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <FaCheckCircle className="text-emerald-500" />
                  <span className="text-slate-600">Low maintenance</span>
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
              <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Liquid Ring Vacuum Pumps deliver exceptional performance with
                proven specifications designed for high-capacity, reliable
                operation in demanding industrial vacuum applications.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border-l-4 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-2xl" style={{ color: spec.color }}>
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">
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
                  </div>
                ))}
              </div>

              <div className="bg-slate-100 rounded-3xl p-12 mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-8">
                  Standard Performance Range
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">
                      Inlet/Outlet port sizes:
                    </span>
                    <span className="text-slate-900 font-bold">
                      40 – 125 mm (NB)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">
                      Vacuum ratings:
                    </span>
                    <span className="text-slate-900 font-bold">
                      67 – 53 mbar (a)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">
                      Max. Vacuum:
                    </span>
                    <span className="text-slate-900 font-bold">
                      Max. 53 mbar (a)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-medium">
                      MOC Options:
                    </span>
                    <span className="text-slate-900 font-bold">
                      CI, SS 304, SS 316, SS 316L
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm font-semibold text-blue-600">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-full text-sm font-semibold text-emerald-600">
                  <FaAward />
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full text-sm font-semibold text-orange-600">
                  <FaShieldAlt />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl p-8">
                <img
                  src={productImageUrl}
                  alt="Liquid Ring Vacuum Pump Technical Specifications"
                  className="w-full h-auto rounded-2xl shadow-xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute top-4 left-4 space-y-2 hidden lg:block">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Liquid Ring Technology
                  </div>
                  <div className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    High Capacity Operation
                  </div>
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Vertical Configuration
                  </div>
                  <div className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Multiple Material Options
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Reliable vacuum solutions for diverse industrial applications
              requiring high-capacity performance and consistent operation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "border-blue-500 bg-blue-50 shadow-lg"
                      : "border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-4xl">{app.image}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>
                  <FaArrowRight
                    className={`text-xl transition-all duration-300 ${
                      selectedApplication === index
                        ? "text-blue-500 translate-x-1"
                        : "text-slate-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-3xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
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
                      className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm"
                    >
                      <FaCheckCircle className="text-emerald-500" />
                      <span className="text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors duration-300">
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Liquid Ring Vacuum Pumps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Proven liquid ring technology for reliable high-capacity vacuum
              performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mx-auto mb-6">
                  {advantage.icon}
                </div>
                <div className="mb-6">
                  <div className="text-3xl font-bold text-slate-900 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 mt-1">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
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
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready for High-Capacity Vacuum Solutions?
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Connect with our engineering experts to discover how Liquid Ring
            Vacuum Pumps can enhance your processes with reliable performance,
            high capacity operation, and proven liquid ring technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg backdrop-blur-md transition-all duration-300">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-8 text-slate-300">
            <div className="flex items-center gap-2">
              <FaPhone className="text-blue-400" />
              <span>+91-99103-02163</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <span>sales@swamatics.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Noida, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center text-2xl transition-colors duration-300"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Liquid Ring Vacuum Pump - Water Ring Technology - Expanded View"
                  className="w-full h-auto rounded-xl shadow-lg"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Liquid Ring Vacuum Pump
                  </h3>
                  <p className="text-slate-600 mb-4">Water Ring Technology</p>
                  <div className="flex justify-center gap-6 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      Capacity: Up to 30,000 M³/Hr
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-medium">
                      Vacuum: Up to 90%
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-medium">
                      Operation: Liquid Ring
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

export default LiquidRingVaccumPumps;
