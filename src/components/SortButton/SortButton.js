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
        <Col xs={4} sm={3} md={2} lg={2} className="sortButton text-end">
            <Button variant="secondary" onClick={changeDir}>
                <img src={SortIcon} width="34px" className='filter-white'></img>
            
                {dir > 0 ? <img src = {DownIcon} width="25px" className='filter-white'></img> : <img src = {UpIcon} width="25px" className='filter-white'></img>}
            </Button>
        </Col>
    )
}