import HeaderP from "../componentes/HeaderP";
import ProjetoSobre1 from "../componentes/ProjetoSobre1";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Learnxperience() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <ProjetoSobre1/>
        <Footer/>
      </div>
    );
  }