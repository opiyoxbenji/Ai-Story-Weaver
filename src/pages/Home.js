import React from 'react';
import { useState } from 'react';
import '../scss/index.scss';

import Message from '../components/Message';
import Input from '../components/Input';
import History from '../components/History';
import Clear from '../components/Clear';

function Home() {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([]);
	const [history, setHistory] = useState([]);

	return (
		<>
			<div className='app'>
				<div className='Column'>
					<h3 className='Title'>Chat Messages</h3>
					<div className='Content'>
						{messages.map((el, i) => {
							return (
								<Message
									key={i}
									role={el.role}
									content={el.content}
								/>
							);
						})}
					</div>
				</div>
			</div>
			{/* <section className='text-light p-5 text-center text-sm-start'>
				<div className='container'>
					<div className='d-sm-flex flex-column align-items-center'>
						<h1 className='heading'>
							Let your imagination run wild
						</h1>
						<p className='quotes '> "Dream big, think creative."</p>
					</div>
				</div>
			</section> */}
		</>
	);
}

export default Home;
