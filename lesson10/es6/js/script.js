class Options {
  constructor (height, width, textAlign, bg, fontSize) {
      this.height = height + 'px';
      this.width = width + 'px';
      this.textAlign = textAlign;
      this.bg = bg;
      this.fontSize = fontSize + 'px';
}

showDiv() {
  let dive = document.createElement("div");
    // div.className = "element";
    dive.innerHTML = "<strong>Здесь какой-то важный текст</strong>";
    document.body.appendChild(dive);
    dive.style.cssText = `height: ${this.height}; width: ${this.width}; textAlign: ${this.textAlign}; bg: ${this.bg}; fontSize: ${this.fontSize}`;
    
    
    alert(dive.style.cssText);
    

    
    
  
  }

}

let makeDiv = new Options(50, 100, "left", "blue", 50);
makeDiv.showDiv();




class Object {
  constructor(name, surname, id) {
      this.name = name;
      this.surname = surname;
      this.id = id;
  }

  showObject() {
    console.log(`Пользователь ${this.name} ${this.surname} успешно подключился! Его номер ${this.id}`);
  }
}

let alex = new Object("Alexander" , "Smirnov", 29),
    ivan = new Object("Ivan" , "Smirnov", 23),
    vasya = new Object("Vasiliy" , "Smirnov", 12);
    ivan.showObject();
    alex.showObject();
    vasya.showObject();



