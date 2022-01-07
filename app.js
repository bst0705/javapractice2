/* consoleに出力。文字列は""または''で囲む
  文末には ; をつける */
console.log("Hello World");

/*整数型(integer)は 四則計算( + - * / % )ができます。
  また数値を""or''で囲むことで文字列型となり、計算はされなくなれます。*/
console.log(1+1);

// 「%」記号を使うと、割ったときの余りを求めることができます。
// プログラミングでは余りの計算を使う機会がよくありますので、しっかりと覚えておきましょう
console.log(5%2); //結果は1

//文字列の連結 
console.log("35"+"4"); //結果は[354]となる(文字列の連結となっているから)
console.log("たこ"+"いか"); //結果は[たこいか]となる

/*変数(let{再代入可} var{再代入,再宣言可})
    変数の命名ルール:英単語を使用する。
    2語以上の場合は大文字で区切る。(例：oddNumber,englishSubject)
    変数名を数字で開始しない。(NG例：1number,4day)
    
    変数を使用するメリット1:繰り返し使える
    メリット2:変更に対応しやすい  メリット3:値の意味がわかりやすい

①変数名をクォーテーションで囲むと、変数(代入した値)ではなく「文字列」として認識され、
「変数名」がそのまま出力されてしまうので注意。*/
let name = "たこ";
console.log(name);

/* ②代入されている値が、文字列の場合は他の文字列と連結することができ、数値の場合は計算に用いる
 ことができます。*/
let length = 200;
console.log(length * length * 3);

/*再代入
「変数名 = 新しい値」で再代入*/
console.log(name);
name = "いか";
console.log(name);

let number = 5;
number = number + 5; //省略形⇨ number += 5 (=の前に+,-などをつけるだけ)
console.log(number);
number += 10;
console.log(number);

/*定数(const,{再代入,再宣言不可})*/
const language = "英語";
console.log(language + "を勉強中です");

/* テンプレートリテラル(連結方法)
   文字列の中に定数（変数）を埋め込むことができる
   バッククォーテーションで囲み定数または変数は下記のように記述する
   例：console.log(`${定数}は${定数です`) */
   let subject = "勉強";
   console.log(`${language}を${subject}中です。`);