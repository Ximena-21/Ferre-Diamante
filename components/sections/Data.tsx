import { useEffect, useRef, useState } from "react"

export default function Data() {

    const [dataYears, setDataYears] = useState(0)
    const [dataWorks, setDataWorks] = useState(0)
    const [dataShippings, setDataShippings] = useState(0)


    const myRef : any= useRef(null)

    useEffect(() => {
        const observerData = new IntersectionObserver(
            (entries, observer) => {
                if (entries[0].isIntersecting) {
                    countDown(setDataYears, 20);
                    countDown(setDataWorks, 400, true);
                    countDown(setDataShippings, 5000, true);
                    observer.unobserve(entries[0].target);
                  }
            },
            { threshold: [0] }
        );
        
        observerData.observe(myRef.current);
    }, [])

    return (
        <section ref={myRef} className="data">
            <div className="cardData">
                <h3 id='dataYears' className="cardData__number">{dataYears}</h3>
                <p className="cardData__text">Años</p>
                <div className="cardData__subText">en el mercado</div>
                <div className="cardData__line"></div>
            </div>
            <div className="cardData">
                <h3 id='dataWorks' className="cardData__number">{dataWorks}</h3>
                <p className="cardData__text">Obras</p>
                <div className="cardData__subText">asesoradas</div>
                <div className="cardData__line"></div>
            </div>
            <div className="cardData">
                <h3 id='dataShippings' className="cardData__number">{dataShippings}</h3>
                <p className="cardData__text">Despachos</p>
                <div className="cardData__subText">realizados</div>
                <div className="cardData__line"></div>
            </div>

        </section>
    )
}


function countDown(setData: any, value: any, plusIcon = false, time = 2000) {
    let counter = 0;

    const fps = time / value > 10 ? time / value : 20;

    let incrementValue = (fps * value) / time;

    const timer = setInterval(() => {
        counter += incrementValue;

          setData ( plusIcon ? `+${counter}` : counter);

        if (counter == value) {
            clearInterval(timer);
        }
    }, fps);

}