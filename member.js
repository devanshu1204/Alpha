function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var memberBtn = document.getElementById("memberBtn");
  var skillsBtn = document.getElementById("skillsBtn");
  if (member.style.display === "none") {
    member.style.display = "block";
    skills.style.display = "none";
    memberBtn.style.backgroundColor = "#F5F5F5";
    skillsBtn.style.backgroundColor = "#FFFFFF";
  } else {
    member.style.display = "none";
    skills.style.display = "block";
    memberBtn.style.backgroundColor = "#FFFFFF";
    skillsBtn.style.backgroundColor = "#F5F5F5";
  }
}