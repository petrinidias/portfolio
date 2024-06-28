import Styles from "./Header.module.css";
import ThemeToggle from "./themebutton";
import Link from "next/link";



export default function Header() {
    return(
        <header className={Styles.menu}>
            <div>
                <p className={Styles.logo}>ptrn<spam className={Styles.highlight1}>.</spam></p>
            </div>
            <ul className={Styles.ulmenu}>
                <li><Link className={Styles.i} href="/"><div>Início</div></Link></li>
                <li><Link className={Styles.s} href="/sobreMim"><div>Sobre</div></Link></li>
            </ul>
            <ThemeToggle/>
        </header>
    )
}