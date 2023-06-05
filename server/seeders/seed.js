const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Coffee Beans' },
    { name: 'Cans' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Greenhouse Espresso',
      description:
        "NEW Peruvian house espresso produced in San Martín. Macadamia, butterscotch and white grape. Introducing our latest house espresso Greenhouse. A beautiful example of Peruvian coffee that tastes good, does good, feels good. We'll be donating 10% of each Greenhouse sale to support Treedom's global agroforestry projects and grow our very own virtual forest.",
      image: 'greenhouse.webp',
      category: categories[0]._id,
      price: 9.00,
      quantity: 500
    },
    {
      name: 'Treehouse Espresso Blend',
      description:
        "Produced by Caixa de Fruta, Rio Tambo District & Finca Santa Petrona. Lemon curd, pineapple cake, malted milk. This is our favourite blend, it brings all the consistency and loveliness that you need from an espresso blend, but it's slightly more out there an exciting than many you might have tasted before.",
      image: 'treehouse.webp',
      category: categories[0]._id,
      price: 8.50,
      quantity: 500
    },
    {
      name: 'Coffee Taster Pack',
      description:
        "Bundle of 3 x 250g Coffee Bags. Need some assistance staying awake or can't face choosing what beans to go for? Then fear not, our coffee taster pack will satisfy all of your wants and desires - just pop it in your basket and let our team choose your coffees for you.",
      image: 'pack.webp',
      category: categories[0]._id,
      price: 26.00,
      quantity: 20
    },
    {
      name: 'Aguas Claras, Colombia',
      description:
        "Produced by Jaiber Joven at Aguas Claras farm. Red apple, butterscotch and Brazil nuts. Our Aguas Claras is an Odd Kin original, the first coffee we ever sourced and roasted ourselves. This easy drinker is everything we wanted from our first Colombian coffee, so much so that after we tasted it on the cupping table we got a little bit excited, and ordered every single bean on offer from our import partners Right Side Coffee.",
      image: 'aguas.webp',
      category: categories[0]._id,
      price: 8.30,
      quantity: 50
    },
    {
      name: 'Mozonte 2.0, Nicaragua',
      description:
        "Produced in Nueva Segovia, Nicaragua. Chocolate sponge, double cream and black cherry. Last year we brought you Nicaragua Mozonte, a seriously fruity and sweet natural coffee from Luis Alberto's farm in Nueva Segovia. This year, we're kicking things off with a new Nicaraguan coffee from Luis - Mozonte 2.0! ",
      image: 'nicaragua.webp',
      category: categories[0]._id,
      price: 10.80,
      quantity: 100
    },
    {
      name: 'Popayán, Colombia (Decaf)',
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: 'decaf.webp',
      category: categories[0]._id,
      price: 18.50,
      quantity: 30
    },
    {
      name: 'Minor Figures - Iced Oat Latte',
      description:
        "12 x 200ml cans. Iced Oat Latte in a can from Minor Figures.",
      image: 'minor-figures.jpg',
      category: categories[1]._id,
      price: 22.00,
      quantity: 30
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Emily',
    lastName: 'Larkin',
    email: 'emily@email.com',
    password: 'password1',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Zehra',
    lastName: 'Dastan',
    email: 'zehra@email.com',
    password: 'password1'
  });

  console.log('users seeded');

  process.exit();
});
