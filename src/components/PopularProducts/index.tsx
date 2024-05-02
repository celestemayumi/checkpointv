import Product from "../Product";
import sneakers from "../../data/sneakers.json";
import Image from "next/image";


const PopularProducts = () => {
  return (
    <section className="montserrat">
      <div className="flex items-center ">
      <h1 className="font-semibold m-5 text-2xl">Produtos Populares</h1>
      <button className="montserrat underline underline-offset-2"><a href="/produtos">Veja mais produtos</a></button>
      </div>
      <div className="flex flex-wrap justify-evenly">
        {sneakers.slice(0, 6).map((sneaker, id) => {
            return (
              <div className="w-52 flex flex-col p-5 border rounded-md justify-evenly space-y-6" key={id}>
                <Image src={sneaker.image} width={300} height={50} alt="Icone do tênis" className="" />
                <div className="">
                <p className="font-semibold tracking-wide">{sneaker.name}</p>
                <p className="font-bold ">R${sneaker.price}</p>
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default PopularProducts;
