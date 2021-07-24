import { all, call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks, toggleTasksLoading } from "./tasksSlice";
// import { useLocalStorage } from "./useLocalStorage";

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

// function* saveTasksInLocalStorage() {
//     yield call(useLocalStorage);
// };

export function* watchFetchExampleTasks() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    // yield takeEvery("*", saveTasksInLocalStorage);
};