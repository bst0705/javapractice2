/* while
   条件式がtrueの間、{ }内の処理を繰り返す」ことができます 
   条件式の部分がいつかはfalseになり、繰り返し処理が終わるようにする。
   ループ処理が終わらないことを無限ループという*/
   let number = 1;
   
   while(number <= 10){
    console.log(number);
    number += 1;
   }

/* for (while文に比べてシンプルに書くことができるのが特徴です。)
   for(変数の定義;条件式;変数の更新)
   (例：for( let sum = 1; sum <= 15; sum += 1 )) */
   for( let sum = 1; sum <= 20; sum ++ ){
     console.log(sum);
   }

/* for + if (for文の中で特定の条件下では指定したものを表示できる) */
   for (let level = 1; level <= 30; level ++){
     if(level % 5 == 0){
       console.log("スキルアップが可能です");
     }
     else{
       console.log("レベルが上がりました");
     }
   }
  
/* 配列
   複数の値をまとめて管理するには、配列というものを用います。
   配列は、[値1, 値2, 値3] のように作ります。配列に入っているそれぞれの値のことを要素と呼びます。
   配列を代入する定数名は、慣習上複数形にすることが多い
   例：const fishes = ["たこ","いか","さめ"]*/
  const fishes = ["たこ","いか","さめ"];
  console.log(fishes);

  /* インデックス番号(配列の要素に備わる番号)
     インデックス番号は、0から始まる */
  console.log(fishes[1]);
  //要素の更新
  fishes[1] = "くじら";
  console.log(fishes[1]);

  //配列と繰り返し処理
  const animals = ["cat","dog","lion"];
  for(let i=0;i<2;i++){
    console.log(animals[i]);
  }

/* 配列.lengthとすることで、配列の要素数を取得できる。
   配列の要素数が変わっても問題なく繰り返すことができるので便利 */
   const fruits = ["apple","melon","gleep"];
   console.log(fruits.length);
   for(let i=0;i<fruits.length;i++){
     console.log(fruits[i]);
   }

/* オブジェクト
  オブジェクトは配列と同じく複数のデータをまとめて管理するのに用いられます。
  配列は複数の値を並べて管理するのに対して、オブジェクトはそれぞれの値にプロパティと呼ばれる名前をつけて管理します。
  配列  [値1,値2,値3] 
  オブジェクト  {プロパティ1:値1,プロパティ2:値2}*/
  const game = {gta:"ぐらせふ",cod:2}
  console.log(game);
  game.gta = "グラセフ"
  console.log(game.gta);
  console.log(game);

/* オブジェクトを要素に持つ配列
   配列の要素には、文字列や数値だけでなく、オブジェクトも使うことができます。その際、コードが横に長くなることを防ぐために、要素ごとに改行することがよくある
   配列の中のオブジェクトのプロパティの値を取り出すには、
  「配列[インデックス番号].プロパティ名」と書きます。 */
   const characters = [
     {name:"サムライ",price:200},
     {name:"それがし",price:1000}
   ];
   console.log(characters[0]);
   console.log(characters[1].name);

//まとめ
const chracters = [
  {name: "にんじゃわんこ", age: 14},
  {name: "ひつじ仙人", age: 100},
  {name: "ベイビーわんこ", age: 5},
];

for (let i=0;i<chracters.length;i++) {
  console.log("--------------------");
  const chracter = chracters[i];
  console.log(`名前は${chracter.name}です`);
  console.log(`${chracter.age}歳です`);
}

//オブジェクトの中にオブジェクト
const cafe = {
  name: "Progateカフェ",
  businessHours: {
    opening:"10:00(AM)",
    closing:"8:00(PM)"
  }
};

console.log(`店名:${cafe.name}`);
console.log(`営業時間:${cafe.businessHours.opening}から${cafe.businessHours.closing}`);


//オブジェクトの中に配列
const caf = {
  name: "Progateカフェ",
  businessHours: {
    opening: "10:00(AM)",
    closing: "8:00(PM)"
  },
  menus:["コーヒー","紅茶","チョコレートケーキ"]
};

console.log(`店名: ${caf.name}`);
console.log(`営業時間:${caf.businessHours.opening}から${caf.businessHours.closing}`);
console.log(`----------------------------`);
console.log("おすすめメニューはこちら");

for(let i = 0; i<caf.menus.length; i++){
  console.log(caf.menus[i]);
}

/* オブジェクトの「値」の部分には、関数を用いることもできます。
下図のようにプロパティの値として関数を記述します。また、その関数を呼び出すには、「定数名.プロパティ名()」とします。プロパティ名の後ろの()を忘れないようにしましょう。 */
const vtuber = {
  class2:"ふぶき",
  class3:()=>{
    console.log("こんぺこ こんぺこ こんぺこ〜");
  }
};

console.log(vtuber.class2);
vtuber.class3();