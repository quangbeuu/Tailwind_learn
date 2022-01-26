// Hover, focus, transform 


// Cú pháp: class="hover: hiệu ứng chuyển đối"

// VD: hover:bg-red
// (khi hơ chuột background sẽ chuyển sang màu đỏ)


// => Để thuộc tính mượt mà hơn thêm transition 

// vd: hover:bg-red transition-colors


// VD: chỉ màn hình lớn hơn 1024px thì mới hover đc 

// lg:hover:bg-red-400


// 2. Bây giờ có một thẻ div chứa button ta muốn hover vào thẻ 
// div đó button cg đổi màu 

// => Dùng group hover

// Xác định thằng div bao ngoài và thêm class="group"

// Thằng button bây giờ để class="group-hover:bg-red"


// 3. Focus 

// focus:border-[#ffa400] transition-all


// 4. Motion-safe: khi hover vào nó sẽ scale ra (to ra)

// VD: motion-safe:hover:scale-110