import AppStore from "../assets/images/AppStore";
import GooglePlay from "../assets/images/GooglePlay";
import NewNotifications from "../assets/images/NewNotifications";

export default function BaixeNossoAppSection() {
  return (
    <section className="bg-blue-200 font-sora p-6 flex flex-col text-center md:text-left">
      <div className="md:container md:mx-auto">
        <div className="md:flex md:justify-evenly md:items-center md:mx-auto">
          <div className="flex flex-col md:w-1/2">
            <span className="text-2xl font-semibold w-full ">
              Baixe nosso app para desfrutar mais!
            </span>
            <span className="text-gray-200 text-sm mt-4">
              Amet in elementum nulla scelerisque dui, egestas at. Elit
              consectetur turpis elementum amet vitae et etiam nec.
            </span>
            <div className="flex justify-center gap-6 mt-8 md:justify-start">
              <a href="https://play.google.com/store/apps" target="_blank">
                <GooglePlay />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank">
                <AppStore />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <NewNotifications />
          </div>
        </div>
      </div>
    </section>
  );
}
