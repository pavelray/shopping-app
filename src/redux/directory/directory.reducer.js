const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_1280.jpg',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/29/01/34/fashion-1866572_960_720.jpg',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619_1280.jpg',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://cdn.pixabay.com/photo/2017/08/10/01/21/girls-2616812_1280.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://cdn.pixabay.com/photo/2016/11/23/15/13/adult-1853436_1280.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }
    ]
}

export const directoryReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        default:
            return state;
    }
}