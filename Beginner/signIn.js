// 로그인 함수
function loginCheck() {
    const signInForm = document.forms["signIn_form"];
    const loginId = document.getElementById("loginId");
    const loginPassword = document.getElementById("loginPassword");
    const adminId = "admin";
    const adminPw = "1234";

    if (loginId.value.trim() == "" || loginPassword.value.trim() == "") {
        alert("ID, P/W를 입력해 주세요.");
        loginId.focus();
        return false;
    }
    else if(loginId.value.trim() == adminId && loginPassword.value.trim() == adminPw){
        alert("관리자님 환영합니다.");
    }
    else{
        alert("ID, P/W를 확인해 주세요.");
        loginId.focus();
        return false;
    }

    // 입력 값 전송
    signInForm.submit();
}