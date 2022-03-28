import styles from "./article.module.css";

export default function DocumentHead({ article_content }) {
  return <div className={styles.article} dangerouslySetInnerHTML={{ __html: article_content }} />;
}
