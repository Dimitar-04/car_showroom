import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';

function History() {
  const [textContents, setTextContents] = useState({});
  const [openDialog, setOpenDialog] = useState(null);
  const [dialogImage, setDialogImage] = useState(null);
  const dialogRef = useRef(null);

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
  const truncateText = (text, wordLimit = 20) => {
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
      document.body.style.overflow = 'hidden';
    }
  };
  const closeDialogText = () => {
    setOpenDialog(null);
    if (dialogRef.current) {
      dialogRef.current.close();
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <MainWrapper>
      <StyledHeader>
        <h1>History</h1>
      </StyledHeader>
      <MainContainer>
        <TextsContainer>
          {gridItems.map((item, index) => (
            <GridItem key={index}>
              <h2 onClick={() => openDialogText(item.title)}>{item.title}</h2>
              <p>
                {truncateText(textContents[item.title])}
                <span onClick={() => openDialogText(item.title)}>
                  ...Read More
                </span>
              </p>
            </GridItem>
          ))}
        </TextsContainer>
        <ImagesContainer>
          <Card>
            <h2 style={{ textAlign: 'center', color: 'var(--textColor)' }}>
              Racing
            </h2>
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
            <p>The BMW M3 GTR E46 GTR Race Version</p>
          </Card>
          <Card2>
            <h2 style={{ textAlign: 'center', color: 'var(--textColor)' }}>
              Road Legal
            </h2>
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
            <p>The road legal version of the BMW M3 GTR</p>
          </Card2>
          <Card3>
            <h2 style={{ textAlign: 'center', color: 'var(--textColor)' }}>
              24 Hours of Le Mans
            </h2>
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
            <p>The M3 GTR that raced at Le Mans</p>
          </Card3>
        </ImagesContainer>
      </MainContainer>
      <StyledDialog ref={dialogRef}>
        <DialogContainer>
          {openDialog && (
            <>
              <h1>{openDialog}</h1>
              <p>{textContents[openDialog]}</p>
              <CloseButton onClick={closeDialogText}>Close</CloseButton>
            </>
          )}
          {dialogImage && (
            <>
              <DialogImageContainer>
                <h1>{dialogImage.title}</h1>
                <DialogImage src={dialogImage.url} alt={dialogImage.caption} />
                <p>{dialogImage.caption}</p>
              </DialogImageContainer>
              <CloseButton onClick={closeDialogText}>Close</CloseButton>
            </>
          )}
        </DialogContainer>
      </StyledDialog>
    </MainWrapper>
  );
}
const DialogImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: none;
  width: 100%;
  p {
    text-align: left;
    font-family: 'Caveat', cursive;
    color: var(--textColor);
    font-size: 20px !important;
    text-align: center;
  }
`;

const DialogImage = styled.img`
  max-width: 100%;
  max-height: 400px;
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
  border-radius: 8px;
  transform: rotate(-5deg); /* Add rotation */
  /* Rotate from the center */
  margin-left: 2%;

  & > * {
    transform: rotate(0deg);
  }
  p {
    text-align: left;
    font-family: 'Caveat', cursive;
    color: grey;

    text-align: center;
  }
  img {
    transition: all 0.6s ease; /* Make it slower */
    opacity: 0.8; /* Add opacity here instead */
    width: 90%;
    height: 60%;
    border-radius: 8px;
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
  border-radius: 8px;
  transform: rotate(5deg); /* Add rotation */
  top: 35%;
  margin-left: 45%;
  & > * {
    transform: rotate(0.5deg);
  }
  p {
    text-align: left;
    font-family: 'Caveat', cursive;
    color: grey;

    text-align: center;
  }
  img {
    transition: all 0.6s ease; /* Make it slower */
    opacity: 0.8; /* Add opacity here instead */
    width: 90%;
    height: 60%;
    border-radius: 8px;
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
  border-radius: 8px;
  transform: rotate(-5deg); /* Add rotation */
  /* Rotate from the center */
  margin-left: 2%;

  & > * {
    transform: rotate(0deg);
  }
  p {
    text-align: left;
    font-family: 'Caveat', cursive;
    color: grey;

    text-align: center;
  }
  img {
    transition: all 0.6s ease; /* Make it slower */
    opacity: 0.8; /* Add opacity here instead */
    width: 90%;
    height: 60%;
    border-radius: 8px;
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow-y: hidden;
  h1 {
    margin-top: 0;
    font-style: italic;
  }

  p {
    line-height: 1.6;
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
const StyledDialog = styled.dialog`
  border: none;
  padding: 0;
  background: transparent;
  max-width: 80%;
  max-height: 80vh;
  border-radius: 8px;
  overflow: auto;
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

  &:hover {
    background-color: #0d3b5f;
  }
`;

const GridItem = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  margin-left: 10px;
  padding: 10px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transition: all 0.3s ease;
  &:hover{
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  }
  h2{
    font-style: italic;
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: #16588E;
    }
  }
  p {
    
    overflow: hidden;
    
    transition: color 0.3s ease;

    span {
      color: var(--textColor);
    }
    span:hover {
      color: #16588E;
      cursor: pointer;
  }
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
