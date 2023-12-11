import { getProduct } from "../../actions";
import { ProductPurchase } from "../../components/ProductPurchase";

async function Page({
  params: {id}, 
}: {
  params : {id: string}
}){
  const data = await getProduct(id)

  return <ProductPurchase data={data}/>
}

export default Page