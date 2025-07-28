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

> When we program, sometimes things do not work as expected, and we need to analyze the source code properly to determine what is going wrong. That is the purpose of this lesson.

## 2. What is debugging

> When something is missing during the software development process for some reason (Skills issue, lack of understanding of technology, environmental issues, etc.) and the result of the code doesn't work as it should be, it is called a bug. So, the reverse of _`a bug`_ is called _`debugging`_. We have to find the bug and eliminate it.

> _`Debugging`_ is the process of tracking the bug or removing it. And when we fix the bug, we call this process the _`fixing`_.

## 3. Application to Debug

> The application to debug is the source code itself.

## 4. The famous console.log

> This is the best way to figure out what is going wrong in the code. These could be messages for **information**, **warnings**, or **error** purposes.

## 5. DevTools Overview

> _`DevTools`_ provides different ways of analyzing the problem in the source code. Most of the time **the Chrome DevTool** (accessed with the F12 key or through inspect from the right-click of the web page) is used, or in conjunction with VS Code.

## 6. The source Panel

> _`The source Panel Tab`_ (In Chrome) helps debug JavaScript source code and, has **three** primary sections :

1. _`File navigator`_ section or _`Navigator`_ section (On left side): This section contains all the files to browse on or look for by using the command `Ctrl + p` (on Windows) or `Cmd + p` (on Mac).
2. _`Code Editor`_ section (in the right side).
3. _`Debugger`_ Section (at the bottom).

![Image](https://github.com/user-attachments/assets/ab79e893-a391-4489-b77f-fb25df1df507)

> Others Tabs are:

- _`Elements`_ (to inspect UI objects).
- _`Console`_ (the most famous for showing some kinds of messages to programmers).
- _`Network`_ (mainly to deal with asynchronous programming).
- _`Performance`_ (analyzing application performances: memory resources, processor, etc.).
- _`Lighthouse`_ (to audit an entire application).
- _`Privacy and Security`_ (to deal with third-party cookies, etc.).

## 7. Setting Debug Points

> To debug the code, we most of time use _`breakpoint`_ (a point of the code where the code execution will be paused and allows you to look at the code in runtime mode to figure out what was happening).

> This is done by **clicking on the line number** (Except on the empty line) we want the code to be paused on the Code Editor section. Any number of breakpoint can be added.

## 8. Debugging Code

> To be able to analyze the source code once breakpoints are set up, we should execute the app to simulate a scenario where a user is trying to use the application.

![Image](https://github.com/user-attachments/assets/b235557c-13c5-4beb-be10-81cb91b2adaa)

> To have a good understanding of what has introduced a bug, we have to go through the code **line by line**, even if functions can be called by others (_`step into`_ or _`step out`_) or returned by others.

![Image](https://github.com/user-attachments/assets/3da22da0-ae16-4608-b00a-dfedb5621e01)

> The purpose of each button is explained below:

1. **Resume script execution** or **Jump** (`F8`): It resumes the execution or goes directly to the next breakpoint if it was set up.
2. **Step over next function call** (`F10`): It is like Step, but it has some differences. It allows to execute the code line by line, but rather than go inside a function when it is called and execute it line by line, it ignore it and, go to the next line of code after this function call.
3. **Step into next function call** (`F11`): It investigate a function in a deeper way.
4. **Step out of current function** (`Shift + F11`): It allows to go out a function once you are inside it.
5. **Step** (`F9`): Carried out the _`step action`_. This enables stepping through JavaScript code line by line. When it reaches a function call, it goes inside the function and executes it line by line.
6. **Desactivate breakpoints** (`Ctrl + F8`): Disable all the breakpoint at once.

## 9. Conditional Breakpoint

> The conditional breakpoint (look **orange** instead of **blue** for normal breakpoint) allows the execution of the code to be paused in a specific way, only _`when a condition is met`_. In this scenario, instead of add a normal breakpointm we use the right-click on the Code Editor section and, then select _`add conditional breakpoint`_.

> To remove this breakpoint, right-click again on the breakpoint and choose _`remove breakpoint`_.

![Image](https://github.com/user-attachments/assets/1c8688af-4daf-4f69-91ad-2e71a0ce17ac)

## 10. Debug Handlers

> This is useful when we are debugging _`event listeners`_ (the full list of events is in the **Event Listener Breakpoints** section from the **Debugger** section).

![Image](https://github.com/user-attachments/assets/f1c99841-d62f-421b-811e-722a893ef7d9)

## 11. Debug DOM Changes

> This is useful when debugging once something is `added`, `removed` or `changed` to the **DOM** ().

> To be able to use this kinds of debugging, from the Elements Tab, `right-clic on a specific part of the Html code` and select _`Break on`_, finally choose the mode (_`subtree modifications`_, _`attribute modifications`_ or _`node removal`_). The breakpoint is removed in the same way it was added.

![Image](https://github.com/user-attachments/assets/ae7732d6-1134-490d-82a9-234af97a3c9d)

## 12. The 'debugger' Handle

> In the debugger mode, each variable could be inspected to show its current value from runtime execution. When you are selecting a variable or a part of code, the debugger is able to tell its content.

> When the issue is found, the code can be **temporaly edited** on the `Code Editor` itself, and after saving (with _`Ctrl + s`_), the code will **rerun**. **Once done from the debugger, the bug should be fixed on the source file** to completely hold the right result.

## 13. Debugging Scope

## 14. Observing Call Stack

## 15. Watching variable Expressions

## 16. Edit and Save on Runtime

## 17. Workspace

## 18. Debugging with VS Code

### 19. A Few Debugging Tips

## Screenshots

![Image]()

![Image]()
