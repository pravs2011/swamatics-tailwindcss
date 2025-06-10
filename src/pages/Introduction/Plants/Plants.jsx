import React from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaIndustry,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExpand,
  FaCheckCircle,
  FaCogs,
  FaThermometerHalf,
  FaBuilding,
  FaArrowRight,
  FaGlobe,
  FaCertificate,
  FaUsers,
  FaTrophy,
  FaRocket,
  FaShieldAlt,
  FaStar,
  FaChartLine,
} from "react-icons/fa";

const Plants = () => {
  // Plant Images - Easy to update individually
  const plantImages = {
    plant1:
      "https://images.unsplash.com/photo-1558618047-d22f3c8e8082?auto=format&fit=crop&w=800&q=80", // Large industrial facility
    plant2:
      "https://images.unsplash.com/photo-1613312328-37e4e20abe4a?auto=format&fit=crop&w=800&q=80", // Modern factory
    plant3:
      "https://images.unsplash.com/photo-1587293852123-8c75937b1e67?auto=format&fit=crop&w=800&q=80", // Manufacturing plant
    plant4:
      "https://images.unsplash.com/photo-1581094794361-6d6b0c21c7d2?auto=format&fit=crop&w=800&q=80", // Industrial complex
    upcomingPlant:
      "https://images.unsplash.com/photo-1586864387976-5b5a1ea12e6b?auto=format&fit=crop&w=800&q=80", // Construction site
  };

  // Fallback Images
  const fallbackImages = {
    plant1:
      "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+1",
    plant2:
      "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+2",
    plant3:
      "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+3",
    plant4:
      "https://via.placeholder.com/800x300/3B82F6/FFFFFF?text=Manufacturing+Plant+4",
    upcomingPlant:
      "https://via.placeholder.com/800x300/F59E0B/FFFFFF?text=Upcoming+Facility",
  };

  const plants = [
    {
      id: 1,
      address: "C-2, Sector-3, Noida, U.P. INDIA",
      status: "operational",
      established: "1980",
      image: "https://swamatics.com/wp-content/uploads/2024/02/1.png",
      fallback: fallbackImages.plant1,
    },
    {
      id: 2,
      address: "B-9, Sector-57, Noida, U.P. INDIA",
      status: "operational",
      established: "2005",
      image: "https://swamatics.com/wp-content/uploads/2024/02/plnt-2.jpg",
      fallback: fallbackImages.plant2,
    },
    {
      id: 3,
      address: "B-111, Sector-67, Noida, U.P. INDIA",
      status: "operational",
      established: "2008",
      image: "https://swamatics.com/wp-content/uploads/2024/02/2.png",
      fallback: fallbackImages.plant3,
    },
    {
      id: 4,
      address: "C-52, Sector-57, Noida, U.P. INDIA",
      status: "operational",
      established: "2010",
      image: "https://swamatics.com/wp-content/uploads/2024/02/6.png",
      fallback: fallbackImages.plant4,
    },
    {
      id: 5,
      address: "SWAM Upcoming Facility in Noida Sector-80",
      status: "upcoming",
      established: "2024",
      image:
        "https://swamatics.com/wp-content/uploads/2024/05/pngtree-3d-render-of-a-vacant-industrial-facility-interior-picture-image_5578091.png",
      fallback: fallbackImages.upcomingPlant,
    },
  ];

  const stats = [
    {
      icon: <FaCalendarAlt className="text-blue-600 text-4xl" />,
      title: "Since 1980",
      description: "Started with 1 factory",
      value: "44+ Years",
      gradient: "from-blue-500 to-blue-700",
      pattern: "bg-blue-50",
    },
    {
      icon: <FaIndustry className="text-emerald-600 text-4xl" />,
      title: "Manufacturing Plants",
      description: "Operational facilities",
      value: "4 Plants",
      gradient: "from-emerald-500 to-emerald-700",
      pattern: "bg-emerald-50",
    },
    {
      icon: <FaExpand className="text-purple-600 text-4xl" />,
      title: "Manufacturing Space",
      description: "Total floor area",
      value: "130,000 sq. ft",
      gradient: "from-purple-500 to-purple-700",
      pattern: "bg-purple-50",
    },
    {
      icon: <FaGlobe className="text-orange-600 text-4xl" />,
      title: "Global Expansion",
      description: "International presence",
      value: "Growing",
      gradient: "from-orange-500 to-orange-700",
      pattern: "bg-orange-50",
    },
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gray-50 relative overflow-hidden">
        {/* Hero Section with Enhanced Graphics */}
        <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          {/* Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Decorative Element Above Title */}
              <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent mt-15 to-blue-400"></div>
                  <FaIndustry className="text-blue-400 text-3xl" />
                  <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-blue-400"></div>
                </div>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Our Plants
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
                Swam, an innovative and progressive company, has grown over the
                years. Its success can be measured by our ever-increasing number
                of manufacturing facilities.
              </p>

              {/* Floating Action Indicators */}
              <div className="flex justify-center space-x-8 mt-12">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <FaTrophy className="text-white text-lg" />
                  </div>
                  <span className="text-sm text-blue-200">Excellence</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <FaRocket className="text-white text-lg" />
                  </div>
                  <span className="text-sm text-blue-200">Innovation</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-2 shadow-lg">
                    <FaShieldAlt className="text-white text-lg" />
                  </div>
                  <span className="text-sm text-blue-200">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.02' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                Company Metrics
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
                  {/* Floating Card Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-20`}
                  ></div>

                  <div
                    className={`relative ${stat.pattern} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}
                  >
                    {/* Icon with Animated Background */}
                    <div className="relative flex justify-center mb-6">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-full w-20 h-20 opacity-20 animate-pulse`}
                      ></div>
                      <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                        {stat.icon}
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </h3>
                      <p className="text-lg font-semibold text-gray-700 mb-2">
                        {stat.title}
                      </p>
                      <p className="text-gray-600">{stat.description}</p>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-4 right-4">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Growth Story Section */}
        <div className="py-20 bg-gradient-to-br from-slate-100 via-gray-100 to-blue-100 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-20 blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-sm font-semibold mb-6">
                <FaChartLine className="mr-2" />
                Growth Timeline
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Our Growth Journey
              </h2>

              {/* Timeline Visual */}
              <div className="max-w-4xl mx-auto">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <div className="flex justify-center items-center space-x-8">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        1980
                      </div>
                      <p className="mt-2 text-sm text-gray-600">1 Factory</p>
                    </div>
                    <FaArrowRight className="text-gray-400 text-2xl" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        2010
                      </div>
                      <p className="mt-2 text-sm text-gray-600">4 Plants</p>
                    </div>
                    <FaArrowRight className="text-gray-400 text-2xl" />
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        2024
                      </div>
                      <p className="mt-2 text-sm text-gray-600">5th Plant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50">
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p className="text-center text-xl">
                    In <span className="font-bold text-blue-600">1980</span>,
                    Swam started with just{" "}
                    <span className="font-bold">1 factory</span>. By{" "}
                    <span className="font-bold text-purple-600">2010</span>, we
                    had expanded to{" "}
                    <span className="font-bold">4 manufacturing plants</span>{" "}
                    with a total manufacturing floor space of
                    <span className="font-bold text-emerald-600 text-xl">
                      {" "}
                      12,100 m² or 130,000 sq. ft
                    </span>
                    .
                  </p>
                  <p className="text-center text-xl">
                    Currently, there are approved plans to expand with a{" "}
                    <span className="font-bold text-orange-600">
                      5th manufacturing plant
                    </span>
                    which will increase the number of international plants,
                    demonstrating our commitment to global growth and excellence
                    in manufacturing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Quality Control Section */}
        <div className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>

                <h2 className="text-5xl font-bold text-gray-900 mb-8">
                  Quality Control Excellence
                </h2>

                <div className="space-y-8">
                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl transform -skew-y-1 group-hover:skew-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-start space-x-6 p-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FaCheckCircle className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          Raw Material Inspection
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          All raw materials and castings are thoroughly checked
                          upon delivery, with defects quarantined and returned
                          to suppliers.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl transform skew-y-1 group-hover:skew-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-start space-x-6 p-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FaThermometerHalf className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          "Hot Run" Testing
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          Final product testing is completed at our specialized
                          "Hot run" testing station to ensure optimal
                          performance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl transform -skew-y-1 group-hover:skew-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-start space-x-6 p-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                        <FaCertificate className="text-white text-2xl" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          Quality Assurance
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          We have developed a very high level of quality control
                          throughout our manufacturing process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-3xl transform rotate-2"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 p-10 rounded-3xl shadow-2xl border border-white/50">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full w-24 h-24 mx-auto opacity-20 animate-pulse"></div>
                      <FaCogs className="relative text-blue-600 text-8xl mx-auto" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Advanced Manufacturing
                    </h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      Our state-of-the-art facilities are equipped with the
                      latest technology and quality control systems to ensure
                      the highest standards in every product we manufacture.
                    </p>

                    {/* Achievement Badges */}
                    <div className="flex justify-center space-x-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mb-2">
                          <FaStar className="text-white text-lg" />
                        </div>
                        <span className="text-xs text-gray-600">Premium</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-2">
                          <FaShieldAlt className="text-white text-lg" />
                        </div>
                        <span className="text-xs text-gray-600">Certified</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-2">
                          <FaTrophy className="text-white text-lg" />
                        </div>
                        <span className="text-xs text-gray-600">Award</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Manufacturing Plants Section */}
        <div className="py-20 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200 to-transparent rounded-full opacity-30 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200 to-transparent rounded-full opacity-30 blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-gray-800 rounded-full text-white text-sm font-semibold mb-6 shadow-lg">
                <FaBuilding className="mr-2" />
                Manufacturing Facilities
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Manufacturing Plants
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our strategically located manufacturing facilities in Noida,
                India, serve as the backbone of our operations.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mt-6"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {plants.map((plant, index) => (
                <div key={plant.id} className="group relative">
                  {/* Floating Background Effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl transform transition-all duration-500 ${
                      plant.status === "upcoming"
                        ? "bg-gradient-to-br from-orange-400 to-red-400 group-hover:scale-105"
                        : "bg-gradient-to-br from-blue-400 to-indigo-400 group-hover:scale-105"
                    } opacity-20 blur-xl`}
                  ></div>

                  <div
                    className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 p-8 border-l-4 ${
                      plant.status === "upcoming"
                        ? "border-orange-500"
                        : "border-blue-500"
                    } backdrop-blur-sm border-t border-white/50`}
                  >
                    {/* Factory Image */}
                    <div className="relative mb-6 rounded-xl overflow-hidden">
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={plant.image}
                          alt={`${
                            plant.status === "upcoming"
                              ? "Upcoming"
                              : "Manufacturing"
                          } facility`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.src = plant.fallback;
                          }}
                        />
                        {/* Image Overlay */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${
                            plant.status === "upcoming"
                              ? "from-orange-900/50 to-transparent"
                              : "from-blue-900/50 to-transparent"
                          }`}
                        ></div>

                        {/* Status Badge on Image */}
                        <div className="absolute top-4 right-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm shadow-lg ${
                              plant.status === "upcoming"
                                ? "bg-orange-500/90 text-white"
                                : "bg-green-500/90 text-white"
                            }`}
                          >
                            {plant.status === "upcoming"
                              ? "Coming Soon"
                              : "Active"}
                          </span>
                        </div>

                        {/* Plant ID Badge */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                            <span className="text-gray-800 font-bold text-sm">
                              Plant #{plant.id}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${
                            plant.status === "upcoming"
                              ? "bg-gradient-to-r from-orange-500 to-red-500"
                              : "bg-gradient-to-r from-blue-500 to-indigo-500"
                          }`}
                        >
                          <FaBuilding className="text-white text-2xl" />
                        </div>
                        <div>
                          <span
                            className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                              plant.status === "upcoming"
                                ? "bg-gradient-to-r from-orange-100 to-red-100 text-orange-800"
                                : "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800"
                            }`}
                          >
                            {plant.status === "upcoming"
                              ? "Upcoming"
                              : "Operational"}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">
                          #{plant.id}
                        </div>
                        <div className="text-sm text-gray-500">
                          {plant.established}
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                      <div className="flex items-start space-x-4">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center mt-1 ${
                            plant.status === "upcoming"
                              ? "bg-orange-100"
                              : "bg-blue-100"
                          }`}
                        >
                          <FaMapMarkerAlt
                            className={`text-lg ${
                              plant.status === "upcoming"
                                ? "text-orange-600"
                                : "text-blue-600"
                            }`}
                          />
                        </div>
                        <p className="text-gray-700 font-medium leading-relaxed flex-1">
                          {plant.address}
                        </p>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-3 h-3 rounded-full ${
                              plant.status === "upcoming"
                                ? "bg-orange-400"
                                : "bg-green-400"
                            } animate-pulse`}
                          ></div>
                          <span className="text-sm text-gray-600 font-medium">
                            {plant.status === "upcoming"
                              ? "Under Development"
                              : "Active Production"}
                          </span>
                        </div>
                        <div
                          className={`p-2 rounded-full transition-colors duration-300 ${
                            plant.status === "upcoming"
                              ? "bg-orange-50 group-hover:bg-orange-100"
                              : "bg-blue-50 group-hover:bg-blue-100"
                          }`}
                        >
                          <FaArrowRight
                            className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${
                              plant.status === "upcoming"
                                ? "text-orange-600"
                                : "text-blue-600"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Growth Focus Section */}
        <div className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-60 right-40 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-40 left-1/3 w-36 h-36 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white text-sm font-semibold mb-8 shadow-lg">
                <FaRocket className="mr-2" />
                Our Core Values
              </div>
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Continuous Growth & Excellence
              </h2>
              <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
                Swam continues to grow year on year. Our focus is growth
                through: Integrity, High Quality, Reliability, and Innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-20 h-20 mx-auto opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <FaCheckCircle className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-blue-200 text-sm">
                  Ethical business practices
                </p>
              </div>

              <div className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full w-20 h-20 mx-auto opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <FaCertificate className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">High Quality</h3>
                <p className="text-blue-200 text-sm">
                  Premium manufacturing standards
                </p>
              </div>

              <div className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-20 h-20 mx-auto opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-purple-600 to-purple-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <FaCogs className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-blue-200 text-sm">
                  Consistent performance delivery
                </p>
              </div>

              <div className="group text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-20 h-20 mx-auto opacity-20 animate-pulse group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="relative bg-gradient-to-r from-orange-600 to-orange-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                    <FaIndustry className="text-3xl" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-blue-200 text-sm">Cutting-edge technology</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16">
              <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
                <FaUsers className="mr-3 text-lg" />
                Join Our Growth Story
                <FaArrowRight className="ml-3 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Plants;
