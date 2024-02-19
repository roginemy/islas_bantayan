const animations = {
    scrollHeader: function(x){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            x.style.position = 'sticky'
            x.style.top = '0'
            x.style.background = 'var(--clr-grey)'
        }else{
            x.style.background = 'var(--clr-bg)'
        }
    },
    menuToggle: (x) => {
        x.classList.toggle('active')
    },
    modal: (x) => {
        x.style.display = "block"
    }
}

const validations = {
    formValidation: (form) => {
        
    } 
}


export default {animations};