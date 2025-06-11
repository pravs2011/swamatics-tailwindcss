import React, { useState, useEffect } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaStar,
  FaQuoteLeft,
  FaPlay,
  FaPause,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMagic,
  FaFire,
  FaStarOfLife,
  FaAward,
  FaRocket,
  FaTrophy,
  FaMedal,
  FaGem,
  FaCrown,
  FaShieldAlt,
  FaLightbulb,
  FaBolt,
  FaPhone,
  FaEnvelope,
  FaMapMarker,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaArrowUp,
  FaHeart,
  FaIndustry,
  FaCogs,
  FaLeaf,
  FaGlobe,
} from "react-icons/fa";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState("all");

  // Creative testimonials with cinematic storytelling
  const testimonialsData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "Chief Operations Officer",
      company: "Steel Dynamics India Ltd.",
      industry: "Manufacturing",
      rating: 5,
      quote:
        "SWAM transformed our entire operation. From chaos to precision, from waste to efficiency.",
      story:
        "Our steel plant was struggling with inefficient pneumatic systems. SWAM didn't just provide equipment - they reimagined our entire workflow. The results? 35% energy savings, zero downtime in 18 months, and a production line that runs like clockwork.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      location: "Mumbai, India",
      date: "March 2024",
      impact: "35% Energy Savings",
      experience: "3 Years",
      gradientFrom: "#667eea",
      gradientTo: "#764ba2",
      icon: <FaFire />,
      bgPattern: "manufacturing",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      title: "Plant Manager",
      company: "GreenTech Cement Co.",
      industry: "Sustainability",
      rating: 5,
      quote:
        "From polluter to pioneer - SWAM helped us lead the green revolution in cement manufacturing.",
      story:
        "We needed to cut emissions without cutting production. SWAM's innovative solutions delivered both. Our facilities now run on 25% less energy while producing 30% more cement. We've gone from industry laggard to sustainability leader.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b04c?w=200&h=200&fit=crop&crop=face",
      location: "Chennai, India",
      date: "January 2024",
      impact: "25% Emission Reduction",
      experience: "4 Years",
      gradientFrom: "#11998e",
      gradientTo: "#38ef7d",
      icon: <FaGem />,
      bgPattern: "sustainability",
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "Engineering Director",
      company: "PharmaCore International",
      industry: "Pharmaceutical",
      rating: 5,
      quote:
        "Precision at the molecular level. SWAM doesn't just meet pharma standards - they redefine them.",
      story:
        "In pharmaceuticals, 99.9% isn't good enough. SWAM delivered 99.99% purity in our powder handling. Their FDA-compliant systems turned our most challenging process into our most reliable one.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      location: "Singapore",
      date: "February 2024",
      impact: "99.99% Purity",
      experience: "2 Years",
      gradientFrom: "#ffecd2",
      gradientTo: "#fcb69f",
      icon: <FaShieldAlt />,
      bgPattern: "pharmaceutical",
    },
    {
      id: 4,
      name: "Priya Sharma",
      title: "Production Head",
      company: "AgriTech Processing Ltd.",
      industry: "Food Tech",
      rating: 5,
      quote:
        "From farm to table, SWAM ensures every grain matters and nothing goes to waste.",
      story:
        "Food safety isn't negotiable. SWAM's hygienic systems eliminated contamination risks while boosting our processing speed by 40%. Every grain now has a purpose, and waste is history.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      location: "Pune, India",
      date: "April 2024",
      impact: "Zero Contamination",
      experience: "2 Years",
      gradientFrom: "#a8edea",
      gradientTo: "#fed6e3",
      icon: <FaStarOfLife />,
      bgPattern: "food",
    },
    {
      id: 5,
      name: "David Thompson",
      title: "Operations Manager",
      company: "PowerGen Solutions",
      industry: "Energy",
      rating: 5,
      quote:
        "When the grid depends on you, reliability isn't optional. SWAM made the impossible, inevitable.",
      story:
        "Power plants can't afford downtime. SWAM's predictive systems warned us of issues before they happened. 18 months of uninterrupted operation and counting. That's not luck - that's engineering.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      location: "Texas, USA",
      date: "December 2023",
      impact: "Zero Downtime",
      experience: "18 Months",
      gradientFrom: "#ff9a9e",
      gradientTo: "#fecfef",
      icon: <FaBolt />,
      bgPattern: "energy",
    },
    {
      id: 6,
      name: "Elena Rodriguez",
      title: "Innovation Director",
      company: "Future Materials Inc.",
      industry: "Innovation",
      rating: 5,
      quote:
        "SWAM doesn't just solve today's problems - they anticipate tomorrow's breakthroughs.",
      story:
        "We push materials to their limits. SWAM pushed their technology beyond ours. Their custom solutions enabled discoveries we thought were impossible. Innovation needs a partner who thinks differently.",
      avatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      location: "California, USA",
      date: "May 2024",
      impact: "3 Breakthroughs",
      experience: "1 Year",
      gradientFrom: "#fa709a",
      gradientTo: "#fee140",
      icon: <FaRocket />,
      bgPattern: "innovation",
    },
  ];

  const industries = [
    "all",
    "Manufacturing",
    "Sustainability",
    "Pharmaceutical",
    "Food Tech",
    "Energy",
    "Innovation",
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, testimonialsData.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  const getFilteredTestimonials = () => {
    if (selectedIndustry === "all") return testimonialsData;
    return testimonialsData.filter(
      (testimonial) => testimonial.industry === selectedIndustry
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <FaStar
          key={i}
          className={i < rating ? "text-amber-400" : "text-gray-200"}
        />
      ));
  };

  const featuredTestimonial = testimonialsData[currentTestimonial];

  // Pattern backgrounds for each industry
  const getPatternBackground = (pattern) => {
    const patterns = {
      manufacturing:
        "bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3)_0%,transparent_50%)]",
      sustainability:
        "bg-[linear-gradient(45deg,rgba(17,153,142,0.3)_25%,transparent_25%),linear-gradient(-45deg,rgba(56,239,125,0.3)_25%,transparent_25%)] bg-[length:30px_30px]",
      pharmaceutical:
        "bg-[repeating-conic-gradient(from_0deg_at_50%_50%,rgba(255,236,210,0.3)_0deg,transparent_60deg)]",
      food: "bg-[radial-gradient(circle,rgba(168,237,234,0.3)_1px,transparent_1px)] bg-[length:20px_20px]",
      energy:
        "bg-[linear-gradient(90deg,rgba(255,154,158,0.3)_50%,transparent_50%)] bg-[length:40px_40px]",
      innovation:
        "bg-[conic-gradient(from_45deg,rgba(250,112,154,0.3),rgba(254,225,64,0.3),rgba(250,112,154,0.3))]",
    };
    return patterns[pattern] || "";
  };

  return (
    <MainTemplate>
      <style jsx>{`
        @keyframes floatParticles {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes sparkle {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes iconFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes rotateShape {
          0% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
          100% {
            transform: rotate(360deg) scale(1);
          }
        }
        @keyframes floatShape {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          75% {
            transform: translateY(20px) translateX(-10px);
          }
        }
        @keyframes pulseShape {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.8;
          }
        }
        @keyframes morphShape {
          0%,
          100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
          }
          25% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
          }
          50% {
            border-radius: 50% 60% 30% 60% / 30% 70% 40% 60%;
          }
          75% {
            border-radius: 60% 40% 60% 30% / 70% 40% 60% 30%;
          }
        }
        .animate-float-particles {
          animation: floatParticles 25s infinite linear;
        }
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
          background-size: 200% 100%;
        }
        .animate-gradient-flow {
          animation: gradientFlow 4s ease-in-out infinite;
          background-size: 200% 200%;
        }
        .animate-icon-float {
          animation: iconFloat 3s ease-in-out infinite;
        }
        .animate-rotate-shape {
          animation: rotateShape 20s ease-in-out infinite;
        }
        .animate-float-shape {
          animation: floatShape 15s ease-in-out infinite;
        }
        .animate-pulse-shape {
          animation: pulseShape 8s ease-in-out infinite;
        }
        .animate-morph-shape {
          animation: morphShape 12s ease-in-out infinite;
        }
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .text-gradient-highlight {
          background: linear-gradient(45deg, #ff6b6b, #feca57);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-flow {
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-stat {
          background: linear-gradient(45deg, #fff, #ffd700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="min-h-screen relative overflow-x-hidden m-0 p-0 scrollbar-hide">
        {/* Enhanced Cinematic Hero Section */}
        <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
          {/* Professional Gradient Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/50 via-transparent to-pink-900/30"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-blue-800/20 to-cyan-900/40"></div>

          {/* Animated Vector Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large Geometric Shapes */}
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/20 rounded-full blur-xl animate-float-shape"></div>
            <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-tr from-purple-500/15 to-pink-500/10 animate-morph-shape blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/8 to-blue-500/12 rounded-full blur-3xl animate-pulse-shape"></div>

            {/* Geometric Vector Shapes */}
            <div className="absolute top-1/4 right-1/4 w-32 h-32 border border-blue-400/20 rotate-45 animate-rotate-shape"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-24 h-24 border-2 border-purple-400/30 rounded-lg animate-float-shape"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-3/4 right-1/3 w-16 h-16 bg-gradient-to-br from-pink-400/20 to-purple-400/30 rounded-full animate-pulse-shape"
              style={{ animationDelay: "4s" }}
            ></div>

            {/* Abstract Lines */}
            <div
              className="absolute top-40 left-1/3 w-1 h-32 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-float-shape"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-40 right-1/3 w-1 h-40 bg-gradient-to-b from-transparent via-purple-400/30 to-transparent animate-float-shape"
              style={{ animationDelay: "3s" }}
            ></div>

            {/* Hexagonal Shapes */}
            <div
              className="absolute top-60 left-1/2 w-20 h-20 border border-cyan-400/25 transform rotate-12 animate-rotate-shape"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                animationDelay: "1.5s",
              }}
            ></div>
            <div
              className="absolute bottom-60 right-1/2 w-16 h-16 border-2 border-pink-400/20 transform -rotate-12 animate-float-shape"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
                animationDelay: "2.5s",
              }}
            ></div>

            {/* Triangle Shapes */}
            <div
              className="absolute top-1/3 left-1/5 w-12 h-12 bg-gradient-to-br from-blue-400/20 to-transparent animate-rotate-shape"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                animationDelay: "0.5s",
              }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/5 w-16 h-16 bg-gradient-to-tl from-purple-400/15 to-transparent animate-float-shape"
              style={{
                clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                animationDelay: "3.5s",
              }}
            ></div>
          </div>

          {/* Enhanced Particles */}
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full animate-float-particles`}
                  style={{
                    width: `${2 + Math.random() * 3}px`,
                    height: `${2 + Math.random() * 3}px`,
                    left: `${Math.random() * 100}%`,
                    background:
                      i % 3 === 0
                        ? "rgba(59, 130, 246, 0.6)"
                        : i % 3 === 1
                        ? "rgba(147, 51, 234, 0.6)"
                        : "rgba(236, 72, 153, 0.6)",
                    animationDelay: `${i * 0.8}s`,
                    animationDuration: `${20 + Math.random() * 10}s`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative text-center max-w-4xl px-8">
            <div className="mt-30 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/15 rounded-full px-8 py-4 mb-12 text-white font-medium text-lg transition-all duration-300">
              <FaMagic className="text-yellow-400 text-2xl animate-sparkle" />
              <span>Stories of Transformation</span>
            </div>

            <h1 className="text-6xl lg:text-8xl xl:text-9xl font-extrabold leading-tight mb-8 text-white drop-shadow-2xl">
              Where{" "}
              <span className="text-gradient-highlight animate-shimmer">
                Dreams
              </span>{" "}
              Meet
              <br />
              <span className="text-gradient-flow animate-gradient-flow">
                Engineering Excellence
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed mb-16 max-w-3xl mx-auto">
              Every testimonial is a journey. Every story is a breakthrough.
              Discover how SWAM turns industrial challenges into success
              stories.
            </p>

            <div className="flex justify-center gap-16 flex-wrap">
              {[
                { icon: <FaCrown />, number: "500+", label: "Success Stories" },
                {
                  icon: <FaTrophy />,
                  number: "98%",
                  label: "Client Satisfaction",
                },
                { icon: <FaAward />, number: "15+", label: "Industries" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-4 text-white transition-transform duration-300 hover:-translate-y-3"
                >
                  <div
                    className="text-5xl text-yellow-400 drop-shadow-lg animate-icon-float"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-5xl font-extrabold text-gradient-stat">
                    {stat.number}
                  </div>
                  <div className="text-lg opacity-90 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <br />
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-200 relative">
          <div className="max-w-6xl mx-auto px-8">
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 m-0">
                Featured Success Story
              </h2>
              <div className="flex gap-4 items-center">
                <button
                  className={`w-12 h-12 border-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-indigo-600/40 ${
                    isAutoPlay ? "animate-pulse" : ""
                  }`}
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                >
                  {isAutoPlay ? <FaPause /> : <FaPlay />}
                </button>
                <button
                  className="w-12 h-12 border-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-indigo-600/40"
                  onClick={prevTestimonial}
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="w-12 h-12 border-0 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xl cursor-pointer transition-all duration-300 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-indigo-600/40"
                  onClick={nextTestimonial}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            <div
              className="rounded-3xl p-12 relative overflow-hidden shadow-2xl backdrop-blur-md min-h-[500px] transition-transform duration-300 hover:-translate-y-2"
              style={{
                background: `linear-gradient(135deg, ${featuredTestimonial.gradientFrom}, ${featuredTestimonial.gradientTo})`,
              }}
            >
              <div
                className={`absolute inset-0 opacity-10 ${getPatternBackground(
                  featuredTestimonial.bgPattern
                )}`}
              ></div>

              <div className="relative text-white">
                <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
                  <div className="relative">
                    <img
                      src={featuredTestimonial.avatar}
                      alt={featuredTestimonial.name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-gray-200"
                    />
                    <div className="absolute -inset-1 border-2 border-blue-600 rounded-full opacity-30"></div>
                  </div>

                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {featuredTestimonial.name}
                    </h3>
                    <p className="text-slate-600 font-medium mb-1">
                      {featuredTestimonial.title}
                    </p>
                    <p className="text-slate-500 text-sm mb-4">
                      {featuredTestimonial.company}
                    </p>
                    <div className="flex gap-1 justify-center lg:justify-start">
                      {renderStars(featuredTestimonial.rating)}
                    </div>
                  </div>

                  <div className="text-4xl text-blue-600 opacity-70">
                    {featuredTestimonial.icon}
                  </div>
                </div>

                <div className="mb-8 relative">
                  <FaQuoteLeft className="text-5xl text-gray-200 absolute -top-4 -left-4" />
                  <blockquote className="text-2xl font-semibold text-slate-800 leading-relaxed italic ml-8">
                    {featuredTestimonial.quote}
                  </blockquote>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {featuredTestimonial.story}
                  </p>
                </div>

                <div className="flex flex-wrap gap-8">
                  {[
                    {
                      icon: <FaMapMarkerAlt />,
                      text: featuredTestimonial.location,
                    },
                    { icon: <FaCalendarAlt />, text: featuredTestimonial.date },
                    {
                      icon: <FaBolt />,
                      text: featuredTestimonial.impact,
                      special: true,
                    },
                    { icon: <FaMedal />, text: featuredTestimonial.experience },
                  ].map((metric, index) => (
                    <div
                      key={index}
                      className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium ${
                        metric.special
                          ? "bg-blue-50 text-blue-600 border border-blue-200"
                          : "bg-gray-50 text-slate-600 border border-gray-200"
                      }`}
                    >
                      {metric.icon}
                      <span>{metric.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-12">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full border-0 cursor-pointer transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-blue-600 scale-125"
                      : "bg-slate-300"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Industry Filter Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-8 text-center">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">
              Explore by Industry
            </h3>
            <div className="flex flex-col lg:flex-row justify-center gap-4 flex-wrap">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className={`px-6 py-3 border-2 rounded-full font-medium cursor-pointer transition-all duration-300 hover:-translate-y-1 min-w-48 lg:min-w-0 ${
                    selectedIndustry === industry
                      ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30"
                      : "bg-white border-gray-200 text-slate-600 hover:border-blue-600 hover:text-blue-600"
                  }`}
                  onClick={() => setSelectedIndustry(industry)}
                >
                  {industry === "all" ? "All Stories" : industry}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
              {getFilteredTestimonials().map((testimonial) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl p-8 relative overflow-hidden shadow-lg transition-all duration-300 border border-gray-200 ${
                    hoveredCard === testimonial.id
                      ? "hover:-translate-y-2 hover:shadow-xl"
                      : "hover:-translate-y-2 hover:shadow-xl"
                  }`}
                  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.gradientFrom}, ${testimonial.gradientTo})`,
                  }}
                >
                  <div
                    className={`absolute inset-0 opacity-5 pointer-events-none ${getPatternBackground(
                      testimonial.bgPattern
                    )}`}
                  ></div>

                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-2xl text-blue-600 font-medium text-sm border border-gray-200">
                      {testimonial.icon}
                      <span>{testimonial.industry}</span>
                    </div>
                    <div className="flex gap-1">
                      {renderStars(testimonial.rating).map((star, i) => (
                        <span key={i} className="text-sm">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-slate-800 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </h4>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div>
                        <p className="font-semibold text-slate-800 m-0">
                          {testimonial.name}
                        </p>
                        <p className="text-slate-500 text-sm m-0">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-2xl font-medium text-sm border border-blue-200">
                      <FaLightbulb />
                      <span>{testimonial.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-600 text-center">
          <div className="max-w-4xl mx-auto px-8 relative">
            <div className="absolute -top-1/2 -left-1/2 -right-1/2 -bottom-1/2 bg-gradient-radial from-blue-600/10 to-transparent pointer-events-none"></div>
            <div className="relative">
              <div className="flex justify-center">
                <FaRocket className="text-6xl text-blue-600 mb-8" />
              </div>
              <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
                Ready to Create Your Success Story?
              </h2>
              <p className="text-2xl text-white/80 mb-12 leading-relaxed">
                Join the ranks of industry leaders who chose transformation over
                tradition.
              </p>
              <button className="px-12 py-5 bg-blue-600 text-white border-0 rounded-full text-xl font-semibold cursor-pointer relative overflow-hidden transition-all duration-300 hover:bg-blue-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-600/40">
                <span>Start Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full transition-transform duration-700 hover:translate-x-full"></div>
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Professional Footer */}
        <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]"></div>
          </div>

          <div className="relative">
            {/* Main Footer Content */}

            {/* Stats Section */}
            <div className="border-t border-gray-700/50">
              <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    {
                      number: "500+",
                      label: "Projects Completed",
                      icon: <FaTrophy />,
                    },
                    {
                      number: "98%",
                      label: "Client Satisfaction",
                      icon: <FaHeart />,
                    },
                    {
                      number: "15+",
                      label: "Countries Served",
                      icon: <FaGlobe />,
                    },
                    {
                      number: "25+",
                      label: "Years Experience",
                      icon: <FaAward />,
                    },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl text-blue-400 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-gray-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700/50">
              <div className="max-w-7xl mx-auto px-8 py-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>
                      © 2024 SWAM Engineering Solutions. All rights reserved.
                    </span>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      Cookie Policy
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>Made with</span>
                    <FaHeart className="text-red-500 animate-pulse" />
                    <span>for Industry Innovation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
            >
              <FaArrowUp className="group-hover:animate-bounce" />
            </button>
          </div>
        </footer>
      </div>
    </MainTemplate>
  );
};

export default Testimonials;
