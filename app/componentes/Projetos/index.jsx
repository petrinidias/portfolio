import Styles from "./Projetos.module.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Link from "next/link";
import ProjetosProps from "./props.jsx";


export default function Projetos() {
    return (
      <div id="projetos">
           <div className={Styles.confirameusprojetos}>
                <div className={Styles.projetostitle}>
                    <h1>Confira meus projetos  <FaArrowDown className={Styles.downarrow}/></h1>
                </div>
                <div className={Styles.projetosmain}>

                    <div className={Styles.projetos}>                       
                        <ProjetosProps
                        href="/portfolio"
                        imagem="./portfolioimg.jpg"
                        titulo="Meu portfólio!"
                        descricao={<span>Listei alguns pontos <strong>muito interessantes</strong> do meu portfólio. Vale a pena dar uma olhada! 😉</span>}
                        />
                        <ProjetosProps
                        href="/taskpay"
                        imagem="./anneau.jpg"
                        titulo="AnneauEtoile - Em breve"
                        descricao={<span>Simulação onde irei explorar o <strong>uso de menus</strong>, <strong>sistema de busca</strong>, <strong>busca com filtros</strong>, entre outros.
                            AnneauEtoile trará a elegância francesa, oferecendo uma experiência de compra exclusiva.</span>}
                        />
                        <ProjetosProps
                        href="/learnxperience"
                        imagem="/teste.png"
                        titulo="LearNXperience - Em breve"
                        descricao={<span>Biblioteca onde os 
                            usuários podem encontrar uma vasta gama de links para <strong>cursos gratuitos</strong> de 
                            programação em diferentes áreas.</span>}
                        />
                        <ProjetosProps
                        href="/taskpay"
                        imagem="./taskpay.png"
                        titulo="TaskPay - Em breve"
                        descricao={<span>Aplicativo onde pais transformam tarefas domésticas em uma experiência 
                            divertida e recompensadora para seus filhos, <strong>gamificando</strong> os afazeres do dia a
                             dia.</span>}
                        />
                    </div>
                </div>
            </div>
            
      </div>
    );
};