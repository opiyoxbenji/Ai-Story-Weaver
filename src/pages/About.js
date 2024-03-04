import React from 'react';
import '../scss/app.css';

function About() {
	return (
		<div className='about-us'>
			<h1>About Us</h1>
			<div className='team'>
				<div className='team-member'>
					<h3>**Colin Earle**</h3>
					<p>Alx Student</p>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iste esse autem dignissimos minus dolore ab eligendi asperiores assumenda deleniti.
					</p>
				</div>
				<div className='team-member'>
					<h3>**Opiyo Benjamin**</h3>
					<p>Alx Student</p>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tempora obcaecati necessitatibus molestias ullam! Veniam dolore similique, dicta officia ut ullam.
					</p>
				</div>
			</div>
			<p>
				Our goal is to **help you on your story writing journey** by
				providing tools and resources to spark your creativity and
				support you in crafting your stories.
			</p>
		</div>
	);
}

export default About;
