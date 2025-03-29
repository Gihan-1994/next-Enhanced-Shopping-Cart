import {Product} from "@/types";

export const products: Product[] = [
    {
        id: 1,
        name: 'Wireless Headphones',
        price: 99.99,
        image: 'https://media.wired.com/photos/66abec9ccb172c2e5de763bf/master/w_960,c_limit/Edifier-Stax-Spirit-S5-Headphones-Offwhite-Background-SOURCE-Amazon.jpg',
        description: 'High-quality wireless headphones with noise cancellation.',
        category: 'Audio',
        brand : 'Edifier',
        inStock : true,
        freeShipping: true
    },
    {
        id: 2,
        name: 'Smart Watch',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnQlMjB3YXRjaGVzfGVufDB8fDB8fHww',
        description: 'Track your fitness and stay connected with this smart watch.',
        category: 'Gadgets',
        brand : 'Apple',
        inStock : true,
        freeShipping: true
    },
    {
        id: 3,
        name: 'Bluetooth Speaker',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Qmx1ZXRvb3RoJTIwU3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D',
        description: 'Portable bluetooth speaker with amazing sound quality.',
        category: 'Audio',
        brand : 'Sony',
        inStock : false,
        freeShipping: false
    },
    {
        id: 4,
        name: 'Wireless Earbuds',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2lyZWxlc3MlMjBFYXJidWRzfGVufDB8fDB8fHww',
        description: 'Comfortable earbuds with long battery life.',
        category: 'Audio',
        brand : 'Sony',
        inStock : true,
        freeShipping: false
    },
    {
        id: 5,
        name: 'Digital Camera',
        price: 299.99,
        image: 'https://media.istockphoto.com/id/2156697108/photo/pocket-camera-with-a-white-background-reminds-us-of-old-cameras-taken-from-various-angles.webp?a=1&b=1&s=612x612&w=0&k=20&c=WfP2iPUZrSL1_f0IrKFaAuwlSjAu0z2r0Y5hZ_FEaCM=',
        description: 'Capture your memories with this high-resolution camera.',
        category: 'Video',
        brand : 'Edifier',
        inStock : true,
        freeShipping: false
    },
    {
        id: 6,
        name: 'Laptop Stand',
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1623251606108-512c7c4a3507?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFwdG9wJTIwU3RhbmR8ZW58MHx8MHx8fDA%3D',
        description: 'Ergonomic laptop stand for better posture and comfort.',
        category: 'Computer_Accessories',
        brand : 'Apple',
        inStock : true,
        freeShipping: false
    },
    {
        id: 7,
        name: 'Mechanical Keyboard',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1602025882379-e01cf08baa51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww',
        description: 'Tactile mechanical keyboard for better typing experience.',
        category: 'Computer_Accessories',
        brand : 'Apple',
        inStock : true,
        freeShipping: false
    },
    {
        id: 8,
        name: 'Wireless Mouse',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1624435299582-fcfcdb329325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdpcmVsZXNzJTIwTW91c2V8ZW58MHx8MHx8fDA%3D',
        description: 'Ergonomic wireless mouse with long battery life.',
        category: 'Computer_Accessories',
        brand : 'Edifier',
        inStock : true,
        freeShipping: false
    },
    {
        id: 9,
        name: 'USB-C Hub',
        price: 49.99,
        image: 'https://media.istockphoto.com/id/1495120279/photo/the-type-c-hub-8-in-1-for-connect-any-device.webp?a=1&b=1&s=612x612&w=0&k=20&c=y8r9GPR80Csi93V7UaQXo7Y2c-w4DbYZdInXP1bx1z8=',
        description: 'Expand your connectivity options with this USB-C hub.',
        category: 'Computer_Accessories',
        brand : 'Sony',
        inStock : false,
        freeShipping: false
    },
    {
        id: 10,
        name: 'Portable SSD',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1577538926210-fc6cc624fde2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFBvcnRhYmxlJTIwU1NEfGVufDB8fDB8fHww',
        description: 'Fast and reliable portable storage solution.',
        category: 'Computer_Accessories',
        brand : 'Transcend',
        inStock : true,
        freeShipping: true
    }
];
