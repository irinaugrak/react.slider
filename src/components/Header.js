import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
	padding: 15px 0;
	margin: 0;
`

class Header extends Component {
	render() {
		return (
				<Row>
					<Col lg={12}>
						<nav>
							<List>
								<li><Link link='#' text='Вызов мастера' /></li>
								<li><Link link='#' text='Прайс на ремонт' /></li>
								<li><Link link='#' text='Наши преимущества' /></li>
								<li><Link link='#' text='Схема работы' /></li>
								<li><Link link='#' text='Отзывы клиентов' /></li>
								<li><Link link='#' text='Примеры работ' /></li>
								<li><Link link='#' text='Контакты' /></li>
							</List>
						</nav>
					</Col>
				</Row>
			)
	}
}

export default Header

