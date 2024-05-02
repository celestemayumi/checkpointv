import sneakers from "../../data/sneakers.json";
import Image from "next/image";

const Products = () => {
  const dunk = sneakers.filter((sneaker) => sneaker.brand === "dunk");
  const jordan = sneakers.filter((sneaker) => sneaker.brand === "jordan");
  const other = sneakers.filter((sneaker) => sneaker.brand === "other");

  return (
    <section>
      <div className="p-6">
        <h1 className="text-2xl montserrat font-semibold my-3">Dunks</h1>
        <div className="flex flex-wrap justify-between" id="nikedunk">
          {dunk.map((sneaker, id) => {
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
      <div className="p-6">
        <h1 className="text-2xl montserrat font-semibold my-3">Jordan</h1>
        <div className="flex flex-wrap justify-between " id="jordan">
          {jordan.map((sneaker, id) => {
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
      <div className="p-6">
        <h1 className="text-2xl montserrat font-semibold my-3">
          Outras marcas
        </h1>
        <div className="flex flex-wrap justify-between" id="outros">
          {other.map((sneaker, id) => {
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
    </section>
  );
};

export default Products;
