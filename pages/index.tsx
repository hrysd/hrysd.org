import Image from 'next/image';
import styles from './index.module.scss';

export default function Index() {
  return (
    <main className={styles.Main}>
      <header className={styles.MainHeader}>
        <h1>hrysd.org</h1>
      </header>

      <div className={styles.MainBody}>
        <section>
          <Image src='/icon.png' alt='icon' width={100} height={100} />

          <ul className={styles.MainSns}>
            <li>
              <a href='https://twitter.com/hrysd'>Twitter</a>
            </li>

            <li>
              <a href='https://github.com/hrysd'>GitHub</a>
            </li>
          </ul>
        </section>

        <section>
          <ul className={styles.MainLinks}>
            <li>
              <a href='https://docs.hrysd.org'>https://docs.hrysd.org</a>
            </li>
            <li>
              <a href='https://kanda.uno'>https://kanda.uno</a>
            </li>

            <li>
              <a href='https://kpt.hrysd.org'>https://kpt.hrysd.org</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
