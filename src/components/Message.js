import React from 'react';

import bot from '../icons/bot.png';
import user from '../icons/user.png';
import styles from '../scss/message.scss';

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
