import { error } from "console";

async function getData(){
  const res = await fetch('https://dummyjson.com/products',{
    cache:"no-store",
  });
  if(!res.ok){
    throw new Error("Failed to fetch data.");
  }
  return res.json();
}


export default async function Home() {
 const data = await getData();
// console.log("Data:",data);
  return (
    <>
      <h1>SAMPLE PRODUCT LIST</h1>
      {data.products.length > 0 &&
      data.products.map((product:any) =>(
        <div key={product.id}>
          <p>{product.title}</p>
        </div>
      ))}
    </>
  );
}
