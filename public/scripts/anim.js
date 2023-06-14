const collapsible = document.querySelectorAll(".collapsible")
const openBtn = document.querySelector("#open-btn")
const closeBtn = document.querySelector("#close-btn")
const sideMenu = document.querySelector("#sidebar")
const closeLinks = document.querySelectorAll('.close')
const downloadBtn = document.getElementById('download-btn')

if (window.innerWidth < 750) {
  document.querySelectorAll('.mobile_remove_data-toggle').forEach(element => {
    element.removeAttribute('data-toggle')
  })
}


// readLouderButton.addEventListener('click', () => {
//   readLouderButton.style.display = 'none';
//   pauseButton.style.display = 'block';
//   let utterance = new SpeechSynthesisUtterance('This is Themba speaking. ');
//   speechSynthesis.speak(utterance);
// })

// pauseButton.addEventListener('click', () => {
//   readLouderButton.style.display = 'block';
//   pauseButton.style.display = 'none';
//   speechSynthesis.pause()
// })


/**
 * Back to top button
 */

let backtotop = document.querySelector('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('showScroll')
    } else {
      backtotop.classList.remove('showScroll')
    }
  }
  window.addEventListener('load', toggleBacktotop)
}

downloadBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  // Set the href attribute to the path of your CV file
  link.href = '/assets/G_CHAUKECV.pdf';
  // Set the download attribute with the desired file name
  link.download = 'G_CHAUKECV.pdf';
  // Programmatically trigger a click event on the link to start the download
  link.click();
});



openBtn.addEventListener('click', function () {

  openBtn.classList.toggle('first-spin')
  sideMenu.classList.toggle('show-sidebar')

  setTimeout(function () {
    openBtn.classList.toggle('hide-btn')
    closeBtn.classList.toggle('hide-btn')
    openBtn.classList.toggle('first-spin')
  }, 300)
})

closeBtn.addEventListener('click', function () {
  closeSideMenu()
})

closeLinks.forEach(button => {
  button.addEventListener('click', () => {
    closeSideMenu()
  })
});

function closeSideMenu() {
  closeBtn.classList.toggle('first-spin')
  sideMenu.classList.toggle('show-sidebar')

  setTimeout(function () {
    closeBtn.classList.toggle('hide-btn')
    openBtn.classList.toggle('hide-btn')
    closeBtn.classList.toggle('first-spin')
  }, 300)
}



var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};