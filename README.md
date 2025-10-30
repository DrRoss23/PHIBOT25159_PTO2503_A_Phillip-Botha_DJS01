# 🎧 DJS01 – Vanilla JavaScript Podcast App

### *“A responsive, accessible podcast browsing application built with modular JavaScript.”*

---

## 🧠 Project Overview

The **PodcastApp** is a responsive web application that allows users to **browse podcast shows** and view detailed information in an accessible **modal pop-up**.
The app was designed and built over **three distinct development phases**, each aligning with specific user stories and technical learning goals in the DJS01 module.

The final result demonstrates:

* Clean **HTML, CSS, and vanilla JavaScript**
* Strong **modular code architecture**
* Clear **OOP & FP design balance**
* Full **accessibility support**
* Professional-grade readability and documentation

---

## 🏗️ Core Functionality

* **Landing Page:** Displays podcast previews (cover, title, seasons, genres, and updated date).
* **Modal View:** Clicking a podcast opens a detailed modal with a larger cover image, description, genre tags, last updated date, and season list.
* **Responsive Design:** Automatically adapts to both desktop and mobile layouts.
* **Accessibility:** Keyboard navigation, focus management, `aria` attributes, ESC-key closing, and semantic HTML.

---

## ⚙️ Technology Stack

| Category               | Technologies Used                                         |
| ---------------------- | --------------------------------------------------------- |
| **Frontend Languages** | HTML5, CSS3, JavaScript (ES6 modules only, no frameworks) |
| **Design Approach**    | Responsive design with CSS Grid & Flexbox                 |
| **Architecture**       | Modular JavaScript using OOP and Functional Programming   |
| **Accessibility**      | `aria-*` roles, focus trap, keyboard navigation           |
| **Documentation**      | JSDoc comments for all major functions and classes        |

---

## 📁 File & Folder Structure

```
📂 DJS01-PodcastApp
├── index.html
├── styles.css
├── data.js
├── main.js
├── README.md
│
└── modules/
    ├── format.js
    ├── genres.js
    ├── rendercards.js
    ├── uiHelpers.js
    ├── dataService.js
    ├── PodcastApp.js
    │
    └── modal/
        ├── renderModal.js
        ├── openModal.js
        ├── closeModal.js
        └── focusTrap.js
```

### 🧩 Module Responsibilities

| File                             | Responsibility                                                  |
| -------------------------------- | --------------------------------------------------------------- |
| **index.html**                   | Semantic structure, linked CSS & JS, modal mount point          |
| **styles.css**                   | All styling (responsive grid, card UI, modal layout)            |
| **data.js**                      | Static JSON-like data source for podcasts, genres, and seasons  |
| **main.js**                      | Application entry point – instantiates `PodcastApp`             |
| **modules/PodcastApp.js**        | Main controller class (OOP) handling app initialization         |
| **modules/dataService.js**       | Provides read-only access to `data.js` (Functional Programming) |
| **modules/uiHelpers.js**         | Reusable DOM helpers (`qs`, `clear`, `createEl`)                |
| **modules/format.js**            | Formats ISO date strings to human-readable form                 |
| **modules/genres.js**            | Creates a lookup object mapping genre IDs to names              |
| **modules/rendercards.js**       | Dynamically renders podcast cards to the landing page           |
| **modules/modal/renderModal.js** | Builds modal DOM elements and structure                         |
| **modules/modal/openModal.js**   | Handles modal lifecycle (open, overlay, ESC key)                |
| **modules/modal/closeModal.js**  | Removes modal and restores focus                                |
| **modules/modal/focusTrap.js**   | Keeps keyboard focus inside the modal for accessibility         |

---

## 🪜 Development Journey

### 🔹 **Phase 1 – Landing Page: Display Podcast Previews**

**Goal:** Build a functional, data-driven landing page.
**User Stories Covered:** P3.1–P3.6

**Key Achievements:**

* Dynamically generated podcast cards from `data.js`.
* Each card includes:

  * Cover image
  * Podcast title
  * Number of seasons
  * Genre tags
  * Readable “last updated” date
* Built with pure JavaScript DOM manipulation (no frameworks).
* Responsive layout using CSS Grid.

**Technical Highlights:**

* Pure functional rendering using loops and template literals.
* Modular code: `rendercards.js`, `genres.js`, `format.js`.
* Accessibility: semantic HTML (`<main>`, `<article>`, `role="listitem"`).

**Why:**
This phase laid the foundation — transforming static data into dynamic content and establishing a clean, responsive base UI.

---

### 🔹 **Phase 2 – Modal View: Show More Podcast Information**

**Goal:** Add a modal that displays detailed podcast info.
**User Stories Covered:** P3.7–P3.15

**Key Achievements:**

* Clicking a podcast opens a detailed modal with:

  * Large cover image
  * Podcast title
  * Description text
  * Genre tags
  * Last updated date
  * Full list of seasons with episode counts
* Fully accessible interactions:

  * Close via **×**, **ESC key**, or **overlay click**
  * Keyboard navigation (Tab + Shift+Tab)
  * Focus trap and focus restoration

**Modules Introduced:**

* `/modules/modal/renderModal.js` → Builds the full modal DOM.
* `/modules/modal/openModal.js` → Handles open logic, focus, and listeners.
* `/modules/modal/closeModal.js` → Cleans up and restores focus.
* `/modules/modal/focusTrap.js` → Locks tab navigation inside modal.

**Why:**
This phase focused on user interaction, accessibility, and UI fidelity.
The modal perfectly matches both **desktop** and **mobile** wireframes.

---

### 🔹 **Phase 3 – Code Architecture & Best Practices**

**Goal:** Refactor and apply professional coding standards.
**User Stories Covered:** P3.16–P3.20

**Key Achievements:**

* Introduced **`PodcastApp` class** → Encapsulates app initialization (OOP).
* Added **`dataService.js`** → Centralized data access layer (pure functions).
* Added **`uiHelpers.js`** → Common DOM utility methods.
* Updated **`rendercards.js`** → Now purely handles rendering, no direct data access.
* Added consistent **JSDoc** documentation for all modules.

**Principles Demonstrated:**

| Principle               | Implementation                                                         |
| ----------------------- | ---------------------------------------------------------------------- |
| **OOP (Encapsulation)** | `PodcastApp` class handles setup and orchestration                     |
| **FP (Predictability)** | `formatDate()`, `getGenreLookup()`, `getPodcasts()` are pure functions |
| **SOLID**               | SRP: each module has one responsibility                                |
| **DRY**                 | `uiHelpers.js` prevents repeated DOM logic                             |
| **Documentation**       | JSDoc added for all functions and classes                              |

**Why:**
Phase 3 elevates the project from “working code” to **maintainable architecture** — readable, modular, and easy for other developers or coaches to understand and extend.

---

## 🧠 Design & Logic Summary

| Layer                  | Responsibility                           | Type                                |
| ---------------------- | ---------------------------------------- | ----------------------------------- |
| **Presentation Layer** | `index.html`, `styles.css`               | Structure & styling                 |
| **Controller Layer**   | `PodcastApp.js`, `main.js`               | App initialization, orchestration   |
| **Data Layer**         | `dataService.js`, `data.js`, `genres.js` | Read-only data access               |
| **UI Rendering Layer** | `rendercards.js`, modal modules          | Dynamic DOM generation              |
| **Utility Layer**      | `uiHelpers.js`, `format.js`              | Reusable functions, date formatting |

This architecture follows a **layered MVC-like pattern** (Model–View–Controller) while staying lightweight and easy to explain.

---

## 🧩 Accessibility Considerations

* Semantic HTML5 structure (`<main>`, `<header>`, `<article>`)
* `role="dialog"` and `aria-modal="true"` for modals
* `aria-labelledby` / `aria-describedby` for assistive tech
* Keyboard navigation with `tabindex="0"` on cards
* Focus trap inside modals
* Focus restoration on close
* Sufficient color contrast and legible typography

---

## 🧪 Testing & Verification

| Test                               | Expected Result                                             |
| ---------------------------------- | ----------------------------------------------------------- |
| **Cards render on page load**      | All podcast previews appear with correct data               |
| **Click a card**                   | Modal opens with detailed info                              |
| **ESC / overlay click / × button** | Modal closes smoothly                                       |
| **Tab navigation**                 | Focus remains inside modal                                  |
| **Mobile layout**                  | Modal stacks image above description                        |
| **No console errors**              | Verified in DevTools                                        |
| **Code readability**               | Verified by consistent module separation and JSDoc comments |

---

## 📜 How to Run Locally

1. Clone or download this repository.
2. Open the folder in VS Code.
3. Run a local server (e.g., **Live Server** extension).
4. Visit `http://localhost:5500/` or similar local URL.
5. Click any podcast card to open its modal.

---

## 🖱️ How to Interact

Once the application is running in your browser:

1. **Browse the Landing Page**

   * The home screen displays a grid of podcast cards.
   * Each card includes the **cover image**, **title**, **genre tags**, **season count**, and **last updated date**.

2. **Open a Podcast**

   * Click on any podcast card, or use your **keyboard (Tab → Enter/Space)** to select it.
   * A **modal window** will open showing full podcast details:

     * Large cover image
     * Description
     * Genre tags
     * Last updated date
     * A list of all seasons with episode counts

3. **Navigate Inside the Modal**

   * Use **Tab** and **Shift + Tab** to move between focusable elements (close button, etc.).
   * The modal is **focus-trapped**, meaning keyboard navigation stays inside until it’s closed.

4. **Close the Modal**

   * Click the **× button**,
   * Press the **ESC key**, or
   * Click anywhere on the **dimmed overlay background**.
   * The modal closes smoothly, and focus returns to the podcast card you opened.

5. **Responsive Experience**

   * On **desktop**, the modal shows the cover image and description side by side.
   * On **mobile**, the image stacks above the text for a clean, vertical layout.

---

## 🎓 Learning Reflection

Through DJS01, I learned:

* How to build a fully dynamic app with **Vanilla JS**.
* How to think in terms of **data → render → user interaction**.
* How to write **accessible and maintainable code**.
* How **OOP + FP + SOLID** can work together even in small projects.
* The importance of **clean architecture** and consistent documentation.

Each phase built on the last:

> **Phase 1 → Functional foundation**
> **Phase 2 → Interactive experience**
> **Phase 3 → Professional architecture**

---

## 🏁 Final Outcome

A fully responsive, accessible, and well-architected **Podcast Application**
built with **vanilla JavaScript**, demonstrating:

* Code quality
* Clear separation of concerns
* Best practices in software design
* Production-ready readability

---

### 📘 Author

**Phillip-Rossouw Botha**
*CodeSpace Academy – DJS01 (Vanilla JS)*

---


