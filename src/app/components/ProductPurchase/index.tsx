"use client"

import { ProductDetailsProps } from "@/app/actions"
import { Header } from "../Header"
import { Button, Container, HighLight, ImageContainer, InfoContainer, ProductImage, PurchaseSituation, SituationDescription } from "./styles"

interface Props {
    data: ProductDetailsProps
}

export function ProductPurchase({data} : Props){
    return(
        <Container>
            <Header />
            <InfoContainer>
                <PurchaseSituation>Compra efetuada!</PurchaseSituation>
                <ImageContainer>
                    <ProductImage src={data.imageUrl} alt="Imagem do produto"/>
                </ImageContainer>
                <SituationDescription>
                    Uhuul <HighLight>Fulano Silva</HighLight>, sua <HighLight>{data.name}</HighLight> já está a caminho da sua casa.
                </SituationDescription>
                <Button href="/">Voltar ao catálogo</Button>
            </InfoContainer>
        </Container>
    )
}