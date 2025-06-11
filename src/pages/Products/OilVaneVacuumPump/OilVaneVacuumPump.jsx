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
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const OilVaneVacuumPump = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaGears className="w-6 h-6 text-blue-500" />,
      title: "Positive Displacement Technology",
      description:
        "Advanced rotary vane design with sliding vanes in a rotor rotating within a cavity for reliable vacuum performance",
      details:
        "Eccentrically mounted rotor with slots rotates in cylindrical housing with precisely fitting sliding vanes that move in slots and separate individual working chambers",
      benefit: "Reliable positive displacement",
    },
    {
      icon: <FaOilCan className="w-6 h-6 text-blue-500" />,
      title: "Oil-Lubricated Operation",
      description:
        "Oil lubrication ensures smooth operation and sealing for consistent vacuum performance and extended equipment life",
      details:
        "Chemical series design handles higher amounts of condensable vapor while maintaining optimal lubrication for superior performance",
      benefit: "Enhanced sealing & longevity",
    },
    {
      icon: <FaTachometerAlt className="w-6 h-6 text-blue-500" />,
      title: "High Vacuum Achievement",
      description:
        "Achieves high vacuum up to 10″ Torr at suction port for demanding vacuum applications",
      details:
        "Consistent vacuum performance with capability to handle varying process conditions and condensable vapors effectively",
      benefit: "Deep vacuum capability",
    },
    {
      icon: <FaTools className="w-6 h-6 text-blue-500" />,
      title: "Chemical Series Design",
      description:
        "Specially designed to handle higher amounts of condensable vapor in challenging chemical processing environments",
      details:
        "Enhanced design prevents oil contamination and maintains vacuum levels even when processing condensable vapors",
      benefit: "Chemical process ready",
    },
  ];

  const applications = [
    {
      title: "Vacuum Distillation",
      description:
        "Essential for distillation processes requiring precise vacuum control and condensable vapor handling",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Precise vacuum control",
        "Condensable vapor handling",
        "Process efficiency",
      ],
    },
    {
      title: "Filtration Systems",
      description:
        "Vacuum filtration applications for solid-liquid separation in various industries",
      icon: <FaLayerGroup />,
      image: "🔍",
      benefits: [
        "Solid-liquid separation",
        "Enhanced filtration",
        "Process automation",
      ],
    },
    {
      title: "Jewelry Casting",
      description:
        "Precision vacuum casting for jewelry manufacturing and precious metal processing",
      icon: <FaGem />,
      image: "💎",
      benefits: [
        "Precision casting",
        "Bubble-free results",
        "Quality finishing",
      ],
    },
    {
      title: "Vacuum Drying",
      description:
        "Low-temperature drying processes for heat-sensitive materials and pharmaceuticals",
      icon: <FaThermometerHalf />,
      image: "🌡️",
      benefits: [
        "Low temperature drying",
        "Heat-sensitive materials",
        "Moisture removal",
      ],
    },
    {
      title: "Degassing Applications",
      description:
        "Removal of dissolved gases from liquids and degassing of materials under vacuum",
      icon: <FaWind />,
      image: "💨",
      benefits: ["Gas removal", "Material degassing", "Process optimization"],
    },
    {
      title: "Food Processing",
      description:
        "Vacuum packaging, preservation, and processing applications in food industry",
      icon: <FaUtensils />,
      image: "🍕",
      benefits: [
        "Vacuum packaging",
        "Food preservation",
        "Extended shelf life",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Vacuum",
      value: "10″ Torr",
      icon: <FaTachometerAlt />,
      color: "#3b82f6",
    },
    {
      parameter: "Operation Type",
      value: "Oil-Lubricated",
      icon: <FaOilCan />,
      color: "#10b981",
    },
    {
      parameter: "Design Type",
      value: "Rotary Vane",
      icon: <FaGears />,
      color: "#f59e0b",
    },
    {
      parameter: "Application",
      value: "Chemical Series",
      icon: <FaFlask />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "High Vacuum Performance",
      description:
        "Achieves up to 10″ Torr vacuum with consistent performance for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "10″",
      unit: "Torr Vacuum",
    },
    {
      title: "Condensable Vapor Handling",
      description:
        "Chemical series design effectively handles higher amounts of condensable vapor without performance degradation",
      icon: <FaFlask />,
      stat: "High",
      unit: "Vapor Capacity",
    },
    {
      title: "Reliable Operation",
      description:
        "Oil-lubricated rotary vane technology provides reliable and consistent vacuum performance",
      icon: <FaShieldAlt />,
      stat: "Proven",
      unit: "Reliability",
    },
    {
      title: "Versatile Applications",
      description:
        "Suitable for diverse applications from vacuum distillation to food processing and jewelry casting",
      icon: <FaTools />,
      stat: "Multi",
      unit: "Application",
    },
  ];

  const workingPrinciple = {
    title: "Rotary Vane Vacuum Technology",
    description:
      "Oil-lubricated rotary vane vacuum pumps operate through positive displacement action. An eccentrically mounted rotor with sliding vanes rotates in a cylindrical housing, creating variable chamber volumes that compress and evacuate gas effectively.",
    steps: [
      {
        step: "1",
        title: "Rotor Rotation",
        description:
          "Eccentric rotor with sliding vanes rotates in cylindrical housing creating variable chambers",
      },
      {
        step: "2",
        title: "Volume Variation",
        description:
          "Sliding vanes move in slots separating working chambers with changing volumes",
      },
      {
        step: "3",
        title: "Gas Compression",
        description:
          "Positive displacement action compresses and evacuates gas achieving high vacuum levels",
      },
    ],
  };

  const productImageUrl = "/images/uil-Vane-Vacuum-Pump.jpg";

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
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-[fadeInUp_0.8s_ease-out]">
              <FaStar className="text-blue-400" />
              <span>Proven Vacuum Technology</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Oil Vane
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Vacuum Pump
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              SWAM Oil Vane Vacuum Pumps are oil-lubricated rotary vane machines
              featuring positive-displacement technology with sliding vanes for
              reliable vacuum performance. Chemical series design handles higher
              amounts of condensable vapor while achieving vacuum up to 10″ Torr
              for demanding industrial applications.
            </p>

            <div className="flex gap-8 mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  10″
                </div>
                <div className="text-sm text-slate-400 mt-1">Torr Vacuum</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  Oil
                </div>
                <div className="text-sm text-slate-400 mt-1">Lubricated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  Chemical
                </div>
                <div className="text-sm text-slate-400 mt-1">Series</div>
              </div>
            </div>

            <div className="flex gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold bg-white/10 text-white border border-white/20 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-0.5">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <img
                src={productImageUrl}
                alt="Oil Vane Vacuum Pump - Rotary Vane Technology"
                className="relative w-full h-auto rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse">
                  <FaGears className="text-blue-400" />
                  <span>Rotary Vane</span>
                </div>
                <div
                  className="absolute top-20 right-6 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <FaOilCan className="text-green-400" />
                  <span>Oil Lubricated</span>
                </div>
                <div
                  className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <FaFlask className="text-red-400" />
                  <span>Chemical Series</span>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Rotary Vane Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the proven engineering features that make our Oil Vane
              Vacuum Pumps the reliable choice for condensable vapor handling
              and high vacuum applications across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-6 shadow-md border border-slate-200 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-xl scale-105"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
                <div className="relative">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-blue-500 text-white"
                        : "bg-blue-50 text-blue-500"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg animate-[slideDown_0.3s_ease-out]">
                      <p className="text-sm text-slate-700 leading-relaxed">
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

      {/* Working Principle Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Working Principle & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the rotary vane technology with oil lubrication that
              delivers reliable vacuum performance with effective condensable
              vapor handling capability
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-semibold mb-6">
                  <FaGears />
                  <span>Rotary Vane Technology</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  {workingPrinciple.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-800 mb-2">
                          {step.title}
                        </h4>
                        <p className="text-slate-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Oil Vane Vacuum Pump Working Principle"
                  className="w-full h-auto rounded-2xl shadow-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-6 left-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-6 left-0 whitespace-nowrap bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      Sliding Vanes
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-6">
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div className="absolute top-6 right-0 whitespace-nowrap bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      Oil Lubrication
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                    <div
                      className="w-3 h-3 bg-red-500 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                      Eccentric Rotor
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-xl flex items-center justify-center mb-4">
                  <FaOilCan className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Oil Lubrication System
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Oil lubrication ensures smooth operation, effective sealing,
                  and extended equipment life for reliable vacuum performance
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      Lubrication:
                    </span>
                    <span className="text-slate-700 font-semibold">
                      Oil Based
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">
                      Operation:
                    </span>
                    <span className="text-slate-700 font-semibold">
                      Continuous
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <FaTachometerAlt className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  High Vacuum Performance
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Achieves vacuum up to 10″ Torr at suction port with consistent
                  performance for demanding applications
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>10″ Torr vacuum capability</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Consistent performance</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <FaFlask className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Chemical Series Design
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Specially designed to handle higher amounts of condensable
                  vapor without compromising vacuum levels or equipment
                  performance
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Condensable vapor handling</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Chemical process ready</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-slate-100 text-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <FaShieldAlt className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">
                  Reliable Operation
                </h4>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Proven rotary vane technology with positive displacement
                  action provides dependable vacuum performance across various
                  applications
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Positive displacement</span>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 text-sm">
                    <FaCheckCircle className="w-4 h-4" />
                    <span>Proven technology</span>
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
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Technical Specifications
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Oil Vane Vacuum Pumps deliver exceptional vacuum performance
                with proven specifications designed for reliability, condensable
                vapor handling, and consistent operation in demanding industrial
                applications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3">
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
                        <h4 className="font-semibold text-slate-800">
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

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-800 mb-4">
                  Key Performance Features
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>High vacuum up to 10″ Torr at suction port</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>
                      Chemical series design for condensable vapor handling
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>
                      Oil lubrication for smooth operation and sealing
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-700">
                    <FaCheckCircle className="text-green-500 w-5 h-5" />
                    <span>
                      Combination with Roots Pump for higher vacuum if required
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-medium">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full text-green-600 font-medium">
                  <FaAward />
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full text-purple-600 font-medium">
                  <FaShieldAlt />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <img
                  src={productImageUrl}
                  alt="Oil Vane Vacuum Pump Technical Specifications"
                  className="w-full h-auto rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Rotary Vane Technology
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Oil Lubricated Operation
                  </div>
                  <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Chemical Series Design
                  </div>
                  <div className="absolute bottom-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    High Vacuum Capability
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Versatile vacuum solutions for diverse industrial applications
              requiring reliable performance and effective condensable vapor
              handling
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 rounded-xl cursor-pointer transition-all duration-300 border-2 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-200 shadow-lg"
                      : "bg-white border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-4xl">{app.image}</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-800 mb-1">
                      {app.title}
                    </h4>
                    <p className="text-slate-600 text-sm">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`transition-colors duration-300 ${
                      selectedApplication === index
                        ? "text-blue-500"
                        : "text-slate-400"
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-slate-600">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm"
                    >
                      <FaCheckCircle className="text-green-500 w-5 h-5" />
                      <span className="text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Oil Vane Vacuum Pumps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Proven oil-lubricated rotary vane technology for reliable vacuum
              performance and condensable vapor handling
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-500">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Reliable Vacuum Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-10 leading-relaxed">
            Connect with our engineering experts to discover how Oil Vane Vacuum
            Pumps can enhance your processes with reliable performance,
            effective condensable vapor handling, and proven rotary vane
            technology for demanding applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-blue-100">
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
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center text-xl font-bold hover:bg-opacity-70 transition-all duration-200 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-4">
                <img
                  src={modalImage}
                  alt="Oil Vane Vacuum Pump - Rotary Vane Technology - Expanded View"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="lg:w-80 p-6 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  Oil Vane Vacuum Pump
                </h3>
                <p className="text-slate-600 mb-4">Rotary Vane Technology</p>
                <div className="space-y-2">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Vacuum: Up to 10″ Torr
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium ml-2">
                    Type: Oil Lubricated
                  </span>
                  <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Series: Chemical
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

export default OilVaneVacuumPump;
