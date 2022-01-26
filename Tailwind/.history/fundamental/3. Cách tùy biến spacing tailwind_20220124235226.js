// Cách tùy biến tailwind

// 1. Lên google tra spacing tailwind sẽ thấy 1 trang là 
// customizing Spacing

// 2. Nên dùng extend để customize (kế thừa các class của 
// tailwind)

// 3. Mở file tailwind.config.js, tại extend paste
// spacing: {
//     '13': '3.25rem',
//     '15': '3.75rem',
//     '128': '32rem',
//     '144': '36rem',
// }

// Những giá trị áp dụng spacing để tùy biến 
// là padding, margin, width, heigh, maxHeight, gap, insert,
// space, translate



// !!! Lưu ý khi sửa file tailwind.config.js ta phải build
// lại 

// Xóa file tailwind trong build
// => gõ npx tailwindcss -i css/tailwind.css -o build/tailwind.css --watch
// ko thì class tailwind sẽ k có tác dụng

// Gõ ctrl C
// Rồi npm run dev



// Cách 2: Just-in-Time (Jit mode)

// - Tại file tailwind.config.js thêm 1 trường là 
// mode: "jit"


// Cú pháp: text-[#ffa400]