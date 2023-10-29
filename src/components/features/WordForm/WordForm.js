import styles from './WordForm.module.scss';
import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { addWordRequest } from '../../../redux/wordsRedux';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4} from 'uuid';

const WordForm = props => {
  const dispatch = useDispatch();
  const [toggleForm, setToggleForm] = useState(false);
  const [translation, setTranslation] = useState('');
  const [tekst1, setTekst1] = useState('');
  const [tekst2, setTekst2] = useState('');
  const newId = uuidv4();
  const menuRef = useRef();
  const [toggleImagePicker, setToggleImagePicker] = useState(false);

  const formHandler = e => {
    e.preventDefault();
    const newWord = {
      id: newId,
      translation: translation,
      image: '',
      test1: tekst1,
      test2: tekst2,
      isKnown: false
    };

    dispatch(addWordRequest(newWord));
    setTekst1('');
    setTekst2('');
    setTranslation('');
  }

  useEffect(() => {
    const handler = e => {
      if(!menuRef.current.contains(e.target))
      setToggleForm(false);
    };

    document.addEventListener("mousedown", handler);
  }, []);

  const pickImageHandler = () => {
    setToggleImagePicker(!toggleImagePicker);
  }

  return (
    <>
    <form onSubmit={formHandler} ref={menuRef} className={clsx(styles.fom, toggleForm && styles.slideDown)}>
      
      <div className={styles.wrapper}>
        <div className={styles.imtra}>
          <div className={styles.text}>
            <div>
              <label>Translation: </label>
              <input type="text" value={translation} onChange={e => setTranslation(e.target.value)}/>
            </div>
            <div>
              <label>Tekst 1: </label> 
              <input type="text" value={tekst1} onChange={e => setTekst1(e.target.value)} />
            </div>
            <div>
              <label>Tekst 2: </label> 
              <input type="text" value={tekst2} onChange={e => setTekst2(e.target.value)}/>
            </div>
          </div>
          <h2>{props.translation}</h2>
          <label className={styles.image} onClick={pickImageHandler}>
            Upload image
          </label>
        </div>
        <button type="submit" className={styles.addBtn}>Add</button>
      </div>
      <div className={clsx(styles.tglButton, toggleForm && styles.buttonSlideDown)} onClick={() => setToggleForm(!toggleForm)}>
      </div>
    </form>
    </>
  );
};

export default WordForm;