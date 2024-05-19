import React from "react";
import './SideBar.css';

function SideBar({favorites, onColorChange}) {
    return (
        <>
            <input id="slide-sidebar" type="checkbox" role="button" />
            <label class="close-menu noselect" for="slide-sidebar"><span>≡</span></label>

            <div class="controls">
            {/* <br/><br/> */}
            <span className="favourite-title">Favorites</span>
                {/* add fav */}
                <ul>
                    {favorites.map((fav, index) => (
                        <li key={index} onClick={() => onColorChange(fav.color)} style={{ cursor: 'pointer' }}>
                            <span className="fav-name" >{fav.name}</span>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    );
}

export default SideBar;