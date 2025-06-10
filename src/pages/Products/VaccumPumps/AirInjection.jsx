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
  FaAtom,
  FaFlask,
  FaFire,
  FaWind,
  FaOilCan,
  FaTruck,
  FaSnowflake,
  FaFilter,
} from "react-icons/fa";

const AirInjection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaSnowflake className="text-2xl text-white" />,
      title: "Completely Dry Operation",
      description:
        "Oil-free operation ensuring clean and contamination-free air handling",
      details:
        "No oil or liquid contact with the air stream, making it ideal for applications requiring clean air or gas handling",
      benefit: "100% dry operation",
    },
    {
      icon: <FaFilter className="text-2xl text-white" />,
      title: "Secondary Suction Cooling",
      description:
        "Advanced secondary suction system for enhanced cooling performance",
      details:
        "MHV series with secondary cooling develops vacuum up to 8000 mmwg with superior thermal management",
      benefit: "Enhanced cooling efficiency",
    },
    {
      icon: <FaTachometerAlt className="text-2xl text-white" />,
      title: "High Vacuum Performance",
      description:
        "Develops medium to high vacuum levels for demanding applications",
      details:
        "Achieves vacuum levels up to 8000 mmwg (85%) ideal for degassing, exhausting and pneumatic conveying",
      benefit: "Superior vacuum performance",
    },
    {
      icon: <FaTruck className="text-2xl text-white" />,
      title: "Dual Application Design",
      description:
        "Versatile design suitable for both vacuum and truck blower applications",
      details:
        "Can be configured for stationary vacuum applications or mobile truck-mounted blower systems",
      benefit: "Multi-purpose versatility",
    },
  ];

  const seriesTypes = [
    {
      name: "MH.V Series",
      description: "Medium vacuum pumps with secondary suction",
      icon: <FaFilter />,
      color: "#3b82f6",
      specifications: [
        "Up to 38,000 M³/Hr",
        "Up to 85% Vacuum",
        "Dry Operation",
      ],
    },
    {
      name: "KH.V Series",
      description: "High-performance vacuum pumps",
      icon: <FaRocket />,
      color: "#10b981",
      specifications: [
        "Enhanced Performance",
        "Robust Design",
        "Industrial Grade",
      ],
    },
    {
      name: "MHV Series",
      description: "Secondary cooling vacuum pumps",
      icon: <FaSnowflake />,
      color: "#f59e0b",
      specifications: [
        "Up to 8000 mmwg",
        "Secondary Cooling",
        "Temperature Control",
      ],
    },
  ];

  const applications = [
    {
      title: "Degassing Applications",
      description: "Removal of dissolved gases from liquids and materials",
      icon: <FaFlask />,
      image: "🧪",
      benefits: [
        "Efficient gas removal",
        "Process optimization",
        "Quality improvement",
      ],
    },
    {
      title: "Pneumatic Conveying",
      description: "Material handling through pneumatic transport systems",
      icon: <FaWind />,
      image: "📦",
      benefits: [
        "Reliable material transport",
        "Dust-free handling",
        "Automated systems",
      ],
    },
    {
      title: "Exhausting Systems",
      description: "Industrial exhaust and ventilation applications",
      icon: <FaIndustry />,
      image: "🏭",
      benefits: [
        "Effective air removal",
        "Environmental control",
        "Safety compliance",
      ],
    },
    {
      title: "Truck Blower Systems",
      description: "Mobile blower applications for truck-mounted systems",
      icon: <FaTruck />,
      image: "🚛",
      benefits: [
        "Mobile operation",
        "Versatile deployment",
        "Field applications",
      ],
    },
    {
      title: "Process Vacuum",
      description: "Medium vacuum requirements in industrial processes",
      icon: <FaCogs />,
      image: "⚙️",
      benefits: [
        "Process enhancement",
        "Consistent vacuum levels",
        "Reliable operation",
      ],
    },
    {
      title: "Environmental Control",
      description: "Air and gas handling for environmental applications",
      icon: <FaLeaf />,
      image: "🌱",
      benefits: ["Clean operation", "Environmental safety", "Emission control"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 38,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Vacuum Level",
      value: "Up to 85% (8000 mmwg)",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Operation Type",
      value: "Completely Dry",
      icon: <FaSnowflake />,
      color: "#f59e0b",
    },
    {
      parameter: "Cooling System",
      value: "Secondary Suction",
      icon: <FaFilter />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Proven Technology",
      description: "Decades of experience in vacuum pump manufacturing",
      icon: <FaAward />,
      stat: "40+",
      unit: "Years",
    },
    {
      title: "Dry Operation",
      description: "Completely oil-free and dry vacuum generation",
      icon: <FaSnowflake />,
      stat: "100%",
      unit: "Oil-Free",
    },
    {
      title: "High Vacuum",
      description:
        "Superior vacuum levels up to 85% for demanding applications",
      icon: <FaTachometerAlt />,
      stat: "8000",
      unit: "mmwg",
    },
    {
      title: "Versatile Design",
      description: "Dual-purpose design for vacuum and blower applications",
      icon: <FaCogs />,
      stat: "2-in-1",
      unit: "Design",
    },
  ];

  // Using the specified image path
  const productImageUrl = "images/vacuum-Pump-with-Secondary.jpg";

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
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
          }}
        />

        <div className="max-w-6xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="text-white">
            <br />
            <div className="inline-flex mt-25 items-center gap-2 bg-blue-500/20 backdrop-blur-lg border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8 animate-fadeInUp">
              <FaFilter className="text-blue-400" />
              <span>Vacuum Technology</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fadeInUp animation-delay-200">
              Vacuum Pumps With
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Secondary Suction
              </span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-300 mb-10 animate-fadeInUp animation-delay-400">
              Advanced vacuum pumps designed for negative suction applications
              requiring medium vacuums such as degassing, exhausting, and
              pneumatic conveying. MHV series with secondary cooling develops
              vacuum up to 8000 mmwg with completely dry operation.
            </p>

            <div className="flex gap-8 mb-10 animate-fadeInUp animation-delay-600">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 leading-none">
                  38,000
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  M³/Hr Capacity
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 leading-none">
                  85%
                </div>
                <div className="text-sm text-slate-400 mt-1">Vacuum Level</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-blue-400 leading-none">
                  100%
                </div>
                <div className="text-sm text-slate-400 mt-1">Dry Operation</div>
              </div>
            </div>

            <div className="flex gap-4 animate-fadeInUp animation-delay-800">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <FaDownload />
                <span>Download Brochure</span>
              </button>
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 backdrop-blur-lg rounded-full font-semibold text-white hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300">
                <FaPlay />
                <span>Technical Demo</span>
              </button>
            </div>
            <br />
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl transform scale-110"></div>
              <img
                src={productImageUrl}
                alt="Vacuum Pump with Secondary Suction"
                className="relative w-full max-w-lg h-auto rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[15%] -right-[10%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg animate-pulse">
                  <FaSnowflake />
                  <span>Dry Operation</span>
                </div>
                <div className="absolute top-[50%] -left-[15%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg animate-pulse animation-delay-500">
                  <FaFilter />
                  <span>Secondary Cooling</span>
                </div>
                <div className="absolute bottom-[25%] -right-[5%] bg-white/95 backdrop-blur-lg px-4 py-2 rounded-full flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-lg animate-pulse animation-delay-1000">
                  <FaTruck />
                  <span>Dual Purpose</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Series Types Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Product Series
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple series designed for different vacuum requirements and
              applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seriesTypes.map((series, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-l-4 relative overflow-hidden group"
                style={{ borderLeftColor: series.color }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ backgroundColor: series.color }}
                />
                <div className="text-4xl mb-4" style={{ color: series.color }}>
                  {series.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {series.name}
                  </h3>
                  <div
                    className="text-lg font-semibold mb-4"
                    style={{ color: series.color }}
                  >
                    {series.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {series.specifications.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-black/5 px-3 py-1 rounded-full text-xs font-medium text-gray-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Advanced Technology Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Specialized design elements for superior vacuum performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 text-center transition-all duration-300 border border-slate-200 relative overflow-hidden cursor-pointer ${
                  activeFeature === index
                    ? "transform -translate-y-2 shadow-2xl border-blue-600"
                    : "hover:transform hover:-translate-y-2 hover:shadow-xl hover:border-blue-600"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 transition-opacity duration-300 ${
                    activeFeature === index ? "opacity-5" : "opacity-0"
                  }`}
                />

                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-300 ${
                    activeFeature === index
                      ? "transform scale-110 rotate-6"
                      : ""
                  }`}
                >
                  {feature.icon}
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-sm">
                    <FaCheckCircle />
                    <span>{feature.benefit}</span>
                  </div>
                  {activeFeature === index && (
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <p className="text-sm text-gray-500">{feature.details}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Technical Specifications
              </h2>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                Our vacuum pumps with secondary suction are engineered for
                demanding applications requiring medium to high vacuum levels,
                delivering reliable performance with completely dry operation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-white/20"
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-semibold mb-2 opacity-80">
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
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                  <FaCertificate />
                  <span className="text-sm font-semibold">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                  <FaSnowflake />
                  <span className="text-sm font-semibold">Dry Operation</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
                  <FaShieldAlt />
                  <span className="text-sm font-semibold">
                    Reliable Performance
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative max-w-lg">
                <img
                  src={productImageUrl}
                  alt="Vacuum Pump Specifications"
                  className="w-full h-auto rounded-3xl shadow-2xl cursor-pointer transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-[10%] -right-[15%] bg-white/95 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Secondary Suction Cooling
                  </div>
                  <div className="absolute top-[40%] -left-[20%] bg-white/95 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Completely Dry Operation
                  </div>
                  <div className="absolute bottom-[40%] -right-[10%] bg-white/95 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Up to 8000 mmwg Vacuum
                  </div>
                  <div className="absolute bottom-[15%] -left-[15%] bg-white/95 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                    Truck Blower Compatible
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
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Industrial Applications
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ideal for processes requiring medium vacuums and clean operation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 flex items-center gap-4 ${
                    selectedApplication === index
                      ? "bg-blue-50 border-blue-500 shadow-lg transform translate-x-4"
                      : "bg-gray-50 border-gray-200 hover:border-blue-300 hover:shadow-md hover:translate-x-4"
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-4xl min-w-[60px] text-center">
                    {app.image}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {app.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{app.description}</p>
                  </div>
                  <FaArrowRight
                    className={`text-blue-500 transition-transform duration-300 ${
                      selectedApplication === index ? "translate-x-1" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
              <div className="text-center mb-8">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {applications[selectedApplication].benefits.map(
                  (benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <FaCheckCircle className="text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  )
                )}
              </div>

              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Why Choose SWAM Vacuum Pumps
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Superior vacuum technology with dry operation and versatile design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl text-white">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-3xl font-bold text-blue-600 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">
                    {advantage.unit}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Need a Custom Vacuum Solution?
          </h2>
          <p className="text-lg leading-relaxed mb-10 opacity-90">
            Our technical experts will help you select the right vacuum pump
            with secondary suction for your specific application requirements
            including degassing, exhausting, and pneumatic conveying.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              <FaPhone />
              <span>Get Technical Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 bg-blue-700 border border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-600 transition-colors duration-300">
              <FaDownload />
              <span>Download Vacuum Pump Brochure</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-80">
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
              <span>C-2, Sector-3, Noida-201301, India</span>
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
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-2xl font-bold text-white hover:bg-white/30 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <img
                  src={modalImage}
                  alt="Vacuum Pump with Secondary Suction - Expanded View"
                  className="w-full lg:w-1/2 h-auto rounded-2xl shadow-lg"
                />
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Vacuum Pump with Secondary Suction
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Advanced Vacuum Generation System
                  </p>
                  <div className="space-y-2">
                    <div className="bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                      Capacity: Up to 38,000 M³/Hr
                    </div>
                    <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-medium">
                      Vacuum: Up to 85% (8000 mmwg)
                    </div>
                    <div className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg text-sm font-medium">
                      Operation: Completely Dry & Continuous
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

export default AirInjection;
