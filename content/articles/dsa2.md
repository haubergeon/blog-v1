---
title: Data Structures and Algotrithms - Day 1
date: 21/5/2021
author:
    name: Gursimran Singh
---

# The Big OH notation.

## Context
When it comes to making algorithms to solve problems, you really only care about two things :-
1. Does the algorithms solve the problem in it's entirety?
2. And does it solve the problem fast enough?

Any problem can be seen in many ways - your algorithm might work really well for a particular instance of the problem. For example, if I want to search for a name in list of names that has been arranged alphabetically and I iterate through each of the names starting with "A" and working my way to "Z". Now for names that start with A, my algorithm is probably really fast but a Zebra would probably have to wait while my algorithm finds its name. 

Your algorithm should be able to solve all instances of the problem at an acceptable pace, without grinding to a painfull halt no matter the use case.

## Implementation
As such you don't really care about the instances where your algorithms works really well already, you find yourself caring about the scenarios where your algorithm is just not fast enough and that is where the Big Oh notation comes into the picture.

Big Oh essentially is a way of thinking where you do not care about the multiplicative constants and is used to compare the runtime of algorithms.

## Example
Lets take two algorithms one say Binary Search has O(lg n) runtime and linear search has O(n) runtime. O(whatever function) is how we represent the Big Oh notation. Now these two are the worst case scenarios for these two algorithms but which one is better?
What Big O indicates is how the run time changes as the number "n" -  which represents the data you're working with increases. We know exponential growth is super fast and logs are nothing but the inverse of exponentials which means they grow super slow and thus with increase in "n".

lg n << n

And that is how you decide that O(lgn) algorithm is better than for O(n) algortihm.