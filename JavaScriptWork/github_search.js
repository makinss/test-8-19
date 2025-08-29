// GitHub APIのエンドポイントURL
const GITHUB_API_URL = 'https://api.github.com/users/';

// DOM要素の取得
// DOM要素の取得
const usernameInput = document.getElementById('search-input'); // ←修正！
const searchButton = document.getElementById('search-button');
const userInfoDiv = document.getElementById('user-info');

// ユーザー情報表示を更新する関数
const updateUserInfo = (user) => {
    if (user) {
        // ユーザー情報が見つかった場合
        userInfoDiv.innerHTML = `
            <div class="user-profile">
                <img class="user-avatar" src="${user.avatar_url}" alt="${user.login}のプロフィール画像" />
                <div class="user-details">
                    <h3>${user.name |

| user.login}</h3>
                    <p><strong>ユーザー名:</strong> ${user.login}</p>
                    <p><strong>フォロワー:</strong> ${user.followers}</p>
                    <p><strong>公開リポジトリ:</strong> ${user.public_repos}</p>
                    <a href="${user.html_url}" target="_blank">プロフィールを見る</a>
                </div>
            </div>
        `;
    } else {
        // ユーザー情報が見つからない場合やエラー
        userInfoDiv.innerHTML = `<p class="error-message">ユーザーが見つかりませんでした。</p>`;
    }
};

// 検索ボタンのクリックイベント
searchButton.addEventListener('click', async () => {
    const username = usernameInput.value.trim();
    if (username) {
        userInfoDiv.innerHTML = `<p>検索中...</p>`;
        
        try {
            const response = await fetch(GITHUB_API_URL + username);
            
            if (response.ok) { // HTTPステータスが200番台の場合
                const user = await response.json();
                updateUserInfo(user);
            } else { // ユーザーが見つからない場合（例: 404 Not Found）
                updateUserInfo(null);
            }
        } catch (error) { // ネットワークエラーなどの例外処理
            console.error('API呼び出し中にエラーが発生しました:', error);
            userInfoDiv.innerHTML = `<p class="error-message">ネットワークエラーが発生しました。</p>`;
        }
    } else {
        userInfoDiv.innerHTML = `<p class="error-message">ユーザー名を入力してください。</p>`;
    }
});


