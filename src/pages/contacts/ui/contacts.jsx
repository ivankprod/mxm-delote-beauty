import { useContext, useEffect } from "react";

import ScopeContext from "app/context";

import imgMap from "app/assets/images/map.jpg";

import "./contacts.scss";

/**
 * Страница контактов
 *
 * @component
 */
export const ContactsPage = () => {
	const { scope, setScope } = useContext(ScopeContext);

	useEffect(() => {
		setScope("contacts");
	}, []);

	return (
		<main className={`content content_${scope}`}>
			<section className="content__section content__section_contacts">
				<h1 className="contacts__h1">Контакты</h1>
				<img src={imgMap} height={576} width={1296} draggable={false} />
				<div className="contacts__entries">
					<ul className="entry">
						<li className="entry__title">Контакты</li>
						<li>+7 (812) 123-45-67</li>
						<li>+7 (911) 123-45-67</li>
						<li>Новоостровский проспект, дом 36 лит. С</li>
					</ul>
					<ul className="entry">
						<li className="entry__title">Режим работы</li>
						<li>C 10:00 до 21:00 (Пн-Пт)</li>
						<li>С 11:00 до 20:00 (Сб-Вс)</li>
					</ul>
					<ul className="entry">
						<li className="entry__title">Контакты</li>
						<li>+7 (812) 123-45-67</li>
						<li>+7 (911) 123-45-67</li>
						<li>Новоостровский проспект, дом 36 лит. С</li>
					</ul>
					<ul className="entry">
						<li className="entry__title">Режим работы</li>
						<li>C 10:00 до 21:00 (Пн-Пт)</li>
						<li>С 11:00 до 20:00 (Сб-Вс)</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default ContactsPage;
