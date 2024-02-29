import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer'
import StyledNavbar from '../components/StyledNavbar'

function Home() {
	return (
		<>
			<StyledNavbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default Home;
