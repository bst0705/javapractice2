/* JavaScriptでは引数に関数を渡すことができます。
   引数に渡される関数をコールバック関数と呼びます。
   関数は、関数名の後ろに()をつけると呼び出され、()をつけなければ関数そのものを指します。
   よって、呼び出し方と渡し方で書き方が異なります。 */

const printWanko = () => {
  console.log("にんじゃわんこ");
};

const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(printWanko);

/* 先程は事前に定義した関数をコールバック関数として渡しましたが、関数を直接引数の中で定義することもできます。 */
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};

call(() => {
  console.log("ひつじ仙人");
});

/* コールバック関数では、普通の関数と同じように引数を渡すことができます。
   ２つ以上の引数を渡すこともできます。
   コールバック関数の引数と、実行時に渡す引数の数をそろえるように気をつけましょう。*/
const call = (callback) => {
  callback("にんじゃわんこ", 14);
};

call((name,age) => {
  console.log(`${name}は${age}歳です。`);
});