// 로그인 함수
function LoginCheck() {
    const signInForm = document.forms["signIn_form"];
    const loginId = document.getElementById("loginId");
    const loginPassword = document.getElementById("loginPassword");

    if (loginId.value.trim() == "" || loginPassword.value.trim() == "") {
        alert("id, pw를 입력해 주세요.");
        loginId.focus();
        return false;
    }

    // 입력 값 전송
    signInForm.submit();
}

// 최대 글자수 설정 함수
function Maxlength(el, maxlength) {
    if (el.value.length > maxlength) {
        el.value = el.value.substr(0, maxlength);
    }
}

// 2. 전공 자동 입력
// 2.1 학번 아이디 가져오기
const studentNumber = document.getElementById("studentNumber");    

// 2.2 전공 변경 함수
function modifyMajor(new_text) {
    const major = document.getElementById("major");
    major.firstChild.nodeValue = new_text;
}

// 2.3 코드별 전공구분 함수
function compareNumberMajor(){
    const idCode = studentNumber.value.substring(5, 7);
    let majorText = "";

    // 코드별 전공지정
    switch(idCode){
        case "20":
            majorText = "기계공학부";
            break;
        case "40":
            majorText = "메카트로닉스공학부";
            break;
        case "61":
            majorText = "전기·전자·통신공학부";
            break;
        case "36":
            majorText = "컴퓨터공학부";
            break;
        case "51":
            majorText = "디자인건축공학부 디자인공학전공";
            break;
        case "72":
            majorText = "디자인건축공학부 건축공학전공";
            break;
        case "74":
            majorText = "에너지신소재화학공학부";
            break;
        case "80":
            majorText = "산업경영학부";
            break;
        case "85":
            majorText = "고용서비스정책학과";
            break;
        default:
            majorText = "학번을 확인해 주세요.";
            break;
    }
    modifyMajor(majorText);
}

// 2.4 전공 자동 변경
studentNumber.addEventListener("change", compareNumberMajor, false);

// 3. 회원가입 유효성 검사
function ValidateCheck() {
    const signUpForm = document.forms["signUp_form"];
    const userId = document.getElementById("userId");
    const userPassword = document.getElementById("userPassword");
    const confirmedPassword = document.getElementById("confirmedPassword");

    // 이메일 정규식
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // 비밀번호 정규식: 대/소문자, 숫자, 특수문자 포함, 최소 8자
    const passwordFormat = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

    // 3.1 이메일 유효성 검사
    if (userId.value == "") {
        alert("이메일을 입력해주세요.");
        userId.focus();
        return false;
    }
    else {
        if (!userId.value.match(mailFormat)) {
            alert("유효하지 않은 이메일입니다. 이메일 형식을 확인해주세요.");
            userId.focus();
            return false;
        }
    }

    // 3.2 비밀번호 검사
    // 3.2.1 비밀번호 입력 여부
    if (userPassword.value == "") {
        alert("비밀번호를 입력해 주세요.");
        userPassword.focus();
        return false;
    } // 3.2.2 비밀번호 유효성 검사
    else if (!userPassword.value.match(passwordFormat)) {
        alert("비밀번호는 최소 8자 이상이어야 하며, 대문자/소문자/숫자/특수문자를 모두 포함해야 합니다.")
        userPassword.focus();
        return false;
    } // 3.2.3 비밀번호 확인 입력 여부
    else if (confirmedPassword.value == "") {
        alert("비밀번호 확인을 입력해 주세요.");
        confirmedPassword.foucs();
        return false;
    } // 3.2.4 비밀번호와 비밀번호 확인 매칭 여부
    else if (userPassword.value != confirmedPassword.value) {
        alert("비밀번호가 일치하지 않습니다.")
        confirmedPassword.focus();
        return false;
    }

    // 3.3 학번 입력 검사
    if (studentNumber.value == "") {
        alert("학번을 입력해 주세요.");
        studentNumber.focus();
        return false;
    }
    
    // 3.4 휴대폰 번호 입력 검사
    const phoneNumber = document.getElementById("phoneNumber");
    if(phoneNumber.value == ""){
        alert("휴대폰 번호를 입력해 주세요.");
        phoneNumber.focus();
        return false;
    }

    // 3.5 학번 검사
    const major = document.getElementById("major");

    if(major.innerHTML == "학번을 확인해 주세요."){
        alert("학번을 확인해 주세요.");
        studentNumber.focus();
        return false;
    }

    // 입력 값 전송
    signUpForm.submit();
}

// 4. 휴대폰 번호 자동 '-' 넣기
// 숫자만 입력 가능, 자동 '-' 넣기
// 유형 1: 00-000-0000, 유형 2: 000-0000-0000
const autoHypen = (target) => {
    target.value = target.value.replace(/[^0-9]/, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
}