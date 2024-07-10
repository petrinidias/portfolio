import styles from "./ProjetoSobre.module.css"
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";

export default function ProjetoSobre(props){
    return(
        <div>
            <div className={styles.titles}>
                <h1>{props.titulo}</h1>
                <h2>{props.status}</h2>
                <img className={styles.img} src={props.imagem}></img>
            </div>

            <div className={styles.align}>
                <div className={styles.projetointeragir}>
                    <div className={styles.bar}></div>

                    <a href={props.hrefSite} target="_blank"><div className={styles.view}><FaEye/></div></a>
                    <a href={props.hrefRep} target="_blank"><div className={styles.code}><FaCode/></div></a>

                    <div className={styles.bar}></div>
                </div>
            </div>

            <div className={styles.projetotextoAlign}>
                <div className={styles.projetotexto}>
                    <p>
                    {props.descricao}
                    </p>
                </div>
            </div>
        </div>
    )
}