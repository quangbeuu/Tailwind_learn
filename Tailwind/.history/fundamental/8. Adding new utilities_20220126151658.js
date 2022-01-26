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


// 3. @apply

// - Nhiều ng ko thích viết quá nhiều class khi dùng
// tailwind

// => Ta có thể vào file css/tailwind.css
// Rồi viết như bến dưới

// .grid-layout{
//     @apply grid auto-cols-[90%] grid-flow-col overflow-x-auto scroll-snap-mandatory scroll-snap-always gap-x-5;
// }

// => Ra ngoài html t chỉ cần viết tên class này 
// là tất cả các class trong nó đều đc áp dụng

// => Tuy nhiên code như này chẳng khác j css bth cả 
// => Cái hay của nó là có thể viết responsive ở đây luôn
