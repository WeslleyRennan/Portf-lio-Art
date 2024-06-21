import style from './Section4.module.css'

function Section4 (){
    return(
      <section className={style.BoxMihasArtes}>
        <h1 className={style.TextMinhasArtes}>Minhas artes</h1>
        <div className={style.BoxDiv}>
          <div className={style.DivImg} id={style.img1}></div>
          <div className={style.DivImg} id={style.img2}></div>
          <div className={style.DivImg} id={style.img3}></div>
          <div className={style.DivImg} id={style.img4}></div>
          <div className={style.DivImg} id={style.img5}></div>
          <div className={style.DivImg} id={style.img6}></div>
        </div>
        
      </section>
    )
}

export default Section4