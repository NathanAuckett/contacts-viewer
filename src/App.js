import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ContactCard from "./components/ContactCard/ContactCard";
import Header from "./components/Header/Header";





function App() {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		getContacts();
	}, []);

	async function getContacts() {
		const result = await fetch("https://jsonplaceholder.typicode.com/users");
		const json = await result.json();
		console.log(json);
	
		setContacts(json);
	}

	

	return (
		<Container fluid className="app">
			<Container >
				<Header/>
				<Row>
					{contacts.map((e) => {
						return (
							<Row className="justify-content-center">
								<ContactCard contact={e}></ContactCard>
							</Row>)
					})}
				</Row>
			</Container>
		</Container>
	);
}

export default App;
