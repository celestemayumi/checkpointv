import Image from "next/image";

const HeroSection = ()=> {
    return(
        <section className="bg-[#eaeeef] shadow-md flex justify-evenly p-6 items-center">
            <div className="w-1/3">
            <h1 className="text-8xl font-bold montserrat    ">SALE!</h1>
            <p className="montserrat text-xl">Descontos com os <span className="font-bold">best-sellers</span> e itens <span className="font-bold">exclusivos</span> aqui na HEAT.</p>
            </div>
            <Image
            className=""
            src='/sneakers/campus2.png'
            width={450}
            height={10}
            alt="hero section"
            ></Image>
        </section>
    )
}

export default HeroSection;