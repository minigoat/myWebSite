import React from 'react';
import { connect } from 'dva';
import styles from './portal.css';

const Portal = ({ dispatch, portal }) => {
  function handleDelete(id) {
    dispatch({
      type: 'portal/delete',
      payload: id,
    })
  }

  console.log('portal', portal);
  console.log('styles', styles);
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Hello World!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        {portal.list.map(item => 
              <li key={item.id}>Name:{item.name};<button onClick={() => handleDelete(item.id)}>删除</button></li>
        )}
      </ul>
    </div>
  );
}

Portal.propTypes = {
};

export default connect(({ portal }) => {
  return { portal };
})(Portal);