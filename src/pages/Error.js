import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
	return (
		<section className='section'>
			{/* <h2>404</h2>
      <p>page not found</p>
      <Link to='/'>back home</Link> */}
			<div class='d-flex align-items-center justify-content-center vh-100'>
				<div className='text-center'>
					<h1 className='display-1 fw-bold'>404</h1>
					<p className='fs-3'>
						{' '}
						<span className='text-danger'>Opps!</span> Page not found.
					</p>
					<p className='lead'>
						The page you’re looking for doesn’t exist.
					</p>
					<a href='index.html' className='btn btn-warning'>
						<Link to='/'>back home</Link>
					</a>
				</div>
			</div>
		</section>
	);
}

export default Error;
