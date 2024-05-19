import React, { useState } from 'react';

const ColorApp = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [favorites, setFavorites] = useState([]);

    // Generate random color
    const generateRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setSelectedColor(randomColor);
    };

    // Handle adding to favorites
    const handleAddToFavorites = () => {
        const colorName = prompt('Enter a name for your favorite color:');
        if(colorName) {
            setFavorites([...favorites, { name: colorName, color: selectedColor }]);
            console.log('Added to favorites!');
        }
    };

    return (
        <>
            <button className="custom-btn btn-8" onClick={generateRandomColor}>
                <span>Generate</span>
            </button>
            <button className="custom-btn btn-8" onClick={handleAddToFavorites}>
                <i className="fa fa-heart" aria-hidden="true"></i> Add to Favorite
            </button>
            <div>
                <h2>Favorites</h2>
                <ul>
                    {favorites.map((fav, index) => (
                        <li key={index} style={{color: fav.color}}>
                            {fav.name} - {fav.color}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ColorApp;