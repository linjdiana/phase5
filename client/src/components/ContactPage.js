import { useEffect, useState, useRef } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  DialogTitle
} from "@material-ui/core";
import Card from "./card";
import ContactForm from './ContactForm'

const uniqueElementsArray = [
  {
    type: "Banana Bread",
    image: "https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/sour-cream-banana-bread-8.webp"
  },
  {
    type: "Wonton Soup",
    image: "https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/wonton%20soup.jpeg"
  },
  {
    type: "Beef Noodle Soup",
    image: "https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/beef%20noodle%20soup.jpeg"
  },
  {
    type: "Cookies",
    image: "https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/JT-Chocolate-Chip-Cookies-master768.jpg"
  },
  {
    type: "Shabu Shabu",
    image: "https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/Shabu-Shabu-I-2.jpg"
  },
  {
    type: "Taiyaki",
    image: "https://raw.githubusercontent.com/linjdiana/phase5/main/project%20images/taiyaki.webp"
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
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("/contact")
//       .then((response) => response.json())
//       .then((data) => setData(data))
//       .catch((error) => console.error(error));
//   }, []);

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
    <div className="contactpage">
      <header>
        <h3>Hungry?</h3>
        <div>
          Select two cards with same food items to make them disappear
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
      <div className="emails">
      
        <a href="mailto:diana@füber.com">diana@füber.com</a><br />
        <a href="mailto:gordon@füber.com">gordon@füber.com</a><br />
        <a href="mailto:tony@füber.com">tony@füber.com</a><br />
        <a href="mailto:joon@füber.com">joon@füber.com</a><br />
        <a href="mailto:anika@füber.com">anika@füber.com</a><br />
        </div>
    </div>
    {/* <ContactForm /> */}
    </>
  );
}

export default ContactPage
