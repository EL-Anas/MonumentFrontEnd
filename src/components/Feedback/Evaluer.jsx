import React from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { useState } from "react";



export default function Evaluer (props) {
  //props: idEvalue et nomEvaluateur
  const [value, setValue] = useState(0);
  const [comment,setComment]=useState("");
  const[nom,setNom]=useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => { 
    var evaluation = JSON.stringify({
      "note":value,
      "commentaire":comment,
      "editeur":{
        "id":props.id,
        "nomComplet":nom
    },
});
var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: evaluation,
    redirect: 'follow'
};
console.log(evaluation)
fetch("http://localhost:8080/evaluation/add?monumentId="+props.idMonument, requestOptions)
.then(handleClose)

}

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Evaluer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Evaluation du monument</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Typography component="legend">Note</Typography>
          <Rating
            name="simple-controlled"
            value={value}
            precision={0.5}
            onChange={(event, newValue) => {
            setValue(newValue);
        }}
        />
            <Form.Group onChange={(e) => setNom(e.target.value)}
              className="mb-3"
              controlId="exampleForm.ControlText"
            >
              <Form.Label>Nom</Form.Label>
              <Form.Control as="text" rows={3} />
            </Form.Group>
            <Form.Group onChange={(e) => setComment(e.target.value)}
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Commentaire</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Soumettre
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }
