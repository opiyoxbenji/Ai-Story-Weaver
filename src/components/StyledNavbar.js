import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.scss';

function Navbar() {
	return (
		<>
			<nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
				<div className='container'>
					<NavLink to='/' className='navbar-brand'>
						Ai Story Weaver
					</NavLink>

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
								<NavLink
									to='/'
									className='nav-link'
									activeClassName='active'>
									Home
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									to='/about'
									className='nav-link'
									activeClassName='active'>
									About
								</NavLink>
							</li>
							<li className='nav-item'>
								<NavLink
									to='/contact'
									className='nav-link'
									activeClassName='active'>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}


export default Navbar;

// for the classcase
// className={({ isActive }) =>
// 											isActive ? 'link active' : 'link'
// 										}>
