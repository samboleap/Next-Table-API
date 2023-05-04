const {useState} = require('react');
const {default: Layout} = require('../../components/layout');
import DataTable from 'react-data-table-component';


export default function TbProducts(){
    const dataTable = 'https://api.escuelajs.co/api/v1/products'
    const [product, setProduct] = useState([])
    fetch(dataTable)
    .then(res=> res.json())
    .then(items=> setProduct(items))

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
        const listItem = product.filter((row)=>{
            return row.title.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setProduct(listItem);
    }
    return (
        <Layout product>
            <div className="container mt-5">
                <DataTable columns={columns} data={product}
                title="All Product Listing"
                pagination
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