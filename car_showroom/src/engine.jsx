import styled from 'styled-components';

function Engine() {
  return (
    <MainWrapper>
      <Separator>
        <LightBlueDiv />
        <DarkBlueDiv />
      </Separator>
      <StyledHeader>
        <h1>Engine</h1>
      </StyledHeader>
      <DIV></DIV>
    </MainWrapper>
  );
}
const DIV = styled.div`
  background-color: #81c4ff;
  width: 100px;
  height: 100px;
  transform: translateY(50%);
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
const Separator = styled.div`
  width: 100%;
  margin-bottom: 2.5%;
`;
const LightBlueDiv = styled.div`
  background-color: #81c4ff;
  height: 2vh;
  width: 100%;
`;
const DarkBlueDiv = styled.div`
  background-color: #16588e;
  height: 2vh;
  width: 100%;
`;

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #e7222e;
  background: #e7222e;
  background: radial-gradient(
    circle,
    rgba(231, 34, 46, 1) 0%,
    rgba(102, 16, 16, 1) 100%
  );
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid black;
  text-align: center;
`;

export default Engine;
