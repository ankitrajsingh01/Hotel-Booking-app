import React, { useState, useEffect, useRef } from "react";

const customStyles = `
  @keyframes blob-bounce {
    0%, 100% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-15px) scale(1.03); }
  }
  @keyframes gradient-shift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  @keyframes pulse-slow {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(1.1); }
  }
  
  .animate-blob-bounce {
    animation: blob-bounce 12s infinite ease-in-out;
  }
  .animate-gradient-shift {
    background-size: 200% 200%;
    animation: gradient-shift 8s infinite ease;
  }
  .animate-pulse-slow {
    animation: pulse-slow 8s infinite ease-in-out;
  }
  
  /* Smooth scroll behavior */
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(99, 102, 241, 0.2);
    border-radius: 10px;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(99, 102, 241, 0.4);
  }
`;

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Stats counting animation
  const [stats, setStats] = useState([
    { id: 1, label: "Destinations Covered", value: 180, suffix: "+", current: 0 },
    { id: 2, label: "Verified Hotels", value: 12500, suffix: "+", current: 0 },
    { id: 3, label: "Happy Travelers", value: 450, suffix: "K+", current: 0 },
    { id: 4, label: "Customer Rating", value: 4.9, suffix: "/5", current: 0, isDecimal: true }
  ]);

  const statsSectionRef = useRef(null);
  const hasCounted = useRef(false);

  useEffect(() => {
    setIsLoaded(true);

    // Intersection Observer for counting stats
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasCounted.current) {
          hasCounted.current = true;
          animateStats();
        }
      },
      { threshold: 0.2 }
    );

    if (statsSectionRef.current) {
      observer.observe(statsSectionRef.current);
    }

    return () => {
      if (statsSectionRef.current) {
        observer.unobserve(statsSectionRef.current);
      }
    };
  }, []);

  const animateStats = () => {
    const duration = 2000; // ms
    const frameRate = 1000 / 60; // 60 FPS
    const totalFrames = duration / frameRate;

    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quad formula
      const easeProgress = progress * (2 - progress);

      setStats((prevStats) =>
        prevStats.map((stat) => {
          let currentVal;
          if (stat.isDecimal) {
            currentVal = parseFloat((stat.value * easeProgress).toFixed(1));
          } else {
            currentVal = Math.floor(stat.value * easeProgress);
          }

          // Ensure it doesn't overshoot
          if (frame >= totalFrames) {
            currentVal = stat.value;
          }

          return { ...stat, current: currentVal };
        })
      );

      if (frame >= totalFrames) {
        clearInterval(timer);
      }
    }, frameRate);
  };

  const tabsContent = {
    mission: {
      title: "Our Mission",
      subtitle: "Connecting People & Places",
      desc: "To make travel accessible, personalized, and delightful for everyone, everywhere. We remove the friction from booking and stay discovery, giving you more time to focus on creating lifelong memories.",
      accent: "from-teal-400/20 to-emerald-500/20",
      bullets: [
        "Curated collection of high-standard stays.",
        "Zero hidden fees and transparent pricing models.",
        "Eco-friendly partnership programs with green hotels."
      ],
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    vision: {
      title: "Our Vision",
      subtitle: "The Future of Smart Booking",
      desc: "To construct the world's most intelligent, guest-centric hospitality platform. We envision a future where your booking experience adapts perfectly to your moods, preferences, and environmental values.",
      accent: "from-indigo-400/20 to-purple-500/20",
      bullets: [
        "AI-driven personalization engines for perfect match recommendations.",
        "Virtual Reality property walkthroughs before you check-in.",
        "Seamless multi-modal travel package integrations in one click."
      ],
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    values: {
      title: "Our Values",
      subtitle: "Driven by Integrity & Passion",
      desc: "We stand on a foundation of trust, constant innovation, and absolute devotion to customer satisfaction. We treat every traveler as our honored guest and every hotelier as our valued partner.",
      accent: "from-rose-400/20 to-pink-500/20",
      bullets: [
        "Obsessive attention to detail in guest support.",
        "Radical transparency in feedback and ratings.",
        "Continuous evolution through technology and design."
      ],
      icon: (
        <svg className="w-8 h-8 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  };

  const reviews = [
    {
      name: "Sarah Jenkins",
      role: "Frequent Traveler & Blogger",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      review: "StayNxt has completely changed the way I travel. The AI recommendation found me a boutique villa in Kyoto that matched my aesthetic perfectly. Zero hidden fees, absolute transparency, and amazing customer service.",
      location: "Kyoto, Japan",
      date: "Stayed June 2026"
    },
    {
      name: "David Chen",
      role: "Software Architect",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      review: "The VR walkthrough of my London hotel was spot on. What I saw on the app was exactly what I got. Smooth payment process and instant verified concierge support made it stress-free. Highly recommend this next-gen platform.",
      location: "London, UK",
      date: "Stayed May 2026"
    },
    {
      name: "Elena Rostova",
      role: "Family Vacation Planner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250",
      rating: 5,
      review: "The customer service is outstanding. We had to reschedule our resort booking in Vienna at 2 AM, and the StayNxt concierge resolved it within minutes. Hands down the best booking platform I've ever experienced.",
      location: "Vienna, Austria",
      date: "Stayed April 2026"
    },
    {
      name: "Marcus Thorne",
      role: "Adventure Traveler",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
      rating: 4.8,
      review: "Finding eco-friendly stays with specific requirements used to take hours. StayNxt's curated collections let us book a verified beach resort in Maldives in minutes. Smooth animations and beautiful interface are a huge bonus!",
      location: "Maldives",
      date: "Stayed March 2026"
    }
  ];

  const nextReview = () => {
    setActiveReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Injecting custom keyframe classes inside the component for zero config styling */}
      <style>{customStyles}</style>

      {/* Modern Background Gradient Meshes - Light Theme Version */}
      <div className="absolute top-0 left-1/4 w-125 h-125 bg-indigo-100/40 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-150 h-150 bg-teal-50/60 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "-3s" }} />
      <div className="absolute bottom-10 left-1/3 w-125 h-125 bg-purple-100/30 rounded-full blur-[110px] animate-pulse-slow pointer-events-none" style={{ animationDelay: "-1.5s" }} />

      {/* Decorative Wave SVG Header Background - Light Theme */}
      <div className="absolute top-0 left-0 w-full h-150 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,192C120,202.7,240,224,360,213.3C480,203,600,160,720,160C840,160,960,203,1080,218.7C1200,235,1320,224,1380,218.7L1440,213.3L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,0,0Z" fill="url(#gradientHeader)"></path>
          <defs>
            <linearGradient id="gradientHeader" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="50%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#f8fafc" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section id="about" className={`max-w-7xl mx-auto px-6 pt-24 pb-24 md:pt-32 md:pb-32 flex flex-col items-center text-center transition-all duration-1000 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-widest mb-6 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          Reimagining Travel Tech
        </div>

        <h1 className="text-4xl md:text-7xl font-black tracking-tight mb-8 max-w-5xl leading-none text-slate-900">
          Redefining Hospitality,
          <span className="block mt-3 bg-linear-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent animate-gradient-shift pb-1">
            One Stay at a Time
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-650 max-w-3xl leading-relaxed mb-12">
          At StayNxt, we believe discovering your next destination should be just as exhilarating as the trip itself. We blend bleeding-edge technology with thoughtful service to bring you closer to the perfect stay.
        </p>

        {/* Hero Interactive UI Card Showcase - Light Theme */}
        <div className="relative w-full max-w-4xl rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur-xl p-3 md:p-6 shadow-xl shadow-slate-200/50 group overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-linear-to-br from-indigo-500/10 to-teal-400/10 opacity-70 blur-3xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
          
          {/* Mockup Top Controls */}
          <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <div className="px-4 py-1.5 rounded-lg bg-slate-100 border border-slate-200/50 text-xs text-slate-400 font-mono">
              https://staynxt.com/about-us
            </div>
            <div className="w-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
                alt="Luxury Hotel Exterior"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-slate-100 shadow-md">
                <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider mb-1">Featured Destination</p>
                <h4 className="text-sm font-bold text-slate-800">The Azure Cliffside Suite — Bali</h4>
              </div>
            </div>

            <div className="space-y-6 md:pl-4">
              <div className="inline-block p-3 rounded-xl bg-teal-50 border border-teal-100 text-teal-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">Connecting travelers to curated micro-experiences</h3>
              <p className="text-slate-650 text-sm leading-relaxed">
                StayNxt isn't just an aggregator. We verify and select hotels based on comfort indices, neighborhood friendliness, and environment criteria to provide stays that align with your lifestyle.
              </p>
              
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-xs text-slate-700 font-medium">Smart AI Search</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100">
                    <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <span className="text-xs text-slate-700 font-medium">Zero Markup Fees</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section - Light Theme */}
      <section ref={statsSectionRef} className="bg-slate-100/60 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div 
                key={stat.id}
                className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredStat(stat.id)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="relative mb-2">
                  <span className="text-4xl md:text-5xl font-black bg-linear-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-indigo-600 group-hover:to-teal-500">
                    {stat.current}
                  </span>
                  <span className="text-2xl md:text-3xl font-black text-indigo-600">
                    {stat.suffix}
                  </span>
                  {/* Hover micro-animation line */}
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-linear-to-r from-indigo-500 to-teal-400 transition-transform duration-500 ${hoveredStat === stat.id ? "scale-x-100" : "scale-x-0"}`} />
                </div>
                <span className="text-xs md:text-sm font-semibold tracking-wider text-slate-500 uppercase mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section with Interactive Tabs - Light Theme */}
      <section id="mission-section" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-semibold uppercase tracking-wider">
              Core Philosophies
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              Guided by a passion for <span className="bg-linear-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">seamless journeys</span>.
            </h2>
            
            <p className="text-slate-650 leading-relaxed">
              We focus on building intuitive user interfaces, automated intelligence, and relationships of mutual respect with hotel hosts to ensure hospitality is fluid and high-value.
            </p>

            {/* Interactive Tab Buttons */}
            <div className="flex flex-col gap-3">
              {Object.keys(tabsContent).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`w-full text-left p-4 rounded-xl flex items-center justify-between transition-all duration-300 border ${
                    activeTab === tabKey
                      ? "bg-white border-indigo-500/20 text-indigo-950 shadow-md shadow-slate-100/50"
                      : "bg-slate-100/40 border-slate-150 text-slate-500 hover:bg-slate-100/80 hover:text-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`p-2 rounded-lg bg-white border ${activeTab === tabKey ? "border-indigo-100" : "border-slate-200"}`}>
                      {tabsContent[tabKey].icon}
                    </span>
                    <div>
                      <span className="font-bold text-sm block">{tabsContent[tabKey].title}</span>
                      <span className="text-xs text-slate-500 font-normal">{tabsContent[tabKey].subtitle}</span>
                    </div>
                  </div>
                  <svg className={`w-5 h-5 transition-transform duration-300 ${activeTab === tabKey ? "translate-x-1 text-indigo-600" : "text-slate-400"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Card Display */}
          <div className="lg:col-span-7">
            <div className="relative w-full rounded-2xl bg-linear-to-br from-white to-slate-50/50 border border-slate-200 
            p-8 shadow-lg overflow-hidden min-h-100 flex flex-col justify-between group">
              {/* Corner Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-br ${tabsContent[activeTab].accent} opacity-40
               blur-3xl group-hover:opacity-60 transition-opacity duration-500`} />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white border border-slate-100 rounded-2xl shadow-inner">
                    {tabsContent[activeTab].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">{tabsContent[activeTab].title}</h3>
                    <p className="text-xs text-indigo-600 font-semibold tracking-wider uppercase mt-0.5">{tabsContent[activeTab].subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-650 leading-relaxed text-sm md:text-base transition-opacity duration-300">
                  {tabsContent[activeTab].desc}
                </p>

                <div className="pt-6 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-455">Key Priorities</h4>
                  {tabsContent[activeTab].bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <svg className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex justify-between items-center text-xs text-slate-400 border-t border-slate-100 mt-8 relative z-10">
                <span>STAYNXT CORE PRINCIPLE</span>
                <span className="font-mono text-indigo-600">0{activeTab === "mission" ? 1 : activeTab === "vision" ? 2 : 3} //</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reviews / Testimonials Section */}
      <section id="reviews-section" className="bg-slate-100/50 border-t border-slate-200 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold uppercase tracking-wider animate-pulse-slow">
              Guest Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Loved by Guests Worldwide
            </h2>
            <p className="text-slate-650 text-sm md:text-base">
              Discover why thousands of travelers book their stays with StayNxt every day. Here is what they have to say about their experiences.
            </p>
          </div>

          {/* Interactive Testimonial Slider / Cards */}
          <div className="relative max-w-4xl mx-auto">
            {/* Background decorative elements */}
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-72 h-72 bg-indigo-200/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-72 h-72 bg-teal-200/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Testimonial Active Display Card */}
            <div className="relative rounded-2xl bg-white border border-slate-200 p-6 md:p-12 shadow-xl shadow-slate-100 overflow-hidden min-h-75 flex flex-col justify-between transition-all duration-500 transform scale-100">
              {/* Quote Mark Watermark */}
              <span className="absolute -top-6 -right-6 text-slate-100 font-serif text-[180px] leading-none select-none pointer-events-none font-bold">
                “
              </span>

              <div className="space-y-6 relative z-10">
                {/* Stars Rating */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(reviews[activeReviewIndex].rating) ? "text-amber-400" : "text-slate-200"}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  {reviews[activeReviewIndex].rating % 1 !== 0 && (
                    <span className="text-xs font-semibold text-slate-500 ml-1 mt-0.5">({reviews[activeReviewIndex].rating})</span>
                  )}
                </div>

                <p className="text-lg md:text-xl text-slate-705 leading-relaxed font-medium italic animate-fade-in">
                  "{reviews[activeReviewIndex].review}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-slate-100 mt-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-indigo-100 shrink-0 shadow-sm">
                    <img 
                      src={reviews[activeReviewIndex].image} 
                      alt={reviews[activeReviewIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base">{reviews[activeReviewIndex].name}</h4>
                    <p className="text-xs text-slate-500 font-medium">{reviews[activeReviewIndex].role}</p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end text-xs text-slate-400">
                  <div className="flex items-center gap-1 text-emerald-600 font-bold mb-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    <span>Verified Guest</span>
                  </div>
                  <span className="font-medium">{reviews[activeReviewIndex].location} • {reviews[activeReviewIndex].date}</span>
                </div>
              </div>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex justify-between items-center mt-8 px-2">
              {/* Dots indicators */}
              <div className="flex gap-2">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveReviewIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      activeReviewIndex === idx ? "w-8 bg-indigo-600" : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow navigation buttons */}
              <div className="flex gap-3">
                <button 
                  onClick={prevReview}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-indigo-600 shadow-sm hover:shadow transition-all duration-300"
                  aria-label="Previous Review"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button 
                  onClick={nextReview}
                  className="p-3 rounded-xl bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-indigo-600 shadow-sm hover:shadow transition-all duration-300"
                  aria-label="Next Review"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Final Banner) - Sleek Dark Contrast Card inside Light Layout */}
      <section className="max-w-7xl mx-auto px-6 pb-24 md:pb-32">
        <div className="relative rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-16 text-center space-y-8 shadow-xl overflow-hidden group">
          {/* Animated Background Mesh */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)] animate-pulse-slow pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Ready to find your <span className="bg-linear-to-r from-indigo-400 to-teal-300 bg-clip-text text-transparent animate-gradient-shift">next booking</span>?
            </h2>
            <p className="text-slate-400 text-sm md:text-base">
              Join thousands of happy travelers experiencing personalized, hassle-free stays globally. Search, select, and book in less than 60 seconds.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <button className="relative w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-white overflow-hidden group shadow-lg shadow-indigo-500/15">
              <span className="absolute inset-0 bg-linear-to-r from-indigo-500 to-teal-400 transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-linear-to-r from-teal-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Discover Stays</span>
            </button>
            
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-semibold text-slate-300 bg-slate-850 border border-slate-700 hover:bg-slate-750 hover:text-white transition-all">
              Talk to Concierge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}