import { TimelineItem, LearningItem, PillarItem, LiveNotification, SalesProofItem, PharmacyHistoryItem, HealthTechCourseItem, OldBusinessPhotoItem, MarketingCampaignItem, SapaTripItem, TravelTripItem, AffiliateAmHapyData } from '../types';

export const CONTACT_INFO = {
  name: 'DƯỢC SĨ DIỄM PHÚC',
  title: 'Dược sĩ giỏi công nghệ – Đồng hành xây dựng nhà thuốc hiện đại',
  phone: '0985 457179',
  phoneDisplay: '0985 457179',
  telUrl: 'tel:0985457179',
  zaloUrl: 'https://zalo.me/0985457179',
  zaloGroupUrl: 'https://zalo.me/g/ve9foxk4sdmb5qmuy9cq',
  pharmacy: 'Nhà Thuốc Minh Khôi',
  communities: 'Cộng đồng Y Dược Online CaniCoach – AmHapy',
  shareMessage: 'Khám phá câu chuyện chuyển đổi số ấn tượng của Dược sĩ Diễm Phúc: Từ dược sĩ truyền thống đến làm chủ công nghệ & xây dựng cộng đồng nhà thuốc hiện đại. Tham gia nhóm trao đổi & nhận quà tặng miễn phí: https://zalo.me/g/ve9foxk4sdmb5qmuy9cq'
};

export const IMAGES = {
  hero: 'https://i.postimg.cc/Jh34TsCx/Chat-GPT-Image-08-42-24-17-thg-9-2026-(1).png',
  portraitAlt: 'https://i.postimg.cc/Jh34TsCx/Chat-GPT-Image-08-42-24-17-thg-9-2026-(1).png',
  journey: 'https://i.postimg.cc/XvK72r6g/Chat-GPT-Image-08-42-24-17-thg-9-2026-(2).png',
  learning: 'https://i.postimg.cc/zfwXdyYj/Chat-GPT-Image-08-42-24-17-thg-9-2026-(3).png',
  transformation: 'https://i.postimg.cc/25d8H1N2/Chat-GPT-Image-08-42-25-17-thg-9-2026-(4).png',
  community: 'https://i.postimg.cc/Jh34TsC5/Chat-GPT-Image-08-42-25-17-thg-9-2026-(5).png',
  yhctClass: 'https://i.postimg.cc/mDZvXzjq/Lop-YHCT.jpg',
  brandingCoaching1: 'https://i.postimg.cc/gJBTgMnv/Huong-dan-cac-DS-trang-tri-lai-NT-va-dinh-vi-thuong-hieu.jpg',
  brandingCoaching2: 'https://i.postimg.cc/k4hpTjBQ/huong-dan-trang-tri-NT-dinh-vi-thuong-hieu.jpg',
  k02XoaMuAi1: 'https://i.postimg.cc/fTP7LJrP/k02-xoa-mu-AI-1.jpg',
  sapaTrip: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
};

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2007',
    title: 'Khởi đầu vững chắc tại Cao đẳng Y tế Bình Dương',
    description: 'Bắt đầu học Dược tại Cao đẳng Y tế Bình Dương và tốt nghiệp loại Giỏi, đặt nền móng chuyên môn sâu sắc với niềm đam mê chữa lành.',
    details: ['Tốt nghiệp loại Giỏi chuyên ngành Dược', 'Tích lũy kiến thức dược lý và y đức']
  },
  {
    year: '2012',
    title: 'Nỗ lực bứt phá – 24 điểm Đại học Y Dược TP.HCM',
    description: 'Sau một năm kiên trì dừng công việc để toàn tâm ôn thi, tôi đạt 24 điểm và trúng tuyển hệ A chính quy ngành Dược học – Đại học Y Dược TP.HCM.',
    details: ['Ý chí kiên định không ngại bắt đầu lại', 'Trúng tuyển ngôi trường đào tạo y dược hàng đầu']
  },
  {
    year: '2016',
    title: 'Tốt nghiệp Đại học Y Dược TP.HCM & rèn luyện đa vị trí',
    description: 'Tốt nghiệp Đại học Y Dược TP.HCM, sau đó trải qua nhiều vị trí cốt lõi trong ngành dược: thủ kho, kiểm tra chất lượng (QC), hồ sơ đăng ký thuốc, xây dựng tiêu chuẩn thành phẩm, nghiên cứu và quản lý chuyên môn.',
    details: ['Thủ kho & Quản lý chất lượng kiểm nghiệm', 'Hồ sơ đăng ký thuốc & Nghiên cứu tiêu chuẩn thành phẩm', 'Quản lý chuyên môn dược phẩm chuyên nghiệp']
  },
  {
    year: '2019',
    title: 'Thành lập Nhà Thuốc Minh Khôi & phân phối 2.000+ sản phẩm',
    description: 'Cùng gia đình mở Nhà Thuốc Minh Khôi. Song song với nhà thuốc, tôi tham gia phân phối sản phẩm và từng trực tiếp quản lý kho hơn 2.000 sản phẩm với hệ thống đại lý rộng khắp.',
    details: ['Xây dựng thương hiệu Nhà Thuốc Minh Khôi', 'Vận hành kho hàng quy mô trên 2.000 mặt hàng', 'Phát triển mạng lưới đối tác và đại lý']
  }
];

export const LEARNING_ITEMS: LearningItem[] = [
  { id: 'canva', name: 'Canva', icon: '🎨', description: 'Thiết kế banner, ấn phẩm nhà thuốc chuẩn nhận diện', category: 'Design' },
  { id: 'chatgpt', name: 'ChatGPT & AI', icon: '🤖', description: 'Sáng tạo nội dung tư vấn, kịch bản giao tiếp tự động', category: 'AI' },
  { id: 'video_ai', name: 'Video AI', icon: '🎥', description: 'Tạo video truyền thông ngắn thu hút khách hàng', category: 'AI' },
  { id: 'chatbot', name: 'Chatbot', icon: '💬', description: 'Tự động phản hồi tin nhắn 24/7 không bỏ sót khách', category: 'System' },
  { id: 'fanpage', name: 'Fanpage', icon: '📘', description: 'Xây dựng trang cộng đồng tương tác cao tại địa phương', category: 'Marketing' },
  { id: 'zalo_oa', name: 'Zalo OA', icon: '🟦', description: 'Kênh chăm sóc khách hàng thân thiết, gửi thông báo tiện lợi', category: 'System' },
  { id: 'minigame', name: 'Minigame', icon: '🎯', description: 'Chiến dịch tri ân, tặng quà kích hoạt tương tác', category: 'Marketing' },
  { id: 'marketing', name: 'Marketing', icon: '📈', description: 'Chiến lược thu hút khách hàng đến nhà thuốc bền vững', category: 'Marketing' },
  { id: 'branding', name: 'Personal Branding', icon: '⭐', description: 'Định vị dược sĩ uy tín, tận tâm trong lòng khách hàng', category: 'Marketing' },
  { id: 'automation', name: 'Automation', icon: '⚙️', description: 'Tự động hóa quy trình quản lý và chăm sóc khách hàng', category: 'System' },
  { id: 'crm', name: 'Hệ thống CSKH', icon: '❤️', description: 'Lưu trữ hồ sơ, nhắc lịch uống thuốc và tái khám', category: 'System' },
];

export const PILLARS: PillarItem[] = [
  {
    number: '01',
    title: 'GIỎI CHUYÊN MÔN',
    description: 'Lấy kiến thức dược vững chắc và lợi ích sức khỏe lâu dài của khách hàng làm gốc rễ nền tảng cho mọi quyết định.',
    highlight: 'Gốc rễ y đức & chuẩn mực y khoa'
  },
  {
    number: '02',
    title: 'BIẾT CÔNG NGHỆ',
    description: 'Ứng dụng AI, phân tích dữ liệu và tự động hóa để tối ưu hóa quy trình làm việc, giải phóng thời gian và gia tăng hiệu suất.',
    highlight: 'AI, Chatbot & Tự động hóa'
  },
  {
    number: '03',
    title: 'CÓ TƯ DUY KINH DOANH',
    description: 'Không chỉ dừng lại ở việc bán lẻ từng hộp thuốc mà biết xây dựng hệ thống quản trị, tư duy giá trị trọn đời và vận hành bài bản.',
    highlight: 'Hệ thống vận hành bền vững'
  },
  {
    number: '04',
    title: 'CÓ THƯƠNG HIỆU CÁ NHÂN',
    description: 'Xây dựng uy tín dựa trên kiến thức sâu sắc, trải nghiệm thực chiến và giá trị chân thực lan tỏa đến cộng đồng.',
    highlight: 'Niềm tin & Uy tín cá nhân'
  },
  {
    number: '05',
    title: 'CÓ CỘNG ĐỒNG',
    description: 'Không còn đơn độc loay hoay một mình. Cùng học tập, chia sẻ kinh nghiệm và hỗ trợ nhau vững vàng tiến bước.',
    highlight: 'Đồng hành cùng phát triển'
  }
];

export const SAMPLE_NOTIFICATIONS: LiveNotification[] = [
  { id: '1', name: 'DS. Minh Trang', location: 'Bình Dương', action: 'vừa tham gia Nhóm Zalo Dược Sĩ Công Nghệ', timeAgo: 'Vừa xong' },
  { id: '2', name: 'DS. Quốc Huy', location: 'Hà Nội', action: 'vừa nhận Bộ tài liệu AI Nhà Thuốc 2026', timeAgo: '1 phút trước' },
  { id: '3', name: 'DS. Thúy Hằng', location: 'TP. Hồ Chí Minh', action: 'vừa kết nối Zalo cùng DS. Diễm Phúc', timeAgo: '2 phút trước' },
  { id: '4', name: 'DS. Ngọc Bích', location: 'Đà Nẵng', action: 'vừa tham gia cộng đồng Dược Sĩ Thời Đại Mới', timeAgo: '4 phút trước' },
  { id: '5', name: 'DS. Văn Hùng', location: 'Đồng Nai', action: 'vừa nhận cẩm nang Tự động hóa Zalo OA', timeAgo: '6 phút trước' },
  { id: '6', name: 'DS. Phương Thảo', location: 'Cần Thơ', action: 'vừa đăng ký tham gia giao lưu trực tuyến', timeAgo: '8 phút trước' },
  { id: '7', name: 'DS. Thanh Mai', location: 'Hải Phòng', action: 'vừa tham gia Nhóm Zalo học hỏi kinh nghiệm', timeAgo: '11 phút trước' },
];

export const GIFT_LIST = [
  {
    title: 'Bộ Ebook "Ứng dụng ChatGPT & AI Sáng tạo Nội dung Nhà thuốc"',
    desc: 'Hơn 50 câu lệnh mẫu (prompts) chuẩn ngành dược để tạo bài viết tư vấn, video ngắn thu hút',
    tag: 'Đặc quyền miễn phí'
  },
  {
    title: 'Template Canva nhận diện thương hiệu nhà thuốc chuẩn y tế',
    desc: 'Bộ mẫu thiết kế bảng giá, thông báo sức khỏe, banner chương trình tri ân dễ chỉnh sửa',
    tag: 'Tải dùng ngay'
  },
  {
    title: 'Quy trình 5 bước xây dựng Zalo OA chăm sóc khách hàng tự động',
    desc: 'Bí quyết gắn kết khách hàng thân thiết, gửi tin nhắc uống thuốc và chúc mừng sinh nhật tự động',
    tag: 'Ứng dụng thực tế'
  },
  {
    title: 'Vé tham gia buổi Zoom giao lưu định kỳ cùng DS. Diễm Phúc',
    desc: 'Giải đáp trực tiếp các khó khăn trong chuyển đổi số và quản lý nhà thuốc hiện đại',
    tag: 'Giao lưu cộng đồng'
  }
];

export const SALES_PROOF_DATA: SalesProofItem[] = [
  {
    id: 'proof-1',
    imageUrl: 'https://i.postimg.cc/L5gBqJ5m/1789388985472-812162723513100646-g6210195734194609676-1bdc62fbc9b50cdfcd2822ab61cfe664.jpg',
    title: 'Thực tế tại quầy: Khách hàng chốt trọn gói combo liệu trình & thanh toán tức thì',
    description: 'Khách hàng vui vẻ quét mã QR và thanh toán tiền mặt trọn gói combo liệu trình tại quầy thuốc Minh Khôi sau khi được tư vấn kịch bản sức khỏe chuyên sâu.',
    tag: 'Bán tại quầy Minh Khôi',
    badge: 'Combo Liệu Trình'
  },
  {
    id: 'proof-2',
    imageUrl: 'https://i.postimg.cc/Z0kP6JB2/1789388985474-812162723513100646-g6210195734194609676-b6fc3ce8e4663cd0b87529fbb7e76067.jpg',
    title: 'Tư vấn phác đồ combo liệu trình AmHapy chuyên sâu',
    description: 'Chuyển đổi hoàn toàn từ tư vấn vài liều lẻ sang kê trọn gói combo giải pháp AmHapy kết hợp sổ theo dõi sức khỏe và hướng dẫn phục hồi tận gốc.',
    tag: 'Liệu trình toàn diện',
    badge: 'Y Dược Online AmHapy'
  },
  {
    id: 'proof-3',
    imageUrl: 'https://i.postimg.cc/WtRm0sFK/1789388985476-812162723513100646-g6210195734194609676-38ae9cf2965b4229a4789766ea818554.jpg',
    title: 'Áp dụng công cụ & chiến lược: Tỷ lệ chốt đơn combo tăng vượt bậc',
    description: 'Hóa đơn và tiền hàng combo được thanh toán nhanh chóng ngay tại mặt bàn tư vấn. Không còn tình trạng khách mặc cả hay đắn đo từng đồng lẻ.',
    tag: 'Hiệu quả chiến lược',
    badge: 'Chốt Combo Dễ Dàng'
  },
  {
    id: 'proof-4',
    imageUrl: 'https://i.postimg.cc/sxG9BMxy/1789388985478-812162723513100646-g6210195734194609676-053897f15af34a5f4a737ea047100011.jpg',
    title: 'Các bộ giải pháp combo AmHapy sẵn sàng tại quầy tư vấn',
    description: 'Trưng bày khoa học các dòng combo: cơ xương khớp, tuần hoàn não, tiêu hóa, nội tiết... giúp khách hàng dễ dàng nhìn nhận giá trị của một liệu trình đủ ngày đủ lượng.',
    tag: 'Giải pháp AmHapy',
    badge: 'Sản Phẩm Chuẩn Hóa'
  },
  {
    id: 'proof-5',
    imageUrl: 'https://i.postimg.cc/6TsVCB4J/1789388985482-812162723513100646-g6210195734194609676-4b855b038a6aba71b4eb952ed562c2e0.jpg',
    title: 'Kết hợp máy đo 45 chỉ số & kịch bản tư vấn AmHapy',
    description: 'Người bệnh nhìn thấy tận mắt chỉ số cơ thể qua máy móc, kết hợp kịch bản giải thích khoa học từ Y Dược Online giúp tăng niềm tin tuyệt đối vào liệu trình.',
    tag: 'Công cụ đo lường',
    badge: 'Khoa Học & Thuyết Phục'
  },
  {
    id: 'proof-6',
    imageUrl: 'https://i.postimg.cc/yWqh073C/1789388985490-812162723513100646-g6210195734194609676-bd1ca0f2f03a5587ad89292ef72c9269.jpg',
    title: 'Khách hàng lớn tuổi gắn bó, tuân thủ đúng phác đồ điều trị',
    description: 'Bệnh nhân đến quầy được hướng dẫn uống đúng giờ, đủ liều. Khách mừng rỡ khi triệu chứng thuyên giảm rõ rệt và tiếp tục quay lại lấy thêm combo định kỳ.',
    tag: 'Khách hàng tại quầy',
    badge: 'Hiệu Quả Lâm Sàng'
  },
  {
    id: 'proof-7',
    imageUrl: 'https://i.postimg.cc/kDrNW7Rd/1789388985492-812162723513100646-g6210195734194609676-fde720ecf71f060824534ddaf2ed9e37.jpg',
    title: 'Đóng gói gửi combo liệu trình đến tận tay khách hàng',
    description: 'Hàng hóa combo đóng gói chuyên nghiệp kèm thư dặn dò chi tiết. Mở rộng phục vụ không chỉ khách quanh quầy mà cả khách hàng đặt từ xa.',
    tag: 'Giao hàng liệu trình',
    badge: 'Mở Rộng Đa Kênh'
  },
  {
    id: 'proof-8',
    imageUrl: 'https://i.postimg.cc/Z0kP6JvT/1789388985494-812162723513100646-g6210195734194609676-b39943978baf8ba481da6605ad636d76.jpg',
    title: 'Trở thành Dược sĩ gia đình – Khách hàng trao trọn niềm tin',
    description: 'Mẹ và bé vui vẻ nhận giải pháp dinh dưỡng và chăm sóc sức khỏe. Khách hàng xem quầy thuốc Minh Khôi như người bạn thân thiết bảo vệ sức khỏe cả gia đình.',
    tag: 'Dược sĩ gia đình',
    badge: 'Tin Cậy Tuyệt Đối'
  },
  {
    id: 'proof-9',
    imageUrl: 'https://i.postimg.cc/Jtw3jRH7/1789388985496-812162723513100646-g6210195734194609676-686087fb8217cdaff99247a9c407f6c2.jpg',
    title: 'Bứt phá doanh số bán combo – Giải phóng áp lực bán lẻ',
    description: 'Khách hàng đón nhận với tâm thế vui vẻ và biết ơn. Minh chứng sống động cho việc đồng hành cùng Y Dược Online AmHapy giúp nhà thuốc bứt phá mạnh mẽ.',
    tag: 'Tăng trưởng thực tế',
    badge: 'Hiệu Quả Thực Chứng'
  }
];

export const PHARMACY_HISTORY_DATA: PharmacyHistoryItem[] = [
  {
    id: 'history-2019-1',
    year: '2019',
    imageUrl: 'https://i.postimg.cc/vHsM08SM/Nam-2019.jpg',
    title: 'Khởi đầu Nhà thuốc Minh Khôi',
    stage: 'Năm 2019 • Ngày đầu thành lập',
    description: 'Những viên gạch đầu tiên tại Nhà Thuốc Minh Khôi. Bắt đầu từ đam mê dược học thuần túy, tự tay sắp xếp từng tủ kệ, kiểm tra từng lô thuốc với tiêu chí y đức và chất lượng hàng đầu.',
    highlights: ['Thành lập Nhà Thuốc Minh Khôi', 'Tự tay sắp đặt quầy kệ & chuẩn GPP']
  },
  {
    id: 'history-2019-2',
    year: '2019',
    imageUrl: 'https://i.postimg.cc/YqHkd2yp/Nam-2019.jpg',
    title: 'Hoàn thiện cơ sở vật chất & quầy thuốc ban đầu',
    stage: 'Năm 2019 • Định hình cơ sở',
    description: 'Không gian làm việc và bảo quản thuốc được chăm chút tỉ mỉ từng chi tiết. Nỗ lực xây dựng niềm tin với bà con khu vực qua phong cách tư vấn tận tình, trung thực và trách nhiệm.',
    highlights: ['Trực tiếp tư vấn từng bệnh nhân', 'Gây dựng uy tín và tình cảm với bà con']
  },
  {
    id: 'history-2023',
    year: '2023',
    imageUrl: 'https://i.postimg.cc/BQ0smZwJ/Nam-2023.jpg',
    title: 'Mở rộng quy mô quầy kệ & hơn 2.000 sản phẩm',
    stage: 'Năm 2023 • Mở rộng & Phát triển',
    description: 'Sau 4 năm nỗ lực, quy mô kho hàng và quầy kệ tăng lên vượt bậc với hơn 2.000 sản phẩm đa dạng. Giai đoạn này cũng đặt ra bài toán lớn về quản lý tồn kho, dòng tiền và áp lực cạnh tranh thị trường.',
    highlights: ['Kho hàng phong phú 2.000+ mã hàng', 'Gia tăng lượng khách hàng & áp lực quản trị']
  },
  {
    id: 'history-2025',
    year: '2025',
    imageUrl: 'https://i.postimg.cc/X7b3sND7/Nam-2025.jpg',
    title: 'Bứt phá diện mạo hiện đại & Chuẩn hóa công nghệ',
    stage: 'Năm 2025 • Chuyển đổi số & Hiện đại hóa',
    description: 'Nhà Thuốc Minh Khôi hôm nay: Không gian khang trang, chuyên nghiệp, ứng dụng công nghệ quản trị thông minh, tư vấn giải pháp sức khỏe chủ động và kết nối hệ thống đa kênh cùng CaniCoach AmHapy.',
    highlights: ['Diện mạo hiện đại, chuẩn hóa cao cấp', 'Ứng dụng AI, tự động hóa & chăm sóc chủ động']
  }
];

export const HEALTH_TECH_COURSES_DATA: HealthTechCourseItem[] = [
  {
    id: 'course-yhct-amhapy',
    title: 'Lớp Đào Tạo Chuyên Sâu Y Học Cổ Truyền Cùng Đội Ngũ Y Dược AmHapy',
    courseName: 'Khóa học Y Học Cổ Truyền',
    location: 'Đội ngũ Y Dược AmHapy',
    year: '2025',
    imageUrl: 'https://i.postimg.cc/mDZvXzjq/Lop-YHCT.jpg',
    device: 'Y Học Cổ Truyền & Dưỡng Sinh',
    description: 'Trực tiếp tham gia đào tạo chuyên sâu về Y học cổ truyền cùng các chuyên gia, dược sĩ trong đội ngũ Y Dược AmHapy. Kết hợp tinh hoa Đông Y, kinh lạc và thảo dược tự nhiên với phương pháp chăm sóc sức khỏe hiện đại để tư vấn giải pháp phục hồi tận gốc rễ.',
    badge: 'AmHapy • YHCT',
    skills: ['Ứng dụng tinh hoa Y học cổ truyền', 'Kết hợp Đông - Tây Y trong chăm sóc sức khỏe', 'Đồng hành cùng đội ngũ chuyên môn AmHapy']
  },
  {
    id: 'course-45-saigon',
    title: 'Khóa Đào Tạo Máy Đo 45 Chỉ Số Sinh Học tại Sài Gòn',
    courseName: 'Khóa học Máy Đo 45 Chỉ Số',
    location: 'Sài Gòn (TP.HCM)',
    year: '2025',
    imageUrl: 'https://i.postimg.cc/1592g8jm/45-chi-so-tai-sai-gon.jpg',
    device: 'Máy Phân Tích Lượng Tử 45 Chỉ Số',
    description: 'Thực hành đo lường và tham vấn sức khỏe chủ động tại Sài Gòn. Tích hợp kết quả đo lường khách quan vào phác đồ chăm sóc sức khỏe chủ động, giúp khách hàng thấu hiểu thể trạng của mình một cách khoa học.',
    badge: 'Sài Gòn • 2025',
    skills: ['Thực hành kiểm tra thực tế', 'Chuẩn hóa quy trình đo lường không xâm lấn', 'Tăng tỷ lệ tin tưởng và thuyết phục khách hàng']
  },
  {
    id: 'course-capillary-tech',
    title: 'Khóa Huấn Luyện Kỹ Thuật Soi Vi Tuần Hoàn Mạch Máu',
    courseName: 'Soi Vi Tuần Hoàn Mạch Máu',
    location: 'Thực hành chuyên sâu',
    year: '2025',
    imageUrl: 'https://i.postimg.cc/fTwp3VrM/soi-vi-mach.jpg',
    device: 'Kính Hiển Vi Soi Vi Tuần Hoàn Mao Mạch',
    description: 'Làm chủ kỹ thuật soi mao mạch đầu ngón tay không xâm lấn với độ phóng đại hàng trăm lần. Trực tiếp quan sát hình thái mao mạch, lưu lượng và tốc độ dòng chảy tế bào máu để cảnh báo nguy cơ tắc nghẽn, xơ vữa mạch máu.',
    badge: 'Chuyên sâu • 2025',
    skills: ['Quan sát mao mạch trực quan 100%', 'Đánh giá nguy cơ vi tuần hoàn & tắc nghẽn', 'Giúp khách hàng nhìn tận mắt dòng máu của mình']
  },
  {
    id: 'course-k04-45-soi-online',
    title: 'Khóa Học K04: Đo 45 Chỉ Số Sinh Học & Soi Vi Mạch Online qua Zoom',
    courseName: 'Khóa K04 (45 Chỉ Số & Soi Vi Mạch)',
    location: 'Online qua Zoom',
    year: '2025',
    imageUrl: 'https://i.postimg.cc/GtHZRWZN/hoc-45-chi-so-qua-zoom.jpg',
    device: 'Máy Đo 45 Chỉ Số & Máy Soi Vi Mạch',
    description: 'Khóa đào tạo chuyên sâu K04 trực tuyến qua Zoom cùng đội ngũ Y Dược Online AmHapy. Trang bị đầy đủ kiến thức phân tích 45 chỉ số sinh học lượng tử và kỹ thuật nhận định hình thái vi mạch máu mao mạch để thiết lập phác đồ chăm sóc chuẩn xác.',
    badge: 'Khóa K04 • Zoom Online',
    skills: ['Đào tạo trực tuyến K04 qua Zoom', 'Làm chủ phân tích 45 chỉ số & vi mạch', 'Tư vấn phác đồ chăm sóc sức khỏe chủ động']
  },
  {
    id: 'course-k02-xoa-mu-ai-1',
    title: 'Khóa Học K02: Xóa Mù AI & Ứng Dụng Công Nghệ Cùng Các Dược Sĩ',
    courseName: 'Khóa K02 (Xóa Mù AI Cùng Dược Sĩ)',
    location: 'Online qua Zoom',
    year: '2025',
    imageUrl: 'https://i.postimg.cc/fTP7LJrP/k02-xoa-mu-AI-1.jpg',
    device: 'Trí Tuệ Nhân Tạo AI & Chuyển Đổi Số',
    description: 'Dược sĩ Diễm Phúc trực tiếp tham gia cùng các đồng nghiệp dược sĩ trên khắp cả nước trong khóa học K02 "Xóa mù AI". Làm chủ việc ứng dụng AI vào xây dựng phác đồ tư vấn, kịch bản giao tiếp bệnh nhân và sáng tạo nội dung truyền thông y tế.',
    badge: 'Khóa K02 • Học Cùng Dược Sĩ',
    skills: ['Tham gia học cùng các dược sĩ toàn quốc', 'Làm chủ công cụ AI thực chiến cho nhà thuốc', 'Tối ưu kịch bản tư vấn và chăm sóc khách hàng']
  }
];

export const OLD_BUSINESS_DATA: OldBusinessPhotoItem[] = [
  {
    id: 'old-biz-1',
    imageUrl: 'https://i.postimg.cc/85XPGxtV/121143867-1739875749498273-1223105118066519573-n.jpg',
    title: 'Kho hàng ngập kín các thùng carton lớn nhỏ',
    category: 'kho-hang',
    tag: 'Ôm 1 kho hàng',
    badge: 'Trước 2025 • Tồn kho lớn',
    description: 'Hàng hóa nhập số lượng lớn chất kín không gian nhà kho. Áp lực chôn vốn và quản lý hạn dùng đè nặng từng ngày.'
  },
  {
    id: 'old-biz-2',
    imageUrl: 'https://i.postimg.cc/0QX2vhcs/121230533-1739875799498268-2647170557664535539-n-(1).jpg',
    title: 'Từng góc quầy và hành lang biến thành kho trữ hàng',
    category: 'kho-hang',
    tag: 'Ôm 1 kho hàng',
    badge: 'Trước 2025 • Áp lực vốn',
    description: 'Các thùng hàng xếp chồng chất từ sàn lên cao. Lúc nào cũng lo sợ hàng tồn chậm luân chuyển hoặc cận date.'
  },
  {
    id: 'old-biz-3',
    imageUrl: 'https://i.postimg.cc/G2ghR6qn/470163013-2929217277230775-3358166642931203910-n.jpg',
    title: 'Loay hoay kiểm đếm và chuẩn bị đóng kiện lớn',
    category: 'dong-hang',
    tag: 'Loay hoay đóng hàng',
    badge: 'Trước 2025 • Tốn công sức',
    description: 'Dược sĩ phải tự tay kiểm từng hộp, đếm từng kiện thuốc giữa biển thùng carton thay vì dành thời gian tư vấn cho bệnh nhân.'
  },
  {
    id: 'old-biz-4',
    imageUrl: 'https://i.postimg.cc/PJLf5KR5/471651748-2940694322749737-909846516852997651-n.jpg',
    title: 'Băng dính, kéo, thùng carton ngổn ngang mặt sàn',
    category: 'dong-hang',
    tag: 'Loay hoay đóng hàng',
    badge: 'Trước 2025 • Vất vả đóng gói',
    description: 'Cả ngày cặm cụi đóng gói đơn lẻ và các kiện phân phối. Hết dán băng dính lại ghi phiếu vận chuyển thủ công.'
  },
  {
    id: 'old-biz-5',
    imageUrl: 'https://i.postimg.cc/63b5KFY4/473762941-2959636854188817-5395132643035757664-n.jpg',
    title: 'Hàng loạt thùng hàng carton chất đống trong nhà',
    category: 'kho-hang',
    tag: 'Ôm 1 kho hàng',
    badge: 'Trước 2025 • Ôm kho',
    description: 'Lối đi bị thu hẹp bởi hàng trăm thùng sản phẩm chờ xuất kho. Mô hình cũ đòi hỏi phải trữ lượng hàng cực lớn.'
  },
  {
    id: 'old-biz-6',
    imageUrl: 'https://i.postimg.cc/0j65yZBr/474049200-2956921941126975-6093345135002915409-n.jpg',
    title: 'Kiểm tra từng mã kiện hàng trước giờ chuyển đi',
    category: 'dong-hang',
    tag: 'Loay hoay đóng hàng',
    badge: 'Trước 2025 • Kiểm kê thủ công',
    description: 'Dò từng danh sách hàng hóa và phiếu đơn. Sai sót thủ công là nỗi ám ảnh thường trực sau mỗi ca đóng hàng dài.'
  },
  {
    id: 'old-biz-7',
    imageUrl: 'https://i.postimg.cc/L5q48vb5/474897016-2962783893874113-416240573293725873-n.jpg',
    title: 'Cặm cụi gói hàng từ sáng sớm đến tối muộn',
    category: 'dong-hang',
    tag: 'Loay hoay đóng hàng',
    badge: 'Trước 2025 • Chiếm trọn thời gian',
    description: 'Thời gian dành cho chuyên môn dược giảm dần, phần lớn năng lượng bị hút cạn vào việc bốc xếp và đóng kiện.'
  },
  {
    id: 'old-biz-8',
    imageUrl: 'https://i.postimg.cc/XqZNYxzJ/481170072-2994284967390672-5355100092464199559-n.jpg',
    title: 'Kho hàng chất cao chạm trần nhà',
    category: 'kho-hang',
    tag: 'Ôm 1 kho hàng',
    badge: 'Trước 2025 • Gánh nặng tồn kho',
    description: 'Càng nhập nhiều để hưởng chiết khấu, rủi ro tồn kho và áp lực dòng tiền càng đè nặng đôi vai người chủ quầy thuốc.'
  },
  {
    id: 'old-biz-9',
    imageUrl: 'https://i.postimg.cc/Rh3CZGD3/486150810-3017258285093340-8212477243994974184-n.jpg',
    title: 'Dán nhãn vận đơn và phân loại hàng gửi xe',
    category: 'ship-hang',
    tag: 'Ship hàng cả ngày',
    badge: 'Trước 2025 • Chờ xe ship',
    description: 'Ghi địa chỉ, phân loại kiện gửi bến xe và giao chuyển phát nhanh, liên tục theo dõi tình trạng đơn gửi.'
  },
  {
    id: 'old-biz-10',
    imageUrl: 'https://i.postimg.cc/zvLDGpcg/486466962-3017258248426677-7640793818932209977-n.jpg',
    title: 'Kiểm tra lô hàng đóng gói kỹ lưỡng',
    category: 'dong-hang',
    tag: 'Loay hoay đóng hàng',
    badge: 'Trước 2025 • Quản lý vất vả',
    description: 'Đảm bảo từng hộp hàng không bị móp méo khi vận chuyển đường dài qua nhiều chặng trung chuyển.'
  },
  {
    id: 'old-biz-11',
    imageUrl: 'https://i.postimg.cc/SRXQxVvC/488652603-3035945983224570-2346435105775948244-n.jpg',
    title: 'Tập kết các kiện hàng lớn chờ bên vận chuyển',
    category: 'ship-hang',
    tag: 'Ship hàng cả ngày',
    badge: 'Trước 2025 • Chờ bên vận chuyển',
    description: 'Mỗi ngày trôi qua với lịch trình hối hả đưa các kiện hàng lớn giao cho chành xe hoặc bưu cục giao hàng.'
  },
  {
    id: 'old-biz-12',
    imageUrl: 'https://i.postimg.cc/d37QVnx8/490219540-3036445636507938-535792982222755558-n.jpg',
    title: 'Hàng chất đầy cửa sẵn sàng cho chuyến ship',
    category: 'ship-hang',
    tag: 'Ship hàng cả ngày',
    badge: 'Trước 2025 • Ship hàng cả ngày',
    description: 'Hình ảnh quen thuộc trước năm 2025: người dược sĩ kiêm luôn thủ kho, nhân viên đóng gói và giao nhận.'
  },
  {
    id: 'old-biz-13',
    imageUrl: 'https://i.postimg.cc/4yK4xwSp/505799717-3111694592316375-3943330168359776492-n.jpg',
    title: 'Bốc hàng lên phương tiện giao nhận cả ngày không ngơi',
    category: 'ship-hang',
    tag: 'Ship hàng cả ngày',
    badge: 'Trước 2025 • Guồng quay kiệt sức',
    description: 'Ship hàng liên tục nhưng biên lợi nhuận mỏng, áp lực công nợ đại lý và khách hàng khiến tôi luôn tự hỏi: "Liệu đây có phải là cách kinh doanh bền vững?"'
  }
];

export const MARKETING_CAMPAIGNS_DATA: MarketingCampaignItem[] = [
  {
    id: 'mkt-vong-quay-1',
    imageUrl: 'https://i.postimg.cc/25bscw50/vong-quay.png',
    title: 'Vòng Quay May Mắn – Minigame gắn kết độc quyền Nhà Thuốc Minh Khôi',
    category: 'minigame',
    tag: 'Vòng quay may mắn',
    badge: 'Minigame độc quyền',
    description: 'Vòng quay may mắn được tự thiết kế với các phần quà hấp dẫn: Quà tặng tri ân, voucher ưu đãi, đo huyết áp và soi vi tuần hoàn miễn phí. Tạo không khí rộn ràng và hào hứng mỗi khi khách ghé nhà thuốc.'
  },
  {
    id: 'mkt-voucher-1',
    imageUrl: 'https://i.postimg.cc/W4FBWn4S/Voucher-(1).jpg',
    title: 'Voucher Quà Tặng & Phiếu Ưu Đãi Đặc Biệt Cho Khách Hàng',
    category: 'voucher',
    tag: 'Voucher ưu đãi',
    badge: 'Thiết kế nhận diện thương hiệu',
    description: 'Phiếu quà tặng và ưu đãi thiết kế chỉn chu, mang phong cách hiện đại. Dùng tri ân khách hàng thân thiết, khuyến khích tái mua và kích cầu các gói combo liệu trình chăm sóc sức khỏe chủ động.'
  },
  {
    id: 'mkt-vong-quay-2',
    imageUrl: 'https://i.postimg.cc/t4M0Nf9B/vong-quay-nho.png',
    title: 'Vòng Quay May Mắn phiên bản tương tác minigame tại quầy',
    category: 'minigame',
    tag: 'Vòng quay may mắn',
    badge: 'Tương tác tại điểm bán',
    description: 'Minigame 100% trúng quà giúp khách hàng thích thú, chủ động check-in và chia sẻ thông tin cho người thân, bạn bè cùng đến trải nghiệm.'
  },
  {
    id: 'mkt-voucher-2',
    imageUrl: 'https://i.postimg.cc/LsYcCTsj/Voucher-chinh-nho.jpg',
    title: 'Voucher Tri Ân Khách Hàng Thân Thiết – Chăm Sóc Sức Khỏe Toàn Diện',
    category: 'voucher',
    tag: 'Voucher ưu đãi',
    badge: 'Chăm sóc sau bán',
    description: 'Công cụ marketing thông minh giúp kết nối khách hàng vào hệ thống Zalo OA tự động, giữ chân khách hàng lâu dài và nâng cao giá trị vòng đời khách hàng.'
  },
  {
    id: 'mkt-poster-1',
    imageUrl: 'https://i.postimg.cc/ZqBG7cq2/Anh-vuong-11-(1).png',
    title: 'Ấn phẩm truyền thông Canva – Ưu đãi gói giải pháp sức khỏe',
    category: 'poster',
    tag: 'Tự thiết kế Canva',
    badge: 'Ấn phẩm số hóa',
    description: 'Tự tay thiết kế layout chuẩn kích thước vuông đăng Fanpage và Zalo, truyền tải thông điệp ưu đãi rõ ràng, chuyên nghiệp và giàu sức hút.'
  },
  {
    id: 'mkt-poster-2',
    imageUrl: 'https://i.postimg.cc/FKdMWZKj/Thiet-ke-chua-co-ten-(5)nho.png',
    title: 'Banner thông báo Minigame Vòng Quay May Mắn – Nhận Quà Liền Tay',
    category: 'minigame',
    tag: 'Minigame Vòng Quay',
    badge: 'Sự kiện thu hút khách',
    description: 'Banner quảng bá chương trình minigame tại điểm bán, thông tin thể lệ minh bạch, tạo sự tò mò và hứng khởi cho mọi khách hàng ghé thăm.'
  },
  {
    id: 'mkt-poster-3',
    imageUrl: 'https://i.postimg.cc/fbtG2Kb7/Thiet-ke-chua-co-ten-(6).png',
    title: 'Poster sự kiện khuyến mãi tưng bừng tại Nhà Thuốc Minh Khôi',
    category: 'poster',
    tag: 'Tự thiết kế Canva',
    badge: 'Khuyến mãi điểm bán',
    description: 'Sử dụng hình ảnh và màu sắc bắt mắt, làm nổi bật các chương trình ưu đãi đặc quyền trong tháng, thu hút khách hàng địa phương ghé qua.'
  },
  {
    id: 'mkt-poster-4',
    imageUrl: 'https://i.postimg.cc/0yQRmxRh/Thiet-ke-chua-co-ten-(9).png',
    title: 'Ấn phẩm tri ân khách hàng thân thiết & Tặng quà chăm sóc',
    category: 'poster',
    tag: 'Tự thiết kế Canva',
    badge: 'Tri ân gắn kết',
    description: 'Thiết kế đồng bộ nhận diện thương hiệu Nhà Thuốc Minh Khôi, khẳng định uy tín và sự tận tâm của người dược sĩ trong từng chi tiết.'
  },
  {
    id: 'mkt-event-1',
    imageUrl: 'https://i.postimg.cc/VkVyWTzd/Chat-GPT-Image-14-44-37-26-thg-5-2026.png',
    title: 'Poster truyền thông ngày hội kiểm tra sức khỏe & nhận quà ưu đãi',
    category: 'poster',
    tag: 'Chương trình ưu đãi',
    badge: 'Sức khỏe cộng đồng',
    description: 'Thiết kế truyền thông thông điệp chăm sóc sức khỏe chủ động kết hợp chương trình tặng quà ưu đãi, tạo dựng thiện cảm lớn trong lòng người dân.'
  },
  {
    id: 'mkt-event-2',
    imageUrl: 'https://i.postimg.cc/52RcSGfb/Chat-GPT-Image-14-55-03-26-thg-5-2026.png',
    title: 'Tổ chức đón tiếp và trực tiếp tư vấn lộ trình sức khỏe cho khách hàng',
    category: 'event',
    tag: 'Tổ chức tại nhà thuốc',
    badge: 'Hoạt động thực tế',
    description: 'Hình ảnh thực tế những buổi tiếp đón khách hàng: Dược sĩ lắng nghe, đo lường chỉ số sinh học và tư vấn giải pháp phù hợp kèm chính sách ưu đãi thiết thực.'
  },
  {
    id: 'mkt-event-3',
    imageUrl: 'https://i.postimg.cc/8z5QWDQY/Chat-GPT-Image-14-56-48-26-thg-5-2026.png',
    title: 'Không khí khách hàng trải nghiệm chương trình ưu đãi tại quầy',
    category: 'event',
    tag: 'Tổ chức tại nhà thuốc',
    badge: 'Trải nghiệm khách hàng',
    description: 'Sự hài lòng và nụ cười của bà con khi được tư vấn chu đáo, tham gia minigame và nhận những món quà sức khỏe ý nghĩa.'
  },
  {
    id: 'mkt-event-4',
    imageUrl: 'https://i.postimg.cc/bwJcb8cM/Chat-GPT-Image-15-00-40-26-thg-5-2026.png',
    title: 'Tận tay trao quà tặng và phiếu mua sắm ưu đãi cho người bệnh',
    category: 'event',
    tag: 'Tổ chức tại nhà thuốc',
    badge: 'Trao gửi yêu thương',
    description: 'Mỗi món quà trao đi là một lời tri ân sâu sắc, khẳng định phương châm: Dược sĩ phục vụ từ tâm, mang giá trị sức khỏe bền lâu đến từng gia đình.'
  },
  {
    id: 'mkt-event-5',
    imageUrl: 'https://i.postimg.cc/Vk6QM1Qp/Chat-GPT-Image-15-16-42-26-thg-5-2026.png',
    title: 'Gắn kết bền chặt với cộng đồng qua các hoạt động tương tác tại điểm bán',
    category: 'event',
    tag: 'Tổ chức tại nhà thuốc',
    badge: 'Gắn kết cộng đồng',
    description: 'Nhà thuốc hiện đại không còn là nơi chỉ mua bán khi ốm đau, mà trở thành điểm tựa tư vấn phòng bệnh chủ động và tin cậy của cả khu dân cư.'
  },
  {
    id: 'mkt-poster-5',
    imageUrl: 'https://i.postimg.cc/RZDrL8vQ/Noi-dung-doan-van-ban-cua-ban.png',
    title: 'Thiết kế thông báo thể lệ ưu đãi & tích điểm nhận quà',
    category: 'poster',
    tag: 'Tự thiết kế Canva',
    badge: 'Chính sách minh bạch',
    description: 'Tự làm bảng nội dung và thể lệ tích điểm rõ ràng, minh bạch giúp khách hàng hào hứng gom đơn và giới thiệu người thân đến mua cùng.'
  },
  {
    id: 'mkt-poster-6',
    imageUrl: 'https://i.postimg.cc/Sxv0f5mX/Noi-dung-doan-van-ban-cua-ban-(1).png',
    title: 'Banner giới thiệu combo sản phẩm và liệu trình chuyên biệt',
    category: 'poster',
    tag: 'Tự thiết kế Canva',
    badge: 'Combo giải pháp',
    description: 'Chuyển đổi từ bán từng liều thuốc lẻ sang giới thiệu trọn gói giải pháp chăm sóc phục hồi sức khỏe từ gốc rễ.'
  },
  {
    id: 'mkt-poster-7',
    imageUrl: 'https://i.postimg.cc/4xSCQMX9/Noi-dung-doan-van-ban-cua-ban-(2).png',
    title: 'Nội dung truyền thông khuyến mãi & giáo dục sức khỏe chủ động',
    category: 'poster',
    tag: 'Tự thiết kế Canva',
    badge: 'Giáo dục sức khỏe',
    description: 'Kết hợp hài hòa giữa kiến thức y dược bổ ích và quyền lợi ưu đãi, nâng tầm vị thế chuyên gia của người dược sĩ trong mắt người dân.'
  }
];

export const TRAVEL_TRIPS_DATA: TravelTripItem[] = [
  {
    id: 'chongqing-trip-2026',
    destination: 'Trùng Khánh',
    country: 'Trung Quốc',
    flag: '🇨🇳',
    time: 'Tháng 3/2026',
    title: 'Chuyến Du Lịch Trùng Khánh (Trung Quốc) Cùng Đội Ngũ Y Dược AmHapy',
    tag: 'Đội ngũ Y Dược AmHapy',
    badge: 'Xuất ngoại • Tháng 3/2026',
    imageUrl: 'https://i.postimg.cc/8PFfWKMD/LP-453.jpg',
    images: [
      {
        url: 'https://i.postimg.cc/8PFfWKMD/LP-453.jpg',
        caption: 'Dược sĩ Diễm Phúc cùng các chuyên gia & đồng nghiệp Y Dược AmHapy check-in Trùng Khánh (Trung Quốc)',
        tag: 'Đoàn Y Dược AmHapy'
      },
      {
        url: 'https://i.postimg.cc/J7YBsVD4/LP-373.jpg',
        caption: 'Khám phá danh thắng, kiến trúc và trải nghiệm văn hóa rực rỡ tại thành phố Trùng Khánh',
        tag: 'Khám phá Trùng Khánh'
      },
      {
        url: 'https://i.postimg.cc/026KmWD2/LP-499.jpg',
        caption: 'Check-in Hồng Nhai Động (Hongyadong) lung linh huyền ảo về đêm cùng những người bạn đồng hành',
        tag: 'Hồng Nhai Động về đêm'
      }
    ],
    description: 'Tháng 3/2026 ghi dấu bước tiến tự hào: Sau khi chuẩn hóa mô hình vận hành và tự động hóa quy trình nhà thuốc, Dược sĩ Diễm Phúc đã cùng đội ngũ chuyên gia, dược sĩ trong đại gia đình Y Dược AmHapy tham gia chuyến du lịch xuất ngoại khám phá Trùng Khánh (Trung Quốc). Một hành trình vừa mở rộng tầm nhìn quốc tế, vừa gắn kết keo sơn tinh thần đồng đội.',
    quote: '“Khi dược sĩ dám thay đổi tư duy, bước ra khỏi bốn bức tường quầy thuốc và đồng hành cùng một đội ngũ phụng sự tử tế như AmHapy, cánh cửa thế giới sẽ rộng mở. Chúng ta không chỉ làm kinh doanh, mà đang cùng nhau sống một cuộc đời ý nghĩa và tràn đầy trải nghiệm!”',
    highlights: [
      'Chuyến du lịch xuất ngoại đẳng cấp cùng đại gia đình Y Dược Online AmHapy',
      'Khám phá văn hóa, ẩm thực và kiến trúc độc đáo bậc nhất Trùng Khánh',
      'Giao lưu chuyên môn, học hỏi và thắt chặt tình đồng đội cùng các dược sĩ tiên phong',
      'Minh chứng rõ nét cho năng lực tự chủ thời gian và tài chính bền vững'
    ]
  },
  {
    id: 'sapa-trip-2026',
    destination: 'Sa Pa, Lào Cai',
    country: 'Việt Nam',
    flag: '🇻🇳',
    time: 'Tháng 9/2026',
    title: 'Chuyến Du Lịch Sa Pa Cùng Gia Đình & Đại Gia Đình AmHapy',
    tag: 'Gia đình & Đại gia đình AmHapy',
    badge: 'Kỷ niệm Tháng 9/2026',
    imageUrl: 'https://i.postimg.cc/Hnc0WkL5/LP-2.jpg',
    images: [
      {
        url: 'https://i.postimg.cc/Hnc0WkL5/LP-2.jpg',
        caption: 'Dược sĩ Diễm Phúc cùng gia đình & đoàn đại gia đình AmHapy tại Sa Pa (Tháng 9/2026)',
        tag: 'Gia đình & AmHapy'
      },
      {
        url: 'https://i.postimg.cc/fLBS718J/LP.jpg',
        caption: 'Rạng rỡ nụ cười tự do và hạnh phúc bên người thân yêu giữa không gian núi rừng Sa Pa',
        tag: 'Hạnh phúc gia đình'
      },
      {
        url: 'https://i.postimg.cc/3Rn0jzt8/LP-24-(1).jpg',
        caption: 'Những khoảnh khắc ấm áp, gắn kết tình thân trong kỳ nghỉ dưỡng tuyệt đẹp',
        tag: 'Khoảnh khắc sum vầy'
      },
      {
        url: 'https://i.postimg.cc/Y9bLNTdv/LP-27.jpg',
        caption: 'Check-in cảnh sắc mây trời Sa Pa hùng vĩ mùa thu tháng 9/2026',
        tag: 'Mây trời Sa Pa'
      },
      {
        url: 'https://i.postimg.cc/7hG1PZLz/LP-28.jpg',
        caption: 'Hội ngộ, giao lưu và cùng nhau sẻ chia giá trị phụng sự cộng đồng tại Sa Pa thơ mộng',
        tag: 'Kỷ niệm Sa Pa'
      },
      {
        url: 'https://i.postimg.cc/0jTYz16N/LP-254.jpg',
        caption: 'Khoảnh khắc rạng rỡ, gắn kết tình đồng nghiệp và những người bạn đồng hành AmHapy',
        tag: 'Đại gia đình AmHapy'
      },
      {
        url: 'https://i.postimg.cc/TwC5jBtT/LP-282.jpg',
        caption: 'Nét đẹp tự tin, tươi trẻ của người Dược sĩ thời đại mới làm chủ công nghệ và cuộc sống',
        tag: 'Dược sĩ thời đại mới'
      },
      {
        url: 'https://i.postimg.cc/d3b2hc71/LP-355.jpg',
        caption: 'Hòa mình cùng thiên nhiên Sa Pa tháng 9 - Tận hưởng thành quả của sự tự do thời gian',
        tag: 'Năng lượng bứt phá'
      },
      {
        url: 'https://i.postimg.cc/HWv7rDJN/LP-360.jpg',
        caption: 'Kỷ niệm trọn vẹn của chuyến đi - Tiếp thêm năng lượng phụng sự người bệnh từ tâm',
        tag: 'Tiếp lửa phụng sự'
      }
    ],
    description: 'Khoảnh khắc ý nghĩa ghi dấu hành trình chuyển mình ngọt ngào: Rời xa những ngày tháng ôm kho và đóng hàng kiệt sức trước năm 2025, Dược sĩ Diễm Phúc đã có thể dành trọn vẹn thời gian bên gia đình thân yêu trong chuyến du ngoạn Sa Pa mùa thu tháng 9/2026, đồng hành cùng các đồng nghiệp trong đại gia đình Y Dược Online AmHapy.',
    quote: '“Thành quả lớn nhất sau khi chuyển đổi số và đồng hành cùng AmHapy không chỉ là doanh số nhà thuốc tăng trưởng, mà là sự tự do để ở bên những người mình yêu thương nhất và hòa mình cùng một cộng đồng y dược đầy nhiệt huyết.”',
    highlights: [
      'Nghỉ dưỡng & gắn kết trọn vẹn tình cảm bên gia đình nhỏ',
      'Hội ngộ, giao lưu và tri ân cùng các dược sĩ trong đại gia đình AmHapy',
      'Thưởng ngoạn cảnh sắc Sa Pa mùa thu tháng 9 lúa chín vàng rực rỡ',
      'Minh chứng sống động cho giá trị tự do thời gian nhờ tự động hóa vận hành'
    ]
  }
];

export const SAPA_TRIP_DATA: SapaTripItem = {
  id: TRAVEL_TRIPS_DATA[1].id,
  imageUrl: TRAVEL_TRIPS_DATA[1].imageUrl,
  images: TRAVEL_TRIPS_DATA[1].images,
  title: TRAVEL_TRIPS_DATA[1].title,
  time: TRAVEL_TRIPS_DATA[1].time,
  location: TRAVEL_TRIPS_DATA[1].destination,
  tag: TRAVEL_TRIPS_DATA[1].tag,
  badge: TRAVEL_TRIPS_DATA[1].badge,
  description: TRAVEL_TRIPS_DATA[1].description,
  quote: TRAVEL_TRIPS_DATA[1].quote,
  highlights: TRAVEL_TRIPS_DATA[1].highlights
};

export const AMHAPY_AFFILIATE_DATA: AffiliateAmHapyData = {
  title: 'Vì sao tôi lựa chọn mô hình Affiliate AmHapy?',
  badge: 'MÔ HÌNH KINH DOANH SỐ • ĐỒNG HÀNH BỀN VỮNG',
  subtitle: 'Giải pháp kinh doanh nhẹ vốn, tối ưu vận hành và giải phóng áp lực ôm kho cho người dược sĩ hiện đại.',
  introStory: 'Có lẽ chính trải nghiệm từng phải ôm một kho hàng rất lớn khiến tôi đặc biệt quan tâm đến một mô hình kinh doanh nhẹ vốn và phù hợp hơn với thời đại số.',
  fourNoPrinciples: [
    {
      title: 'Không ôm hàng',
      description: 'Không cần bỏ ra hàng trăm triệu nhập kho dự trữ, xóa tan nỗi lo tồn kho hay ứ đọng hàng hóa.',
      icon: 'PackageX'
    },
    {
      title: 'Không ship hàng',
      description: 'Hệ thống tự động hóa hoàn tất đơn hàng, đóng gói chuyên nghiệp và vận chuyển trực tiếp đến tận tay khách hàng.',
      icon: 'Truck'
    },
    {
      title: 'Không chôn vốn',
      description: 'Dòng tiền lưu động thanh thoát, giải phóng hoàn toàn áp lực rủi ro hàng bán chậm hay cận date.',
      icon: 'Coins'
    },
    {
      title: 'Không đa cấp',
      description: 'Mô hình Tiếp thị Liên kết (Affiliate) thương mại điện tử y dược chuẩn mực, minh bạch và hoàn toàn tuân thủ pháp luật.',
      icon: 'ShieldCheck'
    }
  ],
  coreFocusQuote: 'Tôi có thể tập trung vào điều mình làm tốt nhất: học chuyên môn, chia sẻ giá trị, tư vấn và chăm sóc khách hàng; còn việc xử lý đơn hàng và vận chuyển được hệ thống hỗ trợ.',
  corePillars: [
    {
      title: 'Doanh nghiệp có nhà máy sản xuất riêng',
      description: 'Doanh nghiệp sở hữu hệ thống nhà máy sản xuất trực tiếp, làm chủ hoàn toàn công nghệ, quy trình sản xuất và tiêu chuẩn kiểm nghiệm khắt khe.',
      icon: 'Factory',
      highlight: 'Chủ động chất lượng 100%'
    },
    {
      title: 'Thảo mộc Việt Nam theo Y học cổ truyền',
      description: 'Sản phẩm phát triển từ thảo mộc Việt Nam theo định hướng Y học cổ truyền, chắt lọc tinh hoa Nam dược kết hợp giải pháp lành tính, an toàn cho người Việt.',
      icon: 'Leaf',
      highlight: 'Tinh hoa Y học cổ truyền'
    },
    {
      title: 'Công nghệ sản xuất hiện đại – Dạng cốm thăng hoa',
      description: 'Ứng dụng công nghệ sản xuất hiện đại, trong đó có dạng cốm thăng hoa giúp tối ưu hóa hoạt chất, độ ổn định và tăng cường khả năng hấp thu sinh học vượt trội.',
      icon: 'Sparkles',
      highlight: 'Cốm thăng hoa đột phá'
    },
    {
      title: 'Văn hóa đề cao sự tử tế, học tập & đồng hành',
      description: 'Môi trường và văn hóa doanh nghiệp đề cao sự tử tế, học tập và đồng hành, nơi các dược sĩ nâng đỡ nhau về cả chuyên môn lẫn tư duy phát triển.',
      icon: 'HeartHandshake',
      highlight: 'Tử tế & Đồng hành'
    }
  ],
  benefitsAndIncome: [
    {
      title: 'Trên 12 nguồn thu nhập',
      detail: 'Hệ thống quyền lợi và cơ chế thu nhập đa dạng với hơn 12 nguồn thu nhập minh bạch, bền vững từ việc trao giá trị chuyên môn.',
      icon: 'TrendingUp',
      badge: '12+ Nguồn thu nhập'
    },
    {
      title: 'Chiết khấu từ 25 đến 40%++',
      detail: 'Mức chiết khấu hấp dẫn theo từng chính sách rõ ràng, tối ưu hóa lợi nhuận công bằng xứng đáng với công sức tư vấn chuyên gia.',
      icon: 'Percent',
      badge: '25% – 40%++'
    },
    {
      title: 'Chương trình du lịch 2 lần mỗi năm',
      detail: 'Được tưởng thưởng các chuyến du lịch nghỉ dưỡng đẳng cấp trong và ngoài nước định kỳ 2 lần/năm cùng gia đình và đồng đội (như Sa Pa, Trùng Khánh).',
      icon: 'Plane',
      badge: '2 Chuyến đi / Năm'
    },
    {
      title: 'Chương trình cổ đông công ty',
      detail: 'Cơ hội tham gia chương trình cổ đông theo điều kiện của công ty mà không yêu cầu góp vốn trực tiếp, cùng chia sẻ thành quả dài hạn.',
      icon: 'Crown',
      badge: 'Không cần vốn trực tiếp'
    }
  ],
  deepReflection: {
    quote: 'Với tôi, điều quan trọng nhất không nằm ở một con số thu nhập.',
    solution: 'Điều khiến tôi lựa chọn là mô hình này giải quyết đúng nỗi đau mà tôi từng trải qua: Từ một người từng phải bỏ vốn nhập hàng, ôm kho và lo hàng cận hạn, tôi có thêm một lựa chọn kinh doanh theo hướng Affiliate – nhẹ hơn về vận hành, phù hợp hơn với xu thế kinh doanh online và có thể phát triển song song với nghề dược.'
  },
  mindsetShifts: [
    {
      from: 'Từ bán sản phẩm',
      to: 'Chuyển dần sang xây dựng giá trị',
      note: 'Không chỉ bán một món hàng mà tư vấn giải pháp sức khỏe toàn diện và phụng sự người bệnh dài hạn.'
    },
    {
      from: 'Từ làm một mình',
      to: 'Học cách xây dựng đội ngũ',
      note: 'Thay vì đơn độc loay hoay trong quầy thuốc, tôi cùng các đồng nghiệp dược sĩ kết nối và hỗ trợ nhau cùng tiến.'
    },
    {
      from: 'Từ kinh doanh theo kinh nghiệm',
      to: 'Sử dụng dữ liệu, công nghệ và hệ thống',
      note: 'Ứng dụng AI, tự động hóa, quản trị số và đo lường chỉ số sức khỏe để vận hành chuyên nghiệp, bài bản.'
    },
    {
      from: 'Từ người đi tìm lời giải cho chính mình',
      to: 'Mong muốn chia sẻ con đường ấy với những dược sĩ đang gặp những khó khăn giống tôi trước đây',
      note: 'Lan tỏa kinh nghiệm, đồng hành trao giá trị giúp các đồng nghiệp thoát khỏi bế tắc ôm vốn và đơn độc.'
    }
  ],
  closingVision: 'Và từ một người đi tìm lời giải cho chính mình, tôi bắt đầu mong muốn chia sẻ con đường ấy với những dược sĩ đang gặp những khó khăn giống tôi trước đây.'
};



