import { declareAction } from "@tramvai/core";
import { LIKED_COURSES_STORAGE_NAME } from "constants/common.consts";
import { setLikedCoursesIdsEvent } from "store/courses/reducer";

export const fetchLikedIdsAction = declareAction({
    name: 'fetchLikedIdsAction',
    fn() {
        const storedIds = localStorage.getItem(LIKED_COURSES_STORAGE_NAME);

        if (!!storedIds) {
            this.dispatch(setLikedCoursesIdsEvent(JSON.parse(storedIds)));
        }
    },
    conditions: {
        onlyBrowser: true,
    }
});