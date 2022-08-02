import NotebookArvore from "../assets/images/NotebookArvore";
import { Button } from "../components/Button";

export default function TudoOQueVocePrecisaSection() {
  return (
    <section className="bg-blue-200 text-2xl font-sora font-semibold pt-6 pb-0 pl-6 pr-6">
      Rachi, <br />é tudo que você <br />
      precisa em um só lugar.
      <Button
        texto="Cadastre-se"
        className="mt-6 shadow-sm shadow-blue-900"
      ></Button>
      <div className="flex justify-center">
        <NotebookArvore />
      </div>
    </section>
  );
}
