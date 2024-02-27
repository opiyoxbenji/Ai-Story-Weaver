import React from 'react';
import '../css/styles.css';

function Header() {
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
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a href='#about' className='nav-link'>
									About
								</a>
							</li>
							<li className='nav-item'>
								<a href='#contact' className='nav-link'>
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
