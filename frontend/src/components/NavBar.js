import React, {useContext} from "react";
import { Context } from "../index";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <>
        <header>
        <Nav class="menu">
          <a href="Nav"><img src="img/menu.svg" alt="menu">Menu</a>
        </Nav>
        
        <h3 class="main-title">AzIzA</h3>

        <section class="header_right">
        <a href="Espace_perso"><img src="img/person.svg" alt="person"></a>
        <a href="Panier"><img src="img/bascket.svg" alt="bascket"></a>
        <a href="Recherche"><img src="img/loop.svg" alt="loop"></a>
                //Необходимо будет преобразовать картинки в ссылки + создать кнопку Админа, к.б. видна и доступна только ему. Для этого реализу-
                ем проверку пользователя на авторизацию
        </section>
    </header>   
</>
    );
});

export default NavBar;