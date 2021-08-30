Start with promise.html then (after) do the test-space files with the test-space2-run-me3.html file the most advanced.


SelfEd Date: 		06/01/2021

SelfEd Title:       About Callbacks, Promises, and Asyn Await
 
SelfEd Location:	Local:   
                    Cloud:                                                                                                                                
SelfEd Objective:   To better understand asynchronous javascript for the purposes of writing better code for data access.

SelfEd Catalyst:    To reduce bad loading and get data into place in proper order.

SelfEd References:  https://blog.bitsrc.io/understanding-asynchronous-javascript-the-event-loop-74cd408419ff
                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
                    https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
                    https://www.syntaxsuccess.com/viewarticle/angular-promise-chaining-explained
                    https://ankitkamboj18.medium.com/is-javascript-synchronous-or-asynchronous-what-the-hell-is-a-promise-302ee008dfcd
                    https://www.w3schools.com/Js/js_promise.asp

Process:

06/01/2021
  Start with promise.html then (after) do the test-space files with the 
  test-space2-run-me3.html file the most advanced.

  08/05/2021 - Wrote this above back when. Do as it says.

08/19/2021
  Returning to this promise research because I need to apply it to "nested" LR.
  So need to apply promise architecture to my LR API when one LR method relies 
  on another LR method (nested).

08/20/2021
  Started promise research to manage my nested LR architecture and the more I
  figure out the more I realize this is just plain old synchronous code when 
  needed. Makes me wonder why this wasn't part of javascript in the first place
  cause obviously this solves many problems. 

  So when an LR expression is needed inside another LR expression (nested) I
  need proper order. Async/Await and Promises puts code execution on hold until
  the variable/object on the current line of code has been assigned.

  So I will use Async/Await to manage my nested LR expressions. 
  See file < nested-LR_01.html > for the nested LR action.  