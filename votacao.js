// Função para abrir as abas (tabs)
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Função para confirmar a votação e exibir o resumo
function confirmarVotacao() {
    // Preencher os campos de revisão
    document.getElementById("revNomeAluno").textContent = document.getElementById("nomeAluno").value;
    document.getElementById("revCursoAluno").textContent = document.getElementById("cursoAluno").value;
    document.getElementById("revNomeExAluno").textContent = document.getElementById("nomeExAluno").value;
    document.getElementById("revCursoExAluno").textContent = document.getElementById("cursoExAluno").value;
    document.getElementById("revFuncaoExAluno").textContent = document.getElementById("funcaoExAluno").value;
    document.getElementById("revNomeProfessor").textContent = document.getElementById("nomeProfessor").value;
    document.getElementById("revDepartamentoProfessor").textContent = document.getElementById("departamentoProfessor").value;
    document.getElementById("revNomeExProfessor").textContent = document.getElementById("nomeExProfessor").value;
    document.getElementById("revDepartamentoExProfessor").textContent = document.getElementById("departamentoExProfessor").value;
    document.getElementById("revFuncaoExProfessor").textContent = document.getElementById("funcaoExProfessor").value;
    document.getElementById("revNomeTecnico").textContent = document.getElementById("nomeTecnico").value;
    document.getElementById("revFuncaoTecnico").textContent = document.getElementById("funcaoTecnico").value;
    document.getElementById("revSetorTecnico").textContent = document.getElementById("setorTecnico").value;
    document.getElementById("revNomeExTecnico").textContent = document.getElementById("nomeExTecnico").value;
    document.getElementById("revFuncaoExTecnico").textContent = document.getElementById("funcaoExTecnico").value;
    document.getElementById("revSetorExTecnico").textContent = document.getElementById("setorExTecnico").value;
    document.getElementById("revFuncaoAtualExTecnico").textContent = document.getElementById("funcaoAtualExTecnico").value;
    document.getElementById("revNomeTerceirizado").textContent = document.getElementById("nomeTerceirizado").value;
    document.getElementById("revFuncaoTerceirizado").textContent = document.getElementById("funcaoTerceirizado").value;
    document.getElementById("revSetorTerceirizado").textContent = document.getElementById("setorTerceirizado").value;
    document.getElementById("revEmpresaTerceirizado").textContent = document.getElementById("empresaTerceirizado").value;

    // Mostrar a revisão e ocultar o formulário
    document.getElementById("confirmacaoVotacao").style.display = "block";
}

// Função para permitir editar a votação
function editarVotacao() {
    // Voltar ao formulário
    document.getElementById("confirmacaoVotacao").style.display = "none";
}

// Função para finalizar a votação
function finalizarVotacao() {
    alert("Votação confirmada com sucesso!");
    window.location.href = "finalizacao.html"; // Página de finalização, se necessário
}