import "./App.css";
import { RewardsContextProvider } from "./context/RewardsContext";
import AboutProject from "./components/Mastercraft/AboutProject";
import MastercraftIntro from "./components/Mastercraft/MastercraftIntro";
import MastercraftStats from "./components/Mastercraft/MastercraftStats";
import { NavBar } from "./components/NavBar/NavBar";
import classes from "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="wrapper">
				<RewardsContextProvider>
					<MastercraftIntro />
					<MastercraftStats />
					<AboutProject />
				</RewardsContextProvider>
			</div>
			<footer className={classes.attribution}>
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
					Frontend Mentor
				</a>
				. Coded by <a href="/">Eric Lehmann</a>.
			</footer>
		</div>
	);
}

export default App;
