import { formatINR } from "./src/index";

console.log(formatINR(1000000));                         // ₹10,00,000.00
console.log(formatINR(450000.5, { symbol: false }));     // 4,50,000.50
console.log(formatINR(123456789, { decimals: 0 }));      // ₹12,34,56,789
console.log(formatINR(123456789, { decimals: 2 }));      // ₹12,34,56,789
