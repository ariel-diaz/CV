const textEs = "Soy desarrollador web con Javascript, Angular, React, Node y .NET";
const textEn = "I'm web developer, I use Javascript, Angular, React, Node and .NET";

const changeLanguage = () => {
  const contentText = document.querySelector('.description p');
  const value = buttonLanguage.innerText == "EN" ? "ES" : "EN";

  contentText.innerText = value == "ES" ? textEn : textEs;
  document.querySelector('.button-language').innerText = value;

};
