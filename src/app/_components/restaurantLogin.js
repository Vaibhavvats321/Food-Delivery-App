
const RestaurantLogin = () => {
    return (
        <>
            <h3>Login Component</h3>
            <div>
                <div className="input-wrapper">
                    <input type="email" placeholder="Enter email id" name="email" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" name="password" className="input-field"/>
                </div>
                <div className="input-wrapper">
                    <button className="button">Login</button>
                </div>
            </div>
        </>
    )
}

export default RestaurantLogin;