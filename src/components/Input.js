import React from 'react';
import styles from '../scss/input.scss';

function Input({ value, onChange, onClick }) {
	return (
		<div className={styles.wrapper}>
			<input
				className={styles.text}
				placeholder='Your suggestion here...'
				value={value}
				onChange={onChange}
			/>
			<button className={styles.btn} onClick={onClick}>
				Create
			</button>
		</div>
	);
}

export default Input;
