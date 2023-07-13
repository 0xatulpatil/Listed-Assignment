import "./App.css";
import { Login } from "./components/Login/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { Dashboard } from "./components/Dashboard/Dashboard";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<Login />} />
				<Route path="/user" element={<Navbar />}>
					<Route path="/user/dashboard" element={<Dashboard />} />
					<Route path="/user/txn" element={<>Hello from Transaction</>} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
