import ContactCard from "@/components/ContactCard";

const Contact = ()=> {
    return(
        <>
         <div className="p-14 montserrat">
            <p className="text-3xl">Entre em contato com o nosso time!</p>
            <ContactCard
            img = "/devs/celeste.jpeg"
            title = "Founder/Dev"
            name = "Celeste Tanaka"
            linkedin="https://www.linkedin.com/in/celestetanaka/"
            github="https://github.com/celestemayumi"
            email="celestetanakaa@gmail.com"
            ></ContactCard>
            <ContactCard
            img = "/devs/luana.jpeg"
            title = "Founder/Dev"
            name = "Luana Vieira"
            linkedin="https://www.linkedin.com/in/luanavieirass/"
            github="https://github.com/celestemayumi"
            email="@gmail.com"
            ></ContactCard>
         </div>
        </>
    )
}

export default Contact;