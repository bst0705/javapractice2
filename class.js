/* クラスとは
   効率よくオブジェクトを作成していくための方法として、最初に「設計図」を用意する方法があります。
   例えばユーザーのデータをいくつも作成する場合、最初に「ユーザーを生成するための設計図」を用意し、その設計図をもとにユーザーのデータを生成していく、といったことができます。 
   「設計図」のことをJavaScriptでは「クラス」と呼びます。
   図のように「class クラス名」とすることで新しくクラスを用意できます。なお、クラス名は基本的に大文字から始めるようにしましょう。
  
   クラスからオブジェクトを生成するには、「new クラス名()」とします。
   クラスから生成したオブジェクトは特別にインスタンスと呼びます。また、〇〇クラスのインスタンスを〇〇インスタンスと呼びます。*/
   class Animal{
   }
   const animal = new Animal();
   console.log(animal);

/* コンストラクタ
   クラスにはコンストラクタと呼ばれる機能が用意されています。コンストラクタはインスタンスを生成するときに実行したい処理や設定を追加するための機能です。
   コンストラクタの中には処理を記述することができます。
   ここに書いた処理はインスタンスが生成された直後に実行されます。
   大切なのは、インスタンスごとに毎回実行されるということです。 */
   class Fruits{
     constructor(){
       console.log("インスタンスが生成されました");
     }
   }
   const fruit = new Fruits();

/* プロパティと値を追加する
   コンストラクタの中で「this.プロパティ = 値」とすることで、生成されたインスタンスにプロパティと値を追加することができます。
   インスタンスとはオブジェクトです。従って、コンストラクタの中で追加した値はオブジェクトと同様に「インスタンス.プロパティ」とすることでクラスの外で使用することができます。 */
   class Fishes{
     constructor(){
       this.name = "いわし";
     }
   };
   const fish = new Fishes();
   console.log(fish.name);

/*コンストラクタの引数とメソッド
   ・メソッド
      メソッドとはそのインスタンスの「動作」のようなものです。「名前」や「年齢」などの情報はプロパティで追加したのに対して、メソッドは「挨拶をする」「値を計算する」などの処理のまとまりを表します。
      メソッドは、そのクラスから生成したインスタンスに対して呼び出します。
      具体的には、以下の図のように「インスタンス.メソッド名()」とすることでそのメソッドを呼び出し、処理を実行することができます。

  ・メソッド内で値を使う
      メソッド内でインスタンスの値を使用するには、「this」という特殊な値を用いて、「this.プロパティ名」とします。

    ・メソッド内で他メソッドを使う
      メソッド内で「this.メソッド名()」とすることで、同じクラスの他のメソッドを使うことができます。

  ・継承
      新しく作成するクラスが既存のクラスの一種である場合、「継承」という方法を用いることで非常に効率よく作業を進めることができます。
      「継承」とは、すでにあるクラスをもとに、新しくクラスを作成する方法のことです。
      例えば「Animalクラス」から「Dogクラス」を継承すると、「Animalクラス」の全ての機能を引き継いで、「Dogクラス」を作成することができます。
      継承を用いてクラスを作成するには「extends」を用います。
      また、継承では元となるクラスを親クラス（今回はAnimalクラス）、新しく作成するクラスを子クラス（今回はDogクラス）と呼びます。

    ・継承(子要素にメソッド追加)
        メソッドでは、関数と同じように戻り値を用いることができます。
        子クラスで定義した独自のメソッドは、親クラスから呼び出すことはできません。AnimalクラスのインスタンスからgetHumanAgeメソッドを呼び出すとエラーが発生してしまいます。
  */
  class Anima {
    constructor(name,age) {
      this.name = name;
      this.age = age;
    }
    greet(){
      console.log("こんばんは");
      
    }
    info(){
      console.log(`カフェ${this.name}`);
      this.greet();
    }
  };
  const anima = new Anima("モカ",8);
  console.log(`名前: ${anima.name}`);
  console.log(`年齢: ${anima.age}`);
  anima.greet();
  anima.info();

  class Dog extends Anima {
    getHumanAge(){
      return this.age*7;
    }
  };

  const dog = new Dog("ココア",5);
  dog.info();
  const humanAge = dog.getHumanAge();
  console.log(`${dog.name}さんの人間年齢は${humanAge}歳です`);