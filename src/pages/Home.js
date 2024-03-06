import React from 'react';
import '../scss/app.css';

const Home = () => {
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
						<div id='submit' onClick={getMessages}>➢</div>
					</div>
					<p className='info'>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, temporibus!
					</p>
				</div>
			</section>
		</div>
	);
};

export default Home;
