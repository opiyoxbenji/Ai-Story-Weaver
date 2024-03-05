import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.scss'; // Import your SCSS file to apply custom styles

function Error() {
	return (
		<section className='section'>
			<div className='d-flex align-items-center justify-content-center vh-100'>
				<div className='error text-center'>
					<h1 className='display-1 fw-bold'>404</h1>
					<p className='fs-3'>
						{' '}
						<span className='text-danger'>Oops!</span> Page not
						found.
					</p>
					<p className='lead'>
						The page you’re looking for doesn’t exist.
					</p>
					{/* Apply custom styles for the link */}
					<Link to='/' className='custom-link'>
						Back Home
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Error;
