import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Input, message, Row } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const Login = () => {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = async (values) => {
        setLoading(true)
        try {
            const user = await axios.post("https://mern-crud-backend-qkjh.onrender.comlogin", values)
            message.success("Login successfully")
            localStorage.setItem("mern-crud-user", JSON.stringify(user.data))
            setLoading(false)
            navigate("/")
        } catch (error) {
            setLoading(false)
            message.error("Login failed")
        }
    }

    // useEffect(() => {
    //     if (localStorage.getItem("mern-crud-user")) {
    //         navigate("/")
    //     }
    // })

    return (
        <div className='login'>
            <Row justify='center' className="flex align-items-center">
                <Col lg={10} sm={24} className="bs p-5 m-5 login-form">
                    <h3>Login Page</h3>
                    <hr />
                    <Form layout="vertical"

                        onFinish={onFinish}
                    >
                        <Form.Item label="username" name="username" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Button className="mb-3" htmlType='submit'>Login</Button>
                        <br></br>
                        <Link to="/register">Not registered? Click here to register</Link>
                    </Form>
                </Col>

            </Row>
        </div>
    )
}
