/*
 * File: app/view/tables/TablesContainerViewModel.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 5.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 5.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('SenchaDash.view.tables.TablesContainerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tablestablescontainer',

    requires: [
        'Ext.data.Store',
        'Ext.data.field.Integer',
        'Ext.data.field.String'
    ],

    stores: {
        tableBasicGridStore: {
            data: [
                {
                    identifier: 1,
                    firstname: 'Bradshaw',
                    lastname: 'Chase',
                    username: 'bradshawchase'
                },
                {
                    identifier: 2,
                    firstname: 'Alba',
                    lastname: 'Perry',
                    username: 'albaperry'
                },
                {
                    identifier: 3,
                    firstname: 'Evelyn',
                    lastname: 'Nixon',
                    username: 'evelynnixon'
                },
                {
                    identifier: 4,
                    firstname: 'Ratliff',
                    lastname: 'Erickson',
                    username: 'ratlifferickson'
                },
                {
                    identifier: 5,
                    firstname: 'Blackwell',
                    lastname: 'Rodriguez',
                    username: 'blackwellrodriguez'
                },
                {
                    identifier: 6,
                    firstname: 'Alvarez',
                    lastname: 'Vincent',
                    username: 'alvarezvincent'
                }
            ],
            fields: [
                {
                    type: 'int',
                    name: 'identifier'
                },
                {
                    type: 'string',
                    name: 'firstname'
                },
                {
                    type: 'string',
                    name: 'lastname'
                },
                {
                    type: 'string',
                    name: 'username'
                }
            ]
        },
        tableCheckboxGridStore: {
            data: [
                {
                    _id: 'Pune',
                    index: 1,
                    isActive: true,
                    name: 'Bradshaw Chase',
                    address: '226 Ashford Street, Edenburg, Minnesota, 1959',
                    sparkline: [
                        8,
                        4,
                        9,
                        5,
                        9,
                        3,
                        8,
                        7
                    ],
                    slider: 30,
                    pieArray: [
                        120,
                        40,
                        170
                    ],
                    progressValue: 0.3
                },
                {
                    _id: 'Mumbai',
                    index: 3,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655',
                    sparkline: [
                        8,
                        6,
                        9,
                        3,
                        6,
                        10,
                        2,
                        4
                    ],
                    slider: 45,
                    pieArray: [
                        100,
                        70,
                        190
                    ],
                    progressValue: 0.4
                },
                {
                    _id: 'Chennai',
                    index: 5,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Moroe Place, Loveland, Connecticut, 9963',
                    sparkline: [
                        10,
                        5,
                        7,
                        3,
                        9,
                        8,
                        6,
                        4
                    ],
                    slider: 50,
                    pieArray: [
                        50,
                        100,
                        210
                    ],
                    progressValue: 0.8
                },
                {
                    _id: 'Delhi',
                    index: 6,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382',
                    sparkline: [
                        10,
                        7,
                        3,
                        8,
                        9,
                        2,
                        6,
                        5
                    ],
                    slider: 67,
                    pieArray: [
                        120,
                        120,
                        120
                    ],
                    progressValue: 0.50
                },
                {
                    _id: 'Agra',
                    index: 8,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335',
                    sparkline: [
                        4,
                        7,
                        2,
                        10,
                        9,
                        8,
                        6,
                        3
                    ],
                    slider: 84,
                    pieArray: [
                        200,
                        40,
                        120
                    ],
                    progressValue: 0.40
                },
                {
                    _id: 'Banglore',
                    index: 10,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994',
                    sparkline: [
                        1,
                        7,
                        2,
                        6,
                        9,
                        4,
                        6,
                        10
                    ],
                    slider: 90,
                    pieArray: [
                        230,
                        80,
                        50
                    ],
                    progressValue: 0.90
                }
            ],
            fields: [
                {
                    name: '_id'
                },
                {
                    name: 'index'
                },
                {
                    name: 'isActive'
                },
                {
                    name: 'name'
                },
                {
                    name: 'address'
                },
                {
                    name: 'sparkline'
                },
                {
                    name: 'slider'
                },
                {
                    name: 'pieArray'
                },
                {
                    name: 'progressValue'
                }
            ]
        },
        tableExpandRowGridStore: {
            data: [
                {
                    _id: 'Pune',
                    index: 1,
                    isActive: true,
                    name: 'Bradshaw Chase',
                    address: '226 Ashford Street, Edenburg, Minnesota, 1959',
                    sparkline: [
                        8,
                        4,
                        9,
                        5,
                        9,
                        3,
                        8,
                        7
                    ],
                    slider: 30,
                    pieArray: [
                        120,
                        40,
                        170
                    ]
                },
                {
                    _id: 'Mumbai',
                    index: 3,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655',
                    sparkline: [
                        8,
                        6,
                        9,
                        3,
                        6,
                        10,
                        2,
                        4
                    ],
                    slider: 45,
                    pieArray: [
                        100,
                        70,
                        190
                    ]
                },
                {
                    _id: 'Chennai',
                    index: 5,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Moroe Place, Loveland, Connecticut, 9963',
                    sparkline: [
                        10,
                        5,
                        7,
                        3,
                        9,
                        8,
                        6,
                        4
                    ],
                    slider: 50,
                    pieArray: [
                        50,
                        100,
                        210
                    ]
                },
                {
                    _id: 'Delhi',
                    index: 6,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382',
                    sparkline: [
                        10,
                        7,
                        3,
                        8,
                        9,
                        2,
                        6,
                        5
                    ],
                    slider: 67,
                    pieArray: [
                        120,
                        120,
                        120
                    ]
                },
                {
                    _id: 'Agra',
                    index: 8,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335',
                    sparkline: [
                        4,
                        7,
                        2,
                        10,
                        9,
                        8,
                        6,
                        3
                    ],
                    slider: 84,
                    pieArray: [
                        200,
                        40,
                        120
                    ]
                },
                {
                    _id: 'Banglore',
                    index: 10,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994',
                    sparkline: [
                        1,
                        7,
                        2,
                        6,
                        9,
                        4,
                        6,
                        10
                    ],
                    slider: 90,
                    pieArray: [
                        230,
                        80,
                        50
                    ]
                }
            ],
            fields: [
                {
                    name: '_id'
                },
                {
                    name: 'index'
                },
                {
                    name: 'isActive'
                },
                {
                    name: 'name'
                },
                {
                    name: 'address'
                },
                {
                    name: 'sparkline'
                },
                {
                    name: 'slider'
                },
                {
                    name: 'pieArray'
                }
            ]
        },
        tableEditRowGridStore: {
            data: [
                {
                    _id: 'Pune',
                    index: 1,
                    isActive: true,
                    name: 'Bradshaw Chase',
                    address: '226 Ashford Street, Edenburg, Minnesota, 1959',
                    sparkline: [
                        8,
                        4,
                        9,
                        5,
                        9,
                        3,
                        8,
                        7
                    ],
                    slider: 30,
                    pieArray: [
                        120,
                        40,
                        170
                    ]
                },
                {
                    _id: 'Mumbai',
                    index: 3,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655',
                    sparkline: [
                        8,
                        6,
                        9,
                        3,
                        6,
                        10,
                        2,
                        4
                    ],
                    slider: 45,
                    pieArray: [
                        100,
                        70,
                        190
                    ]
                },
                {
                    _id: 'Chennai',
                    index: 5,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Moroe Place, Loveland, Connecticut, 9963',
                    sparkline: [
                        10,
                        5,
                        7,
                        3,
                        9,
                        8,
                        6,
                        4
                    ],
                    slider: 50,
                    pieArray: [
                        50,
                        100,
                        210
                    ]
                },
                {
                    _id: 'Delhi',
                    index: 6,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382',
                    sparkline: [
                        10,
                        7,
                        3,
                        8,
                        9,
                        2,
                        6,
                        5
                    ],
                    slider: 67,
                    pieArray: [
                        120,
                        120,
                        120
                    ]
                },
                {
                    _id: 'Agra',
                    index: 8,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335',
                    sparkline: [
                        4,
                        7,
                        2,
                        10,
                        9,
                        8,
                        6,
                        3
                    ],
                    slider: 84,
                    pieArray: [
                        200,
                        40,
                        120
                    ]
                },
                {
                    _id: 'Banglore',
                    index: 10,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994',
                    sparkline: [
                        1,
                        7,
                        2,
                        6,
                        9,
                        4,
                        6,
                        10
                    ],
                    slider: 90,
                    pieArray: [
                        230,
                        80,
                        50
                    ]
                }
            ],
            fields: [
                {
                    name: '_id'
                },
                {
                    name: 'index'
                },
                {
                    name: 'isActive'
                },
                {
                    name: 'name'
                },
                {
                    name: 'address'
                },
                {
                    name: 'sparkline'
                },
                {
                    name: 'slider'
                },
                {
                    name: 'pieArray'
                }
            ]
        },
        tablePagingStore: {
            pageSize: 2,
            data: [
                {
                    _id: '54eebf6c15c6941efaddbde1',
                    index: 1,
                    isActive: true,
                    name: 'Bradshaw Chase',
                    address: '226 Ashford Street, Edenburg, Minnesota, 1959'
                },
                {
                    _id: '54eebf6ca0eccdb8da15c977',
                    index: 2,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655'
                },
                {
                    _id: '54eebf6c0d2b42e9c23c9960',
                    index: 3,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Monroe Place, Loveland, Connecticut, 9963'
                },
                {
                    _id: '54eebf6ce40036a417dd2441',
                    index: 4,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382'
                },
                {
                    _id: '54eebf6c58f156832558c942',
                    index: 5,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335'
                },
                {
                    _id: '54eebf6c9915360ae748131b',
                    index: 6,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994'
                },
                {
                    _id: '54eebf6ca0eccdb8da15c977',
                    index: 7,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655'
                },
                {
                    _id: '54eebf6c0d2b42e9c23c9960',
                    index: 8,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Monroe Place, Loveland, Connecticut, 9963'
                },
                {
                    _id: '54eebf6ce40036a417dd2441',
                    index: 9,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382'
                },
                {
                    _id: '54eebf6c58f156832558c942',
                    index: 10,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335'
                },
                {
                    _id: '54eebf6c9915360ae748131b',
                    index: 11,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994'
                },
                {
                    _id: '54eebf6ca0eccdb8da15c977',
                    index: 12,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655'
                },
                {
                    _id: '54eebf6c0d2b42e9c23c9960',
                    index: 13,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Monroe Place, Loveland, Connecticut, 9963'
                },
                {
                    _id: '54eebf6ce40036a417dd2441',
                    index: 14,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382'
                },
                {
                    _id: '54eebf6c58f156832558c942',
                    index: 15,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335'
                },
                {
                    _id: '54eebf6c9915360ae748131b',
                    index: 16,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994'
                },
                {
                    _id: '54eebf6ca0eccdb8da15c977',
                    index: 17,
                    isActive: false,
                    name: 'Alba Perry',
                    address: '209 Polar Street, Lowgap, Louisiana, 5655'
                },
                {
                    _id: '54eebf6c0d2b42e9c23c9960',
                    index: 18,
                    isActive: false,
                    name: 'Evelyn Nixon',
                    address: '141 Monroe Place, Loveland, Connecticut, 9963'
                },
                {
                    _id: '54eebf6ce40036a417dd2441',
                    index: 19,
                    isActive: true,
                    name: 'Ratliff Erickson',
                    address: '191 Cooke Court, Callaghan, Idaho, 2382'
                },
                {
                    _id: '54eebf6c58f156832558c942',
                    index: 20,
                    isActive: true,
                    name: 'Blackwell Rodriguez',
                    address: '297 Manor Court, Sisquoc, Arizona, 3335'
                },
                {
                    _id: '54eebf6c9915360ae748131b',
                    index: 21,
                    isActive: true,
                    name: 'Alvarez Vincent',
                    address: '718 Eagle Street, Caspar, Maine, 7994'
                }
            ],
            fields: [
                {
                    name: '_id'
                },
                {
                    name: 'index'
                },
                {
                    name: 'isActive'
                },
                {
                    name: 'name'
                },
                {
                    name: 'address'
                }
            ],
            listeners: {
                beforeload: 'onArraystoreBeforeLoad'
            }
        }
    }

});