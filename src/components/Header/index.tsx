import Image from "next/image";

const Header = ()=>{
    return(
        <header className="flex items-center px-7 py-5 justify-between border-b">
            <div className="flex">
                <h1 className="text-5xl">HEAT</h1>
                <Image
                src= '/fogo.png'
                width={50}
                height={50}
                alt="icone"
                ></Image>
            </div>
            <nav className="flex items-center">
                <ul className="flex text-lg">
                    <li className="mx-3 hover:border-b-2 border-black ">Produtos</li>
                    <li className="mx-3 hover:border-b-2 border-black ">Sobre</li>
                    <li className="mx-3 hover:border-b-2 border-black ">Contato</li>
                </ul>
                <button className="bg-black text-white px-5 py-2 mx-6">Login</button>
                <button className="border border-black border-solid px-5 py-2">Registre-se</button>
            </nav>
        </header>
    )
}

export default Header;