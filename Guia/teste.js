function adiciona(){
    var ia = document.createElement('a');
    ia.href = "grupo.html";

    document.getElementsByTagName('body')[0].appendChild(ia);

    var iContainer = document.createElement('div');
    iContainer.className = 'container';
    iContainer.style.margin = "auto";

    ia.appendChild(iContainer);

    var iLine = document.createElement('div');
    iLine.className = 'line aves';

    var iContent =  document.createElement('div');
    iContent.className = 'content';

    var icon = document.createElement('img');
    icon.className = 'icon';
    icon.src = 'assets/img/Seta.png';

    iContainer.appendChild(iLine);
    iContainer.appendChild(iContent);
    iContainer.appendChild(icon);

    var ih2 =  document.createElement('h2');
    iContent.appendChild(ih2);

    var t = document.createTextNode("Animal");
    ih2.appendChild(t);

}