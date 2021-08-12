import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ComponentsPage from "./pages/ComponentsPage";

function App() {
	return (
		<Router>
			<Header />

			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route path="/components">
					<ComponentsPage />
				</Route>
			</Switch>

			<Footer />
		</Router>
	);
}

export default App;
