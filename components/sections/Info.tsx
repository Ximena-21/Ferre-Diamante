import React, { useEffect, useRef } from "react";
import Image from 'next/image'

import who from '../../src/assets/thoseWho.jpg'
import medal from '../../src/assets/medalIcon.png'
import time from '../../src/assets/timeIcon.png'
import price from '../../src/assets/priceIcon.png'


export default function Info() {

    const myRef :any = useRef(null)

    useEffect(()=>{        
        const appearOptions = {
            threshold: [0.5],
            rootMargin: "0px 0px 0px 0px",
          };
          
          const appearOnScroll = new IntersectionObserver((entries, observer) => {
            // entries.forEach((entry) => {
              if (entries[0].isIntersecting) {
                entries[0].target.classList.add("appear");
                observer.unobserve(entries[0].target);
              }
            // });
          }, appearOptions);
        //   document.querySelectorAll(".fade-in").forEach((fader) => {
            appearOnScroll.observe(myRef.current);
        //   });
    }, [])

    return (
        <section id='nosotros' className="info">
            <Image src={who} alt="" />
            <div className='info__imagesContainer'>
                <div className='info__images'>
                    <div className='info__imagesItem'>
                        <Image src={medal} alt="medal" />
                        <p>CALIDAD</p>
                    </div>
                    <div className='info__imagesItem'>
                        <Image src={time} alt="time" />
                        <p>CUMPLIMIENTO</p>
                    </div>
                    <div className='info__imagesItem'>
                        <Image src={price} alt="price" />
                        <p>PRECIOS COMPETITIVOS</p>
                    </div>
                </div>
            </div>

            <div  ref={myRef} className="info__textBlock fade-in">
                <h3 className="info__title">¿Quiénes Somos?</h3>
                <p className="info__parrafo">Somos una ferretería Colombiana dedicada a la distribución y comercialización de herramientas y materiales para construcción, con una trayectoria de más de 15 años en el mercado del Municipio de Puerto Lleras, Meta</p>
                <p className='info__parrafo'>Ofrecemos productos de calidad y precios justos, en búsqueda de satisfacer los requerimientos y necesidades de nuestros clientes.</p>
            </div>
        </section>
    )
}