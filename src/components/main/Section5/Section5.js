import Style from './Section5.module.css' 
import Luffy from './Luffy.png'
import Nami from './Nami.png'

function Section5 (){
    return(
        <section className={Style.BoxSection3}>
               
                <div className={Style.BoxSection3Img}>
                    <img src={Nami} className={Style.Nami}/>
                      <div className={Style.BoxTexto}>
                        <p>Estilos de desenho</p>
                        <p>
                        Cartoon<br/>
                        Digital<br/>
                        Anime<br/>
                        Realismo<br/>
                        </p>
                      </div>
                    <img src={Luffy} className={Style.Luffy}/>
                </div>
    
        </section>
    )
}
export default Section5