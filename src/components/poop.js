import React, { useState } from 'react';
import { Collapse, Button } from 'reactstrap';

const Lyricshow = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  const children = () => this.props

  return (
    <div style={{
      display: "flex",
      position: "absolute",
      justifyContent: "center",
      alignContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
     
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        {children}
      </Collapse>
    </div>
  );
}

export default Lyricshow;