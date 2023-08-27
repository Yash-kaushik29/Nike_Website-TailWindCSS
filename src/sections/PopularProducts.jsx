import Carousel from 'react-elastic-carousel'

import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
import "./Carousel.css"

const PopularProducts = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ]

  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Whether you're in search of classic sneakers that combine comfort and
          style, sophisticated dress shoes that radiate elegance, or
          high-performance athletic shoes engineered with the latest technology,
          we have something for everyone.
        </p>
      </div>

      <Carousel breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={2000}>
      {products.map((product) => (
          
          <PopularProductCard key={product.name} {...product} />
        ))}
      </Carousel>
    </section>
  );
};

export default PopularProducts;
