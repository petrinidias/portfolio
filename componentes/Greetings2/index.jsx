import styles from "./Greetings2.module.css"
import { TbHtml } from "react-icons/tb";
import { MdCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

export default function Greetings2(){
    return(
        <div className={styles.principal}>
            <div className={styles.sobremim}>
                <div className={styles.sobremimC}>
                    <img src="/saudacoes.png" className={styles.saudacoesimg}></img>
                    <div className={styles.sobreMimContainer}>
                        <h6>
                        Presentemente, estou cursando o <strong>segundo período</strong> de <strong>Análise e Desenvolvimento de Sistemas</strong> na universidade UniCarioca. Pessoalmente, estou me aprofundando em <strong>ReactJs</strong> e em breve pretendo estudar Mobile.<br/><br/>
                        Atualmente, estou com <strong>18 anos</strong>, porém, meu primeiro contato com a programação foi aos 16, fazendo modificações de textura para um jogo. Desde então, soube que queria seguir carreira na área e escolhi minha faculdade com convicção.
                        </h6>
                        <img src="/ptrn.png" className={styles.sbimage}></img>
                    </div>
                    <div className={styles.iconesTec}>
                        <div className={styles.habilidades}>
                            <p>Minhas <strong>principais habilidades</strong> estão focadas em noção de algoritmo, <strong>JavaScript</strong> (<strong className={styles.highlight}>350+ exercícios</strong> resolvidos) e constantemente evoluindo meu <strong >React</strong>. Abaixo está todo meu processo nos certificados.
                            </p>
                        </div>
                        <div className={styles.icones}>
                            <TbHtml className={styles.html}/>
                            <MdCss className={styles.css}/>
                            <FaJsSquare className={styles.js}/>
                            <FaReact className={styles.react}/>
                        </div>
                    </div>
                </div>
                <div className={styles.certificados}>
                    <p>Certificados</p>
                    <div className={styles.certificadosImgs}>
                        <a href="https://www.devmedia.com.br/certificado/tecnologia/javascript/gilberto-petrini-dias" target="_blank"><img src="/certificadoJs.png" className={styles.certificadoImg}/></a>
                        <a href="https://www.devmedia.com.br/certificado/tecnologia/react/gilberto-petrini-dias" target="_blank"><img src="/certificadoRc.png" className={styles.certificadoImg}/></a>
                    </div>                
                </div>
            </div>
        </div>
    )
}