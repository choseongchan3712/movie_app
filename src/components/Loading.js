import { PacmanLoader } from "react-spinners";
import styled from "styled-components";

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const Loading = () => {
  return <Container>
    <PacmanLoader color="crimson" />

  </Container>
};

export default Loading;
