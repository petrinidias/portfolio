import HeaderP from "../componentes/HeaderP";
import Projeto from "../componentes/Projeto";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Taskpay() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <Projeto
        titulo="TaskPay"
        status="Em andamento!"
        imagem="/maintence.png"
        
        hrefSite=""
        hrefRep=""
        descricao={<span>
          Este é um <strong>trabalho de extensão</strong> que surgiu entre meus amigos da <strong>faculdade</strong>, um aplicativo 
                    onde pais podem transformar tarefas domésticas em uma experiência divertida e recompensadora 
                    para seus filhos, gamificando os afazeres do dia a dia. <br/><br/><strong>O objetivo é tornar as atividades diárias 
                    mais envolventes e motivadoras</strong>, incentivando as crianças a participar ativamente das 
                    responsabilidades domésticas. Através de um <strong>sistema de recompensas</strong> e desafios, as crianças 
                    ganham pontos e prêmios ao completar suas tarefas, tornando o processo de aprendizagem e 
                    colaboração familiar mais <strong>agradável e eficiente</strong>.
          </span>}
        />
        <Footer/>
      </div>
    );
  }