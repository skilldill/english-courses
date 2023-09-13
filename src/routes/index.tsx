import { useCourses } from 'hooks';
import styles from './index.module.css';
import { PageComponent } from '@tramvai/react';
import cn from 'classnames';

export const IndexPage: PageComponent = () => {
  const { courses, likeCourse } = useCourses();

  return (
    <main className="container">
      <h1>Courses</h1>

      <div className={styles.coursesList}>
        
        {courses.map((course) => 
          <div className={styles.cardWrap} key={course.id}>
            <div className="card">
              <img src={'http://localhost:5000' + course.poster} className="card-img-top" alt="Курс по английскому языку" />
              <div className={cn(['card-body', styles.courseBody])}>
                <div>
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.speaker}</p>
                </div>
                <div className={styles.cardControls}>
                  <a href={'/' + course.id} className="btn btn-primary">Посмотреть</a>
                  <button className="btn btn-success" onClick={() => likeCourse(course.id)}>Like</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default IndexPage;
