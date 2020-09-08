import React from 'react';
import {Nav, Navbar as Navibar, NavItem, ButtonGroup , Button} from 'reactstrap';


export default function Navbar (props) {


    return (
        <Nav>
            <Navibar>
                <ButtonGroup>
                    <NavItem>
                        <Button>Home</Button>
                    </NavItem>
                    <NavItem>
                        <Button>ToDo</Button>
                    </NavItem>
                </ButtonGroup>
            </Navibar>
        </Nav>
    )
}