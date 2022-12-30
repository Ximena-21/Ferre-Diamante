import React from "react";
import Image from 'next/image'

import who from '../../src/assets/thoseWho.jpg'
import medal from '../../src/assets/medalIcon.png'
import time from '../../src/assets/timeIcon.png'
import price from '../../src/assets/priceIcon.png'


export default function Info() {
    return (
        <section id='nosotros' className="info">
            {/* <img loading='lazy' src="../src/assets/quienesSomosImg.jpg" alt=""> */}
            <Image src={who} alt="" />
            <div className='info__imagesContainer'>
                <div className='info__images'>
                    <div className='info__imagesItem'>
                        <Image src={medal} alt="" />
                        {/* <img src='../src/assets/medalIcon.png' alt=""> */}
                        <p>CALIDAD</p>
                    </div>
                    <div className='info__imagesItem'>
                        <Image src={time} alt="" />
                        {/* <img src='../src/assets/timeIcon.png' alt=""> */}
                        <p>CUMPLIMIENTO</p>
                    </div>
                    <div className='info__imagesItem'>
                        <Image src={price} alt="" />
                        {/* <img src='../src/assets/priceIcon.png' alt=""> */}
                        <p>PRECIOS COMPETITIVOS</p>
                    </div>
                </div>
            </div>

            <div className="info__textBlock fade-in">
                <h3 className="info__title">¿Quiénes Somos?</h3>
                <p className="info__parrafo">Somos una ferretería Colombiana dedicada a la distribución y comercialización de herramientas y materiales para construcción, con una trayectoria de más de 15 años en el mercado del Municipio de Puerto Lleras, Meta</p>
                <p className='info__parrafo'>Ofrecemos productos de calidad y precios justos, en búsqueda de satisfacer los requerimientos y necesidades de nuestros clientes.</p>
            </div>
        </section>
    )
}