import FeaturedProducts from './components/grid/featuredProducts/FeaturedProducts';
import styles from './page.module.scss';
import Hero from '@/app/components/hero/Hero';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <FeaturedProducts />
    </main>
  );
}
