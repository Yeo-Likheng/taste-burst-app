
const specials = [
  {
    id: 1,
    title: "Happy Hour Special",
    description: "Buy 2 burgers and get 1 free drink",
    time: "3 PM - 6 PM Daily",
    discount: "Save $5",
    bgColor: "bg-[#D8973C]"
  },
  {
    id: 2,
    title: "Weekend Family Pack",
    description: "4 burgers + 4 sides + 4 drinks",
    time: "Weekends Only",
    discount: "25% OFF",
    bgColor: "bg-[#D8973C]"
  },
  {
    id: 3,
    title: "Student Special",
    description: "Show your student ID for exclusive pricing",
    time: "All Day",
    discount: "15% OFF",
    bgColor: "bg-[#D8973C]"
  }
];

const Specials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#D8C99B] to-[#D8973C]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#273E47] mb-4">Special Offers</h2>
          <p className="text-xl text-[#273E47]/80 max-w-2xl mx-auto">
            Don't miss out on our amazing deals and limited-time offers
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          {specials.map((special) => (
            <div key={special.id} className="bg-white px-8 py-10 relative overflow-hidden hover:shadow-glow transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <div className={`absolute top-0 right-0 w-32 h-32 ${special.bgColor} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
              <div>
                <div className="flex justify-between items-start">
                  <div className="text-xl font-bold text-card-foreground">{special.title}</div>
                  <div className="bg-[#D8973C] text-white px-4 rounded-4xl ml-6">{special.discount}</div>
                </div>
              </div>
              <div>
                <p className="text-black opacity-60 mb-4">{special.description}</p>
                <p className="text-sm font-semibold text-[#D8973C] mb-6">{special.time}</p>
                <button className="w-full bg-[#273E47] hover:bg-primary/90 text-white py-2 rounded-[10px]">
                  Claim Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;