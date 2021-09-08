import './App.css';
import './css/Main.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import PortfolioDetails from './pages/PortfolioDetails';


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/skills">
					<Skills />
				</Route>
				<Route exact path="/work">
					<Work />
				</Route>
				<Route exact path="/work/:id" component={PortfolioDetails} />
				<Route path="/contact">
					<Contact />
				</Route>
			</Switch>
		</Router>
	)
}


export default App;
