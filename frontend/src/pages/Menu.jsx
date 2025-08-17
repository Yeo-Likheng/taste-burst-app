import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";
import useScrollAnimation from "../hooks/useScrollAnimation";

const categories = [
	{ href: "/burgers", name: "Burgers", imageUrl: "/burger.jpg" },
	{ href: "/snacks", name: "Snacks", imageUrl: "/snack.jpg" },
	{ href: "/chickens", name: "Chickens", imageUrl: "/chicken.webp" },
	{ href: "/hotdogs", name: "Hotdogs", imageUrl: "/hotdog.jpg" },
	{ href: "/sandwichs", name: "Sandwichs", imageUrl: "/sandwich.avif" },
	{ href: "/beverages", name: "Beverages", imageUrl: "/beverage.webp" },
];

const Menu = () => {

    const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	const [categoriesRef, categoriesVisible] = useScrollAnimation();
	const [featuredRef, featuredVisible] = useScrollAnimation();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

  return (
            <div className='relative min-h-screen text-white overflow-hidden'>
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

					{!isLoading && products.length > 0 && (
						<div 
							ref={featuredRef}
							className={`transition-all duration-1000 ease-out delay-300 ${
								featuredVisible 
									? 'opacity-100 translate-x-0' 
									: 'opacity-0 -translate-x-20'
							}`}
						>
							<FeaturedProducts featuredProducts={products} />
						</div>
					)}
				</div>
			</div>
  );
}

export default Menu

