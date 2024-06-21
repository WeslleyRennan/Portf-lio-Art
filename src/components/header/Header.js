import style from './Header.module.css'
import Design1 from "./Design1.png"

function Header() {
    return(
       <header>

        <div className={style.Box}>
            <div>
                <h1 className={style.TextoPortfolio}>Portfólio</h1>
                <p className={style.TextoWeslleyRennan}>Weslley Rennan</p>
            </div>
            <img src={Design1} className={style.Design1}/>
        </div>
 
       </header>
    );
}

export default Header;