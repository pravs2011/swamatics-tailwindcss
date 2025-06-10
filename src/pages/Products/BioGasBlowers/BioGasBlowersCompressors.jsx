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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const BioGasBlowersCompressors = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="text-blue-500 text-2xl" />,
      title: "Dual Design Options",
      description:
        "Available in two specialized designs: Rotary lobe type and sliding vane compressors",
      details:
        "Choose between rotary lobe technology for high volume applications or sliding vane design for higher pressure requirements",
      benefit: "Design flexibility",
    },
    {
      icon: <FaAtom className="text-blue-500 text-2xl" />,
      title: "Multiple MOC Options",
      description:
        "Available in various materials of construction - CI, CS, SS and more",
      details:
        "Corrosion-resistant materials ensure long service life and compatibility with different bio gas compositions",
      benefit: "Material versatility",
    },
    {
      icon: <FaChartLine className="text-blue-500 text-2xl" />,
      title: "High Capacity Range",
      description:
        "Rotary bio-gas blowers handle up to 12,000 M³/Hr with superior efficiency",
      details:
        "Large capacity handling for industrial bio gas applications with consistent performance across the operating range",
      benefit: "High throughput",
    },
    {
      icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
      title: "Pressure Capability",
      description: "Sliding vane compressors deliver up to 3.0 bar pressure",
      details:
        "High pressure generation capability for demanding bio gas compression and transport applications",
      benefit: "High pressure output",
    },
  ];

  const applications = [
    {
      title: "Waste Treatment Plants",
      description:
        "Bio gas collection and compression from wastewater treatment facilities",
      icon: <FaRecycle />,
      image: "🏭",
      benefits: ["Efficient gas collection", "Odor control", "Energy recovery"],
    },
    {
      title: "Landfill Gas Recovery",
      description: "Extraction and compression of methane from landfill sites",
      icon: <FaWarehouse />,
      image: "⛽",
      benefits: [
        "Methane capture",
        "Environmental protection",
        "Energy generation",
      ],
    },
    {
      title: "Agricultural Biogas",
      description: "Processing biogas from agricultural waste and digestion",
      icon: <FaSeedling />,
      image: "🌱",
      benefits: ["Farm waste utilization", "Renewable energy", "Cost savings"],
    },
    {
      title: "Industrial Applications",
      description: "Bio gas handling for industrial energy generation",
      icon: <FaIndustry />,
      image: "🏗️",
      benefits: [
        "Industrial energy supply",
        "Process heating",
        "Power generation",
      ],
    },
    {
      title: "Gas Distribution",
      description: "Compression for bio gas distribution networks",
      icon: <FaGasPump />,
      image: "🔄",
      benefits: [
        "Network pressure maintenance",
        "Efficient distribution",
        "System reliability",
      ],
    },
    {
      title: "Energy Recovery",
      description: "Bio gas processing for renewable energy systems",
      icon: <FaBolt />,
      image: "⚡",
      benefits: ["Clean energy", "Carbon reduction", "Sustainable power"],
    },
  ];

  const specifications = [
    {
      parameter: "Rotary Capacity",
      value: "Up to 12,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Rotary Pressure",
      value: "Up to 1.0 bar g",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vane Capacity",
      value: "4,500 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Vane Pressure",
      value: "Up to 3.0 bar g",
      icon: <FaGasPump />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Dual Technology",
      description:
        "Choice between rotary lobe and sliding vane technology for optimal application fit",
      icon: <FaGears />,
      stat: "2",
      unit: "Design Types",
    },
    {
      title: "High Pressure",
      description: "Sliding vane compressors deliver up to 3.0 bar pressure",
      icon: <FaGasPump />,
      stat: "3.0",
      unit: "Bar Pressure",
    },
    {
      title: "Large Capacity",
      description: "Rotary blowers handle up to 12,000 M³/Hr capacity",
      icon: <FaTachometerAlt />,
      stat: "12,000",
      unit: "M³/Hr",
    },
    {
      title: "Material Options",
      description: "Multiple MOC options including CI, CS, SS for durability",
      icon: <FaShieldAlt />,
      stat: "Multiple",
      unit: "MOC Options",
    },
  ];

  const productImageUrl = "/images/bio-Gas-Blowers-Compressors.jpg";

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
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Bio Gas Technology</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6">
              Advanced
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Bio Gas Blowers & Compressors
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              SWAM Bio Gas Blowers and Compressors are available in wide range
              with two specialized designs - Rotary lobe type and sliding vane
              compressors. Available in various MOCs (CI, CS, SS) for optimal
              performance in renewable energy applications.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  12,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  3.0
                </div>
                <div className="text-sm text-slate-400 mt-1">Bar Pressure</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  2
                </div>
                <div className="text-sm text-slate-400 mt-1">Design Types</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none text-base">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full border border-white/20 backdrop-blur-sm font-semibold hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-base">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute  inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <img
                src={productImageUrl}
                alt="Bio Gas Blowers & Compressors - Renewable Energy Solutions"
                className="relative z-10 max-w-full h-auto rounded-2xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-500"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute z-10 -top-4 -left-4 bg-white backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-medium shadow-lg">
                <FaLeaf className="inline mr-2 text-green-500" />
                Eco-Friendly
              </div>
              <div className="absolute z-10 top-1/2 -right-6 bg-white backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-medium shadow-lg">
                <FaGears className="inline mr-2 text-blue-500" />
                Dual Design
              </div>
              <div className="absolute z-10 -bottom-4 left-1/2 -translate-x-1/2 bg-white backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full text-black text-sm font-medium shadow-lg">
                <FaShieldAlt className="inline mr-2 text-purple-500" />
                Multiple MOCs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
              Bio Gas Technology Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover the specialized technologies that make our bio gas
              blowers and compressors perfect for renewable energy applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-blue-200 group ${
                  activeFeature === index
                    ? "border-blue-500 shadow-xl scale-105"
                    : "border-transparent"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 font-medium">
                    <FaCheckCircle className="text-sm" />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="mt-4 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-700 text-sm leading-relaxed">
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
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
              Advanced Bio Gas Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Specialized blower and compressor technology designed for
              efficient bio gas handling and renewable energy applications
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaLeaf />
                  <span>Renewable Energy Optimized</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Why Our Bio Gas Solutions Excel
                </h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  SWAM bio gas blowers and compressors are engineered
                  specifically for bio gas applications, providing reliable
                  performance in renewable energy systems. Our dual design
                  approach offers both rotary lobe and sliding vane technologies
                  to meet diverse application requirements with superior
                  efficiency.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      Rotary
                    </span>
                    <span className="text-sm text-gray-500">
                      Lobe Technology
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      Sliding
                    </span>
                    <span className="text-sm text-gray-500">Vane Design</span>
                  </div>
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-blue-600">
                      Multiple
                    </span>
                    <span className="text-sm text-gray-500">MOC Options</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Bio Gas Blower & Compressor Technology"
                  className="w-full rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Rotary Lobe Design
                </div>
                <div className="absolute top-1/2 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Sliding Vane Option
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700">
                  Corrosion Resistant MOC
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <FaGears className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Rotary Lobe Technology
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  High-capacity rotary lobe design for bio gas applications,
                  delivering up to 12,000 M³/Hr with pressure up to 1.0 bar
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Capacity:</span>
                    <span className="font-semibold text-gray-700">
                      Up to 12,000 M³/Hr
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pressure:</span>
                    <span className="font-semibold text-gray-700">
                      Up to 1.0 bar g
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                  <FaWind className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Sliding Vane Design
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  High-pressure sliding vane compressors for demanding bio gas
                  applications, delivering up to 3.0 bar pressure
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">4,500 M³/Hr capacity</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Up to 3.0 bar pressure
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <FaShieldAlt className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Material Options
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Available in various materials of construction including CI,
                  CS, SS for optimal corrosion resistance and longevity
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Cast Iron (CI) construction
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Stainless Steel (SS) option
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                  <FaLeaf className="text-white text-xl" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  Eco-Friendly Operation
                </h4>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  Designed for renewable energy applications, supporting
                  sustainable bio gas utilization and environmental protection
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">Clean energy support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">
                      Environmental compliance
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
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Excellence
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our bio gas blowers and compressors deliver exceptional
                performance for renewable energy applications, providing
                reliable gas handling with dual technology options for diverse
                requirements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: `${spec.color}20`,
                          color: spec.color,
                        }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm">
                          {spec.parameter}
                        </h4>
                        <div
                          className="font-bold"
                          style={{ color: spec.color }}
                        >
                          {spec.value}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaAward />
                  <span>CE Certified</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  <FaShieldAlt />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <img
                  src={productImageUrl}
                  alt="Bio Gas Technical Specifications"
                  className="w-full rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute -top-3 -left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Dual Design Technology
                </div>
                <div className="absolute -top-3 -right-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  High Pressure Capability
                </div>
                <div className="absolute -bottom-3 -left-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Multiple MOC Options
                </div>
                <div className="absolute -bottom-3 -right-3 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Renewable Energy Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Bio Gas Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Powering sustainable energy solutions across diverse bio gas
              processing and utilization applications
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg"
                      : "bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {app.title}
                      </h4>
                      <p className="text-gray-600 text-sm">{app.description}</p>
                    </div>
                    <FaArrowRight className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
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
                      className="flex items-center gap-3 bg-white/50 p-3 rounded-xl"
                    >
                      <FaCheckCircle className="text-green-500" />
                      <span className="text-gray-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Bio Gas Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Advanced technology for superior renewable energy performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <div className="text-blue-600 text-2xl">{advantage.icon}</div>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-blue-600">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-700 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Sustainable Energy Solutions?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            Connect with our technical experts to discover how our bio gas
            blowers and compressors can optimize your renewable energy
            applications with reliable performance and environmental benefits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer border-none text-base">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-500/20 text-white px-8 py-4 rounded-full border border-blue-400/30 backdrop-blur-sm font-semibold hover:bg-blue-500/30 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-base">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-blue-100">
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
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors duration-200 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-6">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Bio Gas Blowers & Compressors - Renewable Energy Solutions - Expanded View"
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Bio Gas Blowers & Compressors
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Advanced Renewable Energy Processing Systems
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                      Rotary: Up to 12,000 M³/Hr & 1.0 bar
                    </span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      Sliding Vane: 4,500 M³/Hr & 3.0 bar
                    </span>
                    <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                      Materials: CI, CS, SS Options Available
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

export default BioGasBlowersCompressors;
