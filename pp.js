(function() {
    // 1. 强行在主程序启动前，把所有“门禁卡”塞进你的口袋
    localStorage.setItem('auth_status', 'verified');
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('has_authorized', 'true');
    localStorage.setItem('pin_verified', 'true');

    // 2. 伪造主程序必须调用的“安保函数”，让它们永远返回“成功”
    window.activateWallet = function() {
        console.log("检测到登录请求：已自动放行。");
        return true; 
    };

    window.checkLogin = function() {
        return true;
    };

    // 3. 预防针：万一主程序还在转圈，强制让任何可能出现的登录框消失
    const css = document.createElement('style');
    css.innerHTML = `
        #activate-wallet-btn, 
        .login-modal-overlay, 
        div[style*="z-index: 10001"] { 
            display: none !important; 
        }
    `;
    document.head.appendChild(css);

    console.log("EPhone 系统：登录码验证已成功绕过。");
})();
