const productsData = [
  {
    itemName: 'LINNMON / ADILS',
    itemImage:
      'https://www.ikea.com/in/en/images/products/linnmon-adils-table-white__0737165_pe740925_s5.jpg?f=xxs',
    itemPrice: '2,990',
    itemDescription: 'Table, 100x60 cm (39 3/8x23 5/8 ")'
  },
  {
    itemName: 'TORALD',
    itemImage:
      'https://www.ikea.com/in/en/images/products/torald-desk-white__1055403_pe847976_s5.jpg?f=xxs',
    itemPrice: '10,000',
    itemDescription: 'Desk, 65x40 cm (25 5/8x15 3/4 ")'
  },
  {
    itemName: 'SANDSBERG',
    itemImage:
      'https://www.ikea.com/in/en/images/products/sandsberg-table-black__1074348_pe856162_s5.jpg?f=xxs',
    itemPrice: '11,000',
    itemDescription: 'Table, 110x67 cm (43 1/4x26 3/8 ")'
  },

  {
    itemName: 'RIAN',
    itemImage:
      'https://www.ikea.com/in/en/images/products/rian-side-table-white__0773142_pe756200_s5.jpg?f=xxs',
    itemPrice: '12,000',
    itemDescription: 'Side table, 50x30 cm (19 5/8x11 3/4 ")'
  },
  {
    itemName: 'LAGKAPTEN / ALEX',
    itemImage:
      'https://www.ikea.com/in/en/images/products/lagkapten-alex-desk-white-black-brown__0977484_pe813613_s5.jpg?f=xxs',
    itemPrice: '9,990',
    itemDescription: 'Desk, 120x60 cm (47 1/4x23 5/8 ")'
  },
  {
    itemName: 'LAGKAPTEN / ADILS',
    itemImage:
      'https://www.ikea.com/in/en/images/products/lagkapten-adils-desk-white__0976080_pe812978_s5.jpg?f=xxs',
    itemPrice: '4,490',
    itemDescription: 'Desk, 140x60 cm (55 1/8x23 5/8 ")'
  },
  {
    itemName: 'LACK',
    itemImage:
      'https://www.ikea.com/in/en/images/products/lack-coffee-table-black-brown__57540_pe163122_s5.jpg?f=xxs',
    itemPrice: '2,690',
    itemDescription: 'Coffee table, 90x55 cm (35 3/8x21 5/8 ")'
  }
]
const topCategories = [
  {
    name: 'Dining Table',
    image: 'dining-room-332207_640.jpg',
    description: 'Explore products in this category.',
    price: 1000
  },
  {
    name: 'Cabinet',
    image: 'closet-3532936_640.jpg',
    description: 'Explore products in this category.',
    price: 2000
  },
  {
    name: 'Sofa',
    image: 'living-room-2569325_640.jpg',
    description: 'Explore products in this category.',
    price: 3000
  },
  {
    name: 'Bed',
    image: 'bed-1839183_640.jpg',
    description: 'Explore products in this category.',
    price: 4000
  }
]

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100
  const discountedPrice = originalPrice - discountAmount
  return discountedPrice
}

function createProductCard(product) {
  const productContainer = document.getElementById('productContainer')

  const card = document.createElement('div')
  card.className =
    'bg-white p-6 rounded-lg shadow-md justify-center items-center'

  const image = document.createElement('img')
  image.src = product.itemImage
  image.alt = product.name
  image.className = 'mb-4 rounded-md flex flex-wrap'

  const title = document.createElement('h3')
  title.className = 'text-xl font-bold mb-2'
  title.textContent = product.itemName

  const description = document.createElement('p')
  description.className = 'text-gray-700'
  description.textContent = product.itemDescription

  const originalPrice = document.createElement('p')
  originalPrice.className = 'text-gray-500 line-through'
  originalPrice.textContent = `Original Price: ${product.itemPrice}`

  const discountPrice = document.createElement('p')
  discountPrice.className = 'text-green-500 font-bold'

  const itemPrice = parseFloat(product.itemPrice.replace(/,/g, ''))

  if (!isNaN(itemPrice)) {
    const discountedPriceValue = calculateDiscountedPrice(itemPrice, 10)
    discountPrice.textContent = `Discount Price: ${discountedPriceValue.toFixed(
      2
    )}`
  }

  const exploreButton = document.createElement('a')
  exploreButton.href = '#'
  exploreButton.className =
    'mt-4 inline-block bg-stone-700 text-white px-2 py-1 rounded hover:bg-stone-500 no-underline'
  exploreButton.textContent = 'Explore'

  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(description)
  card.appendChild(originalPrice)
  card.appendChild(discountPrice)
  card.appendChild(exploreButton)

  productContainer.appendChild(card)

  toggleSectionsVisibility()
}

productsData.forEach(product => createProductCard(product))

function toggleSectionsVisibility() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase()

  // Assuming bannerSection and specialOffersSection are elements in your HTML
  const bannerSection = document.getElementById('productListingSection')
  const headingSection = document.getElementById('headingSection')
  const categorySection = document.getElementById('catagory')

  if (bannerSection) {
    bannerSection.style.display = searchTerm ? 'none' : 'block'
    headingSection.style.display = searchTerm ? 'none' : 'block'
    categorySection.style.display = searchTerm ? 'none' : 'block'
  }
}

function createCategoryCard(product) {
  const productContainer = document.getElementById('categoryid')

  const card = document.createElement('div')
  card.className = 'bg-white p-6 rounded-lg shadow-md'

  const image = document.createElement('img')
  image.src = product.image
  image.alt = product.name
  image.className = 'mb-4 rounded-md'

  const title = document.createElement('h3')
  title.className = 'text-xl font-bold mb-2'
  title.textContent = product.name

  const description = document.createElement('p')
  description.className = 'text-gray-700'
  description.textContent = product.description

  const exploreButton = document.createElement('a')
  exploreButton.href = '#'
  exploreButton.className =
    'mt-4 inline-block bg-stone-700 text-white px-2 py-1 rounded hover:bg-stone-500 no-underline'
  exploreButton.textContent = 'Explore'

  card.appendChild(image)
  card.appendChild(title)
  card.appendChild(description)
  card.appendChild(exploreButton)

  productContainer.appendChild(card)
}

topCategories.forEach(product => createCategoryCard(product))

function renderProducts(products) {
  const productContainer = document.getElementById('productContainer')
  productContainer.innerHTML = ''

  if (products.length === 0) {
    displayNotFoundMessage()
  } else {
    hideNotFoundMessage()
    products.forEach(product => createProductCard(product))
  }
}

function handleSearch() {
  const searchInput = document.getElementById('searchInput')
  const searchTerm = searchInput.value.toLowerCase()

  const filteredProducts = productsData.filter(
    product =>
      product.itemName.toLowerCase().includes(searchTerm) ||
      product.itemDescription.toLowerCase().includes(searchTerm)
  )

  renderProducts(filteredProducts)
}

function displayNotFoundMessage() {
  const notFoundMessage = document.getElementById('notFoundMessage')
  if (notFoundMessage) {
    notFoundMessage.style.display = 'block'
  }
}

function hideNotFoundMessage() {
  const notFoundMessage = document.getElementById('notFoundMessage')
  if (notFoundMessage) {
    notFoundMessage.style.display = 'none'
  }
}

function clearSearch() {
  const searchInput = document.getElementById('searchInput')
  searchInput.value = ''
  renderProducts(productsData)
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(productsData)
})
