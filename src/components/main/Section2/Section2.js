import style from "./Section2.module.css"
import Desenho1 from "./Desenho1.jpg"
import Desenho2 from "./Desenho2.jpg"
import Desenho3 from "./Desenho3.jpg"

function Section2 (){
    return(
        <section className={style.BoxEsboco}>
            <h1 className={style.TextProcesso}>Processo</h1>
            <div className={style.BoxEsbocoImg}>
                <img src={Desenho1} className={style.EsbocoImg}/>
                <img src={Desenho2} className={style.EsbocoImg}/>
                <img src={Desenho3} className={style.EsbocoImg}/>
            </div>
        </section>
    )
}
export default Section2