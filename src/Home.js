
const Home = () => {

    // Create a component with 2 input fields and a button.
    // When the button is clicked, the input fields should be reset.

    const input = 
    <div className="container">
        <input type="text" placeholder="Enter Weight" />
        <input type="text" placeholder = "Enter Height" />
        <button>Calculate</button>
    </div>

    return input;
}

export default Home;