import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import WhatsAppL from './WhatsAppL';
export function About(){
    return(
        <section className="bg-[#fdf6ec] py-16">

           <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className="relative">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                        src={about1Img}
                        alt="Foto cachorro"
                        fill
                        quality={100}
                        className="object-cover hover:scale-110 duration-300"
                        priority
                        
                        
                        />
                    </div>

                    <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
                        <Image
                        src={about2Img}
                        alt="Foto cachorro2"
                        fill
                        quality={100}
                        priority
                        
                        
                        />
                    </div>
                    
                </div>

                <div className="space-y-6 mt-10">

                    <h2 className="text-4xl font-bold">Sobre</h2>
                    <p>Until one has loved an animal, a part of one's soul remains unawakened. We believe in it and we believe in easy access to things that are good for our mind, body and spirit. With a clever offering, superb support and a secure checkout you're in good hands.</p>

                    <ul className=" space-y-4">
                        <li className=" flex items-center gap-2">
                            <Check className="text-red-500"/>
                            Aberto deste 2006.
                        </li>
                        <li className=" flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Equipe com mais de 10 veterinarios.
                            
                        </li>
                        <li className=" flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Qualidade é nosssa prioridade.

                        </li>
                    </ul>

                    <div className=" flex gap-2">

                        <a href="#" className="bg-[#e84c3d] text-white items-center flex justify-center w-fit gap-2 px-4 py-2 rounded-md">
                        
                        <div className='w-10 h-10'>
                            <WhatsAppL/>
                        </div>
                        atendimento via WhatsApp

                        </a>

                        <a href="#" className=" text-black items-center flex justify-center w-fit gap-2 px-4 py-2 rounded-md">
                    
                        <MapPin className='w-5 h-5 text-black' />
                        Endereço da loja

                        </a>

                    </div>

                </div>

                </div>

            </div>

        </section>
    )

}