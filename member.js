function skillMember() {
  let member = document.getElementsByClassName('member')
  let skill = document.getElementsByClassName('skill')
  for (let i = 0; i < member.length; i++) {
    member[i].addEventListener('click', () => {
      if (skill[i].style.display === 'none') {
        skill[i].style.display = 'block'
      } else {
        skill[i].style.display = 'none'
      }
    })
  }
}