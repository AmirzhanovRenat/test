import { Component } from '@Core/component';

type FormFields = {
    name: string;
    price: number;
    quantity: number;
};

const SELECTORS = {
    name: 'input[name="name"]',
    price: 'input[name="price"]',
    quantity: 'input[name="quantity"]',
    createButton: './/button[contains(text(), "Создать")]',
};

export class CartForm extends Component {
    public async fillOneField(selector: string, text: string | number) {
        const [fieldEl] = await this.element.waitForQuerySelector(selector);
        const field = new Component(fieldEl);
        field.input(String(text));
    }

    public async fillAllFields(data: FormFields) {
        this.fillOneField(SELECTORS.name, data.name);
        this.fillOneField(SELECTORS.price, data.price);
        this.fillOneField(SELECTORS.quantity, data.quantity);
    }

    public async getQuantityError() {
        const [errorEl] = await this.element.waitForQuerySelector(`${SELECTORS.quantity} + .error`);
        return errorEl.textContent;
    }

    public async clickSubmit() {
        await this.element.clickByXpath(SELECTORS.createButton);
    }
}
