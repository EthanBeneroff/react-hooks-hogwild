import React from "react";
import Nav from "./Nav";
import TileList from "./TileList";
import hogData from "../porkers_data";
import { useState } from "react";
import HogForm from "./HogForm";





function App() {

	const [hogs, setHogs] = useState(hogData)
	const addHog = (hog) => {setHogs([...hogData, hog])}



	return (
		<div className="App">
			<Nav />
			<HogForm addHog={addHog}/>
			<br></br>
			<TileList hogs={hogs}/>
		</div>
	);
}

export default App;
