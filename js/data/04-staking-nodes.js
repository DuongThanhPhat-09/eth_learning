window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "staking",
  no: 4,
  group: "Dành cho mọi người",
  level: "Trung bình",
  title: "Staking, node và năng lượng",
  desc: "Staking là gì và có những cách nào (solo, SaaS, pool, sàn), cách rút tiền, chạy node của riêng bạn và vì sao Ethereum tiêu thụ rất ít năng lượng.",
  lessons: [
    {
      id: "staking-overview",
      title: "Staking là gì?",
      min: 7,
      src: ["/staking/"],
      tldr: "Staking là khóa ETH làm tài sản đảm bảo để trở thành validator, giúp xác thực khối và bảo vệ Ethereum. Đổi lại bạn nhận phần thưởng bằng ETH; nếu gian lận hoặc vận hành kém sẽ bị phạt.",
      body: `
<h2>Vì sao stake?</h2>
<ul>
  <li><strong>Nhận thưởng:</strong> khoảng vài phần trăm mỗi năm, tùy tổng lượng ETH đang stake trên mạng (càng nhiều người stake, tỷ lệ càng thấp).</li>
  <li><strong>Bảo mật mạng:</strong> càng nhiều ETH được stake, tấn công Ethereum càng tốn kém.</li>
  <li><strong>Phi tập trung:</strong> nhiều người stake độc lập giúp mạng khó bị một nhóm kiểm soát.</li>
</ul>

<h2>Validator làm gì?</h2>
<ul>
  <li><strong>Attest (bỏ phiếu):</strong> mỗi epoch (6,4 phút), mỗi validator bỏ phiếu xác nhận khối mà nó thấy là đúng.</li>
  <li><strong>Đề xuất khối:</strong> thỉnh thoảng được chọn ngẫu nhiên để đề xuất khối mới.</li>
  <li><strong>Sync committee:</strong> thỉnh thoảng tham gia ủy ban hỗ trợ light client.</li>
</ul>

<h2>Các cách stake</h2>
<div class="table-wrap"><table>
<tr><th>Cách</th><th>Tối thiểu</th><th>Bạn giữ khóa?</th><th>Mức độ kỹ thuật</th><th>Ảnh hưởng tới phi tập trung</th></tr>
<tr><td>Solo staking (tại nhà)</td><td>32 ETH</td><td>Có, hoàn toàn</td><td>Cao</td><td>Tốt nhất</td></tr>
<tr><td>Staking as a service (SaaS)</td><td>32 ETH</td><td>Giữ khóa rút; bên vận hành giữ khóa ký</td><td>Thấp</td><td>Trung bình</td></tr>
<tr><td>Pooled / liquid staking</td><td>Rất nhỏ</td><td>Không; nhận token đại diện</td><td>Rất thấp</td><td>Phụ thuộc pool</td></tr>
<tr><td>Sàn tập trung</td><td>Tùy sàn</td><td>Không</td><td>Không cần</td><td>Kém nhất</td></tr>
</table></div>

<h2>Rủi ro</h2>
<ul>
  <li><strong>Phạt nhẹ khi offline:</strong> mất một phần thưởng tương đương lúc online.</li>
  <li><strong>Slashing:</strong> nếu validator ký hai khối khác nhau cùng một slot hoặc bỏ phiếu mâu thuẫn, nó bị phạt nặng và bị loại khỏi mạng.</li>
  <li><strong>Rủi ro hợp đồng / bên thứ ba</strong> khi dùng pool, SaaS hoặc sàn.</li>
  <li><strong>Giá ETH biến động.</strong></li>
</ul>
<div class="callout info"><b>Từ Pectra</b><p>EIP-7251 nâng số dư hiệu dụng tối đa của một validator từ 32 lên 2048 ETH. Người stake nhiều có thể gom validator, và phần thưởng có thể tự cộng dồn (compounding) thay vì bị rút tự động khi vượt 32 ETH.</p></div>`,
      keys: [
        "Stake = khóa ETH làm validator; nhận thưởng, chịu phạt nếu offline hoặc gian lận.",
        "Validator attest mỗi epoch, đôi khi đề xuất khối, tham gia sync committee.",
        "Bốn cách: solo, SaaS, pool/liquid staking, sàn; solo tốt nhất cho phi tập trung.",
        "Pectra cho phép số dư hiệu dụng tối đa 2048 ETH."
      ],
      quiz: [
        { q: "Cần tối thiểu bao nhiêu ETH để chạy một validator solo?", o: ["1 ETH", "16 ETH", "32 ETH", "2048 ETH"], a: 2, e: "32 ETH vẫn là mức tối thiểu để kích hoạt validator; 2048 là mức tối đa hiệu dụng sau Pectra." },
        { q: "Hành vi nào dẫn tới slashing?", o: ["Mất mạng vài giờ", "Ký hai khối khác nhau trong cùng một slot", "Không đề xuất được khối", "Rút tiền thưởng"], a: 1, e: "Ký mâu thuẫn là hành vi có thể gây hại cho mạng nên bị phạt nặng." },
        { q: "Cách stake nào tốt nhất cho phi tập trung của mạng?", o: ["Stake trên sàn", "Solo staking tại nhà", "Liquid staking qua pool lớn nhất", "Không stake"], a: 1, e: "Mỗi solo staker là một nhà vận hành độc lập." }
      ]
    },
    {
      id: "solo-staking",
      title: "Solo staking",
      min: 8,
      src: ["/staking/solo/", "/developers/docs/consensus-mechanisms/pos/keys/"],
      tldr: "Solo staking là tự chạy validator trên máy của mình với 32 ETH. Bạn nhận toàn bộ phần thưởng và giữ toàn quyền, nhưng phải duy trì phần cứng, phần mềm và giữ máy online.",
      body: `
<h2>Bạn cần gì?</h2>
<ul>
  <li><strong>32 ETH</strong> cho mỗi validator (có thể nhiều hơn cho một validator kiểu 0x02).</li>
  <li><strong>Máy tính chạy 24/7:</strong> CPU 4 nhân trở lên, RAM 16–32 GB, SSD NVMe 2–4 TB, mạng ổn định không giới hạn dung lượng.</li>
  <li><strong>Phần mềm:</strong> một execution client + một consensus client + validator client.</li>
  <li><strong>Kiến thức cơ bản</strong> về dòng lệnh, hoặc dùng công cụ "cắm là chạy" như DAppNode, Stereum, eth-docker, Sedge.</li>
</ul>

<h2>Các bước chính</h2>
<div class="flow arrows">
  <div><b>1 · Thử testnet</b>Chạy validator trên Hoodi</div>
  <div><b>2 · Đồng bộ node</b>EL + CL trên mainnet</div>
  <div><b>3 · Tạo khóa</b>Bằng deposit CLI hoặc Wagyu, ngoại tuyến</div>
  <div><b>4 · Nạp 32 ETH</b>Qua Staking Launchpad</div>
  <div><b>5 · Vận hành</b>Theo dõi, cập nhật client</div>
</div>

<h2>Hai loại khóa</h2>
<div class="compare">
  <div><h4>Khóa ký (signing key)</h4><p>Khóa BLS dùng hằng ngày để ký attestation và khối. Phải nằm trên máy chạy validator.</p></div>
  <div><h4>Khóa / địa chỉ rút (withdrawal)</h4><p>Quyết định ETH được rút về đâu. Nên trỏ tới một địa chỉ Ethereum bạn kiểm soát an toàn (ví phần cứng). Được suy ra từ cụm từ khôi phục riêng, cất ngoại tuyến.</p></div>
</div>

<h2>Thực hành tốt</h2>
<ul>
  <li><strong>Không bao giờ chạy cùng một khóa ký trên hai máy</strong> cùng lúc: đây là nguyên nhân phổ biến nhất gây slashing.</li>
  <li><strong>Chọn client thiểu số</strong> để tăng đa dạng client và giảm rủi ro cho chính bạn.</li>
  <li>Dùng UPS (bộ lưu điện), theo dõi bằng Grafana hoặc beaconcha.in.</li>
  <li>Offline vài giờ chỉ mất chút thưởng; không cần hoảng.</li>
</ul>
<div class="callout tip"><b>Nhóm nhỏ hơn 32 ETH?</b><p>Có các mô hình như Rocket Pool minipool hoặc Lido CSM cho phép vận hành node với ít ETH hơn, phần còn lại do pool cung cấp.</p></div>`,
      keys: [
        "Solo staking: tự chạy EL + CL + validator client với 32 ETH, máy online 24/7.",
        "Thử trước trên testnet Hoodi; nạp qua Staking Launchpad chính thức.",
        "Khóa ký dùng hằng ngày; địa chỉ rút quyết định ETH về đâu.",
        "Không chạy một khóa ký trên hai máy; ưu tiên client thiểu số."
      ],
      quiz: [
        { q: "Nguyên nhân phổ biến nhất khiến solo staker bị slashing là:", o: ["Mất điện", "Chạy cùng một khóa ký trên hai máy cùng lúc", "Dùng client thiểu số", "Rút thưởng"], a: 1, e: "Hai máy sẽ ký mâu thuẫn, kích hoạt slashing." },
        { q: "Testnet nào được khuyến nghị để tập chạy validator?", o: ["Sepolia", "Hoodi", "Ropsten", "Goerli"], a: 1, e: "Hoodi là testnet dành cho validator và staking." },
        { q: "Khóa ký (signing key) của validator dùng để:", o: ["Rút ETH", "Ký attestation và khối hằng ngày", "Đăng nhập Launchpad", "Mua ETH"], a: 1, e: "Địa chỉ rút mới quyết định nơi nhận ETH." }
      ]
    },
    {
      id: "pooled-saas",
      title: "Pooled staking, liquid staking và SaaS",
      min: 6,
      src: ["/staking/pools/", "/staking/saas/"],
      tldr: "Nếu không có 32 ETH hay không muốn tự vận hành, bạn có thể góp vào pool (thường nhận lại token staking lỏng như stETH, rETH) hoặc thuê dịch vụ vận hành validator (SaaS).",
      body: `
<h2>Pooled staking</h2>
<p>Nhiều người góp ETH vào hợp đồng của pool; pool chia thành các validator 32 ETH và giao cho các nhà vận hành. Bạn nhận lại <strong>liquid staking token (LST)</strong> đại diện cho phần của mình cộng phần thưởng.</p>
<ul>
  <li>Ví dụ: Lido (stETH), Rocket Pool (rETH), các pool khác.</li>
  <li><strong>Ưu điểm:</strong> không cần tối thiểu, không cần kỹ thuật, LST dùng được trong DeFi.</li>
  <li><strong>Rủi ro:</strong> lỗi hợp đồng, nhà vận hành bị slash, LST có thể giao dịch thấp hơn giá ETH, và rủi ro tập trung nếu một pool quá lớn.</li>
</ul>
<div class="callout warn"><b>Ngưỡng nguy hiểm</b><p>Nếu một thực thể kiểm soát trên 1/3 tổng stake, nó có thể ngăn mạng đạt finality; trên 2/3 có thể finalize theo ý mình. Vì vậy cộng đồng khuyến khích phân tán stake giữa nhiều pool và nhà vận hành.</p></div>

<h2>Staking as a service (SaaS)</h2>
<p>Bạn nạp 32 ETH và giữ quyền rút, còn bên dịch vụ chạy phần cứng và giữ khóa ký. Phù hợp cho người có đủ ETH nhưng không muốn vận hành máy. Rủi ro: bên vận hành có thể offline hoặc gây slashing; bạn phải tin họ.</p>

<h2>Staking trên sàn</h2>
<p>Đơn giản nhất nhưng sàn giữ toàn bộ khóa. Bạn nhận thưởng sau khi sàn trừ phí, và chịu rủi ro sàn.</p>

<h2>Chọn thế nào?</h2>
<p>ethereum.org đánh giá các dịch vụ theo tiêu chí: mã nguồn mở, đã kiểm toán, có bug bounty, đã chạy lâu, dùng client đa dạng, tự kiểm soát khóa rút, có cơ chế chống tập trung. Ưu tiên dịch vụ đáp ứng nhiều tiêu chí.</p>`,
      keys: [
        "Pool gom ETH của nhiều người; bạn nhận LST (stETH, rETH) dùng được trong DeFi.",
        "SaaS: bạn giữ quyền rút, bên vận hành giữ khóa ký.",
        "Một thực thể giữ trên 1/3 stake có thể cản finality; cần phân tán."
      ],
      quiz: [
        { q: "stETH và rETH là gì?", o: ["Stablecoin", "Liquid staking token đại diện ETH đã stake qua pool", "Testnet ETH", "Token quản trị Ethereum"], a: 1, e: "LST đại diện phần ETH stake + phần thưởng." },
        { q: "Vì sao không nên để một pool nắm hơn 1/3 tổng stake?", o: ["Phí sẽ cao hơn", "Pool đó có thể ngăn mạng đạt finality", "Pool sẽ bị đóng", "Ethereum giới hạn bằng luật"], a: 1, e: "Finality cần 2/3 số phiếu; nắm trên 1/3 là có thể cản." }
      ]
    },
    {
      id: "withdrawals",
      title: "Rút tiền staking",
      min: 6,
      src: ["/staking/withdrawals/", "/developers/docs/consensus-mechanisms/pos/withdrawal-credentials/"],
      tldr: "Từ Shapella (2023), validator có thể rút ETH. Phần thưởng vượt mức được rút tự động; muốn lấy toàn bộ thì phải thoát (exit) validator. Địa chỉ nhận do withdrawal credentials quyết định.",
      body: `
<h2>Withdrawal credentials</h2>
<div class="table-wrap"><table>
<tr><th>Tiền tố</th><th>Ý nghĩa</th></tr>
<tr><td><code>0x00</code></td><td>Kiểu cũ, gắn với khóa BLS, chưa rút được. Cần chuyển sang 0x01 hoặc 0x02 (một lần duy nhất).</td></tr>
<tr><td><code>0x01</code></td><td>Trỏ tới một địa chỉ Ethereum. Số dư trên 32 ETH tự động được rút về địa chỉ này.</td></tr>
<tr><td><code>0x02</code></td><td>Từ Pectra. Validator "cộng dồn" (compounding): số dư tới 2048 ETH vẫn được tính vào stake, chỉ phần vượt 2048 mới tự rút.</td></tr>
</table></div>

<h2>Hai kiểu rút</h2>
<div class="compare">
  <div><h4>Rút một phần (partial)</h4><p>Tự động. Mạng "quét" lần lượt qua các validator, mỗi khối xử lý một số lượng nhất định, và chuyển phần vượt mức về địa chỉ rút. Không cần gửi giao dịch.</p></div>
  <div><h4>Rút toàn bộ (full)</h4><p>Gửi yêu cầu thoát. Validator vào hàng chờ thoát, sau đó toàn bộ số dư được chuyển về địa chỉ rút.</p></div>
</div>

<h2>Hàng chờ</h2>
<p>Để mạng ổn định, số validator vào hoặc ra mỗi epoch bị giới hạn ("churn limit"). Khi nhiều người muốn thoát cùng lúc, thời gian chờ có thể kéo dài. Glamsterdam dự kiến (EIP-8061) cho khả năng thoát tỷ lệ với tổng stake và tách hàng chờ cho việc gom validator.</p>
<div class="callout info"><b>EIP-7002 (Pectra)</b><p>Trước đây chỉ khóa ký mới gửi được yêu cầu thoát. Giờ đây địa chỉ rút ở lớp thực thi cũng có thể kích hoạt thoát, hữu ích khi bên vận hành SaaS không hợp tác.</p></div>`,
      keys: [
        "0x00: cũ, chưa rút được; 0x01: tự rút phần trên 32 ETH; 0x02: cộng dồn tới 2048 ETH.",
        "Rút một phần là tự động; rút toàn bộ cần exit và chờ hàng đợi.",
        "Churn limit giới hạn số validator vào/ra mỗi epoch.",
        "EIP-7002 cho phép địa chỉ rút kích hoạt thoát."
      ],
      quiz: [
        { q: "Validator có credentials 0x01 sẽ:", o: ["Không bao giờ rút được", "Tự động được rút phần số dư trên 32 ETH về địa chỉ rút", "Cộng dồn tới 2048 ETH", "Phải gửi giao dịch để nhận thưởng"], a: 1, e: "Partial withdrawal diễn ra tự động cho 0x01." },
        { q: "Muốn lấy lại toàn bộ 32 ETH đã stake, bạn cần:", o: ["Chờ phần thưởng tự rút", "Gửi yêu cầu thoát (exit) validator", "Liên hệ Ethereum Foundation", "Chuyển sang 0x00"], a: 1, e: "Exit đưa validator vào hàng chờ rồi rút toàn bộ." },
        { q: "EIP-7002 cho phép điều gì?", o: ["Stake dưới 32 ETH", "Kích hoạt thoát validator từ địa chỉ rút ở lớp thực thi", "Rút tức thì không cần hàng chờ", "Tăng phần thưởng"], a: 1, e: "Người nắm địa chỉ rút không còn phụ thuộc người giữ khóa ký." }
      ]
    },
    {
      id: "run-a-node",
      title: "Chạy node của riêng bạn",
      min: 7,
      src: ["/run-a-node/", "/developers/docs/nodes-and-clients/run-a-node/"],
      tldr: "Chạy node nghĩa là tự tải, kiểm tra mọi khối và giữ bản sao Ethereum trên máy của mình. Bạn không phải tin nhà cung cấp RPC, tăng quyền riêng tư và góp phần làm mạng phi tập trung hơn. Không cần ETH để chạy node.",
      body: `
<h2>Vì sao nên chạy node?</h2>
<ul>
  <li><strong>Tự kiểm chứng:</strong> không phải tin ai về số dư hay tính hợp lệ của khối ("don't trust, verify").</li>
  <li><strong>Quyền riêng tư:</strong> ví kết nối tới node của bạn thay vì gửi địa chỉ và IP cho bên thứ ba.</li>
  <li><strong>Chống kiểm duyệt:</strong> tự phát giao dịch lên mạng.</li>
  <li><strong>Đóng góp cho mạng:</strong> thêm một bản sao độc lập, chia sẻ dữ liệu cho node khác.</li>
  <li><strong>Nền tảng để stake</strong> nếu sau này bạn muốn.</li>
</ul>

<h2>Yêu cầu phần cứng tham khảo</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Tối thiểu</th><th>Khuyến nghị</th></tr>
<tr><td>CPU</td><td>2–4 nhân</td><td>4+ nhân hiện đại</td></tr>
<tr><td>RAM</td><td>8–16 GB</td><td>16–32 GB</td></tr>
<tr><td>Ổ cứng</td><td>SSD 2 TB</td><td>NVMe SSD 4 TB</td></tr>
<tr><td>Mạng</td><td>10 Mbit/s</td><td>25+ Mbit/s, không giới hạn dung lượng</td></tr>
</table></div>
<p>Ổ cứng HDD không đủ nhanh. Một máy mini PC hoặc thiết bị chuyên dụng (DAppNode, Avado) là lựa chọn phổ biến.</p>

<h2>Cách cài đặt</h2>
<ul>
  <li><strong>Thiết bị cắm là chạy:</strong> mua máy đã cài sẵn.</li>
  <li><strong>Phần mềm có giao diện:</strong> DAppNode, Stereum, NiceNode.</li>
  <li><strong>Thủ công:</strong> tải client chính thức, cấu hình, kết nối EL và CL bằng khóa JWT.</li>
</ul>

<h2>Các chế độ đồng bộ</h2>
<ul>
  <li><strong>Snap sync / checkpoint sync:</strong> nhanh, bắt đầu từ trạng thái gần đây đã được xác minh. Phổ biến nhất.</li>
  <li><strong>Full sync:</strong> thực thi lại toàn bộ lịch sử, rất lâu.</li>
  <li><strong>Archive:</strong> giữ mọi trạng thái lịch sử, cần nhiều TB.</li>
</ul>
<div class="callout info"><b>Bỏ bớt lịch sử</b><p>Từ 2025, các execution client hỗ trợ <strong>partial history expiry</strong> (EIP-4444, EIP-7642): không bắt buộc giữ dữ liệu khối cũ trước The Merge, giảm hàng trăm GB dung lượng.</p></div>`,
      keys: [
        "Chạy node giúp tự kiểm chứng, tăng riêng tư, chống kiểm duyệt; không cần ETH.",
        "Phần cứng: 16–32 GB RAM, NVMe SSD 2–4 TB, mạng ổn định.",
        "Snap/checkpoint sync nhanh; archive giữ toàn bộ lịch sử.",
        "Partial history expiry giảm dung lượng cần thiết."
      ],
      quiz: [
        { q: "Có cần ETH để chạy một node Ethereum không?", o: ["Có, 32 ETH", "Có, 1 ETH", "Không cần", "Chỉ cần trên testnet"], a: 2, e: "Chỉ chạy validator mới cần stake ETH." },
        { q: "Loại ổ cứng nào phù hợp để chạy node?", o: ["HDD", "SSD (tốt nhất NVMe)", "USB", "Thẻ nhớ SD"], a: 1, e: "Node cần đọc ghi ngẫu nhiên tốc độ cao." },
        { q: "Archive node khác full node ở điểm:", o: ["Không kiểm tra khối", "Lưu toàn bộ trạng thái lịch sử ở mọi khối", "Chạy nhanh hơn", "Không cần consensus client"], a: 1, e: "Archive cho phép truy vấn trạng thái ở bất kỳ khối nào trong quá khứ." }
      ]
    },
    {
      id: "energy",
      title: "Ethereum và năng lượng",
      min: 5,
      src: ["/energy-consumption/"],
      tldr: "Sau The Merge (2022), Ethereum chuyển sang proof-of-stake và giảm khoảng 99,95% lượng điện tiêu thụ. Mạng hiện dùng ít điện hơn nhiều dịch vụ số quen thuộc.",
      body: `
<h2>Trước và sau The Merge</h2>
<div class="compare">
  <div><h4>Proof-of-work (trước 9/2022)</h4><p>Thợ đào chạy GPU liên tục để giải bài toán hash. Mức tiêu thụ ước tính hàng chục TWh mỗi năm, tương đương một quốc gia cỡ vừa.</p></div>
  <div><h4>Proof-of-stake (sau 9/2022)</h4><p>Validator chỉ cần một máy tính thông thường. Tổng tiêu thụ khoảng vài GWh mỗi năm, giảm khoảng 99,95%.</p></div>
</div>

<h2>Vì sao PoS tiết kiệm điện?</h2>
<p>Trong PoW, an ninh đến từ việc đốt điện: muốn tấn công phải có nhiều sức đào hơn. Trong PoS, an ninh đến từ ETH đặt cọc: muốn tấn công phải mua và khóa lượng lớn ETH, và có thể bị tiêu hủy nếu gian lận. Không còn cuộc đua tính toán nên không cần năng lượng lớn.</p>

<h2>Còn Layer 2 thì sao?</h2>
<p>Layer 2 gom hàng nghìn giao dịch thành một, nên năng lượng tính trên mỗi giao dịch còn thấp hơn nữa. Hệ sinh thái cũng có các sáng kiến ReFi để hỗ trợ dự án môi trường.</p>`,
      keys: [
        "The Merge giảm khoảng 99,95% năng lượng tiêu thụ.",
        "PoS bảo mật bằng ETH đặt cọc thay vì đốt điện.",
        "L2 giảm năng lượng mỗi giao dịch hơn nữa."
      ],
      quiz: [
        { q: "The Merge giảm lượng điện của Ethereum khoảng bao nhiêu?", o: ["10%", "50%", "~99,95%", "Không thay đổi"], a: 2, e: "Chuyển sang PoS loại bỏ việc đào tốn điện." },
        { q: "Trong proof-of-stake, an ninh mạng đến từ:", o: ["Điện năng tiêu thụ", "ETH được đặt cọc và có thể bị phạt", "Số lượng GPU", "Ethereum Foundation"], a: 1, e: "Kẻ tấn công phải bỏ ra và có thể mất lượng lớn ETH." }
      ]
    }
  ]
});
