import { useSelector } from "@tramvai/state"
import { Course, CourseList } from "models"
import { COURSES_STATE_NAME } from "store/courses/reducer"

type UseCourses = () => {
    courses: CourseList[],
    currentCourse: Course | undefined,
}

export const useCourses: UseCourses = () => {
    const { currentCourse, courses } = useSelector(COURSES_STATE_NAME, (state) => state[COURSES_STATE_NAME]);

    return { currentCourse, courses };
}