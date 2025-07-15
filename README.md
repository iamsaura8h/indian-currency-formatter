# 🇮🇳 indian-currency-formatter

A lightweight utility to format numbers into Indian currency format with lakhs and crores.

> 💰 ₹10,00,000 instead of $1,000,000 — made easy!

---

## 📦 Installation

```bash
npm install indian-currency-formatter
```

---

## 🔧 Usage

```ts
import { formatINR } from "indian-currency-formatter";

formatINR(1500000); 
// → ₹15,00,000.00

formatINR(750000, { symbol: false }); 
// → 7,50,000.00

formatINR(123456789, { decimals: 0 }); 
// → ₹12,34,56,789
```

---

## ⚙️ Options

| Option     | Type    | Default | Description                        |
|------------|---------|---------|------------------------------------|
| `symbol`   | boolean | `true`  | Whether to prefix with `₹`         |
| `decimals` | number  | `2`     | Number of decimal places           |

---

## 📘 API

```ts
formatINR(amount: number, options?: {
  symbol?: boolean;
  decimals?: number;
}): string;
```

---

## 📚 Example

```ts
formatINR(123456);                   // ₹1,23,456.00
formatINR(123456.789, { decimals: 1 }); // ₹1,23,456.8
formatINR(100000, { symbol: false });  // 1,00,000.00
```

---

## 📈 Why Use This?

✅ Clean developer experience  
✅ Fully typed (TypeScript support)  
✅ Fast and dependency-free  
✅ Perfect for billing, fintech, dashboards, India-first apps

---

## 💼 License

[MIT](./LICENSE)