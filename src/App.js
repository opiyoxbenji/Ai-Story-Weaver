import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
	return (
		<BrowserRouter>
			<nav><Header /></nav>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contact />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
