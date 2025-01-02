import { prisma } from '../lib/db/prisma'

async function main() {
  try {
    // Erstelle ein Test-Item
    const testItem = await prisma.item.create({
      data: {
        title: 'Test Item',
        description: 'This is a test item',
        price: 9.99,
        imageUrl: 'https://example.com/image.jpg',
        category: 'currency',
        inStock: true
      }
    })
    console.log('Created test item:', testItem)

    // Hole alle Items
    const items = await prisma.item.findMany()
    console.log('All items:', items)

    // Lösche das Test-Item
    await prisma.item.delete({
      where: { id: testItem.id }
    })
    console.log('Deleted test item')

  } catch (error) {
    console.error('Error:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
