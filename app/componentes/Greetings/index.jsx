'use cliente'
import Styles from "./Greetings.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Link from "next/link"
import React, { useEffect, useState } from 'react';

export default function Greetings() {

    const GreetingComponent = () => {
        const [saudacao, setSaudacao] = useState('');

        useEffect(() => {
        const determineGreeting = () => {
        const date = new Date();
        const hour = date.getHours();
      
        if (hour >= 18 || hour < 4) {
          setSaudacao('Boa noite');
        } else if (hour >= 4 && hour < 12) {
          setSaudacao('Bom dia');
        } else if (hour >= 12 && hour < 18) {
          setSaudacao('Boa tarde');
        }
    };

    determineGreeting();

    // Opcional: Atualiza a saudação a cada hora
    const interval = setInterval(determineGreeting, 3600000);

    return () => clearInterval(interval);
  })}

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