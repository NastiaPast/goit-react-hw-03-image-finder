import styled from 'styled-components';
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 310px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  border: 0;
  background-color: inherit;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  position: relative;
  left: 250px;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 45px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-right: 10px;
`;
