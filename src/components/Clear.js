import React from 'react';
import styles from '../scss/clear.scss';

function Clear({ onClick }) {
	return (
		<button className={styles.wrapper} onClick={onClick}>
			Clear
		</button>
	);
}

export default Clear;
 