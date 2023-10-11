/*=============== SHOW MENU ===============*/
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form'),
  calculateCm = document.getElementById('calculate-cm'),
  calculateKg = document.getElementById('calculate-kg'), 
  calculateMessage = document.getElementById('calculate-message');

const calculateBmi = (e) => {
  e.preventDefault();

  // Check if the fields have value
  if (calculateCm.value === '' || calculateKg.value === '') { 
    // Add or remove color
    calculateMessage.classList.remove('color-green');
    calculateMessage.classList.add('color-red');

    // Show message
    calculateMessage.textContent = 'Fill in the Height and Weight ';

    // Remove message three seconds
    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 3000);
  } else {
    // BMI Formula
    const cm = calculateCm.value / 100,
      kg = calculateKg.value, 
      bmi = Math.round(kg / (cm * cm));

    if (bmi < 18.5) {
      // Add color and display message
      calculateKg.classList.add('color-green'); 
      calculateMessage.textContent = `Your BMI is ${bmi} and you are underweight`;
    } else if (bmi < 25) {
      calculateKg.classList.add('color-green'); 
      calculateMessage.textContent = `Your BMI is ${bmi} and you are at a healthy weight`;
    } else if (bmi < 30) {
      calculateKg.classList.add('color-green'); 
      calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
    } else if (bmi < 40) {
      calculateKg.classList.add('color-green'); 
      calculateMessage.textContent = `Your BMI is ${bmi} and you are obese`;
    } else {
      calculateKg.classList.add('color-green');
      calculateMessage.textContent = `Your BMI is ${bmi} and you are extremely obese`;
    }

    // To clear the input fields
    calculateCm.value = '';
    calculateKg.value = '';

    // Remove message in four seconds
    setTimeout(() => {
      calculateMessage.textContent = '';
    }, 4000);
  }
};

calculateForm.addEventListener('submit', calculateBmi);


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()

    //Check if the field has a value
    if(contactUser.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-green')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'You must enter your email'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)

    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_mwyo35q','template_h36ayes','#contact-form','C3Ts--0k9iBYKgbx_')
            .then(() =>{
                //show message and add color
                contactMessage.classList.add('color-green')
                contactMessage.textContent = 'You registered successfully'

                // Remove message agter three seconds
                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) => {
                //Mail sending error
                alert('OOPS! SOMETHING WENT WRONG...', error)
            })

            //To clear the input field
            contactUser.value = ''
    }
}

contactForm.addEventListener('submit', sendEmail)
