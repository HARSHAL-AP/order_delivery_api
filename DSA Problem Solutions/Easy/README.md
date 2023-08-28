1: Am I Perfect?
    - Write a function that tells if a given number is perfect or not. A number is called perfect if the sum of the factors of a number (excluding the number itself) is the number itself.
    - Output
      - Return “Perfect” if the number is perfect 
      - if the sum of factors is greater than the input return “Abundant” 
      - if the sum of factors is lesser than the input return “Deficient”.
 
    Example: 
    ```js
    1) 6 -> factors(1,2,3) -> sum (1+2+3) = 6 (perfect number)
    2) 12 -> factors(1,2,3,4,6) -> sum(1+2+3+4+6) = 16 > 12 (Abundant)
    3) 8 -> factors(1,2,4) -> sum(1+2+4) = 7 < 8 (Deficient)
    ```



2. Shorten me!
    - Implement 2 functions, one that shortens a string of values by replacing consecutive data elements with just one data value and count of the consecutive values.
    - For Example, we can shorten the characters “AAAAAAAAAAABWWWWWWWWWWWBB” with “11AB11W2B”
    - The other function should take the shortened string and give back the original value
    - For example, we take the above-shortened characters “11AB11W2B” and get back “AAAAAAAAAAABWWWWWWWWWWWBB”
 
    - For simplicity, you can assume that the unencoded string will only contain the letters A through Z (either lower or upper case) and whitespace. This way data to be encoded will never contain any numbers and numbers inside data to be decoded always represent the count for the following character.
 