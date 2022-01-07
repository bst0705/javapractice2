/* オーバーライド
    親クラスと同じ名前のメソッドを子クラスに定義すると、子クラスのメソッドが優先して使用されます。
    これは、子クラスのメソッドが親クラスのメソッドを上書きしていることから、オーバーライドと呼ばれます。
  
  コンストラクタのオーバーライド（1）  */

  class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      console.log("こんにちは");
    }

    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`${this.age}歳です`);
    }
  }

  class Dog extends Animal {
    constructor(name,age,breed){
      super(name, age);
      this.breed = breed;
    }

    info() {
      this.greet();
      console.log(`名前は${this.name}です`);
      console.log(`犬種は${this.breed}です`);
      console.log(`${this.age}歳です`);
      const humanAge = this.getHumanAge();
      console.log(`人間年齢で${humanAge}歳です`);
    }

    getHumanAge() {
      return this.age * 7;
    }
  }