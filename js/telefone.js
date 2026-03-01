document.addEventListener("DOMContentLoaded", function () {

    const telefoneInput = document.getElementById("telefone");

    if (telefoneInput) {

        telefoneInput.addEventListener("input", function (e) {

            let value = e.target.value;

            // Remove tudo que não for número
            value = value.replace(/\D/g, "");

            // Limita a 11 dígitos
            value = value.substring(0, 11);

            // Aplica a máscara
            if (value.length > 6) {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
            } 
            else if (value.length > 2) {
                value = value.replace(/(\d{2})(\d{0,5})/, "($1) $2");
            } 
            else if (value.length > 0) {
                value = value.replace(/(\d{0,2})/, "($1");
            }

            e.target.value = value;

        });

    }

});