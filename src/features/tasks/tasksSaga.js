import { all, call, delay, put, select, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectTasks, setTasks, toggleTasksLoading } from "./tasksSlice";

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
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
};