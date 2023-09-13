import { useCourses } from "hooks";
import cn from 'classnames';
import styles from './Wishlist.module.css';

const WishListPage = () => {
    const { likedCourses } = useCourses();

    return (
        <main className="container page">
            <h1>Wishlist :3</h1>

            <div className={styles.coursesList}>
                
                {likedCourses.map((course) => 
                <div className={styles.cardWrap} key={course.id}>
                    <div className="card">
                    <img src={'http://localhost:5000' + course.poster} className="card-img-top" alt="Курс по английскому языку" />
                    <div className={cn(['card-body', styles.courseBody])}>
                        <div>
                        <h5 className="card-title">{course.title}</h5>
                        <p className="card-text">{course.speaker}</p>
                        </div>
                        <div>
                            <a href={'/' + course.id} className="btn btn-primary">Посмотреть</a>
                        </div>
                    </div>
                    </div>
                </div>
                )}
            </div>
        </main>
    )
}

export default WishListPage;