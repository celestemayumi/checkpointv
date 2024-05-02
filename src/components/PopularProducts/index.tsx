import Product from "../Product";
import sneakers from "../../data/sneakers.json";
import Image from "next/image";


const PopularProducts = () => {
  return (
    <section className="montserrat">
      <h1 className="font-semibold m-5 text-2xl">Produtos Populares</h1>
      <div className="flex flex-wrap">
        <div className="flex flex-wrap gap-3 justify-center">
        {sneakers.slice(0, 5).map((sneaker, id) => {
            return (
              <div className="w-48" key={id}>
                <Image src={sneaker.image} width={200} height={50} alt="Icone da tecnologia" />
                <p className="font-bold tracking-wide ">{sneaker.name}</p>
                <p>{sneaker.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
