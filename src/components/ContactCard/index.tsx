import Image from "next/image"
import Contact from "./interfaces"

const ContactCard = (props:Contact)=>{
    return(
        <div className="border rounded-lg flex items-center p-8 my-6">  
            <div className="">
                <Image
                className="border rounded-sm"
                src={props.img}
                width={200}
                height={200}
                alt ='Dev icon'
                ></Image>
            </div>
            <div className="ml-10">
                 <h1 className="text-2xl font-bold">{props.name}</h1>
                 <h3 className="text-lg underline">{props.title}</h3>
                 <ul>
                    <li className="text-[#b45a36] font-semibold">
                        <a href={props.linkedin}>Linkedin</a>
                    </li>
                    <li className="text-[#b45a36] font-semibold">
                        <a href={props.github}>GitHub</a>
                    </li>
                    <li>
                        <p>Email: {props.email}</p>
                    </li>
                 </ul>
            </div>
        </div>
    )
}

export default ContactCard;