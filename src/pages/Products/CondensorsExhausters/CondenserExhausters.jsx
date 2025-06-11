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
  FaExchangeAlt,
  FaPowerOff,
  FaCompress,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const CondenserExhausters = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaIndustry className="feature-icon" />,
      title: "Power Generation Service",
      description:
        "Advanced design Condenser Exhauster specifically for hogging and holding service in power generation applications",
      details:
        "Specialized design optimized for power plant condensers with reliable performance for continuous operation",
      benefit: "Power plant optimized",
    },
    {
      icon: <FaSync className="feature-icon" />,
      title: "Total Recirculation System",
      description:
        "Complete system with liquid ring vacuum pumps, separator, heat exchanger with total recirculation capability",
      details:
        "Integrated recirculation system ensures efficient operation and optimal performance with minimal water consumption",
      benefit: "Efficient operation",
    },
    {
      icon: <FaExchangeAlt className="feature-icon" />,
      title: "Integrated Heat Exchanger",
      description:
        "Built-in heat exchanger for optimal thermal management and enhanced system efficiency",
      details:
        "Advanced heat exchanger design maintains optimal operating temperatures for consistent performance",
      benefit: "Thermal efficiency",
    },
    {
      icon: <FaShieldAlt className="feature-icon" />,
      title: "Reliable Performance",
      description:
        "Proven design with robust construction for continuous operation in demanding power generation environments",
      details:
        "Built for 24/7 operation with minimal maintenance requirements and guaranteed reliability",
      benefit: "Continuous operation",
    },
  ];

  const applications = [
    {
      title: "Power Plant Condensers",
      description:
        "Main condenser exhauster service for steam turbine power generation systems",
      icon: <FaPowerOff />,
      image: "⚡",
      benefits: [
        "Steam turbine condensers",
        "Main condenser evacuation",
        "Power generation systems",
      ],
    },
    {
      title: "Hogging Service",
      description:
        "Initial evacuation and rapid pump-down of condenser systems during startup",
      icon: <FaRocket />,
      image: "🚀",
      benefits: [
        "Rapid startup evacuation",
        "Initial condenser pump-down",
        "Fast system priming",
      ],
    },
    {
      title: "Holding Service",
      description:
        "Continuous operation to maintain vacuum in condenser during normal operation",
      icon: <FaLock />,
      image: "🔒",
      benefits: [
        "Continuous vacuum maintenance",
        "Normal operation support",
        "Steady-state performance",
      ],
    },
    {
      title: "Steam Power Plants",
      description:
        "Complete condenser exhauster solutions for thermal and nuclear power plants",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Thermal power plants",
        "Nuclear power facilities",
        "Combined cycle plants",
      ],
    },
    {
      title: "Industrial Steam Systems",
      description:
        "Condenser exhauster applications in industrial steam and process systems",
      icon: <FaGasPump />,
      image: "🔧",
      benefits: [
        "Process steam systems",
        "Industrial condensers",
        "Steam recovery systems",
      ],
    },
    {
      title: "Turbine Applications",
      description:
        "Specialized exhauster systems for various turbine condenser applications",
      icon: <FaWind />,
      image: "💨",
      benefits: [
        "Steam turbines",
        "Gas turbine HRSG",
        "Combined cycle systems",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity Range",
      value: "10-40 SCFM",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Service Type",
      value: "Hogging & Holding",
      icon: <FaSync />,
      color: "#10b981",
    },
    {
      parameter: "Application",
      value: "Power Generation",
      icon: <FaPowerOff />,
      color: "#f59e0b",
    },
    {
      parameter: "System Type",
      value: "Total Recirculation",
      icon: <FaExchangeAlt />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Proven Design",
      description:
        "Advanced design specifically developed for power generation condenser applications",
      icon: <FaAward />,
      stat: "Advanced",
      unit: "Design",
    },
    {
      title: "Dual Service",
      description:
        "Single system handles both hogging and holding service for complete condenser support",
      icon: <FaSync />,
      stat: "Dual",
      unit: "Service",
    },
    {
      title: "Complete System",
      description:
        "Integrated package with pumps, separator, heat exchanger, and optional ejector",
      icon: <FaLayerGroup />,
      stat: "Complete",
      unit: "Package",
    },
    {
      title: "Power Optimized",
      description:
        "Specifically engineered for power generation industry requirements and standards",
      icon: <FaPowerOff />,
      stat: "Power",
      unit: "Optimized",
    },
  ];

  const systemComponents = [
    {
      component: "Liquid Ring Vacuum Pumps",
      description: "Primary vacuum generation with liquid ring technology",
      icon: <FaCircle />,
    },
    {
      component: "Separator",
      description: "Efficient liquid-gas separation for system protection",
      icon: <FaFilter />,
    },
    {
      component: "Heat Exchanger",
      description: "Thermal management for optimal operating conditions",
      icon: <FaExchangeAlt />,
    },
    {
      component: "Ejector (Optional)",
      description: "Additional vacuum enhancement when required",
      icon: <FaRocket />,
    },
    {
      component: "Recirculation System",
      description: "Total recirculation for water conservation",
      icon: <FaSync />,
    },
    {
      component: "Control System",
      description: "Automated control and monitoring systems",
      icon: <FaCogs />,
    },
  ];

  const workingPrinciple = {
    title: "Condenser Exhauster Technology",
    description:
      "Advanced condenser exhauster system utilizing liquid ring vacuum pump technology with integrated separator, heat exchanger, and total recirculation for efficient hogging and holding service in power generation applications.",
    steps: [
      {
        step: "1",
        title: "Hogging Operation",
        description:
          "Rapid evacuation of condenser during startup to establish initial vacuum conditions",
      },
      {
        step: "2",
        title: "Holding Service",
        description:
          "Continuous operation to maintain vacuum levels during normal power generation",
      },
      {
        step: "3",
        title: "Recirculation",
        description:
          "Total recirculation system with heat exchanger ensures efficient water management",
      },
    ],
  };

  const productImageUrl = "/images/Condenser-Exhausters.jpg";

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
        <div className="absolute inset-0 opacity-50 bg-grid-pattern"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="mt-20 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fade-in-up">
              <FaStar className="text-blue-400" />
              <span>Power Generation Optimized</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up animation-delay-200">
              Condenser
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Exhausters
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10 animate-fade-in-up animation-delay-400">
              SWAM offers advanced design Condenser Exhauster for hogging and
              holding service in power generation. The system consists of liquid
              ring vacuum pumps, separator, heat exchanger and ejector
              (optional) with total recirculation for reliable and efficient
              condenser service.
            </p>

            <div className="flex gap-8 mb-10 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  10-40
                </div>
                <div className="text-sm text-slate-400 mt-1">SCFM Capacity</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Hogging
                </div>
                <div className="text-sm text-slate-400 mt-1">& Holding</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  Power
                </div>
                <div className="text-sm text-slate-400 mt-1">Generation</div>
              </div>
            </div>

            <div className="flex gap-4 animate-fade-in-up animation-delay-800">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold border border-white/20 rounded-full backdrop-blur-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] flex justify-center items-center">
              <div className="absolute w-full h-full bg-blue-500/10 rounded-full animate-pulse"></div>
              <img
                src={productImageUrl}
                alt="Condenser Exhausters - Power Generation Service"
                className="max-w-[400px] max-h-[400px] object-contain filter drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer z-10"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="z-100 absolute w-full h-full hidden lg:block">
                <div className="absolute top-[15%] -left-[10%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float min-w-[120px] max-w-[280px] min-h-[40px] justify-center text-center">
                  <FaSync className="text-blue-600" />
                  <span>Total Recirculation</span>
                </div>
                <div className="absolute top-1/2 -right-[15%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float animation-delay-2000 min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center">
                  <FaPowerOff className="text-blue-600" />
                  <span>Power Generation</span>
                </div>
                <div className="absolute bottom-[20%] -left-[5%] bg-white/95 backdrop-blur-lg border border-white/20 rounded-3xl px-4 py-3 flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-float animation-delay-4000 min-w-[120px] max-w-[180px] min-h-[40px] justify-center text-center">
                  <FaExchangeAlt className="text-blue-600" />
                  <span>Heat Exchanger</span>
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
              Advanced Condenser Exhauster Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover our specialized condenser exhauster systems designed for
              power generation applications, featuring advanced liquid ring
              technology with total recirculation for both hogging and holding
              service requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all cursor-pointer border border-slate-200 relative overflow-hidden ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-2xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 opacity-0 transition-opacity ${
                    activeFeature === index ? "opacity-5" : ""
                  }`}
                ></div>
                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform ${
                    activeFeature === index ? "scale-110 rotate-6" : ""
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
                <div className="relative z-10 flex items-center justify-center gap-2 text-emerald-600 font-semibold text-sm">
                  <FaCheckCircle className="text-base" />
                  <span>{feature.benefit}</span>
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

      {/* System Components Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              System Components & Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Understanding the complete condenser exhauster system components
              that work together to deliver reliable hogging and holding service
              for power generation applications
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="p-8">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
                  <FaIndustry />
                  <span>Power Generation Service</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {workingPrinciple.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {workingPrinciple.description}
                </p>

                <div className="space-y-6">
                  {workingPrinciple.steps.map((step, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
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

              <div className="relative flex justify-center items-center">
                <img
                  src={productImageUrl}
                  alt="Condenser Exhauster Components and Technology"
                  className="max-w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[10%] left-[5%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-md">
                      Liquid Ring Pump
                    </div>
                  </div>
                  <div className="absolute top-[40%] right-[10%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse animation-delay-1000"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-md">
                      Heat Exchanger
                    </div>
                  </div>
                  <div className="absolute bottom-[20%] left-[15%] flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-800 shadow-md">
                      Separator
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Components Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {systemComponents.map((component, index) => (
                <div
                  key={index}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-white text-lg">{component.icon}</div>
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Condenser Exhausters deliver reliable performance with proven
                specifications designed specifically for power generation
                condenser service with both hogging and holding capabilities in
                a complete integrated system.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
                    style={{ "--accent-color": spec.color }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{
                          backgroundColor: spec.color + "20",
                          color: spec.color,
                        }}
                      >
                        {spec.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800 mb-1">
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

              <div className="bg-white rounded-lg p-6 border border-slate-200 mb-8">
                <h4 className="text-xl font-semibold text-slate-800 mb-4">
                  Standard System Configuration
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-700">
                      Capacity Options:
                    </span>
                    <span className="font-semibold text-slate-800">
                      10, 20, 30, 40 SCFM
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-700">
                      Service Type:
                    </span>
                    <span className="font-semibold text-slate-800">
                      Hogging & Holding
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-100 last:border-b-0">
                    <span className="font-medium text-slate-700">
                      Primary Application:
                    </span>
                    <span className="font-semibold text-slate-800">
                      Power Generation
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium text-slate-700">
                      System Features:
                    </span>
                    <span className="font-semibold text-slate-800">
                      Total Recirculation
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-semibold">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-lg font-semibold">
                  <FaAward />
                  <span>Power Industry Proven</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg font-semibold">
                  <FaShieldAlt />
                  <span>Reliable Operation</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-lg p-8 shadow-lg">
                <img
                  src={productImageUrl}
                  alt="Condenser Exhausters Technical Specifications"
                  className="w-full h-auto rounded-lg hover:scale-105 transition-transform cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute -top-4 -right-4 -bottom-4 -left-4 flex flex-wrap content-around justify-around pointer-events-none">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Liquid Ring Technology
                  </div>
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Total Recirculation
                  </div>
                  <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Heat Exchanger
                  </div>
                  <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    Dual Service
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
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Power Generation Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Specialized condenser exhauster solutions for diverse power
              generation applications requiring reliable hogging and holding
              service for optimal condenser performance
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-1 space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg border cursor-pointer transition-all ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-600 shadow-lg"
                      : "bg-white border-slate-200 hover:border-blue-300 hover:shadow-md"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{app.image}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 mb-1">
                        {app.title}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {app.description}
                      </p>
                    </div>
                    <FaArrowRight
                      className={`transition-transform ${
                        selectedApplication === index
                          ? "text-blue-600 rotate-90"
                          : "text-slate-400"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2 bg-slate-50 rounded-lg p-8">
              <div className="mb-8">
                <div className="text-4xl mb-4">
                  {applications[selectedApplication].image}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">
                  {applications[selectedApplication].title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {applications[selectedApplication].description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 bg-white p-4 rounded-lg"
                    >
                      <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-800 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Additional Applications Grid */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">
              More Applications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group">
                <FaIndustry className="text-2xl text-slate-600 group-hover:text-blue-600 mb-2 mx-auto" />
                <span className="text-sm font-medium text-slate-800">
                  Thermal Power Plants
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group">
                <FaAtom className="text-2xl text-slate-600 group-hover:text-blue-600 mb-2 mx-auto" />
                <span className="text-sm font-medium text-slate-800">
                  Nuclear Power Plants
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group">
                <FaFire className="text-2xl text-slate-600 group-hover:text-blue-600 mb-2 mx-auto" />
                <span className="text-sm font-medium text-slate-800">
                  Combined Cycle Plants
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group">
                <FaWind className="text-2xl text-slate-600 group-hover:text-blue-600 mb-2 mx-auto" />
                <span className="text-sm font-medium text-slate-800">
                  Steam Turbines
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group">
                <FaRecycle className="text-2xl text-slate-600 group-hover:text-blue-600 mb-2 mx-auto" />
                <span className="text-sm font-medium text-slate-800">
                  Cogeneration Plants
                </span>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg text-center hover:bg-blue-50 hover:shadow-md transition-all cursor-pointer group">
                <FaGlobe className="text-2xl text-slate-600 group-hover:text-blue-600 mb-2 mx-auto" />
                <span className="text-sm font-medium text-slate-800">
                  Industrial Steam
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Condenser Exhausters
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Advanced condenser exhauster solutions delivering proven
              performance for power generation applications with specialized
              design for both hogging and holding service requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 text-center border border-slate-200 hover:shadow-lg hover:-translate-y-2 transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-white text-2xl">{advantage.icon}</div>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
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
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Salient Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive features that make SWAM Condenser Exhausters the
              preferred choice for power generation condenser service
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                <FaPowerOff className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Power Generation Optimized
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Specifically designed for power plant condenser applications
                with proven performance in demanding environments
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FaSync className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Dual Service Capability
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Single system handles both hogging and holding service for
                complete condenser support throughout operation cycles
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4">
                <FaCircle className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Liquid Ring Technology
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Reliable liquid ring vacuum pump technology ensures consistent
                performance and minimal maintenance requirements
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <FaExchangeAlt className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Integrated Heat Exchanger
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Built-in heat exchanger optimizes thermal management for
                enhanced system efficiency and performance
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                <FaFilter className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Advanced Separation
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Efficient separator design ensures optimal liquid-gas separation
                for system protection and reliability
              </p>
            </div>

            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:shadow-lg hover:-translate-y-1 hover:border-blue-300 transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                <FaTint className="text-white text-lg" />
              </div>
              <h4 className="text-lg font-semibold text-slate-800 mb-3">
                Total Recirculation
              </h4>
              <p className="text-slate-600 leading-relaxed">
                Complete recirculation system minimizes water consumption while
                maintaining optimal operating conditions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready for Reliable Condenser Service?
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed mb-10">
            Connect with our power generation experts to discover how our
            Condenser Exhausters can enhance your power plant efficiency with
            proven hogging and holding service capabilities designed
            specifically for power generation applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-3 bg-white/10 text-white font-semibold px-8 py-4 rounded-lg border border-white/20 backdrop-blur-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all">
              <FaDownload />
              <span>Download Product Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center text-slate-300">
            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-400" />
              <span>+91-99103-02163</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />
              <span>sales@swamatics.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Noida, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors z-10 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <img
                  src={modalImage}
                  alt="Condenser Exhausters - Power Generation Service - Expanded View"
                  className="flex-1 max-w-full h-auto rounded-lg shadow-lg"
                />
                <div className="lg:w-80 flex-shrink-0">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    Condenser Exhausters
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Power Generation Service
                  </p>
                  <div className="space-y-3">
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-slate-800">
                        Capacity: 10-40 SCFM
                      </span>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-slate-800">
                        Service: Hogging & Holding
                      </span>
                    </div>
                    <div className="bg-slate-50 px-4 py-2 rounded-lg">
                      <span className="font-semibold text-slate-800">
                        Application: Power Generation
                      </span>
                    </div>
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

export default CondenserExhausters;
