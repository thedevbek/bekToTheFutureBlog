---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'DSA Series: Understanding Data Structures'
pubDate: 02-20-2024
description: 'Understanding why we need Data Structures '
author: 'Bek Johansson'
image:
    url: '/images/post-18.png'
    alt: 'Code image'
tags: ["programming", "blogging", "learning in public", "technology", "DSA"]
---

The first step in mastering Data Structures and Algorithms (DSA) involves grasping their necessity. Let’s start with Google’s definition of Data Structures. Google characterizes data as “facts and statistics collected together for reference or analysis.” Simply put, data refers to information on various topics. Additionally, according to Google, structures denote “the arrangement of and relations between the parts or elements of something complex.” In simpler terms, structures dictate how data is organized. If, like me, you find this concept unfamiliar, don’t worry. DSAs offer clarity and organization.

Now, why do we need organized data? As software developers, our goal is to create clean, maintainable, and efficient code. This is where organized data becomes essential, as it significantly impacts the speed of your code.

As evident from the code image provide, it’s clean and maintainable. But which version is faster? If you picked version two, you’re correct. Version one loops through the loop 10 times compared to the five times that version two loops through.

Realizing that to obtain an even number, you need to increment by two (number += 2;) makes the array faster. Imagine how much quicker it would be with an array of 1000. Version two would only run 500 times, making it twice as fast as version one. This underscores the importance of organized data.

The array `let array = [java, javascript, python, C++, R]` is a fundamental data structure. Here's what you should understand about this array containing five programming languages you might wish to learn. The size of an array is determined by the number of elements present in it. In this case, the elements are programming languages.

Now, array indexing works a bit differently. Firstly, note that arrays start with index 0, unlike our conventional counting. The array begins indexing its elements at 0; these indices are called indexes.

Many data structures feature their own operations, including:

	* Read: Retrieves a value at a specific index. For example, index 1 from the above array would yield ‘javascript’.
	* Search: Involves looking for a particular value within the data structure.
	* Insert: As the name suggests, insertion entails adding a value into the array.
	* Delete: Used to completely remove a value from a data structure.

We gauge the speed of an operation not in absolute time, but rather in the number of steps it requires to complete. This measurement is known as time complexity.

For the read operation, it consistently requires only one step since the computer can directly access the index number. However, with the search operation, it’s essentially the reverse of reading because here, you have the value and need to find the index, potentially involving multiple steps.

While computers can directly access memory addresses for reading an index, they can’t locate a specific value without searching for it.

The basic search operation, where the computer checks one cell at a time, is termed linear search. Whether you have 5 cells or 50 cells, if the sought value is in the last cell, it will take 5 or 50 steps. We’ll explore different search methods in this series.

Insertion combines read and search steps, potentially requiring one or many steps to execute. For instance, appending ‘Go’ to the programming array mentioned earlier would be a single step, as the computer tracks the array’s size and starting address.

However, inserting a data cell somewhere other than the array’s end necessitates shifting cells, moving them one at a time until reaching the insertion spot. This can entail additional steps.

Lastly, let’s discuss the deletion operation. It’s crucial not to leave empty cells in an array, as it hampers its effectiveness. Although deletion itself is a single step, empty cells must be filled by shifting pieces over to close the gap, resulting in additional steps.

In conclusion, we’ve learned in this introductory post of the DSA series that time complexity is measured in the number of steps, not actual time. We’ve also realized how selecting the appropriate data structure can enhance the efficiency of your program.

For a more comprehensive understanding of DSA, I recommend A Common-Sense Guide to Data Structures and Algorithms by Jay Wengrow. The book delves deeper into these concepts and presents them in a clear and concise manner, making the learning process enjoyable.
