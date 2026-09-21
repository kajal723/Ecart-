# 📦 Inventory Range Dashboard

A mini e-commerce inventory dashboard built using **HTML, CSS, and JavaScript**.

This project is **Challenge 6 – Inventory Range Dashboard** from the eCart Product Explorer challenges.

The application allows users to search for products within a specific price range and calculates the total inventory value of those products.

---

## 🚀 Features

* 🔎 Search products by minimum and maximum price
* 📦 Display the number of matching products
* 💰 Calculate total inventory value
* 🛍️ Display matching products in product cards
* 🏷️ Show product name, brand, price, and stock
* ⚠️ Handle invalid price ranges
* ❌ Display a message when no products are found
* 📱 Responsive user interface

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **CSS3** – Styling and responsive layout
* **JavaScript** – Product filtering, calculations, and DOM manipulation
* **Git & GitHub** – Version control

No frameworks or external UI libraries are used.

---

## 📁 Project Structure

```text
eCart/
│
├── index.html
├── style.css
├── script.js
├── data.js
└── README.md
```

### File Description

| File         | Description                                        |
| ------------ | -------------------------------------------------- |
| `index.html` | Contains the dashboard structure and UI            |
| `style.css`  | Contains styling and responsive design             |
| `script.js`  | Contains filtering and inventory calculation logic |
| `data.js`    | Contains the provided product dataset              |
| `README.md`  | Project documentation                              |

---

## ⚙️ How It Works

The product data is provided in a nested structure:

```text
storeData
   ↓
categories
   ↓
subcategories
   ↓
products
```

The JavaScript first extracts all products into a single array.

```javascript
let products = [];

storeData.categories.forEach(function(category) {

    category.subcategories.forEach(function(subcategory) {

        subcategory.products.forEach(function(product) {

            products.push(product);

        });

    });

});
```

The user then enters:

```text
Minimum Price
Maximum Price
```

The application filters products whose prices fall within the selected range.

```javascript
const matchingProducts = products.filter(function(product) {

    return product.price >= minPrice &&
           product.price <= maxPrice;

});
```

---

## 💰 Inventory Value Calculation

The inventory value of each product is calculated as:

```text
Inventory Value = Product Price × Stock
```

For example:

```text
Product Price = ₹15,000
Stock = 8

Inventory Value = 15,000 × 8
                = ₹1,20,000
```

The total inventory value is calculated using `reduce()`.

```javascript
const totalValue = matchingProducts.reduce(function(total, product) {

    return total + (product.price * product.stock);

}, 0);
```

---

## 🖥️ User Interface

The dashboard contains:

### Search Section

```text
Minimum Price    Maximum Price

[          ]    [          ]

        [ Search ]
```

### Summary

```text
Products          Inventory Value

   10                ₹2,45,600
```

### Matching Products

Each product card displays:

* Product name
* Brand
* Price
* Stock
* Inventory value

---

## 🧠 Algorithm

### Initial Approach

1. Extract all products from the nested dataset.
2. Read the minimum and maximum price.
3. Traverse the products.
4. Select products within the given price range.
5. Calculate inventory value using:

```text
price × stock
```

6. Display the results.

### Time Complexity

For `n` products:

```text
Filtering: O(n)

Inventory calculation: O(n)

Overall: O(n)
```

### Space Complexity

The filtered products are stored in a new array:

```text
O(n)
```

---

## ⚠️ Edge Cases

The application handles:

* Minimum price greater than maximum price
* Negative price input
* No products found
* Empty search results

Example:

```text
Minimum Price: ₹50,000
Maximum Price: ₹10,000
```

The application displays an error instead of performing the search.

---

## ▶️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/kajal723/Ecart-.git
```

### 2. Open the project

Open the project folder in VS Code.

### 3. Run the application

Open:

```text
index.html
```

in a web browser.

No installation or build process is required.

---

## 📌 Challenge Objective

The objective of this challenge is to build an **Inventory Analytics panel** that can calculate inventory information for products within a specified price range.

The project also focuses on:

* Data handling
* DOM manipulation
* JavaScript arrays
* Filtering
* Aggregation
* Time and space complexity
* Responsive UI

---

## 🔮 Future Improvements

Possible improvements include:

* Price range slider
* Sorting products by price
* Sorting by inventory value
* Category filtering
* Stock-level filtering
* More advanced range-query optimization
* Improved dashboard visualizations

---

## 👩‍💻 Author

**Kajal Kumari**

B.Tech – Computer Science Engineering

---

## 📄 License

This project is created for educational and learning purposes.
