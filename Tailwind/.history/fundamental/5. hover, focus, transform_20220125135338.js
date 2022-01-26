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


// 5. Motion-reduce: cg scale to ra khi hover


// 6. Disabled:
// - Thằng nào có disabled thì sẽ dc áp dụng

// vd: disabled:opacity-50
// (thẻ button hoặc input phải có thuộc tính disabled)


// 7. Checked: 

// - Thuộc tính appearence-none: xóa đi các mặc định của browser

// 8. First-child, last-child

// first:... (thằng đầu tiên đc áp dụng)
// last:... (thằng cuối cùng đc áp dụng)

// odd:... (các thằng số chẵn dc áp dụng)