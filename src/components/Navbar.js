import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	return ( 
		<>
			<nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
				<div className='container'>
					<a href='#home' className='navbar-brand'>
						Ai Story Weaver
					</a>

					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navmenu'>
						<span className='navbar-toggler-icon'></span>
					</button>

					<div className='collapse navbar-collapse' id='navmenu'>
						<ul className='navbar-nav ms-auto'>
							<li className='nav-item'>
								<a href='#home' className='nav-link'>
									<Link to='/'>Home</Link>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#about' className='nav-link'>
									<Link to='/about'>About</Link>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#contact' className='nav-link'>
									<Link to='/contact'>Contact</Link>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
