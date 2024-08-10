import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
    return(
        <footer className="max-container">
            <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
                <div className="flex flex-col items-start">
                    <a href="/">
                        <img 
                            src={footerLogo}
                            alt="logo"
                            width={150}
                            height={46}
                            className="m-0"
                        />
                    </a>
                    <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
                        Get shoes ready for the new term at your nearest Nike store. Find your perfect size in store. Get Rewards
                    </p>
                    <div className="flex mt-8 gap-5 item-center">
                        {socialMedia.map((icon) => {
                            return(
                                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full" 
                                    key={icon.alt}
                                >
                                    <img 
                                        src={icon.src} alt={icon.alt} width={24} height={24}
                                        
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
                            {/*FOOTER LINKS SECTION*/}
                <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                    {footerLinks.map((section) => {
                        return(
                            <div key={section.title}>
                                <h4 className="text-white text-2xl font-sans leading-normal font-medium mb-6">
                                    {section.title}
                                </h4>
                                <ul>
                                    {section.links.map((link) => {
                                        return(
                                            <li key={link.name} className="mt-3 text-white-400 font-montserrat font-medium text-base leading-normal hover:text-stone-600">
                                            <a href={link.link}>{link.name}</a>
                                        </li>
                                        )   
                                    })}
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>

                            {/*COPYRIGHT SECTION*/}
            <div className="flex text-white-400 justify-between mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer ">
                    <img src={copyrightSign} alt="copyright sign" width={20} height={20} className="rounded-full m-0" />
                    <p>Copyright. All Rights Reserved.</p>
                </div>
                <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
            </div>
        </footer>
    )
}

export default Footer;