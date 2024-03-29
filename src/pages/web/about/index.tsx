import Head from 'next/head';
import styles from './styles.module.scss';
import Link from 'next/link';

export default function About() {
   return (
      <>
         <Head>
            <title>About</title>
         </Head>
         <div className={styles.bodyContainer}>
            <div className={styles.contentContainer}>
               <section className={styles.hero}>
                  <h1>Bem vindo ao DEV LEARNING</h1>
                  <span>Um pouco sobre o desenvolvimento do site</span>
                  <p>Este site foi construído por alunos de ciências da computação da universidade católica, com objetivo de ajudar outros alunos na sua carreira, aqui veremos o básico em lógica de programação, html, css e java script, para você poder crescer na sua carreira</p>
                  <p>Crie suas próprias aulas e ajude a comunidade!</p>
                  <p>Tecnologias usadas:</p>
                  <p>React.js, Next.js, Node.js, Axios, MongoDB, Figma</p>
                  <Link href="/"><button className={styles.button}>Voltar</button></Link>
               </section>
               <aside className={styles.lottie}>
                  <img className={styles.img} src='/images/ilustration.png' alt="devLearning" />
               </aside>
            </div>
            <div className={styles.contentContainerTeam}>
               <div className={styles.grid}>
                  <a href="https://www.linkedin.com/in/luiz-claudio-51582719a/" target='_blank'>
                     <div className={styles.card_team}>
                        <img className={styles.img} src='/images/1.png'></img>
                        <div className={styles.text}>Luiz Claudio</div>
                     </div>
                  </a>
                  <a href="https://www.linkedin.com/in/gabriellarthur/" target='_blank'>
                     <div className={styles.card_team}>
                        <img className={styles.img} src='/images/2.png'></img>
                        <div className={styles.text}>Gabriel Arthur</div>
                     </div>
                  </a>
                  <a href="https://www.linkedin.com/in/yaman-augusto-b82368210/" target='_blank'>
                     <div className={styles.card_team}>
                        <img className={styles.img} src='/images/3.png'></img>
                        <div className={styles.text}>Yaman Augusto</div>
                     </div>
                  </a>
                  <a href="https://www.linkedin.com/in/douglas-figueir%C3%B4a-alves-teixeira-1ba2541bb/" target='_blank'>
                     <div className={styles.card_team}>
                        <img className={styles.img} src='/images/4.png'></img>
                        <div className={styles.text}>Douglas Figueroa</div>
                     </div>
                  </a>
               </div>
            </div>
         </div>
         <div className={styles.linha}></div>
         <footer className={styles.footer}>
            <h2>Desenvolvido por Luiz Claudio, Yaman Augusto, Gabriel Arthur, Douglas Figueroa</h2>
         </footer>
      </>
   )
}
