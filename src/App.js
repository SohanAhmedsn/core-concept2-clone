import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name: 'mobile', price:150000},
    {name: 'camera', price:55000},
    {name: 'laptop', price:17000},
    {name: 'watch', price:5000},
    {name: 'shoe', price:5000},
    
  ]
  return (
    <div className="App">

      {
        products.map(product => <Product name={product.name} price={product.price}></Product>)
      }
     {/* <Product name="mobile" price="15000"></Product>
     <Product name="Computer" price="700000"></Product>
     <Product name="Hand watch" price="5000"></Product>
     <Product name="Laptop" price="170000"></Product> */}
     
    </div>
  );
}
function Product(props) {
  const productStyle = {
    border: '2px solid yellow',
    borderRadius: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {props.name}</h2>
      <h4>Price: {props.price}</h4>
    </div>
  )
}

export default App;
