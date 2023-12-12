import Image from "next/image";
import Link from "next/link";
import styled from "styled-components"
import {theme} from '../../../lib/theme'

export const Container = styled.div`
  background-color: ${theme.background};
  max-height: 100vh;
  height: 100vh;
  padding-left: calc((100vw - 1080px) / 2);
  padding-right: calc((100vw - 1080px) / 2);
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: hidden;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 400px;
    margin-inline: auto;
    margin-bottom: auto;
`

export const PurchaseSituation = styled.h2`
    color: ${theme.title};
    margin-bottom: 0px;
`

export const ImageContainer = styled.div`
    margin-top: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    height: 150px;
    width: 125px;
    border-radius: 8px;
`

export const ProductImage = styled(Image).attrs({
    width: 110,
    height: 105,
})`

`

export const SituationDescription = styled.span`
    color: ${theme.text};
    text-align: center;
    font-size: large;
    margin-top: 32px;
`

export const HighLight = styled.span`
    font-weight: bold;
`

export const Button = styled(Link)`
    margin-top: 86px;
    color: ${theme.principal};
    text-decoration: none;
    font-weight: bold;

    &:hover{
        color: ${theme.light};
    }
`