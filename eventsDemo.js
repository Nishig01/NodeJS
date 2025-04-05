import { EventEmitter } from "events";

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Define a simple event handler
const eventHandler = (message) => {
  console.log(`Event triggered: ${message}`);
};

const greetHandler = (name) => {
  console.log(`Hello, ${name}!`);
}

// Register the event handler for the 'message' event
eventEmitter.on("message", eventHandler);
eventEmitter.on("greet", greetHandler);
// Emit the 'message' event with a message 
eventEmitter.emit("message", "Hello, World!"); // Output: Event triggered: Hello, World!
// Emit the 'message' event with a different message
eventEmitter.emit("message", "Hello, Node.js!"); // Output: Event triggered: Hello, Node.js!

eventEmitter.emit("greet", "Dasha Doshi"); // Output: Hello, Dasha Doshi!

//Error handling
eventEmitter.on("error", (err) => {
  console.error("Error occurred:", err.message);
});
eventEmitter.emit("error", new Error("Something went wrong!")); // Output: Error occurred: Something went wrong!

