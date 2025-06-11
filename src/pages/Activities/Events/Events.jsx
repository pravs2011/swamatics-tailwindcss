import React, { useState } from "react";
import MainTemplate from "../../../components/Templates/MainTemplates";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaGlobe,
  FaHome,
  FaAward,
  FaIndustry,
  FaHandshake,
  FaCertificate,
  FaRocket,
  FaStar,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaFilter,
  FaSearch,
  FaTrophy,
  FaNetworkWired,
  FaLightbulb,
} from "react-icons/fa";

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalEvent, setModalEvent] = useState(null);

  // Sample events data
  const eventsData = {
    2024: [
      {
        id: 1,
        title: "Industrial Automation Summit 2024",
        category: "international",
        date: "March 15-17, 2024",
        location: "Singapore",
        attendees: 500,
        type: "Conference",
        description:
          "Leading industrial automation conference featuring latest technologies and innovations in manufacturing.",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        highlights: [
          "AI in Manufacturing",
          "IoT Solutions",
          "Automation Trends",
        ],
        status: "completed",
      },
      {
        id: 2,
        title: "India Manufacturing Excellence Awards",
        category: "domestic",
        date: "April 22-23, 2024",
        location: "Mumbai, India",
        attendees: 300,
        type: "Awards Ceremony",
        description:
          "Celebrating excellence in Indian manufacturing sector with industry leaders and innovators.",
        image:
          "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&h=600&fit=crop",
        highlights: ["Excellence Awards", "Industry Recognition", "Networking"],
        status: "completed",
      },
      {
        id: 3,
        title: "SWAM Technology Showcase",
        category: "domestic",
        date: "June 10-12, 2024",
        location: "Noida, India",
        attendees: 250,
        type: "Product Launch",
        description:
          "Showcasing our latest rotary blower innovations and technological advancements.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        highlights: [
          "New Product Launch",
          "Live Demonstrations",
          "Technical Sessions",
        ],
        status: "completed",
      },
      {
        id: 4,
        title: "Global Energy Efficiency Expo",
        category: "international",
        date: "September 5-8, 2024",
        location: "Frankfurt, Germany",
        attendees: 1200,
        type: "Exhibition",
        description:
          "International exhibition focusing on energy-efficient solutions and sustainable technologies.",
        image:
          "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop",
        highlights: [
          "Energy Solutions",
          "Sustainability",
          "Global Partnerships",
        ],
        status: "completed",
      },
      {
        id: 5,
        title: "Industrial Innovation Conference",
        category: "domestic",
        date: "November 18-19, 2024",
        location: "Bangalore, India",
        attendees: 400,
        type: "Conference",
        description:
          "Annual conference bringing together industry experts to discuss latest innovations.",
        image:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
        highlights: [
          "Innovation Showcase",
          "Expert Panels",
          "Future Technologies",
        ],
        status: "upcoming",
      },
      {
        id: 6,
        title: "Asia Pacific Industrial Expo",
        category: "international",
        date: "December 8-11, 2024",
        location: "Tokyo, Japan",
        attendees: 800,
        type: "Exhibition",
        description:
          "Premier industrial exhibition in the Asia Pacific region showcasing cutting-edge technologies.",
        image:
          "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
        highlights: [
          "Regional Expansion",
          "Technology Display",
          "Market Insights",
        ],
        status: "upcoming",
      },
    ],
    2023: [
      {
        id: 7,
        title: "Smart Manufacturing Summit",
        category: "international",
        date: "February 20-22, 2023",
        location: "Dubai, UAE",
        attendees: 600,
        type: "Summit",
        description:
          "Regional summit focusing on smart manufacturing technologies and digital transformation.",
        image:
          "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop",
        highlights: [
          "Digital Transformation",
          "Smart Technologies",
          "Industry 4.0",
        ],
        status: "completed",
      },
      {
        id: 8,
        title: "Indian Engineering Excellence",
        category: "domestic",
        date: "May 15-16, 2023",
        location: "Chennai, India",
        attendees: 350,
        type: "Conference",
        description:
          "Celebrating engineering excellence and innovation in the Indian manufacturing sector.",
        image:
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        highlights: [
          "Engineering Innovation",
          "Best Practices",
          "Technical Excellence",
        ],
        status: "completed",
      },
      {
        id: 9,
        title: "Global Industrial Partnership Forum",
        category: "international",
        date: "August 12-14, 2023",
        location: "London, UK",
        attendees: 450,
        type: "Forum",
        description:
          "International forum for establishing strategic partnerships and collaborations.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        highlights: [
          "Strategic Partnerships",
          "Global Collaborations",
          "Business Development",
        ],
        status: "completed",
      },
    ],
    2022: [
      {
        id: 10,
        title: "Automation & Robotics Expo",
        category: "international",
        date: "March 10-13, 2022",
        location: "Shanghai, China",
        attendees: 900,
        type: "Exhibition",
        description:
          "Major exhibition showcasing latest automation and robotics technologies.",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
        highlights: [
          "Robotics Innovation",
          "Automation Solutions",
          "Future Manufacturing",
        ],
        status: "completed",
      },
      {
        id: 11,
        title: "India Industrial Growth Summit",
        category: "domestic",
        date: "July 25-26, 2022",
        location: "New Delhi, India",
        attendees: 280,
        type: "Summit",
        description:
          "National summit focusing on industrial growth strategies and market expansion.",
        image:
          "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        highlights: [
          "Growth Strategies",
          "Market Expansion",
          "Industry Insights",
        ],
        status: "completed",
      },
    ],
  };

  const availableYears = Object.keys(eventsData).sort((a, b) => b - a);

  const getFilteredEvents = () => {
    const yearEvents = eventsData[selectedYear] || [];
    if (selectedCategory === "all") return yearEvents;
    return yearEvents.filter((event) => event.category === selectedCategory);
  };

  const openModal = (event) => {
    setModalEvent(event);
    setModalImage(event.image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
    setModalEvent(null);
  };

  const getEventIcon = (type) => {
    switch (type.toLowerCase()) {
      case "conference":
        return <FaUsers />;
      case "exhibition":
        return <FaIndustry />;
      case "awards ceremony":
        return <FaAward />;
      case "summit":
        return <FaRocket />;
      case "forum":
        return <FaHandshake />;
      case "product launch":
        return <FaLightbulb />;
      default:
        return <FaCalendarAlt />;
    }
  };

  const getCategoryStats = () => {
    const yearEvents = eventsData[selectedYear] || [];
    const domestic = yearEvents.filter((e) => e.category === "domestic").length;
    const international = yearEvents.filter(
      (e) => e.category === "international"
    ).length;
    const totalAttendees = yearEvents.reduce((sum, e) => sum + e.attendees, 0);

    return {
      domestic,
      international,
      total: domestic + international,
      totalAttendees,
    };
  };

  const stats = getCategoryStats();

  return (
    <MainTemplate>
      {/* Hero Section */}
      <section
        className="relative min-h-[80vh] flex items-center text-white overflow-hidden pt-24"
        style={{
          background: `linear-gradient(135deg, rgba(30, 58, 138, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%), url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1920&h=1080&fit=crop') no-repeat center center`,
          backgroundSize: "cover",
        }}
      >
        {/* Hero Background Effects */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute w-32 h-32 bg-white rounded-full blur-3xl top-1/2 left-1/5 animate-pulse"></div>
          <div className="absolute w-24 h-24 bg-white rounded-full blur-3xl top-1/5 right-1/5 animate-pulse"></div>
          <div className="absolute w-28 h-28 bg-white rounded-full blur-3xl bottom-1/5 left-2/5 animate-pulse"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none z-1">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 via-transparent to-blue-900/20"></div>
        </div>

        <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-sm mb-8 backdrop-blur-md border border-white/20">
              <FaStar className="text-amber-400" />
              <span>Global Events & Exhibitions</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              Connecting Industries
              <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
                {" "}
                Worldwide
              </span>
            </h1>

            <p className="text-xl leading-relaxed mb-12 opacity-90">
              Join us at premier industrial events, exhibitions, and conferences
              around the globe. Discover innovations, forge partnerships, and be
              part of the future of manufacturing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-amber-400 leading-none">
                  {stats.total}
                </div>
                <div className="text-sm opacity-80 mt-2">
                  Events in {selectedYear}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-amber-400 leading-none">
                  {stats.totalAttendees.toLocaleString()}
                </div>
                <div className="text-sm opacity-80 mt-2">Total Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-amber-400 leading-none">
                  25+
                </div>
                <div className="text-sm opacity-80 mt-2">Countries</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] lg:block hidden">
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gradient-to-br from-amber-400/20 to-blue-500/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

              <div className="relative w-full h-full">
                <div className="absolute top-[20%] left-[10%] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-2 text-white animate-bounce">
                  <FaGlobe className="text-2xl text-amber-400" />
                  <span className="text-sm font-semibold">Global Reach</span>
                </div>
                <div
                  className="absolute top-[60%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-2 text-white animate-bounce"
                  style={{ animationDelay: "2s" }}
                >
                  <FaNetworkWired className="text-2xl text-amber-400" />
                  <span className="text-sm font-semibold">Networking</span>
                </div>
                <div
                  className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 flex flex-col items-center gap-2 text-white animate-bounce"
                  style={{ animationDelay: "4s" }}
                >
                  <FaTrophy className="text-2xl text-amber-400" />
                  <span className="text-sm font-semibold">Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 bg-white p-8 rounded-3xl shadow-xl">
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-base">
                <FaFilter className="text-blue-500" />
                <span>Category</span>
              </label>
              <div className="flex gap-4 flex-wrap">
                <button
                  className={`flex items-center gap-2 px-6 py-3 border-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "all"
                      ? "bg-blue-500 border-blue-500 text-white -translate-y-1 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedCategory("all")}
                >
                  All Events
                </button>
                <button
                  className={`flex items-center gap-2 px-6 py-3 border-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "domestic"
                      ? "bg-blue-500 border-blue-500 text-white -translate-y-1 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedCategory("domestic")}
                >
                  <FaHome />
                  Domestic
                </button>
                <button
                  className={`flex items-center gap-2 px-6 py-3 border-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === "international"
                      ? "bg-blue-500 border-blue-500 text-white -translate-y-1 shadow-lg shadow-blue-500/30"
                      : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500 hover:-translate-y-1"
                  }`}
                  onClick={() => setSelectedCategory("international")}
                >
                  <FaGlobe />
                  International
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2 font-semibold text-gray-700 text-base">
                <FaCalendarAlt className="text-blue-500" />
                <span>Year</span>
              </label>
              <div className="flex gap-2 flex-wrap">
                {availableYears.map((year) => (
                  <button
                    key={year}
                    className={`px-5 py-3 border-2 rounded-xl font-semibold transition-all duration-300 ${
                      selectedYear === year
                        ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/30"
                        : "border-gray-300 bg-white text-gray-700 hover:border-blue-500 hover:text-blue-500"
                    }`}
                    onClick={() => setSelectedYear(year)}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center text-2xl text-emerald-500">
                <FaHome />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Domestic Events
                </h3>
                <div className="text-5xl font-extrabold text-emerald-500 leading-none mb-2">
                  {stats.domestic}
                </div>
                <p className="text-gray-500 text-sm">Events across India</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-amber-600"></div>
              <div className="w-20 h-20 mx-auto mb-6 bg-amber-100 rounded-full flex items-center justify-center text-2xl text-amber-500">
                <FaGlobe />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  International Events
                </h3>
                <div className="text-5xl font-extrabold text-amber-500 leading-none mb-2">
                  {stats.international}
                </div>
                <p className="text-gray-500 text-sm">
                  Global exhibitions & conferences
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center text-2xl text-blue-500">
                <FaUsers />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Total Attendees
                </h3>
                <div className="text-5xl font-extrabold text-blue-500 leading-none mb-2">
                  {stats.totalAttendees.toLocaleString()}
                </div>
                <p className="text-gray-500 text-sm">Industry professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid Section */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
              {selectedCategory === "all"
                ? "All Events"
                : selectedCategory === "domestic"
                ? "Domestic Events"
                : "International Events"}{" "}
              in {selectedYear}
            </h2>
            <p className="text-xl text-gray-500 max-w-4xl mx-auto leading-relaxed">
              {selectedCategory === "domestic"
                ? "Strengthening partnerships across India with innovative industrial solutions"
                : selectedCategory === "international"
                ? "Expanding global footprint through premier international exhibitions and conferences"
                : "Comprehensive showcase of our participation in domestic and international events"}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {getFilteredEvents().map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 relative"
              >
                <div
                  className="relative h-64 overflow-hidden cursor-pointer group"
                  onClick={() => openModal(event)}
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaEye className="text-4xl mb-2" />
                    <span>View Details</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-white/95 px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold text-gray-700">
                    {getEventIcon(event.type)}
                    <span>{event.type}</span>
                  </div>
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                      event.status === "completed"
                        ? "bg-emerald-200 text-emerald-700"
                        : "bg-amber-200 text-amber-700"
                    }`}
                  >
                    {event.status === "completed" ? "Completed" : "Upcoming"}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-800 leading-tight flex-1 mr-4">
                      {event.title}
                    </h3>
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap ${
                        event.category === "domestic"
                          ? "bg-emerald-200 text-emerald-700"
                          : "bg-amber-200 text-amber-700"
                      }`}
                    >
                      {event.category === "domestic" ? <FaHome /> : <FaGlobe />}
                      <span>
                        {event.category === "domestic"
                          ? "Domestic"
                          : "International"}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-500 leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FaCalendarAlt className="text-blue-500 w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FaMapMarkerAlt className="text-blue-500 w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700 text-sm">
                      <FaUsers className="text-blue-500 w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-semibold text-gray-800 mb-4">
                      Key Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-2 rounded-2xl text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredEvents().length === 0 && (
            <div className="text-center py-16 text-gray-500">
              <div className="text-6xl mb-4 opacity-50">
                <FaCalendarAlt />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                No Events Found
              </h3>
              <p>
                No events available for the selected filters. Try adjusting your
                selection.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-500 text-white text-center">
        <div className="max-w-[1400px] mx-auto px-8">
          <div>
            <h2 className="text-5xl font-extrabold mb-4">
              Join Us at Upcoming Events
            </h2>
            <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
              Stay updated with our latest event participation and connect with
              us at industry gatherings worldwide.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 bg-amber-400 text-gray-800 hover:bg-amber-500 hover:-translate-y-1 border-none cursor-pointer">
                <FaCalendarAlt />
                <span>View Event Calendar</span>
              </button>
              <button className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900 hover:-translate-y-1 cursor-pointer">
                <FaCertificate />
                <span>Partnership Opportunities</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Event Modal */}
      {isModalOpen && modalEvent && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[1000] p-8"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 bg-black/50 text-white border-none rounded-full text-2xl cursor-pointer z-10 flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
              <div className="relative">
                <img
                  src={modalImage}
                  alt={modalEvent.title}
                  className="w-full h-full object-cover lg:rounded-l-3xl lg:rounded-r-none rounded-t-3xl lg:rounded-t-3xl"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${
                        modalEvent.category === "domestic"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-amber-500/90 text-white"
                      }`}
                    >
                      {modalEvent.category === "domestic" ? (
                        <FaHome />
                      ) : (
                        <FaGlobe />
                      )}
                      {modalEvent.category === "domestic"
                        ? "Domestic"
                        : "International"}
                    </span>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        modalEvent.status === "completed"
                          ? "bg-emerald-500/90 text-white"
                          : "bg-amber-500/90 text-white"
                      }`}
                    >
                      {modalEvent.status === "completed"
                        ? "Completed"
                        : "Upcoming"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
                  {modalEvent.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {modalEvent.description}
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-start gap-4">
                    <FaCalendarAlt className="text-blue-500 text-xl mt-1" />
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        Date
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-blue-500 text-xl mt-1" />
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        Location
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <FaUsers className="text-blue-500 text-xl mt-1" />
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        Attendees
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.attendees} professionals
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    {getEventIcon(modalEvent.type)}
                    <div className="flex-1">
                      <span className="block text-sm text-gray-500 mb-1">
                        Type
                      </span>
                      <span className="block font-semibold text-gray-800">
                        {modalEvent.type}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    Key Highlights
                  </h3>
                  <div className="flex flex-col gap-3">
                    {modalEvent.highlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <FaStar className="text-amber-400 text-base" />
                        <span>{highlight}</span>
                      </div>
                    ))}
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

export default Events;
