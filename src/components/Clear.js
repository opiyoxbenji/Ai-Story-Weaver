import React from 'react';
import styles from '../scss/clear.css';

function Clear({ onClick }) {
	return (
		<button className={styles.wrapper} onClick={onClick}>
			Clear
		</button>
	);
}

export default Clear;
