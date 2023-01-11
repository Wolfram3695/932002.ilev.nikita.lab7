function circle() {
    var a = Number(document.getElementById('val').value);
    while (a > 0) {
        let div = document.createElement('div');
        div.className = 'circle';
        div.innerHTML = '';
        var w = Number(Math.round(Math.random() * (100 - 20) + 20));
        var h = Number(Math.round(Math.random() * (100 - 10) + 10));
        /*console.log(w+'px');*/
        div.style.width = w + 'px';
        div.style.height = w + 'px';
        div.style.top = w * 4 + 'px';
        div.style.left = h * 12 + 'px';
        document.body.append(div);
        div.onclick = change_color;
        div.ondblclick = delete_div;
        a--;
    }
}

function triangle() {
    var b = Number(document.getElementById('val').value);
    while (b > 0) {
        let div = document.createElement('div');
        div.className = 'triangle';
        div.innerHTML = '';
        var w = Number(Math.round(Math.random() * (100 - 20) + 20));
        var h = Number(Math.round(Math.random() * (100 - 10) + 10));
        div.style.border = w + "px" + " solid transparent";
        div.style.borderBottom = w * 2 + "px" + " solid #0a3a95a3";
        div.style.top = w * 4 + 'px';
        div.style.left = h * 12 + 'px';
        document.body.append(div);
        div.ondblclick = delete_div;
        div.onclick = change_color_triangle;
        console.log(w);
        console.log(h);
        b--;
    }
}


function square() {
    var c = Number(document.getElementById('val').value);
    while (c > 0) {
        let div = document.createElement('div');
        div.className = 'square';
        div.innerHTML = '';
        var w = Number(Math.round(Math.random() * (100 - 20) + 20))
        var h = Number(Math.round(Math.random() * (100 - 10) + 10))
        div.style.width = w + 'px';
        div.style.height = w + 'px';
        div.style.top = w * 4 + 'px';
        div.style.left = h * 12 + 'px';
        div.onclick = change_color;
        div.ondblclick = delete_div;
        document.body.append(div);
        c--;
    }
}

function change_color() {
    this.style.background = 'yellow';
}

function change_color_triangle() {
    this.style.borderBottomColor = 'yellow';
}

function delete_div() {
    this.remove();
}