import MenuBar from "shared/ui/menu";

import svgNavMobile from "app/assets/svg/nav_mobile.svg";

import "./header.scss";

/**
 * Хедер
 *
 * @component
 */
export const Header = () => {
	return (
		<header className="header">
			<a className="link-instagram block-link" href="#"></a>
			<MenuBar />
			<button className="header__mobile-nav-btn">
				<img
					height={19}
					width={50}
					src={svgNavMobile}
					draggable={false}
				/>
			</button>
		</header>
	);
};

export default Header;
