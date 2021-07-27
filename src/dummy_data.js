
const transactionType = {
    id: "003",
    amount: "6000",
    category: "Payment",
    subCategory: "PayTv",
    dateTime: "",
    status: "",
    description: "Compact sub for 00196545672",
    benefactor: {
        name: "",
        destinationId: "11245665",
        accountProvider: {
            name: "DSTV",
            id: "",
            image: "/assets/img/persons/envato-logo-blue-black.png",

        }
    },
    meta: {
        paymentItemName: ""
    },
    debitWallet: {
        name: "Default",
        id: "001",
    }
}



export default {
    totalBalance: 1000.04,
    savedTransactions: [
        {
            id: "001",
            title: "DSTV Compact",
            transaction: {
                id: "003",
                amount: "6000",
                category: "Payment",
                subCategory: "PayTv",
                dateTime: "",
                status: "Successful",
                description: "Compact sub for 00196545672",
                benefactor: {
                    name: "",
                    destinationId: "11245665",
                    accountProvider: {
                        name: "DSTV",
                        id: "",
                        image: "/assets/img/persons/envato-logo-blue-black.png",

                    }
                },
                meta: {
                    paymentItemName: "Compact"
                },
                debitWallet: {
                    name: "Default",
                    id: "001",
                }
            }

        },
        {
            id: "001",
            title: "Quick Airtime",
            transaction: {
                id: "002",
                amount: "1000",
                category: "Payment",
                subCategory: "Airtime",
                dateTime: "",
                status: "Successful",
                description: "",
                benefactor: {
                    name: "",
                    destinationId: "0909876634555",
                    accountProvider: {
                        name: "Airtel",
                        id: "",
                        image: "/assets/img/persons/envato-logo-blue-black.png",

                    }
                },
                meta: {
                    paymentItemName: "Airtime"
                },
                debitWallet: {
                    name: "Default",
                    id: "001",
                }
            }
        },
        {
            id: "002",
            title: "Sisters Pocket Money",
            transaction:
        {
            id: "003",
            amount: "10000",
            category: "Transfer",
            subCategory: "BankTransfer",
            dateTime: "",
            status: "Successful",
            description: "",
            benefactor: {
                name: "Opeyemi Rahmon",
                destinationId: "0909876634555",
                accountProvider: {
                    name: "Gt Bank",
                    id: "1",
                    image: "",

                }
            },
            debitWallet: {
                name: "Default",
                id: "001",
            }
        }},
        {
            id: "004",
            title: "Fund Default",
            transaction: {
                id: "003",
                amount: "10000",
                category: "Funding",
                subCategory: "",
                dateTime: "",
                status: "Successful",
                description: "",
                benefactor: {
                    name: "Default Wallet",
                    destinationId: "001",
                    accountProvider: {
                        name: "",
                        id: "",
                        image: "/assets/img/persons/envato-logo-blue-black.png",

                    }
                },
                meta: {
                    paymentItemName: ""
                },
                debitWallet: {
                    name: "Master Card",
                    id: "001",
                }
            }
        }
    ],
    recentTransactions: [
        {
            id: "001",
            amount: "6000",
            category: "Payment",
            subCategory: "PayTv",
            dateTime: "",
            status: "Successful",
            description: "Compact sub for 00196545672",
            benefactor: {
                name: "",
                destinationId: "11245665",
                accountProvider: {
                    name: "DSTV",
                    id: "",
                    image: "/assets/img/persons/envato-logo-blue-black.png",

                }
            }, meta: {
                paymentItemName: "Compact"
            },
            debitWallet: {
                name: "Default",
                id: "001",
            }
        } ,
        {
            id: "002",
            amount: "1000",
            category: "Payment",
            subCategory: "Airtime",
            dateTime: "",
            status: "Successful",
            description: "",
            benefactor: {
                name: "",
                destinationId: "0909876634555",
                accountProvider: {
                    name: "Airtel",
                    id: "",
                    image: "/assets/img/persons/envato-logo-blue-black.png",

                }
            },
            meta: {
                paymentItemName: "Airtime"
            },
            debitWallet: {
                name: "Default",
                id: "001",
            }
        },
        {
            id: "003",
            amount: "10000",
            category: "Transfer",
            subCategory: "BankTransfer",
            dateTime: "",
            status: "Successful",
            description: "",
            benefactor: {
                name: "Opeyemi Rahmon",
                destinationId: "0909876634555",
                accountProvider: {
                    name: "Gt Bank",
                    id: "1",
                    image: "",

                }
            },
            debitWallet: {
                name: "Default",
                id: "001",
            }
        },
        {
            id: "003",
            amount: "10000",
            category: "Funding",
            subCategory: "",
            dateTime: "",
            status: "Successful",
            description: "",
            benefactor: {
                name: "Default Wallet",
                destinationId: "001",
                accountProvider: {
                    name: "",
                    id: "",
                    image: "/assets/img/persons/envato-logo-blue-black.png",

                }
            },
            meta: {
                paymentItemName: ""
            },
            debitWallet: {
                name: "Master Card",
                id: "001",
            }
        }
    ],
};


