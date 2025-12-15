import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell, ChevronDown, Flame, Users, Calendar, Trophy, Clock, Award, Heart, Star, ArrowRight, CheckCircle, Play } from 'lucide-react';

export default function FitnessWebsite() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: Flame },
    { 
      name: 'Programs', 
      href: '#programs',
      icon: Dumbbell,
      dropdown: [
        { name: 'Strength Training', desc: 'Build muscle & power' },
        { name: 'Cardio Blast', desc: 'Burn fat effectively' },
        { name: 'Yoga & Flexibility', desc: 'Mind & body balance' },
        { name: 'CrossFit', desc: 'High-intensity training' },
        { name: 'Personal Training', desc: '1-on-1 coaching' }
      ]
    },
    { name: 'Schedule', href: '#schedule', icon: Calendar },
    { name: 'Trainers', href: '#trainers', icon: Users },
    { name: 'Success Stories', href: '#stories', icon: Trophy }
  ];

  const programs = [
    {
      title: "Strength Training",
      description: "Build lean muscle mass and increase your overall strength with our expert-designed programs.",
      icon: Dumbbell,
      color: "from-red-600 to-orange-600"
    },
    {
      title: "Cardio Blast",
      description: "High-energy cardio sessions designed to boost endurance and burn maximum calories.",
      icon: Flame,
      color: "from-orange-600 to-yellow-600"
    },
    {
      title: "Yoga & Wellness",
      description: "Find balance and flexibility through guided yoga sessions for mind and body harmony.",
      icon: Heart,
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "CrossFit Training",
      description: "Intense functional movements that deliver results. Push your limits every session.",
      icon: Trophy,
      color: "from-blue-600 to-cyan-600"
    }
  ];

  const trainers = [
    { name: "Mike Johnson", specialty: "Strength Coach", experience: "10+ Years", image: "MJ" },
    { name: "Sarah Williams", specialty: "Yoga Instructor", experience: "8+ Years", image: "SW" },
    { name: "David Chen", specialty: "CrossFit Expert", experience: "12+ Years", image: "DC" },
    { name: "Emma Davis", specialty: "Nutrition Coach", experience: "7+ Years", image: "ED" }
  ];

  const plans = [
    {
      name: "Basic",
      price: "29",
      features: ["Access to gym floor", "Basic equipment", "Locker room access", "1 guest pass/month"],
      popular: false
    },
    {
      name: "Pro",
      price: "59",
      features: ["All Basic features", "Group classes included", "Personal trainer (2x/month)", "Nutrition consultation", "Free parking"],
      popular: true
    },
    {
      name: "Elite",
      price: "99",
      features: ["All Pro features", "Unlimited personal training", "Priority class booking", "Massage therapy (2x/month)", "VIP locker", "Guest passes (5/month)"],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-lg shadow-2xl shadow-red-500/10' 
          : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}>
        <div className="h-1 bg-gradient-to-r from-red-600 via-orange-500 to-red-600"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 cursor-pointer group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-red-600 to-orange-600 p-3 rounded-xl transform group-hover:scale-110 transition-transform duration-300">
                  <Dumbbell className="h-6 w-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <span className="text-2xl font-black text-white tracking-tight">
                  IRON<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">FORGE</span>
                </span>
                <div className="text-xs text-gray-400 font-semibold tracking-widest">FITNESS CLUB</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 font-semibold flex items-center space-x-2 rounded-lg hover:bg-white/5"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{link.name}</span>
                      {link.dropdown && <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-orange-500 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    
                    {link.dropdown && activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-3 w-64 bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-gray-800 overflow-hidden">
                        <div className="p-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={`#${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                              className="group block px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-red-600/20 hover:to-orange-600/20 transition-all duration-200"
                            >
                              <div className="font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-orange-400">
                                {item.name}
                              </div>
                              <div className="text-xs text-gray-400 mt-0.5">{item.desc}</div>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <button className="px-5 py-2.5 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                Login
              </button>
              <button className="relative group px-6 py-2.5 text-white font-bold rounded-lg overflow-hidden shadow-lg shadow-red-500/30">
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Start Free Trial</span>
                  <Flame className="h-4 w-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-300 hover:text-white">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-black to-orange-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full border border-red-500/30">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-semibold">
              🔥 Transform Your Life Today
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
            UNLEASH YOUR
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500">
              INNER BEAST
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands who've transformed their bodies and minds. Your journey to greatness starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-2xl shadow-red-500/50 hover:scale-105">
              <span className="flex items-center space-x-2">
                <span>Start Free Trial</span>
                <Flame className="h-5 w-5" />
              </span>
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Success Stories</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">10K+</div>
              <div className="text-gray-400 font-semibold mt-2">Members</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">50+</div>
              <div className="text-gray-400 font-semibold mt-2">Classes</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">24/7</div>
              <div className="text-gray-400 font-semibold mt-2">Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              OUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">PROGRAMS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose from our diverse range of programs designed to help you achieve your fitness goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="group relative bg-gradient-to-br from-gray-900 to-black p-6 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 hover:scale-105">
                  <div className={`inline-block p-4 rounded-xl bg-gradient-to-r ${program.color} mb-4`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                  <p className="text-gray-400 mb-4">{program.description}</p>
                  <button className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-semibold flex items-center space-x-2 group-hover:space-x-3 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <section id="trainers" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              MEET YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">TRAINERS</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our certified experts are here to guide you every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="group relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                  <div className="aspect-square bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center">
                    <div className="text-6xl font-black text-white">{trainer.image}</div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{trainer.name}</h3>
                    <p className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 font-semibold mb-2">{trainer.specialty}</p>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Award className="h-4 w-4 mr-2" />
                      <span>{trainer.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-4">
              CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">PLAN</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Flexible membership options to fit your lifestyle and goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border ${plan.popular ? 'border-red-500 scale-105' : 'border-gray-800'} transition-all duration-300 hover:scale-105`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 shadow-lg shadow-red-500/30' 
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-red-600 to-orange-600 p-2 rounded-lg">
                  <Dumbbell className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-black text-white">
                  IRON<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">FORGE</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm">Transform your body, transform your life.</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#programs" className="hover:text-white transition-colors">Programs</a></li>
                <li><a href="#trainers" className="hover:text-white transition-colors">Trainers</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>123 Fitness Street</li>
                <li>New York, NY 10001</li>
                <li>info@ironforge.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">Hours</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Monday - Friday: 5AM - 11PM</li>
                <li>Saturday: 6AM - 10PM</li>
                <li>Sunday: 7AM - 9PM</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-900 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 IronForge Fitness Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}