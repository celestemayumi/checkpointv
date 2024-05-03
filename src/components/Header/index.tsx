import Image from "next/image";
import './styles.css'
import Link from "next/link";

const Header = ()=>{
    return(
        <header className="flex items-center px-7 py-5 justify-between border-b montserrat">
            <a href='/' className="flex">
                <h1 className="text-5xl kanit">HEAT</h1>
                <Image
                src= '/fogo.png'
                width={50}
                height={50}
                alt="icone"
                ></Image>
            </a>
            <nav className="flex items-center">
                <ul className="flex text-lg">
                    <li className="mx-3 hover:border-b-2 border-black "><a href="/produtos">Produtos</a></li>
                    <li className="mx-3 hover:border-b-2 border-black "><a href="/sobre">Sobre</a></li>
                    <li className="mx-3 hover:border-b-2 border-black "><a href="/contato">Contato</a></li>
                </ul>
                <button className="bg-black text-white px-5 py-2 mx-6">Login</button>
                <button className="border border-black border-solid px-5 py-2">Registre-se</button>
            </nav>
        </header>
    )
}

export default Header;