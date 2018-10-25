class Options {
  constructor (height, width, textAlign, background, fontSize) {
      this.height = height + 'px';
      this.width = width + 'px';
      this.textAlign = textAlign;
      this.background  = background;
      this.fontSize = fontSize + 'px';
}

showDiv() {
  let div = document.createElement("div");
    // div.className = "element";
    div.innerHTML = "<strong>Здесь какой-то важный текст</strong>";
    document.body.appendChild(div);
    div.style.cssText = `height: ${this.height}`;
    

    
    
  
  }

}

let makeDiv = new Options(50, 500, "center", "red", 50);
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


