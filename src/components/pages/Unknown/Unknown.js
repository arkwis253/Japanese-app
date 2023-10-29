import { getKnownWords } from "../../../redux/wordsRedux";
import Word from "../../features/Word/Word";
import { useSelector } from "react-redux";
import styles from '../../../styles/pages.module.scss';

const Unknown = () => {  
  const words = useSelector(state => state.words);
  const unknownWords = getKnownWords(words, false);

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Unknown Words</h2>
      <div className={styles.wordsWrapper}>
        {unknownWords.map(word => <Word key={word.id} id={word.id} translation={word.translation} test1={word.test1} test2={word.test2} image={word.image}/>)}
      </div>
    </div>
  );
};

export default Unknown;