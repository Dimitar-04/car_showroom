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
  const AUTO_SCROLL_INTERVAL = 10000;
  const AUTO_SCROLL_RESUME_DELAY = 15000;
  const autoScrollIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const gridItems = [
    {
      title: 'A Racing Icon',
      file: '/texts/A Racing Icon.txt',
    },
    { title: 'V8 Power', file: `/texts/V8 Power.txt` },
    {
      title: 'Banned for Dominance',
      file: '/texts/Banned for Dominance.txt',
    },
    {
      title: 'The Ultimate Rarity',
      file: '/texts/The Ultimate Rarity.txt',
    },
  ];

  useEffect(() => {
    const loadTextFile = async (file) => {
      try {
        const response = await fetch(file);
        if (!response.ok) throw new Error('File not found');
        const text = await response.text();
        console.log(text);
        return text;
      } catch (error) {
        console.error('Failed to load text file:', error);
        return 'Error loading file.';
      }
    };

    const loadAllFiles = async () => {
      const contents = {};
      for (let item of gridItems) {
        contents[item.title] = await loadTextFile(item.file);
        if (item.file === 'The Ultimate Rarity.txt') {
          contents[item.title] = await loadTextFile('A Racing Icon.txt');
        }
      }
      setTextContents(contents);
    };
    loadAllFiles();
  }, []);

  const openDialogImage = (imageUrl, caption, title) => {
    setDialogImage({ url: imageUrl, caption: caption, title: title });
    setOpenDialog(null);
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };
  // Start auto-scroll
  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) return; // already running
    autoScrollIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gridItems.length);
    }, AUTO_SCROLL_INTERVAL);
  }, [gridItems.length]);

  // Stop auto-scroll
  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  // On user interaction, stop auto-scroll and schedule resume
  const handleUserInteraction = useCallback(() => {
    stopAutoScroll();

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, AUTO_SCROLL_RESUME_DELAY);
  }, [startAutoScroll, stopAutoScroll]);

  // Wheel scroll handler with pause/resume integrated
  const handleWheelScroll = useCallback(
    (event) => {
      event.preventDefault();

      handleUserInteraction(); // pause auto scroll and set resume timer

      if (scrollTimeoutRef.current || gridItems.length === 0) {
        return;
      }

      const timeoutDuration = 700;

      if (event.deltaY < 0) {
        // Scroll up
        setCurrentIndex((prevIndex) => {
          // infinite scroll upwards
          const newIndex =
            prevIndex === 0 ? gridItems.length - 1 : prevIndex - 1;
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
          // infinite scroll downwards
          const newIndex = (prevIndex + 1) % gridItems.length;
          if (newIndex !== prevIndex) {
            scrollTimeoutRef.current = setTimeout(() => {
              scrollTimeoutRef.current = null;
            }, timeoutDuration);
          }
          return newIndex;
        });
      }
    },
    [gridItems.length, handleUserInteraction]
  );

  useEffect(() => {
    const container = scrollableContainerRef.current;

    const wheelListener = (e) => handleWheelScroll(e);

    if (container) {
      container.addEventListener('wheel', wheelListener, { passive: false });
    }

    // Start auto scroll on mount
    startAutoScroll();

    return () => {
      if (container) {
        container.removeEventListener('wheel', wheelListener);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      stopAutoScroll();
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
      document.body.style.overflow = ''; // reset any overflow lock on unmount
    };
  }, [handleWheelScroll, startAutoScroll, stopAutoScroll]);

  return (
    <MainWrapper>
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
                <h2>{item.title}</h2>
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
            </>
          )}
          {dialogImage && (
            <>
              <DialogImageContainer>
                <h1>{dialogImage.title}</h1>
                <DialogImage src={dialogImage.url} alt={dialogImage.caption} />
                <p>{dialogImage.caption}</p>
              </DialogImageContainer>
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
  align-items: flex-start;
  overflow: hidden;
  margin-top: 2%;
  h2 {
    color: rgb(255, 252, 252);

    font-size: 55px;
    margin-bottom: 15px;
    transition: color 0.3s ease;
  }
`;

const RollerWrapper = styled.div`
  width: 100%;
  transition: transform 0.75s ease-in-out;
`;
const ScrollableTextItemContainer = styled.div`
  width: 50%;
  height: 750px;
  overflow: hidden;
  position: relative;
  margin-top: 8%;
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
  max-height: 400px;
  object-fit: contain;
`;
const Card3 = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  z-index: 11;
  top: 80%;

  @media (min-width: 1600px) {
    top: 65%;
  }

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
    margin-top: 5%;
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
    margin-top: 5%;
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
    margin-top: 5%;
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
  width: 100%;
  max-width: 800px;
  max-height: 100vh;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: hidden;
  h1 {
    margin-top: 0;
    color: rgba(8, 27, 46, 1);
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
  overflow: hidden;
  &::backdrop {
    background-color: rgba(255, 255, 255, 0.8);
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
  background-color: rgba(8, 27, 46, 1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  position: absolute;
  left: 10px;
  bottom: 10px;
  &:hover {
    background-color: #0d3b5f;
  }
`;

const Paragraph = styled.p`
  color: white;
  font-size: 32px; /* Adjusted for space */
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

  margin-bottom: 1.5%;
  margin-left: 2%;
`;
const ImagesContainer = styled.div`
  width: 42%;
  height: 110vh;
  margin-top: 4%;
  margin-left: 2%;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* Correct property with hyphen */
  scrollbar-width: none;
`;
const MainWrapper = styled.div`
  position: relative;

  background: rgb(8, 27, 46);
  width: 100%;
  height: 180vh;
  @media (min-width: 1600px) {
    height: 130vh;
  }
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
`;

export default History;
