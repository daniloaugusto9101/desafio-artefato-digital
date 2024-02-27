
// Função para salvar os produtos no banco (local storage)
const setBd= (produto) => {
    localStorage.setItem("bdProdutos", JSON.stringify(produto))
}

// Captura todos os produtos do banco (local storage)
const getBd = () =>  JSON.parse(localStorage.getItem("bdProdutos") ?? [])    

// Monta o layout dos produtos para exibir na tela
const viewProdutos = () => {
    const bd = getBd()
    console.log(bd);
    const tbody = document.querySelector("#tbody-produtos")
    tbody.innerHTML = "";
    const tr = document.createElement("tr")
    tr.innerHTML = `
        <tr>
            <th scope="row">1</th>
            <td>
            Hd Externo Portátil Seagate Expansion Portable 2tb Usb 3.0 Cor
            Preto
            </td>
            <td>2</td>
            <td>R$ 300,00</td>
            <td>R$ 600,00</td>
            <td><i class="bi bi-trash3"></i></td>
        </tr>
    `
    tbody.appendChild(tr)

}

// Captura os valores do formulario do modal
const getInputs = () =>{
    const produto = {
        descricao: document.querySelector("#form-produtos #descricao-produto").value,
        quantidade: document.querySelector("#form-produtos #quantidade-produto").value,
        valor: document.querySelector("#form-produtos #valor-produto").value,
    }
    return produto
}

// Limpa os valores do formulario do modal
const clearInputs = () =>{
    document.querySelector("#form-produtos #descricao-produto").value = "";
    document.querySelector("#form-produtos #quantidade-produto").value = "";
    document.querySelector("#form-produtos #valor-produto").value = "";
}

// Envia os produtos para o banco (Local storage)
const postProduto = () =>{
    const produto = getInputs()
    setBd(produto)
}

// Exibe os produtos cadatrados na tela
viewProdutos()

document.querySelector("#btnAddProdutos")
    .addEventListener("click", ()=>{
        console.log(getBd());        
    })