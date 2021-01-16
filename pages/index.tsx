import Image from 'next/image';
import styles from './index.module.scss';

import Emoji from '../components/Emoji';

export default function Index() {
  return (
    <main className={styles.Main}>
      <header className={styles.MainHeader}>
        <h1>@hrysd</h1>
      </header>

      <div className={styles.MainBody}>
        <section className={styles.MainProfile}>
          <Image src='/icon.png' alt='icon' width={100} height={100} />

          <ul>
            <li>
              <a href='https://twitter.com/hrysd' target='_blank' rel='noopener'>Twitter</a>
            </li>

            <li>
              <a href='https://github.com/hrysd' target='_blank' rel='noopener'>GitHub</a>
            </li>
          </ul>
        </section>

        <section className={styles.MainURLs}>
          <p>
            <Emoji emoji='👇' />
            ブログとか
            <Emoji emoji='👇' />
          </p>

          <ul>
            <li>
              <Emoji emoji='✒' />
              <a href='https://docs.hrysd.org' target='_blank' rel='noopener'>https://docs.hrysd.org</a>
            </li>
            <li>
              <Emoji emoji='🖥' />
              <a href='https://kanda.uno' target='_blank' rel='noopener'>https://kanda.uno</a>
            </li>

            <li>
              <Emoji emoji='🖥' />
              <a href='https://kpt.hrysd.org' target='_blank' rel='noopener'>https://kpt.hrysd.org</a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  )
}
