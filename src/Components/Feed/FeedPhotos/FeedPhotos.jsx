import React from 'react';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';
import styles from './FeedPhotos.module.css';
import { useSelector } from 'react-redux';

const FeedPhotos = ({ setModalPhoto }) => {
  const { list } = useSelector((state) => state.feed);

  return (
    <ul className={`${styles.feed} anime-left`}>
      {list.map((photo) => (
        <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
      ))}
    </ul>
  );
};

export default FeedPhotos;
