import React from 'react';

function Home() {
	return (
		<>
			<section className='bg-dark text-light p-5 text-center'>
				<div className='container'>
					<div className='d-sm-flex'>
						<h1>
							<span className='text-warning'>
								Let your imagination run wild
							</span>
						</h1>
					</div>
					{/* <img
						class='img-fluid w-50'
						src={
							require('./images/undraw_ideation_re_8i2h.svg')
								.default
						}
						alt=''
					/> */}
				</div>
			</section>
		</>
	);
}

export default Home;
