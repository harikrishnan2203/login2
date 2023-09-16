function createlable(tagname,attributename,attributevalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attributename, attributevalue)
    ele.innerHTML = content;
    return ele;
}

function inputele(tagname,attributename,attributevalue,attributename1,attributevalue1){
    var inputele = document.createElement(tagname);
    inputele.setAttribute(attributename, attributevalue)
    inputele.setAttribute(attributename1, attributevalue1)

    return inputele;
}

function br(tagname){
    var res = document.createElement(tagname);

    return res;
}

function btn(tagname,attributename,attributevalue,attributename1,attributevalue1, Content){
    var btn = document.createElement(tagname);
    btn.setAttribute(attributename, attributevalue)
    btn.setAttribute(attributename1, attributevalue1)
    btn.innerHTML = Content

    return btn;
}

var first = createlable("label", "for", "fname", "Firstname")
var br1 = br("br")
var input1 = inputele("input", "type", "text", "Id", "fname")
var br2 = br("br")

var middle = createlable("label", "for", "mname", "Middlename")
var br3 = br("br")
var input2 = inputele("input", "type", "text", "Id", "mname")
var br4 = br("br")

var last = createlable("label", "for", "lname", "Lastname")
var br5 = br("br")
var input3 = inputele("input", "type", "text", "Id", "lname")
var br6 = br("br")

var email = createlable("label", "for", "email", "Email")
var br7 = br("br")
var input4 = inputele("input", "type", "email", "Id", "email")
var br8 = br("br")

var pin = createlable("label", "for", "pin", "Pincode")
var br9 = br("br")
var input5 = inputele("input", "type", "text", "Id", "pin")
var br10 = br("br")

var button = btn("button", "type", "button", "onclick", "foo()", "Click me")

document.body.append(first, br1, input1, br2, 
                     middle, br3, input2, br4, 
                     last, br5, input3, br6, 
                     email, br7, input4, br8,
                     pin, br9, input5, br10, button);