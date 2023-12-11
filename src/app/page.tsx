import { getProducts } from "./actions";
import {Home} from "./components/Home";

async function Page(){
  const data = await getProducts()

  return <Home data={data} />
}

export default Page