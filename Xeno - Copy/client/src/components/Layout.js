import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "./layout.module.css"

const Layout = ({ navbar = true, children }) => {
  return (
    <div className={styles.layoutContainer}>
      {navbar && <Navbar />}
      <div className={`container mt-3 ${styles.children}`}>{children}</div>
      <div className={styles.footerDiv}>
        <Footer/>
      </div>
    </div>
  );
};

export default Layout;
