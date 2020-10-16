
import { all, fork } from 'redux-saga/effects';
import * as userSagas from './users';
import * as accountSagas from './accounts';
export default function* rootSaga() {
    yield all([
        ...Object.values(userSagas),
        ...Object.values(accountSagas)
    ].map(fork));
}