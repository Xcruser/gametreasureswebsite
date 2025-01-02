import { prisma } from '../lib/db/prisma'
import { Category } from '@prisma/client'

interface SeedItem {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: Category;
  inStock: boolean;
}

const items: SeedItem[] = [
  // Currency Items
  {
    title: '6,000 Coins',
    description: 'Get 6,000 in-game coins instantly',
    price: 19.99,
    imageUrl: '/images/coins.jpg', // Platzhalter-Bild
    category: 'currency',
    inStock: true
  },
  {
    title: '10,000 Coins',
    description: 'Get 10,000 in-game coins instantly',
    price: 24.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '15,000 Coins',
    description: 'Get 15,000 in-game coins instantly',
    price: 29.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '20,000 Coins',
    description: 'Get 20,000 in-game coins instantly',
    price: 39.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '30,000 Coins',
    description: 'Get 30,000 in-game coins instantly',
    price: 59.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '40,000 Coins',
    description: 'Get 40,000 in-game coins instantly',
    price: 69.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '50,000 Coins',
    description: 'Get 50,000 in-game coins instantly',
    price: 85.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '60,000 Coins',
    description: 'Get 60,000 in-game coins instantly',
    price: 94.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },
  {
    title: '70,000 Coins',
    description: 'Get 70,000 in-game coins instantly',
    price: 104.99,
    imageUrl: '/images/coins.jpg',
    category: 'currency',
    inStock: true
  },

  // Booster Items
  {
    title: 'Top Bar',
    description: 'Unlock the exclusive Top Bar feature',
    price: 32.99,
    imageUrl: '/images/top-bar.jpg',
    category: 'booster',
    inStock: true
  },
  {
    title: 'Top Bar + 10,000 Coins',
    description: 'Get Top Bar access and 10,000 coins bundle',
    price: 39.99,
    imageUrl: '/images/top-bar-coins.jpg',
    category: 'booster',
    inStock: true
  },

  // Special Items
  {
    title: 'Top Bar & Side Event + 13,000 Coins',
    description: 'Ultimate bundle with Top Bar, Side Event access and 13,000 coins',
    price: 46.99,
    imageUrl: '/images/special-bundle.jpg',
    category: 'special',
    inStock: true
  },
]

async function main() {
  try {
    // Lösche alle existierenden Items
    await prisma.item.deleteMany()
    console.log('🗑️ Deleted all existing items')

    // Füge neue Items hinzu
    const createdItems = await Promise.all(
      items.map(item => 
        prisma.item.create({
          data: item
        })
      )
    )
    console.log(`✅ Successfully seeded ${createdItems.length} items`)

    // Zeige alle erstellten Items
    console.log('\nCreated items:')
    createdItems.forEach(item => {
      console.log(`- ${item.title}: ${item.price}€ (${item.category})`)
    })

  } catch (error) {
    console.error('Error seeding database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
