# Học Ethereum

Website học Ethereum bằng tiếng Việt, từ con số 0 đến kiến thức cho nhà phát triển. Nội dung được biên soạn dựa trên tài liệu của [ethereum.org](https://ethereum.org).

## Có gì trong này?

- **77 bài học** chia thành 8 chương, đi từ cơ bản đến nâng cao
- **Quiz** ở cuối mỗi bài để tự kiểm tra
- **126 thuật ngữ** giải thích ngắn gọn (gas, rollup, staking…)
- **Flashcard** để ôn thuật ngữ
- **Ôn tập** câu hỏi ngẫu nhiên từ tất cả các bài
- **Tìm kiếm** bài học và thuật ngữ
- Giao diện **sáng / tối**, dùng tốt trên điện thoại
- **Tự lưu tiến độ** học ngay trên trình duyệt, không cần đăng nhập

## Lộ trình học

| # | Chương | Mức độ | Số bài |
|---|--------|--------|:------:|
| 1 | Nền tảng Ethereum | Cơ bản | 9 |
| 2 | Sử dụng Ethereum an toàn | Cơ bản | 9 |
| 3 | Ethereum dùng để làm gì? | Cơ bản → Trung bình | 13 |
| 4 | Staking, node và năng lượng | Trung bình | 6 |
| 5 | Lộ trình phát triển Ethereum | Trung bình | 10 |
| 6 | Kiến thức nền tảng cho nhà phát triển | Trung bình → Nâng cao | 11 |
| 7 | Ethereum stack: xây dựng ứng dụng | Trung bình → Nâng cao | 9 |
| 8 | Chủ đề nâng cao | Nâng cao | 10 |

Nếu bạn chỉ muốn hiểu Ethereum để sử dụng, học chương 1–5 là đủ. Chương 6–8 dành cho người muốn lập trình trên Ethereum.

## Cách chạy

Bạn cần cài [Node.js](https://nodejs.org) trước.

```bash
# 1. Tải project về
git clone https://github.com/DuongThanhPhat-09/eth_learning.git
cd eth_learning

# 2. Cài đặt (chỉ cần làm một lần)
npm install

# 3. Chạy
npm run dev
```

Sau đó mở trình duyệt và vào **http://127.0.0.1:5173**.

Nhấn `Ctrl + C` trong terminal để dừng.

> **Không muốn cài Node.js?** Bạn có thể mở thẳng file `index.html` bằng trình duyệt, trang vẫn chạy bình thường.

### Lỗi "running scripts is disabled" trên Windows

Nếu chạy `npm run dev` trong PowerShell mà gặp lỗi này, dùng lệnh sau thay thế:

```powershell
npm.cmd run dev
```

Hoặc chạy lệnh này một lần để sửa hẳn:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## Phím tắt

| Phím | Tác dụng |
|------|----------|
| `/` hoặc `Ctrl + K` | Mở tìm kiếm |
| `←` `→` | Chuyển sang bài trước / bài sau |
| `Esc` | Đóng tìm kiếm hoặc menu |

## Cấu trúc thư mục

```
eth_learning/
├── index.html        # Trang chính
├── css/
│   └── styles.css    # Giao diện
└── js/
    ├── app.js        # Xử lý hiển thị, tìm kiếm, quiz, flashcard
    └── data/         # Nội dung bài học
        ├── 01-basics.js
        ├── ...
        ├── 08-dev-advanced.js
        └── glossary.js   # Danh sách thuật ngữ
```

Muốn sửa hoặc thêm nội dung bài học, bạn chỉ cần chỉnh các file trong `js/data/`. Trang sẽ tự tải lại khi bạn lưu file.
