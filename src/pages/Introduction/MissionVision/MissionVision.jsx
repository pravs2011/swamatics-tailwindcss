import React from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaEye,
  FaBullseye,
  FaLeaf,
  FaShieldAlt,
  FaCogs,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaStar,
  FaGlobe,
  FaAward,
  FaTools,
  FaCheckCircle,
  FaHeart,
  FaRocket,
  FaCertificate,
  FaArrowRight,
  FaQuoteLeft,
} from "react-icons/fa";

const MissionVision = () => {
  const missionPoints = [
    {
      icon: <FaLeaf className="text-green-600" />,
      title: "Environmental Awareness",
      description: "Being environmentally aware in all our operations",
    },
    {
      icon: <FaShieldAlt className="text-blue-600" />,
      title: "Safe Working Environment",
      description: "Providing a safe working environment for all",
    },
    {
      icon: <FaCogs className="text-purple-600" />,
      title: "Manufacturing Excellence",
      description: "Ever improving manufacturing practices",
    },
    {
      icon: <FaTools className="text-orange-600" />,
      title: "State-of-the-Art Engineering",
      description: "Advanced engineering processes and innovation",
    },
    {
      icon: <FaUsers className="text-indigo-600" />,
      title: "Customer Focus",
      description: "Responding and listening to our customers",
    },
    {
      icon: <FaLightbulb className="text-yellow-600" />,
      title: "Product Development",
      description: "Continued product development and innovation",
    },
  ];

  const visionPoints = [
    {
      icon: <FaHandshake className="text-blue-600" />,
      title: "Customer Partnership",
      description: "Working alongside our customers",
    },
    {
      icon: <FaLightbulb className="text-purple-600" />,
      title: "Innovation & Flexibility",
      description: "Being flexible and innovative in our approach",
    },
    {
      icon: <FaGlobe className="text-green-600" />,
      title: "International Standards",
      description: "Meeting and exceeding international standards",
    },
    {
      icon: <FaAward className="text-red-600" />,
      title: "Quality Control",
      description: "Stringent quality control and testing",
    },
    {
      icon: <FaCheckCircle className="text-indigo-600" />,
      title: "Approved Components",
      description: "Using internationally recognized components",
    },
  ];

  const coreValues = [
    {
      title: "Integrity",
      color: "from-blue-600 to-blue-800",
      icon: <FaHeart size={32} />,
      description:
        "Building trust through honest and ethical business practices",
      highlights: ["Transparency", "Ethics", "Trust"],
    },
    {
      title: "High Quality",
      color: "from-green-600 to-green-800",
      icon: <FaCertificate size={32} />,
      description:
        "Delivering excellence in every product and service we provide",
      highlights: ["Excellence", "Standards", "Precision"],
    },
    {
      title: "Reliability",
      color: "from-purple-600 to-purple-800",
      icon: <FaShieldAlt size={32} />,
      description: "Consistent performance you can depend on, every time",
      highlights: ["Consistency", "Dependability", "Performance"],
    },
    {
      title: "Innovation",
      color: "from-orange-600 to-red-600",
      icon: <FaRocket size={32} />,
      description: "Pioneering advanced solutions for tomorrow's challenges",
      highlights: ["Technology", "Creativity", "Progress"],
    },
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Our Mission & Vision
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Driving excellence in pneumatic solutions while building a
                  sustainable future
                </p>
                <div className="flex space-x-4 text-sm lg:text-base">
                  <span className="flex items-center space-x-2">
                    <FaGlobe className="text-blue-300" />
                    <span>Global Excellence</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FaAward className="text-blue-300" />
                    <span>Quality Driven</span>
                  </span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md h-80 bg-gray-300 rounded-2xl shadow-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <img
                      src="https://swamatics.com/wp-content/uploads/2024/02/4.png"
                      alt="Mission Vision"
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaBullseye size={48} className="text-blue-600" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  To be the best global company that we can be. By providing the
                  right product for the right application.
                </p>
                <p className="text-lg text-gray-600">
                  Swam Pneumatics has continued to grow from its humble
                  beginnings to an international supplier of high quality
                  products.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl">{point.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="w-full max-w-2xl h-64 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-600">
                  <FaBullseye size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    Mission Image Placeholder
                  </p>
                  <p className="text-sm">Replace with mission-related image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-100 rounded-full">
                  <FaEye size={48} className="text-purple-600" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  To provide globally the best manufactured products, focusing
                  on meeting our customers' requirements while being
                  competitive.
                </p>
                <p className="text-lg text-gray-600">
                  Swam sees itself as being recognised as a world leader,
                  providing high quality robust products.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-200">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-2xl">{point.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="w-full max-w-2xl h-64 bg-gray-200 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                <div className="text-center text-gray-600">
                  <FaEye size={48} className="mx-auto mb-4" />
                  <p className="text-lg font-semibold">
                    Vision Image Placeholder
                  </p>
                  <p className="text-sm">Replace with vision-related image</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
                  <FaStar size={48} className="text-white" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our focus is growth through these fundamental principles that
                guide everything we do. These values shape our culture and drive
                our commitment to excellence.
              </p>
              <div className="flex justify-center mt-8">
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="group hover:scale-102 transition-all duration-500"
                >
                  <div
                    className={`bg-gradient-to-br ${value.color} rounded-3xl p-8 lg:p-10 text-white shadow-2xl hover:shadow-3xl transform transition-all duration-500 relative overflow-hidden`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-110 transition-transform duration-500"></div>

                    <div className="relative z-10">
                      {/* Icon and Title */}
                      <div className="flex items-start space-x-6 mb-6">
                        <div className="flex items-center justify-center w-20 h-20 bg-black bg-opacity-20 rounded-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white border-opacity-30">
                          <div className="text-white drop-shadow-lg">
                            {value.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl lg:text-4xl font-bold mb-2 text-white drop-shadow-lg">
                            {value.title}
                          </h3>
                          <div className="w-16 h-1 bg-white bg-opacity-60 rounded-full shadow-sm"></div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-lg lg:text-xl text-white leading-relaxed mb-6 drop-shadow-sm">
                        {value.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <div className="flex items-center text-white mb-3">
                          <FaQuoteLeft
                            size={16}
                            className="mr-2 drop-shadow-sm"
                          />
                          <span className="text-sm font-medium drop-shadow-sm">
                            Key Focus Areas
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {value.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2 bg-black bg-opacity-20 rounded-full px-4 py-2 backdrop-blur-sm border border-white border-opacity-30 shadow-sm"
                            >
                              <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
                              <span className="text-sm font-medium text-white drop-shadow-sm">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-end mt-8">
                        <div className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-black group-hover:bg-opacity-30 transition-all duration-300 shadow-lg border border-white border-opacity-30">
                          <FaArrowRight className="text-white group-hover:translate-x-1 transition-transform duration-300 drop-shadow-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Values Summary */}
            <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-12 border border-blue-100">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  Values in Action
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  These core values aren't just words on a wall - they're the
                  foundation of how we operate, make decisions, and build
                  relationships with our customers, partners, and communities
                  worldwide.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FaUsers size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      5000+
                    </div>
                    <div className="text-sm text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FaAward size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Quality Awards</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FaGlobe size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      80+
                    </div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <FaRocket size={24} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      100+
                    </div>
                    <div className="text-sm text-gray-600">Innovations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Growth Statement */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Continuous Growth & Excellence
              </h2>
              <p className="text-xl lg:text-2xl leading-relaxed mb-8 text-blue-100">
                Swam continues to grow year on year. Our ongoing strength is due
                to our commitment to working alongside our customers, being
                flexible and innovative, and maintaining the highest standards
                of quality.
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    25+
                  </div>
                  <div className="text-sm text-blue-200">
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    50+
                  </div>
                  <div className="text-sm text-blue-200">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    1000+
                  </div>
                  <div className="text-sm text-blue-200">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300 mb-2">
                    100%
                  </div>
                  <div className="text-sm text-blue-200">
                    Quality Commitment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainTemplate>
  );
};

export default MissionVision;
