import styles from '../../../styles/pages.module.scss';
import { getAllWords } from '../../../redux/wordsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Word from '../../features/Word/Word';

const Home = () => {
  const words = useSelector(state => getAllWords(state));

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Home</h2>
      <div className={styles.wordsWrapper}>
        {words.map(word => <Word key={word.id} id={word.id} translation={word.translation} test1={word.test1} test2={word.test2} image={word.image}/>)}
      </div>
    </div>
  );
};

export default Home;