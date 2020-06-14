/* eslint-disable no-unused-vars */
import fromState from 'core/store/selectors';
import {call, select} from 'redux-saga/effects';
import Swal from 'sweetalert2'
import map from 'lodash/map';
import get from 'lodash/get';

export function* submitInfoRequested(action) {
    const data = yield select(fromState.Home.getInformation);
    const resp = yield select(fromState.Home.getResponse);
    try {
        const url = 'unaUrlDePrueba'
        const form = yield new FormData();
        map(data, (value, key) => {
            form.append(key, value);
        })
        const response = yield call(
            fetch,
            `${url}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: form,
            },
        );
        console.log(resp);
        return Swal.fire({
            icon: 'success',
            text: `Usuario: ${get(resp, 'data.id')}, Modo Incognito: ${get(resp, 'data.unknown')}, Referer: ${get(resp, 'data.referer')}`,
            title: resp.message,
            confirmButtonText: 'Aceptar'
        })

    } catch (error) {

    }
}