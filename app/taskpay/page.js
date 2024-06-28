import HeaderP from "../componentes/HeaderP";
import ProjetoSobre3 from "../componentes/ProjetoSobre3";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Taskpay() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <ProjetoSobre3/>
        <Footer/>
      </div>
    );
  }