// handle the active tab
document.addEventListener('DOMContentLoaded', function(){
    const tabs = document.querySelectorAll('.tab');

    //add event listeners to each tab
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            //remove 'active' class from all tabs
            tabs.forEach(tab => tab.classList.remove('active'));

            //add active class to the tabs that are clicked by the user
            this.classList.add('active');
        
        });
    });
});