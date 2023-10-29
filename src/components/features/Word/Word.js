import styles from './Word.module.scss';
import { useDispatch } from 'react-redux';
import { changeWordIsKnownRequest, removeWordRequest } from '../../../redux/wordsRedux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Word = props => {
  const getWord = (words, wordId) => {
    return words.find(word => word.id === wordId);
  };
  
  const word = useSelector(state => getWord(state.words, props.id)); 
  const dispatch = useDispatch();

  const deleteHandler = e => {
    e.preventDefault();
    dispatch(removeWordRequest(word));
  }

  const checkBoxHandler = () => {
    //const updatedWord = {...word, isKnown: !word.isKnown};
    //console.log(updatedWord, word);
    dispatch(changeWordIsKnownRequest(word));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={props.image} alt="image" />
      </div>
      <h2 className={styles.translation}>{props.translation}</h2>
      <div className={styles.text}>
        <h2>{props.test2}</h2>
        <h2>{props.test1}</h2>
      </div>
      <div className={styles.buttons}>
        
        <button onClick={checkBoxHandler}>{!word.isKnown ? <label>Znam</label> : <label>Nie znam</label>}</button>
        <button className={styles.deleteBtn} onClick={e => deleteHandler(e)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default Word;