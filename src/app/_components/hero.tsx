import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import heroDogImg from "../../../public/bg-hero.png";
import Image from "next/image";
import catImage from "../../../public/cat-hero.png";
import Logo from "../../../public/PetsLogo.png"
export default function Hero() {
  return (
    <section className="bg-[#009ca6] text-white relative overflow-hidden">
      <div className="md:container mx-auto flex justify-between">
        <div data-aos="fade-right">
          <Image
            className="ml-4"
            src={Logo}
            alt="logo"
            quality={100}
            priority
          />
        </div>
        <div className="flex items-center justify-center" data-aos="fade-left">
          <nav>
            <ul className="flex text-md  gap-2  px-5 md:gap-5 font-semibold">
              <li className="hover:underline">
                <a href="">Sobre</a>
              </li>
              <li className="hover:underline">
                <a href="">Serviços</a>
              </li>
              <li className="hover:underline">
                <a href="">Depoimentos</a>
              </li>
              <li className="hover:underline">
                <a href="">Parceiros</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <Image
          src={heroDogImg}
          alt="Foto Dog"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 md:hidden "></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className=" space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-down"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg" data-aos="fade-right">
              oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>
            <div>
              <a
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2 w-fit"
                href="https://wa.me/5599999999999"
                target="_blank"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <WhatsappLogo className="w-5 h-5" />
                Contato Via WhatsApp
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded">5%</b> de
                Desconto na Primeira Compra
              </p>
            </div>
            <div className="flex mt-4">
              <div className="w-32 hidden lg:block">
                <Image
                  className="object-fill"
                  src={catImage}
                  alt="Fot Gato"
                  quality={100}
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              className="object-contain"
              src={heroDogImg}
              alt="Foto Dog"
              fill
              sizes="(max-widht: 768px) 0vw, 50vw"
              quality={100}
            />
          </div>
        </article>
      </div>
    </section>
  );
}
