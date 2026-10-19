window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "dev-advanced",
  no: 8,
  group: "Dành cho nhà phát triển",
  level: "Nâng cao",
  title: "Chủ đề nâng cao",
  desc: "Theo mục Advanced và Design của developer docs: chuẩn token, MEV, oracle, các giải pháp mở rộng, data availability, cầu nối, tầng mạng, cấu trúc dữ liệu và mã hóa, thiết kế UX cho Web3.",
  lessons: [
    {
      id: "token-standards",
      title: "Chuẩn token: ERC-20, 721, 1155, 4626",
      min: 10,
      src: ["/developers/docs/standards/", "/developers/docs/standards/tokens/", "/developers/docs/standards/tokens/erc-20/", "/developers/docs/standards/tokens/erc-721/", "/developers/docs/standards/tokens/erc-1155/"],
      tldr: "Chuẩn token là giao diện chung để ví, sàn và ứng dụng làm việc với mọi token mà không cần mã riêng. ERC-20 cho token thay thế được, ERC-721 cho NFT, ERC-1155 cho cả hai trong một hợp đồng, ERC-4626 cho vault sinh lãi.",
      body: `
<h2>ERC-20: token thay thế được</h2>
<pre><code>function name() public view returns (string)
function symbol() public view returns (string)
function decimals() public view returns (uint8)
function totalSupply() public view returns (uint256)
function balanceOf(address owner) public view returns (uint256)
function transfer(address to, uint256 value) public returns (bool)
function transferFrom(address from, address to, uint256 value) public returns (bool)
function approve(address spender, uint256 value) public returns (bool)
function allowance(address owner, address spender) public view returns (uint256)

event Transfer(address indexed from, address indexed to, uint256 value)
event Approval(address indexed owner, address indexed spender, uint256 value)</code></pre>
<p>Luồng <strong>approve → transferFrom</strong>: người dùng cho phép hợp đồng (ví dụ DEX) tiêu tối đa X token, sau đó hợp đồng gọi transferFrom. <code>decimals</code> thường là 18 (USDC là 6): 1 token = 10<sup>decimals</sup> đơn vị nhỏ nhất.</p>
<div class="callout warn"><b>Bẫy thường gặp</b><p>Một số token không trả về bool (USDT cũ), có phí khi chuyển, hoặc thay đổi số dư tự động (rebasing). Dùng <code>SafeERC20</code> và đừng giả định số nhận được bằng số gửi. Gửi token thẳng vào địa chỉ hợp đồng không hỗ trợ sẽ bị kẹt vĩnh viễn.</p></div>

<h2>Mở rộng của ERC-20</h2>
<ul>
  <li><strong>ERC-2612 (permit):</strong> approve bằng chữ ký EIP-712, không tốn giao dịch riêng.</li>
  <li><strong>Permit2</strong> (Uniswap): hợp đồng chung quản lý approval có thời hạn.</li>
  <li><strong>ERC-777:</strong> có hook khi nhận token, nhưng từng gây lỗi reentrancy; nay ít dùng.</li>
</ul>

<h2>ERC-721: NFT</h2>
<ul>
  <li>Mỗi token có <code>tokenId</code> riêng; <code>ownerOf(tokenId)</code>, <code>safeTransferFrom</code>, <code>approve</code>, <code>setApprovalForAll</code>.</li>
  <li><code>tokenURI(tokenId)</code> trỏ tới JSON metadata (name, description, image).</li>
  <li><code>safeTransferFrom</code> kiểm tra hợp đồng nhận có cài <code>onERC721Received</code> hay không.</li>
</ul>

<h2>ERC-1155: đa token</h2>
<p>Một hợp đồng quản lý nhiều loại token, mỗi ID có thể là thay thế được (vàng trong game) hoặc duy nhất (thanh kiếm hiếm). Hỗ trợ <strong>chuyển hàng loạt</strong> (<code>safeBatchTransferFrom</code>), tiết kiệm gas.</p>

<h2>ERC-4626: vault token hóa</h2>
<p>Chuẩn cho vault sinh lãi: gửi tài sản (<code>deposit</code>), nhận cổ phần (shares); <code>convertToAssets</code>, <code>previewRedeem</code>… giúp các giao thức tích hợp vault của nhau dễ dàng.</p>

<div class="table-wrap"><table>
<tr><th>Chuẩn</th><th>Dùng cho</th><th>Ví dụ</th></tr>
<tr><td>ERC-20</td><td>Token thay thế được</td><td>USDC, DAI, UNI, WETH</td></tr>
<tr><td>ERC-721</td><td>NFT</td><td>ENS, CryptoPunks (wrapped), nghệ thuật số</td></tr>
<tr><td>ERC-1155</td><td>Đa token, game</td><td>Vật phẩm game, phiên bản giới hạn</td></tr>
<tr><td>ERC-4626</td><td>Vault</td><td>Vault cho vay, chiến lược lợi suất</td></tr>
</table></div>`,
      keys: [
        "ERC-20: transfer, approve/transferFrom, allowance, decimals; sự kiện Transfer, Approval.",
        "ERC-2612 permit cho approve bằng chữ ký; cẩn thận token phí, rebasing, không trả bool.",
        "ERC-721: tokenId, ownerOf, tokenURI, safeTransferFrom.",
        "ERC-1155: nhiều loại token, chuyển hàng loạt; ERC-4626: vault sinh lãi."
      ],
      quiz: [
        { q: "Để một DEX dùng token ERC-20 của bạn, thông thường bạn phải:", o: ["Gửi khóa bí mật", "Gọi approve cho DEX, rồi DEX gọi transferFrom", "Gửi token vào địa chỉ DEX", "Không cần gì"], a: 1, e: "Đây là luồng approve → transferFrom." },
        { q: "USDC có decimals là 6. 1,5 USDC tương ứng bao nhiêu đơn vị nhỏ nhất?", o: ["15", "1.500.000", "1.5 × 10^18", "150"], a: 1, e: "1,5 × 10^6 = 1.500.000." },
        { q: "Ưu điểm của ERC-1155 là:", o: ["Chỉ cho NFT", "Quản lý nhiều loại token trong một hợp đồng và chuyển hàng loạt", "Không cần gas", "Tự động sinh lãi"], a: 1, e: "Phù hợp với game có nhiều loại vật phẩm." },
        { q: "ERC-4626 chuẩn hóa điều gì?", o: ["NFT", "Vault sinh lãi và cổ phần của nó", "Chữ ký", "Cầu nối"], a: 1, e: "Giúp tích hợp vault dễ dàng." }
      ]
    },
    {
      id: "mev",
      title: "MEV: giá trị có thể khai thác tối đa",
      min: 8,
      src: ["/developers/docs/mev/"],
      tldr: "MEV (maximal extractable value) là lợi nhuận có được nhờ quyền sắp xếp, chèn hoặc loại giao dịch trong khối. Searcher tìm cơ hội, builder xây khối, proposer chọn khối trả giá cao nhất. MEV có mặt tốt (chênh lệch giá, thanh lý) và mặt xấu (sandwich, rủi ro tập trung).",
      body: `
<h2>Các bên tham gia</h2>
<div class="flow arrows">
  <div><b>Người dùng</b>Gửi giao dịch</div>
  <div><b>Searcher</b>Bot tìm cơ hội, gửi bundle kèm tiền thưởng</div>
  <div><b>Builder</b>Ghép bundle và giao dịch thành khối giá trị nhất</div>
  <div><b>Relay</b>Chuyển khối từ builder tới proposer (MEV-Boost)</div>
  <div><b>Proposer</b>Validator ký khối trả giá cao nhất</div>
</div>

<h2>Các dạng MEV</h2>
<div class="table-wrap"><table>
<tr><th>Dạng</th><th>Mô tả</th><th>Ảnh hưởng</th></tr>
<tr><td>Arbitrage</td><td>Mua rẻ ở DEX này, bán đắt ở DEX khác.</td><td>Giúp giá các sàn đồng nhất.</td></tr>
<tr><td>Thanh lý</td><td>Thanh lý khoản vay dưới ngưỡng, nhận thưởng.</td><td>Giữ cho giao thức cho vay an toàn.</td></tr>
<tr><td>Sandwich</td><td>Mua trước giao dịch swap lớn của nạn nhân, bán ngay sau.</td><td>Người dùng nhận giá tệ hơn.</td></tr>
<tr><td>Front-running chung</td><td>Sao chép giao dịch có lợi và trả phí cao hơn.</td><td>Gây hại người dùng.</td></tr>
<tr><td>NFT sniping</td><td>Mua NFT niêm yết giá thấp ngay lập tức.</td><td>Trung tính.</td></tr>
</table></div>

<h2>Tác động tới Ethereum</h2>
<ul>
  <li><strong>Tập trung hóa:</strong> builder lớn có lợi thế; vài builder xây phần lớn khối.</li>
  <li><strong>Kiểm duyệt:</strong> builder hoặc relay có thể loại giao dịch nhất định.</li>
  <li><strong>Mạng bị tắc</strong> do bot cạnh tranh (giảm nhiều sau khi có đấu giá ngoài mempool).</li>
</ul>

<h2>Giải pháp</h2>
<ul>
  <li><strong>PBS:</strong> MEV-Boost hiện nay; ePBS (Glamsterdam) đưa vào giao thức.</li>
  <li><strong>FOCIL</strong> chống kiểm duyệt.</li>
  <li><strong>Người dùng:</strong> đặt slippage chặt, dùng RPC chống MEV (gửi riêng), dùng sàn đấu giá theo lô hoặc dựa trên intent (CoW Swap, UniswapX), MEV được hoàn lại cho người dùng (MEV-Share).</li>
</ul>`,
      keys: [
        "MEV = lợi nhuận từ quyền sắp xếp/chèn/loại giao dịch.",
        "Chuỗi cung ứng: searcher → builder → relay → proposer.",
        "Tốt: arbitrage, thanh lý. Xấu: sandwich, front-running.",
        "Giải pháp: PBS/ePBS, FOCIL, RPC riêng, intent, slippage chặt."
      ],
      quiz: [
        { q: "Tấn công sandwich hoạt động thế nào?", o: ["Đặt giao dịch mua trước và bán ngay sau giao dịch swap của nạn nhân", "Hack ví nạn nhân", "Gửi nhiều blob", "Tấn công 51%"], a: 0, e: "Nạn nhân mua ở giá cao hơn, kẻ tấn công hưởng chênh lệch." },
        { q: "Trong MEV-Boost, ai xây khối?", o: ["Proposer", "Builder", "Người dùng", "Light client"], a: 1, e: "Proposer chỉ chọn khối có giá thầu cao nhất qua relay." },
        { q: "Dạng MEV nào giúp giữ an toàn cho giao thức cho vay?", o: ["Sandwich", "Thanh lý", "Front-running", "Spam"], a: 1, e: "Thanh lý kịp thời ngăn nợ xấu." }
      ]
    },
    {
      id: "oracles",
      title: "Oracle",
      min: 7,
      src: ["/developers/docs/oracles/"],
      tldr: "Oracle đưa dữ liệu ngoài chuỗi (giá, thời tiết, kết quả sự kiện, số ngẫu nhiên) vào hợp đồng thông minh. \"Bài toán oracle\" là làm sao để dữ liệu đúng mà không phải tin một bên duy nhất.",
      body: `
<h2>Bài toán oracle</h2>
<p>Blockchain xác định, nên không thể gọi API bên ngoài (mỗi node có thể nhận kết quả khác nhau). Oracle là cầu nối, nhưng nếu oracle sai hoặc bị thao túng, hợp đồng dựa vào nó cũng sai, kể cả khi mã hoàn hảo.</p>
<p>Ba tiêu chí: <strong>đúng</strong> (dữ liệu chính xác), <strong>sẵn có</strong> (không bị ngắt), <strong>đồng bộ động cơ</strong> (người cung cấp có lý do để trung thực).</p>

<h2>Mô hình</h2>
<div class="table-wrap"><table>
<tr><th>Mô hình</th><th>Mô tả</th><th>Ví dụ</th></tr>
<tr><td>Push</td><td>Oracle định kỳ ghi giá lên chuỗi theo ngưỡng thay đổi hoặc thời gian.</td><td>Chainlink Data Feeds</td></tr>
<tr><td>Pull</td><td>Dữ liệu ký ngoài chuỗi; người dùng kéo vào trong giao dịch khi cần.</td><td>Pyth, Chainlink Data Streams, RedStone</td></tr>
<tr><td>Optimistic</td><td>Ai cũng đề xuất kết quả, có thời gian tranh chấp, bỏ phiếu khi có tranh chấp.</td><td>UMA</td></tr>
<tr><td>On-chain TWAP</td><td>Giá trung bình theo thời gian từ DEX, khó thao túng trong một khối.</td><td>Uniswap v3 oracle</td></tr>
</table></div>

<h2>Oracle phi tập trung</h2>
<ul>
  <li>Nhiều node độc lập, nhiều nguồn dữ liệu, lấy trung vị.</li>
  <li>Đặt cọc và phạt người báo sai; danh tiếng.</li>
  <li>Chữ ký ngưỡng để gộp kết quả.</li>
</ul>

<h2>Ngẫu nhiên kiểm chứng được (VRF)</h2>
<p>Game và xổ số cần số ngẫu nhiên không ai đoán trước hay thao túng. VRF trả về số ngẫu nhiên kèm bằng chứng mật mã rằng nó được tạo đúng.</p>
<div class="callout tip"><b>Khi tích hợp oracle</b><p>Kiểm tra thời điểm cập nhật cuối (dữ liệu cũ), giới hạn giá hợp lý, có phương án dự phòng khi oracle ngừng, và đừng dùng giá spot của một pool duy nhất.</p></div>`,
      keys: [
        "Oracle đưa dữ liệu ngoài chuỗi vào hợp đồng; hợp đồng chỉ an toàn bằng oracle của nó.",
        "Mô hình: push, pull, optimistic, TWAP trên chuỗi.",
        "Oracle phi tập trung: nhiều node, nhiều nguồn, đặt cọc.",
        "VRF cho số ngẫu nhiên có bằng chứng."
      ],
      quiz: [
        { q: "Vì sao hợp đồng không tự gọi API web được?", o: ["Vì tốn nhiều gas", "Vì EVM phải xác định; mỗi node có thể nhận kết quả khác nhau", "Vì bị cấm bởi luật", "Vì Internet chậm"], a: 1, e: "Mọi node phải ra cùng một kết quả." },
        { q: "Oracle mô hình \"pull\" hoạt động thế nào?", o: ["Oracle tự ghi giá định kỳ", "Dữ liệu được ký ngoài chuỗi và người dùng đưa vào trong giao dịch khi cần", "Bỏ phiếu DAO", "Dùng blob"], a: 1, e: "Tiết kiệm gas vì chỉ cập nhật khi cần." },
        { q: "Khi tích hợp oracle giá, nên kiểm tra:", o: ["Thời điểm cập nhật cuối để tránh dữ liệu cũ", "Màu logo", "Số validator", "Phiên bản Solidity của oracle"], a: 0, e: "Giá cũ có thể gây thanh lý sai hoặc bị khai thác." }
      ]
    },
    {
      id: "rollups",
      title: "Mở rộng: optimistic và ZK rollup",
      min: 10,
      src: ["/developers/docs/scaling/", "/developers/docs/scaling/optimistic-rollups/", "/developers/docs/scaling/zk-rollups/"],
      tldr: "Rollup thực thi giao dịch ngoài L1 nhưng đăng dữ liệu và cam kết trạng thái lên L1. Optimistic rollup dựa vào fraud proof và thời gian thử thách; ZK rollup gửi validity proof được kiểm tra ngay trên L1.",
      body: `
<h2>Mở rộng on-chain và off-chain</h2>
<p><strong>On-chain</strong>: thay đổi chính Ethereum (tăng gas limit, blob, danksharding). <strong>Off-chain</strong>: xử lý ngoài L1 (rollup, state channel, sidechain, plasma, validium). Lộ trình Ethereum tập trung vào <strong>rollup</strong> và làm L1 rẻ hơn cho dữ liệu rollup.</p>

<h2>Thành phần của rollup</h2>
<ul>
  <li><strong>Hợp đồng trên L1:</strong> giữ tài sản bridged, lưu state root, xác minh bằng chứng.</li>
  <li><strong>Sequencer:</strong> nhận, sắp xếp, thực thi giao dịch L2, gửi lô lên L1.</li>
  <li><strong>Data availability:</strong> dữ liệu giao dịch nén đăng trong blob để ai cũng tái tạo được trạng thái.</li>
  <li><strong>Cơ chế chứng minh:</strong> fraud proof hoặc validity proof.</li>
  <li><strong>Lối thoát:</strong> người dùng có thể buộc đưa giao dịch vào (forced inclusion) hoặc rút tiền ngay cả khi sequencer kiểm duyệt.</li>
</ul>

<h2>Optimistic rollup</h2>
<div class="flow arrows">
  <div><b>Đăng lô</b>Sequencer đăng dữ liệu + state root mới</div>
  <div><b>Thử thách</b>~7 ngày, ai cũng có thể phản đối</div>
  <div><b>Fraud proof</b>Tranh chấp tương tác, thu hẹp tới một bước, L1 thực thi bước đó</div>
  <div><b>Kết quả</b>Đúng thì finalize; sai thì hủy lô, phạt người đăng</div>
</div>
<p>Ví dụ: Arbitrum (BoLD), OP Stack (Optimism, Base…). Ưu: tương thích EVM tốt, chi phí tính toán thấp. Nhược: rút về L1 qua cầu chính thức mất ~7 ngày (thường dùng cầu thanh khoản để nhanh hơn).</p>

<h2>ZK rollup</h2>
<p>Sau mỗi lô, prover tạo một <strong>validity proof</strong> (SNARK/STARK) chứng minh trạng thái mới đúng. Hợp đồng L1 kiểm tra bằng chứng; nếu hợp lệ thì trạng thái được chấp nhận ngay.</p>
<ul>
  <li>Ví dụ: zkSync Era, Starknet, Scroll, Linea, Polygon zkEVM, Taiko.</li>
  <li>Ưu: rút tiền nhanh (khi bằng chứng được xác minh), không cần giả định có người canh.</li>
  <li>Nhược: tạo bằng chứng tốn tài nguyên; zkEVM phức tạp.</li>
</ul>
<p>zkEVM được phân loại theo mức tương thích (Vitalik): Type 1 (tương đương hoàn toàn Ethereum) tới Type 4 (tương thích ở mức ngôn ngữ cấp cao).</p>

<h2>So sánh</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Optimistic</th><th>ZK</th></tr>
<tr><td>Chứng minh</td><td>Fraud proof (khi có tranh chấp)</td><td>Validity proof (mỗi lô)</td></tr>
<tr><td>Rút về L1</td><td>~7 ngày</td><td>Sau khi bằng chứng được xác minh (giờ hoặc ít hơn)</td></tr>
<tr><td>Giả định</td><td>Ít nhất một người trung thực theo dõi</td><td>Toán học của hệ chứng minh</td></tr>
<tr><td>Chi phí tính toán</td><td>Thấp</td><td>Cao (prover)</td></tr>
<tr><td>Tương thích EVM</td><td>Rất cao</td><td>Tùy loại zkEVM</td></tr>
</table></div>`,
      keys: [
        "Rollup: thực thi ngoài L1, đăng dữ liệu (blob) và state root lên L1.",
        "Optimistic: fraud proof, thử thách ~7 ngày (Arbitrum, OP Stack).",
        "ZK: validity proof mỗi lô, rút nhanh (zkSync, Starknet, Scroll, Linea).",
        "Lối thoát (forced inclusion) bảo vệ người dùng khi sequencer kiểm duyệt."
      ],
      quiz: [
        { q: "Thành phần nào sắp xếp và thực thi giao dịch trên rollup?", o: ["Validator L1", "Sequencer", "Oracle", "Bootnode"], a: 1, e: "Nhiều rollup hiện dùng sequencer tập trung." },
        { q: "Giả định an toàn của optimistic rollup là:", o: ["Toán học của SNARK", "Có ít nhất một bên trung thực theo dõi và gửi fraud proof", "Sequencer luôn trung thực", "Không cần giả định"], a: 1, e: "Một người trung thực là đủ để chặn lô sai." },
        { q: "Vì sao rollup cần đăng dữ liệu giao dịch lên L1?", o: ["Để trang trí", "Để ai cũng tái tạo được trạng thái và kiểm tra/chứng minh", "Để trả thưởng validator", "Không cần"], a: 1, e: "Đây là data availability: thiếu dữ liệu thì không thể phản bác hay rút tiền." },
        { q: "zkEVM Type 1 nghĩa là:", o: ["Tương đương hoàn toàn với Ethereum", "Chỉ tương thích ngôn ngữ cấp cao", "Không dùng EVM", "Chạy trên Bitcoin"], a: 0, e: "Type 1 có thể chứng minh chính khối Ethereum L1." }
      ]
    },
    {
      id: "other-scaling",
      title: "State channel, sidechain, plasma, validium",
      min: 8,
      src: ["/developers/docs/scaling/state-channels/", "/developers/docs/scaling/sidechains/", "/developers/docs/scaling/plasma/", "/developers/docs/scaling/validium/"],
      tldr: "Ngoài rollup còn có: state channel (giao dịch giữa nhóm người tham gia, chỉ thanh toán cuối lên L1), sidechain (chuỗi độc lập có đồng thuận riêng), plasma (chuỗi con với fraud proof, dữ liệu ngoài L1), và validium (như ZK rollup nhưng dữ liệu ngoài L1).",
      body: `
<h2>State channel</h2>
<p>Các bên khóa tiền vào hợp đồng, trao đổi các trạng thái đã ký ngoài chuỗi không giới hạn, rồi đóng kênh với trạng thái cuối. Nếu có gian lận, bên kia nộp trạng thái mới hơn trong thời gian tranh chấp. Phù hợp thanh toán vi mô giữa các bên cố định; không phù hợp ứng dụng mở cho mọi người. Lightning Network của Bitcoin là ví dụ nổi tiếng của payment channel.</p>

<h2>Sidechain</h2>
<p>Blockchain riêng, tương thích EVM, nối với Ethereum qua cầu. Có validator và đồng thuận riêng, nên <strong>không thừa hưởng bảo mật của Ethereum</strong>. Ví dụ: Gnosis Chain, Polygon PoS (trước đây).</p>

<h2>Plasma</h2>
<p>Chuỗi con định kỳ đăng gốc Merkle lên L1, dùng fraud proof và cơ chế "exit". Dữ liệu không đăng lên L1, nên nếu nhà vận hành giữ dữ liệu, người dùng phải tự thoát ("mass exit"). Khó hỗ trợ hợp đồng tổng quát; phần lớn đã nhường chỗ cho rollup, dù nghiên cứu plasma kết hợp ZK vẫn tiếp tục.</p>

<h2>Validium</h2>
<p>Dùng validity proof như ZK rollup nhưng dữ liệu nằm ngoài L1 (ủy ban DA hoặc lớp DA khác). Rẻ hơn, thông lượng cao hơn, nhưng nếu dữ liệu bị giữ lại, người dùng có thể không rút được tiền. <strong>Volition</strong> cho người dùng chọn từng giao dịch nằm on-chain (rollup) hay off-chain (validium).</p>

<h2>So sánh</h2>
<div class="table-wrap"><table>
<tr><th>Giải pháp</th><th>Dữ liệu ở đâu</th><th>Bảo mật từ</th><th>Hợp đồng tổng quát</th></tr>
<tr><td>Optimistic rollup</td><td>L1</td><td>Ethereum + fraud proof</td><td>Có</td></tr>
<tr><td>ZK rollup</td><td>L1</td><td>Ethereum + validity proof</td><td>Có</td></tr>
<tr><td>Validium</td><td>Ngoài L1</td><td>Validity proof + bên giữ dữ liệu</td><td>Có</td></tr>
<tr><td>Plasma</td><td>Ngoài L1</td><td>Fraud proof + exit</td><td>Hạn chế</td></tr>
<tr><td>State channel</td><td>Các bên tham gia</td><td>Ethereum + tranh chấp</td><td>Hạn chế</td></tr>
<tr><td>Sidechain</td><td>Chuỗi riêng</td><td>Validator của sidechain</td><td>Có</td></tr>
</table></div>
<p>Ngoài ra, nhiều dự án dùng lớp DA bên ngoài (Celestia, EigenDA, Avail) và được gọi chung là <strong>optimium</strong> (optimistic + DA ngoài) hoặc validium.</p>`,
      keys: [
        "State channel: trao đổi trạng thái ký ngoài chuỗi giữa nhóm cố định.",
        "Sidechain: đồng thuận riêng, không thừa hưởng bảo mật Ethereum.",
        "Plasma: dữ liệu ngoài L1, dựa vào exit; khó hỗ trợ hợp đồng tổng quát.",
        "Validium: validity proof + dữ liệu ngoài L1; volition cho phép chọn."
      ],
      quiz: [
        { q: "Giải pháp nào KHÔNG thừa hưởng bảo mật của Ethereum?", o: ["ZK rollup", "Optimistic rollup", "Sidechain", "State channel"], a: 2, e: "Sidechain có validator và đồng thuận riêng." },
        { q: "Khác biệt giữa validium và ZK rollup là:", o: ["Validium không dùng bằng chứng", "Validium lưu dữ liệu ngoài L1", "Validium chậm hơn", "Validium chạy trên Bitcoin"], a: 1, e: "Cùng dùng validity proof, khác nơi lưu dữ liệu." },
        { q: "State channel phù hợp nhất cho:", o: ["Sàn DEX mở cho mọi người", "Thanh toán vi mô lặp lại giữa các bên cố định", "Lưu trữ file", "Bỏ phiếu DAO"], a: 1, e: "Các bên phải biết trước và online để tranh chấp." }
      ]
    },
    {
      id: "data-availability",
      title: "Data availability",
      min: 7,
      src: ["/developers/docs/data-availability/", "/developers/docs/data-availability/blockchain-data-storage-strategies/"],
      tldr: "Data availability là đảm bảo dữ liệu của khối đã thực sự được công bố để mọi người tải về. Không có DA, không ai kiểm tra được khối hay tạo được fraud proof. Data availability sampling cho phép kiểm tra điều này mà không cần tải toàn bộ.",
      body: `
<h2>Vì sao DA quan trọng?</h2>
<p>Một nhà vận hành có thể công bố state root mới nhưng giấu dữ liệu giao dịch. Khi đó không ai biết trạng thái thật, không ai tạo được fraud proof, người dùng không chứng minh được số dư để rút. Vì vậy, đảm bảo dữ liệu <em>có sẵn</em> (không phải lưu vĩnh viễn) là điều kiện cho rollup an toàn.</p>

<h2>Kỹ thuật</h2>
<ul>
  <li><strong>Tải toàn bộ:</strong> cách truyền thống, an toàn nhưng giới hạn thông lượng.</li>
  <li><strong>Erasure coding:</strong> mở rộng dữ liệu với phần dư thừa; chỉ cần một nửa là khôi phục được tất cả. Muốn giấu dữ liệu, kẻ xấu phải giấu hơn một nửa, rất dễ bị phát hiện.</li>
  <li><strong>Data availability sampling (DAS):</strong> mỗi node tải ngẫu nhiên vài phần nhỏ; nếu tất cả mẫu có sẵn thì xác suất dữ liệu bị giấu là cực nhỏ.</li>
  <li><strong>KZG commitment:</strong> cam kết đa thức giúp chứng minh mỗi phần dữ liệu khớp với cam kết, không cần fraud proof cho erasure coding.</li>
  <li><strong>Ủy ban DA (DAC):</strong> nhóm bên được tin tưởng ký xác nhận đã lưu dữ liệu; đơn giản nhưng cần tin.</li>
</ul>

<h2>DA và lưu trữ khác nhau</h2>
<div class="compare">
  <div><h4>Data availability</h4><p>Dữ liệu được công bố và có thể tải về <em>tại thời điểm</em> cần xác minh (blob giữ ~18 ngày).</p></div>
  <div><h4>Data retrievability / lưu trữ</h4><p>Có thể lấy lại dữ liệu cũ <em>lâu dài</em>: archive node, indexer, Portal Network, kho lưu trữ.</p></div>
</div>

<h2>Chiến lược lưu dữ liệu blockchain</h2>
<div class="table-wrap"><table>
<tr><th>Chiến lược</th><th>Ví dụ</th><th>Độ bền</th></tr>
<tr><td>Calldata trên L1</td><td>Rollup trước 2024</td><td>Vĩnh viễn, đắt</td></tr>
<tr><td>Blob</td><td>EIP-4844</td><td>~18 ngày, rẻ</td></tr>
<tr><td>Lớp DA ngoài</td><td>Celestia, EigenDA, Avail</td><td>Tùy hệ thống, tin vào lớp đó</td></tr>
<tr><td>Ủy ban DA</td><td>Validium</td><td>Tin vào thành viên ủy ban</td></tr>
<tr><td>Storage trong hợp đồng</td><td>Biến storage</td><td>Vĩnh viễn, rất đắt</td></tr>
</table></div>`,
      keys: [
        "DA: đảm bảo dữ liệu khối được công bố, điều kiện để rollup an toàn.",
        "Erasure coding + DAS + KZG cho phép xác minh DA bằng lấy mẫu.",
        "DA (có sẵn khi cần) khác với lưu trữ lâu dài.",
        "Chiến lược: calldata, blob, lớp DA ngoài, ủy ban DA, storage hợp đồng."
      ],
      quiz: [
        { q: "Nếu rollup công bố state root nhưng giấu dữ liệu giao dịch, hậu quả là:", o: ["Không ảnh hưởng", "Không ai kiểm tra được hay tạo fraud proof, người dùng có thể không rút được", "Phí giảm", "Khối nhanh hơn"], a: 1, e: "Đây là lý do DA là nền tảng của rollup." },
        { q: "Erasure coding giúp DAS hiệu quả vì:", o: ["Nén dữ liệu nhỏ lại", "Chỉ cần khoảng một nửa dữ liệu mở rộng là khôi phục được toàn bộ", "Mã hóa dữ liệu bí mật", "Xóa dữ liệu cũ"], a: 1, e: "Kẻ xấu phải giấu hơn một nửa, dễ bị lấy mẫu phát hiện." },
        { q: "Blob của Ethereum đảm bảo điều gì?", o: ["Lưu trữ vĩnh viễn", "Data availability trong khoảng ~18 ngày", "Riêng tư dữ liệu", "Thực thi trong EVM"], a: 1, e: "Đủ thời gian để kiểm tra; lưu lâu dài là việc của bên khác." }
      ]
    },
    {
      id: "bridges-dev",
      title: "Cầu nối dưới góc nhìn kỹ thuật",
      min: 7,
      src: ["/developers/docs/bridges/"],
      tldr: "Cầu nối cho phép chuyển tài sản và thông điệp giữa các chuỗi. Có thể phân loại theo cách xác minh: dựa vào bên ngoài (multisig, MPC), dựa vào light client/bằng chứng, dựa vào xác minh cục bộ (các bên đối tác), hoặc optimistic. Mỗi cách có đánh đổi giữa an toàn, tốc độ và tính tổng quát.",
      body: `
<h2>Cầu làm những gì?</h2>
<ul>
  <li><strong>Chuyển tài sản:</strong> lock & mint, burn & mint (token gốc đa chuỗi như USDC CCTP), hoặc atomic swap.</li>
  <li><strong>Truyền thông điệp:</strong> gọi hợp đồng ở chuỗi khác (cross-chain messaging).</li>
  <li><strong>Đọc dữ liệu:</strong> chứng minh trạng thái của chuỗi khác.</li>
</ul>

<h2>Phân loại theo cách xác minh</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Cách hoạt động</th><th>Đánh đổi</th></tr>
<tr><td>Xác minh bên ngoài</td><td>Một nhóm validator/multisig/MPC xác nhận sự kiện ở chuỗi nguồn.</td><td>Nhanh, tổng quát; an toàn bằng nhóm đó.</td></tr>
<tr><td>Xác minh gốc (native)</td><td>Hợp đồng ở chuỗi đích chạy light client hoặc kiểm tra ZK proof của chuỗi nguồn.</td><td>Ít cần tin; phức tạp, có thể đắt.</td></tr>
<tr><td>Xác minh cục bộ</td><td>Chỉ các bên trong giao dịch xác minh (atomic swap, HTLC).</td><td>An toàn; ít tổng quát, cần đối tác.</td></tr>
<tr><td>Optimistic</td><td>Giả định đúng, có watcher và thời gian thử thách.</td><td>Ít cần tin; chậm hơn.</td></tr>
</table></div>
<p>"Bộ ba bất khả" của cầu: khó đạt đồng thời <strong>trustless</strong>, <strong>mở rộng được</strong> (dễ thêm chuỗi) và <strong>tổng quát</strong> (truyền mọi thông điệp).</p>

<h2>Rủi ro khi tích hợp cầu</h2>
<ul>
  <li>Lỗi hợp đồng cầu, khóa người vận hành bị lộ.</li>
  <li>Tái tổ chức chuỗi nguồn sau khi cầu đã mint ở chuỗi đích (cần chờ finality).</li>
  <li>Token đại diện không phải token "chính thức" khiến thanh khoản bị phân mảnh.</li>
  <li>Phụ thuộc oracle, relayer.</li>
</ul>
<div class="callout tip"><b>Thực hành</b><p>Đọc kỹ mô hình tin cậy, giới hạn số tiền qua cầu (rate limit), có cơ chế tạm dừng, và theo dõi bảng đánh giá rủi ro (như L2BEAT Bridges).</p></div>`,
      keys: [
        "Cầu: chuyển tài sản (lock&mint, burn&mint), truyền thông điệp, đọc trạng thái.",
        "Xác minh: bên ngoài (multisig/MPC), gốc (light client, ZK), cục bộ (atomic swap), optimistic.",
        "Khó đạt đồng thời trustless, mở rộng, tổng quát.",
        "Rủi ro: lỗi hợp đồng, lộ khóa, reorg, thanh khoản phân mảnh."
      ],
      quiz: [
        { q: "Cầu dùng light client hoặc ZK proof để xác minh chuỗi nguồn thuộc loại:", o: ["Xác minh bên ngoài", "Xác minh gốc (native)", "Xác minh cục bộ", "Tập trung"], a: 1, e: "Hợp đồng chuỗi đích tự kiểm tra bằng chứng." },
        { q: "Vì sao cầu nên chờ chuỗi nguồn finalize trước khi mint?", o: ["Để tiết kiệm gas", "Để tránh bị reorg làm mất giao dịch gốc trong khi token đã mint", "Vì luật yêu cầu", "Để tăng phí"], a: 1, e: "Nếu giao dịch nguồn bị đảo ngược, token đích không còn đảm bảo." }
      ]
    },
    {
      id: "networking-layer",
      title: "Tầng mạng",
      min: 8,
      src: ["/developers/docs/networking-layer/", "/developers/docs/networking-layer/network-addresses/", "/developers/docs/networking-layer/portal-network/"],
      tldr: "Node Ethereum dùng hai mạng ngang hàng: lớp thực thi dùng devp2p (discv4/discv5, RLPx, giao thức eth) để lan truyền giao dịch; lớp đồng thuận dùng libp2p (discv5, gossipsub) để lan truyền khối và attestation. Portal Network là mạng phân tán để phục vụ dữ liệu lịch sử cho thiết bị nhẹ.",
      body: `
<h2>Hai ngăn xếp mạng</h2>
<div class="compare">
  <div><h4>Lớp thực thi: devp2p</h4><ul><li><strong>Discovery:</strong> discv4/discv5 qua UDP, bảng Kademlia.</li><li><strong>RLPx:</strong> kênh TCP mã hóa giữa các peer.</li><li><strong>Sub-protocol:</strong> <code>eth</code> (giao dịch, khối), <code>snap</code> (đồng bộ trạng thái).</li></ul></div>
  <div><h4>Lớp đồng thuận: libp2p</h4><ul><li><strong>Discovery:</strong> discv5 + ENR.</li><li><strong>Gossipsub:</strong> chủ đề cho beacon block, attestation theo subnet, blob/cột dữ liệu.</li><li><strong>Req/Resp:</strong> yêu cầu khối theo khoảng, trạng thái.</li><li><strong>Mã hóa:</strong> SSZ + nén Snappy.</li></ul></div>
</div>
<p>Giao dịch được gossip ở lớp thực thi; khối và phiếu bầu được gossip ở lớp đồng thuận. Engine API nối hai lớp trong cùng một node.</p>

<h2>Địa chỉ mạng</h2>
<div class="table-wrap"><table>
<tr><th>Định dạng</th><th>Dùng ở</th><th>Ví dụ</th></tr>
<tr><td>enode</td><td>Lớp thực thi (cũ)</td><td><code>enode://&lt;pubkey&gt;@10.3.58.6:30303</code></td></tr>
<tr><td>ENR (Ethereum Node Record)</td><td>Cả hai lớp; có chữ ký, chứa IP, cổng, khóa, thông tin fork</td><td><code>enr:-IS4Q…</code></td></tr>
<tr><td>multiaddr</td><td>libp2p</td><td><code>/ip4/192.168.0.1/tcp/9000/p2p/…</code></td></tr>
</table></div>

<h2>Portal Network</h2>
<p>Thiết bị nhẹ không thể lưu toàn bộ lịch sử. Portal Network chia dữ liệu (header, thân khối, receipt, trạng thái) cho nhiều node nhỏ theo bảng băm phân tán; mỗi node lưu một phần và phục vụ cho người khác. Kết hợp với history expiry, đây là cách để dữ liệu cũ vẫn truy cập được mà mỗi node không phải lưu hết.</p>
<div class="callout info"><b>Cập nhật gần đây</b><p>Fusaka thêm các subnet cho cột dữ liệu của PeerDAS. Glamsterdam dự kiến có phiên bản giao thức eth mới để chia sẻ block-level access lists và phân trang receipt.</p></div>`,
      keys: [
        "Lớp thực thi: devp2p (discv4/5, RLPx, eth, snap); lớp đồng thuận: libp2p (discv5, gossipsub, req/resp, SSZ+Snappy).",
        "Địa chỉ: enode, ENR (có chữ ký), multiaddr.",
        "Portal Network phân tán dữ liệu lịch sử cho thiết bị nhẹ."
      ],
      quiz: [
        { q: "Lớp đồng thuận dùng ngăn xếp mạng nào?", o: ["devp2p", "libp2p", "HTTP", "BitTorrent"], a: 1, e: "libp2p với gossipsub." },
        { q: "ENR là gì?", o: ["Một loại token", "Bản ghi node có chữ ký chứa IP, cổng, khóa và thông tin khác", "Một opcode", "Tên miền ENS"], a: 1, e: "Ethereum Node Record dùng trong discv5." },
        { q: "Mục tiêu của Portal Network là:", o: ["Ẩn giao dịch", "Phân tán dữ liệu lịch sử để thiết bị nhẹ truy cập được", "Tăng phần thưởng", "Thay thế consensus client"], a: 1, e: "Mỗi node lưu một phần và phục vụ cho mạng." }
      ]
    },
    {
      id: "data-structures",
      title: "Cấu trúc dữ liệu và mã hóa",
      min: 9,
      src: ["/developers/docs/data-structures-and-encoding/", "/developers/docs/data-structures-and-encoding/patricia-merkle-trie/", "/developers/docs/data-structures-and-encoding/rlp/", "/developers/docs/data-structures-and-encoding/ssz/", "/developers/docs/data-structures-and-encoding/web3-secret-storage/"],
      tldr: "Ethereum dùng Merkle Patricia Trie để lưu trạng thái, giao dịch và receipt (có gốc hash trong header). Lớp thực thi mã hóa dữ liệu bằng RLP; lớp đồng thuận dùng SSZ với Merkle hóa. Khóa bí mật được lưu trong keystore JSON mã hóa theo chuẩn Web3 Secret Storage.",
      body: `
<h2>Merkle Patricia Trie</h2>
<p>Kết hợp cây Merkle (mỗi nút là hash của các con, nên gốc cam kết toàn bộ dữ liệu) và Patricia trie (cây tiền tố nén). Khóa được duyệt theo từng nibble (4 bit).</p>
<ul>
  <li>Bốn loại nút: <strong>rỗng</strong>, <strong>branch</strong> (17 phần tử: 16 nibble + giá trị), <strong>extension</strong> (đường dẫn chung + con trỏ), <strong>leaf</strong> (phần còn lại của khóa + giá trị).</li>
  <li>Bốn trie: <strong>state trie</strong> (địa chỉ → tài khoản), <strong>storage trie</strong> của từng hợp đồng, <strong>transactions trie</strong> và <strong>receipts trie</strong> của mỗi khối.</li>
  <li>Khóa trong state trie là <code>keccak256(address)</code> để cây cân bằng.</li>
  <li>Cho phép <strong>Merkle proof</strong>: chứng minh một giá trị thuộc trạng thái chỉ bằng nhánh từ lá tới gốc.</li>
</ul>

<h2>RLP (Recursive Length Prefix)</h2>
<p>Định dạng tuần tự hóa của lớp thực thi, chỉ mã hóa hai thứ: <strong>chuỗi byte</strong> và <strong>danh sách</strong>.</p>
<div class="table-wrap"><table>
<tr><th>Dữ liệu</th><th>Mã hóa</th></tr>
<tr><td>Một byte &lt; 0x80</td><td>Chính nó</td></tr>
<tr><td>Chuỗi 0–55 byte</td><td><code>0x80 + độ dài</code>, theo sau là chuỗi</td></tr>
<tr><td>Chuỗi &gt; 55 byte</td><td><code>0xb7 + số byte của độ dài</code>, độ dài, chuỗi</td></tr>
<tr><td>Danh sách tổng 0–55 byte</td><td><code>0xc0 + độ dài</code>, các phần tử</td></tr>
<tr><td>Danh sách &gt; 55 byte</td><td><code>0xf7 + số byte của độ dài</code>, độ dài, phần tử</td></tr>
</table></div>
<pre><code>"dog"           → 0x83 'd' 'o' 'g'
["cat","dog"]   → 0xc8 0x83 'c' 'a' 't' 0x83 'd' 'o' 'g'
""              → 0x80
0 (số nguyên)    → 0x80</code></pre>

<h2>SSZ (Simple Serialize)</h2>
<ul>
  <li>Dùng ở lớp đồng thuận; có kiểu dữ liệu (uint64, Vector, List, Container, Bitlist…).</li>
  <li>Phần kích thước cố định nằm trước, phần thay đổi được chỉ tới bằng offset: dễ đọc từng trường mà không cần giải mã cả cấu trúc.</li>
  <li><strong>Merkleization:</strong> mỗi đối tượng có <code>hash_tree_root</code>; light client có thể chứng minh từng trường bằng Merkle proof.</li>
</ul>

<h2>Web3 Secret Storage</h2>
<p>Định dạng keystore JSON để lưu khóa bí mật đã mã hóa bằng mật khẩu:</p>
<pre><code>{
  "crypto": {
    "cipher": "aes-128-ctr",
    "ciphertext": "…",
    "cipherparams": { "iv": "…" },
    "kdf": "scrypt",
    "kdfparams": { "dklen": 32, "n": 262144, "r": 8, "p": 1, "salt": "…" },
    "mac": "…"
  },
  "id": "…uuid…",
  "version": 3
}</code></pre>
<p>Mật khẩu đi qua hàm dẫn xuất khóa (scrypt hoặc PBKDF2) để tạo khóa giải mã; MAC kiểm tra mật khẩu đúng. Keystore của validator dùng chuẩn tương tự (EIP-2335).</p>`,
      keys: [
        "Merkle Patricia Trie: branch/extension/leaf; state, storage, transactions, receipts trie.",
        "RLP chỉ mã hóa chuỗi byte và danh sách; dùng ở lớp thực thi.",
        "SSZ có kiểu, dùng offset, có hash_tree_root; dùng ở lớp đồng thuận.",
        "Web3 Secret Storage: keystore JSON mã hóa bằng scrypt/PBKDF2 + AES-128-CTR."
      ],
      quiz: [
        { q: "RLP của chuỗi \"dog\" bắt đầu bằng byte nào?", o: ["0x03", "0x83", "0xc3", "0xf7"], a: 1, e: "0x80 + 3 = 0x83." },
        { q: "Lớp đồng thuận dùng định dạng tuần tự hóa nào?", o: ["RLP", "SSZ", "JSON", "Protobuf"], a: 1, e: "SSZ có Merkleization tiện cho light client." },
        { q: "Loại nút nào trong Merkle Patricia Trie có 17 phần tử?", o: ["Leaf", "Extension", "Branch", "Rỗng"], a: 2, e: "16 con theo nibble + 1 vị trí giá trị." },
        { q: "Trong keystore Web3 Secret Storage, mật khẩu được dùng để:", o: ["Ký giao dịch trực tiếp", "Dẫn xuất khóa giải mã qua scrypt/PBKDF2", "Tạo địa chỉ", "Tính gas"], a: 1, e: "Khóa dẫn xuất giải mã ciphertext chứa khóa bí mật." }
      ]
    },
    {
      id: "design-ux",
      title: "Thiết kế và UX cho Web3",
      min: 7,
      src: ["/developers/docs/design-and-ux/", "/developers/docs/design-and-ux/heuristics-for-web3/", "/developers/docs/design-and-ux/dex-design-best-practice/"],
      tldr: "Người dùng Web3 phải đối mặt với khái niệm lạ (ví, gas, ký), rủi ro không thể hoàn tác và trạng thái giao dịch chờ. Thiết kế tốt giải thích rõ, cho xem trước kết quả, phản hồi trạng thái liên tục và bảo vệ người dùng khỏi sai lầm.",
      body: `
<h2>Nguyên tắc (heuristics) cho Web3</h2>
<div class="table-wrap"><table>
<tr><th>Nguyên tắc</th><th>Áp dụng</th></tr>
<tr><td>Hiển thị trạng thái hệ thống</td><td>Giao dịch đang chờ, đã vào khối, đã finalized; link tới explorer.</td></tr>
<tr><td>Nói ngôn ngữ của người dùng</td><td>"Cho phép ứng dụng dùng 100 USDC" thay vì "approve(0x…, 100000000)".</td></tr>
<tr><td>Ngăn lỗi</td><td>Cảnh báo địa chỉ lạ, mạng sai, slippage cao, approve không giới hạn.</td></tr>
<tr><td>Xem trước kết quả</td><td>Mô phỏng: tài sản nào ra, tài sản nào vào, phí bao nhiêu.</td></tr>
<tr><td>Minh bạch về rủi ro</td><td>Nói rõ rủi ro hợp đồng, quyền admin, phí.</td></tr>
<tr><td>Người dùng kiểm soát</td><td>Không ép kết nối ví ngay khi vào trang; cho phép xem trước khi kết nối.</td></tr>
<tr><td>Nhất quán và quen thuộc</td><td>Dùng mẫu UI phổ biến cho kết nối ví, chọn mạng, swap.</td></tr>
</table></div>

<h2>Thiết kế sàn DEX</h2>
<ul>
  <li>Bố cục swap quen thuộc: token bán ở trên, token mua ở dưới, nút đảo chiều ở giữa.</li>
  <li>Hiển thị tỷ giá, tác động giá (price impact), số nhận tối thiểu, phí mạng, tuyến giao dịch.</li>
  <li>Cho chỉnh slippage với mặc định hợp lý; cảnh báo khi quá cao.</li>
  <li>Xử lý approve rõ ràng (hoặc dùng permit) để người dùng hiểu vì sao cần hai bước.</li>
  <li>Danh sách token có xác minh, cảnh báo token giả mạo.</li>
</ul>

<h2>Giảm ma sát cho người mới</h2>
<ul>
  <li>Ví nhúng, đăng nhập bằng passkey hoặc email, ví thông minh.</li>
  <li>Tài trợ gas cho thao tác đầu tiên (paymaster).</li>
  <li>Hiển thị số tiền theo tiền pháp định bên cạnh token.</li>
  <li>Dùng tên ENS và avatar thay vì chuỗi 0x.</li>
</ul>`,
      keys: [
        "Hiển thị trạng thái giao dịch, nói ngôn ngữ người dùng, ngăn lỗi, xem trước kết quả.",
        "DEX: tỷ giá, price impact, số nhận tối thiểu, slippage, xử lý approve rõ ràng.",
        "Giảm ma sát: ví nhúng, passkey, paymaster, ENS."
      ],
      quiz: [
        { q: "Cách thể hiện tốt nhất một yêu cầu approve cho người dùng là:", o: ["Hiện hex thô của calldata", "\"Cho phép ứng dụng X dùng tối đa 100 USDC của bạn\"", "Không hiển thị gì", "Chỉ hiện \"Ký\""], a: 1, e: "Nói ngôn ngữ của người dùng và nêu rõ hệ quả." },
        { q: "Thông tin nào quan trọng cần hiển thị trên giao diện swap?", o: ["Số validator", "Price impact và số nhận tối thiểu", "Phiên bản Solidity", "Block hash"], a: 1, e: "Giúp người dùng hiểu rủi ro trượt giá." }
      ]
    }
  ]
});
