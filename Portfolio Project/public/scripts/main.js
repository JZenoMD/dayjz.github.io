// var rhit = rhit || {};
let themeOg = true;


document.querySelector(".theme-btn").onclick = (event) => {
    if (/*document.style.getPropertyValue("--theme-og") === 'true' | document.querySelector(".theme-btn-true")*/themeOg === true) {
        document.documentElement.style.setProperty('--dark-blue-font', '#e0fbfc');
        document.documentElement.style.setProperty('--light-blue-font', '#ee6c4d');
        document.documentElement.style.setProperty('--dark-orange-font', '#3d5a80');
        document.documentElement.style.setProperty('--med-orange-font', '#98c1d9');
        document.documentElement.style.setProperty('--light-orange-font', '#293241');
        themeOg = false;
        // document.getElementsByClassName("theme-btn").classList.toggle("theme-btn-true");
        // document.getElementsByClassName("theme-btn").classList.toggle("theme-btn-false");
    } else {
        document.documentElement.style.setProperty('--dark-blue-font', '#264653');
        document.documentElement.style.setProperty('--light-blue-font', '#2a9d8f');
        document.documentElement.style.setProperty('--dark-orange-font', '#e76f51');
        document.documentElement.style.setProperty('--med-orange-font', '#f4a261');
        document.documentElement.style.setProperty('--light-orange-font', '#e9c46a');
        themeOg = true;
        // document.getElementsByClassName("theme-btn").classList.toggle("theme-btn-true");
        // document.getElementsByClassName("theme-btn").classList.toggle("theme-btn-false");
    }
};