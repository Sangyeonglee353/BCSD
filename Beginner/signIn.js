/* 쿠키 생성하기 */
function setCookie(cname, cvalue, exhours) {
    let d = new Date();
    d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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

/* 로그인 실패 횟수 카운트 */
function countLoginFail() {
    // 로그인 실패 횟수저장
    console.log(getCookie("loginFailCnt"));
    if (getCookie("loginFailCnt") == '') {
        setCookie("loginFailCnt", 1, 1);
    }
    else if (getCookie("loginFailCnt") < 5) {
        setCookie("loginFailCnt", parseInt(getCookie("loginFailCnt")) + 1, 1);
        if (parseInt(getCookie("loginFailCnt")) == 5) {
            // 로그인 차단 flag 추가
            const flagValue = "blockLogin";
            setCookie("flag", flagValue, 1);
        }
    }
}

/* 로그인 처리 */
function accessLogin(loginId) {
    const userId = "user";
    // 1. 쿠키 저장
    setCookie(userId, loginId.value, 72);
    // 2. 로컬 스토리지 저장
    localStorage.setItem(userId, loginId.value);
    // 3. 세션 스토리지 저장
    sessionStorage.setItem(userId, loginId.value);
    // 4. 로그인 실패 횟수 초기화
    document.cookie = "loginFailCnt=;max-age=0;";
    // 5. 로그인 성공으로 메인 페이지로 이동
    alert(loginId.value + "님 환영합니다.");
    location.href = "./";
}

/* 로그인 실패시 문구 출력 */
function printLoginBlock(ctype){
    const cnt = getCookie("loginFailCnt");
    if (cnt < 5) {
        alert(ctype + "를 확인해 주세요. 로그인을 5회 이상 실패하시면\
 고객님의 정보 보호를 위해 서비스 이용이 1시간 동안 차단될 수 있습니다.\n\
(로그인 실패 " + cnt + "회)");
    }
    else{
        alert("5회 이상 로그인 실패로 1시간 동안 로그인이 차단됩니다.");
    }    
}

/* 임시 유저 */
const tempUser = [
    { id: "notebook", password: "1234" },
    { id: "mouse", pwd: "1111" },
    { id: "book", pwd: "0123" }
]

/* 로그인 함수 */
function loginCheck() {
    const loginId = document.getElementById("loginId");
    const loginPassword = document.getElementById("loginPassword");
    const adminId = "admin";
    const adminPw = "1234";

    // 회원인지 판단
    let checkid = tempUser.findIndex(data => data.id === loginId.value);

    // 1. 값 입력 검사
    if (loginId.value.trim() == "" || loginPassword.value.trim() == "") {
        alert("ID, P/W를 입력해 주세요.");
        loginId.focus();
        return false;
    } // 2. 로그인 5회 실패 여부 검사 
    else if (getCookie("flag") === 'blockLogin') {
        alert("5회 이상 로그인 실패로 1시간 동안 로그인이 차단됩니다.");
    } // 3. 관리자 로그인 판단
    else if (loginId.value.trim() == adminId && loginPassword.value.trim() == adminPw) {
        accessLogin(loginId);
    } // 4. 회원 로그인 판단
    else if (checkid != -1) {
        if (loginPassword.value === tempUser[checkid].pwd) {
            // 4-1. 로그인 성공시
            accessLogin(loginId);
        } else {
            // 4-2. 로그인 실패시
            countLoginFail();
            const ctype = "P/W";
            printLoginBlock(ctype);
            loginPassword.focus();
            return false;
        }
    }
    else { // 5. 로그인 실패시
        countLoginFail();
        const ctype = "ID";
        printLoginBlock(ctype);
        loginId.focus();
        return false;
    }
}

/* Enter와 Click시 로그인 버튼이 작동하도록 추가 */
// <form> 태그의 <button type = 'submit'> 인 경우
const signInForm = document.querySelector("#signIn_form");
signInForm.addEventListener('submit', (e) => {
    e.preventDefault(); // submit 리로드 막기
    loginCheck();
})