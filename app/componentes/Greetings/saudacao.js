'use client';

export default function Saudacao() {
    
  let data = new Date();
  let horas = data.getHours();
  let saudacao

  if (horas >=6 && horas<12){
    saudacao = "Bom dia"
    console.log(".")
  } else if(horas >=12 && horas<18) {
    saudacao = "Boa tarde"
    console.log(".")
  } else{
    saudacao = "Boa noite"
    console.log(".")
  }

    return (
        <>
            {saudacao}
        </>
    )}

setInterval(Saudacao, 60000)
