$(function () {

//with the find function, we can go through everything with the id of list and find all the li elemens and apply the yellow highlight style to them. It will go repeatedly through all levels of children that are availble. Notice that the children are a darker yellow!
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8");

//We can also select by the only the children of an element. Here we are selecting only the children of the #list. 
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8");

//
//Using the parents function, we can highlight all the parents of the #list that are divs! 
  // $("#list").parents("div").css("background-color", "rgba(150, 150, 30, 0.8");

  //You can specify a specific parent too 
  // $("#list").parent().css("background-color", "rgba(150, 150, 30, 0.8");

  //we can also call siblings!Here you can see that when we call to ind all the siblings of the #list, we can see them highlight blue. You can specify what kind of sibling by passing in what you want in the sibling function such as "p" or "h2". 
  // $("#list").siblings().css("background-color", "rgba(100, 200, 150, 0.8");

  //You can also use the prev function to get the previous element. It will give you the direct previous element to the #list. You can also do this for the next element with the next function.
  // $("#list").prev().css("background-color", "rgba(100, 200, 150, 0.8");
  // $("#list").next().css("background-color", "rgba(155, 150, 155, 0.8");
  //While you can use prev and next together to get the current element, but it is generally not somthing you would do as it is just unecessary computations. You can just select the #list and it would do the same thing in less code.
  // $("#list").prev().next().css("background-color", "rgba(155, 150, 155, 0.8"); <--DO NOT DO. Below is the same outcome. 
  // $("#list").css("background-color", "rgba(155, 150, 155, 0.8");

// Mini challenge! He wants you to select all the direct next elements that come after the header elements. 
//Then he wanst you to select all the input child elements of the form elements that are of the type password. 
//using : before a commonly used element gets all of the different kinds of that elememt. There are many header types (h1-h6) and : gets them all. 
$(":header").next().css("background-color", "rgba(155, 150, 155, 0.8");
//short way to find the input password. 
$("input:password").css("background-color", "rgba(155, 150, 155, 0.8");
//bellow is also an acceptable answer, if you wanted to be specific. 
$("form").find(":password").css("background-color", "rgba(155, 150, 155, 0.8");


});


//This lectures will teach you how you can get any elements you want from the page. 

