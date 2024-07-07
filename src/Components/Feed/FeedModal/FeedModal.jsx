import React from 'react';
import styles from './FeedModal.module.css';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../../Photo/PhotoContent/PhotoContent';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../redux/store/ui';

const FeedModal = () => {
  const { modal } = useSelector((state) => state.ui);
  const { loading, data, error } = useSelector((state) => state.photo);
  const dispatch = useDispatch();

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
    }
  }

  React.useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);

  if (!modal) {
    return null;
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
