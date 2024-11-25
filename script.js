let victories = [];
let inventory = [];

function play() {
    let choice = '';
    do {
        choice = prompt(`
            DENTRE ESSAS TRÊS OPÇÕES, UMA ESTÁ COM O GRANDE PRÊMIO:          
            |. 1- BAÚ NÚMERO 1
            |. 2- BAÚ NÚMERO 2
            |. 3- BAÚ NÚMERO 3
            |. 4- BÔNUS(SORTE OU AZAR)
            |. 5- VOLTAR PARA O MENU
        `);

        switch (choice) {
            case '1':
            case '2':
            case '3':
                const result = Math.random() > 0.5 ? "vitória" : "derrota";
                alert(`Você escolheu o baú número ${choice} e teve uma ${result}!`);
                victories.push(result);
                if (Math.random() > 0.7) {
                    const item = "Chave Mágica";
                    inventory.push(item);
                    alert("Você encontrou uma Chave Mágica!");
                }
                break;

            case '4':
                alert("Você escolheu o bônus! Vamos testar sua sorte...");
                const bonusResuItem = Math.random() > 0.5 ? "Poção da Sorte" : "Pena da Fortuna";
                inventory.push(bonusResuItem);
                alert(`Você recebeu um item especial: ${bonusResuItem}!`);
                break;

            case '5':
                alert("Voltando ao menu inicial...");
                break;

            default:
                alert("Escolha inválida. Tente novamente.");
        }
    } while (choice !== '5');
}

function showStatistics() {
    const totalGames = victories.length;
    const totalWins = victories.filter(v => v === "vitória").length;
    const totalLosses = victories.filter(v => v === "derrota").length;
    const score = totalWins * 10 + inventory.length * 5; // 10 pontos por vitória, 5 por item

    alert(`Estatísticas:
        Total de jogos: ${totalGames}
        Vitórias: ${totalWins}
        Derrotas: ${totalLosses}
        Pontuação: ${score}
        Inventário: ${inventory.length > 0 ? inventory.join(", ") : "Nenhum item encontrado"}`);
}

function credits() {
    alert(`Desenvolvido por João Guilherme
    =D`);
}

function showMenu() {
    let main;
    do {
        main = prompt(`
            1- COMEÇAR
            2- NOVO JOGO
            3- ESTATÍSTICAS
            4- CRÉDITOS
            5- CONSULTAR INVENTÁRIO
            6- SAIR
        `);

        switch (main) {
            case '1':
                play();
                break;

            case '2':
                alert("Novo jogo iniciado!");
                victories = [];
                inventory = [];
                break;

            case '3':
                showStatistics();
                break;

            case '4':
                credits();
                break;

            case '5':
                alert(`Inventário: ${inventory.length > 0 ? inventory.join(", ") : "Nenhum item encontrado."}`);
                break;

            case '6':
                alert("Obrigado por jogar! Até a próxima.");
                break;

            default:
                alert("Opção inválida. Tente novamente.");
        }
    } while (main !== '6');
}

showMenu();
