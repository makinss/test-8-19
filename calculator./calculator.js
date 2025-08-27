document.addEventListener('DOMContentLoaded', () => {
    // HTML要素を取得
    const value1Input = document.getElementById('value1');
    const value2Input = document.getElementById('value2');
    const operatorSelect = document.getElementById('operator');
    const resultDiv = document.getElementById('result');

    // 計算を実行し、結果を表示する関数
    function calculate() {
        const value1 = parseFloat(value1Input.value);
        const value2 = parseFloat(value2Input.value);
        const operator = operatorSelect.value;

        // 値が入力されていない場合
        if (isNaN(value1) || isNaN(value2)) {
            resultDiv.textContent = '両方の数値を入力してください';
            resultDiv.classList.remove('error'); // エラー表示をリセット
            return;
        }

        // ゼロ除算のチェック
        if (operator === '/' && value2 === 0) {
            resultDiv.textContent = '0で割る事はできません。';
            resultDiv.classList.add('error'); // エラー表示を赤字に
            return;
        }

        let result;
        // 演算子に応じた計算
        switch (operator) {
            case '+':
                result = value1 + value2;
                break;
            case '-':
                result = value1 - value2;
                break;
            case '*':
                result = value1 * value2;
                break;
            case '/':
                result = value1 / value2;
                break;
            default:
                resultDiv.textContent = '無効な演算子です';
                return;
        }

        // 結果の表示
        resultDiv.textContent = `${value1} ${operator} ${value2} = ${result}`;
        resultDiv.classList.remove('error'); // エラー表示をリセット
    }

    // イベントリスナーを設定
    value1Input.addEventListener('input', calculate);
    value2Input.addEventListener('input', calculate);
    operatorSelect.addEventListener('change', calculate);

    // 初期表示
    calculate();
});
