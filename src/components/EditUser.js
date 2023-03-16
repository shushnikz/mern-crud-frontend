import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel } from '@mui/material';
import { editUser, updateUser } from '../service/api';
import { useNavigate, useParams } from 'react-router-dom';

const defaultValue = {
    name: "",
    username: "",
    email: "",
    contact: "",
    address: ""
}

export const EditUser = () => {

    const [user, setUser] = useState({ defaultValue })
    const { id } = useParams()

    const navigate = useNavigate()


    useEffect(() => {
        loadUserDetails();
    }, [])

    const loadUserDetails = async () => {
        const response = await editUser(id);
        setUser(response.data)
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }

    const editUserDetails = async () => {
        await updateUser(user, id);
        navigate("/allusers")
    }
    return (
        <div>
            <FormGroup>
                <h2>Edit User</h2>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="name" value={user.name} />
                </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="username" value={user.username} />
                </FormControl>
                <FormControl>
                    <InputLabel>Email Id</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="email" value={user.email} />
                </FormControl>
                <FormControl>
                    <InputLabel>Contact Number</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="contact" value={user.contact} />
                </FormControl>
                <FormControl>
                    <InputLabel>Address</InputLabel>
                    <Input onChange={(e) => handleChange(e)} name="address" value={user.address} />
                </FormControl>
                <div className='button'>
                    <Button variant='contained' onClick={() => editUserDetails()}>Edit User</Button>
                </div>

            </FormGroup>
        </div>
    )
}
