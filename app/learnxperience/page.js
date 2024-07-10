import HeaderP from "../componentes/HeaderP";
import Projeto from "../componentes/Projeto";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Learnxperience() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <Projeto
        titulo="LearNXperience"
        status="Em andamento!"
        imagem="/maintence.png"
        
        hrefSite=""
        hrefRep=""
        descricao={<span>
          LearnNXperience é um projeto pessoal meu, uma biblioteca online onde os usuários podem encontrar 
                    uma vasta gama de links para <strong>cursos gratuitos de programação em diferentes áreas</strong>. <br/><br/>Esta plataforma 
                    está sendo criada com o intuito de <strong>facilitar o acesso</strong> ao aprendizado de programação, oferecendo recursos 
                    educacionais de alta qualidade <strong>sem custo</strong>.<br/><br/>
                    
                    Os cursos abrangem uma ampla variedade de tópicos, desde 
                    linguagens de programação populares até desenvolvimento de software, ciência de dados, inteligência 
                    artificial, e muito mais. <strong>O objetivo é criar uma comunidade de aprendizado inclusiva e acessível a 
                    todos que desejam aprimorar suas habilidades em tecnologia.</strong>
          </span>}
        />
        <Footer/>
      </div>
    );
  }