import { createEvent, createReducer } from "@tramvai/state";
import { Course, CourseList } from "models";

type CoursesState = {
    courses: CourseList[];
    likedCoursesIds: string[];
    currentCourse: Course | undefined;
}

export const COURSES_STATE_NAME = 'COURSES_STATE';

export const SET_COURSES_EVENT_NAME = 'SET_COURSES_EVENT';
export const setCoursesEvent = createEvent<CourseList[]>(SET_COURSES_EVENT_NAME);

export const SET_CURRENT_COURSE_EVENT_NAME = 'SET_CURRENT_COURSE_EVENT';
export const setCurrentCourseEvent = createEvent<Course>(SET_CURRENT_COURSE_EVENT_NAME);

export const SET_LIKED_COURSES_IDS_EVENT_NAME = 'SET_LIKED_COURSES_IDS_EVENT_EVENT';
export const setLikedCoursesIdsEvent = createEvent<string[]>(SET_LIKED_COURSES_IDS_EVENT_NAME);

export const SET_LIKED_COURSE_ID_EVENT_NAME = 'SET_LIKED_COURSE_ID_EVENT_EVENT';
export const setLikedCourseIdEvent = createEvent<string>(SET_LIKED_COURSE_ID_EVENT_NAME);


const INITIAL_STATE: CoursesState = {
    courses: [],
    likedCoursesIds: [],
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
    }))
    .on(setLikedCoursesIdsEvent, (state, payload) => ({
        ...state,
        likedCoursesIds: payload,
    }))
    .on(setLikedCourseIdEvent, (state, payload) => ({
        ...state,
        likedCoursesIds: [...state.likedCoursesIds, payload],
    }));
