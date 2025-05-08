import styled from 'styled-components';

function Engine() {
  return (
    <MainWrapper>
      <h1>ENGINE</h1>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;

  width: 100%;
  height: 100vh;
  border-bottom: 1px solid black;
  text-align: center;
`;

export default Engine;
