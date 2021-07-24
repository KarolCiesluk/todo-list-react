import {call, delay, put, takeEvery} from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, toggleTasksLoading } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        yield put(toggleTasksLoading());
        yield delay(2000);
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
        yield put(toggleTasksLoading());
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};