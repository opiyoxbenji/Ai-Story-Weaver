import React from 'react';
import '../scss/app.css';

const Home = () => {
	const getMessages = async () => {
		const options = {
			method: 'POST',
			body: JSON.stringify({
				message: 'hello how are you?',
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		};
		try {
			const response = await fetch(
				'http://localhost:8000/completions',
				options
			);
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='app'>
			<section className='side-bar'>
				<button>+ New Chat</button>
				<ul className='history'>
					<li>xoxo</li>
				</ul>
				<nav>
					<p>Made by Benjamin</p>
				</nav>
			</section>
			<section className='main'>
				<h1>Story Weaver</h1>
				<ul className='feed'></ul>
				<div className='bottom-section'>
					<div className='input-container'>
						<input type='text' />
						<div id='submit' onClick={getMessages}>
							➢
						</div>
					</div>
					<p className='info'>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Dolorem, temporibus!
					</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
