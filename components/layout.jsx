import NavBar from "./navBar";
import Footer from "./footer";
import styles from "../styles/Home.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
