function ValidateCheck() {
    const userId = document.getElementById("userId");
    const userPassword = document.getElementById("userPassword");
    const confirmedPassword = document.getElementById("confirmedPassword");

    // 이메일 정규식
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // 비밀번호 정규식: 최소 8자, 최소 하나의 문자 및 하나의 숫자
    const passwordFormat = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";
    // 비밀번호 정규식 수정해야됨

    // 1. 이메일 유효성 검사
    if(userId.value == "")
    {
        alert("이메일을 입력해주세요.");
        userId.focus();
        return false;
    }
    else{
        if(!userId.value.match(mailFormat)){
            alert("유효하지 않은 이메일입니다. 이메일 형식을 확인해주세요.");
            userId.focus();
            return false;
        }
    }

    // 2. 비밀번호 검사
    // 2.1 비밀번호 유형 검사
    if(userPassword.value == ""){
        alert("비밀번호를 입력해 주세요.");
        userPassword.focus();
        return false;
    }
    else{
        if(!userPassword.value.match(passwordFormat)){
            alert("비밀번호는 최소 8자로 문자, 숫자를 조합해서 사용하세요.")
            userPassword.focus();
            return false;
        }
        else{
            if(userPassword.value != confirmedPassword.value){
                alert("비밀번호가 일치하지 않습니다.")
                confirmedPassword.focus();
                return false;
            }
        }
    }
    
    // 입력 값 전송
    document.signUp_form.submit();
}