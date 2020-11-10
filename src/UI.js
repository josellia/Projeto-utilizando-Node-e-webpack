import DogService from './services/DogService';

import { format } from 'timeago.js';


const dogService = new DogService();

class UI {
    async renderDogs() {
        const dogs = await dogService.getDogs();
        const dogsCardContainer = document.querySelector('#dogs-cards');
        dogsCardContainer.innerHTML = '';

        dogs.forEach(dog => {
            const div = document.createElement('div');
            div.className = '';
            div.innerHTML = `
        <div class="card m-2">
          <div class="row">
            <div class="col-md-4">
              <img src="http://localhost:3000${dog.imagePath}" class="image-fluid image"/>
            </div>
            <div class="col-md-8">
              <div class="card-block px-2">
              <a href="#" class="bt btn-danger float-right  delete" _id="${dog._id}">X</a>
                <h4 class="card-title text-uppercase centralizar">${dog.name}<h4>
                <p class="card-text text-uppercase centralizar size-breed">${dog.breed }</p>
               
              </div>
            </div>
          </div>
          <div class="card-footer">${format(dog.created_at, 'pt_BR')}</div>
        </div>
       `
            dogsCardContainer.appendChild(div);
        });
    }

    async addNewDog(dog) {
        await dogService.postDogs(dog);
        this.clearDogForm();
        this.renderDogs();
    }
    clearDogForm() {
        document.querySelector('#dog-form').reset();
    }
    renderMessage(message, colorMessage, timeMessage) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const dogForm = document.querySelector('#dog-form');

        container.insertBefore(div, dogForm);
        setTimeout(() => {
            document.querySelector('.message'.remove())
        }, timeMessage)
    }

    async deleteDog(dogId) {
        await dogService.deleteDog(dogId);
        this.renderDogs();
    }
}
export default UI;