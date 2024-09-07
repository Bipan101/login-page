# Login Page

This is a basic login page built using React and Vite, utilizing Context API for managing authentication state.

## Features
Simple login form with username and password fields.<br>
Uses Context API to manage and share authentication state globally.<br>
User state is updated after a successful login.<br>
Lightweight, fast, and responsive.<br>

## Technologies Used
React: A JavaScript library for building user interfaces.<br>
Vite: A next-generation frontend build tool for faster development.<br>
Context API: A React structure that enables you to exchange unique details and assists in prop-drilling avoidance.<br>
Tailwind CSS (optional): For styling (if applicable).<br>

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Bipan101/login-page.git
```
2. Navigate to the project directory:
```bash
cd (your director)
```

3. Install dependencies:
```bash
npm install
```
4. Start the development server:
```bash
npm run dev

```
### How It Works
1. The Context API is used to create an authentication context, which provides login state and methods for updating it.<br>
2. When a user submits the login form, their credentials are validated (this can be expanded to include actual authentication).<br>
3. Upon successful login, the user state is updated and the authenticated state is shared across the app using Context.

### Folder Structure
```java

├── src
   ├── components
   │   ├── Login.jsx          
   │   └── Profile.jsx        
   ├── context
   ├── App.jsx                
   └── main.jsx               

```
### Additional info on Context API
Benefits of Using Context API:

1. Avoids Prop Drilling:
The Context API allows you to avoid passing props down manually at every level of a component tree. This eliminates "prop drilling," where props are passed through many layers just to reach a deeply nested component.

2. Global State Management:
It provides a simple and efficient way to manage global state in React apps without requiring external libraries like Redux or MobX.

3. Lightweight Solution:
Unlike third-party state management tools, Context API is built into React, which makes it lightweight and doesn't add extra dependencies to your project.

4. Performance Optimization:
With proper use, Context API can avoid unnecessary re-renders of components, improving the app’s performance when dealing with global states.

5. Ease of Use:
Context API is straightforward and easy to set up for small to medium-sized applications, making it ideal when you need a simple state-sharing mechanism.

6. Good for Auth Management:
It's especially useful for handling scenarios like authentication, where user state needs to be accessed across multiple components.

7. No Boilerplate Code:
It reduces the boilerplate code compared to more complex state management libraries, making it easier and faster to implement.

### Read More

-> https://react.dev/reference/react/useContext
