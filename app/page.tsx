import styles from './page.module.css';

import Hero from '@/app/components/layout/Hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
    </main>
  );
}
