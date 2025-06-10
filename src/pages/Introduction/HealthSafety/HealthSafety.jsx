import React, { useState, useEffect } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaShieldAlt,
  FaUsers,
  FaChartLine,
  FaCheckCircle,
  FaHardHat,
  FaAward,
  FaHandshake,
  FaTools,
  FaSearch,
  FaGraduationCap,
  FaLeaf,
  FaIndustry,
  FaClock,
  FaBullseye,
  FaBolt,
  FaHeart,
} from "react-icons/fa";

const HealthSafety = () => {
  const [counters, setCounters] = useState({
    employees: 0,
    safetyHours: 0,
    zeroDays: 0,
    compliance: 0,
  });

  // Animated counter effect
  useEffect(() => {
    const animateCounters = () => {
      const targets = {
        employees: 500,
        safetyHours: 10000,
        zeroDays: 365,
        compliance: 100,
      };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;

        setCounters({
          employees: Math.floor(targets.employees * progress),
          safetyHours: Math.floor(targets.safetyHours * progress),
          zeroDays: Math.floor(targets.zeroDays * progress),
          compliance: Math.floor(targets.compliance * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  const safetyPolicies = [
    {
      icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
      title: "Safe & Healthy Workplace",
      description:
        "Compliance with all relevant statutory and regulatory requirements for a safe work environment.",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaUsers className="text-green-600 text-3xl" />,
      title: "Personnel Management",
      description:
        "Incorporate health criteria into business decisions and personnel placement at appropriate levels.",
      gradient: "from-green-400 to-green-600",
    },
    {
      icon: <FaTools className="text-orange-600 text-3xl" />,
      title: "Operational Procedures",
      description:
        "Provide and maintain safe workplace through operational procedures and safe systems of work.",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      icon: <FaHardHat className="text-red-600 text-3xl" />,
      title: "Hazard Protection",
      description:
        "Develop safety awareness to protect all employees from foreseeable work hazards.",
      gradient: "from-red-400 to-red-600",
    },
    {
      icon: <FaGraduationCap className="text-purple-600 text-3xl" />,
      title: "Training & Support",
      description:
        "Provide appropriate training and support to ensure Health and Safety responsibilities are fulfilled.",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaHandshake className="text-indigo-600 text-3xl" />,
      title: "Supplier Collaboration",
      description:
        "Work with suppliers, contractors and customers to facilitate Health and Safety performance improvement.",
      gradient: "from-indigo-400 to-indigo-600",
    },
    {
      icon: <FaSearch className="text-teal-600 text-3xl" />,
      title: "Audits & Drills",
      description:
        "Conduct regular audits and mock drills to ensure compliance and emergency preparedness.",
      gradient: "from-teal-400 to-teal-600",
    },
    {
      icon: <FaChartLine className="text-cyan-600 text-3xl" />,
      title: "Continuous Improvement",
      description:
        "Continuously review policy relevance and maintain best business practices.",
      gradient: "from-cyan-400 to-cyan-600",
    },
  ];

  const growthPillars = [
    {
      name: "Integrity",
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      icon: <FaHeart className="text-2xl" />,
      description: "Ethical principles guide every decision",
    },
    {
      name: "High Quality",
      color: "bg-gradient-to-br from-green-500 to-green-700",
      icon: <FaAward className="text-2xl" />,
      description: "Excellence in every product and service",
    },
    {
      name: "Reliability",
      color: "bg-gradient-to-br from-orange-500 to-orange-700",
      icon: <FaClock className="text-2xl" />,
      description: "Consistent performance you can trust",
    },
    {
      name: "Innovation",
      color: "bg-gradient-to-br from-purple-500 to-purple-700",
      icon: <FaBolt className="text-2xl" />,
      description: "Leading-edge solutions for tomorrow",
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      number: counters.employees,
      label: "Protected Employees",
      suffix: "+",
    },
    {
      icon: <FaClock />,
      number: counters.safetyHours,
      label: "Safety Training Hours",
      suffix: "+",
    },
    {
      icon: <FaBullseye />,
      number: counters.zeroDays,
      label: "Zero Accident Days",
      suffix: "",
    },
    {
      icon: <FaAward />,
      number: counters.compliance,
      label: "Compliance Rate",
      suffix: "%",
    },
  ];

  return (
    <MainTemplate>
      <div className="min-h-screen bg-gray-50 overflow-hidden">
        {/* Hero Section with Animated Background */}
        <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto mt-15 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex justify-center mb-8">
                <div className="relative ">
                  <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full blur-lg animate-pulse"></div>
                  <FaShieldAlt className="relative text-8xl text-blue-300 animate-bounce" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Health & Safety
              </h1>
              <p className="text-xl md:text-3xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Swam's biggest asset is its employees, their health and safety
                is paramount
              </p>

              {/* Floating Action Cards */}
              <div className="mt-12 flex justify-center">
                <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-white border-opacity-20 rounded-2xl p-6 shadow-xl">
                  <div className="flex items-center space-x-4">
                    <FaLeaf className="text-green-400 text-2xl" />
                    <span className="text-lg text-gray-800 font-semibold">
                      Sustainable Safety Practices
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Statistics Section */}
        <div className="relative -mt-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-2xl p-6 text-center shadow-2xl border border-gray-200 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="text-blue-600 text-3xl mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">
                    {stat.number}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Zero Accidents Policy with Enhanced Design */}
        <div className="py-20 bg-gradient-to-br from-white to-gray-50 relative">
          <div className="absolute inset-0 opacity-5">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8 shadow-lg">
                <FaAward className="text-4xl text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                Safety Policy
              </h2>
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl blur-lg opacity-20"></div>
                <div className="relative bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-red-200 border-opacity-50 p-8 md:p-12 rounded-3xl shadow-2xl">
                  <h3 className="text-3xl md:text-4xl font-bold text-red-800 mb-6">
                    "Zero Accidents" Policy
                  </h3>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    SWAM firmly believes that Safety is an essential and
                    integral part of each and every activity at Swam. Therefore
                    all work is carried out with care, giving due consideration
                    to safety which is not compromised under any circumstances.
                    Accidents and risk to health are preventable through
                    continual improvement in the working environment and the
                    involvement of all employees ensuring that{" "}
                    <strong className="text-red-700">"Safety Matters"</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Safety Policies Grid */}
        <div className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Swam's Safety Framework
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A comprehensive approach to maintaining a safe, healthy and
                accident-free workplace
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {safetyPolicies.map((policy, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden transform hover:-translate-y-2"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${policy.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative p-8">
                    <div className="flex flex-col items-center text-center">
                      <div
                        className={`mb-6 p-4 bg-gradient-to-br ${policy.gradient} rounded-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <div className="text-white">{policy.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {policy.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {policy.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div
                    className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${policy.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Growth Philosophy */}
        <div className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Growth Philosophy
              </h2>
              <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                Swam continues to grow year on year. Our focus is growth
                through:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthPillars.map((pillar, index) => (
                <div
                  key={index}
                  className="group relative bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg border border-white border-opacity-10 rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-500"
                >
                  <div
                    className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                  >
                    <div className="text-white">{pillar.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {pillar.name}
                  </h3>
                  <p className="text-gray-500 group-hover:text-gray-900 transition-colors duration-300">
                    {pillar.description}
                  </p>

                  {/* Animated Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white group-hover:border-opacity-20 rounded-2xl transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Redesigned Safety Commitments */}
        <div className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
          {/* Modern Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20z' fill='%23334155' fill-opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl rotate-45 opacity-20 animate-pulse"></div>
            <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-indigo-200 to-indigo-300 rounded-full opacity-30 animate-bounce"></div>
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-2xl rotate-12 opacity-25 animate-pulse delay-75"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center justify-center p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-8 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <FaShieldAlt className="text-3xl text-white mr-3" />
                <FaHeart className="text-3xl text-white" />
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-6">
                Our Safety Commitments
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Three foundational pillars that drive our unwavering commitment
                to workplace safety and excellence
              </p>
            </div>

            {/* Redesigned Cards with Enhanced Visual Appeal */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {[
                {
                  icon: <FaTools className="text-4xl" />,
                  number: "01",
                  title: "Resource Allocation",
                  subtitle: "Strategic Investment",
                  description:
                    "Ensuring appropriate resources are available to fully implement our comprehensive Health and Safety Policy across all operations.",
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "from-emerald-50 to-teal-50",
                  features: [
                    "Equipment Funding",
                    "Training Programs",
                    "Technology Upgrades",
                  ],
                },
                {
                  icon: <FaBolt className="text-4xl" />,
                  number: "02",
                  title: "Emergency Preparedness",
                  subtitle: "Proactive Response",
                  description:
                    "Regular mock drills and comprehensive audits ensuring our operations consistently comply with safety management requirements.",
                  color: "from-blue-500 to-cyan-600",
                  bgColor: "from-blue-50 to-cyan-50",
                  features: ["Mock Drills", "Safety Audits", "Response Teams"],
                },
                {
                  icon: <FaAward className="text-4xl" />,
                  number: "03",
                  title: "Legal Compliance",
                  subtitle: "Excellence Standard",
                  description:
                    "Maintaining and exceeding all legal and business obligations while consistently following industry best practices.",
                  color: "from-purple-500 to-violet-600",
                  bgColor: "from-purple-50 to-violet-50",
                  features: [
                    "Regulatory Compliance",
                    "Best Practices",
                    "Continuous Monitoring",
                  ],
                },
              ].map((commitment, index) => (
                <div
                  key={index}
                  className="group relative transform hover:-translate-y-4 transition-all duration-700"
                >
                  {/* Main Card */}
                  <div
                    className={`relative bg-gradient-to-br ${commitment.bgColor} backdrop-filter backdrop-blur-sm border border-white border-opacity-60 rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                  >
                    {/* Card Number Badge */}
                    <div className="absolute top-6 right-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${commitment.color} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-bold text-lg">
                          {commitment.number}
                        </span>
                      </div>
                    </div>

                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${commitment.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500`}
                      >
                        <div className="text-white">{commitment.icon}</div>
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${commitment.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <div
                        className={`text-sm font-semibold text-transparent bg-gradient-to-r ${commitment.color} bg-clip-text mb-2`}
                      >
                        {commitment.subtitle}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                        {commitment.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6 group-hover:text-gray-800 transition-colors">
                        {commitment.description}
                      </p>

                      {/* Feature List */}
                      <div className="space-y-3">
                        {commitment.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center">
                            <div
                              className={`w-2 h-2 bg-gradient-to-r ${commitment.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}
                            ></div>
                            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${commitment.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                    ></div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${commitment.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}
                    ></div>
                  </div>

                  {/* Floating Shadow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${commitment.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10 transform translate-y-8`}
                  ></div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Section */}
            <div className="mt-20 text-center">
              <div className="inline-flex items-center justify-center bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
                <div className="text-center">
                  <FaCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Committed to Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    These commitments form the foundation of our safety culture,
                    ensuring every team member returns home safely every day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
          {/* Floating Elements */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-blue-200 rounded-full animate-float delay-75"></div>
            <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-purple-200 rounded-full animate-float delay-150"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <FaIndustry className="text-6xl text-white opacity-80 mx-auto mb-6" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Safety is Everyone's Responsibility
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join us in maintaining the highest standards of health and safety
              in everything we do
            </p>
            <div className="flex justify-center">
              <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-3xl p-8 shadow-2xl max-w-2xl">
                <p className="text-gray-800 text-xl md:text-2xl font-bold">
                  "Safety Matters" - It's not just a slogan, it's our commitment
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-75"></div>
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .delay-75 {
            animation-delay: 0.75s;
          }
          .delay-150 {
            animation-delay: 1.5s;
          }
        `}</style>
      </div>
    </MainTemplate>
  );
};

export default HealthSafety;
