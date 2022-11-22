# Lab 8 - Starter

1. Where would you fit your automated tests in your Recipe project development pipeline?  
   *Within a Github action that runs whenever code is pushed. This is part of the Continuous Integreation pipeline.*

2. Would you use an end to end test to check if a function is returning the correct output?  
    *No.*

3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not?  
   *No. Because the message feature should be a big feature which consists of many other small features. We should use unit testing for features like writing messages or sending messages themselves.*

4. Would you use a unit test to test the “max message length” feature of a messaging application?
   *Yes. This feature is small and independent with other features. It can be considered as an individual part which is suitable for unit testing.*