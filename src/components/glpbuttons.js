import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'


const GLPbuttons = (props) => {
  return (
    <div>
        <Link rel="preload" to="/discography01" >
        <Button className="glpbutton1" >
            
                Listen To Album
            
        </Button>{' '}
        </Link>

        <a rel="preload" href="https://globallightingproject.org" >
        <Button className="glpbutton2" >
            
                Visit Global Lighting Project
            
        </Button>{' '}
        </a>
      
    </div>
  );

}

export default GLPbuttons