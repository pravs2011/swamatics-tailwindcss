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
  FaExpandArrowsAlt,
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
  FaCube,
  FaPlug,
  FaMedkit,
  FaTable,
  FaFilter,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const VaccumSystemsPackages = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaLayerGroup className="feature-icon" />,
      title: "Complete Turnkey Solutions",
      description:
        "Complete vacuum system packages with backup pumps, vacuum boosters, condensers, gauges, switches, and starter panels",
      details:
        "Integrated systems designed to deliver guaranteed performance as per client requirements with all necessary components included",
      benefit: "Total package solution",
    },
    {
      icon: <FaChartLine className="feature-icon" />,
      title: "Wide Capacity Range",
      description:
        "Vacuum systems ranging from 150 to 52,000 M³/Hr with vacuum levels up to 10⁻⁴ mbar and lower",
      details:
        "Comprehensive range of vacuum systems to suit various industrial applications with flexible capacity and vacuum level options",
      benefit: "Scalable performance",
    },
    {
      icon: <FaGears className="feature-icon" />,
      title: "Multi-Stage Configuration",
      description:
        "Combination of backup pumps with one to five boosters plus condenser cash pot for enhanced performance",
      details:
        "Flexible multi-stage systems allowing for optimal vacuum performance through strategic booster combinations",
      benefit: "Enhanced vacuum levels",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Guaranteed Performance",
      description:
        "Swam delivers package performance exactly as per client requirements with proven reliability",
      details:
        "Comprehensive testing and quality assurance ensures that vacuum systems meet specified performance parameters",
      benefit: "Reliable operation",
    },
  ];

  const applications = [
    {
      title: "Drying Applications",
      description:
        "Industrial drying processes requiring precise vacuum control and efficient moisture removal",
      icon: <FaThermometerHalf />,
      image: "🌡️",
      benefits: [
        "Freeze drying systems",
        "Pharmaceutical drying",
        "Food dehydration",
      ],
    },
    {
      title: "Chemical Processing",
      description:
        "Distillation, crystallization, and chemical reaction processes requiring high vacuum",
      icon: <FaFlask />,
      image: "⚗️",
      benefits: [
        "Chemical distillation",
        "Reactor evacuation",
        "Solvent recovery",
      ],
    },
    {
      title: "Electronics & Semiconductors",
      description:
        "Semiconductor manufacturing and electronic device production requiring ultra-clean vacuum",
      icon: <FaMicrochip />,
      image: "🔌",
      benefits: [
        "Semiconductor fabrication",
        "Electronic component production",
        "Clean room applications",
      ],
    },
    {
      title: "Sterilization Processes",
      description:
        "Ethylene oxide sterilization and medical device sterilization applications",
      icon: <FaMedkit />,
      image: "🏥",
      benefits: [
        "Ethylene oxide sterilization",
        "Medical device processing",
        "Pharmaceutical sterilization",
      ],
    },
    {
      title: "Bio-Fuels Production",
      description:
        "Bio-fuel processing and renewable energy applications requiring vacuum systems",
      icon: <FaSeedling />,
      image: "🌱",
      benefits: [
        "Bio-fuel distillation",
        "Renewable energy processing",
        "Green technology applications",
      ],
    },
    {
      title: "Oil & Gas Processing",
      description:
        "Filtration of transformer oil, waste lube oil, and petroleum product processing",
      icon: <FaOilCan />,
      image: "🛢️",
      benefits: [
        "Transformer oil filtration",
        "Waste lube oil processing",
        "Petroleum refining",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Maximum Capacity",
      value: "52,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 10⁻⁴ mbar",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Minimum Capacity",
      value: "150 M³/Hr",
      icon: <FaWind />,
      color: "#f59e0b",
    },
    {
      parameter: "Booster Stages",
      value: "1 to 5 Boosters",
      icon: <FaLayerGroup />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Ultra-High Vacuum",
      description:
        "Achieves vacuum levels up to 10⁻⁴ mbar and lower with multi-stage booster configuration",
      icon: <FaTachometerAlt />,
      stat: "10⁻⁴",
      unit: "mbar",
    },
    {
      title: "High Displacement",
      description:
        "Exceptional pumping capacity up to 52,000 M³/Hr for large-scale vacuum operations",
      icon: <FaChartLine />,
      stat: "52,000",
      unit: "M³/Hr",
    },
    {
      title: "Complete Package",
      description:
        "Turnkey solution with all components including backup pumps, boosters, and controls",
      icon: <FaLayerGroup />,
      stat: "Complete",
      unit: "System",
    },
    {
      title: "Flexible Configuration",
      description:
        "Multi-stage systems with 1 to 5 boosters for optimized performance requirements",
      icon: <FaGears />,
      stat: "1-5",
      unit: "Boosters",
    },
  ];

  const systemComponents = [
    {
      component: "Backup Pump",
      description: "Primary vacuum pump providing initial evacuation",
      icon: <FaGasPump />,
    },
    {
      component: "Vacuum Boosters",
      description: "1-5 boosters for enhanced vacuum performance",
      icon: <FaRocket />,
    },
    {
      component: "Condensers",
      description: "Vapor condensation and recovery systems",
      icon: <FaSnowflake />,
    },
    {
      component: "Gauges & Switches",
      description: "Monitoring and control instrumentation",
      icon: <FaTachometerAlt />,
    },
    {
      component: "Starter Panels",
      description: "Electrical control and automation systems",
      icon: <FaPlug />,
    },
    {
      component: "Cash Pot",
      description: "Condenser cash pot for efficient operation",
      icon: <FaWarehouse />,
    },
  ];

  const workingPrinciple = {
    title: "Vacuum Systems & Packages Technology",
    description:
      "Complete turnkey vacuum systems combining backup pumps with multiple vacuum boosters to achieve ultra-high vacuum levels. The system includes all necessary components for guaranteed performance as per client requirements.",
    steps: [
      {
        step: "1",
        title: "Primary Evacuation",
        description:
          "Backup pump creates initial vacuum while system components work in coordination",
      },
      {
        step: "2",
        title: "Multi-Stage Boosting",
        description:
          "1-5 vacuum boosters progressively enhance vacuum levels for ultra-high performance",
      },
      {
        step: "3",
        title: "System Integration",
        description:
          "Complete package with condensers, controls, and monitoring ensures optimal operation",
      },
    ],
  };

  const productImageUrl = "/images/Vacuum-Systems-Packages.jpg";

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
        <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-[fadeInUp_0.8s_ease-out]">
              <FaStar className="text-blue-400" />
              <span>Complete Turnkey Solutions</span>
            </div>
            <h1 className="text-6xl font-extrabold leading-tight mb-6 animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
              Vacuum Systems
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                & Packages
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
              SWAM offers complete turnkey vacuum system packages with very high
              vacuums. The system consists of backup pump with vacuum boosters,
              condensers, gauges, switches, starter panels etc. delivering
              package performance as per client requirements with multi-stage
              configurations.
            </p>

            <div className="flex gap-8 mb-10 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  52,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  10⁻⁴
                </div>
                <div className="text-sm text-slate-400 mt-1">mbar Vacuum</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Turnkey
                </div>
                <div className="text-sm text-slate-400 mt-1">Solutions</div>
              </div>
            </div>

            <div className="flex gap-4 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 border-none cursor-pointer">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold border border-white/20 backdrop-blur-xl hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-3xl"></div>
              <img
                src={productImageUrl}
                alt="Vacuum Systems & Packages - Complete Turnkey Solutions"
                className="relative w-full max-w-md rounded-2xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 animate-[float_3s_ease-in-out_infinite]">
                  <FaLayerGroup />
                  <span>Complete Package</span>
                </div>
                <div className="absolute top-1/2 -right-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 animate-[float_3s_ease-in-out_infinite_1s]">
                  <FaRocket />
                  <span>Multi-Stage Boosters</span>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 text-white text-sm font-medium flex items-center gap-2 animate-[float_3s_ease-in-out_infinite_2s]">
                  <FaChartLine />
                  <span>High Performance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Complete Vacuum System Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover our comprehensive vacuum systems and packages that
              deliver guaranteed performance with complete turnkey solutions
              including all necessary components for ultra-high vacuum
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`relative p-6 bg-white rounded-xl border border-slate-200 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-blue-300 ${
                  activeFeature === index
                    ? "ring-2 ring-blue-500 shadow-lg border-blue-300"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 transition-all duration-300 ${
                    activeFeature === index
                      ? "bg-blue-500 text-white"
                      : "bg-blue-100 text-blue-600"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                  <FaCheckCircle className="w-4 h-4" />
                  <span>{feature.benefit}</span>
                </div>
                {activeFeature === index && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      {feature.details}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              System Components & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the complete vacuum system package components that
              work together to deliver guaranteed performance for demanding
              industrial vacuum applications
            </p>
          </div>

          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaLayerGroup />
                  <span>Complete System Package</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-slate-800 mb-2">
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
                  alt="Vacuum Systems Components and Technology"
                  className="w-full rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-4 left-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 left-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800 whitespace-nowrap">
                      Vacuum Boosters
                    </div>
                  </div>
                  <div className="absolute top-1/2 right-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800 whitespace-nowrap">
                      Backup Pump
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-slate-800 whitespace-nowrap">
                      Control System
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:border-blue-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-lg mb-4">
                    {component.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {component.component}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {component.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Vacuum Systems & Packages deliver exceptional ultra-high vacuum
                performance with proven specifications designed for demanding
                applications requiring complete turnkey solutions and guaranteed
                performance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-blue-600">{spec.icon}</div>
                      <h4 className="font-semibold text-slate-800">
                        {spec.parameter}
                      </h4>
                    </div>
                    <div className="text-lg font-bold text-slate-900">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Standard System Configuration
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-700">
                      Capacity Range:
                    </span>
                    <span className="font-bold text-slate-900">
                      150 - 52,000 M³/Hr
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-700">
                      Vacuum Level:
                    </span>
                    <span className="font-bold text-slate-900">
                      Up to 10⁻⁴ mbar & lower
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-200">
                    <span className="font-medium text-slate-700">
                      Booster Stages:
                    </span>
                    <span className="font-bold text-slate-900">
                      1 to 5 Boosters
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-slate-700">
                      Package Type:
                    </span>
                    <span className="font-bold text-slate-900">
                      Complete Turnkey
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-2 rounded-lg">
                  <FaCertificate />
                  <span className="font-medium">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-2 rounded-lg">
                  <FaAward />
                  <span className="font-medium">CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-2 rounded-lg">
                  <FaShieldAlt />
                  <span className="font-medium">Guaranteed Performance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Vacuum Systems & Packages Technical Specifications"
                  className="w-full rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Complete Package
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Multi-Stage Design
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Guaranteed Performance
                      </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg text-center">
                      <div className="text-xs font-medium text-slate-600">
                        Turnkey Solution
                      </div>
                    </div>
                  </div>
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Complete vacuum system solutions for diverse industrial
              applications requiring ultra-high vacuum performance and reliable
              operation across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-300 shadow-lg"
                      : "bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-slate-800 mb-2">
                        {app.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {app.description}
                      </p>
                    </div>
                    <FaArrowRight
                      className={`transition-transform duration-300 ${
                        selectedApplication === index
                          ? "text-blue-600 rotate-90"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg"
                    >
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center gap-2">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Additional Applications Grid */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              More Applications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaTable className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  Pervaporation
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaAtom className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  Polymerization
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaFlask className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  Fatty Acids & Alcohols
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaIndustry className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  Reactor Service
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaFilter className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  Filtration Systems
                </span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 cursor-pointer">
                <FaGlobe className="text-2xl" />
                <span className="text-sm font-medium text-center">
                  And Many More
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Vacuum Systems & Packages
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Complete turnkey vacuum solutions delivering guaranteed
              performance with ultra-high vacuum capability and comprehensive
              system integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-xl mb-4">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-slate-900 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm font-medium text-slate-500 mt-1">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">
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

      {/* Salient Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Salient Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive features that make SWAM Vacuum Systems & Packages
              the preferred choice for complete turnkey vacuum solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-lg mb-4">
                <FaLayerGroup />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Complete Turnkey Package
              </h4>
              <p className="text-slate-600 leading-relaxed">
                All components included: backup pumps, boosters, condensers,
                gauges, switches, and starter panels
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-lg mb-4">
                <FaShieldAlt />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Guaranteed Performance
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Swam delivers package performance exactly as per client
                requirements with proven reliability
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500 text-white rounded-lg mb-4">
                <FaGears />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Multi-Stage Configuration
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Flexible combination of 1 to 5 vacuum boosters with condenser
                cash pot for enhanced performance
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-lg mb-4">
                <FaChartLine />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Wide Operating Range
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Capacity from 150 to 52,000 M³/Hr with vacuum up to 10⁻⁴ mbar
                and lower
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-lg mb-4">
                <FaTools />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Auxiliary Equipment Design
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Improves backing pump performance with increased capacity and
                reduced pumping down time
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-500 text-white rounded-lg mb-4">
                <FaRocket />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                High-Speed Operation
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Extremely small working clearances enable high-speed operation
                without mechanical wear and tear
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-600 to-gray-800">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-white">
            <h2 className="text-4xl font-bold mb-6">
              Ready for Complete Vacuum Solutions?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with our engineering experts to discover how our complete
              Vacuum Systems & Packages can enhance your processes with
              guaranteed performance, turnkey solutions, and ultra-high vacuum
              capability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-blue-50 hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Get Expert Consultation</span>
              </button>
              <button className="inline-flex items-center gap-3 bg-transparent text-white px-8 py-4 rounded-full font-semibold border-2 border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download System Brochure</span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center text-blue-100">
              <div className="flex items-center justify-center gap-3">
                <FaPhone className="text-blue-300" />
                <span>+91-99103-02163</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaEnvelope className="text-blue-300" />
                <span>sales@swamatics.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt className="text-blue-300" />
                <span>Noida, India</span>
              </div>
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
            className="relative bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-4">
              <div className="relative">
                <img
                  src={modalImage}
                  alt="Vacuum Systems & Packages - Complete Turnkey Solutions - Expanded View"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Vacuum Systems & Packages
                  </h3>
                  <p className="text-blue-200 mb-4">
                    Complete Turnkey Solutions
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      Capacity: 150 - 52,000 M³/Hr
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      Vacuum: Up to 10⁻⁴ mbar
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      Configuration: 1-5 Boosters
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

export default VaccumSystemsPackages;
