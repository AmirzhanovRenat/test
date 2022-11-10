import { CartPageContainer } from '@Components/cartPage/cartPage';

const NEW_ITEM_DATA = {
    name: 'Leet o.1337 v2',
    price: 150,
    quantity: 2,
};

describe('Add Item Popup', () => {
    let cartPage: CartPageContainer;

    beforeEach(async () => {
        cartPage = new CartPageContainer();
        await cartPage.fulfill();
    });

    test('popup`s logic should be correct', async () => {
        reporter.startStep('Open "Add Cart Item" popup');
        await cartPage.clickAddCartItemButton();
        reporter.endStep();

        reporter.startStep('Fill all fields');
        // code
        reporter.endStep();

        reporter.startStep('Check error message on `0` as `quantity` value');
        // code
        reporter.endStep();

        reporter.startStep('Click "Создать"');
        // code
        reporter.endStep();

        const cartList = await cartPage.getCartList();
        const [item] = await cartList.getCartItems();

        reporter.startStep('Created item should have the same fields as insert one');
        expect(await item.getInfo()).toMatchObject({
            ...NEW_ITEM_DATA,
            priceForAll: NEW_ITEM_DATA.quantity * NEW_ITEM_DATA.price,
        });
        reporter.endStep();
    });
});
