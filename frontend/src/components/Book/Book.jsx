import React from 'react';
import './Book.css'

export default function Book() {
    const users= [
        {title:'Houses' , imgUrl: 'https://a0.muscache.com/im/pictures/ccef24a3-d378-48c7-ad1a-ee83d313fef5.jpg?im_q=highq&im_w=320' },
        {title:'Tiny houses' , imgUrl:'https://a0.muscache.com/im/pictures/8bbcea0d-05d5-4f26-953a-77cf80f1c5ee.jpg?im_q=highq&im_w=320'},
        {title:'Guesthouses' , imgUrl:'https://a0.muscache.com/im/pictures/1385145a-0d2d-43fa-b6c5-6c21944e723c.jpg?im_q=highq&im_w=320'},
        {title:'Bed ad Breakfasts', imgUrl:'https://a0.muscache.com/im/pictures/812d72a8-2c76-4dc5-ba51-239d59d1ff5a.jpg?im_q=highq&im_w=320'},
        {title:'Apartments', imgUrl:'https://a0.muscache.com/im/pictures/1976f418-6b52-4c24-a77f-f7ee2211e0ed.jpg?im_q=highq&im_w=320'},
        {title:'Botique Hotles', imgUrl:'https://a0.muscache.com/im/pictures/980c9ff9-3e32-4f93-9771-bd39b20b27f4.jpg?im_q=highq&im_w=320'},

      ]
    return (
        <div className='container' >
         <h1 className="join_p">From castles to condos, guests book it all</h1>
        <div class="row book" >
      
             {
               users.map((item)=>
                 <div class="col-sm">
                    <div class="card mb-3">
                        <img  class="card-img-top" src={item.imgUrl} alt="..."/>
                    </div>
                    <h6 class="card-title">{item.title}</h6>
                </div>
               )
             }
       </div>
       <hr/>
   </div>
    )
}
