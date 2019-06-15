var wizardFirstnames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 0, 255)', 'rgb(255, 255, 0)', 'rgb(0, 255, 0)'];
var CLASS_HIDDEN = 'hidden';
var WIZARD_NUMBERS = 4;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementsByClassName('setup')[0].classList.remove(CLASS_HIDDEN);
var wizardParty = [];
for (var i = 0; i < WIZARD_NUMBERS; i++) {
  wizardParty.push({
    name: wizardFirstnames[getRandomInt(0, wizardFirstnames.length)] + ' '
      + wizardSurnames[getRandomInt(0, wizardSurnames.length)],
    coatColor: coatColor[getRandomInt(0, coatColor.length)],
    eyesColor: eyesColor[getRandomInt(0, eyesColor.length)]
  });
}

var template = document.getElementById('similar-wizard-template');
var setupListElement = document.getElementsByClassName('setup-similar-list')[0];
for (var i = 0; i < WIZARD_NUMBERS; i++) {
  var node = document.importNode(template.content, true);

  node.querySelectorAll('.setup-similar-label')[0].textContent = wizardParty[i].name;

  node.querySelectorAll('.wizard-coat')[0].style.fill = wizardParty[i].coatColor;
  node.querySelectorAll('.wizard-eyes')[0].style.fill = wizardParty[i].eyesColor;

  setupListElement.appendChild(node);
}

document.getElementsByClassName('setup-similar')[0].classList.remove(CLASS_HIDDEN);
