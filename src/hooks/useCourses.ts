import { useActions, useSelector } from "@tramvai/state"
import { likeCourseAction } from "actions/likeCourseAction"
import { Course, CourseList } from "models"
import { useMemo } from "react"
import { COURSES_STATE_NAME } from "store/courses/reducer"

type UseCourses = () => {
    courses: CourseList[];
    likedCourses: CourseList[];
    currentCourse: Course | undefined;
    likeCourse: (id: string) => Promise<void>;
}

export const useCourses: UseCourses = () => {
    const { currentCourse, courses, likedCoursesIds } = useSelector(COURSES_STATE_NAME, (state) => state[COURSES_STATE_NAME]);

    const likeCourse = useActions(likeCourseAction);

    const likedCourses: CourseList[] = useMemo(() => {
        return courses.filter(({ id }: CourseList) => likedCoursesIds.includes(id));
    }, [likedCoursesIds])

    return { currentCourse, courses, likedCourses, likeCourse };
}