import React from 'react';
import styles from './FeedModal.module.css';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhoto } from '../../../redux/store/photo';

const FeedModal = ({ photo, setModalPhoto }) => {
  const { loading, data, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPhoto(photo.id));
  }, [dispatch, photo.id]);

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
