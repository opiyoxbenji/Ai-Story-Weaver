import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

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
									<NavLink
										to='/'
										style={({ isActive }) => {
											return {
												color: isActive
													? 'purple'
													: 'grey',
											};
										}}>
										Home
									</NavLink>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#about' className='nav-link'>
									<NavLink
										to='/about'
										style={({ isActive }) => {
											return {
												color: isActive
													? 'purple'
													: 'grey',
											};
										}}>
										About
									</NavLink>
								</a>
							</li>
							<li className='nav-item'>
								<a href='#contact' className='nav-link'>
									<NavLink
										to='/contact'
										style={({ isActive }) => {
											return {
												color: isActive
													? 'purple'
													: 'grey',
											};
										}}>
										Contact
									</NavLink>
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

// for the classcase
// className={({ isActive }) =>
// 											isActive ? 'link active' : 'link'
// 										}>
