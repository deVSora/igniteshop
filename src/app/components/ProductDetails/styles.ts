import styled from "styled-components"
import Image from 'next/image'
import Link from "next/link"
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

export const ProductInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
`

export const ImageContainer = styled.div`
    width: 100%;
    height: 600px;
    margin-right: 72px;
    background: linear-gradient(180deg, #1ea483 0%, #7465d4 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const InfoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
`

export const ProductImage = styled(Image).attrs({
    width: 520,
    height: 480,
})`

`

export const ProductName = styled.h2`
    margin-top: 20px;
    margin-bottom: 0px;
    font-weight: bold;
    color: ${theme.title};
`

export const ProductPrice = styled.span`
    color: ${theme.light};
    font-size: x-large;
    margin-top: 16px;
`

export const ProductDescription = styled.span`
    margin-top: 40px;
    color: ${theme.text};
`

export const Button = styled(Link)`
    background-color: ${theme.principal};
    color: ${theme.white};
    border-radius: 8px;
    margin-top: auto;
    font-weight: bold;
    width: 100%;
    padding-block: 20px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: ${theme.light};
    }
`