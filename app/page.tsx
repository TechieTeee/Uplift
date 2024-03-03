// Import necessary dependencies
import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import { Metadata } from 'next';
import styles from '/workspace/Uplift/styles/tailwind.css';
import '/workspace/Uplift/styles/global.css'; // Import the global styles
import { NEXT_PUBLIC_URL } from './config';

// Sample product data for testing
const products = [
  { id: 1, name: 'Ireti Jewlery', price: 20.99, imageUrl: '/pexels-safari-consoler-14349528.jpg' },
  { id: 2, name: 'Himalayan Co-op Monthly Subscription', price: 45.99, imageUrl: '/Himalaya_Farmer.jpg' },
];

// Hero image
const heroImage = '/pexels-hitesh-choudhary-1739842.jpg';

// Farcaster feed image
const farcasterFeedImage = '/Farcaster_Image.jpg';

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
    <div>
      {/* Header */}
      <div className="header flex justify-between items-center p-4">
        <h1 className="bebas-neue-regular text-3xl">Uplift Marketplace</h1>
        <button style={{ backgroundColor: '#ffd700', color: '#fff', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Sign In</button>
      </div>

      {/* Hero Section */}
      <div className="container my-8">
        <img src={heroImage} alt="Hero Image" className="mb-4 rounded-lg" />
      </div>

      {/* Problem Section */}
      <div className="container my-8">
        <h2 className="text-2xl font-bold mb-4">The Problem</h2>
        <p className="mb-4">
          Small business owners face high transaction fees, limiting economic stability and social impact. Uplift addresses these challenges, providing a platform for fair transactions and empowering businesses.
        </p>
      </div>

      {/* Approach Section */}
      <div className="container my-8">
        <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
        <p className="mb-4">
          Uplift leverages Farcaster and Meta to minimize transaction fees, providing economic stability and greater data control for business owners. Join us in revolutionizing the marketplace experience.
        </p>
        <div className="flex space-x-4">
          <button style={{ backgroundColor: '#ffd700', color: '#fff', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Sign In</button>
          <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>Learn More</button>
        </div>
      </div>

      {/* Uplift Farcaster Feed Section */}
      <div className="container my-8">
        <h2 className="text-2xl font-bold mb-4">Uplift Farcaster Feed</h2>
        <img src={farcasterFeedImage} alt="Farcaster Feed" className="mb-4 rounded-lg" />
        {/* Add content for Farcaster Feed */}
      </div>

      {/* Buttons for Post and Sharing */}
      <div className="container my-8">
        <div className="flex space-x-4">
          <button style={{ backgroundColor: '#ffd700', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: '1px solid #ffd700', cursor: 'pointer' }}>Post</button>
          <button style={{ backgroundColor: '#ffd700', color: '#fff', padding: '8px 16px', borderRadius: '4px', border: '1px solid #ffd700', cursor: 'pointer' }}>Share</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">Discover Unique Products</h2>

        <div className={styles.productContainer}>
          {products.map((product) => (
            <div key={product.id} className="productCard">
              <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
              <button className={styles.addToCartButton}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>&copy; 2024 Uplift Marketplace</p>
      </div>
    </div>
  );
}
