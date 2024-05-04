import "./styles.css"

const About = ()=>{
    return(
        <>
        <h1 className="title">Sobre a <b>heat</b></h1>

        <div className="about-content">
        <div className="about-1">
        <p className="text-1"> 
        Há cinco anos, surgimu no cenário da distribuição de calçados uma empresa que rapidamente 
        se tornou referência no fornecimento de tênis de marcas icônicas do streetwear: "Heat". 
        Fundada por um grupo de entusiastas da cultura urbana e do calçado, essa distribuidora 
        rapidamente conquistou seu espaço como uma fonte confiável de produtos de alta qualidade 
        para lojas e consumidores em todo o mundo.</p>
        <img className="right-img" src="./about-1.jpg" alt="" />
        </div>

        <div className="about-2">
        <img className="left-img" src="./about-2.jpg" alt="" />
        <p className="text-2">
        A história da "Heat" teve início quando um pequeno grupo de empreendedores visionários 
        identificou uma lacuna no mercado da distribuição de tênis de streetwear. Com uma paixão 
        compartilhada por moda urbana e uma visão clara do potencial de mercado, eles decidiram 
        unir forças para criar uma empresa que não apenas fornecesse calçados, mas também se tornasse
        um catalisador para o crescimento e sucesso de marcas de renome no mundo do streetwear.</p>
    
        </div>

        <div className="about-3">
         <p className="text-3">
        Mais do que simplesmente fornecer tênis, a "Heat" tem como objetivo construir parcerias sólidas
        com marcas e lojas em todo o mundo. Ao oferecer um serviço excepcional e um portfólio diversificado
        e marcas de prestígio, a empresa se tornou um parceiro de confiança para lojas de moda urbana
        e consumidores ávidos por novidades.</p>
        <img className="right-img" src="./about-3.jpg" alt="" />
        </div>
        </div>
        </>
    )
}

export default About;