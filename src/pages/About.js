import React from 'react'
import '../scss/app.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareXTwitter,
	faSquareInstagram,
	faSquareGithub,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';

function About() {
  return (
		<div className='team-boxed'>
			<div className='container'>
				<div className='intro'>
					<h2 className='text-center'>Our Team</h2>
					<p className='text-center'>
						Welcome to the heart of our project! We are a dynamic
						duo passionate about storytelling and weaving magical
						tales for our audience.
					</p>
				</div>
				<div className='row people'>
					<div className='col-md-6 col-lg-4 item'>
						<div className='box'>
							<img
								className='rounded-circle'
								src='assets/img/1.jpg'
								alt='Benjamin Opiyo'
							/>
							<h3 className='name'>Benjamin Opiyo</h3>
							<p className='title'>Alx Student</p>
							<p className='description'>
								Lorem ipsum, dolor sit amet consectetur
								adipisicing elit. Culpa porro maiores voluptas
								quidem dignissimos nostrum nemo soluta
								perferendis.
							</p>
							<div className='social'>
								<div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
									<a href='https://twitter.com/'>
										<FontAwesomeIcon
											icon={faSquareXTwitter}
										/>
									</a>
									<a href='https://www.instagram.com/'>
										<FontAwesomeIcon
											icon={faSquareInstagram}
										/>
									</a>
									<a href='https://github.com/'>
										<FontAwesomeIcon
											icon={faSquareGithub}
										/>
									</a>
									<a href='https://discord.com/'>
										<FontAwesomeIcon icon={faDiscord} />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='col-md-6 col-lg-4 item'>
						<div className='box'>
							<img
								className='rounded-circle'
								src='assets/img/2.jpg'
								alt='Colin Earle'
							/>
							<h3 className='name'>Colin Earle</h3>
							<p className='title'>Alx Student</p>
							<p className='description'>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Molestiae quod nostrum
								accusantium laudantium praesentium nam tempore
								velit consectetur!
							</p>
							<div className='social'>
								<div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
									<a href='https://twitter.com/'>
										<FontAwesomeIcon
											icon={faSquareXTwitter}
										/>
									</a>
									<a href='https://www.instagram.com/'>
										<FontAwesomeIcon
											icon={faSquareInstagram}
										/>
									</a>
									<a href='https://github.com/'>
										<FontAwesomeIcon
											icon={faSquareGithub}
										/>
									</a>
									<a href='https://discord.com/'>
										<FontAwesomeIcon icon={faDiscord} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
  );
}

export default About