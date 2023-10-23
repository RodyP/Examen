
import { IBus } from "../interfaz/IBus";

const bus : IBus [] = [
    {
        id: 1,
        busNumber: 2,
        brand: "asd",
        model: "xyz",
        capacity: 20,
        routes: [
            {
                id:1,
                start: "Manta",
                destination: "Portoviejo",
                distance: 10,
                busId:1
            }
        ]
    },
    {
        id: 2,
        busNumber: 4,
        brand: "dsa",
        model: "zyx",
        capacity: 25,
        routes: [
            {
                id:2,
                start: "montecristi",
                destination: "Manta",
                distance: 5,
                busId: 2
            }
        ]
    },
    {
        id:3,
        busNumber: 6,
        brand: "sda",
        model: "xyz",
        capacity: 20,
        routes: [
            {
                id:3,
                start: "Manta",
                destination: "Chone",
                distance: 20,
                busId: 3
            }
        ]
    }
]
//console.log(bus)
