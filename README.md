# Lab 8 - Starter
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
1. Within a Github action that runs whenever code is pushed
This makes the results of the test public and ensures that everyone's code passes the same tests. It also makes the merging process easier as if you are merging code that you didn't write you don't need to test it locally yourself. 

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
no

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
No, because writing and sending a message is probably too much to be considered one unit. 

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
Yes because limiting message length can fit in one unit test and can be simply checked with one assert statement, message length <= 80.