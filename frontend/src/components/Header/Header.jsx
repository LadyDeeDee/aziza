import "./header.css"
import {Link} from "react-router-dom"
import {observer} from "mobx-react-lite"
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import menuImg from '../../img/menu.svg'
import personImg from '../../img/person.svg'
import bascketImg from '../../img/bascket.svg'
import loopImg from '../../img/loop.svg'



const Header = observer(() => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <>
        <header className="header">
        <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <img src={menuImg} alt="menu"/>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>Robes</MenuItem>
              <MenuItem onClick={handleClose}>Accessoires</MenuItem>
              <MenuItem onClick={handleClose}>Women</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Accessoires</MenuItem>
            </Menu>
          </div>
                               
          <h3 className="main-title" >AzIzA</h3>

          <section className="header_right">
              <Link to="Espace_perso"><img src={personImg} alt="person" /></Link>
              <Link to=""><img src={bascketImg} alt="basket" /></Link>
              <Link to="Recherche"><img src={loopImg} alt="loop" /></Link>
                      {/**создать кнопку Админа, к.б. видна и доступна только ему. Для этого реализу-
                  ем проверку пользователя на авторизацию **/}
          </section>
        </header>   
    </>
    );
});

export default Header;