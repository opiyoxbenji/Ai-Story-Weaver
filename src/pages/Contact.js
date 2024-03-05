import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSquareXTwitter,
	faSquareInstagram,
	faSquareGithub,
	faDiscord,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
	return (
		<>
			<div className='container'>
				<div className='text-center mt-5'>
					<h1>Let's Support Each Other's Success</h1>
				</div>

				<div className='row'>
					<div className='col-lg-7 mx-auto'>
						<div className='card mt-2 mx-auto p-4 bg-light'>
							<div className='card-body bg-light'>
								<form id='contact-form'>
									<div className='controls'>
										<div className='row'>
											<div className='col-md-6'>
												<div className='form-group'>
													<label for='form_name'>
														Firstname
													</label>
													<input
														id='form_name'
														type='text'
														name='name'
														className='form-control'
														placeholder='Enter your firstname'
														required='required'
														data-error='Firstname is required.'
													/>
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label for='form_lastname'>
														Lastname
													</label>
													<input
														id='form_lastname'
														type='text'
														name='surname'
														className='form-control'
														placeholder='Enter your lastname'
														required='required'
														data-error='Lastname is required.'
													/>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-6'>
												<div className='form-group'>
													<label for='form_email'>
														Email
													</label>
													<input
														id='form_email'
														type='email'
														name='email'
														className='form-control'
														placeholder='Enter your email'
														required='required'
														data-error='Valid email is required.'
													/>
												</div>
											</div>
											<div className='col-md-6'>
												<div className='form-group'>
													<label for='form_need'>
														Please specify your need
													</label>
													<select
														id='form_need'
														name='need'
														className='form-control'
														required='required'
														data-error='Please specify your need.'>
														<option
															value=''
															selected
															disabled>
															--Select Your
															Issue--
														</option>
														<option>
															Hallucination
														</option>
														<option>
															Server slow down
															issues
														</option>
														<option>
															Crashing issues
														</option>
														<option>Other</option>
													</select>
												</div>
											</div>
										</div>
										<div className='row'>
											<div className='col-md-12'>
												<div className='form-group'>
													<label for='form_message'>
														Message
													</label>
													<textarea
														id='form_message'
														name='message'
														className='form-control'
														placeholder='Write your message here.'
														rows='4'
														required='required'
														data-error='Please, leave us a message.'></textarea>
												</div>
											</div>
											<div className='col-md-12'>
												<input
													type='submit'
													className='btn btn-success btn-send pt-2 btn-block'
													value='Send Message'
												/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Container>
				<h3 className='socials'>Follow us on the various platforms</h3>
				<div className='singleCol social-media-icons-white d-flex justify-content-evenly'>
					<a href='https://twitter.com/'>
						<FontAwesomeIcon icon={faSquareXTwitter} />
					</a>
					<a href='https://www.instagram.com/'>
						<FontAwesomeIcon icon={faSquareInstagram} />
					</a>
					<a href='https://github.com/'>
						<FontAwesomeIcon icon={faSquareGithub} />
					</a>
					<a href='https://discord.com/'>
						<FontAwesomeIcon icon={faDiscord} />
					</a>
				</div>
			</Container>
		</>
	);
}

export default Contact;
