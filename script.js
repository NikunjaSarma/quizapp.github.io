const questions = [
    {
      text: "What is the study of plants called?",
      options: ["Botany", "Zoology", "Anatomy", "Geology"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the study of animals called?",
      options: ["Botany", "Zoology", "Anatomy", "Geology"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the study of the structure and function of living organisms?",
      options: ["Botany", "Zoology", "Anatomy", "Physiology"],
      correctOptionIndex: 3,
    },
    {
      text: "What is the study of the Earth and its rocks and minerals called?",
      options: ["Botany", "Zoology", "Anatomy", "Geology"],
      correctOptionIndex: 3,
    },
    {
      text: "What is the study of the stars and galaxies called?",
      options: ["Astronomy", "Geology", "Meteorology", "Oceanography"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the study of the Earth's atmosphere called?",
      options: ["Astronomy", "Geology", "Meteorology", "Oceanography"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the study of the oceans called?",
      options: ["Astronomy", "Geology", "Meteorology", "Oceanography"],
      correctOptionIndex: 3,
    },
    {
      text: "What is the branch of biology that studies heredity and genetic variation?",
      options: ["Anatomy", "Physiology", "Genetics", "Microbiology"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the branch of biology that studies microorganisms and their interactions with other living organisms?",
      options: ["Anatomy", "Physiology", "Genetics", "Microbiology"],
      correctOptionIndex: 3,
    },
    {
      text: "What is the branch of science that studies the behavior and mental processes of animals and humans?",
      options: ["Psychology", "Sociology", "Anthropology", "Philosophy"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the branch of science that studies human society and social behavior?",
      options: ["Psychology", "Sociology", "Anthropology", "Philosophy"],
      correctOptionIndex: 1,
    },
  
    {
      text: "What is the chemical symbol for gold?",
      options: ["Ag", "Au", "Al", "Ar"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the smallest planet in our solar system?",
      options: ["Mercury", "Mars", "Venus", "Earth"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for iron?",
      options: ["Fe", "Ir", "Cu", "Ag"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for silver?",
      options: ["Ag", "Au", "Al", "Ar"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for copper?",
      options: ["Cu", "Co", "Cr", "Cd"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for helium?",
      options: ["He", "H", "Li", "C"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for oxygen?",
      options: ["O", "O2", "O3", "OF"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for carbon?",
      options: ["C", "Ca", "Co", "Cr"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for nitrogen?",
      options: ["N", "Na", "Ne", "Ni"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for sodium?",
      options: ["Na", "N", "Ne", "Ni"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for potassium?",
      options: ["K", "Ca", "Co", "Cr"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the chemical symbol for magnesium?",
      options: ["Mg", "Mn", "Mo", "Mc"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Bangalore", "Kolkata"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the currency of India?",
      options: ["Rupee", "Dollar", "Euro", "Yen"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the largest state in India by area?",
      options: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the largest river in India?",
      options: ["Ganges", "Brahmaputra", "Yamuna", "Godavari"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the highest mountain peak in India?",
      options: ["Nanda Devi", "Kangchenjunga", "Mount Everest", "K2"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the official language of India?",
      options: ["Hindi", "English", "Bengali", "Telugu"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the largest desert in India?",
      options: [
        "Thar Desert",
        "Great Indian Desert",
        "Deccan Plateau",
        "None of the above",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is the name of India's first satellite?",
      options: ["Rohini", "Aryabhata", "Kalpana Chawla", "Chandrayaan"],
      correctOptionIndex: 1,
    },
  
    {
      text: "What is the name of India's first astronaut to travel to space?",
      options: [
        "Rakesh Sharma",
        "Kalpana Chawla",
        "Sunita Williams",
        "None of the above",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is DNA made of?",
      options: ["Amino acids", "Carbohydrates", "Nucleotides", "Lipids"],
      correctOptionIndex: 2,
    },
  
    {
      text: "What is the structure of DNA commonly referred to as?",
      options: [
        "Double helix",
        "Triple helix",
        "Quadruple helix",
        "Single helix",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is the shape of DNA in chromosomes?",
      options: ["Spiral", "Rod-like", "Loop", "Ball"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the process of copying DNA called?",
      options: ["Translation", "Replication", "Transcription", "Metamorphosis"],
      correctOptionIndex: 1,
    },
    {
      text: "What are the nitrogenous bases in DNA made of?",
      options: ["Amino acids", "Nucleotides", "Carbohydrates", "Lipids"],
      correctOptionIndex: 1,
    },
  
    {
      text: "What is the role of DNA polymerases in replication?",
      options: [
        "To add new nucleotides to the growing DNA strand",
        "To cut the DNA strand",
        "To unwind the DNA strand",
        "To repair damaged DNA",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What are the two complementary nitrogenous bases in DNA?",
      options: [
        "Adenine and thymine",
        "Adenine and uracil",
        "Guanine and cytosine",
        "Cytosine and uracil",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is the process of reading the genetic code of DNA called?",
      options: ["Translation", "Replication", "Transcription", "Metamorphosis"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the largest river in Assam?",
      options: ["Brahmaputra", "Kameng", "Manas", "Dibang"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the capital of Assam?",
      options: ["Dispur", "Guwahati", "Dibrugarh", "Silchar"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the largest wildlife sanctuary in Assam?",
      options: [
        "Pobitora Wildlife Sanctuary",
        "Kaziranga National Park",
        "Manas National Park",
        "Dibru-Saikhowa National Park",
      ],
      correctOptionIndex: 1,
    },
    {
      text: "What is the main language spoken in Assam?",
      options: ["Bengali", "Assamese", "English", "Hindi"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the main crop grown in Assam?",
      options: ["Rice", "Tea", "Jute", "Sugarcane"],
      correctOptionIndex: 1,
    },
    {
      text: "Which river is considered the lifeline of Assam?",
      options: ["Brahmaputra", "Kameng", "Manas", "Dibang"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the largest city in Assam?",
      options: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the traditional cloth of Assam?",
      options: ["Mekhela Sador", "Sari", "Lungi", "Gamucha"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the famous dance form of Assam?",
      options: ["Bihu", "Manipuri", "Sattriya", "Mohiniyattam"],
      correctOptionIndex: 0,
    },
    {
      text: "Which famous temple is located in Assam?",
      options: [
        "Kamakhya Temple",
        "Maa Tara Temple",
        "Baba Garhwal Temple",
        "Virupaksha Temple",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is the primary role of biotechnology in agriculture?",
      options: [
        "To produce more food",
        "To produce more fuel",
        "To produce more clothing materials",
        "To produce more chemicals",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is the process of transferring genes from one organism to another called?",
      options: ["Cloning", "Transformation", "Transduction", "Transfection"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the main objective of biotechnology in medicine?",
      options: [
        "To cure diseases",
        "To prolong life",
        "To improve quality of life",
        "All of the above",
      ],
      correctOptionIndex: 3,
    },
    {
      text: "What is the most commonly used vector for gene transfer in biotechnology?",
      options: ["Bacteria", "Virus", "Fungi", "Plasmids"],
      correctOptionIndex: 3,
    },
    {
      text: "What is the process of artificially synthesizing a DNA molecule called?",
      options: ["Cloning", "Transformation", "Synthesis", "Transfection"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the primary use of biotechnology in the food industry?",
      options: [
        "To improve the taste and quality of food",
        "To increase the shelf life of food",
        "To produce genetically modified crops",
        "All of the above",
      ],
      correctOptionIndex: 3,
    },
    {
      text: "What is the process of making a genetically identical copy of a cell or organism called?",
      options: ["Cloning", "Transformation", "Synthesis", "Transfection"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the primary use of biotechnology in the environmental industry?",
      options: [
        "To clean up contaminated sites",
        "To produce biofuels",
        "To reduce greenhouse gas emissions",
        "All of the above",
      ],
      correctOptionIndex: 3,
    },
    {
      text: "What is the process of producing insulin through biotechnology called?",
      options: [
        "Gene therapy",
        "Genetic engineering",
        "Recombinant DNA technology",
        "Cloning",
      ],
      correctOptionIndex: 2,
    },
    {
      text: "What is the process of using biotechnology to diagnose diseases called?",
      options: [
        "Diagnostic biotechnology",
        "Medical biotechnology",
        "Therapeutic biotechnology",
        "All of the above",
      ],
      correctOptionIndex: 0,
    },
    {
      text: 'Which planet is known as the "Red Planet"?',
      options: ["Venus", "Mars", "Jupiter", "Uranus"],
      correctOptionIndex: 1,
    },
    {
      text: "Which planet is the largest in our solar system?",
      options: ["Mars", "Jupiter", "Uranus", "Saturn"],
      correctOptionIndex: 1,
    },
    {
      text: "Which planet is closest to the Sun?",
      options: ["Venus", "Mars", "Mercury", "Uranus"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the name of the fifth planet from the Sun?",
      options: ["Jupiter", "Mars", "Earth", "Venus"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the name of the planet known for its large ring system?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctOptionIndex: 3,
    },
    {
      text: 'Which planet is known as the "Ice Giant"?',
      options: ["Venus", "Mars", "Uranus", "Neptune"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the name of the planet known for its Great Red Spot?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctOptionIndex: 2,
    },
    {
      text: "What is the name of the planet with a similar size and atmosphere as Earth?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correctOptionIndex: 1,
    },
    {
      text: "What is the name of the dwarf planet located in the Kuiper Belt?",
      options: ["Pluto", "Eris", "Haumea", "Makemake"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the name of the largest moon of Saturn?",
      options: ["Titan", "Io", "Europa", "Ganymede"],
      correctOptionIndex: 0,
    },
    {
      text: "What is the purpose of a compiler in programming?",
      options: [
        "To run the program",
        "To debug the program",
        "To translate high-level code into machine code",
        "To improve the speed of the program",
      ],
      correctOptionIndex: 2,
    },
    {
      text: "What is a variable in programming?",
      options: [
        "A constant value",
        "A changeable value",
        "A complex data structure",
        "A mathematical expression",
      ],
      correctOptionIndex: 1,
    },
    {
      text: "What is an algorithm in programming?",
      options: [
        "A type of programming language",
        "A sequence of instructions to solve a problem",
        "A data structure",
        "A set of functions",
      ],
      correctOptionIndex: 1,
    },
    {
      text: "What is an API in programming?",
      options: [
        "A type of software",
        "A set of protocols and routines for building software and applications",
        "A platform for executing code",
        "A debugging tool",
      ],
      correctOptionIndex: 1,
    },
    {
      text: "What is a programming loop used for?",
      options: [
        "To repeat a block of code multiple times",
        "To run code in parallel",
        "To handle errors",
        "To optimize code performance",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is a function in programming?",
      options: [
        "A sequence of code that performs a specific task",
        "A type of data structure",
        "A debugging tool",
        "A mathematical formula",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is an object in object-oriented programming (OOP)?",
      options: [
        "A data structure that holds data and code",
        "A type of loop",
        "A function",
        "A software architecture",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is a class in object-oriented programming (OOP)?",
      options: [
        "A blueprint for creating objects",
        "A type of function",
        "A data structure",
        "A type of loop",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is inheritance in object-oriented programming (OOP)?",
      options: [
        "A mechanism for objects to acquire properties and behavior from parent objects",
        "A type of data structure",
        "A type of function",
        "A software design pattern",
      ],
      correctOptionIndex: 0,
    },
    {
      text: "What is the purpose of a debugger in programming?",
      options: [
        "To find and fix errors in code",
        "To translate high-level code into machine code",
        "To repeat a block of code multiple times",
        "To run code in parallel",
      ],
      correctOptionIndex: 0,
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