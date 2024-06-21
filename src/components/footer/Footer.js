import style from './Footer.module.css'
import Design3 from './Design3.png'
function Footer (){
    return(
        <footer>
            <img src={Design3} className={style.FooterImg}/>

            <div className={style.Creditos}> 
                <p>@w.rennan.art</p>
                <p>Criação do design e desenvolvimento do site: 
                 Rennan</p>
            </div>

        </footer>
    )
}
export default Footer;