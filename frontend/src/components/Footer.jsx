const Footer = () => {
  return (
    <footer className="bg-[#273E47] text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-[#ebe0c3] rounded-full"></div>
              <h3 className="text-2xl font-bold text-[#f6edd5]">TasteBurst</h3>
            </div>
            <p className="text-[#f6edd5]/80 mb-4">
              Revolutionizing fast food with fresh ingredients and bold flavors since 2015.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f6edd5]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[#f6edd5]/80 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#menu" className="text-[#f6edd5]/80 hover:text-accent transition-colors">Menu</a></li>
              <li><a href="#about" className="text-[#f6edd5]/80 hover:text-accent transition-colors">Sign Up</a></li>
              <li><a href="#contact" className="text-[#f6edd5]/80 hover:text-accent transition-colors">Login</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f6edd5]">Services</h4>
            <ul className="space-y-2">
              <li className="text-[#f6edd5]/80">Dine In</li>
              <li className="text-[#f6edd5]/80">Takeout</li>
              <li className="text-[#f6edd5]/80">Delivery</li>
              <li className="text-[#f6edd5]/80">Catering</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f6edd5]">Follow Us</h4>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-[#D8973C] rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                <span className="text-accent-foreground font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-[#D8973C] rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                <span className="text-accent-foreground font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-[#D8973C] rounded-full flex items-center justify-center cursor-pointer hover:bg-accent/80 transition-colors">
                <span className="text-accent-foreground font-bold">i</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-[#f6edd5]/60">
            © 2025 TasteBurst. All rights reserved. | Made with ❤️ for food lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;