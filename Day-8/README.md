# js-practice

## **🎯 Goal of This Lesson**

- ✅ Welcome to Module 2
- ✅ Why Execution Context
- ✅ Lexical Environment
- ✅ Execution Context
- ✅ Global Execution Context
- ✅ Function Execution Context
- ✅ GEC and FEC With Complex Examples
- ✅ Memory Management With Call Stack and Heap
- ✅ Task for YOU!

# **👩‍💻 🧑‍💻 Assignment Tasks**

[![day-08]](https://youtu.be/ylx5F7hbzVQ 'Video')

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Draw the Execution Context Diagram of the follwoing code and share as explained below:

```js
const message = 'I can do it';

function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}
function calc(a, b) {
  return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
  return calc(a, b);
}

getResult(8, 5);
```

- Create the GEC and FEC with CP and EP flow

```
GEC: Global Execution Phase
FEC: Function Execution Context
CP: Creation Phase
EP: Execution Phase


GEC:
	CP:
		message: undefined
		getResult: f() in memory
	EP:
		message = 'I can do it'
		getResult: Execute
		FEC (for getResult())
			CP:
				a: undefined
				b: undefined
				calc: f() in memory
			EP:
				a = 8
				b = 5
				calc: Execute(8, 5) and return result
				FEC (for calc())
					CP:
						a: undefined
						b: undefined
						sum: f() in memory
						mul: f() in memory
					EP:
						FEC (for sum())
							CP:
								a: undefined
								b: undefined
								result: undefined
							EP:
								a = 8
								b = 5
								sum: Execute sum(8, 5)
								result: 8 + 5 = 13 and return result
								FEC (for mult())
									CP:
										a: undefined
										b: undefined
										result: undefined
									EP:
										a = 8
										b = 5
										mult: Execute(8, 5)
										result: 8 * 5 = 40 and retun result
						result of calc : (resutl of sum() + result of mult()) / 2 = (13 + 40) / 2 = 26.5

The Result of the calculation should be 26.5

```

- Create the Stack and Heap Flow
- Create the Stack Diagram
- Create a Readme file with all the above diagram and share on Discord.

## Screenshot

### The Stack and Heap Flow

![Image](https://github.com/user-attachments/assets/a78786dd-7823-4d20-94f6-1fa9759cae2b)

### The Stack Diagram

![Image](https://github.com/user-attachments/assets/41d452e4-0745-4021-b6d1-95bbc68176fb)

![Image](https://github.com/user-attachments/assets/5ff3ae07-c8ed-4b27-aae6-606c12200ca3)

![Image](https://github.com/user-attachments/assets/98621b96-5647-48d7-befb-e380d4903a3e)
