import Head from 'next/head';
import styles from './home.module.scss';
import Link from 'next/link'

export default function Home() {
   return (
      <>
         <Head>
            <title>Home</title>
         </Head>
         <div className={styles.bodyContainer}>
            <main className={styles.contentContainer}>
               <section className={styles.hero}>
                  <h1>Seja um desenvolvedor Web</h1>
                  <span>Aprenda o basico para criar o seu primeiro site</span>
                  <p>Este site foi construido por alunos de ciencias da computação da Universidade Católica, com o intuito de ajudar outros alunos na sua carreira, aqui veremos o basico em logica de programação, HTML, CSS e JavaScript, alem de um guia de carreira para que voce possa ir alem e possa crescer na sua carreira</p>
                  <Link href='/web/class'><button className={styles.button}>Iniciar Curso</button></Link>
                  <Link href="/web/about"><button className={styles.buttonActive}>Saiba mais</button></Link>
               </section>
               <aside className={styles.lottie}>
                  <img src='/images/computador-hello-world.svg' alt="devLearning" />
               </aside>
            </main>
         </div>
         <footer className={styles.footer}>
            <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
         </footer>
      </>
   )
}
