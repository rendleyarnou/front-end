var qtdTotal = 0;

const show = () => {
    const item = document.createElement("li");
    const nome = document.querySelector("#nome").value;
    const preco = document.querySelector("#preco").value;
    const quantidade = document.querySelector("#quantidade").value;
    const total = parseFloat(preco) * parseInt(quantidade);
    qtdTotal += parseFloat(total);
    const textItem = document.createTextNode(nome + "__________" + "R$" + preco + "__________" + quantidade + "__________" + "R$" + total);

    item.appendChild(textItem);

    document.querySelector("#lista").appendChild(item);
    document.querySelector("#resultado").value = "R$" + parseFloat(qtdTotal);

}



document.querySelector("#adicionar").addEventListener('click', show);
