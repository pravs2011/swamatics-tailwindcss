import React from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaIndustry,
  FaGlobeAmericas,
  FaAward,
  FaLeaf,
  FaUsers,
  FaHandshake,
  FaQuoteLeft,
  FaQuoteRight,
  FaLinkedin,
  FaEnvelope,
  FaBuilding,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";

const WelcomeFromCEO = () => {
  return (
    <MainTemplate>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-6 pt-32 pb-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                Welcome from CEO
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Four Decades of Excellence in Engineering Innovation
              </p>
              <div className="mt-8 flex justify-center items-center space-x-4">
                <FaIndustry className="text-3xl text-blue-300" />
                <div className="w-16 h-0.5 bg-blue-300"></div>
                <FaGlobeAmericas className="text-3xl text-blue-300" />
                <div className="w-16 h-0.5 bg-blue-300"></div>
                <FaAward className="text-3xl text-blue-300" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Leadership Section */}
        <div className="relative py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-6">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center space-x-2 mb-4">
                <FaUsers className="text-3xl text-blue-600" />
                <span className="text-lg font-semibold text-blue-600 uppercase tracking-wide">
                  Leadership Excellence
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Visionary Leaders
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Four decades of pioneering leadership, driving innovation and
                excellence in the global industrial landscape
              </p>
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            {/* Leadership Cards */}
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Managing Director */}
              <div className="group relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 border border-gray-100">
                  {/* Card Header with Image */}
                  <div className="relative h-80 bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                      alt="Mr. Abhishek Gambhir"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-30">
                      <span className="text-gray-500 text-sm font-semibold">
                        Managing Director
                      </span>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Mr. Abhishek Gambhir
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-blue-300"></div>
                        <span className="text-blue-200 font-medium">
                          Global Innovation Leader
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                          <FaChartLine className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">
                            Leadership Since
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            2010
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer group">
                          <FaLinkedin className="text-blue-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer group">
                          <FaEnvelope className="text-blue-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Leading Swam's global expansion with a double degree in
                      Engineering and Business Management, driving innovation
                      and international growth across multiple continents.
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Global Market Expansion
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Innovation & Technology Leadership
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Strategic Business Development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chairman & Founder */}
              <div className="group relative">
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-3 border border-gray-100">
                  {/* Card Header with Image */}
                  <div className="relative h-80 bg-gradient-to-br from-indigo-500 via-purple-600 to-blue-700 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                      alt="Mr. S.K. Gambhir"
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 border border-white border-opacity-30">
                      <span className="text-gray-500 text-sm font-semibold">
                        Chairman & Founder
                      </span>
                    </div>

                    {/* Name Overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        Mr. S.K. Gambhir
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-0.5 bg-purple-300"></div>
                        <span className="text-purple-200 font-medium">
                          Visionary Founder
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                          <FaAward className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 uppercase tracking-wide">
                            Founded
                          </p>
                          <p className="text-lg font-bold text-gray-800">
                            1980
                          </p>
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex space-x-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer group">
                          <FaLinkedin className="text-indigo-600 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center hover:bg-indigo-200 transition-colors cursor-pointer group">
                          <FaEnvelope className="text-indigo-600 group-hover:scale-110 transition-transform" />
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                      Visionary founder and noted technocrat who established
                      Swam in 1980 on strong foundations of integrity, high
                      quality, and reliability, building a global industrial
                      empire.
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Industry Pioneer Since 1980
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Technocrat & Visionary
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">
                          Global Manufacturing Excellence
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership Stats */}
            <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">40+</h4>
                <p className="text-gray-600">Years of Combined Leadership</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaGlobeAmericas className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">15+</h4>
                <p className="text-gray-600">Countries Served</p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaIndustry className="text-2xl text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">#1</h4>
                <p className="text-gray-600">Market Position in India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Story Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Journey Since 1980
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Swam, a family-owned business, was formed in 1980 by noted
                technocrat Shri. S. K. Gambhir. From the onset, our vision was
                to build a company based on a strong foundation of integrity,
                high quality and reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Foundation */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaHandshake className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Built on trust and ethical business practices that have
                  sustained us for over four decades.
                </p>
              </div>

              {/* Quality */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaShieldAlt className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  High Quality
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Commitment to superior manufacturing and international quality
                  standards in every product.
                </p>
              </div>

              {/* Reliability */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaCogs className="text-3xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Reliability
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Consistent performance and dependable solutions that our
                  global clients trust.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CEO Message Section */}
        <div className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
                <div className="flex items-center justify-center mb-8">
                  <FaQuoteLeft className="text-4xl text-blue-500 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-800">
                    Message from CEO
                  </h2>
                  <FaQuoteRight className="text-4xl text-blue-500 ml-4" />
                </div>

                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p className="font-semibold text-blue-900 text-xl text-center mb-8">
                    "Swam's Global Triumph: A Commitment to Excellence"
                  </p>

                  <p>
                    <span className="font-semibold">
                      Dear Esteemed Colleagues & Friends,
                    </span>
                  </p>

                  <p>
                    We are immensely grateful for your unwavering support that
                    has paved the way for Swam's phenomenal journey. As we stand
                    on new horizons, I am thrilled to share my vision of
                    becoming a global leader in blowers, vacuum pumps and
                    compressors under the banner of{" "}
                    <span className="font-semibold text-blue-700">
                      "Internationally Made In India"
                    </span>
                    .
                  </p>

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <p className="font-semibold text-blue-900 mb-2">
                      Global Recognition & Growth
                    </p>
                    <p>
                      Our products have earned global recognition and cater to
                      markets in major countries like USA, Australia, Canada,
                      UAE, Germany, Iran, Italy, Malaysia, Russia, South Korea,
                      Taiwan, Africa, China & many others.
                    </p>
                  </div>

                  <p>
                    This growth has catapulted Swam to the pinnacle as the{" "}
                    <span className="font-bold text-blue-700">
                      largest blower company in India
                    </span>{" "}
                    and ranks{" "}
                    <span className="font-bold text-blue-700">
                      fifth globally
                    </span>
                    . We offer world-class CE certified products that are
                    proven, energy efficient and manufactured in our
                    state-of-the-art plant with over 25 CNCs.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-center mb-3">
                        <FaLeaf className="text-green-600 text-xl mr-3" />
                        <h4 className="font-semibold text-green-800">
                          Environmental Excellence
                        </h4>
                      </div>
                      <p className="text-green-700">
                        Honored with "Best Green Manufacturing Facility" in
                        India for Innovation and Technologies.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                      <div className="flex items-center mb-3">
                        <FaAward className="text-yellow-600 text-xl mr-3" />
                        <h4 className="font-semibold text-yellow-800">
                          Leadership Recognition
                        </h4>
                      </div>
                      <p className="text-yellow-700">
                        "Best Business Leader" by Business Connect for
                        innovative practices and leadership.
                      </p>
                    </div>
                  </div>

                  <p>
                    Our product portfolio includes a variety of Gas blowers made
                    from stainless steel, duplex steel, phosphorous bronze and
                    other unique materials, with rated power up to{" "}
                    <span className="font-bold">2MW</span> and capacities up to{" "}
                    <span className="font-bold">85,000m³/hr</span>. SWAM has an
                    in-house testing facility up to 1000KW with 6.6KV testing
                    arrangement.
                  </p>

                  <p>
                    Today, Swam transcends borders, evolving into an
                    international and multinational powerhouse with operations
                    across several nations. Our dedication towards setting
                    industry benchmarks for performance and reliability remains
                    invariant.
                  </p>

                  <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-xl">
                    <p className="text-xl font-semibold mb-2">
                      "Swam continues to grow year on year. Our focus is growth
                      through:"
                    </p>
                    <div className="flex justify-center items-center space-x-8 mt-4">
                      <span className="font-bold">Integrity</span>
                      <span className="text-blue-300">•</span>
                      <span className="font-bold">High Quality</span>
                      <span className="text-blue-300">•</span>
                      <span className="font-bold">Reliability</span>
                      <span className="text-blue-300">•</span>
                      <span className="font-bold">Innovation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Global Impact Section */}
        <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-24 overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
          </div>

          <div className="relative container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Global Impact & Excellence
              </h2>
              <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Four decades of innovation, setting industry benchmarks
                worldwide with unmatched quality and reliability
              </p>
              <div className="mt-8 w-32 h-1 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 mx-auto rounded-full"></div>
            </div>

            {/* Main Statistics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {/* Global Ranking */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaChartLine className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-cyan-500">
                      #5
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Global Ranking
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Among world's leading blower manufacturers with
                      international recognition
                    </p>
                  </div>
                </div>
              </div>

              {/* India Leadership */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaIndustry className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-indigo-500">
                      #1
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Market Leader in India
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Largest blower company in India with dominant market
                      presence
                    </p>
                  </div>
                </div>
              </div>

              {/* Manufacturing Excellence */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaCogs className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-purple-500">
                      25+
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Advanced CNC Fleet
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      State-of-the-art manufacturing with precision machinery
                    </p>
                  </div>
                </div>
              </div>

              {/* Legacy & Experience */}
              <div className="group">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                      <FaGlobeAmericas className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl font-bold mb-3 text-emerald-500">
                      40+
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      Years of Excellence
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Four decades of proven expertise and continuous innovation
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Key Metrics */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 text-center">
                <div className="text-3xl font-bold text-yellow-500 mb-2">
                  2MW
                </div>
                <p className="text-gray-600 text-sm">Maximum Rated Power</p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 text-center">
                <div className="text-3xl font-bold text-cyan-500 mb-2">
                  85,000
                </div>
                <p className="text-gray-600 text-sm">m³/hr Capacity</p>
              </div>

              <div className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-10 text-center">
                <div className="text-3xl font-bold text-pink-500 mb-2">
                  1000KW
                </div>
                <p className="text-gray-600 text-sm">Testing Facility</p>
              </div>
            </div>

            {/* Global Reach */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                Serving Markets Worldwide
              </h3>
              <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                {[
                  "USA",
                  "Australia",
                  "Canada",
                  "UAE",
                  "Germany",
                  "Iran",
                  "Italy",
                  "Malaysia",
                  "Russia",
                  "South Korea",
                  "Taiwan",
                  "China",
                  "Africa",
                ].map((country, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm text-gray-900 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Partner with Global Excellence
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join us in our journey towards global leadership. Whether you're
              looking for new requirements or partnership opportunities, we're
              here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                Explore Products
              </button>
              <button className="px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
};

export default WelcomeFromCEO;
