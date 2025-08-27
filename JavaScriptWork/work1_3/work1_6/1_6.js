function makeCoffee() {
    console.log("☕ スタッフ：先にコーヒーを準備します..."); // 修正
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("✅ コーヒーができました！"); // 修正
        resolve();
      }, 2000); // 2秒
    });
  }
  
  function makeSandwich() {
    console.log("🥪 スタッフ：次にサンドイッチを準備します..."); // 修正
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("✅ サンドイッチができました！"); // 修正
        resolve();
      }, 3000); // 3秒
    });
  }
  
  async function serveCustomer() {
    await Promise.all([makeCoffee(),makeSandwich()]);
    console.log("🍽️ スタッフ：すべてできたので配膳します！"); // 修正
  }
  
  console.log("🥪 お客さんがコーヒーとサンドイッチを注文しました"); // 修正
  serveCustomer();
