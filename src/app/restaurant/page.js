'use client';
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant = () => {
    const [login, setLogin] = useState(true);
    return (
        <div className="container">
            <h1>Restaurant Login/Signup Page</h1>
            {login ? <RestaurantLogin /> : <RestaurantSignUp />}
            <div>
                <button onClick={() => setLogin(!login)} className="button-link">
                    {login ? "Don't have account? SignUp" : "Already have account? Login"}
                </button>
            </div>
        </div>
    )
}

export default Restaurant;