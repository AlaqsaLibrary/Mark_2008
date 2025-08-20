function calculate() {
  let arabic = parseInt(document.getElementById("arabic").value) || 0;
  let english = parseInt(document.getElementById("english").value) || 0;
  let islamic = parseInt(document.getElementById("islamic").value) || 0;
  let history = parseInt(document.getElementById("history").value) || 0;

  // التحقق من القيود
  if (arabic < 0 || arabic > 100 ||
      english < 0 || english > 100 ||
      islamic < 0 || islamic > 60 ||
      history < 0 || history > 40) {
    document.getElementById("result").innerHTML = "⚠️ الرجاء إدخال علامات ضمن الحدود المسموح بها.";
    return;
  }

  let total = arabic + english + islamic + history;
  let maxTotal = 100 + 100 + 60 + 40; // مجموع العلامات الكاملة
  let percentage = ((total / maxTotal) * 100).toFixed(2);
  let percentage3 = ((total / 10) ).toFixed(2);

  document.getElementById("result3").innerHTML = " النسبةالمئوية من 30: " + percentage3 + " %";
  document.getElementById("result").innerHTML = "النسبة المئوية: " + percentage + " %";
}
