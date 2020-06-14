import {
    SET_INFORMATION,
    SUBMIT_INFORMATION_REQUESTED,
} from 'core/store/types';

export const setInformation = () => ({
    type: SET_INFORMATION,
});

export const submitInformationRequested = () => ({
    type: SUBMIT_INFORMATION_REQUESTED,
});
