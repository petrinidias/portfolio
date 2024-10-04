'use client';

import Styles from "./Footer.module.css";
import { IoCopySharp } from "react-icons/io5";
import Toastify from 'toastify-js'

const CopyEmailButton = () => {
    const email = 'petrini4u@gmail.com';
    const copyToClipboard = () => {
      navigator.clipboard.writeText(email).then(() => {

        Toastify({
          text: "Email copiado para área de transferência!",
          duration: 3000,
          close: true,
          gravity: "top", // `top` or `bottom`
          position: "center", // `left`, `center` or `right`
          stopOnFocus: false, // Prevents dismissing of toast on hover
          style: {
            background: "var(--main)", color: "white",
          },
          onClick: function(){} // Callback after click
        }).showToast();

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