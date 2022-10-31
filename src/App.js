import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import ContactCard from "./components/ContactCard/ContactCard";
import SortButton from "./components/SortButton/SortButton";


function App() {
	const [contacts, setContacts] = useState([]);
	const [search, setSearch] = useState("");
	
	function searchHandleChange(event){
        setSearch(event.target.value);
    }

	useEffect(() => {
		getContacts();
	}, []);

	async function getContacts() {
		const result = await fetch("https://jsonplaceholder.typicode.com/users");
		const json = await result.json();

		json.sort((a, b) => a.name.localeCompare(b.name));
	
		setContacts(json);
	}
	

	return (
		<Container fluid h={100} className="app">
			<Container>
				<Header/>

				<Row className="justify-content-center">
					<Search value={search} handleChange={searchHandleChange}/>
					<SortButton contacts={contacts} set={setContacts}/>
				</Row>

				{/* <Row className="justify-content-center">
					
				</Row> */}

				{contacts.map((e) => {
					if (search == ""){ //No search input
						return (
							<Row className="justify-content-center">
								<ContactCard contact={e}></ContactCard>
							</Row>
						)
					}
					else{ //If search has text input
						if (e.name.toLowerCase().includes(search.toLowerCase())){
							return (
								<Row className="justify-content-center">
									<ContactCard contact={e}></ContactCard>
								</Row>
							)
						}
					}
				})}

			</Container>
		</Container>
	);
}

export default App;
