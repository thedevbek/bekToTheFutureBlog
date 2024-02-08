---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Top Five Programming Errors'
pubDate: 02-08-2024
description: 'Learn the 5 main errors in programming.'
author: 'Bek Johansson'
image:
    url: '/images/post-10.jpg'
    alt: 'Keyboard showing the semi-colon key. '
tags: ["programming", "blogging", "learning in public", "technology"]
---

What is an error is the first question to ask? When you write code in any programming language, the compiler or interpreter translates it into machine code. This machine code is made up of binary instructions, which are essentially a series of 0s and 1s that the computer’s CPU can directly execute.

Simply put, when you write code, the computer changes it into a language it can understand directly. This language consists of just 0s and 1s, and the computer can execute these instructions.

These errors can appear in a stack trace which gives you the type of error thrown, a description of it, and the line it is on. Sometimes it will be on the line above or below that general location of the error.

Here are the top five main types of errors in programming:

1. Syntax errors: This happens when there is a typo (in my case usually ;) in the code. So make sure to check all brackets, braces, parentheses, and semi-colons.

2. Logic errors: When you get values you are not expecting but get no stack trace error. It still runs, but the logic is wrong.

3. Runtime errors: These errors happen when you run the program, not when it’s being written.

4. Type errors: This happens when you try to use a different data type, such as a boolean and number; it doesn’t work well.

5. Boundary errors: Occur when trying to manipulate an object with a length that is out of the acceptable range. Accessing a length that goes beyond the end of the array or list.

Make sure you do the following so you can hopefully fix your code without the headache:

1. Read the error stack for type, description, and location.

2. Use print statements to see where the logic might be messing up.

3. Make sure to use documents to help you figure out how to fix the error. Don’t just depend on AI to fix it. Make sure to learn what you did wrong in hopes of not doing it again.

Stack Trace from Codeademy course.
Until recently, I would not have been able to tell you what the stack trace had in it to help me understand the error. I couldn’t tell you the difference between a Type error or a syntax error. The more I code, the more I want to know what the errors are so I can try and avoid them… learning what they are was the first step.

I’m sure there are more errors out there, but knowing these five will help you become a better programmer. So happy bug hunting, friends.
