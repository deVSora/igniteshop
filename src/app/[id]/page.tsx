import { getProduct } from "../actions";
import {ProductDetails} from "../components/ProductDetails";

async function Page({
  params: {id}, 
}: {
  params : {id: string}
}){
  const data = await getProduct(id)

  return <ProductDetails data={data}/>
}

export default Page