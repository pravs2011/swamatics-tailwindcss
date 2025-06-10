import React from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaBuilding,
  FaIndustry,
  FaCog,
  FaTruck,
  FaGlobe,
  FaAward,
  FaRocket,
  FaTools,
  FaCertificate,
  FaChartLine,
  FaUsers,
  FaFlag,
  FaStar,
  FaLightbulb,
  FaShieldAlt,
  FaHandshake,
} from "react-icons/fa";
import {
  MdFactory,
  MdPrecisionManufacturing,
  MdTrendingUp,
} from "react-icons/md";
import { GiTurbine, GiVacuumCleaner, GiGears, GiFactory } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";
import { BsGraphUp, BsAward } from "react-icons/bs";

const History = () => {
  const timelineData = [
    {
      year: "1978",
      title: "OPENING",
      description:
        "Swam Pneumatics Pvt. Ltd Company founded by Mr. S.K Gambhir.",
      icon: <FaBuilding className="w-6 h-6" />,
      color: "bg-blue-500",
      bgPattern: "from-blue-500 to-blue-600",
    },
    {
      year: "1982",
      title: "CORPORATE OFFICES",
      description: "Corporate Offices established in Noida.",
      icon: <FaBuilding className="w-6 h-6" />,
      color: "bg-green-500",
      bgPattern: "from-green-500 to-green-600",
    },
    {
      year: "1996",
      title: "Company Growth",
      description: "The growth of Company After Joining Mr. Abhishek Gambhir.",
      icon: <FaChartLine className="w-6 h-6" />,
      color: "bg-purple-500",
      bgPattern: "from-purple-500 to-purple-600",
    },
    {
      year: "2000",
      title: "Manufacturing",
      description: "Introduction of ISO standards – Manufacturing.",
      icon: <FaCertificate className="w-6 h-6" />,
      color: "bg-orange-500",
      bgPattern: "from-orange-500 to-orange-600",
    },
    {
      year: "2002",
      title: "Established",
      description: "Second Factory Established, Noida",
      icon: <MdFactory className="w-6 h-6" />,
      color: "bg-red-500",
      bgPattern: "from-red-500 to-red-600",
    },
    {
      year: "2003",
      title: "Capacity",
      description:
        "Swam manufactured large blowers 30,000 capacity & its manufacturing capacity was expanded in the existing plants.",
      icon: <FaIndustry className="w-6 h-6" />,
      color: "bg-indigo-500",
      bgPattern: "from-indigo-500 to-indigo-600",
    },
    {
      year: "2004",
      title: "Manufacturing",
      description:
        "The vacuum boosters in combination with conventional Vacuum mechanical pumps boost high vacuum upto one micron. Ideal for low cost high displacement and vacuum from 50 Torr to one micron.",
      icon: <GiVacuumCleaner className="w-6 h-6" />,
      color: "bg-teal-500",
      bgPattern: "from-teal-500 to-teal-600",
    },
    {
      year: "2005",
      title: "OHSAS",
      description: "Introduction of ISO standards – OHSAS",
      icon: <FaAward className="w-6 h-6" />,
      color: "bg-pink-500",
      bgPattern: "from-pink-500 to-pink-600",
    },
    {
      year: "2006",
      title: "CNC'S",
      description: "Upgrade plants to CNC machines with over CNC's",
      icon: <FaCog className="w-6 h-6" />,
      color: "bg-yellow-500",
      bgPattern: "from-yellow-500 to-yellow-600",
    },
    {
      year: "2009",
      title: "TRUCK BLOWER",
      description:
        "Introduction of Blower products. Truck Blower: Swam bulk vehicle truck blowers have been specifically designed to meet the operating requirements of bulk and silo vehicles in the generation of pressure and vacuum needed for the pneumatic loading and unloading.",
      icon: <FaTruck className="w-6 h-6" />,
      color: "bg-cyan-500",
      bgPattern: "from-cyan-500 to-cyan-600",
    },
    {
      year: "2010",
      title: "PUMPS",
      description:
        "Started manufacturing liquid Ring Vacuum Pumps. • Capacity 36000 M3 / Hr. • Vacuum upto 90%. • Pressure upto 1.1 bar'g' in single stage. • Suitable for Positive and Negative conveying and Boosting.",
      icon: <MdPrecisionManufacturing className="w-6 h-6" />,
      color: "bg-emerald-500",
      bgPattern: "from-emerald-500 to-emerald-600",
    },
    {
      year: "2012",
      title: "ESTABLISHED",
      description:
        "Started Dry Screw Vacuum Pumps. 3rd Factory established Noida.",
      icon: <FaTools className="w-6 h-6" />,
      color: "bg-violet-500",
      bgPattern: "from-violet-500 to-violet-600",
    },
    {
      year: "2014",
      title: "ESTABLISHED",
      description: "Established Swam Middle East FZE Dubai",
      icon: <FaGlobe className="w-6 h-6" />,
      color: "bg-rose-500",
      bgPattern: "from-rose-500 to-rose-600",
    },
    {
      year: "2015",
      title: "ESTABLISHED",
      description:
        "• 4th Factory established Noida. • Established Swam International Pvt. Ltd. (Australia).",
      icon: <FaGlobe className="w-6 h-6" />,
      color: "bg-amber-500",
      bgPattern: "from-amber-500 to-amber-600",
    },
    {
      year: "2016",
      title: "TURBO BLOWER, SCREW BLOWER",
      description:
        "Introduction of Blower products. Turbo Blower: High efficiency Swam Turbo Blowers are most advanced single stage centrifugal machine based on high speed focused specialized technology oil less operation. Screw Blower: Most advanced energy efficient Blower with over 25% saving in power consumption to conventional blowers. Available in wide sizes upto 9000 m3 / hr.",
      icon: <GiTurbine className="w-6 h-6" />,
      color: "bg-lime-500",
      bgPattern: "from-lime-500 to-lime-600",
    },
  ];

  const growthPrinciples = [
    {
      name: "Integrity",
      icon: <FaShieldAlt className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "High Quality",
      icon: <BsAward className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      name: "Reliability",
      icon: <FaHandshake className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Innovation",
      icon: <FaLightbulb className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "World best practices",
      icon: <FaGlobe className="w-8 h-8" />,
      color: "from-teal-500 to-teal-600",
    },
    {
      name: "Maintaining the highest international standards",
      icon: <FaStar className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Responding to the requirements of our customers",
      icon: <FaUsers className="w-8 h-8" />,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const statistics = [
    {
      number: "45+",
      label: "Years of Excellence",
      icon: <FaFlag className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      number: "4",
      label: "Manufacturing Plants",
      icon: <GiFactory className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      number: "3",
      label: "Countries",
      icon: <FaGlobe className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      number: "30K+",
      label: "Blower Capacity",
      icon: <GiTurbine className="w-8 h-8" />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -right-10 w-72 h-72 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-green-100 to-teal-100 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>

          {/* Geometric Patterns */}
          <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rotate-45 opacity-30 animate-spin-slow"></div>
          <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rotate-45 opacity-30 animate-spin-slow animation-delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-green-400 rotate-45 opacity-30 animate-spin-slow animation-delay-2000"></div>
        </div>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>

          {/* Hero Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-white rounded-full animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-10 right-1/3 w-12 h-12 border-2 border-white rounded-full animate-pulse animation-delay-3000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center mb-8 mt-15">
              <div className="relative">
                <FaRocket className="w-20 h-20 text-blue-300 animate-bounce" />
                <HiSparkles className="absolute -top-2 -right-2 w-8 h-8 text-yellow-300 animate-pulse" />
                <HiSparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-blue-200 animate-pulse animation-delay-500" />
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-8">
              From humble beginnings in 1978 to becoming a global leader in
              pneumatic solutions
            </p>

            {/* Animated Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-blue-800 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-300 to-cyan-300 h-full w-full animate-pulse"></div>
              </div>
              <p className="text-blue-200 text-sm mt-2">
                45+ Years of Innovation
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative -mt-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statistics.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border-l-4 border-blue-500"
                >
                  <div
                    className={`bg-gradient-to-r ${stat.color} text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${stat.color} h-2 rounded-full animate-pulse`}
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <MdTrendingUp className="w-16 h-16 text-blue-600" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                History
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Decades of innovation, growth, and excellence in pneumatic
              solutions
            </p>
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce animation-delay-200"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
            </div>
          </div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full shadow-lg"></div>

            {/* Decorative elements along timeline */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full animate-pulse"></div>
            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full animate-pulse"></div>

            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Timeline content */}
                <div
                  className={`w-5/12 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white rounded-3xl shadow-2xl p-8 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden">
                    {/* Background pattern for card */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <GiGears className="w-full h-full transform rotate-12" />
                    </div>

                    <div className="flex items-center mb-6">
                      <div
                        className={`bg-gradient-to-r ${
                          item.bgPattern
                        } text-white p-4 rounded-2xl mr-4 shadow-lg transform hover:rotate-12 transition-transform duration-300 ${
                          index % 2 !== 0 ? "order-2 ml-4 mr-0" : ""
                        }`}
                      >
                        {item.icon}
                      </div>
                      <div className={index % 2 !== 0 ? "order-1" : ""}>
                        <div className="flex items-center">
                          <h3 className="text-3xl font-bold text-gray-900 mb-1">
                            {item.year}
                          </h3>
                          <HiSparkles className="w-6 h-6 text-yellow-400 ml-2 animate-pulse" />
                        </div>
                        <h4 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {item.description}
                    </p>

                    {/* Decorative bottom border */}
                    <div
                      className={`mt-6 h-1 bg-gradient-to-r ${item.bgPattern} rounded-full`}
                    ></div>
                  </div>
                </div>

                {/* Enhanced Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-xl"></div>
                  <div className="absolute inset-0 w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-ping opacity-75"></div>
                </div>

                {/* Empty space on the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Growth Principles Section */}
        <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 py-24 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <BsGraphUp className="w-20 h-20 text-blue-600" />
                  <div className="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                    <HiSparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Our{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Growth Philosophy
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                SWAM continues to grow year by year. Our focus and history is
                growth through our core principles that define who we are and
                guide everything we do.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {growthPrinciples.map((principle, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden group"
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-50"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                    <FaIndustry className="w-full h-full transform rotate-12" />
                  </div>

                  <div className="relative">
                    <div
                      className={`bg-gradient-to-br ${principle.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}
                    >
                      {principle.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                      {principle.name}
                    </h3>
                    <div
                      className={`w-20 h-1 bg-gradient-to-r ${principle.color} mx-auto rounded-full`}
                    ></div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Closing Section */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-black text-white py-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-2 h-32 bg-blue-500 opacity-20 transform rotate-45"></div>
            <div className="absolute bottom-20 right-20 w-2 h-32 bg-purple-500 opacity-20 transform rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-blue-500 opacity-10 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <FaAward className="w-20 h-20 text-blue-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <h2 className="text-5xl font-bold mb-8">
              Proud of Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Legacy
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              Swam is very proud of its history and achievements, our constant
              desire to be the best company we can be. We continue to grow year
              on year with our unwavering focus on integrity, quality,
              reliability, and innovation.
            </p>

            {/* Enhanced animated dots */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-ping animation-delay-200"></div>
              <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping animation-delay-400"></div>
            </div>

            {/* Call to action */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <span>Continue the Journey</span>
              <FaRocket className="ml-2 w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default History;
