import React from 'react';
import { useState } from 'react';
import '../scss/app.scss';

import Message from '../components/Message';
import Input from '../components/Input';
import History from '../components/History';
import Clear from '../components/Clear';

function Home() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [history, setHistory] = useState([]);

	const handleSubmit = async () => {
		const prompt = {
			role: 'user',
			content: input,
		};

		setMessages([...messages, prompt]);

		await fetch('https://api.openai.com/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				model: 'gpt-3.5-turbo',
				messages: [...messages, prompt],
			}),
		})
			.then(data => data.json())
			.then(data => {
				const res = data.choices[0].message.content;
				setMessages(messages => [
					...messages,
					{
						role: 'assistant',
						content: res,
					},
				]);
				setHistory(history => [
					...history,
					{ question: input, answer: res },
				]);
				setInput('');
			});
	};

	const clear = () => {
		setMessages([]);
		setHistory([]);
	};

	return <div className='App'></div>;
}

export default Home;
