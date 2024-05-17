import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import './Header.css'; // Make sure to create this CSS file

const Header = () => {
  return (
    <header className="mdl-layout__header header-1">
				<div className="mdl-layout__drawer-button"><i className="material-icons">arrow_back</i></div>
				<div className="mdl-layout__header-row">
					<div className="mdl-layout-title">Daily Inspiration</div>
					  <ThemeSwitcher />
				  	</div>
			</header>
  );
};

export default Header;