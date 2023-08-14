import React from 'react'
import Card from 'react-bootstrap/Card';

const cad = () => {
  return (
    <div>
         <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
          <Card.Text>
            <h3>This my Card1</h3>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
     
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
          <Card.Text>
          <h3>This my Card2</h3>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      <br />
     
      <Card>
        <Card.Body>
          <Card.Text>
          <h3>This my Card3</h3>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <Card.Img variant="bottom" src="holder.js/100px180" />
      </Card>
    </div>
  )
}
 
export default cad
