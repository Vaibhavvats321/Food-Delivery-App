const RestaurantSignUp = () => {
    return (
        <>
           <h3>SignUp Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="name" placeholder="Enter restaurant name" name="name" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="email" placeholder="Enter email id" name="email" className="input-field"/>
                </div>
                 <div className="input-wrapper">
                    <input type="phone" placeholder="Enter phone number" name="phone" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" name="password" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter Confirm password" name="c_password" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter city" name="city" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter full address" name="address" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <button className="button">SignUp</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantSignUp;