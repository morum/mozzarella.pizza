export interface Description {
    text: String
    reference: String
}

export interface Flavor {
    name: String
    phonetic: String
    description: Description
}

const flavors: Array<Flavor> = [
    {
        name: "moz·za·rel·la",
        phonetic: "/ˌmɒtsəˈrɛlə/",
        description: {
            text: "Mild, semisoft white Italian cheese, often used in Italian cooking as a melted topping, especially on pizzas.",
            reference: "https://en.wikipedia.org/wiki/Mozzarella"
        }
    },
    {
        name: "pep·per·o·ni",
        phonetic: "/ˌpepəˈrōnē/",
        description: {
            text: "Beef and pork sausage seasoned with pepper.",
            reference: "https://en.wikipedia.org/wiki/Pepperoni"
        }
    },
    {
        name: "mar·ghe·ri·ta",
        phonetic: "/ˌmärɡəˈrēdə/",
        description: {
            text: "Typical Neapolitan pizza topped with tomatoes, cheese, and traditionally also basil.",
            reference: "https://en.wikipedia.org/wiki/Pizza_Margherita"
        }
    },
    {
        name: "ne·a·pol·i·tan",
        phonetic: "/ˌnēəˈpälətn/",
        description: {
            text: "Also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
            reference: "https://en.wikipedia.org/wiki/Neapolitan_pizza"
        }
    },
    {
        name: "ha·wai·ian",
        phonetic: "/həˈwī(y)ən/",
        description: {
            text: "Originating in Canada, is traditionally topped with pineapple, tomato sauce, cheese, and either ham or bacon.",
            reference: "https://en.wikipedia.org/wiki/Hawaiian_pizza"
        }
    },
    {
        name: "ca·pre·se",
        phonetic: "/kəˈprāzē/",
        description: {
            text: "Denoting a salad of fresh mozzarella, tomatoes, and basil.",
            reference: "https://en.wikipedia.org/wiki/Caprese_salad"
        }
    },
    {
        name: "quat·tro for·mag·gi",
        phonetic: "/quàt·tro/ /forˈmad.d͡ʒi/",
        description: {
            text: "Combination of four kinds of cheese, usually melted together.",
            reference: "https://en.wikipedia.org/wiki/Pizza_quattro_formaggi"
        }
    },
    {
        name: "car·bo·na·ra",
        phonetic: "/ˌkärbəˈnärə/",
        description: {
            text: "Italian pasta dish from Rome made with eggs, hard cheese, cured pork and black pepper.",
            reference: "https://en.wikipedia.org/wiki/Carbonara"
        }
    }
]

export {
    flavors
}