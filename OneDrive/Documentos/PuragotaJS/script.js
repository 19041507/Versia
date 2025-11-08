document.addEventListener('DOMContentLoaded', function () {
    const inputTelefone = document.getElementById('telefone');

    if (inputTelefone) {
        inputTelefone.addEventListener('keydown', function (event) {
            const isNumber = (event.key >= '0' && event.key <= '9');
            const isControl = (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab' || event.key === 'Enter' || event.key.startsWith('Arrow'));
            const isShortcut = (event.ctrlKey || event.metaKey);

            if (!isNumber && !isControl && !isShortcut) {
                event.preventDefault();
            }
        });

        inputTelefone.addEventListener('paste', function (event) {
            const paste = (event.clipboardData || window.clipboardData).getData('text')
            const cleanedPaste = paste.replace(/\D/g, '');
            event.preventDefault();
            this.value = cleanedPaste;
        });

        inputTelefone.addEventListener('input', function (event) {
            let value = event.target.value.replace(/\D/g, '');
            let formattedValue = '';
            if (value.length > 0) {
                formattedValue = '(' + value.substring(0, 2);
                if (value.length > 2) {
                    formattedValue += ') ';
                    formattedValue += value.substring(2, 7);
                }
                if (value.length > 7) {
                    formattedValue += '-';
                    formattedValue += value.substring(7, 11);
                }
            }
            event.target.value = formattedValue;
        });
    }



    const inputNome = document.getElementById('nome');

    if (inputNome) {
        inputNome.addEventListener('input', function (event) {
            event.target.value = event.target.value.replace(/[^a-zA-ZáàâãéèêíìîóòôõúùûüçÇÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÜ\s]/g, '');
        });

        inputNome.addEventListener('keydown', function (event) {
            const isAllowedChar = /^[a-zA-ZáàâãéèêíìîóòôõúùûüçÇÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÜ\s]$/.test(event.key);
            const isControl = (event.key === 'Backspace' || event.key === 'Delete' || event.key === 'Tab' || event.key === 'Enter' || event.key.startsWith('Arrow'));
            const isShortcut = (event.ctrlKey || event.metaKey);
            if (!isAllowedChar && !isControl && !isShortcut) {
                event.preventDefault();
            }
        });
        inputNome.addEventListener('paste', function (event) {
            const paste = (event.clipboardData || window.clipboardData).getData('text');
            const cleanedPaste = paste.replace(/[^a-zA-ZáàâãéèêíìîóòôõúùûüçÇÁÀÂÃÉÈÊÍÌÎÓÒÔÕÚÙÛÜ\s]/g, '');
            event.preventDefault();
            this.value = cleanedPaste;
        });
    }
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '🌙 Modo Escuro';
    toggleButton.classList.add('btn', 'btn-toggle-mode');
    toggleButton.style.marginTop = '20px';
    toggleButton.style.width = '100%';

    const loginContainer = document.querySelector('#login .form-container');
    if (loginContainer) {
        loginContainer.appendChild(toggleButton);
    }
    toggleButton.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = '☀️ Modo Claro';
            toggleButton.style.backgroundColor = '#6c757d';
        } else {
            toggleButton.textContent = '🌙 Modo Escuro';
            toggleButton.style.backgroundColor = '#0056b3';
        }
    }
    );
}
);