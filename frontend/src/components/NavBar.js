import React, {useContext} from "react";
import {Link} from "react-router-dom"
import {observer} from "mobx-react-lite"
import { Context } from "../index";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <>
            <header>
                <nav className="menu">
                    <Link to="Nav"><img src="public/img/menu.svg" alt="menu"></img></Link>
                </nav>
                
                <h3 className="main-title">AzIzA</h3>

                <section className="header_right">
                    <Link to="Espace_perso"><img src="public/img/person.svg" alt=""></img></Link>
                    <Link to="Panier"><img src="public/img/bascket.svg" alt=""></img></Link>
                    <Link to="Recherche"><img src="public/img/loop.svg" alt=""></img></Link>
                            {/**Необходимо будет преобразовать картинки в ссылки + создать кнопку Админа, к.б. видна и доступна только ему. Для этого реализу-
                        ем проверку пользователя на авторизацию **/}
                </section>
            </header>   
        </>
    );
});

export default NavBar;