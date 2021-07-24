import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, toggleTasksLoading } from "./tasksSlice";

function* fetchExampleTasksSuccess(exampleTasks) {
    yield all([
        put(setTasks(exampleTasks)),
        put(toggleTasksLoading()),
    ]);
};

function* fetchExampleTasksHandler() {
    try {
        yield all([
            put(toggleTasksLoading()),
            delay(2000),
        ]);
        const exampleTasks = yield call(getExampleTasks);
        yield fetchExampleTasksSuccess(exampleTasks);
    } catch (error) {
        yield call(alert, "Coś poszło nie tak!");
    }
}

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
};