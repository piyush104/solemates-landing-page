import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard"

const PopularProduct = () => {
    return (
        <section id="products" className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h1 className="text-4xl font-montserrat font-bold">
                    Our <span className="text-cyan-800"> Popular </span> Products
                </h1>
                <p className="lg:max-w-lg mt-2 font-palanquin text-zinc-600">
                    StrideMaster: Walk with Confidence, Run with Power. Explore design, comfort and value.
                </p>
            </div>
            
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
                {products.map((product) => {
                    return(
                        <PopularProductCard key={product.name} {...product} />
                    )
                })}
                
            </div>
        </section>
        
    )
}

export default PopularProduct;