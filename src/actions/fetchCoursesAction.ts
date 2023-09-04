import { declareAction } from "@tramvai/core";
import { HTTP_CLIENT } from "@tramvai/module-http-client";
import { CourseList } from "models";
import { setCoursesEvent } from "store/courses/reducer";

export const fetchCoursesAction = declareAction({
    name: 'fetchCoursesAction',
    async fn() {
        try {
            const { payload } = await this.deps.http.get<CourseList[]>('http://localhost:5000/api/courses');
            this.dispatch(setCoursesEvent(payload));
        } catch(error) {
            console.error(error);
        }
    },
    deps: {
        http: HTTP_CLIENT,
    }
});