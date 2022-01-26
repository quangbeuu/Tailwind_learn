// Utilities

// - Khi ta muốn add các class ko có trong tailwind
// thì dùng đến utilities

// - Thêm vào file css/tailwind.css


//VD:
// @layer utilities{
//     .scroll-snap-mandatory{
//         scroll-snap-type: x mandatory;
//     }
// }


// => Dùng như trên là dùng trên tất cả màn hình 
// => Đôi khi ta muốn chỉ trên một màn hình nào đó thôi 

// => Ta sẽ dùng @variants responsive 

// @layer utilities{
//     @variants responsive{
//         .scroll-snap-mandatory{
//             scroll-snap-type: x mandatory;
//         }
    
//         .scroll-snap-always{
//             scroll-snap-stop: always;
//         }
    
//         .scroll-snap-start{
//             scroll-snap-align: :start;
//         }
//     }
// }