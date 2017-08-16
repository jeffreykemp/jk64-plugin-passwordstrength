var password_estimator = {

on_input : function (e, a) {
  var vTooShortMsg = a.attribute01
     ,vShowFeedbackWarning = a.attribute07
     ,vShowFeedbackSuggestions = a.attribute08
     ,vMinimumPasswordLength = parseInt(a.attribute09);
  var strength = {
    0: a.attribute02,
    1: a.attribute03,
    2: a.attribute04,
    3: a.attribute05,
    4: a.attribute06
  }
  var thisId = $(e.target).attr("id")
     ,resId = thisId+"_verdict"
     ,val = $("#"+thisId).val()
     ,result
     ,verdict = "";
  apex.debug("password_estimator: on_change " + resId);
  if (val !== "") {
    if (val.length < vMinimumPasswordLength) {
      verdict = '<span class="password-strength-warning">'
              + vTooShortMsg
              + '</span>';
    } else {
      result = zxcvbn(val);
      verdict = '<span class="password-strength-score password-strength-score-'
              + result.score
              + '">'
              + strength[result.score]
              + '</span>';
      if ((vShowFeedbackWarning == "Y") && (result.feedback.warning)) {
        verdict = verdict
                + '<div class="password-strength-warning">'
                + result.feedback.warning
                + '.</div>';
      }
      if ((vShowFeedbackSuggestions == "Y") && (result.feedback.suggestions)) {
        verdict = verdict
                + '<div class="password-strength-suggestion">'
                + result.feedback.suggestions
                + '</div>';
      }
    }
  }
  apex.debug("password_estimator: verdict="+verdict);
  $("#"+resId).html(verdict);
},

init : function() {
  var daThis = this
     ,vElementsArray = daThis.affectedElements;
  apex.debug('password_estimator: affectedElements:' + vElementsArray.length);
  for (var i = 0; i < vElementsArray.length; i++) {
    var vaffectedElement = daThis.affectedElements.eq(i)
       ,thisId = $(vaffectedElement).attr("id");
    apex.debug("password_estimator: adding result span " + thisId);
    var resId = thisId+"_verdict";
    $(vaffectedElement).after("<span class='password_estimator' id='"+resId+"'></span>");
    var item = document.getElementById(thisId);
    item.addEventListener('input', function(e) {
      password_estimator.on_input(e, daThis.action);
    });
  }
}

}