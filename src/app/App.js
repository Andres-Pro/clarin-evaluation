import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Lightbox } from 'primereact/lightbox';
import map from 'lodash/map'
import get from 'lodash/get'
import upperFirst from 'lodash/upperFirst'
import fromState from 'core/store/selectors';
import { setInformation, submitInformationRequested } from 'core/store/actions'
import Footer from './footer'
import Header from './header'
import {
	Container, Row, Col, CardTitle, CardText
} from 'reactstrap';

const App = ({person, setInformation, submitInformationRequested}) => {
	useEffect(() => {
		setInformation();
		submitInformationRequested();
	});
	return (
		<>
			<Header />
			<Container className="root mt-4 mb-4">
				<Row className="mt-4">
					<Col xs="12" md="3" sm="6">
						<img width='250' height='250' alt='profile_imagen' src={get(person, 'profile_image')} ></img>
					</Col>
					{map(get(person, 'data'), item => (
						<Col className="person-info p-4" xs="12" md="3" sm="6" >
							<CardTitle>{get(item, 'title')}</CardTitle>
							{map(get(item, 'data'), i => (
								<CardText>{upperFirst(i)}</CardText>
							))}
						</Col>
					))}
				</Row>
				<Row className="mt-4">
					<Col>
						<p>
							{get(person, 'description')}
						</p>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<iframe title="video" style={{ width: 'inherit' }} height='400' src={get(person, 'video_url')} frameBorder="0" allowFullScreen></iframe>
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<div className="lightbox-demo">
							<Lightbox images={get(person, 'images')} />
						</div>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	);
}

export default connect(
    (state) => ({
        person: fromState.Home.getPerson(state),
    }),
    (dispatch) => bindActionCreators({
		setInformation,
		submitInformationRequested,
    }, dispatch),
)(App);

