// Map section IDs to banner classes
    const sectionToBanner = {
      hero: "banner-home",
      about: "banner-about",
      skills: "banner-skills",
      projects: "banner-projects",
      career: "banner-career",
      leadership: "banner-leadership",
      education: "banner-education",
      awards: "banner-awards",
      certificates: "banner-certificates",
      contact: "banner-contact"
    };

    const navLinks = document.querySelectorAll('a');
    const sections = Array.from(document.querySelectorAll('section[id]'));
    const banner = document.getElementById('banner');

    // Single-section navigation logic
    function showSection(sectionId) {
      document.body.classList.add('single-section');
      sections.forEach(section => {
        if (section.id === sectionId) {
          section.classList.add('active-section');
          section.style.display = 'block';
        } else {
          section.classList.remove('active-section');
          section.style.display = 'none';
        }
      });

      // Update nav active class
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + sectionId);
      });

      // Update banner color
      for (const cls of banner.classList) {
        if (cls.startsWith('banner-')) banner.classList.remove(cls);
      }
      banner.classList.add(sectionToBanner[sectionId] || 'banner-home');
    }

    // Attach click handlers to nav links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = link.getAttribute('href').replace('#', '');
        if (document.getElementById(targetId)) {
          e.preventDefault();
          showSection(targetId);
        }
      });
    });

    // On page load, show the first section (hero)
    window.addEventListener('DOMContentLoaded', function() {
      showSection('hero');
    });


  const aboutBtnWrapper = document.querySelector('#about .about-blur-wrapper');
  const aboutBlurOverlay = document.querySelector('#about .about-blur-overlay');
  if (aboutBtnWrapper && aboutBlurOverlay) {
    aboutBtnWrapper.addEventListener('mouseenter', () => aboutBlurOverlay.style.opacity = '1');
    aboutBtnWrapper.addEventListener('mouseleave', () => aboutBlurOverlay.style.opacity = '0');
    aboutBtnWrapper.addEventListener('focusin', () => aboutBlurOverlay.style.opacity = '1');
    aboutBtnWrapper.addEventListener('focusout', () => aboutBlurOverlay.style.opacity = '0');
  }



  // Copy email to clipboard
document.getElementById('copy-email-btn').onclick = function() {
  const email = "ay.elbaraka@aui.ma"; // <-- Replace with your email
  navigator.clipboard.writeText(email);
  const tooltip = document.getElementById('email-tooltip');
  tooltip.textContent = "Copied!";
  setTimeout(() => { tooltip.textContent = "Click to copy"; }, 1200);
};

// Copy phone to clipboard
document.getElementById('copy-phone-btn').onclick = function() {
  const phone = "+212601058955"; // <-- Replace with your phone number
  navigator.clipboard.writeText(phone);
  const tooltip = document.getElementById('phone-tooltip');
  tooltip.textContent = "Copied!";
  setTimeout(() => { tooltip.textContent = "Click to copy"; }, 1200);
};


document.getElementById('download-resume-btn').addEventListener('click', function () {
    const fileUrl = 'images/resume.pdf'; // Your PDF path

    fetch(fileUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('File not found or server error');
            }
            return response.blob();
        })
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const anchor = document.createElement('a');
            anchor.href = url;
            anchor.download = 'Ayoub_EL_BARAKA_Resume.pdf'; // Force download name
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            window.URL.revokeObjectURL(url);
        })
        .catch(err => {
            console.error(err);
            alert("Couldn't download the resume. Check if the PDF exists.");
        });
});
