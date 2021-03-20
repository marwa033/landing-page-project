/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/
const allSections = document.querySelectorAll('.allSections');
const navList = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();
function creatNav(){
  allSections.forEach((element)=>{
      const dataNav = element.getAttribute('data-nav');
      const listItem = document.createElement('li');
      const link = document.createElement('a');
      const text = document.createTextNode(dataNav);
      listItem.setAttribute('style','margin:0.8em;cursor:pointer');
      link.appendChild(text);
      listItem.appendChild(link);
      fragment.appendChild(listItem);
      function scrollInto(){
        link.addEventListener('click',()=>{
            element.scrollIntoView({behavior:"smooth"})
        })}
        scrollInto()
  }
  )
  navList.appendChild(fragment)
}

  function onScroll(){
  window.addEventListener('scroll',()=>{
      allSections.forEach((allSection)=>{
      
      
        function links(){
          const links = document.querySelectorAll('a');
            links.forEach((alllink)=>{
    if(allSection.getAttribute('data-nav')==alllink.textContent){
      alllink.classList.add('your-active-class')
    }else{
      alllink.classList.remove('your-active-class')
          }
  }  )
        }
       
        const rect = allSection.getBoundingClientRect();  
        if(rect.top >= -100 && rect.top <=200){
          // allSection.classList.add('your-active-class');
          allSection.style.background="rgb(204, 17, 89)"    
          links() ;      
            }else{
              allSection.style.background="none"
            }
            
          })     
})
}

creatNav()
onScroll()
// }
// scroll();
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


