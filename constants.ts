import { Product, BlogPost, ReviewStep } from './types';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Products', path: '/products' },
  { name: 'Contact', path: '/contact' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'TechPro Elite X1 Headphones',
    category: 'Audio',
    price: 299.99,
    rating: 4.9,
    reviewsCount: 1240,
    image: 'https://picsum.photos/400/400?random=1',
    badges: ['Pickry Choice', 'Best Overall'],
    features: ['Active Noise Cancel', '30hr Battery', 'Multipoint'],
    link: '#'
  },
  {
    id: '2',
    name: 'FitTrack Ultra Smartwatch',
    category: 'Wearables',
    price: 199.50,
    rating: 4.7,
    reviewsCount: 856,
    image: 'https://picsum.photos/400/400?random=2',
    badges: ['Best Value'],
    features: ['ECG Monitor', 'Waterproof 50m', 'Sleep Tracking'],
    link: '#'
  },
  {
    id: '3',
    name: 'HomeSecure 360 Camera',
    category: 'Smart Home',
    price: 89.99,
    rating: 4.5,
    reviewsCount: 2300,
    image: 'https://picsum.photos/400/400?random=3',
    features: ['2K Resolution', 'Night Vision', 'AI Detection'],
    link: '#'
  },
  {
    id: '4',
    name: 'ErgoLift Standing Desk',
    category: 'Office',
    price: 450.00,
    rating: 4.8,
    reviewsCount: 420,
    image: 'https://picsum.photos/400/400?random=4',
    badges: ['Top Rated'],
    features: ['Dual Motor', 'Memory Presets', 'Bamboo Top'],
    link: '#'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 10 Noise Cancelling Headphones of 2024',
    excerpt: 'We tested over 50 pairs of headphones to find the absolute best silence for your commute.',
    category: 'Audio',
    image: 'https://picsum.photos/800/600?random=10',
    readTime: '8 min read',
    date: 'Oct 12, 2024',
    author: 'Sarah Jenkins',
    content: `
      <p class="lead text-xl text-gray-600 mb-6">Finding the perfect pair of noise-cancelling headphones is more than just about silencing the world around you—it's about audio fidelity, comfort during long flights, and battery life that won't let you down.</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">Why Noise Cancellation Matters</h2>
      <p class="mb-4">Active Noise Cancellation (ANC) has moved from a luxury feature to a standard expectation. Whether you're a frequent flyer trying to drown out engine drone or a remote worker needing focus, the technology has improved drastically in 2024.</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">Our Top Pick: TechPro Elite X1</h2>
      <p class="mb-4">After testing 50 different models, the <strong>TechPro Elite X1</strong> stands out as the clear winner. It offers industry-leading silence, cancelling out even high-frequency voices that other headphones struggle with.</p>
      
      <div class="bg-gray-50 border-l-4 border-brand-orange p-4 my-6">
        <h4 class="font-bold text-brand-navy">Key Features We Loved:</h4>
        <ul class="list-disc list-inside mt-2 text-gray-700">
          <li>30-hour battery life with ANC on</li>
          <li>Plush memory foam earcups</li>
          <li>Seamless multipoint bluetooth pairing</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">The Runner Up</h2>
      <p class="mb-4">Close behind is the AudioMax 500. While slightly bulkier, it offers superior bass response for hip-hop and electronic music fans.</p>
      
      <p class="mb-4">Ultimately, the choice comes down to your budget and fit preference. Check out our full comparison table below for the technical specs.</p>
    `
  },
  {
    id: '2',
    title: 'Is a Standing Desk Worth the Investment?',
    excerpt: 'Exploring the health benefits and productivity gains from switching to a sit-stand workflow.',
    category: 'Wellness',
    image: 'https://picsum.photos/800/600?random=11',
    readTime: '5 min read',
    date: 'Oct 08, 2024',
    author: 'Mike Ross',
    content: `
      <p class="lead text-xl text-gray-600 mb-6">Sedentary lifestyles are the new smoking. That's the headline we keep reading, but is buying a $500 motorized desk actually the solution?</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">The Ergonomic Argument</h2>
      <p class="mb-4">Switching between sitting and standing engages different muscle groups, improves circulation, and can help prevent the afternoon energy slump. Our testing showed that standing for just 15 minutes every hour improved focus significantly.</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">What to Look For</h2>
      <p class="mb-4">Stability is key. Many cheap standing desks wobble at their maximum height. We recommend dual-motor frames for smooth, stable adjustments.</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">Our Recommendation</h2>
      <p class="mb-4">The <strong>ErgoLift Standing Desk</strong> offers the best balance of price and performance. It's rock-solid even at 48 inches high.</p>
    `
  },
  {
    id: '3',
    title: 'Smart Home Security on a Budget',
    excerpt: 'How to secure your home for under $200 using the latest AI-powered Wi-Fi cameras.',
    category: 'Smart Home',
    image: 'https://picsum.photos/800/600?random=12',
    readTime: '6 min read',
    date: 'Oct 01, 2024',
    author: 'David Chen',
    content: `
      <p class="lead text-xl text-gray-600 mb-6">You don't need a professional installation crew and a monthly contract to keep your home safe anymore. DIY smart security is powerful and affordable.</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">Wireless is King</h2>
      <p class="mb-4">Modern cameras like the HomeSecure 360 run on batteries that last for months. This means you can place them anywhere—bookshelves, porches, or even trees—without drilling holes for wires.</p>
      
      <h2 class="text-2xl font-bold text-brand-navy mt-8 mb-4">AI Detection</h2>
      <p class="mb-4">The biggest annoyance with old cameras was false alarms. A leaf blows? Alarm. A cat walks by? Alarm. New AI chips can distinguish between people, pets, and packages.</p>
    `
  }
];

export const REVIEW_PROCESS: ReviewStep[] = [
  {
    title: 'Market Research',
    description: 'We analyze market trends and consumer feedback to select the most relevant products.',
    icon: 'search'
  },
  {
    title: 'Hands-on Testing',
    description: 'We purchase products anonymously and test them in real-world scenarios for weeks.',
    icon: 'flask'
  },
  {
    title: 'Data Analysis',
    description: 'We measure performance metrics, battery life, and durability against claims.',
    icon: 'chart'
  },
  {
    title: 'The Pickry Verdict',
    description: 'Our editors rate products based on value, performance, and user experience.',
    icon: 'award'
  }
];

export const FAQS = [
  {
    question: "How do you select products to review?",
    answer: "We choose products based on consumer popularity, new releases from trusted brands, and community requests. Our goal is to cover items that offer the best value."
  },
  {
    question: "Do brands pay you for positive reviews?",
    answer: "No. Our reviews are strictly independent. While we may earn a commission if you buy through our links, our editorial content is never influenced by affiliate partnerships."
  },
  {
    question: "How often are rankings updated?",
    answer: "We audit our top ranking lists monthly to ensure pricing, availability, and product relevance are up to date."
  },
  {
    question: "Can I suggest a product for review?",
    answer: "Absolutely! Use the contact form above to send us your suggestions. We love hearing from our readers."
  }
];