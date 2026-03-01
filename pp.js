// 这个文件是空的，用来骗过主程序
window.activateWallet = function() {
    console.log("登录锁已被绕过");
    return true;
};
window.checkLogin = () => true;
// 强制让所有登录弹窗在生成的瞬间消失
setInterval(() => {
    const lock = document.getElementById('activate-wallet-btn');
    if(lock) {
        lock.closest('div').parentElement.remove();
        document.body.style.overflow = 'auto';
    }
}, 100);
// 这个文件是空的，用来骗过主程序
window.activateWallet = function() {
    console.log("登录锁已被绕过");
    return true;
};
window.checkLogin = () => true;
// 强制让所有登录弹窗在生成的瞬间消失
setInterval(() => {
    const lock = document.getElementById('activate-wallet-btn');
    if(lock) {
        lock.closest('div').parentElement.remove();
        document.body.style.overflow = 'auto';
    }
}, 100);