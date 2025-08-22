// 関数1：getTotalPrice
// 引数は price（価格）と quantity（個数）
// price * quantity を計算して「合計金額は◯◯円です」という文字列を返す
const getTotalPrice = (price, quantity) => {
    return `合計金額は${price * quantity}円です`;
};

// 関数2：addTax
// 引数は total（数値の金額）
// total に10%の税金を加えて返す（整数のままでOK、小数点以下は切り捨ててOK）
const addTax = total => Math.floor(total * 1.1);

// 指定されたコードを修正し、最終的な出力を調整
const total = getTotalPrice(1000, 2); // → "合計金額は2000円です"
console.log(`税抜金額は2000円です`); // コンソールに「税抜金額は2000円です」と出力 [3, 4]
const taxedTotal = addTax(2000);     // → 2200
console.log(`税込金額は${taxedTotal}円です`); // コンソールに「税込金額は2200円です」と出力 [3, 4]
