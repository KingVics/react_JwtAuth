import React from 'react'
import style from "../styles/footer.module.css"

function Footer(props) {
    return (
        <footer className={style.footerContainer}>
            <div className={style.footerBig}>
                <div className={style.footerNews} style={{flex: "1"}}>
                    <h2>latest news</h2>
                    <div>
                        <p>The Federal Government has right to ensure 
                            that each State Government pays debts guaranteed by the Federal Government.
                        </p>
                        <p>A High Court Judge has no competence to deliver a judgment and adjourn to a 
                            later date to give reasons for his judgment.Timi Takes Silk
                        </p>
                        <p>Alhaji Abdullahi Ibrahim, CON, SAN celebrates 50 years at the Nigerian Bar Our 
                            Partners become Fellows of the Chartered Institute of Arbitrators
                        </p>
                    </div>
                </div>
                <div className={style.footerAdress} style={{flex: "2"}}>
                    <h2>Address</h2>
                    <div>
                        <div>
                            <h3>Abuja FCT</h3>
                            <p>45, Haille Selassie Street,Off Thomas Sankara Street,Asokoro, Abuja.</p>
                        </div>
                        <div>
                            <h3>Lagos Island</h3>
                            <p>2, Towry Street,P.O. Box 60114,Ikoyi, Lagos State</p>
                        </div>
                        <div>
                            <h3>Kaduna </h3>
                            <p>Top Floor, Abdulssalam Ziza House, A9, Mogadishu City Centre, Kaduna</p>
                        </div>
                    </div>
                </div>
                <div className={style.publications}>
                    <h2>latest publications</h2>
                </div>
            </div>
            <div className={style.footerSmall}>
                <p>© 2021 Abdullahi Ibrahim & Co. All rights reserved.</p>
            </div>
        </footer>
    )
}


export default Footer

