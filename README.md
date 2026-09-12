# Dev Stack

Dev Stack is a responsive web application that helps developers explore popular technologies and build their ideal development stack. Users can browse technologies by category, compare their details, and add their preferred technologies to a personalized stack.

## 🚀 Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React-Toastify
* React Suspense
* JSON data and Fetch API

## ✨ Features

### 1. Explore Technologies

Browse a collection of frontend, backend, database, programming language, styling, and DevOps technologies with details such as description, category, difficulty, rating, and badges.

### 2. Build Your Stack

Add technologies to your personal stack and view the selected technologies in a dedicated stack panel. Each technology can be removed individually, or the entire stack can be cleared at once.

### 3. Responsive User Interface

The application is designed to provide a smooth experience across mobile, tablet, and desktop devices with responsive layouts and adaptive navigation.

## 📌 Project Overview

Dev Stack is designed as a simple and practical tool for developers who want to explore different technologies and organize the tools they may use for their next project.


## Question-Answer

1. What is JSX, and why is it used in React?

Jsx is a syntax which let us write html like codes inside javascript or typescript.

2. What is the difference between props and state?

Props are used to pass data from a parent component to a child component. State is data that a component keeps and can change when needed.

3. What does the useState hook do, and where did you use it in this project?

useState is used to store data in a component and update it when the data changes.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is mainly used for side effects like fetching data or doing something after a component renders. I didn't use useEffect in this project because I used Suspense and the use() hook to handle the JSON data loading.

5. Why does every item in a .map() list need a unique key prop?

React uses the key to tell different list items apart. This helps React update the list correctly when something changes. In this project, I used:key={ind} where ind means the index

6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing something different based on a condition. For example, in YourStack, I check whether any technology has been selected:

if (selectedTechnologies.length === 0) {
    return (
        // Empty stack message
    )
}

So here when the stack is empty, the empty message is shown.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through props. In this project, TechnologySection passes selectedTechnologies and setSelectedTechnologies to its child components. The child can then call the function it received to update the parent's state.

