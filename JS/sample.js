var sName;
var sAmount;
var sPassword;
/*--------- function for onsubmit event--------*/
function fnSubmitForm() {
  sName = document.getElementById('userName').value;
  sAmount = document.getElementById('userAmount').value;
  sPassword = document.getElementById('userPassword').value;
  localStorage.setItem('uname', sName);
  localStorage.setItem('amt', sAmount);
  localStorage.setItem('pass', sPassword);
}

function fnValidateName() {
  var patternName = /^[a-zA-Z]+$/;
  sName = document.getElementById("userName").value;
    if (sName.match(patternName)) {
        document.getElementById("inputName").setAttribute('class', 'col-xs-6 row has-feedback has-success');
        document.getElementById("nGlyph").setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
  } else {
        document.getElementById("inputName").setAttribute('class', 'col-xs-6 row has-feedback has-error');
        document.getElementById("nGlyph").setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
  }
}

function fnValidateAmount() {
  var patternAmt = /^[0-9]+$/;
  sAmount = document.getElementById("userAmount").value;
  if (sAmount.match(patternAmt)) {
        document.getElementById("inputAmt").setAttribute('class', 'input-group has-feedback col-xs-5 has-success');
        document.getElementById("aGlyph").setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
        document.getElementById("aGlyph").style.right = "38px";
  } else {
        document.getElementById("inputAmt").setAttribute('class', 'input-group has-feedback col-xs-5 has-error');
        document.getElementById("aGlyph").setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
        document.getElementById("aGlyph").style.right = "38px";
  }
}

function fnValidatePassword() {
  var patternPwd = /^[a-zA-Z0-9]+$/;
  sPassword = document.getElementById("userPassword").value;
  if (sPassword.match(patternPwd)) {
    if (sPassword.length > 6) {
        document.getElementById("inputPwd").setAttribute('class', 'col-xs-6 has-success');
        document.getElementById("pGlyph").setAttribute('class', 'glyphicon glyphicon-ok form-control-feedback');
    } else {
        document.getElementById("inputPwd").setAttribute('class', 'col-xs-6  has-warning');
        document.getElementById("pGlyph").setAttribute('class', 'glyphicon glyphicon-warning-sign form-control-feedback');
    }
  } else {
        document.getElementById("inputPwd").setAttribute('class', 'col-xs-6 has-error');
        document.getElementById("pGlyph").setAttribute('class', 'glyphicon glyphicon-remove form-control-feedback');
  }
}