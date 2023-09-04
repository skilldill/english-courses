import { declareAction } from "@tramvai/core";
import { HTTP_CLIENT } from "@tramvai/module-http-client";
import { PAGE_SERVICE_TOKEN } from "@tramvai/tokens-router";
import { setCurrentCourseEvent } from "store/courses/reducer";

export const fetchCurrentCoursesAction = declareAction({
    name: 'fetchCurrentCoursesAction',
    async fn() {
        try {
            const { id } = this.deps.pageService.getCurrentRoute().params;
            const { payload } = await this.deps.http.get('http://localhost:5000/api/courses/' + id);
            this.dispatch(setCurrentCourseEvent(payload));
        } catch(error) {
            console.error(error);
        }
    },
    deps: {
        http: HTTP_CLIENT,
        pageService: PAGE_SERVICE_TOKEN,
    }
})