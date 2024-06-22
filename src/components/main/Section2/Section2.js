import style from "./Section2.module.css"
import Referencia1 from "./Referencia1.jpeg"
import Referencia2 from "./Referencia2.jpeg"
import Referencia3 from "./Referencia3.jpeg"

function Section2 (){
    return(
        <section className={style.BoxEsboco}>
            <h1 className={style.TextProcesso}>Processo</h1>
            <div className={style.BoxEsbocoImg}>
                <img src={Referencia1} className={style.EsbocoImg}/>
                <img src={Referencia2} className={style.EsbocoImg}/>
                <img src={Referencia3} className={style.EsbocoImg}/>
            </div>
        </section>
    )
}
export default Section2