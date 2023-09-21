import logo from './logo.svg';
import './assets/style.css';
import Product from './components/Product';

function App() {

  const products = [
    {
      'title' : 'Product-1',
      'price' : '33,20',
      'description' : 'Nice Product-1'
    },
    {
      'title' : 'Product-2',
      'price' : '33,20',
      'description' : 'Awesome Product-2'
    },
    {
      'title' : 'Product-1',
      'price' : '33,20',
      'description' : 'Gummy duck Product-3'
    },
  ];

  return (
    <div className="App">
        <div>
          {products.map((item,index) => {
            return (
              <Product
              title={item.title}
              price={item.price}
              description={item.description}
              >

              </Product>
            );
          } )}

        </div>
    </div>
  );
}

export default App;
