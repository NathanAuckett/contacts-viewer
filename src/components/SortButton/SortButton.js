import './SortButton.css';

import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';

import SortIcon from "../../icons/sort.svg";
import DownIcon from "../../icons/down.svg";
import UpIcon from "../../icons/up.svg";
import { useState } from "react";

export default function SortButton(props){
    const [dir, setDir] = useState(1);
    function changeDir(){
        setDir(!dir);

        const temp = props.contacts.map((e) => e);
        temp.reverse();

        props.set(temp);
    }

    return (
        <Col sm={8} className="sortButton text-end">
            <Button variant="secondary" onClick={changeDir}>
                <img src={SortIcon} width="32px"></img>
            
                {dir > 0 ? <img src = {DownIcon} width="32px"></img> : <img src = {UpIcon} width="32px"></img>}
            </Button>
        </Col>
    )
}