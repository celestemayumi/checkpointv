import Image from "next/image";
import sneakers from "../../../data/sneakers.json";

const Product = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly">
        {sneakers.map((sneaker, id) => {
          return (
            <div
              className="w-52 flex flex-col p-5 border rounded-md justify-evenly space-y-6"
              key={id}
            >
              <Image
                src={sneaker.image}
                width={300}
                height={50}
                alt="Icone do tênis"
                className=""
              />
              <div className="">
                <p className="font-semibold tracking-wide">{sneaker.name}</p>
                <p className="font-bold ">R${sneaker.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
