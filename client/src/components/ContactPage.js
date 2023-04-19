import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle
} from "@material-ui/core";
import Card from "./Card";
import styled from 'styled-components';
import ContactForm from './ContactForm'

const uniqueElementsArray = [
  {
    type: "Cake",
    image: require(`https://d33wubrfki0l68.cloudfront.net/8ed37ff261ce617027bee44f999bc049eea1c2c3/03f89/images/uploads/2018_08_15_chocolate_oreo_cookie_ice_cream_cake_2.jpg`)
  },
  {
    type: "Naan",
    image: require(`https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/naaaaan.jpeg`)
  },
  {
    type: "BBQ",
    image: require(`https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/BBQ.jpeg`)
  },
  {
    type: "Fruit",
    image: require(`https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/fruits.jpeg`)
  },
  {
    type: "Shabu Shabu",
    image: require(`https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/Shabu-Shabu-I-2.jpg`)
  },
  {
    type: "Dim Sum",
    image: require(`https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/Dim-sum-spread-1200x854.jpg`)
  }
];

function shuffleCards(array) {
  const length = array.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  return array;
}
function ContactPage() {
  const [cards, setCards] = useState(
    shuffleCards.bind(null, uniqueElementsArray.concat(uniqueElementsArray))
  );
  const [openCards, setOpenCards] = useState([]);
  const [clearedCards, setClearedCards] = useState({});
  const [shouldDisableAllCards, setShouldDisableAllCards] = useState(false);
  const [moves, setMoves] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [bestScore, setBestScore] = useState(
    JSON.parse(localStorage.getItem("bestScore")) || Number.POSITIVE_INFINITY
  );
  const timeout = useRef(null);

  const disable = () => {
    setShouldDisableAllCards(true);
  };
  const enable = () => {
    setShouldDisableAllCards(false);
  };

  const checkCompletion = () => {
    if (Object.keys(clearedCards).length === uniqueElementsArray.length) {
      setShowModal(true);
      const highScore = Math.min(moves, bestScore);
      setBestScore(highScore);
      localStorage.setItem("bestScore", highScore);
    }
  };
  const evaluate = () => {
    const [first, second] = openCards;
    enable();
    if (cards[first].type === cards[second].type) {
      setClearedCards((prev) => ({ ...prev, [cards[first].type]: true }));
      setOpenCards([]);
      return;
    }
    // This is to flip the cards back after 500ms duration
    timeout.current = setTimeout(() => {
      setOpenCards([]);
    }, 500);
  };
  const handleCardClick = (index) => {
    if (openCards.length === 1) {
      setOpenCards((prev) => [...prev, index]);
      setMoves((moves) => moves + 1);
      disable();
    } else {
      clearTimeout(timeout.current);
      setOpenCards([index]);
    }
  };

  useEffect(() => {
    let timeout = null;
    if (openCards.length === 2) {
      timeout = setTimeout(evaluate, 300);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [openCards]);

  useEffect(() => {
    checkCompletion();
  }, [clearedCards]);
  const checkIsFlipped = (index) => {
    return openCards.includes(index);
  };

  const checkIsInactive = (card) => {
    return Boolean(clearedCards[card.type]);
  };

  const handleRestart = () => {
    setClearedCards({});
    setOpenCards([]);
    setShowModal(false);
    setMoves(0);
    setShouldDisableAllCards(false);
    // set a shuffled deck of cards
    setCards(shuffleCards(uniqueElementsArray.concat(uniqueElementsArray)));
  };

  return (
    <>
    <Contact>
    <div className="ContactPage">
      <header>
        <h3>Play the Flip card game</h3>
        <div>
          Select two cards with same content consequtively to make them vanish
        </div>
      </header>
      <div className="container">
        {cards.map((card, index) => {
          return (
            <Card
              key={index}
              card={card}
              index={index}
              isDisabled={shouldDisableAllCards}
              isInactive={checkIsInactive(card)}
              isFlipped={checkIsFlipped(index)}
              onClick={handleCardClick}
            />
          );
        })}
      </div>
      <footer>
        <div className="score">
          <div className="moves">
            <span className="bold">Moves:</span> {moves}
          </div>
          {localStorage.getItem("bestScore") && (
            <div className="high-score">
              <span className="bold">Best Score:</span> {bestScore}
            </div>
          )}
        </div>
        <div className="restart">
          <Button onClick={handleRestart} color="primary" variant="contained">
            Restart
          </Button>
        </div>
      </footer>
      <Dialog
        open={showModal}
        disableBackdropClick
        disableEscapeKeyDown
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Hurray!!! You completed the challenge
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You completed the game in {moves} moves. Your best score is{" "}
            {bestScore} moves.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleRestart} color="primary">
            Restart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </Contact>
    <ContactForm />
    </>
  );
}

export default ContactPage

const Contact = styled.div `
position: absolute;
width:100%;
height: 100%;

header {
  position: relative;
  width: 100%;
  text-align: center;
  margin-bottom: 8px;

  > div {
    font-size: 15px;
    width: 324px;
    text-align: center;
    margin: 0 auto;
  }
}

footer {
  width: 360px;
  position: relative;
  margin: 0 auto;
  padding: 10px 4px;
  margin-top: 10px;
  
  .score {
    justify-content: center;
    display: flex;

    div {
      padding: 8px
    }
  }

  .restart {
    display: flex;
    justify-content: center
  }
}

.container {
  border: 1px solid #DEDEDE;
  padding: 12px;
  box-shadow: 0 0 4px 4px #DEDEDE; 
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  align-items: stretch;
  gap: 1rem;
  margin: 0 auto;
  width: 360px;
  height: 300px;
  perspective: 100%;
  max-width: 720px;
}
}`