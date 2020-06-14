
import person from 'api/mockedData'
import uniqueId from 'lodash/uniqueId'
import { isIncognito } from 'utils/helpers'
import {
    SET_INFORMATION,
    SUBMIT_INFORMATION_REQUESTED,
} from 'core/store/types';

const initialState = {
    person,
    information: '',
};

const form = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFORMATION: {
            let unknown = false
            const id = uniqueId('user_')
            var referer = document.referrer;
            isIncognito(function(itIs){
                unknown = itIs;
            });
            localStorage.setItem('id', id);
            return {
                ...state,
                information: {
                    id,
                    unknown,
                    referer,
                },
                response: {
                    data: {
                        id,
                        unknown,
                        referer,
                    },
                    message: 'datos de trakeo guardados',
                }
            };
        }
        case SUBMIT_INFORMATION_REQUESTED: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
};

export default form;
