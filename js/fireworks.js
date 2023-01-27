document.onclick = function (e) {
            var img = document.createElement('img');
            img.src = "./images/extra.png";
            img.style.position = 'absolute';
            img.width = parseInt(Math.random() * 200) + 10;
            img.style.transform = "rotate(" + Math.round(Math.random() * 360) + "deg)";
            img.style.left = e.clientX - img.width / 2 + 'px';
            img.style.top = e.clientY - img.width / 2 + 'px';
            document.body.appendChild(img);
            setTimeout(function () {
                img.remove();
            }, 300)
        }
