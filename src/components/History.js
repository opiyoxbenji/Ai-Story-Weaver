import React from 'react';
import styles from '../scss/history.css';

function History({ question, onClick }) {
	return (
		<div className={styles.wrapper} onClick={onClick}>
			<p>{question.substring(0, 15)}...</p>
		</div>
	);
}

export default History;
