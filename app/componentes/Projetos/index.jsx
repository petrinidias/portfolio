import Styles from "./Projetos.module.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Link from "next/link";


export default function Projetos() {
    return (
      <div id="projetos">
           <div className={Styles.confirameusprojetos}>
                <div className={Styles.projetostitle}>
                    <h1>Confira meus projetos  <FaArrowDown className={Styles.downarrow}/></h1>
                </div>
                <div className={Styles.projetosmain}>

                    <div className={Styles.projetos}>
                        <div className={Styles.projeto}>
                            <div className={Styles.projetoimg}>
                                <Link href="/portfolio"><img src="./portfolioimg.jpg" className={Styles.imghover}></img></Link>
                            </div>
                            <div className={Styles.projetodesc}>
                                <h2>Meu portfólio! <FaCheck className={Styles.wait}/></h2>
                                <p>Listei alguns pontos <strong>muito interessantes</strong> do meu portfólio. Vale a pena dar uma olhada! 😉</p>
                            </div>
                        </div>

                        <div className={Styles.projeto}>
                            <div className={Styles.projetoimg}>
                                <Link href="/learnxperience"><img src="/teste.png" className={Styles.imghover}></img></Link>
                            </div>
                            <div className={Styles.projetodesc}>
                                <h2>LearNXperience - Em breve <FaClockRotateLeft className={Styles.wait}/></h2>
                                <p>Biblioteca onde os 
                                    usuários podem encontrar uma vasta gama de links para <strong>cursos gratuitos</strong> de 
                                    programação em diferentes áreas.</p>
                            </div>
                        </div>
                        
                        <div className={Styles.projeto}>
                            <div className={Styles.projetoimg}>
                            <Link href="/taskpay"><img src="./taskpay.png" className={Styles.imghover}></img></Link>
                            </div>
                            <div className={Styles.projetodesc}>
                                <h2>TaskPay - Em breve <FaClockRotateLeft className={Styles.wait}/></h2>
                                <p>Aplicativo onde pais transformam tarefas domésticas em uma experiência 
                                    divertida e recompensadora para seus filhos, <strong>gamificando</strong> os afazeres do dia a
                                     dia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
      </div>
    );
};