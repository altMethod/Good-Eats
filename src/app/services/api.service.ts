import {InMemoryDbService} from 'angular-in-memory-web-api';

export class ApiService extends InMemoryDbService {
    createDb() {
        const food = [
            {
                id: 1,
                title: 'JERK CHICKEN SANDWICH',
                description: 'Hand-pulled jerk chicken and melted pepper jack cheese stacked high on toasted C' +
                        'uban bread, served with a side of jerk BBQ sauce.',
                price: 10,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-JerkChickenSandwich.jpg',
                alt: ''
            }, {
                id: 2,
                title: 'CUBAN SANDWICH',
                description: 'Ham, roasted pork, salami, Swiss cheese, lettuce, tomato, pickles, hot-pressed o' +
                        'n Cuban bread.',
                price: 10,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-CubanSandwich.jpg',
                alt: ''
            }, {
                id: 3,
                title: 'GRILLED CHICKEN BREAST SANDWICH',
                description: 'Served on a toasted brioche bun with lettuce, sliced onions and vine-ripened tom' +
                        'ato.',
                price: 9,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-WoodGrilledChickenBreastS' +
                        'andwich.jpg',
                alt: ''
            }, {
                id: 4,
                title: 'BBQ BACON & CHEESE BURGER',
                description: 'Glazed with our signature guava BBQ sauce, Applewood-smoked bacon, melted pepper' +
                        ' jack cheese, cole slaw and crisp fried onion strings.',
                price: 11,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-BBQBacon&CheeseBurger.jpg',
                alt: ''
            }, {
                id: 5,
                title: 'APPLEWOOD BACON & CHEDDAR BURGER',
                description: 'Applewood-smoked bacon, melted cheddar cheese, crisp pickle slices, vine-ripened' +
                        ' tomato, shaved red onions, Bibb lettuce, on a toasted brioche bun.',
                price: 10,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-ApplewoodBacon&CheddarBur' +
                        'ger.jpg',
                alt: ''
            }, {
                id: 6,
                title: 'GRILLED BURGER',
                description: 'Grilled and served with Bibb lettuce, vine-ripened tomato, shaved red onions, cr' +
                        'isp pickle slices on a toasted brioche bun.',
                price: 10,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-GrilledBurger.jpg',
                alt: ''
            }, {
                id: 7,
                title: 'SHRIMP & MAHI WITH LEMONGRASS SAUCE',
                description: 'Sautéed Mahi Mahi, shrimp, shiitake mushrooms, bok choy, sugar snap peas, edamam' +
                        'e and bell peppers in a zesty coconut lemongrass sauce served over white rice.',
                price: 9,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-590x365-ShrimpandMahiLemo' +
                        'ngrass.jpg',
                alt: ''
            }, {
                id: 8,
                title: 'KEY WEST FISH TACOS',
                description: 'Flour tortillas filled with sautéed fish, tomato salsa, cabbage-jicama slaw and ' +
                        'a side of guacamole. Served with a side of fries.',
                price: 11,
                img: 'https://media.bahamabreeze.com/en_us/images/product/BB-KeyWestFishTacos.jpg',
                alt: ''
            }
        ];
        const cart = [];
        return { food, cart };
    }
}
