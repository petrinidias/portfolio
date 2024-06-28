import styles from "./Headerp.module.css"
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";

export default function HeaderP () {
    return(
        <div className={styles.align}>
            <div className={styles.headerp}>
                <Link href="/"><div className={styles.backbutton}><IoMdArrowRoundBack /></div></Link>
                <p className={styles.logo}>ptrn<spam className={styles.highlight1}>.</spam></p>
            </div>
        </div>
    )
}