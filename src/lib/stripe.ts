import Stripe from "stripe";

const key: string = String(process.env.STRIPE_SECRET_KEY)

export const stripe = new Stripe(key,{
    apiVersion: "2023-10-16",
    appInfo:{
        name: "Ignite Shop"
    }
})