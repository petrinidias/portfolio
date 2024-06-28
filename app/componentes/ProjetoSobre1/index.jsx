import styles from "./ProjetoSobre.module.css"
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export default function ProjetoSobre(){
    return(
        <div>
            <div className={styles.titles}>
                <h1>Ptrn Portfólio</h1>
                <h2>Concluído!</h2>
                <img className={styles.img} src="/portfolioimg.jpg"></img>
            </div>

            <div className={styles.align}>
                <div className={styles.projetointeragir}>
                    <div className={styles.bar}></div>

                    <a href="/" target="_blank"><div className={styles.view}><FaEye/></div></a>
                    <a href="https://github.com/petrinidias/portfolio" target="_blank"><div className={styles.code}><FaCode/></div></a>

                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.projetotextoAlign}>
                <div className={styles.projetotexto}>
                    <p>
                    Meu portfólio é uma expressão do meu compromisso com o design e desenvolvimento web, destacando 
                    uma abordagem centrada no usuário e a criação de experiências memoráveis. Elementos como 
                    <strong> barra de rolagem personalizada</strong>, <strong>efeitos de desfoque de fundo</strong> e uso
                    de <strong>cores harmoniosas</strong> são cuidadosamente integrados para garantir uma <strong>estética moderna e 
                    funcional</strong>.

                    Adaptei <strong>saudações dinâmicas com base fuso horário brasileiro</strong> para uma interação mais pessoal.<br/><br/>Cada projeto 
                    é planejado no Figma, refletindo meu comprometimento com a execução precisa e 
                    eficiente de soluções que inspiram e engajam.<br/><br/>

                    Meu portfólio não é apenas uma coleção de trabalhos, mas um testemunho do meu crescimento contínuo 
                    como profissional e minha dedicação à inovação no campo do design digital. Cada projeto incluído 
                    demonstrará minha habilidade em criar experiências digitais que não só atendem, mas também antecipam 
                    as necessidades dos usuários, proporcionando soluções que são tanto funcionais quanto visualmente 
                    agradáveis.
                    </p>
                </div>
            </div>
        </div>
    )
}