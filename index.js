                                 //   (I did everything i listed here as comments in console section of chrome inspect) 
                                                   // Learnt abt DOM(document object model)
// learnt how to select innerelementchild using DOM,

//  learnt how i can select IdleDeadline, class, tagnames like document.getElementById, document.getElementsByTagName, document.getElementsByClassName

//  and learn to change its stlye like ex. we have to change lets say h1 style to its color red then document.querySelector("h1").style.color = "green";

// learnt how to select a seperate text using document.querySelector("h1").textContent = "LOL";

// we can use .innerHTML to slect the text too but it will include everything inside that HTML ex. <h1><strong>Hello</strong></h1> here it will select 

//  <strong>Hello</strong> . We can use .innerHTML like document.querySelector("h1").innerHTML = "Good Bye"; 

// we can add class and remove class in JavaScript using document.querySelector("h1").classList.add("huge"); or remove as document.querySelector("h1").classList.remove("huge"); or can add if not there and remove if there like document.querySelector("h1").classList.toggle("huge");

// we can add attributes using JavaScript like we can "get" and "set" attributes as like document.querySelector("a").attributes;--> to see how many attributes are there document.querySelector("a").getAttribute("href");--> to see whats inside that specific attribute and document.querySelector("a").setAttribute("href", "https://www.bing.com")--> to set the selected attribute to differnt link.