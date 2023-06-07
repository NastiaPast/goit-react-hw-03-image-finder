import styled from 'styled-components';
export const Item = styled.li`
  width: 330px;
  height: 210px;
  cursor: pointer;
  transition: transform 0.3s;
  flex-basis: calc((100% - 60px) / 4);
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
