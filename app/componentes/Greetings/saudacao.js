'use client';

export default function Saudacao() {
    
  let data = new Date();
  let horas = data.getHours();
  let saudacao

  if (horas >=6 && horas<12){
    saudacao = "Bom dia"
  } else if(horas >=12 && horas<18) {
    saudacao = "Boa tarde"
  } else{
    saudacao = "Boa noite"
  }

    return (
        <>
            {saudacao}
        </>
    )}

setInterval(Saudacao, 60000)
