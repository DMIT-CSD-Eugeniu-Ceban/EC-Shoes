import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home(props) {
    const products = props.products.slice(0, 3);  //change value to increase how many images you want to see on page
    return (
        <>
            <PageTitle tagline="product specials" title="Storefront" />
            <main /* className={pane} */>
                {products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </main>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        "https://storefront-55911-default-rtdb.firebaseio.com/products.json"
    );
    const productData = await res.json();
    const products = Object.values(productData);
    return {
        props: {
            products,
        },
        revalidate: 60,
    }
}

// https://storefront-55911-default-rtdb.firebaseio.com/products.json
