window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "roadmap",
  no: 5,
  group: "Giao thức và lộ trình",
  level: "Trung bình",
  title: "Lộ trình phát triển Ethereum",
  desc: "Ethereum đang được nâng cấp như thế nào: The Merge, blob và danksharding, Pectra, Fusaka, Glamsterdam, Hegotá, account abstraction, statelessness, zkEVM, finality nhanh, an toàn hậu lượng tử, bằng chứng ZK và cách quản trị.",
  lessons: [
    {
      id: "roadmap-overview",
      title: "Tổng quan lộ trình",
      min: 7,
      src: ["/roadmap/", "/roadmap/scaling/", "/roadmap/security/", "/roadmap/user-experience/"],
      tldr: "Lộ trình Ethereum không có \"ngày hoàn thành\". Nó là tập hợp các nâng cấp hướng tới bốn mục tiêu: giao dịch rẻ hơn, an toàn hơn, trải nghiệm người dùng tốt hơn và quyền riêng tư tốt hơn, đồng thời giữ cho mạng phi tập trung.",
      body: `
<h2>Vì sao Ethereum cần tiếp tục nâng cấp?</h2>
<p>Ethereum đã an toàn và phi tập trung, nhưng còn những điểm cần cải thiện: phí trên mainnet có lúc cao, trải nghiệm ví khó với người mới, finality mất khoảng 13–15 phút, máy tính lượng tử có thể đe dọa mật mã hiện tại trong tương lai. Lộ trình giải quyết từng vấn đề mà không hy sinh phi tập trung.</p>

<h2>Bốn hướng chính trên ethereum.org</h2>
<div class="table-wrap"><table>
<tr><th>Mục tiêu</th><th>Nội dung chính</th></tr>
<tr><td>Giao dịch rẻ hơn (scaling)</td><td>Rollup-centric: blob (EIP-4844), PeerDAS, tăng số blob qua BPO fork, danksharding đầy đủ, tăng gas limit L1.</td></tr>
<tr><td>An toàn hơn (security)</td><td>Chống kiểm duyệt (ePBS, FOCIL), single slot finality, bầu chọn người đề xuất bí mật, mật mã chống lượng tử, đa dạng client.</td></tr>
<tr><td>Trải nghiệm tốt hơn (UX)</td><td>Account abstraction (ERC-4337, EIP-7702, frame transactions), statelessness để chạy node nhẹ hơn.</td></tr>
<tr><td>Riêng tư hơn (privacy)</td><td>Đọc, ghi và chứng minh riêng tư; shielded transfers; bằng chứng ZK chạy trên thiết bị người dùng.</td></tr>
</table></div>

<h2>Cách gọi của Vitalik</h2>
<p>Năm 2022, Vitalik nhóm lộ trình thành sáu phần. Chúng không phải thứ tự thời gian mà chạy song song:</p>
<div class="compare">
  <div><h4>The Merge</h4><p>Chuyển sang PoS, sau đó cải thiện finality, an toàn staking.</p></div>
  <div><h4>The Surge</h4><p>Mở rộng qua rollup và data availability.</p></div>
  <div><h4>The Scourge</h4><p>Chống tập trung hóa và kiểm duyệt do MEV.</p></div>
  <div><h4>The Verge</h4><p>Xác minh khối dễ dàng: Verkle/binary tree, SNARK hóa.</p></div>
  <div><h4>The Purge</h4><p>Bỏ lịch sử cũ, đơn giản hóa giao thức.</p></div>
  <div><h4>The Splurge</h4><p>Mọi thứ còn lại: account abstraction, cải tiến EVM…</p></div>
</div>

<h2>Lộ trình được quyết định thế nào?</h2>
<p>Không ai ra lệnh. Các nhà nghiên cứu đề xuất, cộng đồng thảo luận, các đội client đồng ý trong các buổi họp All Core Devs, và mỗi nâng cấp chỉ có hiệu lực khi người vận hành node chạy phần mềm mới. Bạn sẽ học kỹ ở bài "Quản trị và EIP".</p>
<div class="callout warn"><b>Bạn không cần làm gì với ETH</b><p>Khi Ethereum nâng cấp, số dư và tài khoản của bạn không thay đổi. Chỉ người vận hành node và validator cần cập nhật phần mềm.</p></div>`,
      keys: [
        "Bốn mục tiêu: rẻ hơn, an toàn hơn, UX tốt hơn, riêng tư hơn, đồng thời giữ phi tập trung.",
        "Cách gọi của Vitalik: Merge, Surge, Scourge, Verge, Purge, Splurge, chạy song song.",
        "Nâng cấp được quyết định qua đồng thuận xã hội, không phải mệnh lệnh.",
        "Người giữ ETH không cần làm gì khi mạng nâng cấp."
      ],
      quiz: [
        { q: "\"The Surge\" trong lộ trình nói về:", o: ["Chuyển sang PoS", "Mở rộng quy mô qua rollup và data availability", "Bỏ dữ liệu lịch sử", "Chống MEV"], a: 1, e: "Surge tập trung tăng thông lượng qua rollup và blob." },
        { q: "Khi Ethereum có bản nâng cấp mới, người giữ ETH cần:", o: ["Đổi ETH sang token mới", "Không cần làm gì", "Gửi ETH cho Ethereum Foundation", "Rút ETH khỏi ví"], a: 1, e: "Chỉ người vận hành node và validator cần cập nhật client." }
      ]
    },
    {
      id: "the-merge",
      title: "The Merge và Beacon Chain",
      min: 7,
      src: ["/roadmap/merge/", "/roadmap/beacon-chain/"],
      tldr: "Ngày 15/9/2022, lớp thực thi của Ethereum (chuỗi PoW cũ) được \"ghép\" với Beacon Chain (chuỗi PoS chạy từ 12/2020). Từ đó Ethereum được bảo mật bằng ETH đặt cọc thay vì đào.",
      body: `
<h2>Beacon Chain</h2>
<p>Ra mắt ngày <strong>1/12/2020</strong>, Beacon Chain là chuỗi proof-of-stake chạy song song với mainnet PoW. Ban đầu nó chỉ chạy đồng thuận giữa các validator, không xử lý giao dịch người dùng. Đây là bước thử nghiệm an toàn trước khi chuyển giao.</p>

<h2>The Merge</h2>
<p>Hãy hình dung động cơ của một tàu vũ trụ được thay giữa lúc đang bay. Khi tổng độ khó đào đạt mốc định trước (Terminal Total Difficulty), các node ngừng chấp nhận khối đào và bắt đầu nhận khối từ Beacon Chain. Toàn bộ lịch sử, số dư và hợp đồng vẫn được giữ nguyên.</p>
<div class="flow arrows">
  <div><b>Trước</b>Mainnet PoW (thực thi + đồng thuận bằng đào)</div>
  <div><b>Song song</b>Beacon Chain PoS (chỉ đồng thuận)</div>
  <div><b>Sau 15/9/2022</b>Lớp thực thi + lớp đồng thuận = Ethereum PoS</div>
</div>

<h2>Những gì đã thay đổi</h2>
<ul>
  <li><strong>Năng lượng</strong> giảm khoảng 99,95%.</li>
  <li><strong>Phát hành ETH</strong> giảm mạnh (không còn thưởng đào).</li>
  <li><strong>Thời gian khối</strong> cố định 12 giây thay vì dao động ~13–14 giây.</li>
  <li><strong>Finality</strong> có tính kinh tế: khối đã finalized chỉ có thể bị đảo ngược nếu ít nhất 1/3 tổng stake bị tiêu hủy.</li>
  <li><strong>Kiến trúc node:</strong> mỗi node cần execution client + consensus client.</li>
</ul>

<h2>Những gì không thay đổi</h2>
<ul>
  <li>Phí gas không giảm (giảm phí là việc của rollup và blob).</li>
  <li>Không rút được tiền stake ngay (phải chờ Shapella 4/2023).</li>
  <li>Giao dịch không nhanh hơn đáng kể.</li>
</ul>`,
      keys: [
        "Beacon Chain ra mắt 1/12/2020; The Merge diễn ra 15/9/2022.",
        "Lớp thực thi cũ ghép với lớp đồng thuận PoS, lịch sử giữ nguyên.",
        "Thay đổi: năng lượng, phát hành, slot 12 giây, finality kinh tế.",
        "Không thay đổi: phí gas, tốc độ; rút stake chờ tới Shapella."
      ],
      quiz: [
        { q: "Beacon Chain ra mắt khi nào?", o: ["30/7/2015", "1/12/2020", "15/9/2022", "12/4/2023"], a: 1, e: "Beacon Chain chạy độc lập gần 2 năm trước The Merge." },
        { q: "The Merge có làm phí gas giảm mạnh không?", o: ["Có, giảm 99%", "Không, giảm phí là nhiệm vụ của rollup và blob", "Có, phí về 0", "Phí tăng gấp đôi"], a: 1, e: "Merge thay đổi đồng thuận, không thay đổi dung lượng khối." },
        { q: "Sau The Merge, mỗi node cần chạy:", o: ["Chỉ phần mềm đào", "Execution client và consensus client", "Chỉ validator client", "Không cần phần mềm"], a: 1, e: "Hai client giao tiếp qua Engine API." }
      ]
    },
    {
      id: "danksharding",
      title: "Blob, Dencun và danksharding",
      min: 11,
      src: ["/roadmap/danksharding/", "/roadmap/dencun/", "/roadmap/fusaka/"],
      tldr: "Rollup cần đăng dữ liệu lên Ethereum. Dencun (3/2024) thêm \"blob\": vùng dữ liệu tạm thời, rẻ, có thị trường phí riêng. Fusaka (12/2025) thêm PeerDAS để node chỉ cần tải một phần dữ liệu, mở đường tăng số blob mỗi khối. Đích cuối là danksharding đầy đủ.",
      body: `
<div class="callout analogy"><b>Hình dung đơn giản</b><p>Hãy coi Ethereum như một <strong>bảng thông báo chung</strong> mà ai cũng tin. Rollup là các "chi nhánh" xử lý giao dịch ở bên ngoài, sau đó phải dán biên bản lên bảng để ai cũng kiểm tra được.</p><p>Trước 2024, biên bản phải được <strong>chép vào sổ lưu trữ vĩnh viễn</strong> (calldata) và tranh chỗ với mọi giao dịch khác, nên rất đắt. <strong>Blob</strong> giống một <strong>tờ giấy dán tạm</strong>: ai cũng đọc được, có bảng giá riêng, và tự được gỡ xuống sau khoảng 18 ngày. Rollup chỉ cần dữ liệu "có mặt đủ lâu để mọi người kiểm tra", không cần giữ mãi mãi, nên cách này rẻ hơn rất nhiều.</p></div>

<h2>Vấn đề: dữ liệu của rollup</h2>
<p>Rollup phải đăng dữ liệu giao dịch lên Ethereum để ai cũng có thể kiểm tra và tái tạo trạng thái. Trước 2024, dữ liệu này nằm trong <em>calldata</em>, được lưu vĩnh viễn và cạnh tranh phí với mọi giao dịch khác, nên rất đắt.</p>

<h2>Proto-danksharding (EIP-4844, Dencun)</h2>
<ul>
  <li><strong>Blob</strong> là gói dữ liệu khoảng <strong>128 KB</strong> đi kèm giao dịch loại 3.</li>
  <li>EVM không đọc được nội dung blob, chỉ thấy cam kết (KZG commitment) của nó.</li>
  <li>Blob chỉ được node giữ khoảng <strong>18 ngày</strong> rồi xóa; đủ thời gian để ai cần thì tải về.</li>
  <li>Blob có <strong>phí riêng (blob gas)</strong>, tự điều chỉnh giống EIP-1559, không tranh với gas thường.</li>
</ul>
<p>Kết quả: phí trên nhiều L2 giảm hàng chục lần ngay sau Dencun.</p>

<h2>Số blob qua các bản nâng cấp</h2>
<div class="table-wrap"><table>
<tr><th>Mốc</th><th>Mục tiêu / tối đa mỗi khối</th></tr>
<tr><td>Dencun (3/2024)</td><td>3 / 6</td></tr>
<tr><td>Pectra (5/2025, EIP-7691)</td><td>6 / 9</td></tr>
<tr><td>Fusaka (12/2025) + các BPO fork</td><td>Tăng dần theo từng bước nhỏ (ví dụ 10/15 rồi 14/21) mà không cần đợi bản nâng cấp lớn</td></tr>
</table></div>

<h2>PeerDAS (EIP-7594, Fusaka)</h2>
<p><strong>Data availability sampling</strong>: thay vì mỗi node tải toàn bộ blob, dữ liệu được mã hóa xóa (erasure coding) mở rộng gấp đôi và chia thành 128 cột. Mỗi node thường chỉ giữ một phần nhỏ (khoảng 1/8) và lấy mẫu ngẫu nhiên từ các node khác. Vì chỉ cần 50% dữ liệu mở rộng là tái tạo được toàn bộ, mạng vẫn chắc chắn dữ liệu có sẵn.</p>
<div class="flow arrows">
  <div><b>Blob gốc</b>Dữ liệu của rollup</div>
  <div><b>Mở rộng ×2</b>Erasure coding</div>
  <div><b>128 cột</b>Phân tán qua subnet</div>
  <div><b>Lấy mẫu</b>Mỗi node giữ vài cột, kiểm tra ngẫu nhiên</div>
</div>
<div class="callout analogy"><b>Hình dung đơn giản: bức tranh xếp hình</b><p>Erasure coding giống như cắt một bức tranh thành nhiều mảnh, rồi làm thêm các mảnh dự phòng sao cho <strong>bất kỳ một nửa số mảnh nào cũng đủ ghép lại cả bức tranh</strong>.</p><p>Vì vậy, muốn giấu dữ liệu, kẻ xấu phải giấu <strong>hơn một nửa</strong> số mảnh. Khi đó, mỗi lần một node bốc ngẫu nhiên một mảnh để kiểm tra, khả năng bốc trúng mảnh bị giấu là hơn 50%. Bốc 20 lần mà mảnh nào cũng có thì khả năng bị lừa còn chưa tới một phần triệu. Mỗi node chỉ làm một việc nhẹ, nhưng cả mạng cùng kiểm tra thì không ai giấu được dữ liệu.</p></div>
<p>Fusaka cũng thêm <strong>BPO fork</strong> (EIP-7892) để tăng tham số blob qua các nâng cấp nhỏ, và giá sàn phí blob (EIP-7918) để thị trường phí blob hoạt động ổn định.</p>

<h2>Ví dụ: một lần chuyển tiền trên Layer 2</h2>
<div class="story"><b>Từng bước</b><p>Lan chuyển 10 USDC cho bạn trên một Layer 2, ví dụ Base hoặc Arbitrum.</p><ol>
  <li>Lan bấm gửi. <strong>Sequencer</strong> của L2 nhận và xử lý giao dịch gần như ngay lập tức.</li>
  <li>Sequencer gom giao dịch của Lan cùng hàng nghìn giao dịch khác, rồi nén lại thành một gói dữ liệu.</li>
  <li>Gói dữ liệu được đăng lên Ethereum dưới dạng <strong>blob</strong> và trả phí blob gas.</li>
  <li>Các node Ethereum giữ blob khoảng 18 ngày. Trong thời gian đó, bất kỳ ai cũng có thể tải về để kiểm tra rằng L2 không gian lận.</li>
  <li>Phí của blob được chia cho tất cả giao dịch trong gói, nên phần Lan phải trả rất nhỏ.</li>
</ol></div>
<div class="callout info"><b>Liên quan gì đến bạn?</b><p>Phí giao dịch trên L2 hiện thường chỉ vài cent hoặc thấp hơn, và phần lớn là nhờ blob. Mỗi khối chứa được càng nhiều blob thì L2 càng xử lý được nhiều giao dịch mà phí vẫn thấp. Đó là lý do các bản nâng cấp liên tục tăng số blob.</p></div>

<h2>Danksharding đầy đủ</h2>
<p>Mục tiêu dài hạn: lấy mẫu dữ liệu hai chiều, nâng số blob lên rất cao (hàng chục đến hàng trăm mỗi khối), giúp L2 xử lý khối lượng giao dịch rất lớn với phí thấp. Tên "danksharding" đặt theo nhà nghiên cứu Dankrad Feist, "proto" theo Protolambda.</p>`,
      keys: [
        "Blob ~128 KB, giữ ~18 ngày, có thị trường phí riêng, EVM không đọc được nội dung.",
        "Blob mục tiêu/tối đa: 3/6 (Dencun), 6/9 (Pectra), tăng tiếp qua BPO fork sau Fusaka.",
        "PeerDAS: erasure coding + lấy mẫu, mỗi node chỉ giữ một phần dữ liệu.",
        "Danksharding đầy đủ là đích dài hạn."
      ],
      quiz: [
        { q: "Blob được node lưu giữ trong bao lâu?", o: ["Vĩnh viễn", "Khoảng 18 ngày", "12 giây", "1 năm"], a: 1, e: "Đủ để các bên cần tải và kiểm tra, sau đó xóa để tiết kiệm dung lượng." },
        { q: "PeerDAS giúp gì?", o: ["Node chỉ cần lưu và lấy mẫu một phần dữ liệu blob mà vẫn đảm bảo dữ liệu có sẵn", "Tăng phần thưởng staking", "Rút ETH nhanh hơn", "Thay thế EVM"], a: 0, e: "Nhờ erasure coding, chỉ cần một nửa dữ liệu mở rộng là tái tạo được toàn bộ." },
        { q: "BPO fork là gì?", o: ["Fork chỉ thay đổi tham số blob, không cần nâng cấp lớn", "Fork tạo ra chuỗi mới", "Một loại tấn công", "Một testnet"], a: 0, e: "Blob-Parameter-Only fork cho phép tăng dần dung lượng blob." },
        { q: "Trước Dencun, rollup đăng dữ liệu bằng cách nào?", o: ["Blob", "Calldata, được lưu vĩnh viễn và đắt", "Email", "IPFS"], a: 1, e: "Calldata cạnh tranh phí với mọi giao dịch nên rất đắt." }
      ]
    },
    {
      id: "pectra-fusaka",
      title: "Pectra và Fusaka",
      min: 8,
      src: ["/roadmap/pectra/", "/roadmap/fusaka/"],
      tldr: "Pectra (7/5/2025) mang tính năng ví thông minh cho tài khoản thường (EIP-7702), nâng giới hạn stake mỗi validator lên 2048 ETH và tăng blob. Fusaka (3/12/2025) đưa vào PeerDAS, BPO fork, gas limit 60 triệu và chữ ký P-256 cho passkey.",
      body: `
<h2>Pectra = Prague + Electra</h2>
<div class="table-wrap"><table>
<tr><th>EIP</th><th>Thay đổi</th></tr>
<tr><td>EIP-7702</td><td>Tài khoản thường (EOA) có thể ủy quyền cho mã hợp đồng: gom nhiều thao tác, nhờ người khác trả gas, khóa phụ… Bước lớn của account abstraction.</td></tr>
<tr><td>EIP-7251</td><td>Số dư hiệu dụng tối đa của validator tăng từ 32 lên 2048 ETH; gom validator; phần thưởng tự cộng dồn (credentials 0x02).</td></tr>
<tr><td>EIP-7691</td><td>Blob mục tiêu/tối đa tăng từ 3/6 lên 6/9.</td></tr>
<tr><td>EIP-7623</td><td>Tăng giá calldata cho giao dịch chủ yếu chứa dữ liệu, giới hạn kích thước khối tệ nhất.</td></tr>
<tr><td>EIP-7002</td><td>Kích hoạt thoát validator từ địa chỉ rút ở lớp thực thi.</td></tr>
<tr><td>EIP-6110</td><td>Xử lý tiền nạp validator trực tiếp trên chuỗi, nhanh hơn (từ ~12 giờ xuống ~13 phút).</td></tr>
<tr><td>EIP-2537</td><td>Precompile cho đường cong BLS12-381.</td></tr>
<tr><td>EIP-2935</td><td>Lưu hash của 8192 khối gần nhất trong một hợp đồng hệ thống.</td></tr>
<tr><td>EIP-7549</td><td>Đưa chỉ số ủy ban ra ngoài attestation, gộp phiếu hiệu quả hơn.</td></tr>
</table></div>

<h2>Fusaka = Osaka + Fulu</h2>
<div class="table-wrap"><table>
<tr><th>EIP</th><th>Thay đổi</th></tr>
<tr><td>EIP-7594</td><td>PeerDAS: lấy mẫu dữ liệu blob.</td></tr>
<tr><td>EIP-7892</td><td>BPO fork: tăng tham số blob qua nâng cấp nhỏ.</td></tr>
<tr><td>EIP-7918</td><td>Giá sàn cho phí blob.</td></tr>
<tr><td>EIP-7935</td><td>Gas limit mặc định 60 triệu.</td></tr>
<tr><td>EIP-7825</td><td>Giới hạn gas mỗi giao dịch 2<sup>24</sup> (~16,7 triệu).</td></tr>
<tr><td>EIP-7934</td><td>Giới hạn kích thước khối thực thi (~10 MiB).</td></tr>
<tr><td>EIP-7917</td><td>Biết trước người đề xuất của epoch tiếp theo, hỗ trợ preconfirmation.</td></tr>
<tr><td>EIP-7951</td><td>Precompile xác minh chữ ký secp256r1 (P-256), loại dùng trong passkey, Face ID, khóa bảo mật.</td></tr>
<tr><td>EIP-7939</td><td>Opcode CLZ (đếm số bit 0 đầu).</td></tr>
<tr><td>EIP-7823, 7883</td><td>Giới hạn và tăng giá precompile MODEXP.</td></tr>
<tr><td>EIP-7642</td><td>Hết hạn một phần lịch sử ở execution client.</td></tr>
</table></div>
<div class="callout tip"><b>Ý nghĩa thực tế</b><p>Với người dùng: ví thông minh hơn (7702), đăng nhập bằng passkey (7951), phí L2 rẻ hơn (blob, PeerDAS). Với staker: gom validator, nạp nhanh, thoát linh hoạt. Với nhà phát triển: một số precompile đắt hơn, giao dịch quá lớn phải chia nhỏ.</p></div>`,
      keys: [
        "Pectra: EIP-7702 (EOA dùng mã hợp đồng), EIP-7251 (2048 ETH), EIP-7691 (6/9 blob).",
        "Fusaka: PeerDAS, BPO fork, gas limit 60M, giới hạn gas mỗi giao dịch ~16,7M, P-256.",
        "Tên ghép: thành phố Devcon (EL) + ngôi sao (CL)."
      ],
      quiz: [
        { q: "EIP-7702 trong Pectra cho phép:", o: ["Stake dưới 32 ETH", "Tài khoản thường ủy quyền cho mã hợp đồng, có tính năng ví thông minh", "Tăng blob lên 9", "Rút tiền tức thì"], a: 1, e: "Một bước lớn của account abstraction cho ví EOA hiện có." },
        { q: "Precompile P-256 (EIP-7951) hữu ích vì:", o: ["Làm đào nhanh hơn", "Cho phép xác minh chữ ký từ passkey, thiết bị di động rẻ hơn", "Tăng blob", "Mã hóa giao dịch"], a: 1, e: "Passkey và secure enclave của điện thoại dùng đường cong P-256." },
        { q: "Fusaka đặt gas limit mặc định là:", o: ["15 triệu", "30 triệu", "60 triệu", "100 triệu"], a: 2, e: "EIP-7935 đặt mặc định 60M." }
      ]
    },
    {
      id: "glamsterdam-hegota",
      title: "Sắp tới: Glamsterdam và Hegotá",
      min: 7,
      src: ["/roadmap/glamsterdam/", "/roadmap/hegota/"],
      tldr: "Glamsterdam (dự kiến Q4/2026) đưa PBS vào giao thức (ePBS) và block-level access lists để thực thi song song, kèm định giá lại gas. Hegotá (dự kiến 2027) hướng tới FOCIL chống kiểm duyệt và frame transactions.",
      body: `
<h2>Glamsterdam = Amsterdam + Gloas</h2>
<p>Trạng thái tại thời điểm biên soạn: đang thử trên devnet, phạm vi EIP đã chốt, mốc tiếp theo là fork testnet Sepolia, dự kiến lên mainnet Q4/2026 (chưa có ngày chính thức).</p>
<div class="table-wrap"><table>
<tr><th>EIP</th><th>Nội dung</th></tr>
<tr><td>EIP-7732 (ePBS)</td><td>Tách vai trò người đề xuất và người xây khối ngay trong giao thức, giảm phụ thuộc vào relay; kéo dài thời gian truyền dữ liệu khối từ ~2 giây lên ~9 giây, mở đường cho khối lớn hơn.</td></tr>
<tr><td>EIP-7928 (BAL)</td><td>Block-level access lists: khối liệt kê trước các phần trạng thái sẽ chạm tới, cho phép thực thi song song và đồng bộ nhanh hơn.</td></tr>
<tr><td>EIP-8037, 8038</td><td>Định giá lại chi phí tạo và đọc trạng thái cho đúng với chi phí phần cứng, để có thể tăng gas limit an toàn.</td></tr>
<tr><td>EIP-2780</td><td>Giảm gas cơ bản cho giao dịch chuyển ETH đơn giản.</td></tr>
<tr><td>EIP-7708</td><td>Mỗi lần chuyển ETH đều phát ra log, giúp sàn và cầu theo dõi tiền nạp.</td></tr>
<tr><td>EIP-7954</td><td>Tăng giới hạn kích thước hợp đồng (~24 KB lên ~64 KB).</td></tr>
<tr><td>EIP-8061</td><td>Hàng chờ thoát tỷ lệ với tổng stake, tách hàng chờ gom validator.</td></tr>
</table></div>

<h2>Hegotá = Bogotá + Heze</h2>
<p>Đang lên kế hoạch, dự kiến 2027, phạm vi chưa chốt. Hai tính năng chủ chốt:</p>
<div class="compare">
  <div><h4>FOCIL (EIP-7805)</h4><p>Fork-choice enforced inclusion lists: một ủy ban validator chọn các giao dịch phải được đưa vào khối. Người xây khối không thể một mình kiểm duyệt giao dịch.</p></div>
  <div><h4>Frame transactions (EIP-8141)</h4><p>Tài khoản tự định nghĩa cách xác thực: khôi phục xã hội, hạn mức chi tiêu, nhiều chữ ký, bên thứ ba trả gas, và cả chữ ký chống lượng tử.</p></div>
</div>
<div class="callout info"><b>Lộ trình có thể thay đổi</b><p>Thời gian và danh sách EIP được quyết định trong các cuộc họp All Core Devs và có thể đổi khi thử nghiệm phát hiện vấn đề. Hãy xem trang gốc trên ethereum.org để cập nhật.</p></div>`,
      keys: [
        "Glamsterdam: ePBS (EIP-7732), block-level access lists (EIP-7928), định giá lại gas, dự kiến Q4/2026.",
        "Hegotá: FOCIL (EIP-7805) chống kiểm duyệt, frame transactions (EIP-8141), dự kiến 2027.",
        "Thời gian và phạm vi có thể thay đổi."
      ],
      quiz: [
        { q: "ePBS (EIP-7732) đưa điều gì vào giao thức?", o: ["Tách vai trò đề xuất khối và xây khối", "Tăng phần thưởng", "Xóa EVM", "Stake tối thiểu 1 ETH"], a: 0, e: "Proposer-builder separation trước đây phụ thuộc relay ngoài giao thức (MEV-Boost)." },
        { q: "Block-level access lists giúp gì?", o: ["Thực thi giao dịch song song và đồng bộ nhanh hơn", "Ẩn giao dịch", "Tăng blob", "Rút tiền nhanh hơn"], a: 0, e: "Biết trước giao dịch chạm vào trạng thái nào thì có thể chạy song song." },
        { q: "FOCIL nhằm mục tiêu chính nào?", o: ["Tăng tốc độ khối", "Chống kiểm duyệt giao dịch", "Giảm phí blob", "Tăng kích thước hợp đồng"], a: 1, e: "Ủy ban validator buộc người xây khối đưa các giao dịch hợp lệ vào." }
      ]
    },
    {
      id: "account-abstraction",
      title: "Account abstraction",
      min: 8,
      src: ["/roadmap/account-abstraction/"],
      tldr: "Account abstraction cho phép tài khoản được điều khiển bằng mã thay vì chỉ một khóa bí mật cố định. Nhờ đó ví có thể khôi phục khi mất khóa, nhờ người khác trả gas, gom nhiều thao tác, đặt hạn mức và dùng passkey.",
      body: `
<h2>Vấn đề với tài khoản thường (EOA)</h2>
<ul>
  <li>Mất khóa hoặc cụm từ khôi phục là mất tất cả.</li>
  <li>Phải có ETH để trả gas, kể cả khi bạn chỉ muốn chuyển USDC.</li>
  <li>Mỗi thao tác một giao dịch (approve rồi mới swap).</li>
  <li>Chỉ dùng được một kiểu chữ ký (secp256k1).</li>
</ul>

<h2>Ví thông minh làm được gì?</h2>
<div class="compare">
  <div><h4>Khôi phục xã hội</h4><p>Bạn bè, thiết bị khác hoặc dịch vụ làm "người bảo hộ" giúp đổi khóa khi bị mất.</p></div>
  <div><h4>Gas sponsorship</h4><p>Ứng dụng trả gas cho bạn, hoặc bạn trả bằng USDC qua <strong>paymaster</strong>.</p></div>
  <div><h4>Gom giao dịch</h4><p>Approve + swap + stake trong một lần ký.</p></div>
  <div><h4>Session key, hạn mức</h4><p>Cho game một khóa tạm chỉ được chi tối đa X trong 24 giờ.</p></div>
  <div><h4>Passkey</h4><p>Ký bằng vân tay hoặc Face ID nhờ chữ ký P-256.</p></div>
</div>

<h2>Các bước tiến hóa</h2>
<div class="table-wrap"><table>
<tr><th>Giải pháp</th><th>Thời điểm</th><th>Cách hoạt động</th></tr>
<tr><td>ERC-4337</td><td>3/2023</td><td>Không đổi giao thức. Người dùng gửi "UserOperation" vào một mempool riêng; <em>bundler</em> gom lại và gửi tới hợp đồng EntryPoint.</td></tr>
<tr><td>EIP-7702</td><td>Pectra, 5/2025</td><td>EOA hiện có ủy quyền cho mã hợp đồng, giữ nguyên địa chỉ, có ngay tính năng ví thông minh.</td></tr>
<tr><td>EIP-7951</td><td>Fusaka, 12/2025</td><td>Precompile P-256 giúp xác minh passkey rẻ.</td></tr>
<tr><td>Frame transactions (EIP-8141)</td><td>Dự kiến Hegotá</td><td>Account abstraction gốc ở giao thức: tài khoản tự định nghĩa logic xác thực và trả phí.</td></tr>
</table></div>
<div class="callout warn"><b>Ủy quyền 7702 cần cẩn thận</b><p>Ký ủy quyền cho một hợp đồng độc hại đồng nghĩa trao toàn quyền tài khoản. Chỉ ủy quyền qua ví uy tín, cho các hợp đồng đã được kiểm toán.</p></div>`,
      keys: [
        "Account abstraction: tài khoản được điều khiển bằng mã, không bị trói vào một khóa.",
        "Tính năng: khôi phục xã hội, paymaster, gom giao dịch, session key, passkey.",
        "ERC-4337 (2023) → EIP-7702 (Pectra) → P-256 (Fusaka) → frame transactions (dự kiến).",
        "Ủy quyền 7702 cho hợp đồng độc hại có thể mất toàn bộ tài khoản."
      ],
      quiz: [
        { q: "Trong ERC-4337, ai gom các UserOperation và gửi lên chuỗi?", o: ["Validator", "Bundler", "Paymaster", "Oracle"], a: 1, e: "Bundler gom UserOperation và gọi hợp đồng EntryPoint." },
        { q: "Paymaster cho phép:", o: ["Trả gas bằng token khác hoặc được ứng dụng trả hộ", "Đào ETH", "Tăng thưởng staking", "Hủy giao dịch"], a: 0, e: "Paymaster tài trợ hoặc nhận thanh toán gas theo cách khác." },
        { q: "Điểm hay của EIP-7702 so với chuyển sang ví thông minh mới là:", o: ["Giữ nguyên địa chỉ EOA hiện tại", "Miễn phí gas vĩnh viễn", "Không cần khóa bí mật", "Không thể bị hack"], a: 0, e: "Người dùng không phải di chuyển tài sản sang địa chỉ mới." }
      ]
    },
    {
      id: "statelessness-zkevm",
      title: "Statelessness, Verkle và zkEVM",
      min: 8,
      src: ["/roadmap/statelessness/", "/roadmap/verkle-trees/", "/roadmap/zkevm/"],
      tldr: "Trạng thái Ethereum ngày càng lớn, khiến chạy node tốn ổ cứng. Statelessness cho phép node xác minh khối mà không cần lưu toàn bộ trạng thái, nhờ \"witness\" nhỏ gọn (Verkle hoặc cây nhị phân) hoặc bằng chứng zkEVM.",
      body: `
<h2>Vấn đề: trạng thái phình to</h2>
<p>"Trạng thái" là toàn bộ số dư, mã và dữ liệu hợp đồng hiện tại. Mỗi node phải lưu và truy cập nhanh hàng trăm GB dữ liệu này, cộng thêm lịch sử. Càng lớn thì càng ít người chạy được node.</p>

<h2>Các hướng giải quyết</h2>
<div class="table-wrap"><table>
<tr><th>Hướng</th><th>Ý tưởng</th></tr>
<tr><td>History expiry (EIP-4444)</td><td>Node không bắt buộc giữ dữ liệu khối cũ; lịch sử được lưu ở nơi khác (Portal Network, kho lưu trữ). Đã bắt đầu từ 2025 với dữ liệu trước The Merge.</td></tr>
<tr><td>Weak statelessness</td><td>Chỉ người xây khối cần toàn bộ trạng thái; khối đi kèm <em>witness</em> chứa đúng phần trạng thái cần dùng và bằng chứng của nó. Validator xác minh mà không cần lưu trạng thái.</td></tr>
<tr><td>Verkle tree / cây nhị phân</td><td>Cấu trúc dữ liệu cho witness nhỏ hơn nhiều so với Merkle Patricia Trie hiện tại. Nghiên cứu gần đây nghiêng về cây nhị phân dùng hàm hash thân thiện với ZK (EIP-7864).</td></tr>
<tr><td>State expiry</td><td>Trạng thái lâu không dùng được "lưu trữ" và có thể khôi phục khi cần. Còn đang nghiên cứu.</td></tr>
</table></div>

<h2>zkEVM trên L1</h2>
<p>Ý tưởng mạnh hơn nữa: thay vì mỗi node thực thi lại mọi giao dịch, một bên tạo <strong>bằng chứng ZK</strong> rằng khối đã được thực thi đúng, và node chỉ cần kiểm tra bằng chứng trong vài mili giây. Năm 2025, nhiều đội đã chứng minh được khối Ethereum trong thời gian thực (dưới 12 giây). Lộ trình hướng tới để validator có thể chọn xác minh bằng bằng chứng thay vì thực thi lại.</p>
<div class="flow arrows">
  <div><b>Hiện tại</b>Mỗi node thực thi lại toàn bộ khối</div>
  <div><b>Stateless</b>Node xác minh bằng witness, không lưu trạng thái</div>
  <div><b>zkEVM</b>Node chỉ kiểm tra bằng chứng nhỏ, có thể chạy trên điện thoại</div>
</div>
<div class="callout tip"><b>Vì sao quan trọng</b><p>Khi xác minh rẻ, có thể tăng gas limit mạnh mà không đẩy chi phí chạy node lên cao. Mở rộng L1 và phi tập trung không còn mâu thuẫn.</p></div>`,
      keys: [
        "Statelessness: node xác minh khối bằng witness, không cần lưu toàn bộ trạng thái.",
        "Verkle/cây nhị phân cho witness nhỏ hơn Merkle Patricia Trie.",
        "History expiry bỏ dữ liệu khối cũ khỏi node.",
        "zkEVM: node kiểm tra bằng chứng thay vì thực thi lại, mở đường tăng gas limit."
      ],
      quiz: [
        { q: "\"Witness\" trong statelessness là:", o: ["Một validator", "Phần trạng thái cần thiết kèm bằng chứng, đi theo khối", "Một ví", "Người làm chứng trong DAO"], a: 1, e: "Witness cho phép xác minh khối mà không cần lưu trạng thái." },
        { q: "Lợi ích chính của zkEVM trên L1 là:", o: ["Ẩn mọi giao dịch", "Node xác minh khối bằng bằng chứng nhỏ thay vì thực thi lại toàn bộ", "Tăng giá ETH", "Bỏ staking"], a: 1, e: "Xác minh rẻ giúp node nhẹ và có thể tăng thông lượng." },
        { q: "EIP-4444 nói về:", o: ["Hết hạn dữ liệu lịch sử ở node", "Blob", "Account abstraction", "Slashing"], a: 0, e: "Node không bắt buộc phục vụ lịch sử khối cũ." }
      ]
    },
    {
      id: "security-roadmap",
      title: "Finality, chống kiểm duyệt và an toàn hậu lượng tử",
      min: 8,
      src: ["/roadmap/security/", "/roadmap/single-slot-finality/", "/roadmap/pbs/", "/roadmap/secret-leader-election/", "/roadmap/security/quantum-resistance/", "/reports/trillion-dollar-security/"],
      tldr: "Các nâng cấp bảo mật hướng tới: finality nhanh hơn (từ ~13 phút xuống vài slot), chống kiểm duyệt và tập trung hóa do MEV (ePBS, FOCIL), bảo vệ người đề xuất khối, và chuẩn bị mật mã chống máy tính lượng tử.",
      body: `
<h2>Single slot finality (SSF)</h2>
<p>Hiện nay một khối được finalized sau khoảng 2 epoch (~13 phút). Trong thời gian đó, về lý thuyết có thể xảy ra tái tổ chức chuỗi. SSF hướng tới finality trong một (hoặc vài) slot, giúp sàn, cầu và người dùng chắc chắn nhanh hơn. Thách thức là gộp chữ ký của rất nhiều validator trong 12 giây; Pectra (gom validator tới 2048 ETH) giúp giảm số lượng validator cần xử lý.</p>

<h2>Proposer-builder separation và chống kiểm duyệt</h2>
<ul>
  <li>Xây khối tối ưu MEV đòi hỏi kỹ thuật và vốn lớn. Nếu validator phải tự làm, chỉ tổ chức lớn mới cạnh tranh nổi.</li>
  <li><strong>PBS</strong> tách vai trò: builder chuyên nghiệp xây khối, proposer (validator bình thường) chỉ chọn khối trả giá cao nhất. Hiện nay làm ngoài giao thức qua MEV-Boost và relay; <strong>ePBS</strong> (Glamsterdam) đưa vào giao thức.</li>
  <li>Builder ít và tập trung có thể kiểm duyệt giao dịch. <strong>FOCIL</strong> (Hegotá) buộc họ đưa các giao dịch trong danh sách của ủy ban vào khối.</li>
</ul>

<h2>Bầu chọn người đề xuất bí mật (SSLE)</h2>
<p>Hiện tại danh sách người đề xuất được biết trước, kẻ xấu có thể tấn công DoS vào đúng validator sắp đề xuất. Secret leader election giấu danh tính người đề xuất cho tới khi họ công bố khối.</p>

<h2>An toàn hậu lượng tử</h2>
<p>Máy tính lượng tử đủ mạnh có thể phá chữ ký ECDSA (tài khoản), BLS (validator) và KZG (blob). Hướng chuẩn bị:</p>
<ul>
  <li>Chữ ký dựa trên hàm hash cho validator.</li>
  <li>Bằng chứng STARK (dựa trên hash) thay cho các hệ thống dựa trên đường cong elliptic.</li>
  <li>Account abstraction (frame transactions) cho phép tài khoản chuyển sang chữ ký chống lượng tử.</li>
  <li>Kế hoạch khẩn cấp: có thể hard fork để chuyển đổi nếu mối đe dọa đến sớm.</li>
</ul>

<h2>Bảo mật ở mức nghìn tỷ đô</h2>
<p>Dự án "Trillion Dollar Security" của Ethereum Foundation đặt mục tiêu để Ethereum và hệ sinh thái đủ an toàn cho hàng tỷ người và hàng nghìn tỷ USD: từ trải nghiệm ví an toàn, bảo mật hợp đồng thông minh, hạ tầng, tới ứng phó sự cố. Cùng với đó là <strong>chương trình bug bounty</strong> thưởng cho người tìm ra lỗ hổng trong giao thức và client.</p>`,
      keys: [
        "SSF: finality trong một/vài slot thay vì ~13 phút.",
        "PBS tách builder và proposer; ePBS đưa vào giao thức; FOCIL chống kiểm duyệt.",
        "SSLE giấu danh tính người đề xuất để chống DoS.",
        "Chuẩn bị hậu lượng tử: chữ ký hash, STARK, account abstraction."
      ],
      quiz: [
        { q: "Hiện nay một khối Ethereum được finalized sau khoảng:", o: ["12 giây", "~13 phút (2 epoch)", "1 giờ", "1 ngày"], a: 1, e: "Single slot finality muốn rút ngắn con số này." },
        { q: "Mục đích của secret leader election là:", o: ["Giấu người đề xuất khối để họ không bị tấn công DoS", "Bầu CEO Ethereum", "Ẩn giao dịch", "Tăng thưởng"], a: 0, e: "Người tấn công không biết trước validator nào sẽ đề xuất." },
        { q: "Loại mật mã nào được coi là an toàn hơn trước máy tính lượng tử?", o: ["ECDSA", "Chữ ký và bằng chứng dựa trên hàm hash (như STARK)", "RSA", "BLS"], a: 1, e: "Các sơ đồ dựa trên đường cong elliptic dễ bị thuật toán Shor phá." }
      ]
    },
    {
      id: "zk-proofs",
      title: "Bằng chứng không tiết lộ (ZK proof)",
      min: 8,
      src: ["/zero-knowledge-proofs/"],
      tldr: "Bằng chứng không tiết lộ (zero-knowledge proof) cho phép chứng minh một điều là đúng mà không tiết lộ thông tin nào khác. Trên Ethereum, ZK được dùng cho ZK rollup, quyền riêng tư, danh tính và zkEVM.",
      body: `
<h2>Ví dụ trực giác</h2>
<p>Bạn muốn chứng minh với một người mù màu rằng hai quả bóng khác màu nhau mà không nói màu gì. Người đó giấu hai quả sau lưng, có thể tráo hoặc không, rồi hỏi bạn "có tráo không?". Nếu bóng giống màu, bạn chỉ đoán đúng 50%. Lặp lại 20 lần mà bạn luôn đúng thì gần như chắc chắn bóng khác màu, nhưng người kia vẫn không biết màu nào.</p>

<h2>Ba tính chất</h2>
<div class="compare">
  <div><h4>Đầy đủ (completeness)</h4><p>Nếu mệnh đề đúng, người chứng minh trung thực luôn thuyết phục được.</p></div>
  <div><h4>Đúng đắn (soundness)</h4><p>Nếu mệnh đề sai, kẻ gian không thể thuyết phục (trừ xác suất cực nhỏ).</p></div>
  <div><h4>Không tiết lộ (zero-knowledge)</h4><p>Người kiểm tra không biết gì thêm ngoài việc mệnh đề đúng.</p></div>
</div>

<h2>SNARK và STARK</h2>
<div class="table-wrap"><table>
<tr><th></th><th>zk-SNARK</th><th>zk-STARK</th></tr>
<tr><td>Kích thước bằng chứng</td><td>Rất nhỏ (vài trăm byte)</td><td>Lớn hơn (vài chục KB)</td></tr>
<tr><td>Trusted setup</td><td>Nhiều hệ thống cần (ví dụ Groth16); PLONK dùng setup chung</td><td>Không cần</td></tr>
<tr><td>Mật mã nền</td><td>Đường cong elliptic</td><td>Hàm hash</td></tr>
<tr><td>Chống lượng tử</td><td>Không</td><td>Có (được cho là)</td></tr>
</table></div>
<p>"Succinct" (ngắn gọn) nghĩa là bằng chứng nhỏ và kiểm tra nhanh, bất kể phép tính gốc lớn đến đâu. Đây là tính chất giúp ZK mở rộng blockchain, dù nhiều hệ thống "ZK" thực ra chỉ dùng tính ngắn gọn, không cần tính không tiết lộ.</p>

<h2>Ứng dụng trên Ethereum</h2>
<ul>
  <li><strong>ZK rollup:</strong> chứng minh hàng nghìn giao dịch đúng bằng một bằng chứng.</li>
  <li><strong>Riêng tư:</strong> giao dịch ẩn số tiền, ẩn liên kết người gửi và nhận.</li>
  <li><strong>Danh tính:</strong> chứng minh là người thật, đủ tuổi, thuộc một nhóm.</li>
  <li><strong>Bỏ phiếu chống mua phiếu</strong> (MACI).</li>
  <li><strong>zkEVM, light client, cầu ZK.</strong></li>
</ul>
<div class="callout info"><b>Trusted setup là gì?</b><p>Một số SNARK cần một nghi thức tạo tham số ban đầu. Nếu tất cả người tham gia thông đồng giữ lại "chất thải độc hại" thì có thể tạo bằng chứng giả. Nghi thức KZG cho blob của Ethereum có hơn 140.000 người tham gia; chỉ cần một người trung thực là an toàn.</p></div>`,
      keys: [
        "ZK proof chứng minh mệnh đề đúng mà không tiết lộ thông tin khác.",
        "Ba tính chất: đầy đủ, đúng đắn, không tiết lộ.",
        "SNARK: nhỏ, thường cần trusted setup; STARK: lớn hơn, không cần setup, chống lượng tử.",
        "Ứng dụng: ZK rollup, riêng tư, danh tính, bỏ phiếu, zkEVM."
      ],
      quiz: [
        { q: "Tính chất \"soundness\" nghĩa là:", o: ["Bằng chứng nhỏ", "Kẻ gian không thể chứng minh một mệnh đề sai", "Không tiết lộ thông tin", "Không cần trusted setup"], a: 1, e: "Đúng đắn đảm bảo không thể lừa người kiểm tra." },
        { q: "Ưu điểm của STARK so với SNARK là:", o: ["Bằng chứng nhỏ hơn", "Không cần trusted setup và được cho là chống lượng tử", "Dùng đường cong elliptic", "Chạy trên Bitcoin"], a: 1, e: "STARK dựa trên hàm hash." },
        { q: "Nghi thức KZG ceremony của Ethereum an toàn nếu:", o: ["Tất cả người tham gia trung thực", "Ít nhất một người tham gia trung thực", "Ethereum Foundation giữ bí mật", "Không ai tham gia"], a: 1, e: "Chỉ cần một người hủy phần bí mật của mình là tham số an toàn." }
      ]
    },
    {
      id: "governance",
      title: "Quản trị và EIP",
      min: 7,
      src: ["/governance/", "/eips/"],
      tldr: "Ethereum được quản trị ngoài chuỗi bằng đồng thuận xã hội. Thay đổi được đề xuất dưới dạng EIP, thảo luận công khai, các đội client đồng ý trong họp All Core Devs, và chỉ có hiệu lực khi người vận hành node nâng cấp phần mềm.",
      body: `
<h2>Ai tham gia?</h2>
<ul>
  <li><strong>Người giữ ETH và người dùng ứng dụng</strong></li>
  <li><strong>Nhà phát triển ứng dụng, công cụ</strong></li>
  <li><strong>Người vận hành node và validator</strong>: có quyền cuối cùng vì họ chọn chạy phần mềm nào</li>
  <li><strong>Tác giả EIP, nhà nghiên cứu</strong></li>
  <li><strong>Nhà phát triển giao thức (đội client)</strong></li>
</ul>

<h2>EIP là gì?</h2>
<p><strong>Ethereum Improvement Proposal</strong> là tài liệu mô tả một đề xuất thay đổi. Ai cũng có thể viết EIP.</p>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Mô tả</th></tr>
<tr><td>Standards Track · Core</td><td>Thay đổi đồng thuận, cần hard fork (ví dụ EIP-1559, EIP-4844).</td></tr>
<tr><td>Standards Track · Networking</td><td>Giao thức mạng p2p (devp2p, gossip).</td></tr>
<tr><td>Standards Track · Interface</td><td>API, JSON-RPC, ABI.</td></tr>
<tr><td>ERC</td><td>Chuẩn ở tầng ứng dụng (ERC-20, ERC-721, ERC-4337). Nay nằm ở kho ERCs riêng.</td></tr>
<tr><td>Meta, Informational</td><td>Quy trình, hướng dẫn, danh sách EIP trong một nâng cấp.</td></tr>
</table></div>
<div class="flow arrows">
  <div><b>Ý tưởng</b>Thảo luận trên Ethereum Magicians, ethresear.ch</div>
  <div><b>Draft</b>Viết EIP</div>
  <div><b>Review</b>Góp ý từ cộng đồng</div>
  <div><b>Last Call</b>Lần góp ý cuối</div>
  <div><b>Final</b>Được chấp nhận</div>
</div>

<h2>Từ EIP tới mạng</h2>
<p>Với EIP Core, các đội client thảo luận trong các cuộc họp công khai <strong>All Core Devs</strong> (ACDE cho lớp thực thi, ACDC cho lớp đồng thuận). Họ chọn EIP nào vào bản nâng cấp tiếp theo, chạy devnet, testnet, rồi chốt ngày lên mainnet. Người vận hành node quyết định có cập nhật hay không.</p>

<h2>Khi không đồng thuận</h2>
<p>Nếu một phần cộng đồng không đồng ý, họ có thể tiếp tục chạy phần mềm cũ, tạo ra một chuỗi tách biệt. Ví dụ: DAO fork 2016 tạo ra Ethereum Classic; The Merge 2022 tạo ra ETHPoW. Khả năng "fork" là cơ chế kiểm soát quyền lực cuối cùng.</p>`,
      keys: [
        "Quản trị ngoài chuỗi bằng đồng thuận xã hội; node operator có quyền cuối.",
        "EIP: Core, Networking, Interface, ERC, Meta, Informational.",
        "Quy trình: Draft → Review → Last Call → Final.",
        "All Core Devs chọn EIP cho nâng cấp; bất đồng có thể dẫn tới fork chuỗi."
      ],
      quiz: [
        { q: "ERC-20 thuộc loại EIP nào?", o: ["Core", "ERC (chuẩn tầng ứng dụng)", "Networking", "Meta"], a: 1, e: "ERC là chuẩn cho hợp đồng và ứng dụng, không cần hard fork." },
        { q: "Ai có quyền quyết định cuối cùng một nâng cấp có được áp dụng hay không?", o: ["Vitalik Buterin", "Ethereum Foundation", "Những người vận hành node chọn chạy phần mềm mới", "Sàn giao dịch lớn nhất"], a: 2, e: "Không ai buộc được node chạy phần mềm họ không muốn." },
        { q: "Cuộc họp nơi các đội client chọn EIP cho nâng cấp gọi là:", o: ["Devcon", "All Core Devs", "EthCC", "DAO vote"], a: 1, e: "ACDE và ACDC là các cuộc họp công khai, có ghi âm." }
      ]
    }
  ]
});
