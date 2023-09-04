import { createEvent, createReducer } from "@tramvai/state";
import { Course, CourseList } from "models";

type CoursesState = {
    courses: CourseList[];
    currentCourse: Course | undefined;
}

export const COURSES_STATE_NAME = 'COURSES_STATE';

export const SET_COURSES_EVENT_NAME = 'SET_COURSES_EVENT';
export const setCoursesEvent = createEvent<CourseList[]>(SET_COURSES_EVENT_NAME);

export const SET_CURRENT_COURSE_EVENT_NAME = 'SET_CURRENT_COURSE_EVENT';
export const setCurrentCourseEvent = createEvent<Course>(SET_CURRENT_COURSE_EVENT_NAME);

const INITIAL_STATE: CoursesState = {
    courses: [],
    currentCourse: undefined,
};

export const coursesReducer = createReducer(COURSES_STATE_NAME, INITIAL_STATE)
    .on(setCoursesEvent, (state, payload) => ({
        ...state,
        courses: payload,
    }))
    .on(setCurrentCourseEvent, (state, payload) => ({
        ...state,
        currentCourse: payload,
    }));
