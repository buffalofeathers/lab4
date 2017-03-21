document.addEventListener('DOMContentLoaded', function() {
    var btn = document.createElement('button');
    // var colors = ['red', 'blue', 'cyan', 'green','yellow', 'purple', 'pink']
    // btn.innerHTML = 'Add Square';
    // btn.addEventListener('click', function (){})
    // square.addEventListener('dblclick', deleteNeighbor);
    btn.style.display = 'block';
    document.body.appendChild(btn);
    var text = document.createTextNode('Add Square');
    btn.appendChild(text);


    // var squareContainer = document.createElement('div');
    // div.id = 'square-container';
    // document.body.appendChild(squarecontainer);

        // function addSquare() {
        //     var square = document.createElement(div);
        //     square.className = "square";
        //     docutmnet.body.appendChild(square)

        // }

        // var squaresInDocument= document.getElementsByClassName('square');
        // square.id = squaresInDocument.length;
        // square.addEventListener('mouseover', showId);
        // squareContainer.appendChild(square);

// function setRandomBackgroundColor(e) {
//     // geberates radin ubteger 0 up to but not including array length so a valid index. Math.floor rounds down to integer
//     var random = Math.floor(Math.random() * colors.length);
//     e.target.style.backgroundColor = colors[random];
});

// function showId(e) {
//     // e.target is an html element
//     e.target.innerHTML = e.target.id;
// }

// function hideId(e) {
//     e.target.innerHTML = '';
// }
// function deletNeighbor(e) {
//     var clicked = e.target;
//     if (clicked.id % 2 === 0) {
//         if (clicked.nextElementSibling) {
//             clicked.nextElementSibling.remove();
//         }
//     } else {
//         alert('There is not an element to the right of this one! Try again!');
//     } } else {
//     if (clicked.previousElementSiblin) {
//         clicked.previosElementSibling.remove();
//         
// } else {
//     alert('There is not an element to the left of this one! Try again!');
// }
//     }
// }





    var i= 0;
        
        
    
    btn.addEventListener('click', function() {
        var div = document.createElement('div');
        div.className = 'square';
        div.style.backgroundColor = "black";
        div.style.height = "100px";
        div.style.width = "100px";
        div.style.margin = "10px";
        div.style.display = "inline-block";
        div.style.color = "white";
        div.id = i;
        i++;
        
        document.body.appendChild(div);


        div.addEventListener('mouseover', function(e) {
            var num = e.target.id;
            document.getElementById(num).innerHTML = num;
         div.addEventListener('mouseout', function() {
            document.getElementById(num).innerHTML = "";

         
         });
        });
                });

// }

   
// );


// document.addEventListener("mousemove", myFunction);

// function myFunction() {
//     document.getElementById("demo").innerHTML = Math.random();
// }

// function removeHandler() {
//     document.removeEventListener("mousemove", myFunction);
// }