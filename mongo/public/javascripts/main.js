const deleteButtons = document.querySelectorAll('.delete-user-btn');
deleteButtons.forEach(db => {
    db.addEventListener('click', (ev) => {
        if (!confirm('Biztosan törlöd a bejegyzést?')) {
            ev.preventDefault();
        }
    });
});