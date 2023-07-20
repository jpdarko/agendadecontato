function cadastrarContato() {
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    if (nome === '' || telefone === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    var tabela = document.getElementById('tabelaContatos');
    var novaLinha = tabela.insertRow(-1);
    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);
    colunaNome.innerHTML = nome;
    colunaTelefone.innerHTML = telefone;

    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
}
