import React from 'react';
import styles from './PhotoComments.module.css';
import { UserContext } from '../../../Contexts/UserContext';
import PhotoCommentsForm from '../PhotoCommentsForm/PhotoCommentsForm';

const PhotoComments = (props) => {
  const [comments, setComments] = React.useState(() => props.comments);

  const { login } = React.useContext(UserContext);

  const commentsSection = React.useRef(null);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul ref={commentsSection} className={styles.comments}>
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>

      {login && <PhotoCommentsForm id={props.id} setComments={setComments} />}
    </>
  );
};

export default PhotoComments;
