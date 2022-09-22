let activemenu=document.querySelector('.navbar-collapse')
let openbtn=document.querySelector('.btn-open')
let exitbtn=document.querySelector('.btn-exit')
openbtn.addEventListener('click',(e) =>
{
    activemenu.classList.toggle('active')
    document.getElementById('overlay').style.display="block"
    openbtn.classList.add('none')
    exitbtn.classList.add('show')   
    console.log(1)
})
exitbtn.addEventListener('click',(e) =>
{
    document.getElementById('overlay').style.display="none"
    activemenu.classList.toggle('active')
    openbtn.classList.remove('none')
    exitbtn.classList.remove('show')
})
let sNav=document.getElementById('navbar')
window.addEventListener('scroll',() => 
{
    let scrollValue=window.scrollY
    if (scrollValue < 150)
    {
        sNav.classList.remove('bg-scroll')
    }
    else
    {
        sNav.classList.add('bg-scroll')
    }
})
const accoritems = document.querySelectorAll(".accordion-icon")
const accContents = document.querySelectorAll(".accordion-body")
accoritems.forEach(accoritem => {
    accoritem.addEventListener('click',(e)=>
    {
        // const panel=accoritem.nextElementSibling;
        // panel.classList.toggle('active')
        accoritem.classList.toggle('active')
    })
})
const accordion = document.getElementsByClassName('contentBx')
for (i=0;i<accordion.length;i++)
{
        accordion[i].addEventListener('click',function(){
        this.classList.toggle('active')
    })
}