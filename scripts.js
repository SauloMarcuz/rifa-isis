function submitRaffleForm() {
  const formInput = document.getElementById('name');
  const name = formInput.value.trim();

  if (name && selectedNumbers.length > 0) {
    const participant = {
      name: name,
      numbers: selectedNumbers
    };

    participants.push(participant);
    formInput.value = '';
    selectedNumbers = [];

    updateSelectedNumbers();
    updateParticipantList();

    // Estruturação dos números
  const numberContainer = document.querySelector('.numbers-container');
const participantList = document.getElementById('participant-list');

const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
let selectedNumbers = [];
let participants = [];

// Função para atualizar a lista de números selecionados
function updateSelectedNumbers() {
  numberContainer.innerHTML = '';

  numbers.forEach(number => {
    const numberElement = document.createElement('div');
    numberElement.classList.add('number');
    numberElement.textContent = number;

    if (selectedNumbers.includes(number) || isNumberTaken(number)) {
      numberElement.classList.add('selected');
      numberElement.setAttribute('disabled', true);
    }

    numberElement.addEventListener('click', () => {
      if (!numberElement.classList.contains('selected')) {
        numberElement.classList.add('selected');
        selectedNumbers.push(number);
      } else {
        numberElement.classList.remove('selected');
        selectedNumbers = selectedNumbers.filter(n => n !== number);
      }
    });

    numberContainer.appendChild(numberElement);
  });
}

    // Salvar os participantes no arquivo answers.json usando a API do GitHub
    const githubApiUrl = "https://api.github.com/repos/SauloMarcuz/rifa-isis/contents/answers.json";
    const token = "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";

    fetch(githubApiUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Atualizar arquivo answers.json",
        content: btoa(jsonData),
        branch: "Saulo",
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Dados salvos com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao salvar os dados:", error);
      });
  } else {
    alert('Por favor, preencha o nome e selecione pelo menos um número.');
  }
}
