"use client"

import {
    CarouselContainer,
      CarouselItem,
      Container,
      ProductDescription,
      ProductName,
      ProductPrice,
      ProductImage
} from "./styles";

import { ProductProps } from "../../actions";
import { useKeenSlider } from "keen-slider/react";
import { Header } from "../Header";
import Link from "next/link";

interface Props{
    data: ProductProps[]
}

export function Home({data}: Props) {
    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 2,
          spacing: 48,
        },
    })
      
    return (
      <Container>
        <Header/>
        <CarouselContainer className="keen-slider" ref={sliderRef}>
          {data.map(product => {
  
            return (
              <Link href={`/${product.id}`} key={product.id}>
                <CarouselItem className="keen-slider__slide">
                  <ProductImage src={product.imageUrl} alt="Product Image" />
                  <ProductDescription>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}</ProductPrice>
                  </ProductDescription>
                </CarouselItem>
              </Link>
            )
          })}
        </CarouselContainer>
      </Container>
    )
  }