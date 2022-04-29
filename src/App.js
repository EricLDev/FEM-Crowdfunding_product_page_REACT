import "./App.css";
import AboutProject from "./components/Mastercraft/AboutProject";
import MastercraftIntro from "./components/Mastercraft/MastercraftIntro";
import MastercraftStats from "./components/Mastercraft/MastercraftStats";
import { NavBar } from "./components/NavBNar/NavBar";

function App() {
	return (
		<div className="App">
			<NavBar />
			<div className="wrapper">
				<MastercraftIntro />
				<MastercraftStats />
				<AboutProject />
			</div>
		</div>
	);
}

export default App;
