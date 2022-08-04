import WorkingAnywhere from "../assets/images/WorkingAnywhere";
import WorkingAnywhereBig from "../assets/images/WorkingAnywhereBig";
import { Button } from "../components/Button";

export default function TudoOQueVocePrecisaSection() {
  return (
    <section className="bg-blue-200 text-2xl font-sora font-semibold pt-6 pb-0 pl-6 pr-6">
      <div className="flex flex-col md:text-5xl md:flex-row md:h-[640px] md:items-center md:justify-between md:container md:mx-auto">
        <div>
          Rachi, <br />é tudo que você <br />
          precisa em um só lugar.
          <br />
          <Button
            texto="Cadastre-se"
            className="mt-6 shadow-sm shadow-blue-900 w-[144px] md:w-[200px]"
          ></Button>
        </div>
        <div className="justify-center flex">
          <WorkingAnywhereBig className="w-[200px] h-[200px] md:h-[500px] md:w-[500px]" />
        </div>
      </div>
    </section>
  );
}
