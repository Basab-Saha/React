import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const User = ({ imgURL, Name }) => {
  return (
    <div>
      <Card style={{ width: '18rem' }} className='bg-light card'>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{Name}</Card.Title>
          <Card.Text>
            User Description
          </Card.Text>
          <div className='buttonBox'>
            <Button className='mb-2 card primary btn'>Articles=32</Button>
            <Button className='mb-2 card info btn'>Followers=119</Button>
            <Button className='mb-2 card info btn'>Rating=8.2</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
