'use client';

import Styles from "./Footer.module.css";
import { IoCopySharp } from "react-icons/io5";

const CopyEmailButton = () => {
    const email = 'petrini4u@gmail.com';
  
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email).then(() => {
        alert('Meu email foi copiado para sua área de transferência!');
      }).catch(err => {
        console.error(err);
      });
    };
  
    return (
      <button className={Styles.btnE} onClick={copyToClipboard}>
        <IoCopySharp className={Styles.btnicon}/> Copiar
      </button>
    );
  };

export default CopyEmailButton;