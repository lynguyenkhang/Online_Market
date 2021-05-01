
import bookIcon from '../icons/book.svg'
import officeIcon from '../icons/office.svg'
import shirtIcon from '../icons/shirt.svg'
import foodIcon from '../icons/food.svg'
import bikeIcon from '../icons/bycicle.svg'
import medicalIcon from '../icons/medical.svg'
import deviceIcon from '../icons/devices.svg'
import guitarIcon from '../icons/guitar.svg'
import sofaIcon from '../icons/sofa.svg'
import lampIcon from '../icons/table-lamp.svg'

import clothesImg from '../images/clothes.jpg'
import bookImg from '../images/book.jpeg'
import foodImg from '../images/food.jpg'
import officeImg from '../images/stationery.png'
import deviceImg from '../images/devices.jpg'
import carImg from '../images/car.jpg'
import guitarImg from '../images/instruments.png'
import housewareImg from '../images/houseware.jpg'
import medicalImg from '../images/medical.jpg'
import sofaImg from '../images/sofa.jpg'

const categories = [
    { 
        category: 'Sách',
        image: bookImg,
        icon: bookIcon,
        UploadStep: {
            should: ["Chụp rõ độ dày, mặt trước, mặt sau bao gồm tựa sách, tên tác giả và nhà xuất bản"],
            avoid: [
                "Không chèn điện thoại /website/ logo",
                "Không dùng hình lấy từ Internet",
                "Không chụp nhiều loại sản phẩm trong bộ hình"
            ]
        },
        TitleStep: {
            example: [
                "Truyện Mắt Biếc - Nguyễn Nhật Ánh NXB Trẻ",
                "Bộ sách giáo khoa lớp 4 gồm 8 quyển"],
            should: [
                "Tựa sách, tên tác giả",
                "Nhà xuất bản, năm phát hành",
                "Thể loại",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                "Không chèn số điện thoại và giá"
            ]
        },
        DescribeStep: {
            should: [
                "Tựa sách, tên tác giả",
                "Thể loại",
                "Nhà xuất bản, năm xuất bản",
                "Tình trạng: ví dụ: còn mới, Không trầy xước, còn bảo hành 3 tháng"
            ]
        },
    },
    {
        category: 'Đồ dùng văn phòng',
        image: officeImg,
        icon: officeIcon,
        UploadStep: {
            should: [
                "Máy in: chụp mặt trước từ trên xuống, thấy nhãn hiệu, khổ giấy",
                "Bàn ghế: chụp mặt bàn, lưng ghế, chiều cao",
                "Khác: chụp nhãn hiệu, kích thước"
            ],
            avoid: [
                "Không chèn điện thoại /website/ logo",
                "Không dùng hình lấy từ Internet",
                "Không chụp nhiều loại sản phẩm trong bộ hình"
            ]
        },
        TitleStep: {
            example: [
                "Máy in màu giấy A4 Epson Style Photo R1800",
                "Ghế xoay văn phòng ngả lưng được",
            ],
            should: [
                "Máy in: tên dòng máy, khổ giấy, in màu/ trắng đen",
                "Bàn ghế: chất liệu, kích cỡ",
                "Khác: tên sản phẩm, chất liệu, kích cỡ",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                "Không chèn số điện thoại và giá"
            ]
        },
        DescribeStep: {
            should: [
                "Chất liệu",
                "Kích thước",
                "Nhãn hiệu",
            ]
        },    
    },
    {
        category: 'Thời trang, quần áo',
        image: clothesImg,
        icon: shirtIcon,
        UploadStep: {
            should: [
                "Chọn phông nền làm nổi màu quần áo (vd. áo trắng chụp phông tối)",
                "Chụp đủ độ dài, mặt trước, mặt sau",
            ],
            avoid: [
                "Không chèn điện thoại /website/ logo",
                "Không dùng hình lấy từ Internet",
                "Không chụp nhiều loại sản phẩm trong bộ hình"
            ]
        },
        TitleStep: {
            example: [
                "Quần lửng nữ màu kem size M",
            ],
            should: [
                "Loại quần áo",
                "Nam/nữ, màu, kích cỡ",
                "Nhãn hiệu, xuất xứ",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                "Không chèn số điện thoại và giá"
            ]
        },
        DescribeStep: {
            should: [
                "Loại quần áo",
                "Nam/nữ",
                "Kích cỡ S,M,L",
                "Nhãn hiệu",
                "Chất liệu, màu sắc",
            ]
        },      
    
    },
    {
        category: 'Đồ ăn, thực phẩm',
        image: foodImg,
        icon: foodIcon,
        UploadStep: {
            should: [
                "Chụp cận cảnh, rõ nét sản phẩm là món ăn, đồ ăn hay thực phẩm",
                "Hình ảnh cho thấy được thực đơn, bảng giá (đối với nhà hàng/quán ăn) hoặc bao bì, số lượng, số kg (đối với thực phẩm).",
                "Đăng nhiều hình (tối đa 12 hình) để người mua có thể tham khảo đầy đủ chi tiết thông tin sản phẩm."
            ],
            avoid: [
                "Không chèn điện thoại /website/ logo",
                "Không dùng hình lấy từ Internet",
            ]
        },
        TitleStep: {
            example: [
                `Tên sản phẩm/thực phẩm + thương hiệu" hoặc "tên món ăn/đồ ăn + tên nhà hàng/quán ăn/shop`,
                "Cá cơm 1 nắng Phú Quốc bán theo kg",
                "Kẹo hồng sâm Hàn Quốc gói 200g",
                "Bún bò Huế Thanh Hà (đối với nhà hàng/quán ăn)",
                "Hủ tiếu mực Cô Ba (đối với nhà hàng/quán ăn)",
            ],
            should: [
                "Sản phẩm, món ăn, đồ ăn, thực phẩm",
                "Nhãn hiệu, xuất xứ (đối với thực phẩm)",
                "Số lượng, số kg (đối với thực phẩm)",
                "Giao hàng (nếu có)",
                "Tên nhà hàng/quán ăn/shop (nếu có)"
            ],
            avoid: [
                'Không ghi "Cần bán"',
                "Không chèn số điện thoại và giá"
            ]
        },
        DescribeStep: {
            should: [
                "Loại sản phẩm là món ăn, đồ ăn hay thực phẩm, v.v",
                "Thương hiệu, nhãn hiệu, xuất xứ",
                "Hình thức sản phẩm bao gồm số lượng, số kg, v.v (đối với thực phẩm)",
                "Hạn sử dụng (đối với thực phẩm)",
                "Giấy chứng nhận (nếu có)",
                "Thông tin giờ mở cửa/đóng cửa (đối với nhà hàng/quán ăn/shop)"
            ]
        }, 
    },
    {
        category: 'Vật tư y tế',
        image: medicalImg,
        icon: medicalIcon,
        UploadStep: {
            should: [
                "Để dễ dàng tiếp cận người mua",
                "Chụp rõ ràng cả các mặt của sản phẩm vật tư y tế, phiếu kiểm định, đảm bảo chất lượng",
                "Công dụng của sản phẩm để người mua dễ dàng nhận biết hơn.",
            ],
            avoid: [
                "Không chèn link về website khác",
                "Không dùng hình ảnh không đúng thực tế",
                "Không chụp một lúc nhiều sản phẩm trong một bài đăng"
            ]
        },
        TitleStep: {
            example: [
                "Khẩu trang y tế 4 lớp Healthvie",
                "Gel Rửa Tay Khô Lifebuoy Bảo Vệ Vượt Trội 10 235ml", 
            ],
            should: [
                "Tên sản phẩm, công ty/hãng sản xuất",
                "Model sản phẩm",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                'Không thêm số điện thoại',
                'Không thêm đặc tính kỹ thuật',
            ]
        },
        DescribeStep: {
            should: [
                "Tên sản phẩm gốc, mã sản phẩm",
                "Phân loại sản phẩm",
                "Quy cách đóng gói, thời hạn sử dụn",
                "Hãng sản xuất, năm sản xuấ",
                "Tình trạng (còn hàng hay hết hàng)",
            ]
        },  

    },
    {
        category: 'Thiết bị số',
        image: deviceImg,
        icon: deviceIcon,
        UploadStep: {
            should: [
                "Chụp rõ ràng cả 2 mặt thiết bị bao gồm mặt trước và mặt sau, phiếu bảo hành, và thời gian đã sử dụng nếu là thiết bị cũ",
            ],
            avoid: [
                "Không chèn link về website khác",
                "Không dùng hình ảnh không đúng thực tế",
                "Không chụp một lúc nhiều sản phẩm trong một bài đăng"
            ]
        },
        TitleStep: {
            example: [
                "Iphone 11 64GB mới chính hãng",
                "Laptop Asus Vivobook đời 2020", 
            ],
            should: [
                "Tên sản phẩm, công ty/hãng sản xuất",
                "Model sản phẩm, năm sản xuất",
                "Dung lượng, hiệu năng,…",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                'Không thêm số điện thoại và giá',
            ]
        },
        DescribeStep: {
            should: [
                "Tên sản phẩm gốc",
                "Hãng sản xuất, năm sản xuất",
                "Tình trạng ( Mới 100% hoặc đã qua sử dụng, còn bảo hành)",
            ]
        },  

    },
    { 
        category: 'Xe cộ',
        image: carImg,
        icon: bikeIcon,
        UploadStep: {
            should: [
                "Khổ ngang để hình đẹp hơn",
                "Đầu xe, đuôi xe, ngang hông xe",
                "Động cơ, sườn, bánh xe",
                "Đặc điểm lưu ý: vết trầy, xước (nếu có)",
            ],
            avoid: [
                "Không chèn điện thoại /website/ logo",
                "Không dùng hình lấy từ Internet",
            ]
        },
        TitleStep: {
            example: [
                "Honda AirBlade 2016 xanh đen, đã đi 8.000km",
            ],
            should: [
                "Hãng xe: Honda, Yamaha,...",
                "Model xe: AirBlade, Exciter",
                "Năm sản xuất, đời xe",
                "Số km đã đi",
                "Màu xe",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                "Không chèn số điện thoại và giá"
            ]
        },
        DescribeStep: {
            should: [
                "Tình trạng chiếc xe",
                "Thời gian sử dụng xe",
                "Bảo trì xe: bao lâu/ lần, tại hãng hay không",
                "Tình trạng giấy tờ",
            ]
        },  
    },
    {
        category: 'Nhạc cụ',
        image: guitarImg,
        icon: guitarIcon,
        UploadStep: {
            should: [
                "Chụp rõ ràng cả 2 mặt thiết bị bao gồm mặt trước và mặt sau, phiếu bảo hành, và thời gian đã sử dụng nếu là thiết bị cũ",
                "Để dễ dàng tiếp cận người mua",
            ],
            avoid: [
                "Không chèn link về website khác",
                "Không dùng hình ảnh không đúng thực tế",
                "Không chụp một lúc nhiều sản phẩm trong một bài đăng"
            ]
        },
        TitleStep: {
            example: [
                "Đàn guitar KAPOK D-118AC",
                "Đàn Kalimba Mahogany - KALIMBA-W-17T",
            ],
            should: [
                "Tên sản phẩm, công ty/hãng sản xuất",
                "Model sản phẩm",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                'Không thêm số điện thoại và giá',
            ]
        },
        DescribeStep: {
            should: [
                "Tên sản phẩm gốc, mã sản phẩm",
                "Hãng sản xuất, năm sản xuất",
                "Tình trạng ( Mới 100% hoặc đã qua sử dụng, còn bảo hành)",
            ]
        },  
    },
    {
        category: 'Đồ gia dụng',
        image: housewareImg,
        icon: lampIcon,
        UploadStep: {
            should: [
                "Để dễ dàng tiếp cận người mua",
                "Chụp rõ ràng cả các mặt của sản phẩm vật tư y tế, phiếu kiểm định, đảm bảo chất lượng",
                "Công dụng của sản phẩm để người mua dễ dàng nhận biết hơn.",
            ],
            avoid: [
                "Không chèn link về website khác",
                "Không dùng hình ảnh không đúng thực tế",
                "Không chụp một lúc nhiều sản phẩm trong một bài đăng"
            ]
        },
        TitleStep: {
            example: [
                "Giá Treo Đồ Gỗ Thông, Kệ Gỗ Treo Quần Áo Chữ A 2 Tầng Decor Hàn Quốc",
                "Bàn làm việc, bàn học thiết kế kiểu Hàn S-Table, T-Table khung thép",
            ],
            should: [
                "Tên sản phẩm, công ty/hãng sản xuất",
                "Model sản phẩm",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                'Không thêm số điện thoại và giá',
                "Không thêm đặc tính kỹ thuật",
            ]
        },
        DescribeStep: {
            should: [
                "Tên sản phẩm gốc, mã sản phẩm",
                "Phân loại sản phẩm",
                "Quy cách đóng gói, thời hạn sử dụng",
                "Hãng sản xuất, năm sản xuất",
                "Tình trạng (còn hàng hay hết hàng)",
            ]
        },  
    },
    {
        category: 'Đồ nội thất',
        image: sofaImg,
        icon: sofaIcon,
        UploadStep: {
            should: [
                "Chụp rõ ràng cả các bên của sản phẩm",
            ],
            avoid: [
                "Không chèn link về website khác",
                "Không dùng hình ảnh không đúng thực tế",
                "Không chụp một lúc nhiều sản phẩm trong một bài đăng"
            ]
        },
        TitleStep: {
            example: [
                "Bàn trà tròn gỗ sồi",
                "Gương soi toàn thân khung gỗ tự nhiên",
            ],
            should: [
                "Tên sản phẩm, nhà sản xuất",
                "Chất liệu, đặc tính sản phẩm ",
                "Tính năng, công dụng sản phẩm",
            ],
            avoid: [
                'Không ghi "Cần bán"',
                'Không thêm số điện thoại và giá',
            ]
        },
        DescribeStep: {
            should: [
                "Tên sản phẩm",
                "Chất liệu, đặc tính sản phẩm (gỗ, nhựa tổng hợp, chống xước, …)",
                "Tính năng, công dụng sản phẩm ",
                "Cấu tạo chi tiết sản phẩm",
                "Tình trạng (mới/cũ, đã/chưa qua sử dụng, thời gian bảo hành nếu có)",
                "Không gian, vị trí đặt sản phẩm (phòng ngủ, phòng khách, …)",
            ]
        },  
    },
]



export default categories