import './styles/styles.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderDogs();
})

document.querySelector('#dog-form')
    .addEventListener('submit', (event) => {
        const name = document.querySelector('#name').value;
        const breed = document.querySelector('#breed').value;
        const image = document.querySelector('#image').files;

        const formData = new FormData();
        formData.append('image', image[0]);
        formData.append('name', name);
        formData.append('breed', breed);

        const ui = new UI();
        ui.addNewDog(formData);
        ui.renderMessage('New dog add', 'success', 3000);

        event.preventDefault()

    });

//Exclusão dos cards
document.querySelector('#dogs-cards')
    .addEventListener('click', (event) => {
        if (event.target.classList.contains('delete')) {
            const ui = new UI();
            ui.deleteDog(event.target.getAttribute('_id'));
            ui.renderMessage('Dog removed', 'danger', 3000)
        }
        event.preventDefault();
    });