import { all, call, put, takeLatest } from 'redux-saga/effects';
import { types, actions } from './reducer';
import axios from 'axios';
console.log('types', types.LOAD_CHARACTERS);
const url = 'https://rickandmortyapi.com/api/character';

function* loadCharactersWorker(action) {
	try {
		const response = yield call(
			axios.get,
			`${url}?page=${action.payload.index}`
		);
		if (response && response.status === 200) {
			yield put(actions.loadCharactersSuccess(response.data));
		}
	} catch (e) {
		console.log('error occured', e);
	}
}

function* loadCharactersWatch() {
	yield takeLatest(types.LOAD_CHARACTERS, loadCharactersWorker);
}

export const watchers = {
	loadCharactersWatch,
};

export default function* saga() {
	yield all([watchers.loadCharactersWatch()]);
}
