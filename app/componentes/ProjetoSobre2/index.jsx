import styles from "./ProjetoSobre.module.css"
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export default function ProjetoSobre(){
    return(
        <div>
            <div className={styles.titles}>
                <h1>LearNXperience</h1>
                <h2>Em andamento!</h2>
                <img className={styles.img} src="/maintence.png"></img>
            </div>

            <div className={styles.align}>
                <div className={styles.projetointeragir}>
                    <div className={styles.bar}></div>

                    <div className={styles.view}><FaEye/></div>
                    <div className={styles.code}><FaCode/></div>

                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.projetotextoAlign}>
                <div className={styles.projetotexto}>
                    <p>
                    LearnNXperience é um projeto pessoal meu, uma biblioteca online onde os usuários podem encontrar 
                    uma vasta gama de links para <strong>cursos gratuitos de programação em diferentes áreas</strong>. <br/><br/>Esta plataforma 
                    está sendo criada com o intuito de <strong>facilitar o acesso</strong> ao aprendizado de programação, oferecendo recursos 
                    educacionais de alta qualidade <strong>sem custo</strong>.<br/><br/>
                    
                    Os cursos abrangem uma ampla variedade de tópicos, desde 
                    linguagens de programação populares até desenvolvimento de software, ciência de dados, inteligência 
                    artificial, e muito mais. <strong>O objetivo é criar uma comunidade de aprendizado inclusiva e acessível a 
                    todos que desejam aprimorar suas habilidades em tecnologia.</strong>
                    </p>
                </div>
            </div>
        </div>
    )
}