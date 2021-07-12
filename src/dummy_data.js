export default {
    totalBalance: 1000.04,
    savedTransactions: [
        {
            id: "001",
            title: "Airtel Airtime",
            description: "Airtime topup for 09108756532",
            transactionId: "",
            amount: "1000",
            category: "Airtime",
            receiver: {
                name: "Airtel",
                destinationId: "09108756532",
                accountProvider: {
                    name: "Airtel",
                    id: ""
                },
                image: "/assets/img/persons/envato-logo-blue-black.png",
                id: "",
            },
            wallet: {
                name: "Default",
                id: "001",
            }
        },
        {
            id: "002",
            title: "Transfer",
            description: "5000 Transfer to Yusuf",
            amount: 4000,
            category: "Transfer",
            image: "/assets/img/persons/envato-logo-blue-black.png",
            receiver: {
                name: "Yusuf Rahmon",
                destinationId: "2201119876",
                image: "/assets/img/persons/envato-logo-blue-black.png",
                accountProvider: {
                    name: "GT Bank",
                    id: ""
                },

                id: "",
            },
            wallet: {
                name: "Default",
                id: "001",
            }
        },
        {
            id: "003",
            title: "Dstv Subscription",
            description: "Compact sub for 00196545672",
            transactionId: "",
            amount: "6000",
            category: "PayTv",
            receiver: {
                name: "Dstv",
                destinationId: "11245665",
                accountProvider: {
                    name: "DSTV",
                    id: ""
                },
                image: "/assets/img/persons/envato-logo-blue-black.png",
                id: "",
            },
            wallet: {
                name: "Default",
                id: "001",
            }
        },
    ],
    recentTransactions: [
        {
            id: "0",
            status: "success",
            category: "Transfer",
            amount: 4000,
            description: "Description",
            receiver: {
                name: "Ife Bashan",
                accountNumber: "2201119876",
                image: "",
                id: "",
            },
        },
        {
            id: "1",
            status: "success",
            category: "Airtime Purchase",
            description: "Description",
            amount: 1000,
            receiver: {
                name: "MTN",
                accountNumber: "",
                image: "",
                id: "",
            },
        },
        {
            id: "2",
            status: "success",
            description: "Description",
            category: "Topup",
            amount: 15000,
            receiver: {
                name: "Default Card",
                accountNumber: "2201119876",
                image: "",
                id: "",
            },
        },
    ],
};
