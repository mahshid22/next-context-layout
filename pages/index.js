import PageHead from "@/components/Head";
import styles from "../styles/Home.module.scss";
import Layout from "@/components/layout";

export default function Home() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        Technical Task with <a href="https://nextjs.org">Next.js!</a>
      </h1>

      <div className={styles.grid}>
        <a className={styles.card}>
          <h2>Post form</h2>
          <p>
            * add top menu with next Layout
            <br />* creacte a form with MUI and handle form with react context{" "}
            <br />* then submit the form and post data to{" "}
            <span className={styles.link}>
              https://jsonplaceholder.typicode.com/posts
            </span>
            <br />
            * show result of sending the form in MUI alert
            <br />
            * save form result and dont let the user send it again with context
            <br />
            for css i use SASS(scss)
          </p>
        </a>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <PageHead header="Home Page" />
      {page}
    </Layout>
  );
};
