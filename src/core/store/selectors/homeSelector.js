import get from 'lodash/get';

export const getPerson = (state) => get(state, 'home.person.person');
export const getInformation= (state) => get(state, 'home.information');
export const getResponse= (state) => get(state, 'home.response');