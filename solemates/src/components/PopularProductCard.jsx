import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price}) => {
    return(
        <div className="flex flex-1 flex-col w-full max-sm:w-full">
            <img 
                src={imgURL} alt={name}
                className="w-[280px] h-[280]"
            />
            <h3 className="mt-2 text-2xl leading-normal font-semibold  font-palanquin">
                {name}
            </h3>
            <p className="mt-2 font-semibold font-montserrat text-2xl text-zinc-500 leading-normal">
                {price}
            </p>
            <div className="mt-2 flex justify-start gap-2.5">
                <img 
                    src={star} alt="rating icon" width={24} height={24}
                />
                <p className="font-mono text-xl leading-normal text-zinc-500 ">{4.5}</p>
            </div>
        </div>
    )
}

export default PopularProductCard;