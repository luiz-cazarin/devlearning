import { useRouter } from 'next/router'
import styles from '../lesson/lesson.module.scss'
import { parseCookies } from "nookies";
import api from '../../../services/api'
import React from "react";

const Details = () => {
    const cookies = parseCookies();
    const token = cookies["@devlearning.token"];

    const title = 'LOGICA DE PROGRAMAÇÃO'
    const router = useRouter();

    const [course, setCourse] = React.useState({});

    React.useEffect(() => {
        api.get(`/courses/${router.query.id}`).then((response) => setCourse(response.data));
    }, []);

    return (
        <>
            <div className={styles.bodyLesson}>
                <div className={styles.header__banner}>
                    <div className={styles.header__box}>
                        <h1>{course.name}</h1>
                        <br></br>
                        <p>{course.subtitle}</p>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.img__class}>
                    <img className={styles.image} src={course.imageFile} alt={course.name} />
                </div>
                <div className={styles.content}>
                    <h3>{course.title}</h3>
                    <p>
                        {course.description}
                    </p>
                </div>
                {/* <div className={styles.box__chat}>
                    <div className={styles.chat}>
                        <img src='https://wowxwow.com/wp-content/uploads/2018/02/xsullo-eyesee.jpg'></img>
                        <div className={styles.chat_2}>
                        </div>
                    </div>
                </div> */}
            
            </div>
        </>
    );
}

export default Details;