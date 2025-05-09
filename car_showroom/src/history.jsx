import { useEffect, useState, useRef, useCallback } from 'react';
import styled, { css } from 'styled-components'; // Import css

const ITEM_CARD_HEIGHT_NUMERIC = 700;
const ITEM_CARD_HEIGHT_CSS = `700px`;
function History() {
  const [textContents, setTextContents] = useState({});
  const [openDialog, setOpenDialog] = useState(null);
  const [dialogImage, setDialogImage] = useState(null);
  const dialogRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // State for current item index
  const scrollableContainerRef = useRef(null); // Ref for the scrollable div
  const scrollTimeoutRef = useRef(null);
  const gridItems = [
    {
      title: 'The Legend of the E46 M3 GTR',
      file: 'The Legend of the E46 M3 GTR.txt',
    },
    { title: "Rare Collector's Dream", file: `Rare Collectors Dream.txt` },
    {
      title: 'Racing Legacy That Defined an Era',
      file: 'Racing Legacy That Defined an Era.txt',
    },
    {
      title: 'From the Track to the Streets',
      file: 'From the Track to the Streets.txt',
    },
    {
      title: "Symbol of BMW's Motorsport Excellence",
      file: `Symbol of BMWs Motorsport Excellence.txt`,
    },
    {
      title: 'An Icon That Transcends Generations',
      file: 'An Icon That Transcends Generations.txt',
    },
  ];

  useEffect(() => {
    const loadTextFile = async (file) => {
      const encodedFile = encodeURIComponent(file);
      const response = await fetch(`../src/assets/${encodedFile}`);
      const text = await response.text();

      return text;
    };

    const loadAllFiles = async () => {
      const contents = {};
      for (let item of gridItems) {
        contents[item.title] = await loadTextFile(item.file);
      }
      setTextContents(contents);
    };
    loadAllFiles();
  }, []);
  const truncateText = (text, wordLimit = 30) => {
    if (!text) return '';
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ');
  };

  const openDialogText = (title) => {
    setOpenDialog(title);
    setDialogImage(null);
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = 'hidden';
    }
  };
  const openDialogImage = (imageUrl, caption, title) => {
    setDialogImage({ url: imageUrl, caption: caption, title: title });
    setOpenDialog(null);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  const closeDialogByButton = () => {
    setOpenDialog(null);
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };
  const handleWheelScroll = useCallback(
    (event) => {
      event.preventDefault();

      if (scrollTimeoutRef.current || gridItems.length === 0) {
        return;
      }

      const timeoutDuration = 700;

      if (event.deltaY < 0) {
        // Scroll up
        setCurrentIndex((prevIndex) => {
          const newIndex = Math.max(0, prevIndex - 1);
          if (newIndex !== prevIndex) {
            scrollTimeoutRef.current = setTimeout(() => {
              scrollTimeoutRef.current = null;
            }, timeoutDuration);
          }
          return newIndex;
        });
      } else if (event.deltaY > 0) {
        // Scroll down
        setCurrentIndex((prevIndex) => {
          const newIndex = Math.min(gridItems.length - 1, prevIndex + 1);
          if (newIndex !== prevIndex) {
            scrollTimeoutRef.current = setTimeout(() => {
              scrollTimeoutRef.current = null;
            }, timeoutDuration);
          }
          return newIndex;
        });
      }
    },
    [gridItems.length]
  );

  useEffect(() => {
    const container = scrollableContainerRef.current;

    const wheelListener = (e) => handleWheelScroll(e);

    if (container) {
      container.addEventListener('wheel', wheelListener, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', wheelListener);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
    };
  }, [handleWheelScroll]);

  return (
    <MainWrapper>
      <StyledHeader>
        <h1>HISTORY</h1>
      </StyledHeader>
      <MainContainer>
        <ScrollableTextItemContainer ref={scrollableContainerRef}>
          <RollerWrapper
            style={{
              transform: `translateY(-${
                currentIndex * ITEM_CARD_HEIGHT_NUMERIC
              }px)`,
            }}
          >
            {gridItems.map((item) => (
              <TextItemCard key={item.file}>
                {' '}
                <h2 onClick={() => openDialogText(item.title)}>{item.title}</h2>
                <Paragraph>
                  {textContents[item.title] || 'Loading...'}
                </Paragraph>
              </TextItemCard>
            ))}
          </RollerWrapper>
          {gridItems.length === 0 && (
            <p style={{ color: 'white', textAlign: 'center' }}>
              No history items to display.
            </p>
          )}
        </ScrollableTextItemContainer>
        <ImagesContainer>
          {/* Card components remain the same */}
          <Card>
            <img
              src="../src/assets/sliki/racing.jpg"
              onClick={() =>
                openDialogImage(
                  '../src/assets/sliki/racing.jpg',
                  'The BMW M3 GTR E46 GTR Race Version',
                  'Racing'
                )
              }
              style={{ marginTop: '20px' }}
            />
            <h2
              style={{
                textAlign: 'center',
                color: 'var(--textColor)',
                fontSize: '1.3em',
              }}
            >
              Racing
            </h2>
          </Card>
          <Card2>
            <img
              src="../src/assets/sliki/road-legal.jpg"
              onClick={() =>
                openDialogImage(
                  '../src/assets/sliki/road-legal.jpg',
                  'The road legal version of the BMW M3 GTR (Left)',
                  'Road Legal'
                )
              }
              style={{ marginTop: '20px' }}
            />
            <h2
              style={{
                textAlign: 'center',
                color: 'var(--textColor)',
                fontSize: '1.3em',
              }}
            >
              Road Legal
            </h2>
          </Card2>
          <Card3>
            <img
              src="../src/assets/sliki/europe-lemans.jpg"
              onClick={() =>
                openDialogImage(
                  '../src/assets/sliki/europe-lemans.jpg',
                  'The M3 GTR that raced at Le Mans',
                  '24 Hours of Le Mans'
                )
              }
              style={{ marginTop: '20px' }}
            />
            <h2
              style={{
                textAlign: 'center',
                color: 'var(--textColor)',
                fontSize: '1.3em',
              }}
            >
              24 Hours of Le Mans
            </h2>
          </Card3>
        </ImagesContainer>
      </MainContainer>
      <StyledDialog ref={dialogRef}>
        <DialogContainer>
          {openDialog && (
            <>
              <h1>{openDialog}</h1>
              <p>{textContents[openDialog]}</p>
              <CloseButton onClick={closeDialogByButton}>Close</CloseButton>
            </>
          )}
          {dialogImage && (
            <>
              <DialogImageContainer>
                <h1>{dialogImage.title}</h1>
                <DialogImage src={dialogImage.url} alt={dialogImage.caption} />
                <p>{dialogImage.caption}</p>
              </DialogImageContainer>
              <CloseButton onClick={closeDialogByButton}>Close</CloseButton>
            </>
          )}
        </DialogContainer>
      </StyledDialog>
    </MainWrapper>
  );
}
const TextItemCard = styled.div`
  height: ${ITEM_CARD_HEIGHT_CSS};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Or 'center' if you prefer
  overflow: hidden;
  h2 {
    color: rgb(16, 61, 99);
    cursor: pointer;
    font-size: 1.8em;
    margin-bottom: 15px;
    transition: color 0.3s ease;
    &:hover {
      color: #16588e;
    }
  }
`;

const RollerWrapper = styled.div`
  width: 100%;
  transition: transform 0.75s ease-in-out; // Adjust timing and easing as desired
`;
const ScrollableTextItemContainer = styled.div`
  width: 50%;
  height: 700px;
  overflow: hidden;
  position: relative;
  margin-top: 50px;
`;
const DialogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: none;
  overflow-y: hidden;
  height: 80vh;
  width: 100%;
  p {
    text-align: left;

    color: var(--textColor);
    font-size: 20px !important;
    text-align: center;
  }
`;

const DialogImage = styled.img`
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;

  border-radius: 8px;
`;
const Card3 = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  z-index: 11;
  top: 60%;
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  transform: rotate(-5deg); /* Add rotation */
  /* Rotate from the center */
  margin-left: 2%;

  & > * {
    transform: rotate(0deg);
  }
  p {
    text-align: left;

    color: grey;

    text-align: center;
  }
  img {
    transition: all 0.6s ease; /* Make it slower */
    opacity: 0.8; /* Add opacity here instead */
    width: 90%;
    height: 60%;

    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.05) rotate(-1deg); /* Keep the counter-rotation when scaling */
    opacity: 1;
  }
`;
const Card2 = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 0;
  z-index: 1;
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  transform: rotate(5deg); /* Add rotation */
  top: 35%;
  margin-left: 45%;
  & > * {
    transform: rotate(0.5deg);
  }
  p {
    text-align: left;

    color: grey;

    text-align: center;
  }
  img {
    transition: all 0.6s ease; /* Make it slower */
    opacity: 0.8; /* Add opacity here instead */
    width: 90%;
    height: 60%;

    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.05) rotate(2deg); /* Keep the counter-rotation when scaling */
    opacity: 1;
  }
`;
const Card = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;

  position: absolute;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  transform: rotate(-5deg); /* Add rotation */
  /* Rotate from the center */
  margin-left: 2%;

  & > * {
    transform: rotate(0deg);
  }
  p {
    text-align: left;

    color: grey;

    text-align: center;
  }
  img {
    transition: all 0.6s ease; /* Make it slower */
    opacity: 0.8; /* Add opacity here instead */
    width: 90%;
    height: 60%;

    object-fit: cover;
    margin-left: auto;
    margin-right: auto;
  }

  img:hover {
    cursor: pointer;
    transform: scale(1.05) rotate(-1deg); /* Keep the counter-rotation when scaling */
    opacity: 1;
  }
`;
const DialogContainer = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 100%;
  max-width: 800px;
  max-height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: hidden;
  h1 {
    margin-top: 0;
    font-style: italic;
  }

  p {
    line-height: 1.6;
    font-size: 18px;
  }
`;
const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  background: transparent;
  max-width: 80%;
  max-height: 80vh;
  border-radius: 8px;
  overflow: hidden;
  &::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  -ms-overflow-style: none; /* Correct property with hyphen */
  scrollbar-width: none;
`;
const CloseButton = styled.button`
  padding: 8px 16px;
  background-color: #16588e;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  left: 6px;
  bottom: 4px;
  &:hover {
    background-color: #0d3b5f;
  }
`;

const Paragraph = styled.p`
  color: black;
  font-size: 16px; /* Adjusted for space */
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.5; /* Adjusted for space */
  overflow: hidden; /* Ensures paragraph itself clips if text is still too long */
  /* The height will be determined by the truncated text content.
     TextItemCard's overflow:hidden is the final gatekeeper. */
`;

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 150px;
  margin-bottom: 1.5%;
  margin-left: 2%;
`;
const TextsContainer = styled.div`
  width: 58%;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: 1fr 1fr;
  gap: 50px;
`;
const ImagesContainer = styled.div`
  width: 42%;
  height: 130vh;
  margin-left: 2%;
  margin-bottom: 13%;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* Correct property with hyphen */
  scrollbar-width: none;
`;
const MainWrapper = styled.div`
  position: relative;

  background: var(--primaryBackgroundColor);
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;
const StyledHeader = styled.div`
  position: absolute;

  width: 100vw;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
    font-size: 57px;
    color: var(--textColor);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export default History;
