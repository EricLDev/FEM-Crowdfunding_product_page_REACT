import "./App.css";
import { RewardsContextProvider } from "./components/context/RewardsContext";
import AboutProject from "./components/Mastercraft/AboutProject";
import MastercraftIntro from "./components/Mastercraft/MastercraftIntro";
import MastercraftStats from "./components/Mastercraft/MastercraftStats";
import { NavBar } from "./components/NavBar/NavBar";

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
		</div>
	);
}

export default App;
