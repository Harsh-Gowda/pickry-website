import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingBag, ExternalLink, Mail, Search, Facebook, Twitter, Instagram, ChevronDown, CheckCircle, ShieldCheck, Star, Award, Zap, ArrowLeft, Share2, Bookmark, Filter, ArrowRight, ThumbsUp, TrendingUp, Sparkles, Clock, Swords, FlaskConical, Users, Timer, Monitor, Armchair, Dumbbell, Briefcase, Tent, Heart } from 'lucide-react';
import * as Constants from './constants';
import { Product, BlogPost } from './types';

// --- COMPONENTS ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'white' | 'glass' }) => {
  const baseStyle = "px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 active:scale-95";
  const variants = {
    primary: "bg-brand-orange text-white hover:bg-brand-orangeHover shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/50",
    outline: "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white",
    white: "bg-white text-brand-orange hover:bg-gray-50 shadow-md",
    glass: "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Badge = ({ children, color = 'blue', className='' }: { children?: React.ReactNode, color?: 'blue' | 'orange' | 'green' | 'dark', className?: string }) => {
  const colors = {
    blue: "bg-blue-100 text-blue-800",
    orange: "bg-orange-100 text-orange-800",
    green: "bg-green-100 text-green-800",
    dark: "bg-brand-navy text-white"
  };
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${colors[color]} ${className}`}>
      {children}
    </span>
  );
};

const PromoSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { 
      id: 1, 
      title: "The Future of Smart Home", 
      desc: "Upgrade your living space with our top-rated automated security and comfort picks.",
      image: "https://images.unsplash.com/photo-1558002038-1091a1661116?q=80&w=2070&auto=format&fit=crop",
      cta: "View Smart Home"
    },
    { 
      id: 2, 
      title: "Pro-Level Photography", 
      desc: "Cameras and lenses that are actually worth the investment in 2024.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
      cta: "See Camera Deals"
    },
    { 
      id: 3, 
      title: "Ultimate Gaming Setup", 
      desc: "From mechanical keyboards to 240Hz monitors, we've tested it all.",
      image: "https://images.unsplash.com/photo-1598550476439-cbf469f49e55?q=80&w=2070&auto=format&fit=crop",
      cta: "Browse Gaming"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[300px] md:h-[450px] shadow-lg group bg-gray-100">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
              
              <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 max-w-xl text-white">
                <div className={`transition-all duration-700 delay-100 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                    <Badge color="orange" className="self-start mb-6">Editor's Choice</Badge>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">{slide.title}</h2>
                    <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">{slide.desc}</p>
                    <Link to="/products">
                        <Button className="self-start !rounded-full !px-8 !py-4 text-lg bg-white !text-brand-navy hover:!bg-brand-orange hover:!text-white border-none shadow-xl">
                            {slide.cta} <ArrowRight className="w-5 h-5"/>
                        </Button>
                    </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- LAYOUT COMPONENTS ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-navy p-1.5 rounded-lg group-hover:rotate-3 transition-transform">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="font-heading font-bold text-2xl text-brand-navy tracking-tight">
              Pick<span className="text-brand-orange">ry</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {Constants.NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-orange' 
                    : 'text-gray-600 hover:text-brand-navy'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link to="/products">
              <Button variant="primary" className="!py-2 !px-4 text-sm !rounded-lg">
                Top Picks <Zap className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg h-screen z-50">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {Constants.NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-lg text-lg font-medium ${
                  location.pathname === link.path
                    ? 'bg-orange-50 text-brand-orange'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6">
               <Link to="/products" className="w-full">
                 <Button className="w-full justify-center">View Top Picks</Button>
               </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-brand-navy text-white pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-brand-orange" />
            <span className="font-heading font-bold text-2xl">Pickry</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
            Pick Smarter. Try Better. Curated, tested, and honest recommendations for savvy buyers who refuse to waste time on mediocre products.
          </p>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="bg-white/10 p-3 rounded-full hover:bg-brand-orange transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {['Home', 'About Us', 'Blog', 'Contact'].map(item => (
              <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} className="hover:text-brand-orange transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-white">Curated Collections</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            {['Technology', 'Home & Garden', 'Fitness', 'Office', 'Outdoors'].map(item => (
              <li key={item}><Link to="/products" className="hover:text-brand-orange transition-colors">{item}</Link></li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-bold text-lg mb-6 text-white">No Fluff Updates</h4>
          <p className="text-gray-300 text-sm mb-4">Get the latest expert picks delivered to your inbox.</p>
          <form className="flex flex-col gap-3">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all"
            />
            <button className="bg-brand-orange text-white px-4 py-3 rounded-lg font-bold hover:bg-brand-orangeHover transition-colors shadow-lg shadow-brand-orange/20">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-500">© 2024 Pickry. All rights reserved.</p>
          <div className="text-xs text-gray-500 max-w-lg text-center md:text-right bg-white/5 px-4 py-2 rounded-lg">
            <strong>Disclosure:</strong> We may earn a commission from links on this page. Every pick is earned, not bought.
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- PRODUCT CARD COMPONENT ---

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => {
  // Calculate a fake original price for the discount visual
  const originalPrice = (product.price * 1.25).toFixed(2);
  const discount = 20; // 20% off
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full relative hover:-translate-y-1">
      
      {/* Floating Discount Badge */}
      <div className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur text-brand-orange font-bold text-xs px-2 py-1 rounded shadow-sm border border-gray-100">
        -{discount}%
      </div>

      {/* Wishlist Button */}
      <button 
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-3 left-3 z-20 p-2.5 bg-white rounded-full shadow-lg text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"
        title="Add to Wishlist"
      >
        <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
      </button>

      {/* Image Area - Full width, no padding, cover */}
      <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-2">
           <div className="flex gap-0.5 text-yellow-400">
             {[...Array(5)].map((_, i) => (
               <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200 fill-none'}`} />
             ))}
           </div>
           <span className="text-xs text-gray-400 font-medium">{product.reviewsCount} reviews</span>
        </div>

        <h3 className="font-heading font-bold text-lg text-gray-900 leading-tight mb-2 group-hover:text-brand-orange transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Feature Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feat, i) => (
             <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">
               {feat}
             </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-baseline gap-2 mb-4">
             <span className="text-2xl font-bold text-gray-900">${product.price}</span>
             <span className="text-sm text-gray-400 line-through decoration-red-300">${originalPrice}</span>
          </div>
          
          <Link to="/products">
            <Button className="w-full !rounded-lg !py-2.5 !text-sm shadow-none hover:shadow-lg transition-all border border-transparent">
              Check Price <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => (
  <Link to={`/blog/${post.id}`} className="group block h-full">
    <article className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="h-48 overflow-hidden bg-gray-100 relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur text-brand-navy text-xs font-bold px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-brand-orange transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs font-medium text-gray-400">By {post.author}</span>
          <span className="text-xs font-bold text-brand-orange group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Read Article <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </article>
  </Link>
);

// --- PAGES ---

const HomePage = () => {
  const categories = [
    { name: 'Technology', icon: Monitor },
    { name: 'Smart Home', icon: Armchair },
    { name: 'Fitness', icon: Dumbbell },
    { name: 'Office', icon: Briefcase },
    { name: 'Outdoors', icon: Tent }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Standard Modern SaaS/Editorial Look */}
      <section className="relative bg-brand-navy pt-20 pb-24 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-orange text-sm font-medium border border-white/10 mb-6 backdrop-blur-sm">
                 <Sparkles className="w-4 h-4" />
                 <span>The New Standard in Reviews</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight mb-6">
                Stop Guessing. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-400">
                  Start Picking.
                </span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                We buy, test, and rank the world's best products so you don't have to. 
                No fluff, just data-driven recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  <Button className="!px-8 !py-4 text-lg !rounded-full w-full sm:w-auto">
                    Browse Top Picks
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="glass" className="!px-8 !py-4 text-lg !rounded-full border-white/20 w-full sm:w-auto">
                    Our Testing Process
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400 font-medium">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} className="w-8 h-8 rounded-full border-2 border-brand-navy" alt=""/>
                  ))}
                </div>
                <p>Trusted by 50k+ readers</p>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
               {/* Floating Cards UI Mockup */}
               <div className="relative z-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center gap-4 mb-4">
                     <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <ShieldCheck className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-white font-bold text-lg">Pickry Certified</h3>
                        <p className="text-gray-400 text-sm">100% Independent Testing</p>
                     </div>
                  </div>
                  <div className="space-y-3">
                     <div className="h-2 bg-white/10 rounded w-3/4"></div>
                     <div className="h-2 bg-white/10 rounded w-full"></div>
                     <div className="h-2 bg-white/10 rounded w-5/6"></div>
                  </div>
               </div>
               
               <div className="absolute -top-10 -right-10 bg-brand-orange text-white p-6 rounded-2xl shadow-xl transform rotate-[5deg] z-0 hidden md:block">
                  <div className="text-3xl font-bold mb-1">4.9/5</div>
                  <div className="text-sm opacity-90">Average Rating</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Product Category Strip */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {categories.map((cat, idx) => (
              <Link key={idx} to="/products" className="group">
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-orange transition-all cursor-pointer">
                  <cat.icon className="w-5 h-5 text-gray-500 group-hover:text-brand-orange transition-colors" />
                  <span className="font-bold text-gray-700 group-hover:text-brand-navy">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* REPLACED: Trust Strip with Promo Slider */}
      <PromoSlider />

      {/* Value Props - Standard Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-3 gap-8">
            {[
               { icon: FlaskConical, title: "Rigorous Testing", desc: "We spend weeks, not minutes, testing every product in real-world conditions." },
               { icon: ShieldCheck, title: "100% Unbiased", desc: "We buy our own review units. No sponsored rankings, ever." },
               { icon: TrendingUp, title: "Data Driven", desc: "Our 'Value Score' algorithm ensures you get the best bang for your buck." }
            ].map((feature, i) => (
               <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-navy mb-6">
                     <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
               </div>
            ))}
         </div>
      </section>

      {/* Featured / Trending - Refined Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
             <div>
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-brand-navy mb-4">Trending Right Now</h2>
                <p className="text-gray-600 max-w-xl">The products our community is loving this week. Updated hourly.</p>
             </div>
             <Link to="/products">
               <Button variant="outline" className="!rounded-full px-6">View All Products</Button>
             </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
             {Constants.FEATURED_PRODUCTS.map((product, idx) => (
               <ProductCard key={product.id} product={product} index={idx} />
             ))}
          </div>
        </div>
      </section>

      {/* Deal of the Day - Standard E-commerce Banner */}
      <section className="py-10 px-4">
         <div className="max-w-7xl mx-auto bg-brand-navy rounded-[2.5rem] overflow-hidden text-white relative shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            
            <div className="flex flex-col md:flex-row items-center relative z-10">
               <div className="p-10 md:p-16 md:w-1/2">
                  <div className="inline-block bg-brand-orange px-3 py-1 rounded text-xs font-bold uppercase tracking-widest mb-6">
                     Limited Time Offer
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                     Sony WH-1000XM5
                  </h2>
                  <p className="text-gray-300 text-lg mb-8">
                     Industry-leading noise canceling. 30-hour battery life. The lowest price we've seen in 6 months.
                  </p>
                  
                  <div className="flex items-end gap-4 mb-8">
                     <span className="text-5xl font-bold tracking-tight">$298</span>
                     <span className="text-xl text-gray-500 line-through mb-2">$399</span>
                  </div>

                  <div className="flex items-center gap-4">
                     <Link to="/products">
                       <Button className="!rounded-full !px-8">Claim Deal</Button>
                     </Link>
                     <div className="flex items-center gap-2 text-sm font-medium text-gray-400">
                        <Clock className="w-4 h-4" /> Expires in 12h 45m
                     </div>
                  </div>
               </div>
               <div className="md:w-1/2 bg-white/5 h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-l from-brand-navy to-transparent opacity-50 z-10" />
                  <img src="https://picsum.photos/600/600?random=99" className="relative z-0 w-4/5 object-contain drop-shadow-2xl transform hover:scale-105 transition-duration-500" alt="Deal" />
               </div>
            </div>
         </div>
      </section>

      {/* Comparisons Section - Split */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Head-to-Head Battles</h2>
            <p className="text-gray-600">We pit the best against the best.</p>
         </div>
         <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
               <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg h-[400px] flex flex-col justify-end p-8">
                  <img src={`https://picsum.photos/800/600?random=${50+i}`} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Battle" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="relative z-10 text-white">
                     <div className="flex items-center gap-2 text-brand-orange font-bold text-sm uppercase tracking-wider mb-2">
                        <Swords className="w-4 h-4" /> Comprehensive Review
                     </div>
                     <h3 className="text-2xl font-bold mb-4">iPhone 15 Pro vs Pixel 8 Pro: The Ultimate Camera Test</h3>
                     <Link to="/blog/1">
                       <Button variant="glass" className="!rounded-full !px-6 text-sm">Read the Verdict</Button>
                     </Link>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Newsletter - Minimalist Center */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
         <div className="max-w-3xl mx-auto px-4 text-center">
            <Mail className="w-10 h-10 text-brand-navy mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-bold text-brand-navy mb-4">Join the "No-Fluff" Club</h2>
            <p className="text-gray-600 mb-8 text-lg">
               Get one email a week with our top rated picks and hidden deals. No spam, we promise.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
               <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:border-brand-navy focus:ring-1 focus:ring-brand-navy"
               />
               <Button className="!rounded-full !px-8">Subscribe</Button>
            </div>
            <p className="text-xs text-gray-400 mt-4">Join 50,000+ smart shoppers.</p>
         </div>
      </section>
    </div>
  );
};

const AboutPage = () => (
  <div className="bg-white">
    {/* Hero */}
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge color="orange" className="mb-6">Our Story</Badge>
          <h1 className="font-heading font-bold text-4xl text-brand-navy mb-6">Pick Smarter. <br/> Live Better.</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We started Pickry because we were tired of fake reviews and biased "top 10" lists. We're here to bring transparency back to online shopping.
          </p>
        </div>
        <img 
          src="https://picsum.photos/1200/500?grayscale" 
          alt="Our Team" 
          className="w-full h-auto rounded-2xl shadow-xl mt-8"
        />
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading font-bold text-3xl text-center text-brand-navy mb-16">The Pickry Standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Constants.REVIEW_PROCESS.map((step, i) => (
            <div key={i} className="relative p-6 bg-white border border-gray-100 rounded-xl shadow-sm text-center group hover:shadow-md transition-shadow">
              <div className="w-16 h-16 mx-auto bg-brand-navy/5 text-brand-navy rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <span className="font-bold text-xl">{i + 1}</span>
              </div>
              <h3 className="font-bold text-lg mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
              {i < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Ethics */}
    <section className="py-20 bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="font-heading font-bold text-3xl mb-6">Affiliate Ethics & Transparency</h2>
            <div className="space-y-6 text-gray-300">
              <p>We believe you deserve to know how we make money. When you click a link on our site, we may earn a commission. However, this never dictates our editorial content.</p>
              <p>Our writers and testers are separated from our business team to ensure zero conflict of interest.</p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-orange w-5 h-5"/> No paid placements in "Best of" lists</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-orange w-5 h-5"/> We buy our own test units whenever possible</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-brand-orange w-5 h-5"/> Negative flaws are always highlighted</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 bg-white/5 p-8 rounded-2xl border border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-brand-orange p-3 rounded-full">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-xl">Certified Independent</h4>
                <p className="text-sm text-gray-400">Audited by Third-Party Ethics Board</p>
              </div>
            </div>
            <p className="text-sm italic text-gray-400">"Pickry sets the gold standard for transparency in the affiliate marketing industry."</p>
            <p className="text-xs text-brand-orange mt-2 font-bold uppercase tracking-wider">- Tech Journal 2024</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const topProduct = Constants.FEATURED_PRODUCTS[0];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* 1. HERO PRODUCT SECTION - The "Buy This One" Driver */}
      <section className="bg-brand-navy text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
             
             {/* Left: Text */}
             <div className="w-full md:w-1/2 space-y-6">
                <div className="flex gap-3">
                   <Badge color="orange">Editor's #1 Pick</Badge>
                   <Badge color="blue" className="bg-blue-600 text-white">Best Overall</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                  {topProduct.name}
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  After 40 hours of testing, we believe this is the best option for 90% of people. It beats competitors that cost twice as much.
                </p>
                <div className="flex items-center gap-4 pt-4">
                  <div className="text-center px-4 py-2 bg-white/10 rounded-lg">
                    <p className="text-2xl font-bold text-brand-orange">9.8</p>
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Rating</p>
                  </div>
                  <div className="h-10 w-px bg-white/20"></div>
                  <div>
                    <p className="text-3xl font-bold">${topProduct.price}</p>
                    <p className="text-xs text-gray-400 line-through">${(topProduct.price * 1.25).toFixed(0)}</p>
                  </div>
                </div>
                <Button className="w-full md:w-auto !py-4 !px-8 !text-lg !rounded-full mt-4">
                  Buy This Now <ArrowRight className="w-5 h-5" />
                </Button>
                <p className="text-xs text-gray-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> 30-Day Money Back Guarantee via Amazon
                </p>
             </div>

             {/* Right: Image */}
             <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-transparent rounded-full blur-3xl"></div>
                <img 
                  src={topProduct.image} 
                  alt={topProduct.name} 
                  className="relative z-10 w-full h-[400px] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500" 
                />
             </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY NAV - Clean Strip */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-center space-x-2 py-4 min-w-max">
            {['All', 'Audio', 'Smart Home', 'Wearables', 'Office', 'Travel'].map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                  ? 'bg-brand-navy text-white shadow-md' 
                  : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. MAIN PRODUCT GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-heading font-bold text-brand-navy">Top Rated Picks</h2>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Sorted by: <strong>Relevance</strong></span>
            </div>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Constants.FEATURED_PRODUCTS.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
            {/* Mock duplicates to show grid */}
            {Constants.FEATURED_PRODUCTS.map((product, idx) => (
              <ProductCard key={`${product.id}-copy`} product={{...product, id: `${product.id}-copy`}} index={idx + 4} />
            ))}
         </div>
      </div>
      
      {/* 4. COMPARISON TABLE (Simplified) */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-heading font-bold text-brand-navy">Compare The Best</h2>
              <p className="text-gray-500 mt-2">See how the top contenders stack up.</p>
           </div>
           
           <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left">
                 <thead className="bg-gray-50 text-gray-900 font-bold uppercase text-xs tracking-wider">
                    <tr>
                       <th className="px-6 py-4">Product</th>
                       <th className="px-6 py-4">Rating</th>
                       <th className="px-6 py-4">Key Feature</th>
                       <th className="px-6 py-4">Verdict</th>
                       <th className="px-6 py-4">Price</th>
                       <th className="px-6 py-4"></th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100 text-sm">
                    {Constants.FEATURED_PRODUCTS.slice(0,3).map((p, i) => (
                       <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-bold text-brand-navy flex items-center gap-3">
                             <img src={p.image} className="w-10 h-10 object-contain" alt=""/>
                             {p.name}
                          </td>
                          <td className="px-6 py-4 text-yellow-500 font-bold">{p.rating}/5.0</td>
                          <td className="px-6 py-4 text-gray-600">{p.features[0]}</td>
                          <td className="px-6 py-4">
                             {i === 0 ? <span className="text-green-600 font-bold">Pickry Choice</span> : <span className="text-gray-500">Runner Up</span>}
                          </td>
                          <td className="px-6 py-4 font-bold">${p.price}</td>
                          <td className="px-6 py-4">
                             <a href="#" className="text-brand-orange font-bold hover:underline">View</a>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </section>

    </div>
  );
};

const BlogPage = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Search */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h1 className="font-heading font-bold text-4xl text-brand-navy mb-4">The Pickry Blog</h1>
          <p className="text-gray-600 mb-8">Guides, news, and deep dives into the products you love.</p>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for articles..." 
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-orange-100 outline-none transition-all"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['All', 'Tech', 'Home', 'Wellness', 'Money'].map(cat => (
              <button key={cat} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === 'All' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-2/3">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {Constants.BLOG_POSTS.map((post) => (
                 <BlogCard key={post.id} post={post} />
               ))}
               {/* Dummy Duplicate for visual fill */}
               <BlogCard key="dummy-1" post={{...Constants.BLOG_POSTS[0], id: "99", title: "Why Cheap Chargers Are Ruining Your Battery", image: "https://picsum.photos/800/600?random=15"}} />
             </div>
             
             <div className="mt-12 flex justify-center">
               <Button variant="outline">Load More Articles</Button>
             </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Popular Posts */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg mb-4 text-brand-navy">Popular Posts</h3>
              <ul className="space-y-4">
                {[1, 2, 3].map(i => (
                  <li key={i} className="flex gap-3 items-start group cursor-pointer">
                    <span className="text-2xl font-bold text-gray-200 group-hover:text-brand-orange transition-colors">0{i}</span>
                    <div>
                      <h4 className="font-bold text-gray-900 leading-snug group-hover:text-brand-orange transition-colors">Best Wireless Earbuds for Running in 2024</h4>
                      <span className="text-xs text-gray-500">3 min read</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Small */}
            <div className="bg-brand-navy p-6 rounded-xl text-white text-center">
               <Mail className="w-8 h-8 mx-auto mb-2 text-brand-orange" />
               <h3 className="font-bold text-lg mb-2">Get Deal Alerts</h3>
               <p className="text-sm text-gray-300 mb-4">Never miss a price drop again.</p>
               <input type="email" placeholder="Email" className="w-full px-3 py-2 rounded mb-2 text-gray-900 text-sm" />
               <Button variant="primary" className="w-full !py-2">Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogSinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = Constants.BLOG_POSTS.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <Button onClick={() => navigate('/blog')}>Back to Blog</Button>
      </div>
    );
  }

  return (
    <div className="bg-white pb-20">
      {/* Breadcrumb / Nav helper */}
      <div className="bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link to="/" className="hover:text-brand-orange">Home</Link> 
            <span className="text-gray-300">/</span>
            <Link to="/blog" className="hover:text-brand-orange">Blog</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium truncate max-w-xs">{post.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Article */}
          <article className="lg:w-2/3">
            <div className="mb-8">
              <span className="text-brand-orange font-bold text-sm tracking-wider uppercase mb-2 block">{post.category}</span>
              <h1 className="font-heading font-bold text-3xl md:text-5xl text-brand-navy mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center justify-between border-y border-gray-100 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.date} • {post.readTime}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-400 hover:text-brand-navy hover:bg-gray-50 rounded-full transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-brand-navy hover:bg-gray-50 rounded-full transition-colors">
                    <Bookmark className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-10 rounded-2xl overflow-hidden shadow-sm">
              <img src={post.image} alt={post.title} className="w-full h-auto object-cover" />
            </div>

            <div className="bg-orange-50 p-4 rounded-lg mb-10 flex items-start gap-3 text-sm text-gray-700">
              <ShieldCheck className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
              <p><strong>Affiliate Disclosure:</strong> This article contains affiliate links. If you purchase through these links, we may earn a small commission at no extra cost to you. We only recommend products we truly believe in.</p>
            </div>

            <div className="prose prose-lg prose-blue max-w-none text-gray-700 font-sans" dangerouslySetInnerHTML={{ __html: post.content || '' }}>
              {/* Content injected here */}
            </div>

            {/* Author Box */}
            <div className="mt-16 bg-gray-50 p-8 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
               <img src={`https://ui-avatars.com/api/?name=${post.author}&size=128`} alt={post.author} className="w-20 h-20 rounded-full" />
               <div>
                 <h4 className="font-bold text-lg text-brand-navy mb-2">About {post.author}</h4>
                 <p className="text-gray-600 mb-4">Senior editor at Pickry. Obsessed with finding the perfect gadget. Has reviewed over 500 products in the last 5 years.</p>
                 <Button variant="outline" className="!py-1 !px-4 !text-sm">View All Reviews</Button>
               </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Featured Product Widget */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-4 h-4 text-brand-orange fill-current" /> Mentioned Product
              </h3>
              <div className="mb-4">
                <img src={Constants.FEATURED_PRODUCTS[0].image} alt="Product" className="w-full rounded-lg mb-3" />
                <h4 className="font-bold text-brand-navy leading-tight mb-1">{Constants.FEATURED_PRODUCTS[0].name}</h4>
                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-3">
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <Star className="w-4 h-4 fill-current"/>
                   <span className="text-gray-500 ml-1">(1.2k)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">${Constants.FEATURED_PRODUCTS[0].price}</span>
                  <Badge color="green">Best Deal</Badge>
                </div>
              </div>
              <Button className="w-full">Check Price</Button>
            </div>

            {/* Related Posts */}
             <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <h3 className="font-heading font-bold text-lg mb-4 text-brand-navy">Related Articles</h3>
              <ul className="space-y-4">
                {Constants.BLOG_POSTS.filter(p => p.id !== id).slice(0, 3).map(p => (
                  <li key={p.id}>
                    <Link to={`/blog/${p.id}`} className="flex gap-3 items-start group">
                      <img src={p.image} alt="" className="w-16 h-16 object-cover rounded-md" />
                      <div>
                        <h4 className="font-bold text-gray-900 leading-snug text-sm group-hover:text-brand-orange transition-colors line-clamp-2">{p.title}</h4>
                        <span className="text-xs text-gray-500">{p.date}</span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="bg-white">
      <div className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300">Have a question or a product suggestion? We're all ears.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-brand-navy mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none bg-white">
                  <option>General Inquiry</option>
                  <option>Product Suggestion</option>
                  <option>Partnership Opportunity</option>
                  <option>Report a Bug</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none" placeholder="How can we help?"></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full">Send Message</Button>
            </form>

            <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg text-brand-navy mb-2">Partner With Us</h3>
              <p className="text-gray-600 text-sm mb-4">Are you a brand looking to get your product reviewed by experts? We'd love to collaborate.</p>
              <a href="#" className="text-brand-orange font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                Download Media Kit <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-heading font-bold text-2xl text-brand-navy mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {Constants.FAQS.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button 
                    className="w-full flex justify-between items-center p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`} />
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 bg-gray-50 border-t border-gray-100 text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-12">
               <h3 className="font-bold text-lg text-brand-navy mb-4">Contact Info</h3>
               <div className="space-y-3 text-gray-600">
                  <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-brand-orange"/> support@pickry.com</p>
                  <p className="flex items-center gap-3"><ShoppingBag className="w-5 h-5 text-brand-orange"/> 123 Review Street, Tech City, CA 90210</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogSinglePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;