"use client"

import { ProductPurchased } from "@/app/actions"
import { Header } from "../Header"
import { Button, Container, HighLight, ImageContainer, InfoContainer, ProductImage, PurchaseSituation, SituationDescription } from "./styles"

interface Props {
    data: ProductPurchased
}

export function ProductPurchase({data} : Props){
    return(
        <Container>
            <Header />
            <InfoContainer>
                <PurchaseSituation>Compra efetuada!</PurchaseSituation>
                <ImageContainer>
                    <ProductImage src={data.product.imageUrl} alt="Imagem do produto"/>
                </ImageContainer>
                <SituationDescription>
                    Uhuul <HighLight>{data.customerName}</HighLight>, sua <HighLight>{data.product.name}</HighLight> já está a caminho da sua casa.
                </SituationDescription>
                <Button href="/">Voltar ao catálogo</Button>
            </InfoContainer>
        </Container>
    )
}