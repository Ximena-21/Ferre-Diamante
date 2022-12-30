import React from "react";
import Image from 'next/image'

import building from '../../src/assets/buildingMaterials.png'
import electric from '../../src/assets/electricMaterials.png'
import time from '../../src/assets/buildingTools.png'
import price from '../../src/assets/manualTools.png'
import acero from '../../src/assets/acero.png'
import fishing from '../../src/assets/fishingMaterials.png'


export default function Categories() {
    return (
        <section id='categorias' className="categories">
            <div className="categories__title">
                <span className="line"></span>
                <h2>Categorias</h2>
                <span className="line"></span>
            </div>

            <div className="categories__cards">
                <div className="cardCategorie cardCategorie--right">
                    <p className='cardCategorie__text'>Materiales de construcción</p>
                    <Image src={building} alt="" className='cardCategorie__image'/>
                    {/* <img className='cardCategorie__image' src="../src/assets/buildingMaterials.png" alt=""> */}
                </div>
                <div className="cardCategorie cardCategorie--left">
                    <p className='cardCategorie__text'>Materiales electricos</p>
                    <Image src={electric} alt="" className='cardCategorie__image'/>
                    {/* <img className='cardCategorie__image' src="../src/assets/electricMaterials.png" alt=""> */}
                </div>
                <div className="cardCategorie cardCategorie--right">
                    <p className='cardCategorie__text'>Herramientas eléctricas</p>
                    <Image src={time} alt="" className='cardCategorie__image'/>
                    {/* <img className='cardCategorie__image' src="../src/assets/buildingTools.png" alt=""> */}
                </div>
                <div className="cardCategorie cardCategorie--left">
                    <p className='cardCategorie__text'>Herramientas manuales</p>
                    <Image src={price} alt="" className='cardCategorie__image'/>
                    {/* <img className='cardCategorie__image' src="../src/assets/manualTools.png" alt=""> */}
                </div>
                <div className="cardCategorie cardCategorie--right">
                    <p className='cardCategorie__text'>Equipos para pesca</p>
                    <Image src={fishing} alt="" className='cardCategorie__image'/>
                    {/* <img className='cardCategorie__image' src="../src/assets/fishingMaterials.png" alt=""> */}
                </div>
                <div className="cardCategorie cardCategorie--left">
                    <p className='cardCategorie__text'>Aceros para construccion</p>
                    <Image src={acero} alt="" className='cardCategorie__image'/>
                    {/* <img className='cardCategorie__image' src="../src/assets/acero.png" alt=""> */}
                </div>
            </div>
        </section>
    )
}