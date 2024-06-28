import styles from "./ProjetoSobre.module.css"
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export default function ProjetoSobre(){
    return(
        <div>
            <div className={styles.titles}>
                <h1>TaskPay</h1>
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
                    Este é um <strong>trabalho de extensão</strong> que surgiu entre meus amigos da <strong>faculdade</strong>, um aplicativo 
                    onde pais podem transformar tarefas domésticas em uma experiência divertida e recompensadora 
                    para seus filhos, gamificando os afazeres do dia a dia. <br/><br/><strong>O objetivo é tornar as atividades diárias 
                    mais envolventes e motivadoras</strong>, incentivando as crianças a participar ativamente das 
                    responsabilidades domésticas. Através de um <strong>sistema de recompensas</strong> e desafios, as crianças 
                    ganham pontos e prêmios ao completar suas tarefas, tornando o processo de aprendizagem e 
                    colaboração familiar mais <strong>agradável e eficiente</strong>.
                    </p>
                </div>
            </div>
        </div>
    )
}