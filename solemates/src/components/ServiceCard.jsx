const ServiceCard = ({ imgURL, label, subtext }) => {
    return(
        <div className="flex-1 sm:w-[350px] sm:min-w-[350] w-full rounded-[20px] shadow-3xl px-10 py-14">
            <div className="flex justify-center items-center w-11 h-11 bg-emerald-600  rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="mt-5 font-mono font-bold leading-normal text-3xl">{label}</h3>
            <p className="mt-3 font-palanquin text-lg leading-normal text-zinc-600">{subtext}</p>
        </div>
    )
}

export default ServiceCard;