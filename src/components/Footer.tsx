import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-midnight text-cream py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">SELLKAR INDIA</h3>
            <p className="text-cream/70 text-sm leading-relaxed">
              Your trusted marketplace for selling premium electronics. Get instant quotes and hassle-free pickups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2 text-cream/70 text-sm">
              <li><a href="/sell/mobiles" className="hover:text-gold transition-colors">Sell Phone</a></li>
              <li><a href="/sell/laptop" className="hover:text-gold transition-colors">Sell Laptop</a></li>
              <li><a href="/sell/ipad" className="hover:text-gold transition-colors">Sell iPad</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-cream mb-4">Contact</h4>
            <ul className="space-y-3 text-cream/70 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold" />
                <span>+91 7411329292</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold" />
                <span>info@sellkarindia.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>Bengaluru, Karnataka</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-cream mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Facebook className="w-5 h-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Twitter className="w-5 h-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Instagram className="w-5 h-5 text-cream" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <Linkedin className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/50 text-sm">
          <p>© 2026 SellkarIndia. All rights reserved. | New Year Special Offers Available</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;