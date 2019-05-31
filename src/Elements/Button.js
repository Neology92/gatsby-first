import styled from 'styled-components';

const Button = styled.button`
  color: white;
  cursor: pointer;
  background-color: #001184;
  border-radius: 4px;
  padding: 2px 30px;
  transition: transform 0.3s ease;
  height: 40px;

  &:hover {
    transform: translate3d(10px, 0, 0);
  }
`;

export default Button;
