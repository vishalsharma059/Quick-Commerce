# 🛒 Quick Commerce Admin Dashboard

A modern and responsive admin dashboard for managing products, categories, orders, shopkeepers, and system settings — built with the MERN stack and designed for real-time updates.

---

## 🌐 Live Demo

> Login credentials:  
> Email: admin@example.com  
> Password: admin123

🔗 [View Deployed App ] - (https://quick-commerce-brown.vercel.app)



---


## 🧰 Tech Stack

### 🖥️ Frontend:
- **React.js (with Vite)**
- **React Router DOM**
- **Tailwind CSS**
- **Axios**
- **Lucide Icons**

### ⚙️ Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (via Mongoose)

### ☁️ Deployment:
- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 🔐 Authentication

- Protected routes via `PrivateRoute`
- Login screen with navigation control
- JWT-based auth (optional future upgrade)

---

## 📦 Features

- ✅ Authentication with route protection
- ✅ Product Management (Create, Read, Delete)
- ✅ Category Management
- ✅ Order Listing
- ✅ Shopkeeper Listing
- ✅ Search with debouncing
- ✅ Modal-based data entry
- ✅ Settings page for profile & security
- ✅ Realtime UI update on data change
- ✅ Responsive UI for desktop and mobile

---

## 🧪 Pages Overview

| Route             | Description                        |
|------------------|------------------------------------|
| `/login`          | Login page                         |
| `/dashboard`      | Overview metrics page              |
| `/products`       | Manage all product entries         |
| `/categories`     | Add/update product categories      |
| `/orders`         | View all orders (read-only)        |
| `/shopkeepers`    | Manage shopkeeper entries          |
| `/settings`       | Update profile/security settings   |

---

## ⚙️ Project Structure

