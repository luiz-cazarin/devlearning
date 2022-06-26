import { useRouter } from 'next/router'
import styles from '../lesson/lesson.module.scss'
import { parseCookies } from "nookies";
import api from '../../../services/api'
import React from "react";

const Details = () => {
    const cookies = parseCookies();
    const token = cookies["@devlearning.token"];    

    const router = useRouter();

    const [course, setCourse] = React.useState({name: '', title: '', subtitle: '', description: '', imageFile: ''});
    const [comments, setComments] = React.useState([]);

    React.useEffect(() => {
        api.get(`/courses/${router.query.id}`).then((response) => setCourse(response.data));
        api.get("/comments/course/"+router.query.id).then((response) => {
            setComments(response.data);
        });
    }, []);

    const listChat = comments.map((e) =>
        <div className={styles.chat}>
            <img src='/images/profile.png' alt='user'/>
            <div className={styles.chat_2}>
                <div> 
                    <p className={styles.title}>{e.title}</p>
                </div>
                <p>Usuario: {localStorage.getItem('userName')}</p>
                <div>
                    <p className={styles.description}>{e.description}</p>
                </div>
            </div>
        </div>
    )

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
                <div className={styles.body__chat}>
                <div className={styles.box__chat}>
                    {token ?
                        <div className={styles.chat}>
                            <img src='/images/profile.png' alt='user'/>
                            <div className={styles.chat_2}>
                                <div>
                                    
                                    <textarea
                                        placeholder='Titulo:'
                                        name="title"
                                        id="title"
                                        required
                                    />
                                </div>
                                <p>Usuario: {localStorage.getItem('userName')}</p>
                                <div>
                                    <textarea
                                        placeholder='Descrição:'
                                        name="description"
                                        id="description"
                                        required
                                    />
                                </div>
                                <div>
                                    <button>Criar comentario</button>
                                </div>
                            </div>
                        </div>
                        :
                        <div className={styles.alert__login}>
                            <a href='/web/login/'>Faça o login para comentar!</a>
                        </div>
                    }
                    {listChat.length > 0 &&
                        listChat
                    }
                </div>
                </div>
            
            </div>
        </>
    );
}

export default Details;