---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Virtual Memory: Making Sense of RAM and Disk Space'
pubDate: 02-08-2024
description: 'Understanding RAM and Disk Space. '
author: 'Bek Johansson'
image:
    url: '/images/post-11.jpg'
    alt: 'Floppy Disk'
tags: ["programming", "blogging", "learning in public", "technology"]
---

This brief essay is my contribution to the graduate-level Operating Systems course, focusing on the challenging concept of Virtual Memory. Given its complexity, I decided to articulate and share my comprehension of this subject.

Virtual memory leverages disk space as a substitute for physical RAM, creating the illusion for applications that they have access to an extensive amount of RAM. By combining physical RAM and disk space, virtual memory expands the perceived memory capacity available to applications. This approach enables applications to handle more data than the actual physical RAM can support, with the operating system overseeing the transfer of data between RAM and disk as necessary.

A page fault occurs when a program attempts to access a portion of virtual memory not currently residing in physical memory (RAM). In such instances, the operating system must fetch the required page from secondary storage, typically a hard disk. While virtual memory offers advantages such as the illusion of abundant memory, it is accompanied by certain drawbacks:

· Retrieving data from a hard disk is a slow process.

· When a page fault occurs, the CPU pauses program execution until the required data is loaded into RAM.

· An increased number of I/O operations raises the likelihood of system degradation.

· Thrashing can happen when the system dedicates excessive time to shuffling pages between RAM and other storage locations.

· Utilizing disk space for virtual memory reduces the space available for other purposes.

Paul Rubens’ explanation, emphasizing the physical location of virtual and physical RAM on a hard drive or storage device, clarified this concept for me. Rubens’ use of plain language without excessive technical jargon was particularly helpful in demystifying the topic.

Moreover, David Black-Schaffer’s YouTube series, which includes graphs, charts, and step-by-step models, significantly contributed to my understanding of virtual memory. Black-Schaffer’s method of breaking down complex concepts into 14 videos, providing visual explanations, and incorporating sample problems enhanced my comprehension.

Initially, the textbook “Modern Operating Systems” left me perplexed, as the concept of virtual memory was unfamiliar. However, a combination of revisiting Black-Schaffer’s video series and assimilating Rubens’ straightforward explanation in the article “What is Virtual Memory? Ultimate Guide on How It Works” gradually clarified the concept. While I acknowledge there is more to learn, these resources have laid a solid foundation for my understanding of virtual memory.

Rubens, P. (2023, January 25). What is virtual memory? ultimate guide on how it works: ESF. Enterprise Storage Forum. https://www.enterprisestorageforum.com/hardware/virtual-memory/#mechanics

Tanenbaum, A. S., Bos, H. (20220617). Modern Operating Systems, 5th Edition. [VitalSource Bookshelf 10.3.1]. Retrieved from vbk://9780137618941

Virtual memory: 1 Introduction. YouTube. (2014, July 14). https://www.youtube.com/watch?v=qcBIvnQt0Bw&list=PLiwt1iVUib9s2Uo5BeYmwkDFUh70fJPxX&index=1