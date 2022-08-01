import AppStore from "../assets/images/AppStore";
import GooglePlay from "../assets/images/GooglePlay";

export default function BaixeNossoAppSection() {
  return (
    <section className="bg-blue-200 font-sora p-6 flex flex-col text-center">
      <span className="text-2xl font-semibold">
        Baixe nosso app para desfrutar mais!
      </span>
      <span className="text-gray-200 text-sm mt-4">
        Amet in elementum nulla scelerisque dui, egestas at. Elit consectetur
        turpis elementum amet vitae et etiam nec.
      </span>
      <div className="flex justify-center gap-6 mt-8">
        <a href="https://play.google.com/store/apps" target="_blank">
          <GooglePlay />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank">
          <AppStore />
        </a>
      </div>
    </section>
  );
}
