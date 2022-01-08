/* forEachメソッドは配列の中の要素を1つずつ取り出して、全ての要素に繰り返し同じ処理を行うメソッドです。
以下の例では、配列numbersの要素が順番にすべて出力されています。
forEachメソッドの引数には、アロー関数が入っています。
配列内の要素が1つずつ順番にアロー関数の引数に代入され、処理が繰り返し実行されます。
forEachメソッドを使うときは以下のように書きます。
以下の例では、配列charactersの要素が1つずつ順番に引数characterに代入され、処理内に書いてあるconsole.log(character)が繰り返し実行されています。

コールバック関数
引数に入っている関数はコールバック関数と呼びます。*/

const characters = ["にんじゃ","さむらい","そうろう"];
characters.forEach((character)=>{
  console.log(character);
});