import React from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Form from "react-bootstrap/Form"
import Modal from "react-bootstrap/Modal"
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';



export default function DeleteUser(props) {
    //props: idEvalue et nomEvaluateur
    const navigate = useNavigate();
    const handleDelete = () => {
        alert(props.id);
        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");
        // myHeaders.append("token" , "0_d578e6cafc918ef8d627d0be9a798fb890ef2e36a4dc3dbe66c21ea044a6d4ed");
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: {"evaluationId":props.id} ,
        //     redirect: 'follow'
        // };
        // console.log("id")
        // console.log(props.id)
        // console.log(props.id)
        // fetch("http://localhost:8080/evaluation/delete?evaluationId="+props.id, requestOptions)
        //     .then(navigate("/"))
 
    }

    return (
        <>
            <IconButton aria-label="delete" size="small" onClick={handleDelete}>
            <DeleteIcon fontSize="inherit" />
            </IconButton>
        </>
    );
}
