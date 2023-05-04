import { useState } from "react"
import Layout from "./layout";



export default function TbProducts(){
    const [products, setProduct] = useState([])
    fetch(`https://api.escuelajs.co/api/v1/products`)
    .then(res=> res.json())
    .then(items=> setProduct(items))

    const columns = [
        {
            name: 'Product Name',
            title: 'product name',
            selector: row => row.title
        },
        {
            name: 'Price',
            price: 'price',
            selector: row => row.price
        },
        {
            name: 'Category',
            category: 'category',
            selector: row => row.category
        },
        {
            name: 'Photos',
            images: 'images',
            selector: row =>
            <img src={row.images} width={50} height={50}/>
        },
        {
            name:'Action',
            cell: (row)=>(
                <>
                    <button className="btn btn-primary me-2">
                        Edit
                    </button>
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </>
            ),
        },
    ]
    function sortData(e){
        const listItem = products.filter((row)=>{
            return row.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setProduct(listItem);
    }
    return (
        <Layout product>
            <div className="container">
                <DataTable columns={columns} data={products}
                title="All Product Listing"
                pageination
                highlightOnHover
                fixedHeader
                actions={
                    <div className="Research-end">
                        <input 
                        className="rounded border-1"
                        placeholder="Find Products Here"
                        type="text"
                        onChange={sortData}
                        style={{
                            padding: 10
                        }}
                        />
                    </div>
                }
                />
            </div>
        </Layout>
    )
}