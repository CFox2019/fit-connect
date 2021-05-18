import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./FirstSection.css"

export const FirstSection = () => (

    <>
        <Container>
            <Row id="marginRow">
                <Col xl="6" className="parent">
                    <CardDeck className="text-center cardAlign">
                        <Card className="mb-5 border-0 align-items-center">
                            <Card.Body>
                                <Card.Title><h2>Find the right of group of
                            people, with the right workout!</h2></Card.Title>
                                <Card.Text className="text">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.
                            </Card.Text>
                                <Button variant="flat" size="" href="/signup"> Join Us </Button>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Col>
                <Col xl="6">
                    <div className="img0Div">
                        <div className="img0 mt-5" alt="people-training"></div>
                    </div>
                </Col>

            </Row>

        </Container>
    </>
);