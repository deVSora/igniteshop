"use client"

import { ProductDetailsProps } from "@/app/actions"
import { Header } from "../Header"
import {
    Button,
    Container, ImageContainer, InfoContainer, ProductDescription, ProductImage, ProductInfoContainer, ProductName, ProductPrice,

} from "./styles"

interface Props {
    data: ProductDetailsProps
}

export function ProductDetails({data}: Props){
    return(
        <Container>
            <Header/>
            <ProductInfoContainer>
                <ImageContainer>
                    <ProductImage src={data.imageUrl} alt="Imagem do produto"/>
                </ImageContainer>
                <InfoContainer>
                    <ProductName>{data.name}</ProductName>
                    <ProductPrice>{data.price}</ProductPrice>
                    <ProductDescription>{data.description}</ProductDescription>
                    <Button href={`/${data.id}/successPurchase`}>Comprar agora</Button>
                </InfoContainer>
            </ProductInfoContainer>
        </Container>
    )
}