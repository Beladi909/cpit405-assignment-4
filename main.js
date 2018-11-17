// Step 1: Images data
/* Note: Change load type in the jsfiddle 
 * JavaScript setting into body
 */
var image;
var number = 0;
function doClick() {

    var InputSearch = document.getElementById('inputSearch').value;
    var xhttp = new XMLHttpRequest();
    // When the request is successful, finished, and response is ready, execute these function
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resObj = JSON.parse(xhttp.responseText);
            var ulElem = document.createElement("ul"); ulElem.id = "list";
            image = resObj.data;
            if (number >= 1) {
                var ull = document.getElementById("list");
                ull.parentNode.removeChild(ull);
            }
            var i = 0;
            do {
                var li_in = document.createElement("li");
                var img_in = document.createElement("img");
                img_in.src = image[i].link;
                if (img_in.src.endsWith("jpg")) {
                    console.log(img_in.src);
                    img_in.style.height = "200px";
                    img_in.style.width = "250px";
                    li_in.appendChild(img_in);
                    ulElem.appendChild(li_in)
                }
                i++;
            } while (i < image.length)
            document.body.appendChild(ulElem);
            number++;
        }
    }
    console.log("https://api.imgur.com/3/gallery/search/top/all/1?q=" + InputSearch)
    console.log(InputSearch);
    // Send an asynchronous HTTP GET request to the given end point (url)
    xhttp.open("GET", "https://api.imgur.com/3/gallery/search/top/all/1?q=" + InputSearch, true);
    xhttp.setRequestHeader("Authorization", "Client-ID e8f83c0b7c195bf")
    xhttp.send();

}
//================================================================================
// Step 2: Generate the HTML Page using the DOM API

var hr1 = document.createElement("hr")
var UlLis1 = document.createElement("ul"); UlLis1.className = "op";
//item1
var item1 = document.createElement("li");
var a1 = document.createElement("a");
a1.textContent = "All";
a1.setAttribute('href', "#");
item1.appendChild(a1);
UlLis1.appendChild(item1);
//item2
var item2 = document.createElement("li");
var a2 = document.createElement("a");
a2.textContent = "image";
a2.setAttribute('href', "#");
item2.appendChild(a2);
UlLis1.appendChild(item2);
//item3
var item3 = document.createElement("li");
var a3 = document.createElement("a");
a3.textContent = "Video";
a3.setAttribute('href', "#");
item3.appendChild(a3);
UlLis1.appendChild(item3);
//item4
var item4 = document.createElement("li");
var a4 = document.createElement("a");
a4.textContent = "news";
a4.setAttribute('href', "#");
item4.appendChild(a4);
UlLis1.appendChild(item4);
//item5
var item5 = document.createElement("li");
var a5 = document.createElement("a");
a5.textContent = "MAP";
a5.setAttribute('href', "#");
item5.appendChild(a5);
UlLis1.appendChild(item5);

//item6
var item6 = document.createElement("li");
var button_2 = document.createElement("button"); button_2.className = "but1";
var a6 = document.createElement("a");
a6.textContent = "Advanced Search";
a6.setAttribute('href', "https://beladi909.github.io/cpit405-assignment-2/Assi2_p3.html");
button_2.appendChild(a6);
item6.appendChild(button_2);
UlLis1.appendChild(item6);

//============================================================================
// create option and add in ul 
var select = document.createElement("select");
select.id = "mySelect";
select.onchange = myFunction;

var op0 = document.createElement("option");
op0.value = "select option";
var text_in_op0 = document.createTextNode("sort");
op0.appendChild(text_in_op0);
select.appendChild(op0);

//item1
var op1 = document.createElement("option");
op1.value = "title";
var text_in_op1 = document.createTextNode(" sort by Title ");
op1.appendChild(text_in_op1);
select.appendChild(op1);


//item2
var op2 = document.createElement("option");
op2.value = "Size";
var text_in_op2 = document.createTextNode(" sort by Size ");
op2.appendChild(text_in_op2);
select.appendChild(op2);


//item3
var op3 = document.createElement("option");
op3.value = "date";
var text_in_op3 = document.createTextNode(" sort by date ");
op3.appendChild(text_in_op3);
select.appendChild(op3);
UlLis1.appendChild(select);
document.body.appendChild(UlLis1);
document.body.appendChild(hr1);


/* 
//addImage();//add Images in page 
function addImage() {
    var ulElem = document.createElement("ul"); ulElem.id = "list";
    var i;
    for (i = 0; i < images.length; i++) {
        var li0 = document.createElement("li");
        var img0 = document.createElement("img");
        img0.src = images[i].src;
        img0.style.height = "200px";
        img0.style.width = "250px";
        li0.appendChild(img0);
        ulElem.appendChild(li0)
    }
    document.body.appendChild(ulElem);
}
*/
//=======================================================================================

function sortByTitle(a, b) {

    return a.title.localeCompare(b.title);
}


function sortBySize(a, b) {
    return b.size - a.size;

}


function sortByDate(a, b) {
    console.log("in sort date method")
    var d = new Date(b.datetime);
    var d2 = new Date(a.datetime);
    if (d < d2) {
        return 1;
    }
    else if (d > d2) {
        return -1;
    }
    else {
        return 0;
    }
}

//********************************************************************* */
function myFunction() {
    var x = document.getElementById("mySelect").value;
    if (x == "Size") {
        image.sort(sortBySize);
        clear();
        dis(image)
    }
    if (x == "title") {
        image.sort(sortByTitle);
        clear();
        dis(image)
    }
    if (x == "date") {
        image.sort(sortByDate);
        clear();
        dis(image)
    }
}
//********************************************************************* */
function dis(image) {
    number++;
    var z = 0;
    var ulElem;
    if (image == null) {
        console.log("array is null")
    } else {
        for (var i = 0; i < image.length; i++) {
            var l_S = document.createElement("li");
            var im_S = document.createElement("img");
            im_S.src = image[i].link;
            if (im_S.src.endsWith("jpg")) {
                console.log(im_S.src); console.log(z++)
                im_S.style.height = "200px";
                im_S.style.width = "250px";
                ulElem = document.getElementById("list");
                l_S.appendChild(im_S);
                ulElem.appendChild(l_S);
            }
        }
        document.body.appendChild(ulElem);
    }
}
//********************************************************************* */
function clear() {
    var ul = document.getElementById("list");
    if (ul == null) {
        console.log("ul is null")
    } else {
        var lis = ul.getElementsByTagName("li")
        while (lis.length > 0) {
            ul.removeChild(lis[0]);
        }
        console.log("in cler");
    }
}


