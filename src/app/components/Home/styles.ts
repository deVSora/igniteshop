import styled from "styled-components"
import Image from 'next/image'
import {theme} from "../../../lib/theme"

export const Container = styled.div`
  background-color: ${theme.background};
  max-height: 100vh;
  height: 100vh;
  padding-left: calc((100vw - 1080px) / 2);
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  overflow-x: hidden;
`;

export const CarouselContainer = styled.div.attrs(props => ({
  ...props,
})
)`
  display: flex;
`;

export const ProductDescription = styled.div`
  position: absolute;
  padding: 33px;
  width: calc(100% - 72px);
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  margin: 3px;
  left: 0;
  bottom: 0;
  opacity: 0;
  background-color: ${theme.elements};
`

export const ProductName = styled.span`
  font-weight: bold;
  color: ${theme.white};
`

export const ProductPrice = styled.span`
  font-weight: bold;
  color: ${theme.light};
`

export const CarouselItem = styled.div.attrs(props => ({
  ...props,
})
)`
  position: relative;
  height: 656px;
  background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover ${ProductDescription}{
    transform: translateY(0%);
    opacity: 1;
  }
`;


export const ProductImage = styled(Image).attrs(({
  width: 520,
  height: 480
}))`
`