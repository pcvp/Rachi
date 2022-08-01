import BaixeNossoAppSection from "../components/BaixeNossoAppSection";
import ComoFuncionaSection from "../components/ComoFuncionaSection";
import Header from "../components/Header";
import TudoOQueVocePrecisaSection from "../components/TudoOQueVocePrecisaSection";

export function Home() {
  return (
    <>
      <Header />
      <TudoOQueVocePrecisaSection />
      <ComoFuncionaSection />
      <BaixeNossoAppSection />
    </>
  );
}
