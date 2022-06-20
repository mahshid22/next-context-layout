import Link from "next/link";
import styles from "../styles/Home.module.scss";
const NavBar = () => {
  return (
    <nav className={styles.topMenu}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#">About</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
        <li>
          <Link href="./newpost">form</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
