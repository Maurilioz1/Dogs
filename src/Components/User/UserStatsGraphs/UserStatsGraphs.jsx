import React from 'react';
import styles from './UserStatsGraphs.module.css';

const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(data.map(({ acessos }) => Number(acessos)).reduce((prev, next) => prev + next, 0));
  }, [data]);

  return (
    <section className={`${styles.graph} anime-left`}>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );
};

export default UserStatsGraphs;
