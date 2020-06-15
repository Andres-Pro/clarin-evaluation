import React, { useContext } from 'react';
import {UAContext} from '@quentin-sommer/react-useragent';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isPrivateMode } from 'utils/helpers';
import get from 'lodash/get';
import { updateContextForm } from 'core/store/actions'

const UsingContextHook  = ({updateContextForm}) => {
	let i = false;
	const { v4: uuidv4 } = require('uuid');
    const fingerprint = uuidv4()
    const {parser} = useContext(UAContext);
    const browser = get(parser.getBrowser(), 'name');
    const device = get(parser.getDevice(), 'type', 'computer');
	const os = get(parser.getOS(), 'name');
	updateContextForm({key: 'browser', value: browser})
	updateContextForm({key: 'device', value: device})
	updateContextForm({key: 'os', value: os})
	updateContextForm({key: 'referer', value: document.referrer})
	updateContextForm({key: 'fingerprint', value: fingerprint})
	isPrivateMode().then(function(result) {
		if (result) i = true
		updateContextForm({key: 'incognito', value: result});
	 })
	return (
		<>
        	{`Context Information:, Browser: ${browser}, Device: ${device}, System: ${os}, Referer:${document.referrer} incognito: ${i} `}
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

