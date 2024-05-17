import React, { useState } from "react";
import Chipiu from "./Chipiu";
import Bucket from "./Bucket";
import Palarie from "./Palarie";
import Geaca from "./Geaca";
import Maleta from "./Maleta";
import Polo from "./Polo";
import Pantaloni from "./Pantaloni";
import Fusta from "./Fusta";
import Sorti from "./Sorti";
import Botine from "./Botine";
import Pantofi from "./Pantofi";
import Slapi from "./Slapi";
import SVGColorChanger from "./SVGColorChanger";

const BoxComponent = () => {
    const [selectedColor, setSelectedColor] = useState('#000');

    return (
        <>
            <div>
                <div className="page-content mdl-grid">
					<div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone mdl-cell--3-col-tablet mdl-cell--middle">
						<div className="watch">
							<div className="rowgroup">
                                <Chipiu color={selectedColor} />
                                <Bucket color={selectedColor} />
                                <Palarie color={selectedColor} />
                            </div>
                            <div className="rowgroup">
                                <Geaca color={selectedColor} />
                                <Maleta color={selectedColor} />
                                <Polo color={selectedColor} />
                            </div>
                            <div className="rowgroup">
                                <Pantaloni color={selectedColor} />
                                <Fusta color={selectedColor} />
                                <Sorti color={selectedColor} />
                            </div>
                            <div className="rowgroup">
                                <Botine color={selectedColor} />
                                <Pantofi color={selectedColor} />
                                <Slapi color={selectedColor} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="color-changer-container">
                    <SVGColorChanger setSelectedColor={setSelectedColor} />
                </div>
            </div>
        </>
    )
};

export default BoxComponent;