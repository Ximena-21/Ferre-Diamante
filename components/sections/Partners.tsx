import React, { useEffect } from "react";
import Image from 'next/image'


import cemex from '../../src/assets/partnerts/Cemex.png'
import bellota from '../../src/assets/partnerts/Bellota.png'
import fortecem from '../../src/assets/partnerts/Fortecem.png'
import holcim from '../../src/assets/partnerts/Holcim.png'
import corona from '../../src/assets/partnerts/Corona.png'
import koraza from '../../src/assets/partnerts/Koraza.png'
import rotoplas from '../../src/assets/partnerts/Rotoplas.png'
import multitonos from '../../src/assets/partnerts/MultiTonos.png'



export default function Partners() {

  return (
    <section className="partners">
      <div className="partners__title">
        <span className="line"></span>
        <h2>Marcas Aliadas</h2>
        <span className="line"></span>
      </div>

      <div id='partnertsSlider' className="partners__carousel">
        <Image src={cemex} alt="" />
        <Image src={bellota} alt="" />
        <Image src={corona} alt="" />
        <Image src={fortecem} alt="" />
        <Image src={holcim} alt="" />
        <Image src={koraza} alt="" />
        <Image src={rotoplas} alt="" />
        <Image src={multitonos} alt="" />
        <Image src={cemex} alt="" />
        <Image src={bellota} alt="" />
        <Image src={corona} alt="" />
        <Image src={fortecem} alt="" />
        <Image src={holcim} alt="" />
        <Image src={koraza} alt="" />
        <Image src={rotoplas} alt="" />
        <Image src={multitonos} alt="" />


      </div>
    </section>
  )
}



let scrollPos = -43.75;

function scrollUpdate() {
  scrollPos -= 6.25;

  //quedan las ultimas 3 para mostrar

  if (typeof window === 'object') {
    const sliderContainer: any = document.querySelector(".partners");
    const slider: any = document.getElementById("partnertsSlider");
    // const partnersImgs : any = slider.querySelectorAll("img");


    if (sliderContainer.clientWidth >= 1024) {
      if (scrollPos <= -75) {
        slider.style.transform = `translateX(${scrollPos}%)`;

        setTimeout(() => {
          scrollPos = -25;
          slider.style.transition = "transform 0s";
          slider.style.transform = `translateX(${scrollPos}%)`;
        }, 500);
      } else {
        slider.style.transform = `translateX(${scrollPos}%)`;
        slider.style.transition = "transform 0.5s";
      }
    } else {
      if (scrollPos <= -81.25) {
        slider.style.transform = `translateX(${scrollPos}%)`;

        setTimeout(() => {
          scrollPos = -31.25;
          slider.style.transition = "transform 0s";
          slider.style.transform = `translateX(${scrollPos}%)`;
        }, 500);
      } else {
        slider.style.transform = `translateX(${scrollPos}%)`;
        slider.style.transition = "transform 0.5s";
      }
    }
  }
}

// scrollUpdate()
let timer = setInterval(() => {
  scrollUpdate();
}, 2000);