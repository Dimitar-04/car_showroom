import styled from 'styled-components';

function Engine() {
  return (
    <MainWrapper>
      <h1>Engine</h1>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: lightblue;
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid black;
  text-align: center;
`;
export default Engine;
