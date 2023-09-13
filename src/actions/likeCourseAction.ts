import { declareAction } from "@tramvai/core";
import { LIKED_COURSES_STORAGE_NAME } from "constants/common.consts";
import { setLikedCourseIdEvent } from "store/courses/reducer";

export const likeCourseAction = declareAction({
    name: 'likeCourseAction',
    fn(id: string) {
        const likedIds = localStorage.getItem(LIKED_COURSES_STORAGE_NAME);

        if (!!likedIds) {
            const parsedIds = JSON.parse(likedIds);

            localStorage.setItem(
                LIKED_COURSES_STORAGE_NAME,
                JSON.stringify([...parsedIds, id]),
            );
        } else {
            localStorage.setItem(
                LIKED_COURSES_STORAGE_NAME,
                JSON.stringify([id]),
            );
        }
        
        this.dispatch(setLikedCourseIdEvent(id));
    },
    conditions: {
        onlyBrowser: true,
    },
});