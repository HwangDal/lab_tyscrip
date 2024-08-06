import React from 'react'


const ProductManagementPage = (props: any) => {
    const {p, remove} = props
    return (
        <div>
            <table>
                <thead>
                   <tr>
                        <th>Stt</th>
                        <th>TitLe</th>
                        <th>Price</th>
                        <th>Action</th>
                   </tr>
                </thead>
                <tbody>
                    {p.map((item:any,index:any) =>{
                        return(
                            <tr key={item.id}>
                                <td>{index +1}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <button onClick={()=> remove(item.id)}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ProductManagementPage
