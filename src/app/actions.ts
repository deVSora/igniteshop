import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

export interface ProductProps{
    id: string,
    name: string,
    imageUrl: string,
    price: any,
}

export interface ProductDetailsProps{
    id: string,
    name: string,
    imageUrl: string,
    price: any,
    description: string,
    defaultPriceId: string
}

export interface ProductPurchased{
    customerName: string,
    product: {
        name: string,
        imageUrl: string
    }
}

export async function getProducts() {
    const response = await stripe.products.list({
        expand: ['data.default_price']
    })

    const products: ProductProps[] = response.data.map( product => {
        const price = product.default_price as Stripe.Price

        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {
                style: "currency",
                currency: "BRL",
            }).format(price.unit_amount ? price.unit_amount / 100 : 0),
        }
    })

    return products
}

export async function getProduct(id: string) {
    const product = await stripe.products.retrieve( id, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    const data: ProductDetailsProps = {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
            style: "currency",
            currency: "BRL",
        }).format(price.unit_amount ? price.unit_amount / 100 : 0),
        description: String(product.description),
        defaultPriceId: price.id
    }

    return data
}

export async function getPurchase(sessionId: string) {

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName: string = String(session.customer_details?.name)
    const productId = session.line_items?.data[0].price?.product as Stripe.Product

    const product = await getProduct(String(productId.id))

    const data: ProductPurchased = {
        customerName,
        product:{
            name: product.name,
            imageUrl: product.imageUrl
        }
    }

    return data
}