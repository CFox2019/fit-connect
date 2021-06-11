import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import differentLevels from '../../Assets/differentLevels.svg';
import findGroup from '../../Assets/findGroup.svg';
import howWeWork from '../../Assets/howWeWork.svg';
import "./Features.css";


export const Features = () => (
    <>
        <CardDeck id="features" className="text-center alignCard">
            <Card className="border-0 align-items-center">
                <Card.Img className="sizeCardImg" id="featuresImg" variant="top" src={differentLevels} />
                <Card.Body>
                    <Card.Title><h5>DIFFERENT LEVELS</h5></Card.Title>
                    <Card.Text className="feature-info">
                        FIT-CONNECT welcomes all fitness levels from beginner to advanced.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="featuresImg" variant="top" src={findGroup} />
                <Card.Body>
                    <Card.Title><h5>FIND YOUR GROUP</h5></Card.Title>
                    <Card.Text className="feature-info">
                        Look for groups based on the things that you enjoy doing or try something new!
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="border-0 align-items-center">
                <Card.Img id="featuresImg" variant="top" src={howWeWork} />
                <Card.Body>
                    <Card.Title><h5>HOW WE WORK</h5></Card.Title>
                    <Card.Text className="feature-info">
                    FIT-CONNECT provides opportunities for people to connect with others to produce results!
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardDeck>
    </>
);