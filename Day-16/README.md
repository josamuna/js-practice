# js-practice

## **🎯 Goal of This Lesson**

[![day-16]](https://youtu.be/VInAd-GJZec 'Video')

## 📚 Course Flow

- ✅ Introduction
- ✅ What is Debugging?
- ✅ Application to Debug
- ✅ The famous console.log
- ✅ DevTools Overview
- ✅ The Source Panel
- ✅ Setting Debug Points
- ✅ Debugging Code
- ✅ Conditional Breakpoint
- ✅ Debug Handlers
- ✅ Debug DOM Changes
- ✅ The "debugger" Handle
- ✅ Debugging Scope
- ✅ Observing Call Stack
- ✅ Watching Variable Expressions
- ✅ Edit and Save on Run Time
- ✅ Workspace
- ✅ Debugging with VS Code
- ✅ A Few Debugging Tips

---

# Keys Points of the video

## 1. Introduction

> When we program, sometimes things could not work as expected, and we need to analyze the source code properly to determine what is going wrong. That is the purpose of this lesson.

## 2. What is debugging

> When something is missing during the software development process for some reasons (_Skills issue_, _lack of understanding of technology_, _environmental issues_, etc.) and the result of the code doesn't work as it should be, it is called _`a bug`_. So, the reverse of a bug is called _`debugging`_. We have to find the bug and eliminate it.

> _`Debugging`_ is the process of tracking the bug or removing it. And when we fix the bug, we call this process the _`fixing`_.

## 3. Application to Debug

> The application to debug is the source code itself.

## 4. The famous console.log

> This is the best way to figure out what is going wrong in the code. These could be messages for **information**, **warnings**, or **error** purposes.

![Image](https://github.com/user-attachments/assets/3a1bd2b0-9d26-4098-a3c0-9102f12b3745)

## 5. DevTools Overview

> _`DevTools`_ provides different ways of analyzing the problem in the source code. Most of the time **the Chrome DevTools** (accessed with the _`F12 key`_ or through _`Inspect`_ from the right-click of the web page) is used, or in conjunction with _`VS Code`_.

## 6. The source Panel

> _`The source Panel Tab`_ (In **Chrome** or also available on others browsers like **Mozilla Firefox**, **Opera**, **Safari**, etc.) helps debug JavaScript source code and, has **three** primary sections :

1. _`File navigator`_ section or _`Navigator`_ section (On left side): This section contains all the files to browse on or look for by using the command `Ctrl + p` (on Windows) or `Cmd + p` (on Mac).
2. _`Code Editor`_ section (in the right side): Used to edit source code when debugging and, go through the code to analyze it and found the bug.
3. _`Debugger`_ Section (at the bottom): Show variables contains in the runtime and helps to analyze the source code.

![Image](https://github.com/user-attachments/assets/ab79e893-a391-4489-b77f-fb25df1df507)

> Others Tabs are:

- _`Elements`_ (to inspect UI objects).
- _`Console`_ (the most famous for showing some kinds of messages to programmers).
- _`Network`_ (mainly to deal with asynchronous programming).
- _`Performance`_ (analyzing application performances: memory resources, CPU, etc.).
- _`Lighthouse`_ (to audit an entire application).
- _`Privacy and Security`_ (to deal with third-party cookies, etc.).

## 7. Setting Debug Points

> To debug the code, we most of time use _`breakpoint`_ (_a point of the code where the code execution will be paused and allows you to look at the code in runtime mode to figure out what was happening_).

> This is done by **clicking on the line number** (Except on the empty line) we want the code to be paused on the Code Editor section. Any number of breakpoint can be added.

## 8. Debugging Code

> To be able to analyze the source code once breakpoints are set up, we should execute the app to simulate a scenario where a user is trying to use the application.

![Image](https://github.com/user-attachments/assets/b235557c-13c5-4beb-be10-81cb91b2adaa)

> To have a good understanding of what has introduced a bug, we have to go through the code **line by line**, even if functions can be called by others (_`step into`_ or _`step out`_) or returned by others.

![Image](https://github.com/user-attachments/assets/3da22da0-ae16-4608-b00a-dfedb5621e01)

> The purpose of each button is explained below:

1. **Resume script execution** or **Jump** (`F8`): It resumes the execution or goes directly to the next breakpoint if it was set up.
2. **Step over next function call** (`F10`): It is like Step, but it has some differences. It allows to execute the code line by line, but rather than go inside a function when it is called and execute it line by line, it ignore it and, go to the next line of code after this function call.
3. **Step into next function call** (`F11`): It investigates a function in a deeper way.
4. **Step out of current function** (`Shift + F11`): It allows to go out of a function once you are inside it.
5. **Step** (`F9`): Carried out the _`step action`_. This enables stepping through JavaScript code line by line. When it reaches a function call, it goes inside the function and executes it line by line.
6. **Desactivate breakpoints** (`Ctrl + F8`): Disable all the breakpoint at once.

## 9. Conditional Breakpoint

> The conditional breakpoint (look **orange** instead of **blue** for normal breakpoint) allows the execution of the code to be paused in a specific way, only _`when a condition is met`_. In this scenario, instead of add a normal breakpoint, we use the right-click on the Code Editor section and, then select _`add conditional breakpoint`_.

> To remove this breakpoint, right-click again on the breakpoint and choose _`remove breakpoint`_.

![Image](https://github.com/user-attachments/assets/1c8688af-4daf-4f69-91ad-2e71a0ce17ac)

## 10. Debug Handlers

> This is useful when we are debugging _`event listeners`_ (the full list of events is in the **Event Listener Breakpoints** section from the **Debugger** section).

![Image](https://github.com/user-attachments/assets/f1c99841-d62f-421b-811e-722a893ef7d9)

## 11. Debug DOM Changes

> This is useful when debugging once something is `added`, `removed` or `changed` to the **DOM** (_Document Object Model_).

> To be able to use this kinds of debugging, from the Elements Tab, `right-click on a specific part of the Html code` and select _`Break on`_, finally choose the mode (_`subtree modifications`_, _`attribute modifications`_ or _`node removal`_). The breakpoint is removed in the same way it was added.

![Image](https://github.com/user-attachments/assets/ae7732d6-1134-490d-82a9-234af97a3c9d)

## 12. The 'debugger' Handle

> In the debugger mode, each variable could be inspected to show its current value from the runtime execution. When you are selecting a variable or a part of code, the debugger is able to tell its content to.

> When the issue is found, the code can be **temporarly edited** on the `Code Editor` itself, and after saving (with _`Ctrl + s`_), the code will **rerun**. **Once done from the debugger, the bug should be fixed on the source file** to completely hold the right result.

## 13. Debugging Scope

> The debugger allows to see the scope (**Glocal scope**, **Script scope** or **Block scope** and **Local scope**) from the Debugger section.

![Image](https://github.com/user-attachments/assets/56a06349-970d-409e-94c8-261f178b1cfd)

## 14. Observing Call Stack

> The debugger trackes also the **Call stack** execution.

> In the same way, once we need to restart the execution context of a specific function, we can just right-click on it from the Call stack and choose Restart the frame to execute the same function again and again. In the same manner, the _`stack trace`_ could also be copied.

![Image](https://github.com/user-attachments/assets/56a06349-970d-409e-94c8-261f178b1cfd)

## 15. Watching variable Expressions

> _`The Watch`_ debugger functionality plays a great role on tracking variables by adding them manually in the runtime. This is made `by clicking on the Watch` and, add variables by clicking on the **+ sign** at the right side. Then, add as many variables is needed for debugging purposes.

![Image](https://github.com/user-attachments/assets/be985a70-29f4-4861-9797-5c9a5a060d48)

> To be able to see both Source Tab and the Console Tab, just _`click on the three dot`_ at the top-right of the DevTools and, choose **Show console drawer**.

![Image](https://github.com/user-attachments/assets/be985a70-29f4-4861-9797-5c9a5a060d48)

> Also, you can directly write expressions using the _`Create live expression`_ and using the Console instead of writing a lot of code in the `console.log` inside the Code Editor.

![Image](https://github.com/user-attachments/assets/146d7f94-3a24-448b-a1ab-c27ec03df021)

## 16. Javascript debugger keyword

> Instead of using Breakpoint, it is still possible to just add the keyword `debugger` to the source code to paused the execution code at this line.

```js
const print = function () {
  const name = document.getElementById('m_name').value;
  const wish = document.getElementById('m_wish').value;

  const message =
    'Hello ' + name + ', Your wish `' + +wish + '` may come true!'; // bug is located in this line. Remove the + sign before wish variable.
  logger(message);
  document.getElementById('output').innerHTML =
    '<span class="message">' + message + '</span>';
};
debugger; // The execution code will be paused at this line of code
const logger = function (text) {
  console.log('**** I am a logger function ****');
  console.log(text);
};
```

## 17. Edit and Save on Runtime and using Workspace

> When we are debugging source code, one of the most important things is to get original source code saved from the local drive after the fixed has been applied from the Code Editor.

> That is the moment _`Workspace`_ cames to the picture because, it connects your source code with the Code Editor. This is done by _`adding the project source folder to the Workspace`_.
> You can add as many project you want to the Workspace and, to remove a project, right-click to the project and select _`Remove from workspace`_.
> **Notice**: _The source code is saved from the two sides: from Workspace or from Project source code_.

![Image](https://github.com/user-attachments/assets/b1403a6e-4980-434a-9445-74c223aa64e2)

## 18. Debugging with VS Code

> Most of the things used with VS Code to debug the source code are the same as the Chrome DevTools, and just a few things are differents. Instead of DevTools, VS Code uses beakpoint in red and, need a first configuration to be able to use the debugger.

> To configure the _`VS Code Debugger`_, click on the _`Run and Debug`_ (**Ctrl + Shift + D**), if it is the first time, then click on _`Run and Debug`_. Once functions options are showned, choose _`Web App (Chrome)`_ to definitly use Chrome browser.

- **Debug jest testing using vscode-jest**: Is used when we are performing unit test with Jest.
- **Node js**: To debug Node Js applications.
- **VS Code Extension Development**: When we are developping VS Code extension.
- **Web App (Chrome)**: To debug web application inside the Chrome web browser.
- **Web App (Edge)**: To debug web application inside the Edge web browser.
- **More Node Js options**: To use others options available for Node Js.
- **Install an extension for JavaScript**: When we want to add a specific JavaScript extention to takes care the debugger.

![Image](https://github.com/user-attachments/assets/0eb77631-6e98-452d-9780-425f5b103165)

![Image](https://github.com/user-attachments/assets/49ce65b2-3db0-4e4a-a73a-54c4c0b540e5)

> The `launch.json` file will be created inside the `.vscode` file as showned below. Some information could be changes, but the important will be the port number (from **8080** to **5500** to be able to use the _`VS Code Live sever port number`_):

![Image](https://github.com/user-attachments/assets/7f579e9b-62f4-4bde-b096-3d635ce332fd)

> From the Run and Debug section, click on _`Launch button`_ to open the project from Chrome web browser and, start debugging. If a breakpoint was set up, the code will paused on this line.

![Image](https://github.com/user-attachments/assets/3635502c-9fe5-42dd-ac73-658cc8ca1885)

![Image](https://github.com/user-attachments/assets/c5d9a204-36f9-4313-96f7-77a2d9457ae6)

![Image](https://github.com/user-attachments/assets/46cc0413-7c0f-4f04-a2ef-5f965a7a5965)

> The purpose of each button in VS Code Debugger is explained below:

1. **Continue** or **Jump** (`F5`): It resumes the execution or goes directly to the next breakpoint if it was set up.
2. **Step Over** (`F10`): Carried out the _`step action`_. It allows to execute the code line by line.
3. **Step Into** (`F11`): It investigates a function in a deeper way.
4. **Step Out** (`Shift + F11`): It allows to go out of a function once you are inside it.
5. **Restart** (`Ctrl + Shift + F5`): _`Restarts`_ the execution of the project.
6. **Stop** (`Ctrl + F5`): Disable all the breakpoint at once.

## 19. A Few Debugging Tips

> There are some tips to help developer while using debugger:

1. **Accept**: Accept that debugging is like being a detective in crime movies. As developers, we must accept creating bugs but also fixing them.
2. **Bigger picture**: One component could have the chance to break something in other elements. Understand how different components work together, how modules work, and how data is exchanged before going through the debugging.
3. **Debug others' code**: In a company, a lot of people work together, and you can be responsible for debugging the code made by someone else; other developers could also be responsible for debugging your code.
4. **Discuss and look at other angles**: Discussing with peers helps accelerate the debugging and improves the overall work or teamwork.
5. **Tools**: Use proper tools to improve bug fixing.
6. **Take a break**: Breaks increase productivity and creativity. Once you are debugging some code, work a bit, then take a break and resume the work. Avoid working for hours without taking a break to refresh your brain or take a cup of coffee.
7. **Don't give up**: Be patient, have energy, and work on different perspectives or use different methodologies.
