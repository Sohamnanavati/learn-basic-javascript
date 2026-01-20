// HTML document
// ['activeElement', 'addEventListener()', 'adoptNode()', 'anchors', 'applets', 'baseURI', 'body', 'charset', 'characterSet', 'close()', 'cookie', 'createAttribute()', 'createComment()', 'createDocumentFragment()', 'createElement()', 'createEvent()', 'createTextNode()', 'defaultView', 'designMode', 'doctype', 'documentElement', 'documentMode', 'documentURI', 'domain', 'domConfig', 'embeds', 'execCommand()', 'forms', 'getElementById()', 'getElementsByClassName()', 'getElementsByName()', 'getElementsByTagName()', 'hasFocus()', 'head', 'images', 'implementation', 'importNode()', 'inputEncoding', 'lastModified', 'links', 'normalize()', 'normalizeDocument()', 'open()', 'querySelector()', 'querySelectorAll()', 'readyState', 'referrer', 'removeEventListener()', 'renameNode()', 'scripts', 'strictErrorChecking', 'title', 'URL', 'write()', 'writeln()']

// HTML element
//  ['accessKey', 'addEventListener()', 'after()', 'append()', 'appendChild()', 'attributes', 'before()', 'blur()', 'childElementCount', 'childNodes', 'children', 'classList', 'className', 'click()', 'clientHeight', 'clientLeft', 'clientTop', 'clientWidth', 'cloneNode()', 'closest()', 'compareDocumentPosition()', 'contains()', 'contentEditable', 'dir', 'firstChild', 'firstElementChild', 'focus()', 'getAttribute()', 'getAttributeNode()', 'getBoundingClientRect()', 'getElementsByClassName()', 'getElementsByTagName()', 'hasAttribute()', 'hasAttributes()', 'hasChildNodes()', 'id', 'innerHTML', 'innerText', 'insertAdjacentElement()', 'insertAdjacentHTML()', 'insertAdjacentText()', 'insertBefore()', 'isContentEditable', 'isDefaultNamespace()', 'isEqualNode()', 'isSameNode()', 'isSupported()', 'lang', 'lastChild', 'lastElementChild', 'matches()', 'namespaceURI', 'nextSibling', 'nextElementSibling', 'nodeName', 'nodeType', 'nodeValue', 'normalize()', 'offsetHeight', 'offsetWidth', 'offsetLeft', 'offsetParent', 'offsetTop', 'outerHTML', 'outerText', 'ownerDocument', 'parentNode', 'parentElement', 'previousSibling', 'previousElementSibling', 'querySelector()', 'querySelectorAll()', 'remove()', 'removeAttribute()', 'removeAttributeNode()', 'removeChild()', 'removeEventListener()', 'replaceChild()', 'scrollHeight', 'scrollIntoView()', 'scrollLeft', 'scrollTop', 'scrollWidth', 'setAttribute()', 'setAttributeNode()', 'style', 'tabIndex', 'tagName', 'textContent', 'title', 'toString()']

// // ============================================document DOM
// // addeventlistner and activeElement.
// document.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log(e.target);
//     // or 
//     console.log(document.activeElement.tagName);
// })

// // base uri
// console.log(document.baseURI)
// console.log(document.documentURI)

// // body
// console.log(document.body)

// // characterset
// console.log(document.characterSet)// UTF-8

// // open and close and write
// document.open();
// document.write("<h1>Hello World</h1>");
// document.write("<p>Open owerwrites original content.</p>");
// document.close();

// // create attribute
// let x = document.createAttribute("class") // create class attribute
// x.value = "soham" // assign value to the class we have created
// let element = document.querySelectorAll("li") // target the element
// element[0].setAttributeNode(x)
// console.log(element[0])

// // create element and document fragment
// let createElement = document.createElement("p");//create empty p tag
// createElement.innerText = "soham is a good boy1";//assign text to it
// document.body.appendChild(createElement)// append the created value to the body

// let docFrag = document.createDocumentFragment();//create fragment or a new block of empty space for-eg
// let createElement2 = document.createElement("li");// create element
// createElement2.innerText = "soham is a good boy2"// assign a text to it
// docFrag.append(createElement2)//append it to a docfrag
// document.body.appendChild(docFrag)// attach docfrag to body

// // Element nodes, text node, attribute node, comment node, document node
// let childnode = document.querySelectorAll("li");
// console.log(childnode[0].childNodes);

// //create text node
// let x = document.createTextNode("soham is a good boy 3");
// document.body.appendChild(x);

// // default view
// let x = document.defaultView;
// console.log(x.innerHeight)
// console.log(innerWidth)

// // design mode
// document.designMode = "on"// helps in allowing to edit the text in the page

// // doctype
// console.log(document.doctype.name)

// // documetn element
// console.log(document.documentElement)

// // document domian
// console.log(document.domain)

// // document form
// console.log(document.forms)

// // target element
// console.log(document.getElementById("header1"))
// console.log(document.getElementsByClassName("headerImageContainer")[0].innerHTML);//becaus this method returns an array of elements we can not directly use innerHTML. we willhave to access the array first.
// console.log(document.getElementsByTagName("li"));// same goes for this method. it returns an array. access the target element first and then CRUD it.
// console.log(document.querySelector("li").innerText)
// console.log(document.querySelectorAll("li")[1].innerText)

// // document focus
// console.log(document.hasFocus());

// // document head
// console.log(document.head);

// // document images
// console.log(document.images)

// // // import node
// let x = document.querySelectorAll("header")[0];
// console.log(x)
// let y = document.importNode(x, true)// 2nd parameter allows us to import children.
// document.body.appendChild(y)
// // example 2
// let u = document.querySelectorAll("li")[0];
// console.log(u)
// let v = document.importNode(u, true)
// document.body.appendChild(v)

// // document.lastmodified
// console.log(document.lastModified)
// let date = new Date(document.lastModified)// convert it into date object.
// console.log(date);

// // links
// let x = document.links;
// console.log(x)
// x.forEach((value, index, array)=>{
//     console.log(value.innerText)
// })// this is not directly going to work because the links return html collection not an array we first need to convet it into array first.
// Array.from(x).forEach((value, index, array)=>{
//     let y = value.innerText.trim()
//     console.log(y)
// });

// // ready status
// console.log(document.readyState)

// // remove event listner
// document.removeEventListener("click", "reference of the function");

// // document title
// console.log(document.title)

// // document URL
// console.log(document.URL)

// =========================================elements DOM
// // eventlistner
// let list = document.querySelectorAll("li");
// // console.log(list)
// list.forEach((value, index, array)=>{
//     value.addEventListener("click",(e)=>{
//         console.log(value.innerText);
//     })
// });

// // after
// let list = document.querySelectorAll("li");
// list.forEach((value, index, array)=>{
//     value.after("i was added")
// })

// // append
// let p = document.querySelectorAll("p")[0];
// let ele = document.createElement("h1")
// ele.innerText = "soham eats food";// here ele.value wont work becasue h1 tag has no value to it. value is only used if we have key value pair. h1 tag has nothing like that. so it wont work
// p.append(ele, "we can also add this text directly, this we cant do in appenChild()");

// // appendchild
// let p = document.querySelectorAll("p")[0];
// let ele = document.createElement("h1");
// ele.innerText = "hi there"
// p.appendChild(ele)

// // attributes
// let p = document.querySelectorAll("p")[0];
// console.log(p.attributes)// names-node-maps;

// // before
// let list = document.querySelectorAll("li");
// list.forEach((value, index, array)=>{
//     value.before("i was added");
// })

// // child count
// let element = document.getElementsByClassName("headerContainer");
// console.log(element[0].childElementCount);

// // child node
// // returns node-list
// let element = document.getElementsByClassName("headerContainer");
// console.log(element[0].childNodes);

// // childern
// let element = document.getElementsByClassName("headerContainer");
// console.log(element[0].children);

// // classlist
// let element = document.getElementsByClassName("headerContainer");
// element[0].classList.forEach((value, index, array)=>{
//     console.log(value)
// });

// // class name
// let element = document.getElementsByClassName("headerContainer");
// console.log(element[0].className);//read class name
// element[0].className = "sohamNanavati";// set class name
// let soh = document.getElementsByClassName("sohamNanavati")// this had to be done becasue now after changin the class to sohamNanavati, we can not target. that we have to use the changed class to target the element.
// console.log(soh[0].className);

// // click
// let element = document.getElementById("header1");
// element.addEventListener("mouseover",(e)=>{
//     element.click()
// });
// element.addEventListener("click", (e)=>{
//     e.preventDefault();
//     console.log("i was clicked")
// });

// // client 
// let element = document.getElementById("header1");
// console.log(element.clientHeight)
// console.log(element.clientWidth)
// console.log(element.clientLeft)
// console.log(element.clientTop)

// //clonenode
//  let element = document.getElementById("header1");
//  let clone = element.cloneNode(true);//Set the deep parameter to true if you also want to clone descendants (children).
//  document.body.append(clone)

// // closest
// let element = document.getElementsByClassName('headerTextContainer')[0];
// let target = element.closest(".headerContainer",".headerTextContainerul");
// console.log(target)//The closest() method searches up the DOM tree for elements which matches a specified CSS selector.The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found. The closest() method returns null() if no match is found.

// // contains
// let element = document.getElementById("trial");
// let answer = document.getElementById("header1").contains(element)
// console.log(answer)

// // contentEditable
// let element = document.getElementsByClassName("soham")[0];
// console.log(element.contentEditable)
// element.contentEditable = true;
// console.log(element.contentEditable)

// // first child
// let element = document.getElementById("trial").firstChild;
// console.log(element);// returns a text node. white space

// // first element child
// let element = document.getElementById("trial").firstElementChild;
// console.log(element);

// // getattribute and getattributenode
// let element = document.getElementById("trial");
// console.log(element.getAttribute("class"));// returns the value of the attribute
// console.log(element.getAttributeNode("class"))// returns the attribute object

// // getelementbyClassName and getElementByTagName
// // returns html collection
// let element = document.getElementById("trial");
// let target = element.getElementsByClassName("soham")
// console.log(target)

// // has attribute
// console.log(document.getElementById("header1").hasAttribute("class"))

// // hasAttributes
// console.log(document.getElementById("header1").hasAttributes());// The hasAttributes() method always returns false if the node is not an element node. The hasAttributes() method returns true if a node has attributes, otherwise false.

// // haschildnode
// let element = document.getElementsByClassName("headerContainer");
// console.log(element[0].hasChildNodes());

// // ID
// let element = document.getElementsByClassName("soham");
// console.log(element)
// console.log(element[0].id)

// // innerText and innerHTML
// let element = document.getElementById("header1")
// console.log(element.innerHTML);
// console.log(element.innerText);

// // insetAdjecentElement insetAdjecentHTML insetAdjecentText
// let element = document.getElementById("header1")
// let add = document.createElement("p");
// add.innerText="this was the added element";
// // beforebegin, beforeend, afterbegin, afterend.
// // element.insertAdjacentElement("beforebegin", add)// takes the element object. Use case: When you already have an element object.
// // element.insertAdjacentHTML("beforebegin", "<p> this was addes as a string</p>")// takes a string containing HTML markup. Use case: When you want to quickly insert new elements from HTML text.
// // element.insertAdjacentText("beforebegin", "this is the string that was added")//Takes: a plain text string (not parsed as HTML). Use case: When you want to insert raw text, not tags.

// // insertBefore
// // you are always calling it on the parent element. You pass a child of that parent as the reference node.
// let ul = document.querySelectorAll("ul")[2];
// let create = document.createElement("li");
// create.innerText = "THIS li TAG WAS ADDED NOW";
// // ul.insertBefore(create, ul)//“Insert create inside ul, but before ul.” NOT ALLOWED
// ul.insertBefore(create, ul.firstElementChild);
// // ul.appendChild(create);

// // is content editable
// let ul = document.querySelectorAll("ul")[2];
// ul.contentEditable = "true";
// console.log(ul.isContentEditable)

// // last element child and last child
// let ul = document.querySelectorAll("ul")[2];
// console.log(ul.lastElementChild)
// console.log(ul.lastChild)

// // matches()
// // It’s a DOM method that checks if an element would be selected by a given CSS selector.
// let ul = document.querySelectorAll("ul");
// console.log(ul[2].matches(" .navlinks > .navlinksContainer "))

// // next sibling next element sibling
// let element = document.getElementById("header1");
// console.log(element.nextElementSibling);
// console.log(element.nextSibling)

// // nodename and nodetype
// let element = document.getElementById("header1");
// console.log(element.nodeName);
// console.log(element.nodeType);// 1=>element node, 2=> attribute node, 3=> text node, 8=> comment node.

// // offset heigh, width, left
// let element = document.getElementById("trial");
// console.log(element.offsetHeight);
// console.log(element.offsetLeft);
// console.log(element.offsetParent);// this i need to learn
// console.log(element.offsetTop);
// console.log(element.offsetWidth);

// // outter HTML and text
// let element = document.getElementById("trial");
// console.log(element.outerText);
// console.log(element.innerText);
// console.log(element.outerHTML);
// console.log(element.innerHTML);

// // parent node and element
// let element = document.getElementById("trial");
// console.log(element.parentNode.innerHTML);
// console.log(element.parentElement.innerHTML);

// // previous sibling and previous element sibling.
// let element = document.getElementsByClassName("headerImageContainer")[0];
// console.log(element.previousElementSibling);
// console.log(element.previousSibling)

// // queryselector and queryselectorALL
// console.log(document.querySelectorAll("li"));
// console.log(document.querySelector("li"));// returns only the first match

// // remove
// let element = document.getElementById("trial");
// element.remove();

// // removeattribute and removeattributenode
// let element = document.getElementById("trial");
// element.removeAttribute("class")
// // element.removeAttributeNode("class")// this wont work beause this requires att object
// let obj = element.getAttributeNode("class")
// console.log(obj);
// element.removeAttributeNode(obj);

// // remove child
// let element = document.getElementById("header1");
// element.removeChild(element.children[0]);//removeChild() does not accept an index (like 0 or 1). It expects an actual child node of the parent.

// removeeventlistner

// // replace child
// let element = document.getElementsByTagName("ul")[2];
// let create = document.createElement("li");
// create.innerHTML =  `<a href="" >this is new </a>`
// element.replaceChild( create,element.firstElementChild)

// // set attribute
// let element = document.getElementsByClassName("navlinks")[0];
// element.setAttribute("id", "thisIdWasAdded")

// // tagname
// let element = document.getElementsByClassName("navlinks")[0];
// console.log(element.tagName)

// // text content
// let element = document.getElementsByClassName("navlinks")[0];
// console.log(element.textContent)


// // // ============attributes
// let element = document.getElementById("trial").attributes;//use this target element for this topic

// // getNamedItem
// console.log(element.getNamedItem("id"));
// console.log(element.getNamedItem("class"));

// // isId
// console.log(element.item(0));
// console.log(element.item(1));

// // length
// console.log(element.length);

// // name
// console.log(element.item(0).name)
// console.log(element.item(1).name)

// // remove names items
// element.removeNamedItem("id");
// console.log(element.item(0))
// console.log(element.item(1))

// // set names items
// let create = document.createAttribute("id");
// create.value = "trial";
// console.log(create)
// element.setNamedItem(create);
// console.log(element.item(0));
// console.log(element.item(1));

// // value
// console.log(element.item(0).value)

// ==========html collection
// // items
// let li = document.getElementsByTagName("li");
// console.log(li.item(1));
// console.log(li.length);
// console.log(li.namedItem("firstLi"));// works only with the id and name element.

// // ====================node list
// let li = document.querySelectorAll("li");
// // for each
// li.forEach((value, index, array)=>{
//     console.log(value)
// })
// // items
// console.log(li.item(0));
// // keys
// console.log(Array.from(li.keys()));
// // values
// console.log(Array.from(li.values()));
// // length
// console.log(li.length)

// // ==============dom token
// let element = document.getElementById("trial").classList;
// // add
// element.add("soham");
// console.log(element);
// // contains
// console.log(element.contains("soham"));
// // entries
// console.log(Array.from(element.entries()));
// // keys
// console.log(Array.from(element.keys()));
// // values
// console.log(Array.from(element.values()));
// // for each
// element.forEach((value, index, array)=>{
//     console.log(value);
// })
// // items
// console.log(element.item(0))
// console.log(element.item(1))
// // length
// console.log(element.length);
// // remove
// element.remove("soham");
// console.log(Array.from(element.values()));

// // replace
// element.replace("classlistTrial", "samarth");
// console.log(Array.from(element.values()));
// // toggle
// let x = document.getElementById("trial");
// x.addEventListener("click", (e)=>{
//     e.preventDefault();
//     element.toggle("samarth");
//     console.log(Array.from(element.values()));
// });
// // value
// console.log(element.value)




// | Name                     | Type       | Get | Set |
// | ------------------------ | ---------- | --- | --- |
// | activeElement            | attribute  | ✅   | ❌   |
// | addEventListener()       | none       | ❌   | ❌   |
// | adoptNode()              | none       | ✅   | ❌   |
// | anchors                  | collection | ✅   | ❌   |
// | applets                  | collection | ✅   | ❌   |
// | baseURI                  | attribute  | ✅   | ❌   |
// | body                     | attribute  | ✅   | ✅   |
// | charset                  | attribute  | ✅   | ✅   |
// | characterSet             | attribute  | ✅   | ❌   |
// | close()                  | none       | ❌   | ❌   |
// | cookie                   | attribute  | ✅   | ✅   |
// | createAttribute()        | none       | ✅   | ❌   |
// | createComment()          | none       | ✅   | ❌   |
// | createDocumentFragment() | none       | ✅   | ❌   |
// | createElement()          | none       | ✅   | ❌   |
// | createEvent()            | none       | ✅   | ❌   |
// | createTextNode()         | none       | ✅   | ❌   |
// | defaultView              | attribute  | ✅   | ❌   |
// | designMode               | attribute  | ✅   | ✅   |
// | doctype                  | attribute  | ✅   | ❌   |
// | documentElement          | attribute  | ✅   | ❌   |
// | documentMode             | attribute  | ✅   | ❌   |
// | documentURI              | attribute  | ✅   | ❌   |
// | domain                   | attribute  | ✅   | ✅   |
// | domConfig                | attribute  | ✅   | ❌   |
// | embeds                   | collection | ✅   | ❌   |
// | execCommand()            | none       | ✅   | ❌   |
// | forms                    | collection | ✅   | ❌   |
// | getElementById()         | none       | ✅   | ❌   |
// | getElementsByClassName() | none       | ✅   | ❌   |
// | getElementsByName()      | none       | ✅   | ❌   |
// | getElementsByTagName()   | none       | ✅   | ❌   |
// | hasFocus()               | none       | ✅   | ❌   |
// | head                     | attribute  | ✅   | ❌   |
// | images                   | collection | ✅   | ❌   |
// | implementation           | attribute  | ✅   | ❌   |
// | importNode()             | none       | ✅   | ❌   |
// | inputEncoding            | attribute  | ✅   | ❌   |
// | lastModified             | attribute  | ✅   | ❌   |
// | links                    | collection | ✅   | ❌   |
// | normalize()              | none       | ❌   | ❌   |
// | normalizeDocument()      | none       | ❌   | ❌   |
// | open()                   | none       | ✅   | ❌   |
// | querySelector()          | none       | ✅   | ❌   |
// | querySelectorAll()       | none       | ✅   | ❌   |
// | readyState               | attribute  | ✅   | ❌   |
// | referrer                 | attribute  | ✅   | ❌   |
// | removeEventListener()    | none       | ❌   | ❌   |
// | renameNode()             | none       | ✅   | ❌   |
// | scripts                  | collection | ✅   | ❌   |
// | strictErrorChecking      | attribute  | ✅   | ✅   |
// | title                    | attribute  | ✅   | ✅   |
// | URL                      | attribute  | ✅   | ❌   |
// | write()                  | none       | ❌   | ❌   |
// | writeln()                | none       | ❌   | ❌   |


// | Name                      | Type         | Get | Set |
// | ------------------------- | ------------ | --- | --- |
// | accessKey                 | attribute    | ✅   | ✅   |
// | addEventListener()        | none         | ❌   | ❌   |
// | after()                   | none         | ❌   | ❌   |
// | append()                  | none         | ❌   | ❌   |
// | appendChild()             | none         | ✅   | ❌   |
// | attributes                | collection   | ✅   | ❌   |
// | before()                  | none         | ❌   | ❌   |
// | blur()                    | none         | ❌   | ❌   |
// | childElementCount         | attribute    | ✅   | ❌   |
// | childNodes                | NodeList     | ✅   | ❌   |
// | children                  | collection   | ✅   | ❌   |
// | classList                 | DOMTokenList | ✅   | ✅   |
// | className                 | attribute    | ✅   | ✅   |
// | click()                   | none         | ❌   | ❌   |
// | clientHeight              | attribute    | ✅   | ❌   |
// | clientLeft                | attribute    | ✅   | ❌   |
// | clientTop                 | attribute    | ✅   | ❌   |
// | clientWidth               | attribute    | ✅   | ❌   |
// | cloneNode()               | none         | ✅   | ❌   |
// | closest()                 | none         | ✅   | ❌   |
// | compareDocumentPosition() | none         | ✅   | ❌   |
// | contains()                | none         | ✅   | ❌   |
// | contentEditable           | attribute    | ✅   | ✅   |
// | dir                       | attribute    | ✅   | ✅   |
// | firstChild                | attribute    | ✅   | ❌   |
// | firstElementChild         | attribute    | ✅   | ❌   |
// | focus()                   | none         | ❌   | ❌   |
// | getAttribute()            | none         | ✅   | ❌   |
// | getAttributeNode()        | none         | ✅   | ❌   |
// | getBoundingClientRect()   | none         | ✅   | ❌   |
// | getElementsByClassName()  | none         | ✅   | ❌   |
// | getElementsByTagName()    | none         | ✅   | ❌   |
// | hasAttribute()            | none         | ✅   | ❌   |
// | hasAttributes()           | none         | ✅   | ❌   |
// | hasChildNodes()           | none         | ✅   | ❌   |
// | id                        | attribute    | ✅   | ✅   |
// | innerHTML                 | attribute    | ✅   | ✅   |
// | innerText                 | attribute    | ✅   | ✅   |
// | insertAdjacentElement()   | none         | ✅   | ❌   |
// | insertAdjacentHTML()      | none         | ❌   | ❌   |
// | insertAdjacentText()      | none         | ❌   | ❌   |
// | insertBefore()            | none         | ✅   | ❌   |
// | isContentEditable         | attribute    | ✅   | ❌   |
// | isDefaultNamespace()      | none         | ✅   | ❌   |
// | isEqualNode()             | none         | ✅   | ❌   |
// | isSameNode()              | none         | ✅   | ❌   |
// | isSupported()             | none         | ✅   | ❌   |
// | lang                      | attribute    | ✅   | ✅   |
// | lastChild                 | attribute    | ✅   | ❌   |
// | lastElementChild          | attribute    | ✅   | ❌   |
// | matches()                 | none         | ✅   | ❌   |
// | namespaceURI              | attribute    | ✅   | ❌   |
// | nextSibling               | attribute    | ✅   | ❌   |
// | nextElementSibling        | attribute    | ✅   | ❌   |
// | nodeName                  | attribute    | ✅   | ❌   |
// | nodeType                  | attribute    | ✅   | ❌   |
// | nodeValue                 | attribute    | ✅   | ✅   |
// | normalize()               | none         | ❌   | ❌   |
// | offsetHeight              | attribute    | ✅   | ❌   |
// | offsetWidth               | attribute    | ✅   | ❌   |
// | offsetLeft                | attribute    | ✅   | ❌   |
// | offsetParent              | attribute    | ✅   | ❌   |
// | offsetTop                 | attribute    | ✅   | ❌   |
// | outerHTML                 | attribute    | ✅   | ✅   |
// | outerText                 | attribute    | ✅   | ✅   |
// | ownerDocument             | attribute    | ✅   | ❌   |
// | parentNode                | attribute    | ✅   | ❌   |
// | parentElement             | attribute    | ✅   | ❌   |
// | previousSibling           | attribute    | ✅   | ❌   |
// | previousElementSibling    | attribute    | ✅   | ❌   |
// | querySelector()           | none         | ✅   | ❌   |
// | querySelectorAll()        | none         | ✅   | ❌   |
// | remove()                  | none         | ❌   | ❌   |
// | removeAttribute()         | none         | ❌   | ❌   |
// | removeAttributeNode()     | none         | ✅   | ❌   |
// | removeChild()             | none         | ✅   | ❌   |
// | removeEventListener()     | none         | ❌   | ❌   |
// | replaceChild()            | none         | ✅   | ❌   |
// | scrollHeight              | attribute    | ✅   | ❌   |
// | scrollIntoView()          | none         | ❌   | ❌   |
// | scrollLeft                | attribute    | ✅   | ✅   |
// | scrollTop                 | attribute    | ✅   | ✅   |
// | scrollWidth               | attribute    | ✅   | ❌   |
// | setAttribute()            | none         | ❌   | ❌   |
// | setAttributeNode()        | none         | ✅   | ❌   |
// | style                     | attribute    | ✅   | ✅   |
// | tabIndex                  | attribute    | ✅   | ✅   |
// | tagName                   | attribute    | ✅   | ❌   |
// | textContent               | attribute    | ✅   | ✅   |
// | title                     | attribute    | ✅   | ✅   |
// | toString()                | none         | ✅   | ❌   |
