import React, { useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';

const defaultValue = {
    name: "",
    username: "",
    email: "",
    contact: "",
    address: ""
}

export const AddUser = () => {

    const [user, setUser] = useState({ defaultValue })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const handleClick = async () => {
        await addUser(user)
        navigate("/allusers")
    }
    return (
        <div>
            <FormGroup>
                <h2>Add User</h2>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="name" />
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="username" />
                </FormControl>
                <FormControl>
                    <InputLabel>Email Id</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="email" />
                </FormControl>
                <FormControl>
                    <InputLabel>Contact Number</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="contact" />
                </FormControl>
                <FormControl>
                    <InputLabel>Address</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="address" />
                </FormControl>
                <div className='button'>
                    <Button variant='contained' onClick={() => handleClick()}>Add User</Button>
                </div>

            </FormGroup>
        </div>
    )
}
