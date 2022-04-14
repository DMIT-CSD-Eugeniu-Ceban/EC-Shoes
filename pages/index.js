import Head from "next/head";

import { loadStripe } from "@stripe/stripe-js";

import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import { pane } from "./../styles/home.module.scss";

export default function Home(props) {
    const products = props.products.slice(0, 3); //change value to increase how many images you want to see on page

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="StoreFront online 2022 shoes with free shipping and gift card for each purchase."
                />
                <meta
                    name="keywords"
                    content="Shoes, EC-Shoes, Nike, Men, Women"
                />
                <title>StoreFront</title>
            </Head>
            <PageTitle tagline="product specials" title="Storefront" />
            <main className={pane}>
                {products.map((product) => (
                    <ProductCard key={product.uid} product={product} />
                ))}
            </main>
        </>
    );
}

export async function getStaticProps() {
    const res = await fetch(
        'https://storefront-55911-default-rtdb.firebaseio.com/products.json'
    );
    const productData = await res.json();
    const products = Object.values(productData);
    return {
        props: {
            products,
        },
        revalidate: 60,
    };
}

// https://storefront-55911-default-rtdb.firebaseio.com/products.json
