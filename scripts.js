// A list of provinces:
const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State']

// A list of names:
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie']

// A list of products with prices:
const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// Log each name
names.forEach(name => console.log(name));

// Log each province
provinces.forEach(province => console.log(province));

// Log each name with a matching province
names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

// Using .map to transform province names into uppercase
const upperCaseProvinces = provinces.map(province => province.toUpperCase());
console.log(upperCaseProvinces);

// Create a array with .map that contains the lenght of each name
const nameLengths = names.map(name => name.length);
console.log(nameLengths);

// Used sort to alphabetically sort the provinces.
const sortedProvinces = [...provinces].sort();
console.log(sortedProvinces);