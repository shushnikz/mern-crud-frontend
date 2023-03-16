import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { deleteUser, getUsers } from '../service/api';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

export const AllUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers();
        setUsers(response.data)
    }

    const deleteUsers = async (id) => {
        await deleteUser(id)
        getAllUsers()
    }

    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Contact No</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user, key) => (
                            <TableRow>
                                <TableCell>{key + 1}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.contact}</TableCell>
                                <TableCell>{user.address}</TableCell>
                                <TableCell>
                                    <Button style={{ marginRight: "5px" }} component={Link} to={`/edituser/${user._id}`}>
                                        <ModeEditIcon />
                                    </Button>
                                    <Button color='secondary' onClick={() => deleteUsers(user._id)}>
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}
