import { useState } from 'react';
import styled from 'styled-components';

function ReviewCard({ reviewObj }) {
    const { id, user, rating, text } = reviewObj
    
    return (
      <Card>
      <div className="content">
          <ul><strong>{user}</strong></ul>
          <ul>{rating}</ul>
          <ul>{text}</ul>
      </div>
      </Card>
    );
}


export default ReviewCard

const Card = styled.div`
overflow: hidden;
padding: 0.75rem; 
margin: 0.50rem;
width: 20rem;
height: auto; 
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
background: white;
opacity: 0.82; 
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;
border-radius: 5px;
}
`;


