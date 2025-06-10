import React from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaIndustry,
  FaGlobeAmericas,
  FaCogs,
  FaAward,
  FaUsers,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChartLine,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaTools,
  FaFlask,
  FaBolt,
  FaBuilding,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const AboutUs = () => {
  // Add custom styles for animations
  const customStyles = `
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    @keyframes float-delayed {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }
    .animate-float { animation: float 3s ease-in-out infinite; }
    .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
    .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
  `;
  const stats = [
    { icon: FaCalendarAlt, number: "45+", text: "Years of Excellence" },
    { icon: FaUsers, number: "55,000+", text: "Global Installations" },
    { icon: FaGlobeAmericas, number: "15+", text: "Export Countries" },
    { icon: FaCogs, number: "100,000", text: "m³/hr Capacity" },
  ];

  const coreValues = [
    {
      icon: FaHandshake,
      title: "Integrity",
      description:
        "Building trust through transparent and ethical business practices",
    },
    {
      icon: FaAward,
      title: "High Quality",
      description:
        "Delivering superior products that exceed industry standards",
    },
    {
      icon: FaShieldAlt,
      title: "Reliability",
      description:
        "Consistent performance and dependable solutions for our clients",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "Pioneering next-generation technology and advanced solutions",
    },
  ];

  const achievements = [
    {
      icon: FaBuilding,
      title: "State-of-the-Art Manufacturing",
      description:
        "Advanced manufacturing facility equipped with innovative solutions and cutting-edge technology",
      highlight: "Next-Gen Facility",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaFlask,
      title: "Advanced Testing Capabilities",
      description:
        "In-house testing up to 1000KW with 6.6KV testing arrangement ensuring superior quality",
      highlight: "1000KW Testing",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaGlobeAmericas,
      title: "Global Presence & Reach",
      description:
        "International offices in Australia with strategic agents in Dubai & United States",
      highlight: "3 Continents",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: FaCogs,
      title: "Precision Engineering",
      description:
        "Advanced machine tools and precision engineering to exceed customer expectations",
      highlight: "Premium Quality",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FaCertificate,
      title: "Industry Leadership",
      description:
        "Legacy of more than 4 decades serving global markets with unmatched expertise",
      highlight: "40+ Years",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: FaRocket,
      title: "Innovation Excellence",
      description:
        "Continuous R&D and technological advancement driving industry transformation",
      highlight: "Future Ready",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <MainTemplate>
      <style>{customStyles}</style>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-float"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-float-slow"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600 rounded-full mt-10 hover:bg-blue-500 hover:scale-110 hover:rotate-12 transition-all duration-500 cursor-pointer group">
                  <FaIndustry className="text-4xl group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight hover:scale-105 transition-transform duration-300">
                About{" "}
                <span className="text-blue-300 hover:text-cyan-300 transition-colors duration-300">
                  SWAM Group
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed hover:text-blue-100 transition-colors duration-300">
                Leading the industry since 1978 as the country's largest
                manufacturer of Rotary Blowers, Compressors and Vacuum Pumps &
                allied systems
              </p>
              <div className="flex justify-center">
                <HiOutlineSparkles className="text-3xl text-blue-300 animate-pulse hover:text-yellow-300 hover:scale-125 transition-all duration-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 cursor-pointer"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:shadow-2xl group-hover:from-purple-500 group-hover:to-pink-600 transition-all duration-500 group-hover:rotate-12">
                      <stat.icon className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300">
                    {stat.number}
                  </h3>
                  <p className="text-gray-600 font-medium group-hover:text-gray-800 group-hover:font-semibold transition-all duration-300">
                    {stat.text}
                  </p>
                  <div className="mt-3 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our <span className="text-blue-600">Journey</span>
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    <strong>SWAM Group</strong> was founded in{" "}
                    <span className="text-blue-600 font-semibold">1978</span> by
                    our visionary and Honorable CMD
                    <strong> Mr. S K Gambhir</strong>, a distinguished
                    technocrat with B.Tech from India's premium institute,
                    followed by post-graduate studies in business
                    administration.
                  </p>
                  <p>
                    With over <strong>60 years of experience</strong>, he has
                    worked in prestigious institutions including M/s Engineers
                    India Limited, specializing in PMC Projects of Oil & Gas and
                    Petrochemical Projects.
                  </p>
                  <p>
                    Today, SWAM stands as a{" "}
                    <strong>big industrial house</strong> with state-of-the-art
                    manufacturing facilities, delivering innovative solutions
                    and next-generation advanced technology products equipped
                    with advanced machine tools to exceed customer expectations.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <FaTools className="text-3xl text-blue-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Advanced Technology
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Next-generation solutions with cutting-edge equipment
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <FaChartLine className="text-3xl text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Continuous Growth
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Year-on-year expansion and market leadership
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <FaGlobeAmericas className="text-3xl text-purple-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Global Reach</h3>
                  <p className="text-gray-600 text-sm">
                    Serving customers across 15+ countries worldwide
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <FaAward className="text-3xl text-yellow-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">
                    Industry Leader
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Country's largest manufacturer in our domain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-blue-600">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our focus is growth through these fundamental principles that
                drive everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 border border-gray-100 group hover:-translate-y-4 hover:scale-105 cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:scale-125 group-hover:rotate-12 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-500 group-hover:shadow-lg">
                        <value.icon className="text-2xl text-white group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                      {value.description}
                    </p>
                    <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-200"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="py-20 bg-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-6 hover:scale-110 hover:shadow-xl hover:shadow-blue-400/50 transition-all duration-300">
                <FaBolt className="text-2xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Key{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                  Achievements
                </span>
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                Groundbreaking milestones that define our journey of excellence
                and technological innovation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl transform scale-110"></div>
                  <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-gray-300 shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:-translate-y-3">
                    {/* Icon and Highlight Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`p-4 bg-gradient-to-r ${achievement.color} rounded-xl group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                      >
                        <achievement.icon className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-2 rounded-full text-sm font-bold border border-gray-600 group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white transition-all duration-300">
                        {achievement.highlight}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-105">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-all duration-300">
                      {achievement.description}
                    </p>

                    {/* Decorative Line */}
                    <div
                      className={`mt-6 h-1 bg-gradient-to-r ${achievement.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Statistics */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-400">
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-blue-300 mb-2 group-hover:text-blue-200">
                  1000KW
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  Testing Capacity
                </div>
              </div>
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-300 mb-2 group-hover:text-purple-200">
                  6.6KV
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  Voltage Testing
                </div>
              </div>
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-green-300 mb-2 group-hover:text-green-200">
                  100K+
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  m³/hr Capacity
                </div>
              </div>
              <div className="text-center group cursor-pointer hover:transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl font-bold text-orange-300 mb-2 group-hover:text-orange-200">
                  Global
                </div>
                <div className="text-gray-300 text-sm group-hover:text-white font-medium">
                  Market Leader
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Get In <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-xl text-gray-600">
                Ready to partner with industry leaders? Contact us today
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaMapMarkerAlt className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Address
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    C-2, SECTOR-3, NOIDA-201301, (U.P.) INDIA
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="text-center group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaPhone className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                    Phone
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    +91-99103-02163
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    +91-120-2527610, 2537282
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-green-500 to-teal-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
                <div className="text-center group cursor-pointer hover:transform hover:-translate-y-2 transition-all duration-500">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full group-hover:shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <FaEnvelope className="text-2xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    sales@swamatics.com
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    service@swamatics.com
                  </p>
                  <div className="mt-4 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default AboutUs;
