const text = document.getElementById('countdown')

const countdown = ()=>{
    text.innerHTML = '10'
    setTimeout(()=>{
        text.innerHTML = '9'
        setTimeout(()=>{
            text.innerHTML = '8'
            setTimeout(() => {
                text.innerHTML = '7'
                setTimeout(() => {
                    text.innerHTML = '6'
                    setTimeout(() => {
                        text.innerHTML = '5'
                        setTimeout(() => {
                            text.innerHTML = '4'
                            setTimeout(() => {
                                text.innerHTML = '3'
                                setTimeout(() => {
                                    text.innerHTML = '2'
                                    setTimeout(() => {
                                        text.innerHTML = '1'
                                        setTimeout(()=>{
                                            text.innerHTML = 'Happy Independence Day!'
                                        },1000)
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        },1000)
    },1000)
}
window.onload = countdown;