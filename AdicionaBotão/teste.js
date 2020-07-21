var iDiv = document.createElement('div');
    iDiv.className = "buttons";
    iDiv.id = "buttons";
    
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    var x = 0;

function adiciona(){
    
    var ia = document.createElement('a');
    ia.href = "grupo.html";

    iDiv.appendChild(ia);


    var iContainer = document.createElement('div');
    iContainer.className = 'container';

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

    var t = document.createTextNode("Animal" + x);
    ih2.appendChild(t);

    x++;

}