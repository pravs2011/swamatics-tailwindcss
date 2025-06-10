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
  FaTruck,
  FaGasPump,
  FaWarehouse,
  FaBoxes,
} from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

const TruckBlowers = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [selectedApplication, setSelectedApplication] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const keyFeatures = [
    {
      icon: <FaTruck className="text-2xl text-white" />,
      title: "Bulk Vehicle Optimized",
      description:
        "Specially designed for bulk and silo vehicles pneumatic loading and unloading operations",
      details:
        "Purpose-built for transport vehicle requirements with robust construction for mobile applications",
      benefit: "Optimized for vehicles",
    },
    {
      icon: <FaGears className="text-2xl text-white" />,
      title: "Superior Design",
      description:
        "Superior in design and construction with highly energy efficient operation",
      details:
        "Advanced engineering with precision components for reliable performance in demanding conditions",
      benefit: "Energy efficient",
    },
    {
      icon: <FaWind className="text-2xl text-white" />,
      title: "Dual Operation",
      description:
        "Available for both positive pressure and vacuum conveying applications",
      details:
        "Versatile design handles both pressure generation and vacuum creation for complete loading/unloading solutions",
      benefit: "Positive & vacuum",
    },
    {
      icon: <FaWrench className="text-2xl text-white" />,
      title: "Easy Maintenance",
      description: "Easy to service and maintenance with accessible components",
      details:
        "Designed for field serviceability with minimal downtime and straightforward maintenance procedures",
      benefit: "Low maintenance",
    },
  ];

  const applications = [
    {
      title: "Bulk Material Loading",
      description:
        "Pneumatic loading of bulk materials into transport vehicles",
      icon: <FaBoxes />,
      image: "📦",
      benefits: ["Fast loading", "Dust-free operation", "Precise control"],
    },
    {
      title: "Silo Vehicle Operations",
      description: "Specialized applications for silo truck operations",
      icon: <FaWarehouse />,
      image: "🏭",
      benefits: [
        "High capacity handling",
        "Reliable operation",
        "Mobile efficiency",
      ],
    },
    {
      title: "Vacuum Unloading",
      description: "Efficient vacuum-based unloading systems",
      icon: <FaRecycle />,
      image: "♻️",
      benefits: ["Complete discharge", "Clean operation", "Automated systems"],
    },
    {
      title: "Industrial Transport",
      description: "Heavy-duty transport vehicle applications",
      icon: <FaIndustry />,
      image: "🚛",
      benefits: [
        "Robust performance",
        "Weather resistance",
        "Long service life",
      ],
    },
    {
      title: "Lubrication Systems",
      description: "Pneumatic lubrication and timing gear applications",
      icon: <FaGasPump />,
      image: "⚙️",
      benefits: [
        "Precise delivery",
        "System integration",
        "Consistent pressure",
      ],
    },
    {
      title: "Sealing Applications",
      description: "Specialized sealing and rotor applications",
      icon: <FaShieldAlt />,
      image: "🔒",
      benefits: ["Reliable sealing", "Dust protection", "Enhanced safety"],
    },
  ];

  const specifications = [
    {
      parameter: "Capacity",
      value: "Up to 12,000 M³/Hr",
      icon: <FaChartLine />,
      color: "#3b82f6",
    },
    {
      parameter: "Operation",
      value: "Positive & Vacuum",
      icon: <FaTachometerAlt />,
      color: "#10b981",
    },
    {
      parameter: "Design",
      value: "Mobile Optimized",
      icon: <FaTruck />,
      color: "#f59e0b",
    },
    {
      parameter: "Maintenance",
      value: "Easy Service Access",
      icon: <FaTools />,
      color: "#ef4444",
    },
  ];

  const advantages = [
    {
      title: "Vehicle Integration",
      description:
        "Purpose-built for seamless integration with bulk transport vehicles",
      icon: <FaTruck />,
      stat: "100%",
      unit: "Vehicle Ready",
    },
    {
      title: "Energy Efficiency",
      description: "Highly energy efficient design reduces operational costs",
      icon: <FaLeaf />,
      stat: "25%",
      unit: "Energy Saved",
    },
    {
      title: "High Capacity",
      description: "Handles up to 12,000 M³/Hr for large-scale operations",
      icon: <FaTachometerAlt />,
      stat: "12,000",
      unit: "M³/Hr",
    },
    {
      title: "Dual Purpose",
      description: "Versatile operation for both loading and unloading",
      icon: <FaGears />,
      stat: "2-in-1",
      unit: "Operation",
    },
  ];

  const productImageUrl = "/images/Truck-Blowers.jpg";

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
          className="absolute inset-0 opacity-50 bg-black"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'><path d='M 10 0 L 0 0 0 10' fill='none' stroke='rgba(255,255,255,0.05)' stroke-width='1'/></pattern></defs><rect width='100%' height='100%' fill='url(%23grid)'/></svg>")`,
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <br />
            <div className="inline-flex mt-10 items-center gap-2 bg-blue-500/20 backdrop-blur-xl border border-blue-500/30 px-6 py-3 rounded-full text-sm font-semibold mb-8">
              <FaStar className="text-blue-400" />
              <span>Bulk Vehicle Specialized</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              High Performance
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Truck Blowers
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              SWAM Bulk Vehicle Truck Blowers are specially designed to meet the
              operating requirements of bulk and silo vehicles for pneumatic
              loading and unloading operations. Superior design with energy
              efficient performance.
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
                  2-in-1
                </div>
                <div className="text-sm text-slate-400 mt-1">
                  Operation Mode
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 leading-none">
                  25%
                </div>
                <div className="text-sm text-slate-400 mt-1">Energy Saved</div>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)",
                }}
              ></div>
              <img
                src={productImageUrl}
                alt="Truck Blowers - Bulk Vehicle Specialized"
                className="w-full h-auto rounded-3xl shadow-2xl relative z-10 cursor-pointer"
                onClick={() => openModal(productImageUrl)}
              />
              <div className="absolute inset-0 pointer-events-none overflow-visible">
                <div className="absolute top-[10%] -right-4 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-20">
                  <FaTruck className="text-blue-600" />
                  <span>Vehicle Ready</span>
                </div>
                <div className="absolute bottom-[20%] -left-4 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-20">
                  <FaGears className="text-blue-600" />
                  <span>Dual Operation</span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white/95 backdrop-blur-xl px-3 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-slate-800 shadow-lg z-20">
                  <FaLeaf className="text-blue-600" />
                  <span>Energy Efficient</span>
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Bulk Vehicle Optimized Features
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Discover the specialized technologies that make our truck blowers
              perfect for mobile bulk material handling operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 cursor-pointer border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-blue-600 relative overflow-hidden group ${
                  activeFeature === index
                    ? "border-blue-600 -translate-y-3 shadow-2xl"
                    : ""
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform transition-transform duration-300 ${
                    activeFeature === index || activeFeature === index
                      ? "scale-x-100"
                      : "scale-x-0"
                  }`}
                ></div>
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    activeFeature === index ? "scale-110" : ""
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
                  <FaCheckCircle className="text-green-600 text-sm" />
                  <span className="text-green-700 text-sm font-semibold">
                    {feature.benefit}
                  </span>
                </div>
                {activeFeature === index && (
                  <div className="bg-slate-50 p-4 rounded-xl mt-4 border-l-4 border-blue-600 animate-pulse">
                    <p className="text-slate-700 text-sm">{feature.details}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Advanced Mobile Technology
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Specialized blower technology designed for the demanding
              requirements of bulk vehicle operations
            </p>
          </div>

          <div className="space-y-16">
            {/* Technology Overview */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <FaTruck />
                  <span>Mobile Optimized Design</span>
                </div>
                <h3 className="text-3xl font-bold text-slate-800 mb-6">
                  Why Our Truck Blowers Excel
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  SWAM truck blowers are engineered specifically for bulk
                  vehicle applications, providing the pressure and vacuum needed
                  for efficient pneumatic loading and unloading. Our superior
                  design ensures reliable operation in mobile environments with
                  easy serviceability and energy-efficient performance.
                </p>
                <div className="flex gap-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">
                      Various
                    </div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                      Sizes Available
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">Dual</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                      Operation Modes
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">Easy</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wide font-semibold">
                      Maintenance
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={productImageUrl}
                  alt="Truck Blower Technology"
                  className="w-full h-auto rounded-3xl shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="absolute top-[15%] right-[-20%] text-xs text-slate-700 px-4 py-2 bg-white rounded-full shadow-lg border-2 border-slate-200 whitespace-nowrap hidden lg:block">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"></div>
                  Pressure Generation
                </div>
                <div className="absolute top-[45%] left-[-25%] text-xs text-slate-700 px-4 py-2 bg-white rounded-full shadow-lg border-2 border-slate-200 whitespace-nowrap hidden lg:block">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -right-1 top-1/2 transform -translate-y-1/2"></div>
                  Vacuum Creation
                </div>
                <div className="absolute bottom-[30%] right-[-15%] text-xs text-slate-700 px-4 py-2 bg-white rounded-full shadow-lg border-2 border-slate-200 whitespace-nowrap hidden lg:block">
                  <div className="w-2 h-2 bg-blue-600 rounded-full absolute -left-1 top-1/2 transform -translate-y-1/2"></div>
                  Service Access Points
                </div>
              </div>
            </div>

            {/* Technology Details Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-blue-50 p-6 rounded-3xl border-l-4 border-blue-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaTruck className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Vehicle Integration
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Designed for seamless integration with bulk transport
                  vehicles, providing optimal mounting and operational
                  characteristics
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Mounting:</span>
                    <span className="font-semibold text-slate-800">
                      Vehicle Optimized
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Operation:</span>
                    <span className="font-semibold text-slate-800">
                      Mobile Ready
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaWind className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Dual Mode Operation
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Capable of both positive pressure for loading and vacuum
                  generation for unloading operations in a single unit
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      Positive pressure conveying
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      Vacuum unloading capability
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaLeaf className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Energy Efficiency
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Superior design ensures highly energy efficient operation,
                  reducing fuel consumption and operational costs
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      Reduced fuel consumption
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      Lower operational costs
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-3xl hover:-translate-y-2 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <FaWrench className="text-2xl text-white" />
                </div>
                <h4 className="text-lg font-semibold text-slate-800 mb-3">
                  Serviceability
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Easy service access and maintenance design ensures minimal
                  downtime and reduced maintenance costs
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      Quick service access
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-600 text-sm" />
                    <span className="text-sm text-slate-700">
                      Minimal downtime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
                Technical Excellence
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our truck blowers deliver exceptional performance for bulk
                vehicle applications, providing reliable pressure and vacuum
                generation for efficient material handling operations.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 p-6 rounded-2xl border-l-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                    style={{ borderLeftColor: spec.color }}
                  >
                    <div
                      className="text-2xl mb-4"
                      style={{ color: spec.color }}
                    >
                      {spec.icon}
                    </div>
                    <div>
                      <h4 className="text-sm text-slate-500 uppercase tracking-wide font-semibold mb-2">
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
                  className="w-full h-auto rounded-3xl shadow-2xl cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => openModal(productImageUrl)}
                />
                <div className="hidden lg:flex flex-wrap gap-2 justify-center mt-4 pointer-events-none">
                  <div className="text-xs bg-white px-3 py-1 rounded-full shadow-lg">
                    Bulk Vehicle Optimized
                  </div>
                  <div className="text-xs bg-white px-3 py-1 rounded-full shadow-lg">
                    Dual Operation Mode
                  </div>
                  <div className="text-xs bg-white px-3 py-1 rounded-full shadow-lg">
                    Energy Efficient Design
                  </div>
                  <div className="text-xs bg-white px-3 py-1 rounded-full shadow-lg">
                    Easy Maintenance
                  </div>
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
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Bulk Transport Applications
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Powering efficient material handling across diverse bulk transport
              operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <div className="flex flex-col gap-4">
              {applications.map((app, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-6 bg-white rounded-2xl shadow-sm transition-all duration-300 cursor-pointer border-2 border-transparent hover:translate-x-3 hover:shadow-lg hover:border-blue-600 ${
                    selectedApplication === index
                      ? "translate-x-3 shadow-lg border-blue-600"
                      : ""
                  }`}
                  onClick={() => setSelectedApplication(index)}
                >
                  <div className="text-4xl w-16 h-16 flex items-center justify-center bg-slate-50 rounded-2xl flex-shrink-0">
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
                    className={`text-blue-600 transition-transform duration-300 ml-auto ${
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
                      <FaCheckCircle className="text-green-600 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">
                        {benefit}
                      </span>
                    </div>
                  )
                )}
              </div>

              <button className="flex items-center justify-center gap-2 w-full px-4 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:-translate-y-1 transition-all duration-300">
                <span>Learn More</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-4">
              Why Choose SWAM Truck Blowers
            </h2>
            <p className="text-lg text-slate-600">
              Specialized technology for superior bulk vehicle performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-3xl text-center transition-all duration-300 border-2 border-transparent hover:-translate-y-3 hover:shadow-2xl hover:border-blue-600 group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl text-white transition-transform duration-300 group-hover:scale-110">
                  {advantage.icon}
                </div>
                <div className="mb-4">
                  <div className="text-4xl font-bold text-blue-600 leading-none">
                    {advantage.stat}
                  </div>
                  <div className="text-sm text-slate-500 font-semibold uppercase tracking-wide">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-600 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Efficient Bulk Operations?
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-10">
            Connect with our technical experts to discover how our truck blowers
            can optimize your bulk material handling operations with superior
            performance and reliability.
          </p>

          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <FaPhone />
              <span>Get Expert Consultation</span>
            </button>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border-2 border-white/30 rounded-full font-semibold backdrop-blur-xl hover:bg-white/20 hover:-translate-y-1 transition-all duration-300">
              <FaDownload />
              <span>Download Technical Brochure</span>
            </button>
          </div>

          <div className="flex justify-center gap-8 flex-wrap">
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <FaPhone className="text-blue-400" />
              <span>+91-99103-02163</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <FaEnvelope className="text-blue-400" />
              <span>sales@swamatics.com</span>
            </div>
            <div className="flex items-center gap-2 text-blue-200 text-sm">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Noida, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-xl flex items-center justify-center z-50 p-8 box-border"
          onClick={closeModal}
        >
          <div
            className="relative max-w-[95vw] max-h-[95vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-black/80 backdrop-blur-xl border-none rounded-full w-11 h-11 flex items-center justify-center text-white cursor-pointer z-10 hover:bg-black/95 hover:scale-110 transition-all duration-300 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>
            <div className="relative h-full overflow-hidden flex flex-col">
              <div
                className="flex-1 overflow-auto flex items-center justify-center p-4 relative"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <img
                  src={modalImage}
                  alt="Truck Blowers - Bulk Vehicle Specialized - Expanded View"
                  className="w-auto h-auto min-w-full min-h-full object-contain block cursor-grab transition-transform duration-300 active:cursor-grabbing"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 to-transparent text-white text-center z-10 backdrop-blur-xl">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    Truck Blowers - Bulk Vehicle Specialized
                  </h3>
                  <p className="text-slate-200 mb-6 text-lg drop-shadow-lg">
                    High Performance Pneumatic Loading/Unloading System
                  </p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold drop-shadow-lg">
                      Capacity: Up to 12,000 M³/Hr
                    </span>
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold drop-shadow-lg">
                      Operation: Positive & Vacuum
                    </span>
                    <span className="bg-white/20 backdrop-blur-xl border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold drop-shadow-lg">
                      Design: Mobile Optimized & Energy Efficient
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

export default TruckBlowers;
