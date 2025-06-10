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
} from "react-icons/fa";

const RotaryTwinLobeBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: "Advanced Rotor Design",
      description:
        "Computer-generated rotor profiles for optimal performance and efficiency",
      details:
        "Precision-engineered rotors with uniform clearances and higher volumetric efficiencies",
      benefit: "Up to 15% higher efficiency",
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: "Heavy Duty Construction",
      description:
        "Ruggedly built with appropriate rotor shaft design for low deflection",
      details:
        "Anti-friction oil lubricated bearings for continuous operation and reliability",
      benefit: "99.5% uptime reliability",
    },
    {
      icon: <FaTools className="text-2xl text-white" />,
      title: "CNC Precision Manufacturing",
      description:
        "Manufactured on CNC machines for high accuracy and consistency",
      details:
        "State-of-the-art manufacturing ensures dimensional precision and quality",
      benefit: "±0.01mm precision",
    },
    {
      icon: <FaLeaf className="text-2xl text-white" />,
      title: "Oil-Free Operation",
      description:
        "Ideal for oil-free conveying of industrial gases and materials",
      details:
        "Clean operation suitable for sensitive applications and food-grade processes",
      benefit: "100% oil-free guarantee",
    },
  ];

  const applications = [
    {
      title: "Lime Calcination Plants",
      description: "High-temperature material processing and conveying",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "High temperature resistance",
        "Continuous operation",
        "Reliable performance",
      ],
    },
    {
      title: "Mixed Gas & BF Gas Boosting",
      description: "Blast furnace and coke oven gas handling systems",
      icon: <FaRocket />,
      image: "⚡",
      benefits: [
        "Gas boosting capability",
        "Pressure enhancement",
        "Industrial gas handling",
      ],
    },
    {
      title: "DRI Plants",
      description: "Direct Reduced Iron plant applications",
      icon: <FaCogs />,
      image: "🔧",
      benefits: [
        "Process gas handling",
        "High reliability",
        "Continuous operation",
      ],
    },
    {
      title: "Fluid Bed Combustion",
      description: "Fluidized bed combustion systems",
      icon: <FaThermometerHalf />,
      image: "🔥",
      benefits: [
        "Combustion air supply",
        "Temperature control",
        "Efficient operation",
      ],
    },
    {
      title: "Digester Gas Processing",
      description: "Biogas and digester gas handling",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: [
        "Biogas processing",
        "Environmental friendly",
        "Energy recovery",
      ],
    },
    {
      title: "Flue Gas Desulphurisation",
      description: "Environmental emission control systems",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: [
        "Emission control",
        "Environmental compliance",
        "Clean technology",
      ],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 85,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Pressure",
      value: "Up to 1.1 bar 'g'",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Vacuum",
      value: "0.5 bar",
      icon: <FaVolumeDown />,
      color: "#f59e0b",
    },
    {
      parameter: "Operation",
      value: "Continuous Duty",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "40+ Years Experience",
      description: "Four decades of innovation in rotary blower technology",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "99.5% Reliability",
      description: "Proven track record of continuous operation",
      icon: <FaShieldAlt />,
      stat: "99.5%",
      unit: "Uptime",
    },
    {
      title: "1000+ Installations",
      description: "Trusted by industries worldwide",
      icon: <FaUsers />,
      stat: "1000+",
      unit: "Clients",
    },
    {
      title: "ISO Certified",
      description: "Quality management system certified",
      icon: <FaCertificate />,
      stat: "ISO",
      unit: "9001:2015",
    },
  ];

  const productImageUrl =
    "https://swamatics.com/wp-content/uploads/2024/05/rotary-twin.jpg";

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
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <FaStar className="text-blue-400" />
              <span>Axcel TR-Series</span>
            </div>
            <h1 className="text-6xl font-extrabold leading-tight mb-6">
              Next-Generation
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Rotary Blowers
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10">
              Experience the future of industrial air movement with SWAM's
              advanced rotary twin & tri-lobe blowers. Engineered for
              excellence, built for reliability, designed for your success.
            </p>

            <div className="flex gap-8 mb-10">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  85,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  1.1
                </div>
                <div className="text-sm text-slate-400 mt-1">Bar Pressure</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 leading-none">
                  100%
                </div>
                <div className="text-sm text-slate-400 mt-1">Oil-Free</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-full font-semibold backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Watch Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative max-w-lg w-full overflow-visible z-10">
              {/* Animated background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-blue-500/20 to-transparent rounded-full animate-pulse" />

              <img
                src={productImageUrl}
                alt="Rotary Twin & Tri-Lobe Blower"
                className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 relative z-20 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />

              {/* Floating specs */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
                <div className="absolute top-[15%] right-[5%] bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce z-30">
                  <FaLeaf className="text-blue-600" />
                  <span>Oil-Free</span>
                </div>
                <div
                  className="absolute bottom-[25%] left-[5%] bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce z-30"
                  style={{ animationDelay: "1s" }}
                >
                  <FaCogs className="text-blue-600" />
                  <span>CNC Precision</span>
                </div>
                <div
                  className="absolute top-1/2 right-[10%] bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-md animate-bounce z-30"
                  style={{ animationDelay: "2s" }}
                >
                  <FaShieldAlt className="text-blue-600" />
                  <span>Heavy Duty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <FaCogs className="animate-spin" />
              <span>Innovation & Technology</span>
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Technology Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Discover the cutting-edge innovations and precision engineering
              that make our rotary blowers the most reliable and efficient
              solutions in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group bg-white p-10 rounded-3xl shadow-lg transition-all duration-500 cursor-pointer border border-slate-200 relative overflow-hidden ${
                  activeFeature === index
                    ? "-translate-y-4 shadow-2xl border-blue-500 bg-gradient-to-br from-blue-50 to-white"
                    : "hover:-translate-y-4 hover:shadow-2xl hover:border-blue-300"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                {/* Background Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300" />

                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-blue-400 transition-transform duration-500 ${
                    activeFeature === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon and Status */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeFeature === index
                          ? "scale-110 rotate-3"
                          : "group-hover:scale-105"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-blue-100 text-blue-700"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {index < 2 ? "Core Technology" : "Advanced Feature"}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                    {feature.description}
                  </p>

                  {/* Metrics */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-slate-600 font-medium">
                        Performance Impact
                      </span>
                      <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ${
                            activeFeature === index ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-slate-600 font-medium">
                        Reliability Rating
                      </span>
                      <div className="flex-1 bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000 delay-200 ${
                            activeFeature === index ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Benefit Badge */}
                  <div className="flex items-center gap-3 bg-emerald-50 px-5 py-3 rounded-xl mb-6 border border-emerald-100">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                      <FaCheckCircle className="text-emerald-600 text-sm" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-600 font-medium">
                        Key Advantage
                      </div>
                      <div className="text-emerald-700 font-bold">
                        {feature.benefit}
                      </div>
                    </div>
                  </div>

                  {/* Expandable Details */}
                  {activeFeature === index && (
                    <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-2xl border-l-4 border-blue-500 animate-in slide-in-from-top-4 duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                          <FaLightbulb className="text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-800 mb-2">
                            Technical Deep Dive
                          </h4>
                          <p className="text-slate-600 leading-relaxed mb-4">
                            {feature.details}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-white text-slate-600 rounded-full text-sm border">
                              Proven Technology
                            </span>
                            <span className="px-3 py-1 bg-white text-slate-600 rounded-full text-sm border">
                              Industry Standard
                            </span>
                            <span className="px-3 py-1 bg-white text-slate-600 rounded-full text-sm border">
                              Quality Assured
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Interactive Indicator */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">
                      Click to explore details
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border-2 border-blue-200 flex items-center justify-center transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-blue-500 border-blue-500 rotate-180"
                          : "group-hover:border-blue-400"
                      }`}
                    >
                      <FaArrowRight
                        className={`text-sm transition-colors duration-300 ${
                          activeFeature === index
                            ? "text-white"
                            : "text-blue-400"
                        }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feature Comparison Table */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Feature Comparison Matrix
              </h3>
              <p className="text-slate-600">
                See how our advanced features deliver superior performance
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-6 font-semibold text-slate-800">
                      Technology
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-800">
                      Efficiency Gain
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-800">
                      Reliability
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-800">
                      Precision
                    </th>
                    <th className="text-center py-4 px-6 font-semibold text-slate-800">
                      Industry Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {keyFeatures.map((feature, index) => (
                    <tr
                      key={index}
                      className="border-b border-slate-100 hover:bg-slate-50 transition-colors duration-200"
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                            {React.cloneElement(feature.icon, {
                              className: "text-white text-sm",
                            })}
                          </div>
                          <span className="font-medium text-slate-800">
                            {feature.title}
                          </span>
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                          {feature.benefit}
                        </span>
                      </td>
                      <td className="text-center py-4 px-6">
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-yellow-400 text-sm"
                            />
                          ))}
                        </div>
                      </td>
                      <td className="text-center py-4 px-6">
                        <span className="text-blue-600 font-semibold">
                          ±0.01mm
                        </span>
                      </td>
                      <td className="text-center py-4 px-6">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                          Premium
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group">
              <FaDownload className="group-hover:animate-bounce" />
              <span className="font-semibold">
                Download Technical Specifications
              </span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Technical Excellence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our rotary piston blowers deliver exceptional performance across
                demanding industrial applications with unmatched reliability and
                efficiency.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-2xl border-l-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-600 mb-2 uppercase tracking-wider">
                        {spec.parameter}
                      </h4>
                      <div className="text-xl font-bold text-slate-800">
                        {spec.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <FaCertificate />
                  <span>ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <FaAward />
                  <span>CE Certified</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <FaShieldAlt />
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-md w-full overflow-visible m-8">
                <img
                  src={productImageUrl}
                  alt="Technical Specifications"
                  className="w-full h-auto rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => openModal(productImageUrl)}
                />

                {/* Tech highlights - visible on larger screens */}
                <div className="hidden lg:block absolute inset-0 pointer-events-none">
                  <div className="absolute top-[15%] -right-[20%] text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200 whitespace-nowrap z-10">
                    Computer-Generated Rotor Profiles
                  </div>
                  <div className="absolute top-[45%] -left-[25%] text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200 whitespace-nowrap z-10">
                    CNC Precision Manufacturing
                  </div>
                  <div className="absolute bottom-[30%] -right-[15%] text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200 whitespace-nowrap z-10">
                    Anti-Friction Bearings
                  </div>
                  <div className="absolute bottom-[10%] -left-[20%] text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200 whitespace-nowrap z-10">
                    Continuous Duty Operation
                  </div>
                </div>

                {/* Mobile highlights */}
                <div className="lg:hidden flex flex-wrap gap-2 justify-center mt-4">
                  <span className="text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200">
                    Computer-Generated Rotor Profiles
                  </span>
                  <span className="text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200">
                    CNC Precision Manufacturing
                  </span>
                  <span className="text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200">
                    Anti-Friction Bearings
                  </span>
                  <span className="text-xs text-slate-600 px-4 py-2 bg-white rounded-3xl shadow-md border-2 border-slate-200">
                    Continuous Duty Operation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Powering diverse industries with reliable, efficient solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm transition-all duration-300 cursor-pointer border-2 border-transparent ${
                    selectedApplication === index
                      ? "translate-x-3 shadow-md border-blue-600"
                      : "hover:translate-x-3 hover:shadow-md hover:border-blue-600"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-2xl w-15 h-15 flex items-center justify-center bg-slate-50 rounded-2xl flex-shrink-0">
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

            <div className="bg-white p-8 rounded-2xl shadow-md h-fit">
              <div className="text-center mb-8">
                <div className="text-3xl mb-4">
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
                      <FaCheckCircle className="text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-600 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="flex items-center justify-center gap-2 w-full p-4 bg-blue-600 text-white border-0 rounded-xl font-semibold cursor-pointer transition-all duration-300 hover:bg-blue-800 hover:-translate-y-1">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose SWAM Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-emerald-500/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-emerald-100 text-blue-700 px-6 py-2 rounded-full text-sm font-semibold mb-8">
              <FaAward className="animate-bounce" />
              <span>Industry Leadership Since 1984</span>
            </div>

            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-500 bg-clip-text text-transparent">
              Why Choose SWAM
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Four decades of excellence in rotary blower technology. Our
              commitment to innovation, quality, and customer satisfaction has
              made us the trusted choice for industrial leaders worldwide.
            </p>

            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-slate-600">
                <FaGlobe className="text-blue-500" />
                <span className="font-medium">Global Presence</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <FaCertificate className="text-emerald-500" />
                <span className="font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <FaUsers className="text-purple-500" />
                <span className="font-medium">Expert Team</span>
              </div>
            </div>
          </div>

          {/* Main Advantages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-slate-50 p-8 rounded-3xl text-center transition-all duration-500 border border-slate-200 hover:border-blue-300 hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-emerald-500/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>

                {/* Icon with enhanced styling */}
                <div className="relative z-10 w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  {advantage.icon}
                  <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Enhanced stats display */}
                <div className="mb-6 relative z-10">
                  <div className="text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent leading-none mb-2">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-600 font-semibold uppercase tracking-wider">
                    {advantage.unit}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 group-hover:w-full w-0"></div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {advantage.description}
                </p>

                {/* Additional metrics */}
                <div className="bg-slate-100 p-4 rounded-xl relative z-10">
                  <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                    Performance Rating
                  </div>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400 text-sm" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Success Stories */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-3xl p-12 mb-20 border border-slate-200">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-slate-800 mb-4">
                Customer Success Stories
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Real results from real customers who chose SWAM for their
                critical applications
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Success Story 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <FaIndustry className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Steel Manufacturing
                    </div>
                    <div className="text-slate-600 text-sm">
                      Fortune 500 Company
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  98.7%
                </div>
                <div className="text-slate-600 mb-4">
                  Uptime achieved with SWAM blowers in their blast furnace
                  operations
                </div>
                <div className="text-sm text-slate-500">
                  "Exceptional reliability and performance"
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                    <FaLeaf className="text-emerald-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">Cement Plant</div>
                    <div className="text-slate-600 text-sm">
                      Leading Manufacturer
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">25%</div>
                <div className="text-slate-600 mb-4">
                  Energy savings achieved after upgrading to SWAM technology
                </div>
                <div className="text-sm text-slate-500">
                  "Significant cost reduction and efficiency gains"
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <FaRecycle className="text-purple-600 text-xl" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800">
                      Waste Treatment
                    </div>
                    <div className="text-slate-600 text-sm">
                      Municipal Facility
                    </div>
                  </div>
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  5 Years
                </div>
                <div className="text-slate-600 mb-4">
                  Continuous operation without major maintenance required
                </div>
                <div className="text-sm text-slate-500">
                  "Outstanding durability and low maintenance"
                </div>
              </div>
            </div>
          </div>

          {/* Competitive Advantages */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                What Sets Us Apart
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCogs className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Advanced Manufacturing
                    </h4>
                    <p className="text-slate-600">
                      State-of-the-art CNC machines and precision engineering
                      ensure every component meets exacting standards.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaShieldAlt className="text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Proven Reliability
                    </h4>
                    <p className="text-slate-600">
                      Over 1000 successful installations worldwide with
                      industry-leading uptime performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <FaUsers className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-800 mb-2">
                      Expert Support
                    </h4>
                    <p className="text-slate-600">
                      Dedicated technical team provides comprehensive support
                      from design to maintenance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Chart Visualization */}
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-3xl border border-blue-200">
              <h4 className="text-2xl font-bold text-slate-800 mb-6 text-center">
                Performance Comparison
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Efficiency
                    </span>
                    <span className="text-blue-600 font-bold">95%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Reliability
                    </span>
                    <span className="text-emerald-600 font-bold">99.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-[99.5%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Customer Satisfaction
                    </span>
                    <span className="text-purple-600 font-bold">98%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-[98%]"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-700 font-medium">
                      Innovation Index
                    </span>
                    <span className="text-yellow-600 font-bold">92%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full w-[92%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-emerald-600 text-white p-12 rounded-3xl">
            <h3 className="text-3xl font-bold mb-4">
              Experience the SWAM Difference
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the thousands of satisfied customers who have transformed
              their operations with SWAM technology
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <FaPhone />
                <span>Schedule Consultation</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-2xl font-semibold backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer/CTA Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          {/* Main CTA Content */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 px-6 py-2 rounded-full text-sm font-semibold mb-8 backdrop-blur-sm">
              <FaRocket className="animate-pulse" />
              <span>Ready to Transform Your Operations?</span>
            </div>

            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
              Ready to Experience Excellence?
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              Connect with our technical experts to find the perfect rotary
              blower solution for your specific requirements. Join thousands of
              satisfied customers who trust SWAM for their industrial air
              movement needs.
            </p>

            <div className="flex gap-6 justify-center mb-16 flex-wrap">
              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-semibold shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-2 transition-all duration-300 border border-blue-500/50">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaPhone className="group-hover:animate-pulse" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold">
                    Get Expert Consultation
                  </div>
                  <div className="text-blue-100 text-sm">
                    Free technical assessment
                  </div>
                </div>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="group inline-flex items-center gap-3 px-10 py-5 bg-slate-800/50 text-white border-2 border-slate-600 rounded-2xl font-semibold backdrop-blur-xl hover:bg-slate-700/50 hover:border-slate-500 hover:-translate-y-2 transition-all duration-300">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <FaDownload className="text-emerald-400 group-hover:animate-bounce" />
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold">Download Resources</div>
                  <div className="text-slate-300 text-sm">
                    Technical specifications & brochures
                  </div>
                </div>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone Contact */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Call Us Directly
              </h3>
              <p className="text-slate-400 mb-4">
                Speak with our technical experts
              </p>
              <div className="text-blue-300 font-semibold text-lg">
                +91-99103-02163
              </div>
              <div className="text-slate-500 text-sm mt-2">
                Mon-Fri: 9:00 AM - 6:00 PM IST
              </div>
            </div>

            {/* Email Contact */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Email Support
              </h3>
              <p className="text-slate-400 mb-4">
                Get detailed technical information
              </p>
              <div className="text-emerald-300 font-semibold text-lg">
                sales@swamatics.com
              </div>
              <div className="text-slate-500 text-sm mt-2">
                Response within 24 hours
              </div>
            </div>

            {/* Location */}
            <div className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Visit Our Facility
              </h3>
              <p className="text-slate-400 mb-4">
                See our manufacturing excellence
              </p>
              <div className="text-purple-300 font-semibold text-lg">
                Noida, India
              </div>
              <div className="text-slate-500 text-sm mt-2">
                Manufacturing & R&D Center
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">40+</div>
              <div className="text-slate-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">
                1000+
              </div>
              <div className="text-slate-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                99.5%
              </div>
              <div className="text-slate-400">Uptime Reliability</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-slate-400">Support Available</div>
            </div>
          </div>

          {/* Certifications & Trust Badges */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Trusted by Industry Leaders
              </h3>
              <p className="text-slate-400">
                Our certifications and quality standards ensure your confidence
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-xl">
                <FaCertificate className="text-3xl text-blue-400 mb-3" />
                <div className="text-white font-semibold">ISO 9001:2015</div>
                <div className="text-slate-400 text-sm">Quality Management</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-xl">
                <FaAward className="text-3xl text-emerald-400 mb-3" />
                <div className="text-white font-semibold">CE Certified</div>
                <div className="text-slate-400 text-sm">
                  European Conformity
                </div>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-xl">
                <FaShieldAlt className="text-3xl text-purple-400 mb-3" />
                <div className="text-white font-semibold">5 Year Warranty</div>
                <div className="text-slate-400 text-sm">Product Guarantee</div>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 rounded-xl">
                <FaUsers className="text-3xl text-yellow-400 mb-3" />
                <div className="text-white font-semibold">Expert Support</div>
                <div className="text-slate-400 text-sm">Technical Team</div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 pt-8 border-t border-slate-700">
            <p className="text-slate-400 mb-4">
              Ready to get started? Our team is here to help you every step of
              the way.
            </p>
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
              <span>© 2024 SWAM. All rights reserved.</span>
              <span className="mx-2">•</span>
              <span>Manufactured with precision in India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-[9999] animate-in fade-in duration-300 p-8 box-border"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl animate-in zoom-in duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-xl border-0 rounded-full w-11 h-11 flex items-center justify-center text-white cursor-pointer z-10 transition-all duration-300 text-2xl font-bold hover:bg-black/95 hover:scale-110"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-full overflow-hidden flex flex-col">
              <div className="flex-1 overflow-auto flex items-center justify-center p-4 relative">
                <img
                  src={modalImage}
                  alt="Rotary Twin & Tri-Lobe Blower - Expanded View"
                  className="min-w-full min-h-full w-auto h-auto object-contain block cursor-grab transition-transform duration-300"
                  style={{ cursor: "grab" }}
                  onMouseDown={(e) => (e.target.style.cursor = "grabbing")}
                  onMouseUp={(e) => (e.target.style.cursor = "grab")}
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-[15] backdrop-blur-xl">
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                  Rotary Twin & Tri-Lobe Blower
                </h3>
                <p className="text-slate-200 mb-6 text-lg drop-shadow-sm">
                  Axcel TR-Series - Advanced Technology Blower
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-sm">
                    Capacity: Up to 85,000 M³/Hr
                  </span>
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-sm">
                    Pressure: Up to 1.1 bar 'g'
                  </span>
                  <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-3xl text-sm font-semibold drop-shadow-sm">
                    Operation: Oil-Free & Continuous Duty
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

export default RotaryTwinLobeBlowers;
