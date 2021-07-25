const Homepage = (props) => {
  const { products } = props;
  // console.log(props);
  return (
    <ul>
      {products.map((product) => {
        return <li key={product.id}>{product.name}</li>;
      })}
    </ul>
  );
};

export async function getStaticProps(context) {
  console.log('Regenerating - GE', context);
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users/'
  ).then((res) => res.json());
  return {
    props: {
      products: response,
    },
    revalidate: 2,
  };
}

export default Homepage;
