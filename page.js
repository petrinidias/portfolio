import Styles from "./page.module.css";
import Header from "./componentes/Header";
import Greetings from "./componentes/Greetings";
import Projetos from "./componentes/Projetos";
import Footer from "./componentes/Footer";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Greetings></Greetings>
      <Projetos></Projetos>
      <Footer></Footer>
    </div>
  );
}
