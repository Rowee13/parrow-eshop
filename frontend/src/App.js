import { Container } from "react-bootstrap";
import { HashRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";

function App() {
	return (
		<HashRouter>
			<Header />
			<main className="py-3">
				<Container>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route
							path="/product/:id"
							element={<ProductScreen />}
						/>
						<Route path="/cart" element={<CartScreen />} />
						<Route path="/cart/:id" element={<CartScreen />} />
					</Routes>
				</Container>
			</main>
			<Footer />
		</HashRouter>
	);
}

export default App;
