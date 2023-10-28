import { defineStore } from "pinia";
//import axios from "axios";

export const useMainStore = defineStore("main", {
    state: () => ({
        fluDatabase: [[], [], [], [], []]
    }),
    actions: {
        addToFluDatabase(key, value) {
            this.fluDatabase[key] = value;
            console.log(this.fluDatabase);
        },

        /*         async removeCartItem(itemID) {
                    this.cartItems.splice(this.cartItems.indexOf(itemID), 1);
                    for (let index = 0; index < this.billing.items.length; index++) {
                        console.log(this.billing.items[index][3]);
                        if (this.billing.items[index][3] == itemID[0]) {
                            this.billing.items.splice(index, 1)
                        }
                    }
                    await Preferences.set({
                        key: 'cartItems',
                        value: JSON.stringify(this.cartItems),
                    });
                }, */
    },
});

