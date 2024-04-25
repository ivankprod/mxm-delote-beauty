import { NavLink } from "react-router-dom";

import svgLogoWhite from "app/assets/svg/logo_white.svg";

import "./menu.scss";

/**
 * Верхнее меню
 *
 * @component
 */
export const MenuBar = () => {
	return (
		<ul className="nav">
			<li className="nav__link">
				<NavLink
					end
					to="/mxm-delote-beauty/"
					className={({ isActive }) =>
						["nav__alink", isActive ? "nav__alink_active" : ""].join(" ")
					}
				>
					Главная
				</NavLink>
			</li>
			<li className="nav__link">
				<NavLink
					to="/mxm-delote-beauty/masters"
					className={({ isActive }) =>
						["nav__alink", isActive ? "nav__alink_active" : ""].join(" ")
					}
				>
					Мастера
				</NavLink>
			</li>
			<li className="nav__link">
				<NavLink
					to="/mxm-delote-beauty/cosmetics"
					className={({ isActive }) =>
						["nav__alink", isActive ? "nav__alink_active" : ""].join(" ")
					}
				>
					Косметика
				</NavLink>
			</li>
			<li className="nav__link">
				<img
					className="logo"
					src={svgLogoWhite}
					height={40}
					width={40}
					draggable={false}
				/>
			</li>
			<li className="nav__link">
				<NavLink
					to="/mxm-delote-beauty/discount"
					className={({ isActive }) =>
						["nav__alink", isActive ? "nav__alink_active" : ""].join(" ")
					}
				>
					Акции
				</NavLink>
			</li>
			<li className="nav__link">
				<NavLink
					to="reviews"
					className={({ isActive }) =>
						["nav__alink", isActive ? "nav__alink_active" : ""].join(" ")
					}
				>
					Отзывы
				</NavLink>
			</li>
			<li className="nav__link">
				<NavLink
					to="/mxm-delote-beauty/contacts"
					className={({ isActive }) =>
						["nav__alink", isActive ? "nav__alink_active" : ""].join(" ")
					}
				>
					Контакты
				</NavLink>
			</li>
		</ul>
	);
};

export default MenuBar;
