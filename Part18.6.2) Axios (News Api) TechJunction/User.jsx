import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const User = ({ imgURL, Name ,descrip,author,linkto }) => {
  return (
    <div>
      <Card style={{ width: '18rem',margin:'5px' }} className='bg-dark card'>
        <Card.Img variant="top" src={imgURL} />
        <Card.Body>
          <Card.Title>{Name}</Card.Title>
          <Card.Text>
            News Summary
          </Card.Text>
          <div className='buttonBox'>
           
            <Button className='mb-2 card info btn'>By {author}</Button>
            <Button className='mb-2 card info btn' href={linkto}  >Read Full News</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
