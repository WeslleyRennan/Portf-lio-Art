import style from "./Section3.module.css"
import Krita from "./Krita.png"
import Ibis from "./Ibis Paint X.png"
import Sketchbook from "./Sketchbook.png"
import FlipaClip  from "./FlipaClip.png"

function Section3(){
    return(
        <section className={style.BoxSoftwares}>
            <h1>Softwares Favoritos</h1>
            <div className={style.BoxSoftwaresImg}>
                <img src={Krita} className={style.SoftwaresImg}/>
                <img src={Ibis} className={style.SoftwaresImg}/>
                <img src={Sketchbook} className={style.SoftwaresImg}/>
                <img src={FlipaClip} className={style.SoftwaresImg}/>
            </div>
        </section>
    )
}
export default Section3