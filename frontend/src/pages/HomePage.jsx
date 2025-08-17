import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import Specials from "../components/Specials"
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import useScrollAnimation from "../hooks/useScrollAnimation";

const categories = [
	{ href: "/burgers", name: "Burgers", imageUrl: "/burger.jpg" },
	{ href: "/snacks", name: "Snacks", imageUrl: "/snack.jpg" },
	{ href: "/chickens", name: "Chickens", imageUrl: "/chicken.webp" },
	{ href: "/hotdogs", name: "Hotdogs", imageUrl: "/hotdog.jpg" },
	{ href: "/sandwichs", name: "Sandwichs", imageUrl: "/sandwich.avif" },
	{ href: "/beverages", name: "Beverages", imageUrl: "/beverage.webp" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	const [categoriesRef, categoriesVisible] = useScrollAnimation();
	const [specialsRef, specialsVisible] = useScrollAnimation();
	const [contactRef, contactVisible] = useScrollAnimation();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);


	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
				<div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
					<div className="text-center lg:text-left z-10">
					<h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
						Taste the
						<span className="text-[#D8973C] block">Extraordinary</span>
					</h1>
					<p className="text-xl text-white/80 text-center lg:text-left mb-8">
						Experience gourmet fast food like never before. Fresh ingredients, bold flavors, and unforgettable moments in every bite.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
						<Link to="/login">
							<button className="bg-[#D8973C] hover:bg-[#D8973C]/90 text-white font-semibold px-6 py-2 text-lg shadow-pop rounded-2xl">
								Order Now
							</button>
						</Link>
					</div>
					</div>
					
					<div className="relative flex justify-center lg:justify-end">
					<div className="relative">
						<img 
						src="/hero-burger.jpg"
						alt="Gourmet Burger" 
						className="w-full max-w-lg h-auto transform hover:scale-105 transition-transform duration-500 shadow-glow rounded-2xl"
						style={{
							filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.4))',
							transform: 'perspective(1000px) rotateX(5deg) rotateY(-5deg)'
						}}
						/>
					</div>
					</div>
				</div>
			</section>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-[#D8973C] mb-4'>
					Explore Our Food Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the our delicious foods offerings across various categories
				</p>

				<div 
					ref={categoriesRef}
					className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 transition-all duration-1000 ease-out ${
						categoriesVisible 
							? 'opacity-100 translate-y-0' 
							: 'opacity-0 translate-y-20'
					}`}
				>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
			<div 
				ref={specialsRef}
				className={`transition-all duration-1000 ease-out ${
					specialsVisible 
						? 'opacity-100 translate-y-0' 
						: 'opacity-0 translate-y-20'
				}`}
			>
				<Specials />
			</div>
			<div 
				ref={contactRef}
				className={`transition-all duration-1000 ease-out delay-200 ${
					contactVisible 
						? 'opacity-100 translate-y-0' 
						: 'opacity-0 translate-y-20'
				}`}
			>
				<Contact />
			</div>
			<Footer />
		</div>
	);
};
export default HomePage;
