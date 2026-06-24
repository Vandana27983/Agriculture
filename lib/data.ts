// Centralized seed data for the Verdant Fields site.
// In a production build this would be replaced by database queries / REST API calls.

export type ProductCategory =
  | 'Seeds'
  | 'Fertilizers'
  | 'Pesticides'
  | 'Farm Equipment'

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  price: number
  unit: string
  image: string
  shortDescription: string
  description: string
  features: string[]
  inStock: boolean
  rating: number
  featured?: boolean
}

export const categoryImages: Record<ProductCategory, string> = {
  Seeds: '/images/product-seeds.png',
  Fertilizers: '/images/product-fertilizer.png',
  Pesticides: '/images/product-pesticide.png',
  'Farm Equipment': '/images/product-equipment.png',
}

export const productCategories: {
  name: ProductCategory
  description: string
  image: string
}[] = [
  {
    name: 'Seeds',
    description: 'High-yield, certified seed varieties for every season.',
    image: categoryImages.Seeds,
  },
  {
    name: 'Fertilizers',
    description: 'Organic and mineral blends to enrich your soil.',
    image: categoryImages.Fertilizers,
  },
  {
    name: 'Pesticides',
    description: 'Responsible crop protection that safeguards your harvest.',
    image: categoryImages.Pesticides,
  },
  {
    name: 'Farm Equipment',
    description: 'Reliable machinery and tools built to last.',
    image: categoryImages['Farm Equipment'],
  },
]

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'hybrid-corn-seed-z90',
    name: 'Hybrid Corn Seed Z90',
    category: 'Seeds',
    price: 89.0,
    unit: 'per 25kg bag',
    image: categoryImages.Seeds,
    shortDescription:
      'Drought-tolerant hybrid corn with exceptional yield potential.',
    description:
      'Z90 is a premium hybrid corn seed bred for high yields and strong resistance to drought and common leaf diseases. Ideal for both rain-fed and irrigated systems, it delivers uniform germination and robust standability through to harvest.',
    features: [
      'Up to 12% higher yield than standard varieties',
      'Excellent drought tolerance',
      'Resistant to common leaf blight',
      'Certified, high-germination seed',
    ],
    inStock: true,
    rating: 4.8,
    featured: true,
  },
  {
    id: 'p2',
    slug: 'organic-wheat-seed-goldn',
    name: 'Organic Wheat Seed "Golden"',
    category: 'Seeds',
    price: 64.5,
    unit: 'per 25kg bag',
    image: categoryImages.Seeds,
    shortDescription: 'Certified organic winter wheat with superb milling quality.',
    description:
      'A certified organic winter wheat variety prized for its excellent milling and baking quality. Golden establishes quickly, tolerates cold snaps, and produces plump, protein-rich grain.',
    features: [
      'USDA certified organic',
      'High protein content',
      'Cold-hardy establishment',
      'Excellent milling quality',
    ],
    inStock: true,
    rating: 4.6,
  },
  {
    id: 'p3',
    slug: 'premium-organic-compost',
    name: 'Premium Organic Compost',
    category: 'Fertilizers',
    price: 32.0,
    unit: 'per 40L bag',
    image: categoryImages.Fertilizers,
    shortDescription: 'Nutrient-rich compost that rebuilds healthy soil.',
    description:
      'Our premium organic compost is fully matured and screened, delivering a balanced supply of nutrients and beneficial microbes. It improves soil structure, water retention, and long-term fertility.',
    features: [
      'Rich in beneficial microbes',
      'Improves water retention',
      'Slow-release nutrients',
      'OMRI listed for organic use',
    ],
    inStock: true,
    rating: 4.9,
    featured: true,
  },
  {
    id: 'p4',
    slug: 'balanced-npk-181818',
    name: 'Balanced NPK 18-18-18',
    category: 'Fertilizers',
    price: 48.0,
    unit: 'per 20kg bag',
    image: categoryImages.Fertilizers,
    shortDescription: 'All-purpose granular fertilizer for vigorous growth.',
    description:
      'A balanced, fully water-soluble NPK granular fertilizer suitable for a wide range of crops. Promotes strong root development, lush foliage, and abundant flowering and fruiting.',
    features: [
      'Balanced 18-18-18 formulation',
      'Fully water soluble',
      'Suitable for all crops',
      'Includes essential micronutrients',
    ],
    inStock: true,
    rating: 4.5,
  },
  {
    id: 'p5',
    slug: 'eco-shield-bio-pesticide',
    name: 'EcoShield Bio-Pesticide',
    category: 'Pesticides',
    price: 56.0,
    unit: 'per 5L',
    image: categoryImages.Pesticides,
    shortDescription: 'Plant-based pest control that is safe for pollinators.',
    description:
      'EcoShield is a biologically derived pest control solution that targets common crop pests while remaining gentle on beneficial insects and pollinators. Low residue and a short pre-harvest interval make it ideal for sustainable farms.',
    features: [
      'Plant-derived active ingredients',
      'Safe for pollinators when used as directed',
      'Short pre-harvest interval',
      'Low environmental residue',
    ],
    inStock: true,
    rating: 4.7,
    featured: true,
  },
  {
    id: 'p6',
    slug: 'broad-spectrum-fungicide',
    name: 'Broad-Spectrum Fungicide',
    category: 'Pesticides',
    price: 42.0,
    unit: 'per 5L',
    image: categoryImages.Pesticides,
    shortDescription: 'Protects crops against a wide range of fungal diseases.',
    description:
      'A reliable broad-spectrum fungicide that controls and prevents the most damaging fungal diseases across cereals, vegetables, and fruit. Rainfast within hours of application.',
    features: [
      'Controls a wide range of fungal diseases',
      'Preventive and curative action',
      'Rainfast in 2 hours',
      'Suitable for many crops',
    ],
    inStock: false,
    rating: 4.3,
  },
  {
    id: 'p7',
    slug: 'compact-utility-tractor-ct35',
    name: 'Compact Utility Tractor CT35',
    category: 'Farm Equipment',
    price: 18500.0,
    unit: 'per unit',
    image: categoryImages['Farm Equipment'],
    shortDescription: '35 HP all-rounder for small and mid-size farms.',
    description:
      'The CT35 is a versatile 35 HP compact tractor designed for small and mid-size operations. With a comfortable cab, easy hydraulics, and broad implement compatibility, it handles everything from tilling to hauling.',
    features: [
      '35 HP fuel-efficient diesel engine',
      '4WD with differential lock',
      'Compatible with most implements',
      'Comfortable operator station',
    ],
    inStock: true,
    rating: 4.9,
    featured: true,
  },
  {
    id: 'p8',
    slug: 'drip-irrigation-starter-kit',
    name: 'Drip Irrigation Starter Kit',
    category: 'Farm Equipment',
    price: 240.0,
    unit: 'per kit',
    image: categoryImages['Farm Equipment'],
    shortDescription: 'Everything you need to set up efficient drip irrigation.',
    description:
      'A complete drip irrigation starter kit that helps you save water and deliver nutrients directly to the root zone. Includes tubing, emitters, connectors, and a pressure regulator for up to half an acre.',
    features: [
      'Covers up to half an acre',
      'Water-saving drip emitters',
      'Includes pressure regulator',
      'Easy DIY installation',
    ],
    inStock: true,
    rating: 4.4,
  },
]

export interface Service {
  id: string
  slug: string
  title: string
  icon: 'consulting' | 'soil' | 'crop' | 'irrigation'
  image: string
  summary: string
  description: string
  benefits: string[]
}

export const services: Service[] = [
  {
    id: 's1',
    slug: 'agricultural-consulting',
    title: 'Agricultural Consulting',
    icon: 'consulting',
    image: '/images/service-consulting.png',
    summary:
      'On-farm expertise to boost productivity, profitability, and sustainability.',
    description:
      'Our agronomists work side by side with you to assess your operation and build a practical, data-driven plan. From crop selection to input optimization, we help you make confident decisions that improve your bottom line.',
    benefits: [
      'Tailored agronomic plans',
      'Input cost optimization',
      'Yield improvement strategies',
      'Year-round advisory support',
    ],
  },
  {
    id: 's2',
    slug: 'soil-testing',
    title: 'Soil Testing',
    icon: 'soil',
    image: '/images/service-soil.png',
    summary:
      'Lab-grade soil analysis with clear, actionable fertility recommendations.',
    description:
      'Understand exactly what your soil needs. Our certified lab analyzes nutrient levels, pH, and organic matter, then delivers easy-to-read reports with precise fertilizer and amendment recommendations.',
    benefits: [
      'Comprehensive nutrient analysis',
      'pH and organic matter testing',
      'Custom fertility recommendations',
      'Fast lab turnaround',
    ],
  },
  {
    id: 's3',
    slug: 'crop-management',
    title: 'Crop Management',
    icon: 'crop',
    image: '/images/service-crop.png',
    summary:
      'Season-long monitoring and precision care for healthier, higher-yielding crops.',
    description:
      'We combine scouting, drone monitoring, and precision agriculture tools to keep your crops healthy all season. Early detection of pests and stress means fewer surprises and a stronger harvest.',
    benefits: [
      'Drone and satellite monitoring',
      'Early pest and disease detection',
      'Precision input application',
      'Harvest planning support',
    ],
  },
  {
    id: 's4',
    slug: 'irrigation-planning',
    title: 'Irrigation Planning',
    icon: 'irrigation',
    image: '/images/service-irrigation.png',
    summary:
      'Efficient irrigation system design that saves water and improves yields.',
    description:
      'From drip to center-pivot, we design irrigation systems matched to your soil, crops, and water source. Smart scheduling and efficient layouts reduce waste while keeping crops perfectly hydrated.',
    benefits: [
      'Custom system design',
      'Water-use efficiency analysis',
      'Smart scheduling setup',
      'Installation guidance',
    ],
  },
]

export interface GalleryImage {
  id: string
  src: string
  alt: string
  caption: string
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/gallery-1.png',
    alt: 'Rows of vibrant green lettuce crops under a blue sky',
    caption: 'Leafy greens at our demonstration farm',
  },
  {
    id: 'g2',
    src: '/images/gallery-2.png',
    alt: 'Golden wheat field at sunset with a harvester in the distance',
    caption: 'Harvest season in the golden wheat fields',
  },
  {
    id: 'g3',
    src: '/images/gallery-3.png',
    alt: 'Ripe red tomatoes on the vine in a greenhouse',
    caption: 'Greenhouse-grown heirloom tomatoes',
  },
  {
    id: 'g4',
    src: '/images/gallery-4.png',
    alt: 'Vineyard rows on rolling hills at golden hour',
    caption: 'Hillside vineyards at golden hour',
  },
  {
    id: 'g5',
    src: '/images/gallery-5.png',
    alt: 'Hands holding freshly harvested organic carrots with soil',
    caption: 'Freshly harvested organic root vegetables',
  },
  {
    id: 'g6',
    src: '/images/gallery-6.png',
    alt: 'Sunflower field in full bloom under a bright blue sky',
    caption: 'Sunflowers in full bloom',
  },
]

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  image: string
  category: string
  tags: string[]
  author: string
  date: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'spring-planting-guide',
    title: 'The Complete Spring Planting Guide for a Strong Season',
    excerpt:
      'Set your crops up for success with our step-by-step approach to soil prep, seed selection, and early-season care.',
    content: [
      'Spring is the most important window of the growing year. The decisions you make in the first few weeks ripple through the entire season, shaping yield, resilience, and profitability.',
      'Start with your soil. A simple soil test tells you exactly what your fields need, helping you avoid both under- and over-application of nutrients. From there, choose seed varieties matched to your climate and goals.',
      'Finally, monitor closely in the early weeks. Uniform emergence, healthy color, and steady growth are the signals of a strong start. Address any issues quickly and you set the stage for a productive season.',
    ],
    image: '/images/blog-1.png',
    category: 'Crop Guides',
    tags: ['Planting', 'Soil', 'Spring'],
    author: 'Dr. Elena Marsh',
    date: '2025-03-12',
    readTime: '6 min read',
  },
  {
    id: 'b2',
    slug: 'precision-agriculture-basics',
    title: 'Precision Agriculture 101: Smarter Farming with Data',
    excerpt:
      'Sensors, drones, and analytics are transforming how farms operate. Here is how to get started without overhauling everything.',
    content: [
      'Precision agriculture is about applying the right input, in the right place, at the right time. The result is less waste, lower costs, and healthier crops.',
      'You do not need to adopt everything at once. Many farms start with a single tool, such as a soil moisture sensor or a drone survey, and expand from there as they see the value.',
      'The key is turning data into decisions. Partnering with an agronomist helps you interpret the numbers and translate them into practical actions in the field.',
    ],
    image: '/images/blog-2.png',
    category: 'Technology',
    tags: ['Precision Ag', 'Drones', 'Data'],
    author: 'Marcus Reed',
    date: '2025-02-28',
    readTime: '5 min read',
  },
  {
    id: 'b3',
    slug: 'building-healthy-soil',
    title: 'Building Healthy Soil: The Foundation of Every Harvest',
    excerpt:
      'Healthy soil is a living system. Learn the practices that rebuild fertility and protect your land for generations.',
    content: [
      'Soil is far more than dirt. A teaspoon of healthy soil contains billions of microorganisms working together to feed your crops and store water.',
      'Cover crops, reduced tillage, and organic matter additions all help rebuild soil life. Over time, these practices improve structure, fertility, and resilience to drought.',
      'Investing in soil health pays dividends. Farms with living, well-structured soil consistently weather extreme conditions better and require fewer external inputs.',
    ],
    image: '/images/blog-3.png',
    category: 'Sustainability',
    tags: ['Soil Health', 'Regenerative', 'Sustainability'],
    author: 'Dr. Elena Marsh',
    date: '2025-01-19',
    readTime: '7 min read',
  },
]

export const blogCategories = [
  'All',
  'Crop Guides',
  'Technology',
  'Sustainability',
]

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Verdant Fields helped us cut input costs by 15% while increasing our corn yield. Their agronomists genuinely care about our farm.',
    name: 'Sarah Whitfield',
    role: 'Owner, Whitfield Family Farm',
  },
  {
    id: 't2',
    quote:
      'The soil testing service was a game changer. For the first time we knew exactly what our fields needed, and the results showed.',
    name: 'James Okafor',
    role: 'Manager, Greenacre Estates',
  },
  {
    id: 't3',
    quote:
      'From seeds to irrigation planning, they are our one-stop partner. Reliable products and advice we can trust season after season.',
    name: 'Maria Gonzalez',
    role: 'Founder, Sunrise Organics',
  },
]

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Daniel Hart',
    role: 'Founder & CEO',
    image: '/images/team-1.png',
    bio: 'A third-generation farmer, Daniel founded Verdant Fields to bring modern agronomy and trusted supplies to family farms.',
  },
  {
    id: 'tm2',
    name: 'Dr. Elena Marsh',
    role: 'Head of Agronomy',
    image: '/images/team-2.png',
    bio: 'With a PhD in soil science, Elena leads our consulting and soil testing programs with a passion for sustainable yields.',
  },
  {
    id: 'tm3',
    name: 'Marcus Reed',
    role: 'Lead Agricultural Engineer',
    image: '/images/team-3.png',
    bio: 'Marcus designs precision irrigation and equipment solutions that help farms do more with less.',
  },
]

export const companyStats = [
  { value: '25+', label: 'Years of experience' },
  { value: '3,500+', label: 'Farms served' },
  { value: '120+', label: 'Product lines' },
  { value: '98%', label: 'Client retention' },
]

export interface Inquiry {
  id: string
  name: string
  email: string
  subject: string
  message: string
  date: string
  status: 'New' | 'Replied'
}

export const inquiries: Inquiry[] = [
  {
    id: 'i1',
    name: 'Tom Bradley',
    email: 'tom.bradley@example.com',
    subject: 'Bulk seed pricing',
    message: 'Do you offer volume discounts on hybrid corn seed for 200+ acres?',
    date: '2025-03-18',
    status: 'New',
  },
  {
    id: 'i2',
    name: 'Aisha Khan',
    email: 'aisha.khan@example.com',
    subject: 'Soil testing booking',
    message: 'I would like to schedule a soil test for my vegetable farm.',
    date: '2025-03-15',
    status: 'Replied',
  },
  {
    id: 'i3',
    name: 'Greenacre Estates',
    email: 'ops@greenacre.example.com',
    subject: 'Irrigation consultation',
    message: 'Looking for help designing a center-pivot system for 80 acres.',
    date: '2025-03-11',
    status: 'New',
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug)
}

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}

export interface ProductFilters {
  search?: string
  category?: ProductCategory | 'All'
  stock?: 'all' | 'in-stock' | 'out-of-stock'
  sort?: 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc' | 'rating-desc'
}

export function filterProducts(filters: ProductFilters): Product[] {
  const { search, category, stock, sort } = filters
  let result = [...products]

  if (search && search.trim()) {
    const q = search.trim().toLowerCase()
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q),
    )
  }

  if (category && category !== 'All') {
    result = result.filter((p) => p.category === category)
  }

  if (stock === 'in-stock') {
    result = result.filter((p) => p.inStock)
  } else if (stock === 'out-of-stock') {
    result = result.filter((p) => !p.inStock)
  }

  switch (sort) {
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name))
      break
    case 'name-desc':
      result.sort((a, b) => b.name.localeCompare(a.name))
      break
    case 'price-asc':
      result.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      result.sort((a, b) => b.price - a.price)
      break
    case 'rating-desc':
      result.sort((a, b) => b.rating - a.rating)
      break
  }

  return result
}

export function getRelatedProducts(product: Product, limit = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
}

export function getRelatedServices(service: Service, limit = 3): Service[] {
  return services.filter((s) => s.id !== service.id).slice(0, limit)
}

export interface BlogFilters {
  search?: string
  category?: string
}

export function filterBlogPosts(filters: BlogFilters): BlogPost[] {
  const { search, category } = filters
  let result = [...blogPosts]

  if (search && search.trim()) {
    const q = search.trim().toLowerCase()
    result = result.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    )
  }

  if (category && category !== 'All') {
    result = result.filter((p) => p.category === category)
  }

  return result.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, limit)
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
