// 是否开关外链
var changeCheckbox = document.querySelector('.js-switch');

function switchUrl() {
    changeCheckbox.addEventListener('click', function() {
        if (changeCheckbox.checked == false) {
            document.querySelector("#website").disabled = true;
            document.querySelector("#title").disabled = false;
            document.querySelector("#author").disabled = false;
        } else {
            document.querySelector("#website").disabled = false;
            document.querySelector("#title").disabled = true;
            document.querySelector("#author").disabled = true;
        }

    });
}


// 是否开关校红
function switchSelectXiaohong() {
    changeCheckbox.addEventListener('click', function() {
        if (changeCheckbox.checked == true) {
            document.querySelector(".select2_xiaohong").disabled = true;
        } else {
            document.querySelector(".select2_xiaohong").disabled = false;
        }

    });
}