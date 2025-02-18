import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section className="bg-[#eff6f7f8] py-16">
      <div className="container px-4 mx-auto ">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-right" data-aos-delay="300">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                className="object-cover hover:scale-110 duration-300"
                src={about1Img}
                alt="Foto dog"
                fill
                quality={100}
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-md border-4 overflow-hidden border-white">
              <Image src={about2Img} alt="Foto cat" fill quality={100} />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="fade-up-left" data-aos-delay="300">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              repellat necessitatibus nisi quis vitae temporibus optio dolores
              animi, eos atque. Dolorem debitis quas, porro earum voluptates
              doloremque recusandae est nostrum.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Informação 1
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Informação 2
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Informação 3
              </li>

              <div className="flex gap-4">
                <a
                  className="flex bg-[#E84C3D] w-fit px-4 py-2 text-white font-semibold items-center gap-2 rounded-md justify-center"
                  href="https://wa.me/5599999999999" target="_blank"
                >
                  <WhatsappLogo className=" w-5 h-5 text-white" />
                  Contato via WhatsApp
                </a>

                <a
                  className="flex w-fit px-4 py-2 font-semibold items-center gap-2 rounded-md justify-center"
                  href=""
                >
                  <MapPin className=" w-5 h-5 text-black" />
                  Endereço da loja
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
