"use client"

import { ProductDetailsProps } from "@/app/actions"
import { Header } from "../Header"
import {
    Button,
    Container, ImageContainer, InfoContainer, ProductDescription, ProductImage, ProductInfoContainer, ProductName, ProductPrice,

} from "./styles"
import axios from "axios"
import { useState } from "react"

interface Props {
    data: ProductDetailsProps
}

export function ProductDetails({data}: Props){
    const [IsCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct(){
        try{
            setIsCreatingCheckoutSession(true)

            const response = await axios.post("/api/checkout", {
                priceId: data.defaultPriceId,
            })

            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl
        } catch(err) {

            setIsCreatingCheckoutSession(false)

            alert("fail to redirect to checkout")
        }
    }

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
                    <Button disabled={IsCreatingCheckoutSession} onClick={handleBuyProduct}>Comprar agora</Button>
                </InfoContainer>
            </ProductInfoContainer>
        </Container>
    )
}