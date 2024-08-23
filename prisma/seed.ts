import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const recipes = [
  {
    name: 'Spaghetti Carbonara',
    servings: 4,
    prepTime: 30,
    ingredients: JSON.stringify([
      { name: 'Spaghetti', amount: 400, unit: 'grams' },
      { name: 'Eggs', amount: 3, unit: 'large' },
      { name: 'Parmesan Cheese', amount: 100, unit: 'grams' },
      { name: 'Pancetta', amount: 150, unit: 'grams' },
      { name: 'Garlic', amount: 2, unit: 'cloves' },
      { name: 'Salt', amount: 1, unit: 'teaspoon' },
      { name: 'Black Pepper', amount: 0.5, unit: 'teaspoon' },
    ]),
    instructions: 'Cook spaghetti. Fry pancetta with garlic. Mix eggs and cheese. Combine all with spaghetti.',
    imageUrl:
      'https://images.unsplash.com/photo-1633337474564-1d9478ca4e2e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Chicken Caesar Salad',
    servings: 2,
    prepTime: 20,
    ingredients: JSON.stringify([
      { name: 'Chicken Breast', amount: 2, unit: 'pieces' },
      { name: 'Romaine Lettuce', amount: 1, unit: 'head' },
      { name: 'Caesar Dressing', amount: 0.5, unit: 'cup' },
      { name: 'Croutons', amount: 1, unit: 'cup' },
      { name: 'Parmesan Cheese', amount: 50, unit: 'grams' },
      { name: 'Olive Oil', amount: 2, unit: 'tablespoons' },
      { name: 'Salt', amount: 0.5, unit: 'teaspoon' },
      { name: 'Black Pepper', amount: 0.5, unit: 'teaspoon' },
    ]),
    instructions: 'Grill chicken. Chop lettuce and combine with dressing. Top with croutons and cheese.',
    imageUrl:
      'https://images.unsplash.com/photo-1512852939750-1305098529bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Vegetable Stir Fry',
    servings: 3,
    prepTime: 25,
    ingredients: JSON.stringify([
      { name: 'Bell Peppers', amount: 2, unit: 'pieces' },
      { name: 'Broccoli', amount: 1, unit: 'head' },
      { name: 'Carrots', amount: 2, unit: 'medium' },
      { name: 'Soy Sauce', amount: 3, unit: 'tablespoons' },
      { name: 'Garlic', amount: 3, unit: 'cloves' },
      { name: 'Ginger', amount: 1, unit: 'inch' },
      { name: 'Olive Oil', amount: 2, unit: 'tablespoons' },
      { name: 'Sesame Seeds', amount: 1, unit: 'tablespoon' },
    ]),
    instructions: 'Chop vegetables and stir-fry with garlic and ginger. Add soy sauce and sesame seeds.',
    imageUrl:
      'https://images.unsplash.com/photo-1512003867696-6d5ce6835040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
]

async function seedData() {
  console.log('Seeding...')

  for (const recipe of recipes) {
    const result = await prisma.recipe.create({
      data: recipe,
    })
    console.log(`Created recipe with id: ${result.id}`)
  }

  console.log('Finished seeding.')
}

seedData()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
