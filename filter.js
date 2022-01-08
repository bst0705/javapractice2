/* filterメソッドとは記述した条件に合う要素のみを取り出して新しい配列を作成するメソッドです。
以下の例では配列numbersの要素が1つずつ引数numberに代入されます。その後、filterメソッド内で「2で割り切れる数字」かどうかを判定し、条件に合う要素が定数evenNumbersに配列として代入されます。

findメソッドと同様に、配列の要素がオブジェクトの場合もfilterメソッドを使うことができます。
以下の例ではオブジェクトのプロパティを条件の中で使用しています。
オブジェクトのプロパティを条件として使用する場合、そのプロパティを持っているオブジェクトそのものを取り出します。*/

const numbers = [1, 2, 3, 4];
const evenNumbers = numbers.filter((number)=>{
  return number%2 === 0;
});
console.log(evenNumbers);

const characters = [
  {id: 1, name:"にんじゃわんこ", age: 14},
  {id: 2, name:"ベイビーわんこ", age: 5},
  {id: 3, name:"ひつじ仙人", age: 100}
];

const underTwenty = characters.filter((character)=>{
  return character.age < 20;
});

console.log(underTwenty);
