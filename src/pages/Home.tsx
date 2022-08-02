import BaixeNossoAppSection from "../sections/BaixeNossoAppSection";
import ComoFuncionaSection from "../sections/ComoFuncionaSection";
import HeaderSection from "../sections/HeaderSection";
import NossosPlanosSection from "../sections/NossosPlanosSection";
import TudoOQueVocePrecisaSection from "../sections/TudoOQueVocePrecisaSection";

export function Home() {
  return (
    <>
      <HeaderSection />
      <TudoOQueVocePrecisaSection />
      <ComoFuncionaSection />
      <BaixeNossoAppSection />
      <NossosPlanosSection />
    </>
  );
}
