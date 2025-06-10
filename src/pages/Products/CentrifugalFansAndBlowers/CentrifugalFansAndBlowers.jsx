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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const CentrifugalFansAndBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaLayerGroup className="text-3xl text-blue-500" />,
      title: "Multi-Stage Capability",
      description:
        "Single stage up to 1800 mmwg, higher pressures achievable through multi-staging",
      details:
        "Advanced multi-stage design allows for achieving higher static pressures while maintaining efficiency across the entire operating range",
      benefit: "High pressure flexibility",
    },
    {
      icon: <FaWind className="text-3xl text-blue-500" />,
      title: "High Capacity Range",
      description:
        "Exceptional capacity handling up to 1,20,000 M³/Hr for large-scale operations",
      details:
        "Industry-leading capacity range designed for demanding industrial applications with consistent performance and reliability",
      benefit: "Maximum throughput",
    },
    {
      icon: <FaAtom className="text-3xl text-blue-500" />,
      title: "Special Materials",
      description:
        "Manufactured with special materials for gas conveying applications with superior durability",
      details:
        "Corrosion-resistant materials and specialized coatings ensure long service life in challenging gas handling environments",
      benefit: "Enhanced durability",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-500" />,
      title: "Advanced Sealing",
      description:
        "Equipped with mechanical and semi-mechanical seals for reliable operation",
      details:
        "Professional-grade sealing systems prevent leakage and ensure safe operation in gas conveying applications",
      benefit: "Leak-proof operation",
    },
  ];

  const applications = [
    {
      title: "ID/FD Fan Systems",
      description:
        "Induced Draft and Forced Draft fans for boiler and furnace applications",
      icon: <FaFire />,
      image: "🔥",
      benefits: [
        "Efficient combustion air supply",
        "Flue gas handling",
        "Temperature control",
      ],
    },
    {
      title: "Gas Conveying",
      description:
        "Positive conveying and negative suction for various gas types",
      icon: <FaGasPump />,
      image: "💨",
      benefits: [
        "Positive pressure conveying",
        "Negative suction capability",
        "Multi-gas compatibility",
      ],
    },
    {
      title: "Industrial Ventilation",
      description: "Large-scale ventilation systems for industrial facilities",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: ["Air quality control", "Dust extraction", "Fume removal"],
    },
    {
      title: "Power Generation",
      description:
        "Critical air and gas handling for power plants and utilities",
      icon: <FaBolt />,
      image: "⚡",
      benefits: [
        "Combustion air supply",
        "Cooling systems",
        "Emissions control",
      ],
    },
    {
      title: "Material Handling",
      description: "Pneumatic conveying systems for bulk material transport",
      icon: <FaBoxes />,
      image: "📦",
      benefits: [
        "Pneumatic transport",
        "Dust control",
        "Efficient material flow",
      ],
    },
    {
      title: "Process Industries",
      description:
        "Specialized applications in chemical and process industries",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Process gas handling",
        "Chemical compatibility",
        "Precision control",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "1,20,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Static Pressure",
      value: "Up to 1800 mmwg",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Multi-Stage",
      value: "Higher Pressures",
      icon: <FaLayerGroup />,
      color: "#f59e0b",
    },
    {
      parameter: "Application",
      value: "ID/FD Systems",
      icon: <FaWind />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Pressure",
      description:
        "Single stage up to 1800 mmwg with multi-stage options for higher pressures",
      icon: <FaTachometerAlt />,
      stat: "1800",
      unit: "mmwg",
    },
    {
      title: "Maximum Capacity",
      description:
        "Industry-leading capacity up to 1,20,000 M³/Hr for large operations",
      icon: <FaChartLine />,
      stat: "1,20,000",
      unit: "M³/Hr",
    },
    {
      title: "Dual Operation",
      description:
        "ID/FD capability for both positive conveying and negative suction",
      icon: <FaWind />,
      stat: "ID/FD",
      unit: "Compatible",
    },
    {
      title: "Special Materials",
      description:
        "Advanced materials and sealing for gas conveying applications",
      icon: <FaShieldAlt />,
      stat: "Special",
      unit: "MOC & Seals",
    },
  ];

  const productImageUrl = "/images/swam-centrifugal-fans-and-blowers.png";

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
        {/* Grid Pattern Background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Industrial Fans & Blowers</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              High-Performance
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Centrifugal Fans & Blowers
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10">
              SWAM Centrifugal Fans and Blowers deliver exceptional performance
              with static pressure up to 1800 mmwg in single stage and higher
              pressures through multi-staging. Designed for ID/FD applications
              with special materials and advanced sealing systems for reliable
              gas conveying operations.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  1,20,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  1800
                </div>
                <div className="text-sm text-slate-400 mt-1">mmwg Pressure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  ID/FD
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  Dual Capability
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] flex justify-center items-center">
              <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse" />
              <img
                src={productImageUrl}
                alt="Centrifugal Fans & Blowers - Industrial Air Movement Solutions"
                className="max-w-96 max-h-96 object-contain filter drop-shadow-2xl hover:scale-105 transition-transform duration-300 z-10 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-12 left-12 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 animate-bounce">
                  <FaWind />
                  <span>High Capacity</span>
                </div>
                <div
                  className="absolute top-24 right-8 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                >
                  <FaTachometerAlt />
                  <span>High Pressure</span>
                </div>
                <div
                  className="absolute bottom-16 left-8 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                >
                  <FaShieldAlt />
                  <span>Special Materials</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Centrifugal Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the engineering excellence that makes our centrifugal
              fans and blowers ideal for demanding industrial gas conveying
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white p-8 rounded-2xl shadow-md border border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-blue-300 group ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-xl border-blue-300"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-emerald-600 font-medium">
                    <FaCheckCircle className="text-sm" />
                    <span className="text-sm">{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-slate-700 text-sm leading-relaxed">
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

      {/* Technology Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Centrifugal Fan Technology Excellence
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advanced engineering and materials science combine to deliver
              superior performance in industrial air and gas movement
              applications
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full text-blue-700 font-medium mb-6">
                  <FaWind />
                  <span>Industrial Grade Performance</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Why Our Centrifugal Fans Excel
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  SWAM centrifugal fans and blowers are engineered for maximum
                  efficiency in industrial applications. Our advanced impeller
                  design and multi-stage capability deliver exceptional static
                  pressure performance while maintaining energy efficiency
                  across the entire operating range.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      Single
                    </span>
                    <span className="text-sm text-slate-600">Stage Design</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      Multi
                    </span>
                    <span className="text-sm text-slate-600">Stage Option</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      Special
                    </span>
                    <span className="text-sm text-slate-600">Materials</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Centrifugal Fan Technology"
                  className="w-full max-w-md mx-auto cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute top-8 left-8">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute -top-2 left-6 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                    Advanced Impeller
                  </div>
                </div>
                <div className="absolute top-1/2 right-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute -top-2 -right-20 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                    Multi-Stage Ready
                  </div>
                </div>
                <div className="absolute bottom-12 left-12">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                  <div className="absolute -top-2 left-6 bg-white px-3 py-1 rounded-lg shadow-md text-sm font-medium whitespace-nowrap">
                    Special Material Construction
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <FaLayerGroup className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Multi-Stage Capability
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Single stage delivers up to 1800 mmwg static pressure, with
                  multi-stage options for even higher pressure requirements
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">
                      Single Stage:
                    </span>
                    <span className="text-sm font-medium">Up to 1800 mmwg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-slate-600">Multi-Stage:</span>
                    <span className="text-sm font-medium">
                      Higher Pressures
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                  <FaChartLine className="text-emerald-600 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  High Capacity Design
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Industry-leading capacity up to 1,20,000 M³/Hr for large-scale
                  industrial applications with consistent performance
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">Maximum 1,20,000 M³/Hr</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">Scalable capacity range</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <FaWind className="text-cyan-600 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  ID/FD Applications
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Suitable for both Induced Draft and Forced Draft applications,
                  providing positive conveying and negative suction capabilities
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">Positive conveying</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">Negative suction</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                  <FaShieldAlt className="text-amber-600 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Advanced Materials & Sealing
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Special materials for gas conveying applications with
                  mechanical and semi-mechanical seals for reliable operation
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      Corrosion resistant materials
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-emerald-500 text-sm" />
                    <span className="text-sm">
                      Professional sealing systems
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                Our centrifugal fans and blowers deliver exceptional performance
                with industry-leading specifications designed for demanding
                industrial applications and gas conveying systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: `${spec.color}20`,
                          color: spec.color,
                        }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">
                          {spec.parameter}
                        </h4>
                        <div
                          className="text-lg font-semibold"
                          style={{ color: spec.color }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <FaCertificate className="text-blue-600" />
                  <span className="text-sm font-medium">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <FaAward className="text-amber-600" />
                  <span className="text-sm font-medium">CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200">
                  <FaShieldAlt className="text-emerald-600" />
                  <span className="text-sm font-medium">5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <img
                  src={productImageUrl}
                  alt="Centrifugal Fan Technical Specifications"
                  className="w-full cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    High Static Pressure
                  </div>
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Multi-Stage Capability
                  </div>
                  <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Special Materials
                  </div>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Advanced Sealing
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
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Powering critical industrial processes with reliable air and gas
              movement solutions across diverse applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-6 p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-2 border-blue-300 shadow-md"
                      : "bg-slate-50 border-2 border-transparent hover:bg-slate-100"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-4xl">{app.image}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-slate-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-slate-600">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`transition-colors duration-300 ${
                      selectedApplication === index
                        ? "text-blue-600"
                        : "text-slate-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
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

              <div className="grid grid-cols-1 gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-4 rounded-lg"
                    >
                      <FaCheckCircle className="text-emerald-500" />
                      <span className="font-medium text-slate-700">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Centrifugal Fans
            </h2>
            <p className="text-lg text-slate-600">
              Advanced engineering for superior industrial performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md border border-slate-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-2xl text-blue-600">{advantage.icon}</div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-slate-800">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-600 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
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
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Industrial Excellence?
          </h2>
          <p className="text-xl leading-relaxed text-slate-300 mb-12">
            Connect with our engineering experts to discover how our centrifugal
            fans and blowers can optimize your industrial air and gas movement
            applications with superior performance and reliability.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-slate-300">
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
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-2xl font-bold transition-colors duration-200 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-8">
              <div className="text-center mb-6">
                <img
                  src={modalImage}
                  alt="Centrifugal Fans & Blowers - Industrial Air Movement Solutions - Expanded View"
                  className="max-w-full max-h-96 object-contain mx-auto rounded-lg"
                />
                <div className="mt-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Centrifugal Fans & Blowers
                  </h3>
                  <p className="text-slate-600 mb-4">
                    High-Performance Industrial Air Movement Systems
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      Capacity: Up to 1,20,000 M³/Hr
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      Pressure: Up to 1800 mmwg Single Stage
                    </span>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      Applications: ID/FD Systems & Gas Conveying
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

export default CentrifugalFansAndBlowers;
