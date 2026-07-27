# 🥟 Nat Home Made Curry Puff @ Balik Pulau

![Nat Home Made Curry Puff Header](assets/hero_potato.png)

Welcome to the official web repository for **Nat Home Made Curry Puff @ Balik Pulau**, an authentic Malaysian culinary brand located in Balik Pulau, Penang.

---

## 🌟 About Nat Home Made Curry Puff

In the scenic town of Balik Pulau on Penang Island, we craft traditional **Karipap Pusing** (spiral-layered curry puffs) made with 100% passion, fresh ingredients, and time-honored Asian pastry techniques.

### Why Our Curry Puffs Are So Unbelievably Good & Fresh

- 🥔 **100% Farm-Fresh Local Potatoes (No Meat)**: We use premium Russet potatoes sourced directly from farms. Every potato is hand-peeled and diced into uniform 5mm cubes daily so they cook up soft, fluffy, and aromatic inside.
- 🌿 **Aromatic Malaysian Spices & Curry Leaves**: No artificial flavorings or meat fillers. We sauté fresh shallots, garlic, grated ginger, and garden-picked curry leaves in pure oil, blooming roasted cumin, coriander, fennel, and Malaysian curry powder (*pecah minyak*).
- 🌀 **Shatteringly Flaky "Karipap Pusing" Spiral Crust**: Our signature double-dough rolling technique creates delicate micro-layers of water dough and oil dough that bloom into golden, ultra-crispy spiral rings that stay crunchy for up to 8 hours!
- 🍳 **Fried Fresh Daily at 170°C**: We never sell frozen or pre-fried puffs. Every batch is hand-crimped and deep-fried fresh in small batches at precisely 170°C so you get them piping hot, light, and grease-free.

---

## 📍 Store Location & Contact Information

Visit our kitchen in Balik Pulau, Penang to taste fresh, piping hot curry puffs straight out of the wok!

- **Address Location**: No 8, Lebuh Sri Genting 8, Taman Nyaman Indah, 11000 Balik Pulau, Penang, Malaysia
- **Contact Number**: [0164852953](tel:0164852953) (Phone / WhatsApp)
- **Google Maps**: [Open Directions in Google Maps](https://www.google.com/maps/search/?api=1&query=No+8+Lebuh+Sri+Genting+8+Taman+Nyaman+Indah+11000+Balik+Pulau+Penang)

---

## 🐳 Running with Docker & Docker Compose

You can easily run the application in a lightweight containerized environment using Docker:

### Using Docker Compose (Recommended)
```bash
# Build and start container in detached mode
docker compose up -d

# Stop container
docker compose down
```
Access the application at `http://localhost:8080/`.

### Using Docker CLI
```bash
# Build image
docker build -t nat-kitchen-web .

# Run container
docker run -d -p 8080:80 --name nat_kitchen_88 nat-kitchen-web
```

---

## 🛠️ Local Node.js Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build production bundle
npm run build
```

---

&copy; 2026 Nat Home Made Curry Puff @ Balik Pulau. All rights reserved.
