import React from 'react'
import { Row, Container, Col, CardDeck, Card, Button } from 'react-bootstrap'
import "./FeaturesJoinUs.css"

export const FeaturesJoinUs = () => (

  <>
    <Container>
      <Row className="joinRow">
        <Col xl="6" className="joinUs">
          <CardDeck className="text-center cardAlign">
            <Card className="mb-5 border-0 align-items-center">
              <Card.Body>
                <Card.Title><h2>Trying to achieve new goals?</h2></Card.Title>
                <Card.Text className="join-us-info">
                  FIT-CONNECT provides a better way for fitness enthusiasts to connect to each other. Here you can register or create your own event and find people to join you. Together We Go Further!
                </Card.Text>
                <Button variant="flat" href="/signup"> Join Us </Button>
              </Card.Body>
            </Card>
          </CardDeck>
        </Col>
        <Col xl="6">
          <div className="groupWalkDiv">
            <div className="groupWalk mt-5" alt="people-training"></div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);
