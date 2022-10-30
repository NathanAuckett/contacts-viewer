import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from "./components/Header/Header";
import ContactCard from "./components/ContactCard/ContactCard";
import SortButton from "./components/SortButton/SortButton";





function App() {
	const [contacts, setContacts] = useState([]);
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
		<Container fluid className="app">
			<Container >
				<Header/>
				<Row className="justify-content-center">
					<SortButton contacts={contacts} set={setContacts}/>
				</Row>

				{contacts.map((e) => {
					return (
						<Row className="justify-content-center">
							<ContactCard contact={e}></ContactCard>
						</Row>)
				})}

			</Container>
		</Container>
	);
}

export default App;
