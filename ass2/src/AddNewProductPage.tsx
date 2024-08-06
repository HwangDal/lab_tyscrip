import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const AddNewProductPage = (props) => {
    const {onHandleSubmit} = props
    const navigate = useNavigate()
    const {register,handleSubmit,reset} = useForm()
    const onAdd =(data) =>{
        onHandleSubmit(data)
        navigate("/admin/products-ProductManagementPage")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onAdd)}>
                <input type="text" placeholder='title' {...register("title")}/>
                <input type="text" placeholder='price' {...register("price")}/>
                <Button type="submit">add</Button>
            </form>
        </div>
    )
}

export default AddNewProductPage
