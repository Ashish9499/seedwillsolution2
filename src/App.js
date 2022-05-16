import "./App.css";
import Component1 from "./components/Component1";
import { UserContext } from "./context/UserContext";

export const mainStyle = {
backgroundColor: "#4E9F3D",
padding: "10px",
borderRadius: "10px",
boxShadow:
	"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
width: "200px",
margin: "auto",
};

function App() {
let data = {
	theme: "light",
	name: "Ashish",
	userId: "1",
	email: "ashuverma9499@gmail.com",
  noOfQuestionsSolved: "Cristiano Ronaldo",
  codingStreak: "Real Madrid",
};

return (
	<UserContext.Provider value={data}>
	<div className="App">
		<h2>Hello their !</h2>
		<Component1 />
	</div>
	</UserContext.Provider>
);
}

export default App;
