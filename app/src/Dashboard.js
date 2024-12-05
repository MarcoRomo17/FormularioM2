import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'
import { FileEarmarkBarGraphFill, PeopleFill } from 'react-bootstrap-icons';
import axios from "axios";
export const Dashboard = () => {

    const [metrics, setMetrics] = useState({
        numerOfQuestionnaires:0,
        numberOfUsers:0
    });

    const [user, setUser] = useState({});

    useEffect(() => {
        getUser()
        getMetrics()
    }, []);

    const getUser = () => {
        const user = JSON.parse(localStorage.user);
        setUser(user);
    }
    const getMetrics=async()=>{
        try {
            const res = await axios.get("http:localhost:4000/questionnaires/get-metrics");
            const data ={
                numerOfQuestionnaires: res.data.numerOfQuestionnaires,
                numberOfUsers: res.data.numberOfUsers,
            }
            setMetrics(data)
        } catch (error) {
            
        }
    }



    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Bienvenido de nuevo {user.name} </Card.Title>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de usuarios registrados: </Card.Title>
                                    <PeopleFill /> {metrics.numberOfUsers}
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Numero de cuestionarios creados: </Card.Title>
                                    <FileEarmarkBarGraphFill /> {metrics.numerOfQuestionnaires}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
    )
}
