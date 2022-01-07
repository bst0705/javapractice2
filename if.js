/* 真偽値
   真偽値にはtrueとfalseという2つの値しか存在しません。条件式は、成り立つと「true」、成り立たなければ「false」という真偽値に置き換わります。 */

const level = 9;

if ( level >= 20 ){
  console.log("レベルは20以上です");
}
else if ( level >= 10 ){
  console.log("レベルは10以上20未満です");
}
else {
  console.log("レベルは10未満です");
}

/* &&(かつ,and)：複数の条件がすべてtrueならtrueになります。
   ||(または,or)：複数の条件のうち1つでもtrueならtrueになります。 */

if (level < 20 && level >= 10){
  console.log("レベルは10以上20未満です");
}

  /* switch文：ある値によって処理を分岐する
     if, elseifによる分岐が多く複雑な場合、switch文で書き換えるとシンプルで読みやすいコードにできます。
    switch(条件の値){ 処理 }
     switch文の中にcaseを追加することで処理を分けることができます。
     switch文では分岐の数だけcaseを追加していきます
   [breakについて]
     breakとはswitch文を終了する命令です。breakがないと、合致したcaseの処理を行った後、その次のcaseの処理も実行してしまいます。*/

const rank = 2;

switch(rank){
  case 1:
    console.log("一位です！");
    break;
  case 2:
    console.log("二位です！");
    break;
  case 3:
    console.log("三位です！");
    break;
}

/* switch文 - default 
    caseのどれにも一致しなかった時、defaultのブロックが実行されます。defaultはif文のelseに似たようなものです。 */

switch(rank){
  case 1:
    console.log("一位です！");
    break;
  case 2:
    console.log("二位です！");
    break;
  case 3:
    console.log("三位です！");
    break;
  default:
    console.log("ランキングに入っていません");
    break;
}
