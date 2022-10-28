import styles from '../styles/Layout.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="blogger.png" className={styles.logo} alt="company logo" />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
