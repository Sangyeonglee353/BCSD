/* 쿠키 가져오기 */
function getCookie(cName) {
    cName = cName + '=';
    let cookieData = document.cookie;
    let start = cookieData.indexOf(cName);
    let cValue = '';
    if (start != -1) {
        start += cName.length;
        let end = cookieData.indexOf(';', start);
        if (end == -1) end = cookieData.length;
        cValue = cookieData.substring(start, end);
    }
    return unescape(cValue);
}

/* 로그인 상태 확인 */
function accessLogin() {
    const data = document.querySelector("#signBtn");
    if (localStorage.getItem("user")) {
        // 상단 버튼 변경
        data.innerHTML = "<a href='#' onclick='logout(); return false;' class='signup-link btn btn-success my-2 my-sm-0'>Sign Out</a>";
    }
}

/* 로그아웃 버튼 클릭 시 */
function logout() {
    // 모든 스토리지 초기화
    localStorage.clear();
    sessionStorage.clear();
    document.cookie = "user=;max-age=0;";
    // 상단 버튼 변경
    const data = document.querySelector("#signBtn");
    data.innerHTML = "<a href='./signIn.html' class='signin-link btn my-2 my-sm-0 text-white bg-transparent mr-2'>Sign In</a>\
    <a href='./signUp.html' class='signup-link btn btn-success my-2 my-sm-0'>Sign up</a>";
}

accessLogin();