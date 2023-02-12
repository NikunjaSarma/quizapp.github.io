const questions = [
    {
        text: 'What is the capital of France?',
        options: [
            'London',
            'Paris',
            'Berlin',
            'Rome'
        ],
        correctOptionIndex: 1
    },
    {
        text: 'What is the capital of Italy?',
        options: [
            'Madrid',
            'Rome',
            'Paris',
            'Berlin'
        ],
        correctOptionIndex: 1
    },
    {
        text: 'What is the capital of Spain?',
        options: [
            'Paris',
            'Madrid',
            'Rome',
            'Berlin'
        ],
        correctOptionIndex: 1
    },
    {
        text: 'What is the capital of Germany?',
        options: [
            'London',
            'Paris',
            'Berlin',
            'Rome'
        ],
        correctOptionIndex: 2
    },
    {
        text: 'What is the capital of the United Kingdom?',
        options: [
            'London',
            'Paris',
            'Berlin',
            'Rome'
        ],
        correctOptionIndex: 0
    },
    {
        text: 'What is the capital of Russia?',
        options: [
            'London',
            'Moscow',
            'Berlin',
            'Rome'
        ],
        correctOptionIndex: 1
    },
    {
        text: 'What is the capital of Japan?',
        options: [
            'Tokyo',
            'Paris',
            'Berlin',
            'Rome'
        ],
        correctOptionIndex: 0
    },
    {
        text: 'What is the capital of China?',
        options: [
            'Beijing',
            'Paris',
            'Berlin',
            'Rome'
        ],
        correctOptionIndex: 0
    },
    {
        text: 'What is the capital of Brazil?',
        options: [
            'São Paulo',
            'Brasília',
            'Rio de Janeiro',
            'Belo Horizonte'
        ],
        correctOptionIndex: 1
    },
    {
        text: 'What is the capital of Argentina?',
        options: [
            'Buenos Aires',
            'Córdoba',
            'Rosario',
            'Mendoza'
        ],
        correctOptionIndex: 0
    },
    {
        text: 'What is the capital of Canada?',
        options: [
            'Toronto',
            'Ottawa',
            'Montreal',
            'Vancouver'
        ],
        correctOptionIndex: 1
    },
    {
        text: 'What is the capital of Australia?',
        options: [
            'Sydney',
            'Canberra',
            'Melbourne',
            'Brisbane'
        ],
        correctOptionIndex: 1
    },

];

let random_question = questions[Math.floor(Math.random() * questions.length)]
document.querySelector(".quest").innerHTML = random_question.text;
document.querySelector(`[for="radio1"]`).innerHTML = random_question.options[0];
document.querySelector(`[for="radio2"]`).innerHTML = random_question.options[1];
document.querySelector(`[for="radio3"]`).innerHTML = random_question.options[2];
document.querySelector(`[for="radio4"]`).innerHTML = random_question.options[3];




let score = 0;
const form = document.querySelector('.card');
form.addEventListener('submit', function (e) {
    document.querySelector(`.btn2`).disabled=false;

    e.preventDefault();

    document.querySelector(".btn1").disabled = true;
    // selected names from radio as options
    const options = form.elements.radio;
    for (let i = 0; i < options.length; i++) {
        options[i].disabled = true;
    }
    const checkedOption = parseInt(form.elements.radio.value);

    if (checkedOption === (random_question.correctOptionIndex + 1)) {
        document.querySelector(`#radio${random_question.correctOptionIndex + 1}`).setAttribute("class", "correct");
        score = score + 5;
        document.querySelector(`.score`).innerHTML = `Score ${score}`;

    }
    else {
        document.querySelector(`#radio${random_question.correctOptionIndex + 1}`).setAttribute("class", "correct");
        document.querySelector(`#radio${checkedOption}`).setAttribute("class", "error");
        score--;
        document.querySelector(`.score`).innerHTML = `Score ${score}`;

    }

}
);


document.querySelector(`.btn2`).disabled=true;

function resets(){
    document.querySelector(`.btn1`).disabled=false;
    document.querySelector(`.btn2`).disabled=true;

    random_question = questions[Math.floor(Math.random() * questions.length)]
    document.querySelector(`[for="radio1"]`).innerHTML = random_question.options[0];
    document.querySelector(`[for="radio2"]`).innerHTML = random_question.options[1];
    document.querySelector(`[for="radio3"]`).innerHTML = random_question.options[2];
    document.querySelector(`[for="radio4"]`).innerHTML = random_question.options[3];
    document.querySelector(".quest").innerHTML = random_question.text;

    document.querySelector(`#radio1`).setAttribute("class", "");
    document.querySelector(`#radio2`).setAttribute("class", "");
    document.querySelector(`#radio3`).setAttribute("class", "");
    document.querySelector(`#radio4`).setAttribute("class", "");

    document.querySelector(`#radio1`).disabled=false;
    document.querySelector(`#radio2`).disabled=false;
    document.querySelector(`#radio3`).disabled=false;
    document.querySelector(`#radio4`).disabled=false;
    document.querySelector(`#radio1`).checked=false;
    document.querySelector(`#radio2`).checked=false;
    document.querySelector(`#radio3`).checked=false;
    document.querySelector(`#radio4`).checked=false;
}