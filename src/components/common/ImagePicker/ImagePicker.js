import styles from './ImagePicker.module.scss';
import { useSelector } from 'react-redux';
import { getAllImages } from '../../../redux/imagesRedux';
import { useState } from 'react';
import { useEffect, useRef } from 'react';
import clsx from 'clsx';

const ImagePicker = ({setSelectedImage}) => {
  const images = useSelector(state => getAllImages(state));
  const imageRef = useRef();
  const [toggleImagePicker, setToggleImagePicker] = useState(false);
  const [isImage, setIsImage] = useState(false);
  const [chosenImg, setChosenImg] = useState('');

  const toggleImageHandler = () => {
    setToggleImagePicker(!toggleImagePicker);
  }

  const pickImageHandler = e => {
   
    setChosenImg(e.target.src);
    setSelectedImage(e.target.src);
    setIsImage(true);
    toggleImageHandler();
  }

  useEffect(() => {
    const handler = e => {
      if(imageRef.current && !imageRef.current.contains(e.target))
        setToggleImagePicker(false);
    };

    document.addEventListener("mousedown", handler);
  }, []);

  return (
    <>
    <div className={styles.wrapper}>
      {!isImage ? 
        <label className={styles.uploadLabel} onClick={toggleImageHandler}>
          Upload image
        </label>
      : 
        <img className={styles.image} src={chosenImg} alt="lol" onClick={toggleImageHandler}/>}
    </div>
    {toggleImagePicker ?
    <div className={styles.charImages} ref={imageRef}>
      {images.map(image => <img key={image.id} src={`${process.env.PUBLIC_URL}/${image.url}`} alt="char" onClick={pickImageHandler}/>)}
    </div>
    : ''}
    </>
  );
};

export default ImagePicker;