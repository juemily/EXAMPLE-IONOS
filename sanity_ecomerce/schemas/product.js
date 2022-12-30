export default {
    name:'product',
    title: 'Product',
    type: 'document',
    fields:[
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of:[{type: 'image'}],
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options:{
                source: 'name',
                maxLenght: 250,
            }
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string'
        },
        {
            name: 'image_external_url',
            title: 'Image_external_url',
            type: 'string'
        },
        {
            name: 'id_shop_original',
            title: 'Id_original',
            type: 'number'
        },
        {
            name: 'factory_reference',
            title: 'Factory_reference',
            type: 'string'
        },
    ],
}