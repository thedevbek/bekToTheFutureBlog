---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'DSA Series: Exploring The Set Data Structure — Part 3'
pubDate: 03/12/2024
author: 'Bek Johansson'
image:
    url: '/images/post-20.jpg'
    alt: 'passport image'
tags: ["programming", "technology","tutorial"]
---
<div class='prose'>

Last time, we talked about the nitty-gritty of time complexity and how it helps us write code that’s both efficient and speedy. Today, let’s dive into something cool: the array-based set, which is like an array but with a twist.

Imagine having a set like this: `[‘a’, ‘b’, ‘c’]`. Now, this set is a bit picky — it doesn’t allow duplicates. If you try to add another ‘a’, ‘b’, or ‘c’, your computer will kindly let you know it’s a no-go. Pretty neat, right? We’re focusing on the array-based set because it’s super handy when you want to keep things unique in your data.

Think of it like your passport number. We can’t have two passports with the same number floating around — that would be a mess! Or think about your contacts list; having two “Johns” with different numbers would lead to confusion. So, having this uniqueness rule is helpful, but it does affect one of our four main operations. Can you guess which one?

Let’s break it down. Reading and searching in the array-based set work just like in a regular array — no surprises there. Deleting items also follows the same steps, so it’s pretty straightforward.

Now, here’s where things get interesting: insertion. While adding something to the end of a regular array is a breeze (just one step!), with a set, you’ve got to make sure it’s not already there. Since the array can’t just jump to where it needs to be, it has to start from the beginning and scan through to avoid duplicates before adding the new item.

Inserting something into a set takes a bit more time than with a regular array. But hey, it’s worth it when you need to keep things unique, like those passport numbers!

The trickiest part for sets is adding something at the beginning — it takes a bit more work because it has to search and then shuffle things around to make room for the new item. But you know what? Despite these extra steps, sets are your go-to when you absolutely must keep things one-of-a-kind, like those precious passport IDs.

For less strict needs, a regular array might be the way to go since it’s simpler and faster for basic operations. Understanding these differences helps us pick the right tool for the job and keeps our programs running smoothly.

So, to sum it up, knowing how our data structures perform can make a world of difference in our coding adventures. It’s like picking the right tool from your toolbox — you wouldn’t use a sledgehammer for every nail, would you? Today, we’ve learned how to weigh our options between an array and a set, considering what we need and how it affects our program’s performance. Happy coding!


</div>