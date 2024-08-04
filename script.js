document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const saveNoteButton = document.getElementById('save-note');
    const notesContainer = document.getElementById('notes');
    const modal = document.getElementById('note-modal');
    const modalContent = document.getElementById('modal-note-content');
    const closeModalButton = document.querySelector('.close-btn');

    function addNote(noteContent) {
        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');

        const noteContentWithLineBreaks = noteContent.replace(/\n/g, '<br>');

        noteItem.innerHTML = `
            <p>${noteContentWithLineBreaks}</p>
            <button class="delete-note">Delete</button>
        `;
        
        noteItem.addEventListener('click', () => {
            modalContent.innerHTML = noteContentWithLineBreaks; 
            modal.style.display = 'block';
        });

        noteItem.querySelector('.delete-note').addEventListener('click', (e) => {
            e.stopPropagation();
            notesContainer.removeChild(noteItem);
        });

        notesContainer.appendChild(noteItem);
    }

    saveNoteButton.addEventListener('click', () => {
        const noteContent = noteInput.value.trim();
        if (noteContent) {
            addNote(noteContent);
            noteInput.value = ''; 
        }
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });
});
