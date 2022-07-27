import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';

import "./Shipping.css";

const Shipping = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;

        fetch(`https://ema-john-node-mongo-server.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.insertedId) {
                    alert("Your ordered Successfully");
                    clearTheCart();
                    reset();
                }
            })
        console.log(data);
    };
    const { user } = useAuth();
    return (
        <div className='shipping-form'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className='error'>This field is required</span>}
                <input defaultValue="" placeholder='your address' {...register("address")} />
                <input defaultValue="" placeholder='your city' {...register("city")} />
                <input defaultValue="" placeholder='your phone' {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;