 Hide that PIN!
    - Write a function that converts a given PIN to a series of texts that ensures it can be sent out in plain sight without anyone knowing it. 
    - You first convert the given input number into binary and then use the table below to generate the string equivalent.
    
    ```js
    1 = pop
    10 = double rip
    100 = hide your mints
    1000 = fall
    10000 = reverse the order of the output.
    ```
 
    Examples:
    ```js
    3 -> binary 11 -> 1 + 10 -> output -> [“pop”,”double rip”]

    19 -> binary 10011 -> 1 + 10 + 10000 -> output -> [“double rip”,”pop”]
    ```
    - NOTE: Please note the reversal operation in the second example due to the presence of 10000

