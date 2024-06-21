import style from './Section1.module.css'
import Design2 from './Design2.png'

function Section1(){
    return(
        <section className={style.Box2}>
            <img src={Design2} className={style.Foto2}/>
            <div className={style.Box3}>
              <div className={style.Box4}>
                 <p className={style.TextoMeu}>Olá meu nome é Rennan estou nesse mundo de desenho já faz 5 anos, Estou sempre em busca de melhorar as minhas artes tentando dar mais vida e movimento para os meus desenhos.</p>   
              </div>
            </div>
        </section>
    )
}

export default Section1;