const {useState, useEffect} = require('react');
const {default: Layout} = require('../../components/layout');
import DataTable from 'react-data-table-component';
import axios from 'axios';


export default function TbProducts(){
    const [product, setProduct] = useState([])
    const [search, setSearch] = useState("");
    const [newProducts, setNewProducts] = useState([]);
    const products = async ()=>{
        const res = await axios.get(`https://api.escuelajs.co/api/v1/products/`)
        setProduct(res.data)
        setNewProducts(res.data)
    }
    

    const columns = [
        {
            name: 'Product Name',
            title: 'title',
            selector: row => row.title
        },
        {
            name: 'Price',
            price: 'price',
            selector: row => row.price
        },
        {
            name: 'Category',
            description: 'description',
            selector: row => row.description
        },
        {
            name: 'Photos',
            images: 'images',
            selector: row =>
            <img src={row.images} width={100} style={{
                borderRadius: '5px', margin: '5px',
            }} />
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

useEffect(()=>{
    products();
},[])
useEffect(()=>{
    const result = product.filter(pro=>{
        return pro.title.toLowerCase().match(search.toLowerCase());
    });
    setNewProducts(result);
},[search])

    return (
        <Layout>
            <h1 style={{marginLeft: "310px"}}>Product Collection - Table</h1>
            <div className="container mt-5">
                <DataTable columns={columns} data={newProducts}
                title="All Product Listing"
                pagination
                highlightOnHover
                fixedHeader
                actions={
                    <div className="Research-end">
                        <input 
                        className="rounded border-1"
                        placeholder="Find Products Here"
                        value={search}
                        onChange={(event)=> setSearch(event.target.value)}
                        style={{
                            width:'290px',
                            padding: '1px 10px',
                            fontSize: '20px'	
                        }}
                        />
                    </div>
                }
                />
            </div>
        </Layout>
    )
}