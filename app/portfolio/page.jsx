import HeaderP from "../componentes/HeaderP";
import Projeto from "../componentes/Projeto";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"
import { FaCircle } from "react-icons/fa";

export default function Learnxperience() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <Projeto
        titulo="Ptrn Portfólio"
        status="Concluído!"
        imagem="/portfolioimg.jpg"

        hrefSite="/"
        hrefRep="https://github.com/petrinidias/portfolio"
        descricao={<span>
          Meu portfólio é uma expressão do meu compromisso com o design e desenvolvimento web, destacando 
          uma abordagem centrada no usuário e a criação de experiências memoráveis. Elementos como 
          <strong> barra de rolagem personalizada</strong>, <strong>efeitos de desfoque de fundo</strong> e uso
          de <strong>cores harmoniosas</strong> são cuidadosamente integrados para garantir uma <strong>estética moderna e 
          funcional</strong>.<br/><br/>

          <FaCircle className={styles.circle}/> <strong>ScrollBar personalizada</strong> para quem utiliza navegadores web.<br/><br/>
          <FaCircle className={styles.circle}/> <strong>Responsividade</strong> | O site se adapta a telefones, tablets e computadores.<br/><br/>
          <FaCircle className={styles.circle}/> Uso de <a target="_blank" href="https://www.freecodecamp.org/portuguese/news/o-atributo-target-na-tag-a-do-html-explicado/#:~:text=Um%20atributo%20target%20com%20o%20valor%20de%20_blank,documento%20vinculado%20em%20uma%20nova%20janela%20ou%20aba."><strong>Target Blank</strong></a> para maior dinamicidade ao clicar em links.<br/><br/>
          <FaCircle className={styles.circle}/> Uso de <strong>cores harmônicas</strong> | Visual limpo e não poluído.<br/><br/>
          <FaCircle className={styles.circle}/> <strike><strong>EM BREVE</strong> | Saudação costumizada ao depender do horário do dia | Bom dia/Boa tarde/Boa noite ao invés do "Olá!".</strike><br/><br/>

          <br/><br/>Cada projeto 
          é <strong>planejado no Figma</strong>, refletindo meu comprometimento com a execução precisa e 
          eficiente de soluções que inspiram e engajam.<br/><br/>

          Ele não é apenas uma coleção de trabalhos, mas um testemunho do meu crescimento contínuo 
          como profissional e minha dedicação ao design do site. Cada projeto incluído 
          demonstrará minha habilidade em criar experiências digitais que não só atendem, mas também antecipam 
          as necessidades dos usuários, proporcionando soluções que são tanto funcionais quanto <strong>visualmente 
          agradáveis</strong>.
          </span>}
        />
        <Footer/>
      </div>
    );
  }