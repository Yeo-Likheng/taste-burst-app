const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#273E47]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#D8C99B] mb-4">Visit Us Today</h2>
          <p className="text-xl text-[#D8C99B]/80 max-w-2xl mx-auto">
            Find us at our locations or order online for delivery
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-[#ebe0c3] border-none shadow-pop py-10 rounded-2xl">
            <div>
              <h2 className="text-xl font-bold text-[#273E47] text-center">Downtown Location</h2>
            </div>
            <div className="text-center">
              <p className="text-[#273E47]/80 mb-4 mt-4">
                123 Main Street<br />
                Downtown City, DC 12345
              </p>
              <p className="text-[#273E47] font-semibold mb-4">
                Open Daily: 11 AM - 10 PM
              </p>
              <button className=" hover:bg-[#273E47]/90 hover:text-[#D8C99B] bg-[#273E47] text-[#D8C99B] p-2.5 rounded-md">
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="bg-[#ebe0c3] border-none shadow-pop py-10 rounded-2xl">
            <div>
              <h2 className="text-xl font-bold text-[#273E47] text-center">Downtown Location</h2>
            </div>
            <div className="text-center">
              <p className="text-[#273E47]/80 mb-4 mt-4">
                123 Main Street<br />
                Downtown City, DC 12345
              </p>
              <p className="text-[#273E47] font-semibold mb-4">
                Open Daily: 11 AM - 10 PM
              </p>
              <button className=" hover:bg-[#273E47]/90 hover:text-[#D8C99B] bg-[#273E47] text-[#D8C99B] p-2.5 rounded-md mt-2">
                Get Directions
              </button>
            </div>
          </div>
          
          <div className="bg-[#ebe0c3] border-none shadow-pop py-10 rounded-2xl">
            <div>
              <h2 className="text-xl font-bold text-[#273E47] text-center">Downtown Location</h2>
            </div>
            <div className="text-center">
              <p className="text-[#273E47]/80 mb-4 mt-4">
                123 Main Street<br />
                Downtown City, DC 12345
              </p>
              <p className="text-[#273E47] font-semibold mb-4">
                Open Daily: 11 AM - 10 PM
              </p>
              <button className=" hover:bg-[#273E47]/90 hover:text-[#D8C99B] bg-[#273E47] text-[#D8C99B] p-2.5 rounded-md">
                Get Directions
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-[#ebe0c3] mb-4">Questions? Call us!</h3>
          <p className="text-3xl font-bold text-[#D8973C]">+855 12345678</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;