import Image from "next/image";

const HeroSection = ()=> {
    return(
        <section>
            <Image
            src='/main.png'
            width={1400}
            height={1000}
            alt="hero section"
            className="shadow-md"
            ></Image>
        </section>
    )
}

export default HeroSection;