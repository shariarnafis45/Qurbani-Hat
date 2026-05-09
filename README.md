# 🐄 QurbaniHat – Livestock Booking Platform

> A modern, responsive livestock marketplace for Qurbani season — browse, explore, and book animals with ease.

---

## 🌐 Live URL

🔗 [https://qurbani-hat-nafix.vercel.app/]

---

## 📌 Project Purpose

**QurbaniHat** is a full-featured livestock booking web application designed to simplify the Qurbani animal purchasing experience. Users can browse cows and goats listed by verified sellers, view detailed information about each animal, and securely place a booking — all from the comfort of their home.

The platform supports user authentication (email/password + Google OAuth), profile management, and a smooth booking experience with real-time toast notifications.

---

## ✨ Key Features

- 🔐 **Authentication** — Email/password login & registration + Google OAuth via Firebase
- 🐮 **Animal Listings** — Browse 6+ animals (cows, goats) with detailed info cards
- 🔃 **Sort by Price** — Filter all animals by price (low to high / high to low)
- 📋 **Animal Details Page** — Full animal profile with a protected booking form
- 📬 **Booking Form** — Name, email, phone, and address fields with success toast on submit
- 👤 **My Profile** — View logged-in user's name, photo, and email
- ✏️ **Update Profile** — Update display name and photo URL
- 🎨 **Animate.css** — Smooth UI animations throughout the app
- 🔔 **Toast Notifications** — Real-time feedback using `react-hot-toast`
- ⏳ **Loading Spinners** — Graceful loading states on data fetch
- 🚫 **404 Not Found Page** — Custom not-found page for invalid routes
- 📱 **Fully Responsive** — Mobile, tablet, and desktop optimized

---

## 🛠️ Tech Stack

| Category        | Technology                    |
|-----------------|-------------------------------|
| Framework       | React 18 + Vite               |
| Routing         | React Router DOM v6           |
| Auth            | Firebase Authentication       |
| Styling         | Tailwind CSS + DaisyUI        |
| Animation       | Animate.css                   |
| Notifications   | react-hot-toast               |
| Icons           | react-icons                   |
| Profile Update  | better-auth (Update User API) |
| Deployment      | Vercel                        |

---

## 📦 NPM Packages Used

````bash
react                    # Core library
react-dom                # DOM rendering
react-router-dom         # Client-side routing
firebase                 # Authentication (email + Google)
tailwindcss              # Utility-first CSS framework
daisyui                  # Tailwind component library
react-hot-toast          # Toast notifications
react-icons              # Icon set
animate.css              # CSS animation library
better-auth              # User profile update support
````

---

## 📁 Project Structure

````
qurbanihat/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── AnimalCard.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AllAnimals.jsx
│   │   ├── AnimalDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── MyProfile.jsx
│   │   ├── UpdateProfile.jsx
│   │   └── NotFound.jsx
│   ├── context/
│   │   └── AuthContext.jsx
│   ├── routes/
│   │   └── PrivateRoute.jsx
│   ├── data/
│   │   └── animals.json
│   ├── firebase/
│   │   └── firebase.config.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── index.html
├── tailwind.config.js
├── vite.config.js
└── README.md
````

---

## 🗺️ Routes

| Route             | Type    | Description                                          |
|-------------------|---------|------------------------------------------------------|
| `/`               | Public  | Home page with hero, featured animals, tips & breeds |
| `/animals`        | Public  | All animals list with price sorting                  |
| `/login`          | Public  | User login page                                      |
| `/register`       | Public  | User registration page                               |
| `/details/:id`    | Private | Animal details + booking form                        |
| `/my-profile`     | Private | View logged-in user profile                          |
| `/update-profile` | Private | Update name and photo URL                            |
| `*`               | Public  | 404 Not Found page                                   |

---



## 🐄 Sample Animal Data Format

````json
{
  "id": 1,
  "name": "Deshi Shahi Cow",
  "type": "Cow",
  "breed": "Local Deshi",
  "price": 120000,
  "weight": 280,
  "age": 3,
  "location": "Bogura",
  "description": "Healthy deshi cow suitable for Qurbani. Well fed with natural খাবার.",
  "image": "https://i.postimg.cc/example-cow1.jpg",
  "category": "Large Animal"
}
````

---

## 🚀 Getting Started (Local Setup)

````bash
# 1. Clone the repository
git clone https://github.com/yourusername/qurbanihat.git

# 2. Navigate to the project folder
cd qurbanihat

# 3. Install dependencies
npm install

# 4. Create your .env file and add Firebase credentials
cp .env.example .env

# 5. Start the development server
npm run dev
````

---

## 📝 Git Commit History (Minimum 10 Meaningful Commits)

| # | Commit Message |
|---|----------------|
| 1 | `init: project setup with vite, react, tailwind, daisyui` |
| 2 | `feat: firebase config and auth context with google & email login` |
| 3 | `feat: navbar with conditional auth links and avatar` |
| 4 | `feat: home page with hero section, featured animals, tips and breeds` |
| 5 | `feat: all animals page with price sorting functionality` |
| 6 | `feat: animal details page with booking form and toast notification` |
| 7 | `feat: login and register pages with google oauth` |
| 8 | `feat: private route and protected pages (details, my-profile)` |
| 9 | `feat: my profile page with update profile form using better-auth` |
| 10 | `feat: animate.css integration and loading spinner component` |
| 11 | `fix: 404 not-found page and vercel SPA reload fix` |
| 12 | `chore: env variables secured, readme updated, final cleanup` |

---

## 🌟 Extra Sections on Home Page

- **🐄 Qurbani Tips** — Helpful guidance for first-time buyers
- **🏆 Top Breeds** — Showcase of the most popular breeds for Qurbani

---

## 🎨 Design Highlights

- Warm earthy tones (forest green, amber, cream) reflecting a livestock/nature theme
- Animate.css used for hero text entrance, card reveals, and form transitions
- Custom 404 page with a friendly lost-animal illustration
- Smooth loading states with spinners during data fetch

---

## 👨‍💻 Developer

**Your Name**
- GitHub: [@shariarnafis45](https://github.com/shariarnafis45)
- Email: nafisshahworkmail@gmail.com

---

