// Save checkbox states to localStorage
function saveCheckboxStates() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkboxStates = Array.from(checkboxes).map((checkbox) => ({
        id: checkbox.dataset.id,
        checked: checkbox.checked,
    }));
    localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
}

// Load checkbox states from localStorage
function loadCheckboxStates() {
    const checkboxStates = JSON.parse(localStorage.getItem('checkboxStates')) || [];
    checkboxStates.forEach(({ id, checked }) => {
        const checkbox = document.querySelector(`input[data-id="${id}"]`);
        if (checkbox) checkbox.checked = checked;
    });
}

// Handle Completed button click
document.getElementById('completeButton').addEventListener('click', () => {
    document.getElementById('completedMessage').style.display = 'block';
    saveCheckboxStates();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadCheckboxStates);
