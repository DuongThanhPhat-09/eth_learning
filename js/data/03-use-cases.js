window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "use-cases",
  no: 3,
  group: "Dành cho mọi người",
  level: "Cơ bản → Trung bình",
  title: "Ethereum dùng để làm gì?",
  desc: "Các ứng dụng thực tế: DeFi, stablecoin, thanh toán, tài sản token hóa, thị trường dự đoán, NFT, DAO, danh tính, mạng xã hội, game, AI agent, DeSci, ReFi, restaking và doanh nghiệp.",
  lessons: [
    {
      id: "defi",
      title: "DeFi: tài chính mở",
      min: 9,
      src: ["/defi/"],
      tldr: "DeFi (decentralized finance) là các dịch vụ tài chính chạy bằng hợp đồng thông minh: trao đổi, vay, cho vay, tiết kiệm, phái sinh. Ai có Internet và ví đều dùng được, 24/7, không cần ngân hàng.",
      body: `
<h2>Vấn đề của tài chính truyền thống</h2>
<ul>
  <li>Khoảng 1,4 tỷ người trưởng thành không có tài khoản ngân hàng.</li>
  <li>Chuyển tiền quốc tế chậm và đắt; thị trường đóng cửa cuối tuần.</li>
  <li>Bên trung gian có thể từ chối, đóng băng hoặc thu phí cao.</li>
</ul>

<h2>DeFi khác biệt thế nào?</h2>
<div class="table-wrap"><table>
<tr><th>Tài chính truyền thống</th><th>DeFi</th></tr>
<tr><td>Ngân hàng giữ tiền của bạn</td><td>Bạn tự giữ tài sản trong ví</td></tr>
<tr><td>Cần hồ sơ, xét duyệt</td><td>Ai cũng dùng được</td></tr>
<tr><td>Giờ hành chính, nghỉ lễ</td><td>Hoạt động liên tục</td></tr>
<tr><td>Chuyển tiền có thể mất nhiều ngày</td><td>Vài giây đến vài phút</td></tr>
<tr><td>Sản phẩm đóng, khó kết hợp</td><td>Các giao thức gọi lẫn nhau tự do</td></tr>
</table></div>

<h2>Các mảnh ghép chính</h2>
<div class="compare">
  <div><h4>Sàn phi tập trung (DEX)</h4><p>Đổi token trực tiếp từ ví. Nhiều DEX dùng <strong>AMM</strong>: một quỹ thanh khoản chứa hai token và công thức tự tính giá (Uniswap dùng x × y = k).</p></div>
  <div><h4>Vay và cho vay</h4><p>Gửi tài sản để nhận lãi; vay bằng cách thế chấp vượt mức (ví dụ thế chấp 150 USD để vay 100 USD). Ví dụ: Aave, Compound, Morpho.</p></div>
  <div><h4>Stablecoin</h4><p>Đồng tiền ổn định giá, xương sống của DeFi.</p></div>
  <div><h4>Phái sinh, thị trường dự đoán</h4><p>Hợp đồng tương lai, quyền chọn, cá cược sự kiện.</p></div>
  <div><h4>Quản lý tài sản, vault</h4><p>Gửi tài sản vào chiến lược tự động (thường theo chuẩn ERC-4626).</p></div>
  <div><h4>Staking lỏng</h4><p>Stake ETH và nhận token đại diện (như stETH) để vẫn dùng được trong DeFi.</p></div>
</div>

<h2>Flash loan</h2>
<p>Một tính năng chỉ có ở DeFi: vay số tiền lớn <strong>không cần thế chấp</strong>, miễn là trả lại trong cùng một giao dịch. Nếu không trả, toàn bộ giao dịch bị hủy như chưa từng xảy ra. Flash loan dùng cho chênh lệch giá, đổi tài sản thế chấp, nhưng cũng từng bị dùng để tấn công các giao thức có lỗi.</p>

<h2>Rủi ro</h2>
<ul>
  <li><strong>Lỗi hợp đồng thông minh</strong> và hack.</li>
  <li><strong>Thanh lý:</strong> giá tài sản thế chấp giảm mạnh có thể khiến khoản vay bị thanh lý tự động.</li>
  <li><strong>Oracle bị thao túng.</strong></li>
  <li><strong>Impermanent loss</strong> khi cung cấp thanh khoản cho AMM.</li>
  <li><strong>Rủi ro quản trị và pháp lý.</strong></li>
</ul>`,
      keys: [
        "DeFi là dịch vụ tài chính bằng hợp đồng thông minh, mở cho mọi người, 24/7.",
        "Thành phần chính: DEX/AMM, vay-cho vay thế chấp vượt mức, stablecoin, phái sinh, vault, staking lỏng.",
        "Flash loan: vay không thế chấp nhưng phải trả trong cùng giao dịch.",
        "Rủi ro: lỗi hợp đồng, thanh lý, oracle, impermanent loss."
      ],
      quiz: [
        { q: "AMM như Uniswap xác định giá bằng cách nào?", o: ["Sổ lệnh do sàn quản lý", "Công thức toán học dựa trên lượng token trong quỹ thanh khoản", "Giá do Ethereum Foundation công bố", "Bỏ phiếu"], a: 1, e: "Ví dụ x × y = k: khi một token bị mua nhiều, giá của nó tăng." },
        { q: "Flash loan có đặc điểm gì?", o: ["Phải thế chấp 150%", "Không cần thế chấp nhưng phải trả lại trong cùng một giao dịch", "Chỉ ngân hàng mới dùng được", "Kỳ hạn 30 ngày"], a: 1, e: "Nếu không trả, giao dịch revert như chưa từng xảy ra." },
        { q: "Vì sao vay trong DeFi thường phải thế chấp vượt mức?", o: ["Vì không có xếp hạng tín dụng hay danh tính để đòi nợ", "Vì luật yêu cầu", "Để tăng phí gas", "Để trả lương cho validator"], a: 0, e: "Thế chấp vượt mức bảo vệ người cho vay khi giá biến động." }
      ]
    },
    {
      id: "stablecoins",
      title: "Stablecoin",
      min: 7,
      src: ["/stablecoins/"],
      tldr: "Stablecoin là token được thiết kế để giữ giá ổn định, thường bám theo 1 USD. Chúng mang ưu điểm của tiền mã hóa (nhanh, toàn cầu, lập trình được) mà không có sự biến động giá như ETH.",
      body: `
<h2>Vì sao cần stablecoin?</h2>
<p>ETH biến động mạnh nên khó dùng để trả lương hay định giá hàng hóa. Stablecoin giải quyết bằng cách giữ giá gần một tài sản ổn định. Hiện stablecoin là một trong những ứng dụng lớn nhất của Ethereum, với hàng trăm tỷ USD lưu thông trên Ethereum và các L2.</p>

<h2>Các loại stablecoin</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Cách giữ giá</th><th>Ví dụ</th><th>Đánh đổi</th></tr>
<tr><td>Thế chấp bằng tiền pháp định</td><td>Mỗi token được đảm bảo bằng 1 USD hoặc trái phiếu chính phủ do công ty giữ</td><td>USDC, USDT, PYUSD</td><td>Phải tin công ty phát hành; có thể bị đóng băng</td></tr>
<tr><td>Thế chấp bằng tiền mã hóa</td><td>Người dùng khóa ETH hoặc tài sản khác vượt mức để đúc</td><td>DAI / USDS, LUSD</td><td>Phi tập trung hơn nhưng kém hiệu quả vốn</td></tr>
<tr><td>Thế chấp bằng hàng hóa</td><td>Đảm bảo bằng vàng hoặc hàng hóa khác</td><td>PAXG, XAUT</td><td>Phụ thuộc bên giữ vàng</td></tr>
<tr><td>Thuật toán</td><td>Cơ chế cung cầu tự động, ít hoặc không thế chấp</td><td>(nhiều dự án đã sụp đổ)</td><td>Rủi ro mất neo rất cao</td></tr>
</table></div>

<h2>Dùng stablecoin để làm gì?</h2>
<ul>
  <li><strong>Gửi tiền quốc tế</strong> nhanh, rẻ, đặc biệt trên Layer 2.</li>
  <li><strong>Bảo vệ khỏi lạm phát</strong> ở những nơi đồng nội tệ mất giá.</li>
  <li><strong>Giao dịch và DeFi:</strong> cặp giao dịch chính, gửi tiết kiệm lấy lãi.</li>
  <li><strong>Thanh toán thương mại</strong> và trả lương.</li>
</ul>
<div class="callout warn"><b>Rủi ro mất neo (depeg)</b><p>Stablecoin không phải lúc nào cũng đúng 1 USD. Sự kiện ngân hàng giữ dự trữ gặp vấn đề, thế chấp sụt giá, hoặc cơ chế thuật toán thất bại đều có thể khiến giá lệch khỏi neo.</p></div>`,
      keys: [
        "Stablecoin giữ giá ổn định, thường neo 1 USD.",
        "Bốn loại: thế chấp pháp định, thế chấp crypto, thế chấp hàng hóa, thuật toán.",
        "Ứng dụng: chuyển tiền quốc tế, chống lạm phát, DeFi, thanh toán.",
        "Rủi ro: mất neo, rủi ro bên phát hành."
      ],
      quiz: [
        { q: "USDC thuộc loại stablecoin nào?", o: ["Thế chấp bằng tiền pháp định", "Thuật toán", "Thế chấp bằng vàng", "Thế chấp bằng ETH"], a: 0, e: "USDC được đảm bảo bằng tiền mặt và trái phiếu ngắn hạn do Circle quản lý." },
        { q: "Stablecoin thế chấp bằng crypto như DAI thường yêu cầu:", o: ["Thế chấp đúng 100%", "Thế chấp vượt mức", "Không cần thế chấp", "KYC bắt buộc"], a: 1, e: "Thế chấp vượt mức giúp chịu được biến động giá tài sản thế chấp." },
        { q: "Loại stablecoin nào có lịch sử rủi ro mất neo cao nhất?", o: ["Thế chấp pháp định", "Thế chấp vàng", "Thuật toán", "Thế chấp ETH"], a: 2, e: "Nhiều stablecoin thuật toán đã sụp đổ khi niềm tin giảm." }
      ]
    },
    {
      id: "payments",
      title: "Thanh toán trên Ethereum",
      min: 5,
      src: ["/payments/"],
      tldr: "Ethereum cho phép gửi tiền toàn cầu trong vài giây với phí thấp (nhất là trên Layer 2), không cần ngân hàng trung gian, không bị giới hạn giờ làm việc.",
      body: `
<h2>Vì sao thanh toán trên Ethereum hấp dẫn?</h2>
<ul>
  <li><strong>Không biên giới:</strong> gửi cho người ở bất kỳ quốc gia nào giống như gửi cho hàng xóm.</li>
  <li><strong>Nhanh:</strong> vài giây trên L2, khoảng 12 giây cho một khối trên mainnet; trạng thái "finalized" sau khoảng 13 phút.</li>
  <li><strong>Rẻ:</strong> phí trên L2 thường chỉ vài cent hoặc thấp hơn.</li>
  <li><strong>Lập trình được:</strong> thanh toán theo dòng (streaming), trả lương tự động, ký quỹ (escrow), chia doanh thu.</li>
  <li><strong>Mở 24/7</strong>, kể cả cuối tuần và ngày lễ.</li>
</ul>

<h2>Ví dụ</h2>
<div class="compare">
  <div><h4>Kiều hối</h4><p>Người lao động ở nước ngoài gửi USDC về nhà với phí thấp thay vì trả 5–10% qua dịch vụ chuyển tiền.</p></div>
  <div><h4>Freelancer</h4><p>Nhận thanh toán từ khách quốc tế ngay lập tức.</p></div>
  <div><h4>Thương mại</h4><p>Cửa hàng nhận stablecoin, tránh phí thẻ và rủi ro hoàn tiền (chargeback).</p></div>
</div>

<h2>Lưu ý</h2>
<ul>
  <li>Thanh toán không thể hoàn tác, cần kiểm tra địa chỉ và mạng.</li>
  <li>Quy định thuế và pháp lý về tiền mã hóa khác nhau tùy quốc gia.</li>
  <li>Người nhận cần một cách đổi ra tiền địa phương (off-ramp) nếu muốn.</li>
</ul>`,
      keys: [
        "Thanh toán trên Ethereum nhanh, rẻ (đặc biệt L2), không biên giới, 24/7.",
        "Stablecoin là phương tiện thanh toán phổ biến nhất.",
        "Thanh toán có thể lập trình: streaming, escrow, chia doanh thu."
      ],
      quiz: [
        { q: "Ưu điểm \"lập trình được\" của thanh toán trên Ethereum là gì?", o: ["Có thể hoàn tiền bất cứ lúc nào", "Có thể tạo thanh toán tự động như trả lương theo dòng, ký quỹ", "Không cần ví", "Không cần Internet"], a: 1, e: "Hợp đồng thông minh tự động hóa logic thanh toán." },
        { q: "Khoảng bao lâu thì một giao dịch trên mainnet đạt trạng thái finalized?", o: ["1 giây", "Khoảng 13 phút (2 epoch)", "1 ngày", "7 ngày"], a: 1, e: "Finality cần khoảng 2 epoch, mỗi epoch 6,4 phút." }
      ]
    },
    {
      id: "rwa",
      title: "Tài sản token hóa (RWA)",
      min: 6,
      src: ["/real-world-assets/", "/organizations/enterprise/tokenization/"],
      tldr: "Token hóa là đưa quyền sở hữu tài sản thật như trái phiếu, cổ phiếu, quỹ, bất động sản lên blockchain dưới dạng token. Nhờ đó tài sản có thể chia nhỏ, giao dịch 24/7 và thanh toán gần như tức thì.",
      body: `
<h2>Token hóa là gì?</h2>
<p>Một tổ chức giữ tài sản thật (ví dụ trái phiếu chính phủ Mỹ) và phát hành token trên Ethereum đại diện cho quyền sở hữu. Token có thể chuyển, giao dịch và dùng trong các ứng dụng khác như một tài sản số thông thường.</p>

<h2>Lợi ích</h2>
<ul>
  <li><strong>Chia nhỏ:</strong> mua một phần nhỏ của tài sản đắt tiền với số vốn thấp.</li>
  <li><strong>Thanh toán nhanh:</strong> từ T+2 xuống gần như tức thì.</li>
  <li><strong>Minh bạch:</strong> lịch sử sở hữu và tổng cung kiểm chứng được.</li>
  <li><strong>Kết hợp với DeFi:</strong> dùng trái phiếu token hóa làm tài sản thế chấp.</li>
</ul>

<h2>Ví dụ</h2>
<p>Các quỹ thị trường tiền tệ và trái phiếu chính phủ token hóa từ những tổ chức tài chính lớn (như BlackRock BUIDL, Franklin Templeton) đã chạy trên Ethereum. Stablecoin thế chấp pháp định cũng có thể coi là dạng token hóa sớm nhất.</p>

<h2>Thách thức</h2>
<ul>
  <li>Vẫn phải tin bên giữ tài sản thật và khung pháp lý.</li>
  <li>Thường kèm danh sách cho phép (whitelist), chỉ người đã KYC mới nắm giữ được.</li>
  <li>Quyền riêng tư cho tổ chức: đây là lý do có các giải pháp riêng tư và L2 doanh nghiệp.</li>
</ul>`,
      keys: [
        "RWA: tài sản thật được đại diện bằng token trên Ethereum.",
        "Lợi ích: chia nhỏ, thanh toán nhanh, minh bạch, dùng được trong DeFi.",
        "Vẫn cần tin bên giữ tài sản và tuân thủ pháp lý."
      ],
      quiz: [
        { q: "Lợi ích nào là của token hóa tài sản?", o: ["Không cần ai giữ tài sản thật", "Chia nhỏ quyền sở hữu và thanh toán gần như tức thì", "Loại bỏ mọi quy định pháp lý", "Giá luôn tăng"], a: 1, e: "Token hóa giúp chia nhỏ và giao dịch nhanh, nhưng vẫn cần bên giữ tài sản." },
        { q: "Vì sao nhiều token RWA có danh sách cho phép (whitelist)?", o: ["Để giảm phí gas", "Để tuân thủ quy định chứng khoán và KYC", "Vì Ethereum yêu cầu", "Để tránh bị hack"], a: 1, e: "Chứng khoán token hóa vẫn chịu luật chứng khoán." }
      ]
    },
    {
      id: "prediction-markets",
      title: "Thị trường dự đoán",
      min: 5,
      src: ["/prediction-markets/"],
      tldr: "Thị trường dự đoán cho phép mọi người đặt tiền vào kết quả của sự kiện tương lai. Giá của mỗi lựa chọn phản ánh xác suất mà đám đông tin rằng sự kiện sẽ xảy ra.",
      body: `
<h2>Cách hoạt động</h2>
<p>Mỗi câu hỏi (ví dụ "Sự kiện X có xảy ra trước ngày Y không?") có các cổ phần "Có" và "Không". Nếu "Có" đang giao dịch ở 0,70 USD, thị trường đang ước tính khoảng 70% khả năng sự kiện xảy ra. Khi có kết quả, cổ phần đúng trả 1 USD, cổ phần sai về 0.</p>
<div class="flow arrows">
  <div><b>Tạo thị trường</b>Câu hỏi + nguồn kết quả</div>
  <div><b>Giao dịch</b>Mua bán cổ phần Có/Không</div>
  <div><b>Phân giải</b>Oracle báo kết quả</div>
  <div><b>Thanh toán</b>Cổ phần đúng = 1 USD</div>
</div>

<h2>Vì sao làm trên blockchain?</h2>
<ul>
  <li>Ai cũng tham gia được, thị trường mở toàn cầu.</li>
  <li>Quỹ được giữ bởi hợp đồng, thanh toán tự động.</li>
  <li>Giá là tín hiệu thông tin công khai, hữu ích cho báo chí và nghiên cứu.</li>
</ul>

<h2>Thách thức</h2>
<ul>
  <li><strong>Bài toán oracle:</strong> ai quyết định kết quả và làm sao chống gian lận (ví dụ UMA dùng cơ chế tranh chấp có bỏ phiếu).</li>
  <li>Thanh khoản thấp ở các thị trường nhỏ dễ bị thao túng.</li>
  <li>Quy định pháp luật về cá cược khác nhau tùy nơi.</li>
</ul>`,
      keys: [
        "Giá cổ phần phản ánh xác suất mà đám đông kỳ vọng.",
        "Hợp đồng giữ quỹ và thanh toán; oracle phân giải kết quả.",
        "Thách thức: oracle, thanh khoản, pháp lý."
      ],
      quiz: [
        { q: "Cổ phần \"Có\" có giá 0,30 USD nghĩa là:", o: ["Sự kiện chắc chắn không xảy ra", "Thị trường ước tính khoảng 30% khả năng xảy ra", "Phí là 30%", "Cổ phần đã hết hạn"], a: 1, e: "Vì cổ phần đúng trả 1 USD, giá phản ánh xác suất ngầm định." },
        { q: "Thành phần nào quyết định kết quả cuối cùng của thị trường dự đoán?", o: ["Validator", "Oracle hoặc cơ chế phân giải", "Người mua nhiều nhất", "Ví MetaMask"], a: 1, e: "Kết quả thế giới thực phải được đưa lên chuỗi bằng oracle." }
      ]
    },
    {
      id: "nft",
      title: "NFT: token không thể thay thế",
      min: 7,
      src: ["/nft/", "/developers/docs/standards/tokens/erc-721/"],
      tldr: "NFT là token duy nhất, đại diện cho quyền sở hữu một thứ cụ thể: tác phẩm số, vé sự kiện, vật phẩm game, tên miền. Mỗi NFT có ID riêng và không thể đổi ngang với NFT khác.",
      body: `
<h2>"Thay thế được" nghĩa là gì?</h2>
<div class="compare">
  <div><h4>Thay thế được (fungible)</h4><p>Tờ 100.000 đồng nào cũng như nhau; 1 ETH nào cũng như nhau. Chuẩn ERC-20.</p></div>
  <div><h4>Không thể thay thế (non-fungible)</h4><p>Mỗi vé xem hòa nhạc có số ghế riêng; mỗi bức tranh là duy nhất. Chuẩn ERC-721 (và ERC-1155 cho cả hai loại).</p></div>
</div>

<h2>NFT dùng để làm gì?</h2>
<ul>
  <li><strong>Nghệ thuật và sưu tầm số:</strong> nghệ sĩ bán trực tiếp và có thể nhận tiền bản quyền khi tác phẩm được bán lại (nếu chợ hỗ trợ).</li>
  <li><strong>Vé và thẻ thành viên:</strong> khó làm giả, dễ kiểm tra.</li>
  <li><strong>Vật phẩm game:</strong> thuộc về người chơi, có thể bán ngoài game.</li>
  <li><strong>Tên miền:</strong> ENS (<code>ten.eth</code>) là NFT.</li>
  <li><strong>Chứng chỉ, bằng cấp, kỷ niệm tham dự</strong> (POAP).</li>
  <li><strong>Vị thế DeFi:</strong> vị thế thanh khoản Uniswap v3 là NFT.</li>
</ul>

<h2>NFT thực sự lưu gì?</h2>
<p>Hợp đồng NFT thường chỉ lưu <strong>ID</strong>, <strong>chủ sở hữu</strong> và một đường dẫn tới <strong>metadata</strong> (tên, mô tả, link ảnh). Ảnh thường nằm ngoài chuỗi, trên IPFS hoặc Arweave. Nếu ảnh lưu trên máy chủ thường và máy chủ ngừng hoạt động, NFT có thể "mất hình".</p>
<div class="callout info"><b>Sở hữu NFT ≠ sở hữu bản quyền</b><p>Mua NFT thường chỉ cho bạn quyền sở hữu token, còn quyền tác giả và quyền thương mại phụ thuộc vào điều khoản mà người tạo đưa ra.</p></div>`,
      keys: [
        "NFT là token duy nhất (ERC-721/ERC-1155), mỗi token có ID riêng.",
        "Ứng dụng: nghệ thuật, vé, vật phẩm game, ENS, chứng chỉ, vị thế DeFi.",
        "Hợp đồng lưu ID, chủ và link metadata; ảnh thường nằm trên IPFS/Arweave.",
        "Sở hữu NFT không tự động có bản quyền tác phẩm."
      ],
      quiz: [
        { q: "Chuẩn token phổ biến cho NFT là:", o: ["ERC-20", "ERC-721", "EIP-1559", "ERC-4626"], a: 1, e: "ERC-721 cho NFT; ERC-1155 hỗ trợ cả hai loại." },
        { q: "Ảnh của NFT thường được lưu ở đâu?", o: ["Luôn nằm trong hợp đồng", "Thường ngoài chuỗi như IPFS hoặc Arweave, hợp đồng lưu đường dẫn", "Trong ví của bạn", "Trên máy chủ Ethereum Foundation"], a: 1, e: "Lưu ảnh trên chuỗi rất đắt nên phần lớn chỉ lưu link." },
        { q: "Tên miền ENS như alice.eth là:", o: ["Một token ERC-20", "Một NFT", "Một địa chỉ IP", "Một validator"], a: 1, e: "Mỗi tên ENS là một NFT có thể chuyển nhượng." }
      ]
    },
    {
      id: "dao",
      title: "DAO: tổ chức tự trị phi tập trung",
      min: 7,
      src: ["/dao/"],
      tldr: "DAO là tổ chức do cộng đồng sở hữu và quản lý, quy tắc và quỹ nằm trong hợp đồng thông minh. Thành viên bỏ phiếu cho các đề xuất; khi đề xuất được thông qua, hợp đồng có thể tự động thực thi.",
      body: `
<h2>So sánh với tổ chức truyền thống</h2>
<div class="table-wrap"><table>
<tr><th>Tổ chức truyền thống</th><th>DAO</th></tr>
<tr><td>Thứ bậc, ban giám đốc quyết định</td><td>Phẳng hơn, thành viên bỏ phiếu</td></tr>
<tr><td>Quỹ trong tài khoản ngân hàng</td><td>Quỹ trong hợp đồng hoặc ví multisig</td></tr>
<tr><td>Sổ sách nội bộ</td><td>Mọi giao dịch và phiếu bầu công khai</td></tr>
<tr><td>Thành viên thường trong một quốc gia</td><td>Thành viên toàn cầu</td></tr>
</table></div>

<h2>Các mô hình thành viên</h2>
<ul>
  <li><strong>Dựa trên token:</strong> nắm token quản trị (ví dụ UNI, ENS) để bỏ phiếu. Mở cho mọi người nhưng người giữ nhiều có ảnh hưởng lớn.</li>
  <li><strong>Dựa trên cổ phần (share):</strong> phải được chấp nhận vào DAO, thường góp vốn hoặc công sức (Moloch DAO).</li>
  <li><strong>Dựa trên uy tín (reputation):</strong> quyền bỏ phiếu đến từ đóng góp, không mua bán được.</li>
</ul>

<h2>Bỏ phiếu như thế nào?</h2>
<ul>
  <li><strong>Trên chuỗi (on-chain):</strong> phiếu là giao dịch, kết quả tự thực thi (Governor, Tally).</li>
  <li><strong>Ngoài chuỗi (off-chain):</strong> ký tin nhắn miễn phí trên Snapshot, sau đó multisig thực thi.</li>
  <li><strong>Ủy quyền (delegation):</strong> người giữ token ủy quyền phiếu cho đại biểu am hiểu.</li>
</ul>

<h2>Ví dụ DAO</h2>
<p>Quỹ chung của giao thức (Uniswap, Aave, ENS DAO), quỹ tài trợ hàng hóa công cộng, câu lạc bộ đầu tư, nhóm sưu tầm. Vụ The DAO 2016 là bài học lớn: lỗi reentrancy khiến khoảng 3,6 triệu ETH bị rút và dẫn tới hard fork.</p>
<div class="callout warn"><b>Rủi ro</b><p>Tấn công quản trị (mua hoặc vay token để thông qua đề xuất xấu), tỷ lệ tham gia bỏ phiếu thấp, tư cách pháp lý chưa rõ.</p></div>`,
      keys: [
        "DAO: quy tắc và quỹ nằm trong hợp đồng, thành viên bỏ phiếu.",
        "Mô hình thành viên: token, share, reputation.",
        "Bỏ phiếu on-chain (tự thực thi) hoặc off-chain (Snapshot), có thể ủy quyền.",
        "Rủi ro: tấn công quản trị, tham gia thấp, pháp lý."
      ],
      quiz: [
        { q: "Snapshot thường được dùng để:", o: ["Bỏ phiếu off-chain bằng chữ ký miễn phí", "Chụp ảnh blockchain", "Đào coin", "Lưu trữ NFT"], a: 0, e: "Snapshot cho bỏ phiếu không tốn gas; kết quả sau đó được thực thi riêng." },
        { q: "Vụ The DAO 2016 bị khai thác bằng lỗi gì?", o: ["Lộ khóa bí mật", "Reentrancy", "Tấn công 51%", "Phishing"], a: 1, e: "Hàm rút tiền gọi ra ngoài trước khi cập nhật số dư." },
        { q: "Rủi ro của DAO dựa trên token là:", o: ["Không ai bỏ phiếu được", "Người giữ nhiều token có ảnh hưởng lớn; có thể bị tấn công quản trị", "Không minh bạch", "Không có quỹ"], a: 1, e: "Một người mua hoặc vay đủ token có thể thông qua đề xuất có hại." }
      ]
    },
    {
      id: "identity",
      title: "Danh tính phi tập trung",
      min: 6,
      src: ["/decentralized-identity/"],
      tldr: "Danh tính phi tập trung cho phép bạn tự giữ và kiểm soát các thông tin định danh, chứng chỉ của mình thay vì phụ thuộc vào Google, Facebook hay một cơ quan duy nhất, và chỉ chia sẻ đúng điều cần chứng minh.",
      body: `
<h2>Vấn đề hiện nay</h2>
<p>Danh tính số của bạn nằm rải rác ở nhiều công ty. Họ có thể khóa tài khoản, làm lộ dữ liệu, hoặc buộc bạn chia sẻ nhiều hơn cần thiết (đưa cả CCCD chỉ để chứng minh đủ 18 tuổi).</p>

<h2>Các thành phần</h2>
<ul>
  <li><strong>Định danh (identifier):</strong> địa chỉ Ethereum, tên ENS hoặc DID (decentralized identifier).</li>
  <li><strong>Chứng nhận (attestation):</strong> một bên ký xác nhận một điều về bạn ("người này tốt nghiệp trường X"). Ví dụ Ethereum Attestation Service (EAS).</li>
  <li><strong>Ví danh tính:</strong> nơi bạn giữ các chứng nhận và chủ động trình ra.</li>
  <li><strong>Bằng chứng ZK:</strong> chứng minh thuộc tính (trên 18 tuổi, là người thật, là công dân) mà không lộ dữ liệu gốc.</li>
</ul>

<h2>Ứng dụng</h2>
<div class="compare">
  <div><h4>Đăng nhập không mật khẩu</h4><p>Sign-In with Ethereum (EIP-4361).</p></div>
  <div><h4>Chống tài khoản ảo</h4><p>Bằng chứng "là người thật" cho bỏ phiếu, airdrop công bằng.</p></div>
  <div><h4>Bằng cấp, chứng chỉ</h4><p>Kiểm tra được ngay, không cần gọi cho trường.</p></div>
  <div><h4>KYC tái sử dụng</h4><p>Xác minh một lần, dùng ở nhiều nơi mà không phải gửi lại giấy tờ.</p></div>
</div>`,
      keys: [
        "Người dùng tự giữ định danh và chứng nhận, chỉ chia sẻ điều cần chứng minh.",
        "Thành phần: identifier (địa chỉ, ENS, DID), attestation, ví danh tính, ZK proof.",
        "Ứng dụng: SIWE, chống Sybil, bằng cấp, KYC tái sử dụng."
      ],
      quiz: [
        { q: "\"Attestation\" trong danh tính phi tập trung là:", o: ["Một khóa bí mật", "Một xác nhận có chữ ký về một điều liên quan tới bạn", "Một loại phí gas", "Một block"], a: 1, e: "Ví dụ trường học ký xác nhận bạn đã tốt nghiệp." },
        { q: "Lợi ích của bằng chứng ZK khi xác minh tuổi là:", o: ["Chứng minh đủ tuổi mà không lộ ngày sinh hay số giấy tờ", "Tăng tốc mạng", "Miễn phí gas", "Xóa dữ liệu khỏi blockchain"], a: 0, e: "Chỉ tiết lộ đúng thuộc tính cần chứng minh." }
      ]
    },
    {
      id: "social-gaming",
      title: "Mạng xã hội và game",
      min: 6,
      src: ["/social-networks/", "/gaming/"],
      tldr: "Mạng xã hội phi tập trung cho bạn sở hữu danh tính, nội dung và danh sách người theo dõi. Game trên Ethereum cho người chơi sở hữu vật phẩm và có luật chơi công khai.",
      body: `
<h2>Mạng xã hội phi tập trung</h2>
<p>Trên mạng xã hội truyền thống, nếu bị khóa tài khoản bạn mất toàn bộ người theo dõi. Các giao thức như <strong>Farcaster</strong> và <strong>Lens</strong> ghi danh tính và quan hệ theo dõi gắn với ví của bạn. Bạn có thể dùng nhiều ứng dụng khách (client) khác nhau mà vẫn giữ nguyên danh tính và người theo dõi.</p>
<ul>
  <li>Không phụ thuộc thuật toán của một công ty.</li>
  <li>Trả tiền, tip trực tiếp cho người sáng tạo.</li>
  <li>Ứng dụng nhỏ (mini app) chạy ngay trong bảng tin.</li>
</ul>

<h2>Game trên Ethereum</h2>
<div class="compare">
  <div><h4>Sở hữu thật</h4><p>Vật phẩm là NFT hoặc token trong ví của bạn, có thể bán ở chợ ngoài game.</p></div>
  <div><h4>Luật chơi công khai</h4><p>Logic trong hợp đồng, nhà phát triển không thể âm thầm thay đổi tỉ lệ rơi đồ.</p></div>
  <div><h4>Game hoàn toàn trên chuỗi</h4><p>Toàn bộ trạng thái nằm trên blockchain ("autonomous worlds"); người khác có thể viết mod mở rộng.</p></div>
</div>
<p>Phần lớn game dùng Layer 2 hoặc chuỗi chuyên dụng để có phí thấp và tốc độ cao.</p>
<div class="callout warn"><b>Thận trọng với "chơi để kiếm tiền"</b><p>Nhiều mô hình play-to-earn phụ thuộc vào người chơi mới bỏ tiền vào và đã sụp đổ. Hãy chơi vì niềm vui, không vì lời hứa lợi nhuận.</p></div>`,
      keys: [
        "Farcaster, Lens: danh tính và người theo dõi gắn với ví, dùng được ở nhiều client.",
        "Game: vật phẩm thuộc người chơi, luật chơi công khai trong hợp đồng.",
        "Cảnh giác mô hình play-to-earn không bền vững."
      ],
      quiz: [
        { q: "Lợi ích chính của mạng xã hội phi tập trung như Farcaster là:", o: ["Không có quảng cáo", "Bạn giữ danh tính và người theo dõi khi chuyển sang client khác", "Miễn phí hoàn toàn", "Ẩn danh tuyệt đối"], a: 1, e: "Quan hệ xã hội không bị khóa trong một ứng dụng." },
        { q: "Trong game trên Ethereum, vật phẩm thường là:", o: ["Dữ liệu trên máy chủ nhà phát hành", "Token hoặc NFT trong ví người chơi", "Bản quyền của Ethereum Foundation", "Không thể giao dịch"], a: 1, e: "Người chơi thực sự sở hữu vật phẩm." }
      ]
    },
    {
      id: "ai-agents",
      title: "AI agent trên Ethereum",
      min: 5,
      src: ["/ai-agents/"],
      tldr: "AI agent là chương trình AI có thể tự hành động. Kết hợp với Ethereum, agent có ví riêng để giữ và chi tiền, tương tác với DeFi và trả tiền cho dịch vụ, trong giới hạn quy tắc do người dùng đặt ra.",
      body: `
<h2>Vì sao AI cần blockchain?</h2>
<ul>
  <li><strong>Tiền lập trình được:</strong> agent không mở được tài khoản ngân hàng, nhưng có thể có ví Ethereum.</li>
  <li><strong>Thanh toán vi mô giữa máy với máy:</strong> trả vài cent cho một API hay một lượt dữ liệu.</li>
  <li><strong>Quy tắc kiểm chứng được:</strong> ví thông minh giới hạn agent chỉ được chi bao nhiêu, cho ai, khi nào.</li>
  <li><strong>Danh tính và uy tín:</strong> lịch sử hành động công khai giúp đánh giá agent đáng tin hay không.</li>
</ul>

<h2>Ví dụ</h2>
<div class="compare">
  <div><h4>Quản lý tài sản</h4><p>Agent tự cân bằng danh mục, chuyển tiền gửi sang nơi lãi tốt hơn trong giới hạn bạn đặt.</p></div>
  <div><h4>Giao dịch bằng ngôn ngữ tự nhiên</h4><p>"Đổi 100 USDC sang ETH trên Base" và agent tạo giao dịch để bạn duyệt.</p></div>
  <div><h4>Agent trả tiền cho agent</h4><p>Mua dữ liệu, sức tính toán, dịch vụ bằng stablecoin.</p></div>
</div>

<h2>Rủi ro</h2>
<ul>
  <li>AI có thể hiểu sai, bị lừa bằng prompt injection hoặc tương tác với hợp đồng độc hại.</li>
  <li>Luôn đặt giới hạn chi tiêu, dùng ví riêng với số tiền nhỏ và yêu cầu duyệt cho thao tác lớn.</li>
</ul>`,
      keys: [
        "AI agent có thể có ví Ethereum để tự chi tiêu và tương tác với ứng dụng.",
        "Ví thông minh đặt giới hạn kiểm chứng được cho agent.",
        "Rủi ro: hiểu sai, prompt injection; luôn giới hạn quyền."
      ],
      quiz: [
        { q: "Cách an toàn để cho AI agent dùng tiền trên Ethereum là:", o: ["Đưa cho nó cụm từ khôi phục ví chính", "Dùng ví thông minh có giới hạn chi tiêu và ví riêng với số tiền nhỏ", "Cho phép không giới hạn", "Gửi toàn bộ tài sản cho agent"], a: 1, e: "Giới hạn quyền giúp hạn chế thiệt hại nếu agent mắc lỗi." },
        { q: "Vì sao Ethereum phù hợp với thanh toán giữa máy với máy?", o: ["Vì máy không cần Internet", "Vì tiền lập trình được, không cần tài khoản ngân hàng, hỗ trợ thanh toán nhỏ", "Vì giao dịch miễn phí", "Vì AI tự đào ETH"], a: 1, e: "Agent chỉ cần một ví, không cần hồ sơ ngân hàng." }
      ]
    },
    {
      id: "desci-refi",
      title: "DeSci và ReFi",
      min: 6,
      src: ["/desci/", "/refi/"],
      tldr: "DeSci (khoa học phi tập trung) dùng Ethereum để tài trợ, công bố và ghi nhận nghiên cứu một cách mở. ReFi (tài chính tái tạo) dùng công cụ tài chính trên chuỗi để tài trợ cho môi trường và lợi ích xã hội.",
      body: `
<h2>DeSci: khoa học phi tập trung</h2>
<p>Khoa học truyền thống gặp nhiều vấn đề: tài trợ tập trung và chậm, bài báo bị khóa sau tường phí, dữ liệu khó tái lập, người đóng góp không được ghi nhận đầy đủ.</p>
<ul>
  <li><strong>Tài trợ mới:</strong> quỹ cộng đồng, DAO nghiên cứu (như VitaDAO cho nghiên cứu tuổi thọ), quadratic funding.</li>
  <li><strong>Xuất bản mở:</strong> lưu dữ liệu, bài báo trên mạng lưu trữ phi tập trung với dấu thời gian không thể sửa.</li>
  <li><strong>Sở hữu trí tuệ:</strong> IP-NFT đại diện quyền với kết quả nghiên cứu.</li>
  <li><strong>Ghi nhận đóng góp:</strong> attestation cho người bình duyệt, người thu thập dữ liệu.</li>
</ul>

<h2>ReFi: tài chính tái tạo</h2>
<p>ReFi hướng tới hệ thống kinh tế không chỉ tạo lợi nhuận mà còn phục hồi môi trường và cộng đồng.</p>
<ul>
  <li><strong>Tín chỉ carbon trên chuỗi:</strong> minh bạch, chống tính hai lần.</li>
  <li><strong>Tài trợ hàng hóa công cộng:</strong> Gitcoin Grants, quadratic funding, retroactive funding (Optimism RetroPGF).</li>
  <li><strong>Tiền tệ cộng đồng</strong> và các dự án tác động xã hội.</li>
</ul>
<div class="callout info"><b>Quadratic funding</b><p>Quỹ đối ứng được chia theo số <em>người</em> ủng hộ hơn là số <em>tiền</em>. Nhiều người góp ít sẽ nhận đối ứng lớn hơn một người góp nhiều, giúp các dự án được cộng đồng thực sự ủng hộ.</p></div>`,
      keys: [
        "DeSci: tài trợ, xuất bản mở, IP-NFT, ghi nhận đóng góp khoa học.",
        "ReFi: tín chỉ carbon minh bạch, tài trợ hàng hóa công cộng.",
        "Quadratic funding ưu tiên số lượng người ủng hộ hơn số tiền."
      ],
      quiz: [
        { q: "Quadratic funding phân bổ quỹ đối ứng dựa nhiều nhất vào:", o: ["Số tiền của nhà tài trợ lớn nhất", "Số lượng người ủng hộ", "Tuổi của dự án", "Số lượng token phát hành"], a: 1, e: "Nhiều người ủng hộ nhỏ cho thấy cộng đồng thực sự cần dự án." },
        { q: "VitaDAO là ví dụ của:", o: ["ReFi", "DeSci", "Game", "Stablecoin"], a: 1, e: "VitaDAO tài trợ nghiên cứu tuổi thọ theo mô hình DAO." }
      ]
    },
    {
      id: "restaking",
      title: "Restaking",
      min: 5,
      src: ["/restaking/"],
      tldr: "Restaking cho phép dùng ETH đã stake để bảo mật thêm cho các dịch vụ khác (như oracle, cầu, lớp dữ liệu), đổi lại nhận thêm phần thưởng nhưng chịu thêm rủi ro bị phạt.",
      body: `
<h2>Ý tưởng</h2>
<p>Một dịch vụ mới muốn được bảo mật bằng nhiều tài sản đảm bảo thường phải tự phát hành token và thu hút người stake. Restaking cho phép dịch vụ "thuê" bảo mật từ ETH đã stake. Người restake đồng ý tuân theo thêm quy tắc của dịch vụ; vi phạm sẽ bị phạt (slash) một phần ETH.</p>
<div class="flow arrows">
  <div><b>Stake ETH</b>Bảo mật Ethereum</div>
  <div><b>Restake</b>Đăng ký bảo mật thêm dịch vụ (AVS)</div>
  <div><b>Thưởng thêm</b>Từ các dịch vụ đó</div>
</div>
<p>Giao thức tiêu biểu: EigenLayer, Symbiotic, Karak. Các dịch vụ được bảo mật thường gọi là AVS (actively validated services).</p>

<h2>Rủi ro</h2>
<ul>
  <li><strong>Phạt chồng phạt:</strong> một lỗi có thể bị slash ở nhiều nơi.</li>
  <li><strong>Rủi ro hợp đồng</strong> của giao thức restaking.</li>
  <li><strong>Rủi ro hệ thống:</strong> nếu quá nhiều ETH bị ràng buộc vào cùng dịch vụ, sự cố ở đó có thể ảnh hưởng tới Ethereum. Đây là điều Vitalik từng cảnh báo là "đừng làm quá tải đồng thuận của Ethereum".</li>
</ul>`,
      keys: [
        "Restaking dùng ETH đã stake để bảo mật thêm cho dịch vụ khác (AVS).",
        "Nhận thêm thưởng nhưng chịu thêm rủi ro slash.",
        "Cần cẩn trọng với rủi ro hệ thống."
      ],
      quiz: [
        { q: "Người restake nhận thêm phần thưởng đổi lại:", o: ["Không có rủi ro gì", "Chịu thêm rủi ro bị phạt theo quy tắc của dịch vụ khác", "Mất quyền rút ETH vĩnh viễn", "Phải đào thêm"], a: 1, e: "Restaking mở rộng cả lợi ích lẫn rủi ro slashing." },
        { q: "AVS trong restaking là gì?", o: ["Một loại ví", "Dịch vụ được bảo mật bằng ETH restake", "Một testnet", "Một opcode"], a: 1, e: "Actively validated services: oracle, cầu, lớp DA… dùng bảo mật thuê." }
      ]
    },
    {
      id: "enterprise",
      title: "Ethereum cho doanh nghiệp và tổ chức",
      min: 6,
      src: ["/organizations/", "/organizations/enterprise/", "/organizations/enterprise/enterprise-l2s/", "/organizations/enterprise/privacy/"],
      tldr: "Doanh nghiệp, tổ chức tài chính và khu vực công dùng Ethereum cho thanh toán, token hóa tài sản, chuỗi cung ứng và tài chính trên chuỗi; thường kết hợp L2 riêng và công cụ bảo mật dữ liệu để đáp ứng yêu cầu tuân thủ.",
      body: `
<h2>Vì sao doanh nghiệp chọn Ethereum công khai?</h2>
<ul>
  <li><strong>Trung lập:</strong> không phụ thuộc vào nền tảng của đối thủ cạnh tranh.</li>
  <li><strong>An toàn đã được kiểm chứng:</strong> chạy liên tục từ 2015, bảo vệ lượng tài sản rất lớn.</li>
  <li><strong>Thanh khoản và hệ sinh thái:</strong> stablecoin, DeFi, công cụ, lập trình viên sẵn có.</li>
  <li><strong>Khả năng tương tác:</strong> tài sản trên Ethereum dễ kết nối với các ứng dụng khác.</li>
</ul>

<h2>Mô hình phổ biến</h2>
<div class="table-wrap"><table>
<tr><th>Mô hình</th><th>Mô tả</th></tr>
<tr><td>Dùng trực tiếp mainnet hoặc L2 công khai</td><td>Phát hành token, nhận thanh toán stablecoin.</td></tr>
<tr><td>L2 doanh nghiệp</td><td>Rollup riêng do doanh nghiệp vận hành, tùy chỉnh quyền truy cập, vẫn thanh toán trên Ethereum.</td></tr>
<tr><td>Công nghệ riêng tư</td><td>ZK proof, mã hóa, kênh riêng để ẩn dữ liệu kinh doanh nhưng vẫn chứng minh được tuân thủ.</td></tr>
</table></div>

<h2>Đối tượng</h2>
<ul>
  <li><strong>Tổ chức tài chính:</strong> quỹ token hóa, thanh toán bù trừ, tài chính trên chuỗi.</li>
  <li><strong>Khu vực công và NGO:</strong> phân phối viện trợ minh bạch, hồ sơ công khai.</li>
  <li><strong>Doanh nghiệp nhỏ:</strong> nhận thanh toán quốc tế, chương trình khách hàng thân thiết.</li>
  <li><strong>Nhà sáng lập:</strong> xây sản phẩm trên hạ tầng mở, tiếp cận người dùng toàn cầu.</li>
</ul>
<p>Năm 2016, Enterprise Ethereum Alliance (EEA) được thành lập để phát triển tiêu chuẩn cho doanh nghiệp dùng Ethereum.</p>`,
      keys: [
        "Doanh nghiệp chọn Ethereum vì trung lập, an toàn, hệ sinh thái lớn, dễ tương tác.",
        "Mô hình: dùng L1/L2 công khai, L2 doanh nghiệp, công nghệ riêng tư.",
        "Đối tượng: tài chính, khu vực công, doanh nghiệp nhỏ, nhà sáng lập."
      ],
      quiz: [
        { q: "\"L2 doanh nghiệp\" là gì?", o: ["Một blockchain không liên quan Ethereum", "Rollup do doanh nghiệp vận hành, tùy chỉnh quyền truy cập nhưng thanh toán trên Ethereum", "Một sàn giao dịch", "Một loại ví"], a: 1, e: "Kết hợp quyền kiểm soát riêng với bảo mật của Ethereum." },
        { q: "Doanh nghiệp giải quyết nhu cầu bảo mật dữ liệu trên chuỗi công khai bằng:", o: ["Không dùng blockchain", "ZK proof, mã hóa và các giải pháp riêng tư", "Xóa dữ liệu sau mỗi khối", "Dùng testnet"], a: 1, e: "Chứng minh tuân thủ mà không công khai dữ liệu kinh doanh." }
      ]
    }
  ]
});
