const express = require('express')
const app = express()
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')

let pandaTable = [{ id: 1, name: 'Worawat P', Address: '122/83', order: 'Yellow restaurant', Time: '15:30 pm' },
{ id: 2, name: 'Sawadee Ja', Address: '21/22', order: 'Cha Korn', Time: '07:30 am' },
{ id: 3, name: 'Worawat P', Address: '122/83', order: 'Cha Korn', Time: '08:45 pm' },
]


app.use(cors())
app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({ extended: false }), router)

router.route('/pandaTable')
    .get((req, res) => res.json(pandaTable))

    // insert a new Order
    .post((req, res) => {
        let Order = {};
        Order.id = pandaTable[pandaTable.length - 1].id + 1;
        Order.name = req.body.name
        Order.Address = req.body.Address
        Order.order = req.body.order
        Order.Time = req.body.Time
        pandaTable.push(Order);
        res.json({ message: 'Order created!' })
    })


router.route('/pandaTable/:Order_id')
    .get((req, res) => {
        let id = pandaTable.findIndex((Order) => Order.id === +req.params.Order_id)
        res.json(pandaTable[id])
    })  // get a Order

    .put((req, res) => {                               // Update a Order
        // var id = req.params.Order_id
        let id = pandaTable.findIndex((Order) => Order.id === +req.params.Order_id)
        pandaTable[id].name = req.body.name;
        pandaTable[id].Address = req.body.Address
        pandaTable[id].order = req.body.order
        pandaTable[id].Time = req.body.Time
        res.json({ message: 'Order updated!' + req.params.Order_id });
    })

    .delete((req, res) => {                   // Delete a Order
        // delete     pandaTable[req.params.Order.id]
        pandaTable = pandaTable.filter((Order) => Order.id !== +req.params.Order_id)
        res.json({ message: 'Order deleted: ' + req.params.Order_id });
    })

    
    router.route('/pandaTable/update/:Order_id')
    .put((req, res) => {                               // Update a Order
        // var id = req.params.Order_id
        let id = pandaTable.findIndex((Order) => Order.id === +req.params.Order_id)
        pandaTable[id].name = req.body.name;
        pandaTable[id].Address = req.body.Address
        pandaTable[id].order = req.body.order
        pandaTable[id].Time = req.body.Time
        res.json({ message: 'Order updated!' + req.params.Order_id });
    })

app.listen(3001, () => console.log('server ready'))