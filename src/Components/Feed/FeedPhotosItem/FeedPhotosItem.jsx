import React from 'react';
import styles from './FeedPhotosItem.module.css';
import Image from '../../Helper/Image/Image';
import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/store/ui';
import { fetchPhoto } from '../../../redux/store/photo';

const FeedPhotosItem = ({ photo }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(openModal());
    dispatch(fetchPhoto(photo.id));
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={styles.visualization}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
