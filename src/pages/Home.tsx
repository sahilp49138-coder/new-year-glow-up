import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Star, Calculator, Truck, CreditCard, MessageCircle, Phone, MapPin, CheckCircle } from "lucide-react";
import Footer from "@/components/Footer";
import NewYearParticles from "@/components/NewYearParticles";
import NewYearGlowBadge from "@/components/NewYearGlowBadge";
import heroImage from "@/assets/hero-newyear.jpg";

interface Review {
  id: string;
  customer_name: string;
  device_name: string;
  rating: number;
  review_text: string;
  location: string;
}

// ==================== TYPING TEXT COMPONENT ====================
interface TypingTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const TypingText = ({ text, speed = 40, className = "" }: TypingTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse text-gold">|</span>
      )}
    </span>
  );
};

const PHONE_NUMBER = "7411329292";
const WHATSAPP_NUMBER = "7411329292";
const WHATSAPP_MESSAGE = "Hi! I'm interested in selling my gadget and would like to know more.";
const LOCATION_ADDRESS = "22, 2nd floor, Kothanur, Behind MCS Convention Hall, K Narayanapura Main Rd, Bengaluru, Nagareshwara - Nagenahalli, Karnataka 560077";

// Mock reviews data
const mockReviews: Review[] = [
  { id: "1", customer_name: "Rahul Sharma", device_name: "iPhone 14 Pro", rating: 5, review_text: "Amazing service! Got the best price for my phone. The pickup was on time and payment was instant.", location: "Bangalore" },
  { id: "2", customer_name: "Priya Patel", device_name: "MacBook Pro", rating: 5, review_text: "Sold my laptop hassle-free. Their evaluation was fair and the process was smooth.", location: "Mumbai" },
  { id: "3", customer_name: "Amit Kumar", device_name: "iPad Air", rating: 5, review_text: "Excellent customer support. They guided me through the entire process. Highly recommended!", location: "Delhi" },
  { id: "4", customer_name: "Sneha Reddy", device_name: "Samsung Galaxy S23", rating: 5, review_text: "Quick and professional. The pickup executive was polite and payment was instant.", location: "Hyderabad" },
  { id: "5", customer_name: "Vikram Singh", device_name: "OnePlus 11", rating: 5, review_text: "Best platform to sell old phones. Got 20% more than other platforms offered.", location: "Pune" },
  { id: "6", customer_name: "Anjali Nair", device_name: "Dell XPS", rating: 5, review_text: "Trustworthy service. My laptop was picked up safely and payment was credited immediately.", location: "Chennai" },
];

const Home = () => {
  const navigate = useNavigate();
  const [reviews] = useState<Review[]>(mockReviews);

  const handleCategoryClick = (category: "phone" | "laptop" | "ipad") => {
    const routes = {
      phone: "/sell/mobiles",
      laptop: "/sell/laptop",
      ipad: "/sell/ipad"
    };
    navigate(routes[category]);
  };

  const scrollToCategories = () => {
    document.getElementById('categories-section')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const whatsappClick = () => {
    const whatsappUrl = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(whatsappUrl, '_blank');
  };

  const callUsClick = () => {
    window.open(`tel:${PHONE_NUMBER}`, '_self');
  };

  const steps = [
    {
      icon: Calculator,
      title: "Get a Quote",
      description: "Select your device and condition to receive an instant price estimate using our advanced evaluation system.",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Truck,
      title: "Schedule Pickup",
      description: "Book a convenient time for our professional team to collect your device from your doorstep at no extra cost.",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: CreditCard,
      title: "Get Paid",
      description: "After quick inspection and verification, receive immediate payment via your preferred method - cash, bank transfer, or UPI.",
      gradient: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* ==================== NEW YEAR 2026 HERO SECTION ==================== */}
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with golden overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Premium modern gadgets with New Year 2026 celebration"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/50"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
          
          {/* Subtle golden glow overlay */}
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 50% 30%, hsl(43 90% 50% / 0.15), transparent 60%)",
            }}
            animate={{
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* New Year Particles Effect */}
        <NewYearParticles />

        {/* Main Content */}
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main Heading with glow effect */}
            <h1 className="font-serif font-bold mb-6">
              <motion.span 
                className="block text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-wide drop-shadow-lg text-primary animate-text-glow"
                animate={{
                  textShadow: [
                    "0 0 20px hsl(216 80% 45% / 0.3)",
                    "0 0 40px hsl(216 80% 45% / 0.4)",
                    "0 0 20px hsl(216 80% 45% / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                SELLKAR
              </motion.span>
              
              {/* Decorative Line with Text - Gold */}
              <span className="flex items-center justify-center mt-4 gap-4">
                <span className="block flex-1 h-[2px] max-w-[100px] sm:max-w-[120px] bg-gradient-to-r from-transparent via-accent to-accent" />
                <motion.span 
                  className="text-xl sm:text-2xl lg:text-3xl leading-none font-medium tracking-widest text-gradient-gold"
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  INDIA
                </motion.span>
                <span className="block flex-1 h-[2px] max-w-[100px] sm:max-w-[120px] bg-gradient-to-l from-transparent via-accent to-accent" />
              </span>
            </h1>

            {/* New Year 2026 Tagline */}
            <motion.p 
              className="text-2xl sm:text-3xl lg:text-4xl mb-2 font-serif font-bold text-gradient-gold"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              🎆 Start 2026 with Sellkar! 🎆
            </motion.p>

            {/* Subtitle with Typing Effect */}
            <p className="text-xl sm:text-2xl lg:text-3xl mb-4 font-sans font-bold min-h-[2.5rem] text-foreground">
              <TypingText 
                text="New Year, New Beginnings – Sell Smart!" 
                speed={40}
              />
            </p>

            {/* Description */}
            <motion.p 
              className="text-lg mb-12 max-w-2xl mx-auto font-sans font-semibold leading-relaxed text-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ring in the New Year by turning your old gadgets into instant cash! Get the best prices, hassle-free pickup, and celebrate 2026 with extra money in your pocket.
            </motion.p>

            {/* CTA Button with glow pulse */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(43 90% 50% / 0.3)",
                    "0 0 40px hsl(43 90% 50% / 0.5)",
                    "0 0 20px hsl(43 90% 50% / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="rounded-lg"
              >
                <Button
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-12 py-6 rounded-lg font-bold shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={scrollToCategories}
                >
                  SELL NOW
                </Button>
              </motion.div>
            </motion.div>

            {/* New Year Badge */}
            <NewYearGlowBadge />

            {/* Stats with gold accents */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}>
                <div className="text-3xl font-bold text-gradient-gold">10,000+</div>
                <div className="font-semibold text-foreground">Devices Purchased</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <div className="text-3xl font-bold text-gradient-gold">4.9★</div>
                <div className="font-semibold text-foreground">Customer Rating</div>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}>
                <div className="text-3xl font-bold text-gradient-gold">24/7</div>
                <div className="font-semibold text-foreground">Support Available</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator with gold accent */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToCategories}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-3 rounded-full mt-2 bg-accent"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </main>

      {/* Categories Section */}
      <section id="categories-section" className="py-20 bg-cream-light">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary">Instant Price</span> Evaluation
            </motion.h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Get an accurate quote for your device in seconds. Our AI-powered
              evaluation system ensures you get the best price for your gadgets.
            </p>
          </div>

          <Card className="max-w-3xl mx-auto shadow-lg border-0 bg-card">
            <CardContent className="p-8">
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-center text-card-foreground mb-8">
                  What would you like to sell?
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {[
                    { key: "phone", label: "Sell Phone", desc: "Smartphones & Mobile Devices" },
                    { key: "laptop", label: "Sell Laptop", desc: "Laptops & Computers" },
                    { key: "ipad", label: "Sell iPad", desc: "Tablets & iPads" },
                  ].map((item, index) => (
                    <motion.div 
                      key={item.key}
                      initial={{ opacity: 0, y: 20 }} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={item.key === "ipad" ? "col-span-2 flex justify-center md:col-span-1 md:flex-none" : ""}
                    >
                      <Card 
                        className="cursor-pointer group hover:scale-105 transition-all duration-300 hover:ring-2 hover:ring-primary hover:shadow-xl w-full max-w-[15rem]" 
                        onClick={() => handleCategoryClick(item.key as "phone" | "laptop" | "ipad")}
                      >
                        <CardContent className="p-6">
                          <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-accent/10 to-primary/10 h-40 flex items-center justify-center">
                            <div className="text-6xl">
                              {item.key === "phone" ? "📱" : item.key === "laptop" ? "💻" : "📟"}
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          <div className="text-center">
                            <h4 className="text-xl font-semibold text-card-foreground mb-2">{item.label}</h4>
                            <p className="text-sm text-muted-foreground">{item.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cities Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
              Sell Your Phone in <span className="text-primary">Major Cities</span>
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Get instant cash with free home pickup in your city
            </p>
            <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
              <a 
                href="/sell-phone-in-bangalore" 
                className="inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 hover:underline transition-colors font-medium"
              >
                <CheckCircle className="w-5 h-5" />
                Sell Old Phones in Bangalore
              </a>
              <span className="text-border text-2xl">|</span>
              <a 
                href="/sell-phone-in-hyderabad" 
                className="inline-flex items-center gap-2 text-lg text-primary hover:text-primary/80 hover:underline transition-colors font-medium"
              >
                <CheckCircle className="w-5 h-5" />
                Sell Old Phones in Hyderabad
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              How <span className="text-primary">It Works</span>
            </motion.h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Our streamlined process makes selling your gadgets simple, secure, and hassle-free. From quote to payment in just three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.6, delay: index * 0.2 }} 
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border to-transparent z-0"></div>
                  )}

                  <Card className="text-center relative z-10 group hover:shadow-2xl transition-all duration-300 bg-card border-2 hover:border-primary cursor-pointer">
                    <CardContent className="p-8">
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                        {index + 1}
                      </div>
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                        <IconComponent className={`w-10 h-10 ${index === 1 ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <h3 className="text-2xl font-semibold text-card-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-foreground mb-6">Ready to sell your device? Start the process now!</p>
            <Button onClick={scrollToCategories} className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-cream-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              What Our <span className="text-primary">Customers Say</span>
            </motion.h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of satisfied customers who have trusted SellkarIndia for their device selling needs. Real reviews from real customers across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-16">
            {[
              { value: "4.9/5", label: "Average Rating" },
              { value: "10,000+", label: "Happy Customers" },
              { value: "₹50Cr+", label: "Paid to Customers" },
              { value: "25+", label: "Cities Covered" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center" 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <motion.div 
                key={review.id} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: index * 0.1 }} 
                className="relative p-6 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">"{review.review_text}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mr-4 border-2 border-primary">
                    {review.customer_name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">{review.customer_name}</div>
                    <div className="text-sm text-muted-foreground">Sold {review.device_name}</div>
                    <div className="text-xs text-primary">{review.location}</div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">"</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-foreground mb-6">Ready to join our community of satisfied customers?</p>
            <Button onClick={scrollToCategories} className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-8 rounded-full transition duration-300">
              Start Selling Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl sm:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Contact <span className="text-primary">& Support</span>
            </motion.h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
              Have questions? Need assistance? Our dedicated support team is here to help you 24/7. Get in touch through your preferred channel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="hidden lg:block"></div>

            <div className="space-y-8">
              <Card className="bg-card border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-card-foreground mb-6">Quick Contact</h3>

                  <div className="space-y-4">
                    <button
                      onClick={whatsappClick}
                      className="w-full flex items-center p-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-xl hover:from-green-700 hover:to-green-600 transition-all duration-300 hover:scale-[1.02] shadow-lg"
                    >
                      <MessageCircle className="w-6 h-6 mr-3" />
                      <div className="text-left">
                        <div className="font-semibold">WhatsApp Chat</div>
                        <div className="text-sm opacity-90">Get instant support</div>
                      </div>
                    </button>

                    <button
                      onClick={callUsClick}
                      className="flex items-center w-full p-4 bg-secondary rounded-xl border-2 hover:bg-primary/5 transition"
                    >
                      <Phone className="w-6 h-6 text-primary mr-3" />
                      <div>
                        <div className="font-semibold text-card-foreground">Call Us</div>
                        <div className="text-primary">+91 {PHONE_NUMBER}</div>
                      </div>
                    </button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Location
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{LOCATION_ADDRESS}</p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2">
                <CardContent className="p-8">
                  <h4 className="text-lg font-semibold text-card-foreground mb-4">Why Choose Our Support?</h4>
                  <div className="space-y-3 text-sm">
                    {[
                      { color: "bg-primary", text: "24/7 Customer Support Available" },
                      { color: "bg-accent", text: "Average Response Time: Under 30 minutes" },
                      { color: "bg-primary", text: "Multilingual Support (Hindi, English, Kannada, Malayalam)" },
                      { color: "bg-accent", text: "Dedicated Account Managers for High-Value Sales" },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center text-muted-foreground">
                        <div className={`w-2 h-2 ${item.color} rounded-full mr-3`}></div>
                        {item.text}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;