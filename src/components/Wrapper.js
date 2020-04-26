import styled from 'styled-components';

const Wrapper = styled.main.attrs({
  role: 'main',
})`
  position: relative;
  width: 80%;
  max-width: 770px;
  word-wrap: break-word;
  margin: 0px auto;
  top: 30px;

  @media (max-width: 780px) {
    width: 90%;
    padding: 25px;
  }
`;

export default Wrapper;
