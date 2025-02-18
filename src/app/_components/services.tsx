"use client"

import useEmblaCarousel from 'embla-carousel-react'
import {ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock} from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react'

const services = [
    {
      title: "Banho & Tosa",
      description: "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
      duration: "1h",
      price: "$50",
      icon: <Scissors />,
      linkText: 'Olá, vi no site sobre Banho e tosa e gostaria de mais informações.'
    },
    {
      title: "Consulta Veterinária",
      description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal. Inclui diagnóstico de doenças, aplicação de vacinas obrigatórias.",
      duration: "1h",
      price: "$45",
      icon: <Syringe />,
      linkText: 'Olá, vi no site sobre Consulta veterinária e gostaria de mais informações.'
    },
    {
      title: "Táxi Pet",
      description: "Serviço de transporte para levar e buscar os pets no petshop, clínicas veterinárias ou outros locais. Ideal para tutores que não têm tempo ou transporte adequado para locomover os animais.",
      duration: "2h",
      price: "$80",
      icon: <CarTaxiFront />,
      linkText: 'Olá, vi no site sobre Táxi Pet e gostaria de mais informações.'
    },
    {
      title: "Hotel para pets",
      description: "Serviço de hospedagem para animais de estimação, ideal para quando os tutores precisam viajar ou se ausentar por alguns dias. Os pets ficam acomodados em espaços seguros, confortáveis.",
      duration: "1h",
      price: "$60",
      icon: <Hotel />,
      linkText: 'Olá, vi no site sobre Hotel para pets e gostaria de mais informações.'
    },
  ]

export default function Services () {

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-widht: 768px )" : {slidesToScroll: 3}
        }
    })

    function scrollPrev () {
        emblaApi?.scrollPrev()
    }
    function scrollNext () {
        emblaApi?.scrollNext()
    }

    return (
        <section className="bg-[#e7f3f5f8] py-16">
            <div className="container mx-auto px-4" data-aos="fade-up">
                <div>
                    <h2 className="text-4xl font-bold mb-12">SERVIÇOS</h2>
                </div>
                <div className="relative">
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {services.map( (item, index) => (
                                <div key={index}
                                className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <div className=" bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex-1 flex items-start justify-between">
                                            
                                            <div className="flex gap-3">
                                                <span className="text-3xl">{item.icon}</span>
                                                <div>
                                                    <h3 className="font-bold text-xl my-1">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>
                                       
                                        </div>
                                        <div className="border-t border-gray-600  pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Clock className="w-5 h-5"/>
                                                <span>{item.duration}</span>
                                            </div>
                                            <a className="flex items-center gap-2 justify-center hover:bg-[#E84C3D] px-4 py-1 rounded-md duration-300" href="https://wa.me/5599999999999" target="_blank">
                                                <WhatsappLogo className="w-5 h-5 text-white"/>
                                                Entrar em Contato
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ) )}
                        </div> 
                    </div>
                    
                    <button className="flex  bg-white items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10" onClick={scrollPrev} >
                        <ChevronLeft className="w-6 h-6 text-gray-600"/>
                    </button>
                    <button className="flex  bg-white items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-x-1/2 -translate-y-1/2 top-1/2 z-10" onClick={scrollNext} >
                        <ChevronRight className="w-6 h-6 text-gray-600"/>
                    </button>
                    
                </div>
            </div>
        </section>
    )
}