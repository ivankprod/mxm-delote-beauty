import svgLogoWhite from "app/assets/svg/logo_white.svg";

import "./footer.scss";

/**
 * Хедер
 *
 * @component
 */
export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__top-block">
				<div className="footer__section">
					<img
						className="logo"
						src={svgLogoWhite}
						height={40}
						width={40}
						draggable={false}
					/>
				</div>
				<div className="footer__section">
					<div className="section__row section__row-caption">
						Контакты
					</div>
					<div className="section__row">+7 (812) 123-45-67</div>
					<div className="section__row">+7 (911) 123-45-67</div>
					<div className="section__row">
						Новоостровский проспект, дом 36 лит. С
					</div>
				</div>
				<div className="footer__section">
					<div className="section__row section__row-caption">
						Режим работы
					</div>
					<div className="section__row">C 10:00 до 21:00 (Пн-Пт)</div>
					<div className="section__row">С 11:00 до 20:00 (Сб-Вс)</div>
				</div>
				<div className="footer__section">
					<div className="section__row section__row-caption">
						Мы в Instagram
					</div>
					<a className="link-instagram block-link" href="#"></a>
				</div>
			</div>
			<div className="footer__bottom-block">Copyright © 2017 - 2024</div>
		</footer>
	);
};

export default Footer;
