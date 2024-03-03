import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';
import styles from '/workspace/Uplift/styles/tailwind.css';
import { NEXT_PUBLIC_URL } from './config';

// Sample product data for testing
const products = [
  { id: 1, name: 'Ireti Jewlery', price: 20.99, imageUrl: '/pexels-safari-consoler-14349528.jpg' },
  { id: 2, name: 'Himalayan Co-op Monthly Subscription', price: 45.99, imageUrl: '/Himalaya_Farmer.jpg' },
];

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Story time!',
    },
    {
      action: 'link',
      label: 'Link to Google',
      target: 'https://www.google.com',
    },
    {
      label: 'Redirect to pictures',
      action: 'post_redirect',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a boat story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
});

export const metadata: Metadata = {
  title: 'Uplift',
  description: 'LFG',
  openGraph: {
    title: 'Uplift',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Uplift</h1>

      <div className={styles.productContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
