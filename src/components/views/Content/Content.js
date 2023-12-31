import styles from './Content.module.scss';

const Content = (props) => {
  return(
    <div className={styles.content}>{props.children}</div>
  );
};

export default Content;