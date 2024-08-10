import Button from "../components/Button";
import {arrowRight} from "../assets/icons"
import {shoes, statistics} from "../constants"
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {

    const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
    return(
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col justify-center 
            min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl text-cyan-700 font-medium">
                    Our Summer Collections
                </p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-teal-50 xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-cyan-700 inline-block mt-3">Nike</span> Shoes
                </h1>
                <p className="font-montserrat  text-stone-500 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                    Fresh kicks, endless possibilities, Crafted for comfort, designed for you.
                    Unleash your potential with every stride.
                    Upgrade your shoe game today.
                </p>
                <Button label="Shop Now" iconURL={arrowRight} />

                <div className="flex justify-start items-start flex-wrap gap-16 mt-20 w-full">
                    {statistics.map((stat) => {
                        return(
                                <div key={stat.label}>
                                    <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                                    <p className="leading-7 font-sans  text-zinc-600">{stat.label}</p>
                                </div>
                                )
                    })}

                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img 
                    src={bigShoeImg}
                    alt="big shoe"
                    width={610}
                    height={500}
                    className="object-contain relative z-10"
                />

                <div className="flex sm:gap-6 gap-4 absolute bottom-2 sm:left-[10%] max-sm:px-6">
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <ShoeCard 
                                index={index}
                                imgURL={image}
                                changeBigShoeImg={(shoe) => setBigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}
export default Hero;