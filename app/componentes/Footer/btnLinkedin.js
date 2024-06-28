'use client';

import Link from "next/link";
import Styles from "./Footer.module.css";
import { MdOpenInNew } from "react-icons/md";


const OpenLinkedinButton = () => {
    const email = 'petrini4u@gmail.com';
    return (
      <Link className={Styles.btnL} href="https://www.linkedin.com/in/petrinidias/" target="_blank">
        <MdOpenInNew /> Abrir
      </Link>
    );
  };
  
  export default OpenLinkedinButton;