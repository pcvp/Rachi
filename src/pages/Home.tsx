import BaixeNossoAppSection from "../sections/BaixeNossoAppSection";
import ComoFuncionaSection from "../sections/ComoFuncionaSection";
import ContatoSection from "../sections/ContatoSection";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import NossosPlanosSection from "../sections/NossosPlanosSection";
import TudoOQueVocePrecisaSection from "../sections/TudoOQueVocePrecisaSection";

export function Home() {
  return (
    <>
      <Header />
      <TudoOQueVocePrecisaSection />
      <ComoFuncionaSection />
      <BaixeNossoAppSection />
      <NossosPlanosSection />
      <ContatoSection />
      <Footer />
    </>
  );
}
