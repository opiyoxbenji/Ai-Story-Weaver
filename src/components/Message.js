import React from 'react';

import bot from '../components/icons/bot1.png';
import user from '../components/icons/user.png';
import styles from '../scss/message.css';

function Message({ role, content }) {
	return (
		<div className={styles.wrapper}>
			<div>
				<img
					src={role === 'assistant' ? bot : user}
					className='{styles.avatar}'
					alt='profile avatar'
				/>
			</div>
			<div>
				<p>{content}</p>
			</div>
		</div>
	);
}

export default Message;
