# Unexpected '0' Return Value with Null Arguments in JavaScript

This repository demonstrates a subtle bug in a simple JavaScript function. The function `foo` adds two numbers. However, if either input is `null`, it unexpectedly returns 0 instead of throwing an error or handling the null value gracefully.  This behavior might be problematic in scenarios where null values indicate missing data that should trigger alternative processing.

## Bug Description

The `foo` function does not robustly handle `null` inputs.  When one or both arguments are null, it silently returns 0, potentially masking errors or leading to incorrect calculations.

## Solution

The improved function explicitly checks for `null` and handles them by either throwing an error or providing a default value.  This ensures that the function's behavior is more predictable and robust.