import React, { useContext } from 'react';
import {UAContext} from '@quentin-sommer/react-useragent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isPrivateMode } from 'utils/helpers';
import get from 'lodash/get';
import { updateContextForm } from 'core/store/actions'

const UsingContextHook  = ({updateContextForm}) => {
	let i = false;
	let fingerprint;
	if (localStorage.getItem('fingerprint')) {
		fingerprint = localStorage.getItem('fingerprint')
	} else {
		const { v4: uuidv4 } = require('uuid');
		fingerprint = uuidv4()
		localStorage.setItem('fingerprint', fingerprint);
	}
	const referer = document.referrer
    const {parser} = useContext(UAContext);
    const browser = get(parser.getBrowser(), 'name');
    const device = get(parser.getDevice(), 'type', 'computer');
	const os = get(parser.getOS(), 'name');
	updateContextForm({key: 'browser', value: browser})
	updateContextForm({key: 'device', value: device})
	updateContextForm({key: 'os', value: os})
	updateContextForm({key: 'referer', value: referer})
	updateContextForm({key: 'fingerprint', value: fingerprint})
	isPrivateMode().then(function(result) {
		if (result) i = true
		updateContextForm({key: 'incognito', value: result});
	 })
	return (
		<>
        	{`Context Information:, Browser: ${browser}, Device: ${device}, System: ${os}, Referer:${referer} incognito: ${i} `}
			<br />
			{`fingerPrint: ${fingerprint}`}
		</>
	);
}
export default connect(
	(state) => ({
	}),
	(dispatch) => bindActionCreators({
		updateContextForm,
	}, dispatch),
)(UsingContextHook );

