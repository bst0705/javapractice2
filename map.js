/* mapメソッドとは、配列内のすべての要素に処理を行い、その戻り値から新しい配列を作成するメソッドです。
以下の例では配列numbersの全ての要素を2倍した要素を持つ、新しい配列を作成しています。

以下の例では、配列numbersの要素が1つずつ引数numberに代入されています。その後、mapメソッド内の 「要素を2倍する処理」 をした配列が新しく作られ、定数doubledNumbersに配列として代入されています。
コールバック関数の中の処理は { return 値 } と書きます。

mapメソッドもこれまでのメソッドと同様に、配列のオブジェクト要素に対しても使うことができます。
以下の例では、mapでfirstNameプロパティとlastNameプロパティを繋げる処理をしています。*/

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((number)=>{
  return number*2;
});
console.log(doubledNumbers);

const names = [
  {firstName: "Kate", lastName: "Jones"},
	{firstName: "John", lastName: "Smith"},
	{firstName: "Denis", lastName: "Williams"},
	{firstName: "David", lastName: "Black"}
];

const fullNames = names.map((name)=>{
  return name.firstName + name.lastName;
});

console.log(fullNames);