
document.addEventListener("show", function(e) {
    if (e.target.id == 'pg') {
        fn.enableGD();
    }
});

window.fn = {}
fn.vtop = 0;
fn.vleft = 0;

window.fn.enableGD = function() {

    var dragItems = document.querySelectorAll('.draggable');
    for (var j = 0; j < dragItems.length; j++) {
        dragItems[j].addEventListener('dragstart', function(e) {
            fn.vtop = parseInt(e.target.style.top || 10, 10);
            fn.vleft = parseInt(e.target.style.left || 0, 10);
        });
        dragItems[j].addEventListener('drag', function(e) {
            e.target.style.top = parseInt(fn.vtop + e.gesture.deltaY) + 'px';
            e.target.style.left = parseInt(fn.vleft + e.gesture.deltaX) + 'px';
        });
        dragItems[j].addEventListener('dragend', function(e) {
            fn.vtop = parseInt(e.target.style.top || 0, 10);
            fn.vleft = parseInt(e.target.style.left || 0, 10);
        });
    }
}

var a = 0,
    b = 0,
    c = 0,
    d = 0,
    k = 0,
    m = 0,
    n = 0,
    l = 0,
    f = 0,
    k = 0,
    r = 0;

$(document).ready(function() {

    $("#button_1").click(function() {

        b++;
        var butValue = prompt("Please enter your value.", "value");

        var butt = document.createElement("button");
        //butt.setAttribute("value", butValue);
        butt.setAttribute("name", "button" + b);
        butt.setAttribute("id", "button" + b);
        butt.setAttribute("class", "draggable");
        butt.innerHTML = butValue;
        //butt.setAttribute("onclick", "showPopup");
        pg.appendChild(butt);
        fn.enableGD();
    });

    $("#button1d").click(function() {

        var buttDel = document.getElementById("button" + b);
        pg.removeChild(buttDel);
        b--;
    });

    $("#button_2").click(function() {
        var message = prompt("Please enter your message.", "Message");
        if (message != null) {
            m++;
            $(pg).append("<span class='draggable' id='message" + m + "'>" + message + "</span>");
            fn.enableGD();
        }
    });

    $("#button2d").click(function() {
        var messageDel = document.getElementById("message" + m);
        //pg.removeChild(messageDel);
        //document.removeChild(messageDel);
        messageDel.parentNode.removeChild(messageDel);
        m--;
    });


    $("#button_3").click(function() {
        a++;
        var boxValue = prompt("Please enter your value.", "value");
        var element = document.createElement("input");
        element.setAttribute("id", "text" + a);
        element.setAttribute("type", "text");
        element.setAttribute("value", boxValue);
        element.setAttribute("class", "draggable");
        element.setAttribute("name", "text" + a);

        pg.appendChild(element);
        fn.enableGD();
    });

    $("#button3d").click(function() {
        var textsil = document.getElementById("text" + a);
        pg.removeChild(textsil);
        a--;
    });

    $("#button_4").click(function() {
        c++;
        var checkValue = prompt("Please enter your value.", "value");
        var cbox = document.createElement("input");
        cbox.setAttribute("type", "checkbox");
        cbox.setAttribute("id", "checkbox" + c);
        //cbox.setAttribute("value", textValue);
        cbox.setAttribute("name", "checkbox" + c);
        cbox.setAttribute("class", "draggable");
        // cbox.setAttribute("", checkValue);
        // $(cbox).append(checkValue);
        //$(pg).append("<label for='checkbox'+c>"+checkValue+"</label>");
        pg.appendChild(cbox);
        fn.enableGD();
    });

    $("#button4d").click(function() {
        var csil = document.getElementById("checkbox" + c);
        pg.removeChild(csil);
        c--;
    });

    $("#button_5").click(function() {
        d++;
        var password = document.createElement("input");
        password.setAttribute("type", "password");
        password.setAttribute("id", "password" + d);
        password.setAttribute("class", "draggable");
        password.setAttribute("name", "password" + d);
        pg.appendChild(password);
        fn.enableGD();
    });

    $("#button5d").click(function() {
        var passil = document.getElementById("password" + d);
        pg.removeChild(passil);
        d--;
    });

    $("#button_6").click(function() {
        var z = document.createElement('br');
        z.innerHTML = '';
        pg.appendChild(z);
    });

    $("#button6d").click(function() {
        $('#pg').empty();
        a = 0,
		b = 0,
		c = 0,
		d = 0,
		k = 0,
		m = 0,
		n = 0,
		l = 0,
		f = 0,
		k = 0,
		r = 0;
    });

    $("#button_7").click(function() {
        n++;
        var area = document.createElement("textarea");
        area.setAttribute("id", "textarea" + n);
        area.setAttribute("class", "draggable");
        area.setAttribute("name", "text" + n);
        pg.appendChild(area);
        fn.enableGD();
    });

    $("#button7d").click(function() {
        var areadel = document.getElementById("textarea" + n);
        pg.removeChild(areadel);
        n--;
    });

    $("#button_8").click(function() {
        l++;

        var file = document.createElement("input");
        file.setAttribute("type", "file");
        file.setAttribute("id", "file" + l);
        file.setAttribute("class", "draggable");
        file.setAttribute("name", "file" + l);
        pg.appendChild(file);
        fn.enableGD();
    });

    $("#button8d").click(function() {
        var filedel = document.getElementById("file" + l);
        pg.removeChild(filedel);
        l--;
    });

    $("#button_9").click(function() {
        f++;
        k = 0;
        var menu = document.createElement("select");
        menu.setAttribute("id", "menu" + f);
        menu.setAttribute("class", "draggable");
        menu.setAttribute("name", "menu" + f);
        pg.appendChild(menu);
        fn.enableGD();
    });

    $("#button_add").click(function() {
        var optionValue = prompt("Please enter your option.", "option");
        $("#menu" + f).append("<option value=" + optionValue + ">" + optionValue + "</option>");
    });

    $("#button9d").click(function() {
        var menudel = document.getElementById("menu" + f);
        pg.removeChild(menudel);
        f--;
    });

    $("#button_10").click(function() {
        r++;
        k = 0;
        var k = prompt("Please enter your number of line.", "Number");
        var list = document.createElement("select");
        list.setAttribute("name", "list" + r);
        list.setAttribute("size", k);
        list.setAttribute("id", "list" + r);
        list.setAttribute("class", "draggable");

        pg.appendChild(list);
        fn.enableGD();
    });

    $("#button10d").click(function() {
        var listdel = document.getElementById("list" + r);
        pg.removeChild(listdel);
        r--;
    });


    $("#button_add2").click(function() {
        var listOption = prompt("Please enter your option.", "option");
        $("#list" + r).append("<option value=" + listOption + ">" + listOption + "</option>");
    });

    $("#preview").click(function() {
        var metin = document.getElementById('pg').innerHTML;
        newWindow = window.open('', 'Window', 'width=600, height=400');
        newWindow.document.write(metin);
    });

    $("#code").click(function() {
        var metin = document.getElementById('pg').innerHTML;
        //newWindow2=window.open('','Code','width=600, height=400');
        //newWindow2.document.write(getElementById('pg'));
        confirm(metin);
    });
	
    $("#copy").click(function() {
		var element = document.getElementById('pg').innerHTML;	
		//var range = document.body.createTextRange();
		//range.moveToElementText(element);
		//element.select();
	    document.execCommand('copy');
		alert('text copied');
		
       /* var copyText = document.getElementById('pg').innerHTML;
		copyText.select();
		confirm(copyText);
		document.execCommand("Copy");	*/
    });	

    $("#pg").contextmenu(function() {

        var newValue = prompt("Please enter your value", "Value");
        this.setAttribute("value", "newValue");
    });	
});