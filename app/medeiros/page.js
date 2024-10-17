import HeaderP from "../componentes/HeaderP";
import Projeto from "../componentes/Projeto";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Learnxperience() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <Projeto
        titulo="Medeiros Odontologia"
        status="Em andamento!"
        imagem="/medeiros.png"
        
        hrefSite="https://medeiros-odontologia.vercel.app/"
        hrefRep="https://github.com/petrinidias/MedeirosOdontologia"
        descricao={<span>
          </span>}
        />
        <Footer/>
      </div>
    );
  }