import Styles from "./Greetings.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link"

export default function Greetings() {

    let hoje = new Date();
    let horas = hoje.getHours();
    let saudacao = ""

    if (horas >= 5 && horas <= 11) {
        saudacao = "Bom dia";
    } else if (horas >= 12 && horas <= 17) {
        saudacao = "Boa tarde";
    } else {
        saudacao = "Boa noite";
    }

    return(
        <div className={Styles.principalG}>
            <div className={Styles.greetings}>
                <div className={Styles.texts}>
                    <p className={Styles.p1}>{saudacao}! Me chamo Gilberto Petrini.</p>
                    <p className={Styles.p1}>Eu desenvolvo sistemas <span className={Styles.highlight1}>Web Front-End</span>.</p>
                    <p className={Styles.p2}>Esse é meu portfólio! Navegue e conheça meus <Link href="#projetos" className={Styles.link}>projetos</Link> e <Link href="/sobreMim" className={Styles.link}>habilidades</Link>.</p>
                </div>

                <div className={Styles.icon}>
                    <a href="https://www.linkedin.com/in/petrinidias/" target="_blank"><FaLinkedin /></a>
                    <a href="https://github.com/petrinidias" target="_blank"><FaGithubSquare /></a>
                    <a href="https://api.whatsapp.com/send/?phone=5521999475386&text&type=phone_number&app_absent=0" target="_blank"><FaWhatsappSquare /></a>
                    <a href="/cv.pdf" target="_blank"><FaFile/></a>
                </div>

                <MdOutlineKeyboardDoubleArrowDown className={Styles.da}/>
            </div>
        </div>
    )
}