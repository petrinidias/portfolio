import HeaderP from "../componentes/HeaderP";
import ProjetoSobre2 from "../componentes/ProjetoSobre2";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Learnxperience() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <ProjetoSobre2/>
        <Footer/>
      </div>
    );
  }