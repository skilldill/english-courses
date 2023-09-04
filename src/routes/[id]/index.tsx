import { PageComponent } from "@tramvai/react";
import { fetchCurrentCoursesAction } from "actions/fetchCurrentCourseAction";
import { useCourses } from "hooks";

const CoursePage: PageComponent = () => {
    const { currentCourse } = useCourses();

    if (!currentCourse) return '...Загрузка';

    return (
        <div className="container">
            <h1>{currentCourse.title}</h1>
            <p>{currentCourse.description}</p>
            <p>{currentCourse.speaker}</p>
            <p>Темы</p>
            <ul className="list-group">
                {currentCourse.topics.map((topic) => 
                    <li className="list-group-item" key={topic}>{topic}</li>
                )}
            </ul>
            <p>Дата: {currentCourse.date}</p>
            <div>
                <button className="btn btn-warning">Купить курс</button>
            </div>
        </div>
    )
}

CoursePage.actions = [fetchCurrentCoursesAction];

export default CoursePage;