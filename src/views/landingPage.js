import React, { useState, useEffect } from 'react';
import taskItem from "../components/taskItem";
import { Container, Row, Col, Card } from 'react-bootstrap';
import Header from "../components/header";
import Footer from "../components/footer";

function Home({ user }) {
    const [tasks, setTasks] = useState([]);
    const [allTasks, setAllTasks] = useState([]);

    const user_id = localStorage.getItem('user_id');

    useEffect(() => {
        fetch(`http://localhost:9292/user/tasks/${user_id}`)
            .then((response) => response.json())
            .then((tasks) => {
                console.log(tasks);
                setTasks(tasks);
                setAllTasks(
                    tasks.map((task) => (
                        <Col sm={6} md={4} lg={3} key={task.id}>
                            <Card className="mb-3">
                                <Card.Body>
                                    <Card.Title>{task.name}</Card.Title>
                                    <Card.Text>{task.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                );
            });
    }, []);

    return (
        <div>
            <Header />
            <Container className="my-3">
                <Row>{allTasks}</Row>
            </Container>
            <Footer/>
        </div>
    );
}

export default Home;
