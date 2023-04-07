import { useState } from 'react';
import styled from 'styled-components';

function ChefCard({ chef }) {
    const { name, image, bio } = chef;

    return (
        <Card>
        <div class="content">
            <div class="front">
                <h1>
                    <strong>{name}</strong>
                </h1>
            <img src={image} />
            </div>
                <div class="back">
                {bio}
                </div>
            </div>
        </Card>
    );
}

const Card = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 300px;
    margin: -150px;
    float: left;
    perspective: 500px;
}

.content {
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

    transition: transform 1s;
    transform-style: preserve-3d;
}

.card:hover .content {
    transform: rotateY(180deg);
    transition: transform 0.5s;
}

.front,
.back {
    position: absolute;
    height: 100%;
    width: 100%;
    background: white;
    line-height: 300px;
    color: #03446a;
    text-align: center;
    font-size: 60px;
    border-radius: 5px;
    backface-visibility: hidden;
}

.back {
    background: #03446a;
    color: white;
    transform: rotateY(180deg);
}`;

export default ChefCard;
