import { getKnownWords } from "../../../redux/wordsRedux";
import Word from "../../features/Word/Word";
import { useSelector } from "react-redux";
import styles from '../../../styles/pages.module.scss';

const Known = () => {  
  const words = useSelector(state => state.words);
  const knownWords = getKnownWords(words, true);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Known Words</h2>
      <div className={styles.wordsWrapper}>
        {knownWords.map(word => <Word key={word.id} id={word.id} translation={word.translation} test1={word.test1} test2={word.test2} image={word.image}/>)}
      </div>
    </div>
  );
};

export default Known;