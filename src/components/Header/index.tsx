import styles from './styles.module.scss'
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
      <Link href="/">
         <img src="/images/logo.svg" alt="DevFiusa" />
      </Link>
        <nav>
        </nav>
      </div>
    </header>
  )
}