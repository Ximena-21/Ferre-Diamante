export default function Footer() {
    return (
        <footer className='footer'>
            <div className="footer__container">

                <h3>Contactanos</h3>

                <div className="footer__content">

                    <div className="footer__location">
                        <div className="footer__blockTitle">Ubicación:</div>
                        <div className="mapouter">
                            <iframe
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=ferrevariedades%20diamante&t=&z=16&ie=UTF8&iwloc=&output=embed"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}>
                            </iframe>
                        </div>

                    </div>

                    <div className="footer__contact">
                        <div className="footer__blockTitle">Informacion de contacto:</div>
                        <div className="footer__contactCard">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.69877 4.81668L5.65408 1.30239C5.30309 0.897412 4.65959 0.899212 4.25189 1.30779L1.74811 3.81594C1.00291 4.56199 0.78961 5.66983 1.22071 6.55807C3.79615 11.8902 8.09671 16.1966 13.4255 18.7793C14.3129 19.2104 15.4199 18.9971 16.1651 18.2511L18.6923 15.7195C19.1018 15.31 19.1027 14.663 18.6941 14.312L15.1661 11.2837C14.7971 10.9669 14.2238 11.0083 13.8539 11.3791L12.6263 12.6084C12.5635 12.6743 12.4808 12.7177 12.3909 12.732C12.301 12.7463 12.2088 12.7307 12.1286 12.6876C10.1221 11.5322 8.45756 9.86558 7.30467 7.8576C7.2615 7.77728 7.24587 7.68501 7.26017 7.59495C7.27448 7.50489 7.31793 7.42201 7.38387 7.35902L8.60787 6.1342C8.97867 5.76162 9.01917 5.18566 8.69877 4.81578V4.81668Z" stroke="#F79329" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p>312-504-67-24</p>
                        </div>
                        <div className="footer__contactCard">
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.7143 0H1.28571C0.944722 0 0.617695 0.158035 0.376577 0.43934C0.135459 0.720644 0 1.10218 0 1.5V13.5C0 13.8978 0.135459 14.2794 0.376577 14.5607C0.617695 14.842 0.944722 15 1.28571 15H16.7143C17.0553 15 17.3823 14.842 17.6234 14.5607C17.8645 14.2794 18 13.8978 18 13.5V1.5C18 1.10218 17.8645 0.720644 17.6234 0.43934C17.3823 0.158035 17.0553 0 16.7143 0ZM15.3 1.5L9 6.585L2.7 1.5H15.3ZM1.28571 13.5V2.1825L8.63357 8.115C8.74118 8.2021 8.86903 8.24877 9 8.24877C9.13097 8.24877 9.25882 8.2021 9.36643 8.115L16.7143 2.1825V13.5H1.28571Z" fill="#F79329" />
                            </svg>
                            <p> ferrevariedadesdiamante@gmail.com</p>
                        </div>
                        <div className="footer__contactCard">
                            <svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 21L7.03846 20.4822C6.75 20.1945 0 12.2548 0 7.47945C0 3.33699 3.34615 0 7.5 0C11.6538 0 15 3.33699 15 7.47945C15 12.2548 8.25 20.1945 7.96154 20.5397L7.5 21ZM7.5 1.15068C3.98077 1.15068 1.15385 3.96986 1.15385 7.47945C1.15385 11.1616 6 17.3753 7.5 19.2164C9 17.3753 13.8462 11.1616 13.8462 7.47945C13.8462 3.96986 11.0192 1.15068 7.5 1.15068Z" fill="#F79329" />
                                <path d="M7.49996 10.356C5.88458 10.356 4.61536 9.09021 4.61536 7.47925C4.61536 5.86829 5.88458 4.60254 7.49996 4.60254C9.11534 4.60254 10.3846 5.86829 10.3846 7.47925C10.3846 9.09021 9.11534 10.356 7.49996 10.356ZM7.49996 5.75322C6.51919 5.75322 5.7692 6.50117 5.7692 7.47925C5.7692 8.45733 6.51919 9.20528 7.49996 9.20528C8.48072 9.20528 9.23072 8.45733 9.23072 7.47925C9.23072 6.50117 8.48072 5.75322 7.49996 5.75322Z" fill="#F79329" />
                            </svg>
                            <p>Cra 2 # 6-66 Barrio La Esperanza</p>
                        </div>
                    </div>

                    <div className="footer__schedule">
                        <div className="footer__blockTitle">Horario:</div>
                        <div>
                            <div className='schedule'>Lun-Vie / 7:00 AM - 5:00 PM</div>
                            <div className='schedule'>Sábado / 8:00 AM - 2:00 PM</div>
                            <div className='schedule'>Domingo / 8:00 AM - 4:00 PM</div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="footer__copyright">
                © Develop by XimenAnzola - All Rights Reserved
            </div>
        </footer>
    )
}