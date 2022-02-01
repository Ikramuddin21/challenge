const container = document.querySelector('.container');
const tabButtons = document.querySelectorAll('[role="tab"]');
const tabPanels = document.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => {
    button.addEventListener('click', clickHandler);
});

function clickHandler(e) {
    // all buttons deselected
    tabButtons.forEach(button => {
        // button.ariaSelected = false;
        button.setAttribute('aria-selected', 'false');
    });

    // all tab panels deselected
    tabPanels.forEach(tabPanel => {
        // tabPanel.hidden = true;
        tabPanel.setAttribute('hidden', 'true');

    });

    // selected clicked button
    e.target.setAttribute('aria-selected', 'true');
    // e.target.ariaSelected = true;

    const id = e.target.getAttribute('id');
    // const id = e.target.id;

    // show tab panel
    const selectedTabPanel = document.querySelector(`[aria-labelledby=${id}]`);
    // selectedTabPanel.hidden = false;
    selectedTabPanel.removeAttribute('hidden');

    if (id === 'python') {
        container.style.backgroundColor = 'greenyellow';
    }
    else if (id === 'php') {
        container.style.backgroundColor = 'tomato';
    }
    else {
        container.style.backgroundColor = 'white';
    }
}