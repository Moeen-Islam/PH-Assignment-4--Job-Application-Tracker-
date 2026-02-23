<h1 align="center">📘 PH Assignment 4 Q&A</h1>

---

# ❓ 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### **Answer:**

**getElementById()** is used to select a single element based on its unique id. It returns only one element.  

**getElementsByClassName()** selects elements based on their class name. It returns a live HTMLCollection.it automatically updates when elements are added or removed from the DOM.  

**querySelector()** returns the first element that matches a specified CSS selector.  

**querySelectorAll()** returns all elements that match a specified CSS selector.

---

# ❓ 2. How do you create and insert a new element into the DOM?

### **Answer:**

I use **document.createElement()** method to create a new element in JavaScript.After creating the element, I can add content or attributes using properties like **textContent**, **innerHTML**, or **className**.  

Then we insert the element into the DOM using methods such as **appendChild()**, **append()**, **prepend()**, or **insertBefore()**.

---

# ❓ 3. What is Event Bubbling and how it works?

### **Answer:**

When an event starts from the target element and then propagates upward through its parent elements in the DOM is called **Event Bubbling**.  

When an event occurs on a child element, it first executes the event handler attached to that element, then moves to its parent, and continues upward until it reaches the root element.

---

# ❓ 4. What is Event Delegation and why it is useful?

### **Answer:**

It is a technique in JavaScript where instead of attaching event listeners to multiple child elements, we attach a single event listener to their parent element.This works because of **event bubbling**, where events move up from child to parent.  

The parent element detects which child triggered the event using the **event.target** property.

---

# ❓ 5. Difference between preventDefault() and stopPropagation()?

### **Answer:**

The **preventDefault()** method is used to stop the browser’s default behavior for an event. Like it can prevent a form from submitting or stop a link from navigating to another page.  

The **stopPropagation()** method is used to stop the event from propagating or bubbling up to parent elements. It prevents parent event handlers from being executed but does not stop the browser’s default action.  

In last , **preventDefault()** controls the default browser behavior, while **stopPropagation()** controls the event flow in the DOM.

---

