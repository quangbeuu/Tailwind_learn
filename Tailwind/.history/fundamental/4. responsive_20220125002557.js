// Responsive

// - Tailwind phát triển theo mobile first

// - Thằng Live anywhere fontsize là 36px ta muốn trên 
// mobile là 18px thôi


// * Các giá trị màn hình responsive trong tailwind

// - sm: 640px
// - md: 768px 
// - ld: 1024px
// - xl: 1280px

// cách viết responsive
// (đầu tiên viết giá trị của moblie first trước rồi viết giá 
// trị của màn hình lớn hơn)

// Vd: <div class="text-center sm:text-center"</div>

// => Tuy nhiên đôi khi thiết kế ko phải lúc nào màn hình 
// cũng như trên, có thể là 480px, có thể là 375px 

// => Customize

// vào file tailwind.config.js 

// module.exports = {
//     theme: {
//       screens: {
//         'tablet': '640px',
//         // => @media (min-width: 640px) { ... }
  
//         'laptop': '1024px',
//         // => @media (min-width: 1024px) { ... }
  
//         'desktop': '1280px',
//         // => @media (min-width: 1280px) { ... }
//       },
//     }
//   }