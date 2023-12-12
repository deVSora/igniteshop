import { getPurchase } from "../actions";
import { ProductPurchase } from "../components/ProductPurchase";
import { redirect } from 'next/navigation';

async function Page({
  searchParams,
}: {
  searchParams?: {
    session_id?: string;
  };
}){

  if(!searchParams?.session_id){ 
    return redirect("/")
  }

  const data = await getPurchase(String(searchParams?.session_id))

  return <ProductPurchase data={data}/>
}

export default Page