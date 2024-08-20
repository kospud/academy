import React, { } from 'react'
import styled from 'styled-components'

interface BurgerMenuButtonProps {
    isOpen: boolean;
}
const BurgerMenuButton = styled.div<BurgerMenuButtonProps>`
  width: ${({ isOpen }) => (isOpen ? '42px' : '68px')};
  height: ${({ isOpen }) => (isOpen ? '42px' : '14px')}; 
  z-index: 4;
  cursor: pointer;
  position: relative;
  //clip-path: ${({ isOpen }) => (isOpen ? 'inset(7px 0px 7px 0px)' : 'none')};
  transition: width 0.3s ease, height 0.3s ease;
  
  div {
    position: absolute;
    background-color: #dfdfdf;
    height: 2px;
    width: 100%;
    transition: top 0.3s ease, bottom 0.3s ease, transform 0.3s ease, background-color 0.1s ease;
    z-index: 4;
    border-radius: 1px;
    
    
    &:nth-child(1) {
      top: ${({ isOpen }) => (isOpen ? '20px' : '0')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0)')}; /* Поворот и сдвиг полоски */
    }
    
    &:nth-child(2) {
      bottom: ${({ isOpen }) => (isOpen ? '20px' : '0')};
      transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) ' : 'rotate(0)')}; /* Поворот и сдвиг полоски */
    }
  }
  
  &:hover {
    div {
      background-color: #adadad;
    }
  }
`;

interface BurgerMenuProps {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function BurgerMenu({ isOpen, setIsOpen }: BurgerMenuProps) {


    return (
        <BurgerMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
            <div />
            <div />
        </BurgerMenuButton>
    )
}

export default BurgerMenu