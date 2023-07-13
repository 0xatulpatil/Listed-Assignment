import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAFGMijQetTeVlXyb2p4sMOpPo8vfTTo3I",
	authDomain: "listed-c1c9e.firebaseapp.com",
	projectId: "listed-c1c9e",
	storageBucket: "listed-c1c9e.appspot.com",
	messagingSenderId: "238080664617",
	appId: "1:238080664617:web:8cc24eba656aac3b396838",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
