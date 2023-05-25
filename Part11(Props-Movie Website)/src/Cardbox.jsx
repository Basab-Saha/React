import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardbox(props) {
  return (
    <Card style={{ width: '18rem' }} className='bg-dark text-white'>
      <Card.Img variant="top"  width={250}
        height={250} src={props.img} />
      <Card.Body>
        <Card.Title className='text-warning'>{props.title}</Card.Title>
        <Card.Text>
          {props.info}
        </Card.Text>
        <Button variant="primary" href={props.link}>Watch Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardbox;