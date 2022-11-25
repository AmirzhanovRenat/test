import { CartList } from '@Components/cartPage/cartList/cartList';
import { Container } from '@Core/container';
import { CartForm } from './cartForm/cartForm';

const SELECTORS = {
    addCartItemButton: './/button[contains(text(), "Add Cart Item")]',
    cartList: './/div[@class="cart__list"]',
    form: '[data-testid="form"]',
};

export class CartPageContainer extends Container {
    public async fulfill(initialState = {}): Promise<void> {
        await super.fulfill(initialState);
    }

    public async clickAddCartItemButton(): Promise<void> {
        await document.clickByXpath(SELECTORS.addCartItemButton);
    }

    public async getCartList(): Promise<CartList> {
        const [cartListElement] = await document.waitForXpath(SELECTORS.cartList);
        const cartList = new CartList(cartListElement);
        return cartList;
    }

    public async getForm(): Promise<CartForm> {
        const [formElement] = await document.waitForQuerySelector(SELECTORS.form);
        const form = new CartForm(formElement);
        return form;
    }
}
