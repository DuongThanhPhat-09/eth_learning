window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "basics",
  no: 1,
  group: "Dành cho mọi người",
  level: "Cơ bản",
  title: "Nền tảng Ethereum",
  desc: "Ethereum là gì, ETH dùng để làm gì, khác Bitcoin ở đâu, Web3 và hợp đồng thông minh nghĩa là gì, và vì sao Ethereum ra đời.",
  lessons: [
    {
      id: "what-is-ethereum",
      title: "Ethereum là gì?",
      min: 8,
      src: ["/what-is-ethereum/", "/learn/"],
      tldr: "Ethereum là một mạng máy tính toàn cầu, không ai sở hữu, chạy cùng một bộ quy tắc. Ai cũng có thể dùng nó để giữ tài sản, chuyển tiền và chạy ứng dụng mà không cần xin phép một công ty trung gian.",
      body: `
<h2>Một "máy tính chung" của cả thế giới</h2>
<p>Hãy hình dung hàng chục nghìn máy tính trên khắp thế giới cùng giữ một bản sao của một cuốn sổ cái và cùng chạy một chương trình. Khi bạn gửi yêu cầu (một <strong>giao dịch</strong>), tất cả các máy cùng kiểm tra và cập nhật sổ cái theo đúng một quy tắc. Không máy nào có quyền tự ý sửa. Đó là Ethereum.</p>
<p>Khác với ngân hàng hay một nền tảng mạng xã hội, không có máy chủ trung tâm nào có thể tắt Ethereum, đóng băng tài khoản của bạn hay đổi luật chơi một cách đơn phương. Quy tắc được viết bằng mã nguồn mở và mọi người cùng thực thi.</p>

<h2>Blockchain: sổ cái được nối thành chuỗi</h2>
<p>Dữ liệu của Ethereum được ghi theo từng <strong>khối (block)</strong>. Mỗi khối chứa một nhóm giao dịch và một "dấu vân tay" mật mã (hash) của khối trước nó. Vì các khối được nối với nhau, muốn sửa một giao dịch cũ thì phải sửa toàn bộ các khối sau, và phải thuyết phục được cả mạng chấp nhận. Trên thực tế điều đó gần như không thể.</p>
<div class="flow arrows">
  <div><b>Khối N-1</b>Giao dịch… + hash của khối N-2</div>
  <div><b>Khối N</b>Giao dịch… + hash của khối N-1</div>
  <div><b>Khối N+1</b>Giao dịch… + hash của khối N</div>
</div>
<p>Trên Ethereum, cứ <strong>12 giây</strong> (một "slot") lại có cơ hội để một khối mới được thêm vào.</p>

<h2>Ethereum làm được gì?</h2>
<ul>
  <li><strong>Tiền và thanh toán không biên giới:</strong> gửi ETH hoặc stablecoin (đồng tiền ổn định giá như USDC) cho bất kỳ ai, bất kỳ lúc nào, thường chỉ trong vài giây đến vài phút.</li>
  <li><strong>Tài chính mở (DeFi):</strong> vay, cho vay, trao đổi, tiết kiệm mà không cần mở tài khoản ngân hàng.</li>
  <li><strong>Sở hữu số:</strong> NFT chứng minh bạn sở hữu một món đồ số; token hóa tài sản thật như trái phiếu, bất động sản.</li>
  <li><strong>Tổ chức và danh tính:</strong> DAO cho phép cộng đồng cùng quản lý quỹ; danh tính phi tập trung giúp bạn chứng minh thông tin mà không phải khai báo quá nhiều.</li>
  <li><strong>Ứng dụng không thể bị kiểm duyệt:</strong> lập trình viên viết <strong>hợp đồng thông minh</strong> và triển khai lên mạng, ai cũng dùng được.</li>
</ul>

<h2>Các đặc tính cốt lõi</h2>
<div class="table-wrap"><table>
<tr><th>Đặc tính</th><th>Ý nghĩa với người dùng</th></tr>
<tr><td>Không cần xin phép (permissionless)</td><td>Ai cũng có thể tạo tài khoản, gửi giao dịch, viết ứng dụng. Không cần CMND, không cần duyệt hồ sơ.</td></tr>
<tr><td>Chống kiểm duyệt</td><td>Không có một bên nào chặn được giao dịch hợp lệ của bạn một cách lâu dài.</td></tr>
<tr><td>Trung lập</td><td>Mạng đối xử với mọi người như nhau, không phân biệt quốc tịch hay tài sản.</td></tr>
<tr><td>Minh bạch, kiểm chứng được</td><td>Mọi giao dịch đều công khai; ai cũng có thể chạy một node để tự kiểm tra.</td></tr>
<tr><td>Luôn hoạt động</td><td>Mạng chạy liên tục từ năm 2015, không có ngày nghỉ hay giờ đóng cửa.</td></tr>
<tr><td>Kết hợp được (composable)</td><td>Các ứng dụng có thể gọi lẫn nhau như những mảnh Lego, tạo ra sản phẩm mới.</td></tr>
</table></div>

<h2>Ai vận hành Ethereum?</h2>
<p>Mạng được vận hành bởi hàng nghìn <strong>node</strong> (máy tính chạy phần mềm Ethereum) do cá nhân, công ty và tổ chức trên toàn thế giới tự nguyện chạy. Từ năm 2022, Ethereum dùng cơ chế <strong>bằng chứng cổ phần (proof-of-stake)</strong>: những người muốn tham gia xác thực khối phải khóa (stake) ETH làm tài sản đảm bảo. Nếu họ gian lận, một phần ETH đó bị phạt. Bạn sẽ học kỹ phần này ở học phần 04 và 06.</p>

<div class="callout info"><b>Ethereum và các mạng Layer 2</b><p>Ethereum ngày nay là một hệ sinh thái nhiều tầng. Mạng chính (Layer 1) lo việc bảo mật và thanh toán cuối cùng; các mạng <strong>Layer 2</strong> như Arbitrum, Optimism, Base, zkSync xử lý giao dịch rẻ hơn rồi gửi bằng chứng về Ethereum.</p></div>

<h2>Những hiểu lầm thường gặp</h2>
<ul>
  <li><strong>"Ethereum là một công ty."</strong> Sai. Không có CEO hay cổ đông. Ethereum Foundation là một tổ chức phi lợi nhuận hỗ trợ hệ sinh thái nhưng không kiểm soát mạng.</li>
  <li><strong>"Ethereum chỉ là một đồng coin."</strong> ETH là đồng tiền gốc, còn Ethereum là cả nền tảng: mạng lưới, quy tắc và các ứng dụng chạy trên đó.</li>
  <li><strong>"Ethereum tốn rất nhiều điện."</strong> Đúng với thời đào (proof-of-work) trước 2022. Sau The Merge, mức tiêu thụ năng lượng giảm khoảng 99,95%.</li>
</ul>`,
      keys: [
        "Ethereum là mạng máy tính phân tán, cùng giữ một sổ cái và chạy chung một bộ quy tắc.",
        "Dữ liệu được ghi theo khối, khối mới tham chiếu hash của khối cũ; một slot dài 12 giây.",
        "Đặc tính quan trọng: không cần xin phép, chống kiểm duyệt, trung lập, minh bạch, kết hợp được.",
        "Từ 2022 Ethereum dùng proof-of-stake; không có công ty nào sở hữu mạng."
      ],
      quiz: [
        { q: "Điều gì mô tả đúng nhất về Ethereum?", o: ["Một công ty công nghệ phát hành tiền điện tử", "Một mạng máy tính phân tán chạy chung một bộ quy tắc, không ai sở hữu", "Một ngân hàng số hoạt động 24/7", "Một sàn giao dịch tiền mã hóa"], a: 1, e: "Ethereum là mạng phi tập trung; không có công ty hay ngân hàng nào điều hành." },
        { q: "Vì sao rất khó sửa một giao dịch đã nằm sâu trong blockchain?", o: ["Vì dữ liệu được mã hóa bằng mật khẩu", "Vì mỗi khối chứa hash của khối trước, sửa một khối phải sửa mọi khối sau và cả mạng phải chấp nhận", "Vì Ethereum Foundation khóa dữ liệu cũ", "Vì giao dịch cũ bị xóa sau 12 giây"], a: 1, e: "Chuỗi hash nối các khối với nhau, và đồng thuận của cả mạng bảo vệ lịch sử." },
        { q: "Một slot trên Ethereum dài bao lâu?", o: ["1 giây", "12 giây", "10 phút", "1 giờ"], a: 1, e: "Mỗi slot dài 12 giây và có thể chứa một khối." },
        { q: "Sau The Merge, Ethereum dùng cơ chế đồng thuận nào?", o: ["Proof-of-work", "Proof-of-authority", "Proof-of-stake", "Không dùng cơ chế nào"], a: 2, e: "Từ tháng 9/2022 Ethereum chuyển sang proof-of-stake." }
      ]
    },
    {
      id: "what-is-ether",
      title: "Ether (ETH) là gì?",
      min: 7,
      src: ["/what-is-ether/", "/developers/docs/intro-to-ether/"],
      tldr: "ETH là đồng tiền gốc của Ethereum. Nó được dùng để trả phí giao dịch (gas), để stake bảo vệ mạng, và làm tài sản thế chấp, phương tiện thanh toán trong các ứng dụng.",
      body: `
<h2>Tiền tệ gốc của mạng</h2>
<p><strong>Ether (ký hiệu ETH)</strong> là tài sản được tích hợp sẵn trong giao thức Ethereum. Mọi thao tác thay đổi trạng thái mạng, từ chuyển tiền đến chạy hợp đồng thông minh, đều phải trả phí bằng ETH. Phí này trả cho việc sử dụng tài nguyên tính toán chung và giúp ngăn chặn spam.</p>

<h2>ETH dùng để làm gì?</h2>
<div class="compare">
  <div><h4>Trả phí gas</h4><p>Mỗi giao dịch tốn một lượng "gas". Bạn trả gas bằng ETH. Một phần phí (base fee) bị <strong>đốt</strong> vĩnh viễn.</p></div>
  <div><h4>Bảo mật mạng</h4><p>Validator stake ETH làm tài sản đảm bảo. Gian lận sẽ bị phạt (slashing), làm cho tấn công trở nên rất tốn kém.</p></div>
  <div><h4>Tiền trong ứng dụng</h4><p>ETH là tài sản thế chấp phổ biến trong DeFi, dùng để mua NFT, thanh toán, hoặc giữ làm tài sản.</p></div>
</div>

<h2>Đơn vị của ETH</h2>
<p>Giống như 1 đồng có thể chia nhỏ, ETH có nhiều đơn vị. Hai đơn vị bạn gặp nhiều nhất là <strong>wei</strong> (nhỏ nhất) và <strong>gwei</strong> (dùng để báo giá gas).</p>
<div class="table-wrap"><table>
<tr><th>Đơn vị</th><th>Giá trị bằng wei</th><th>Hay dùng khi</th></tr>
<tr><td>wei</td><td>1</td><td>Tính toán trong mã nguồn, hợp đồng thông minh</td></tr>
<tr><td>gwei (gigawei)</td><td>10<sup>9</sup> wei = 0,000000001 ETH</td><td>Báo giá phí gas</td></tr>
<tr><td>ether</td><td>10<sup>18</sup> wei</td><td>Số dư, chuyển tiền thông thường</td></tr>
</table></div>
<p>Tên "wei" đặt theo Wei Dai, tác giả ý tưởng b-money. Đơn vị "szabo" và "finney" (ít dùng) đặt theo Nick Szabo và Hal Finney.</p>

<h2>ETH được phát hành và đốt như thế nào?</h2>
<ul>
  <li><strong>Phát hành:</strong> ETH mới được tạo ra để thưởng cho validator khi họ đề xuất khối và bỏ phiếu (attestation) đúng. Không còn phần thưởng đào như trước 2022.</li>
  <li><strong>Đốt (burn):</strong> từ bản nâng cấp London (2021, EIP-1559), <strong>base fee</strong> của mọi giao dịch bị đốt. Khi mạng bận, lượng ETH bị đốt có thể lớn hơn lượng phát hành mới, khiến tổng cung giảm.</li>
</ul>
<div class="callout info"><b>Không có giới hạn cung cố định</b><p>Khác với Bitcoin (21 triệu BTC), ETH không có trần cố định. Thay vào đó, mức phát hành phụ thuộc vào tổng lượng ETH được stake, và phần đốt phụ thuộc vào mức độ sử dụng mạng.</p></div>

<h2>ETH và các token khác</h2>
<p>Trên Ethereum có hàng chục nghìn token khác (USDC, DAI, UNI, …). Các token này được tạo bằng hợp đồng thông minh theo chuẩn như ERC-20. ETH thì khác: nó là tài sản gốc của giao thức, không phải một hợp đồng. Vì vậy nhiều ứng dụng dùng <strong>WETH</strong> (wrapped ETH), một token ERC-20 đại diện cho ETH theo tỷ lệ 1:1, để ETH dùng chung giao diện với token khác.</p>

<div class="callout warn"><b>Cảnh giác</b><p>Không có "ETH2", "ETH 2.0 token" hay việc "nâng cấp ETH" nào bạn phải làm. Ai yêu cầu bạn gửi ETH để "nâng cấp" hoặc "đổi sang phiên bản mới" đều là lừa đảo.</p></div>`,
      keys: [
        "ETH là tài sản gốc của Ethereum, dùng để trả gas, stake và làm tiền trong ứng dụng.",
        "1 ETH = 10^18 wei; 1 gwei = 10^9 wei. Gas thường được báo bằng gwei.",
        "Base fee bị đốt (EIP-1559); phần thưởng cho validator tạo ra ETH mới.",
        "ETH không có trần cung cố định; WETH là phiên bản ERC-20 của ETH."
      ],
      quiz: [
        { q: "1 gwei bằng bao nhiêu wei?", o: ["1.000", "1.000.000", "1.000.000.000", "10^18"], a: 2, e: "1 gwei = 10^9 wei. Còn 1 ETH = 10^18 wei." },
        { q: "Phần nào của phí giao dịch bị đốt vĩnh viễn?", o: ["Priority fee (tiền tip)", "Base fee", "Toàn bộ phí", "Không phần nào"], a: 1, e: "Từ EIP-1559, base fee bị đốt, còn tip đi tới người đề xuất khối." },
        { q: "Vì sao nhiều ứng dụng dùng WETH thay vì ETH?", o: ["WETH rẻ hơn ETH", "WETH tuân theo chuẩn ERC-20 nên dùng chung giao diện với token khác", "WETH không mất phí gas", "ETH sắp bị thay thế"], a: 1, e: "ETH là tài sản gốc, không phải ERC-20; WETH bọc ETH theo tỷ lệ 1:1 để thống nhất giao diện." },
        { q: "Có người nhắn bạn cần gửi ETH để \"nâng cấp lên ETH2\". Đó là:", o: ["Thủ tục bắt buộc sau The Merge", "Lừa đảo", "Cách nhận thưởng staking", "Yêu cầu từ Ethereum Foundation"], a: 1, e: "Không bao giờ có việc nâng cấp ETH. Đây là kiểu lừa đảo phổ biến." }
      ]
    },
    {
      id: "ethereum-vs-bitcoin",
      title: "Ethereum và Bitcoin khác nhau thế nào?",
      min: 6,
      src: ["/ethereum-vs-bitcoin/"],
      tldr: "Bitcoin tập trung làm một loại tiền số cứng, đơn giản. Ethereum là nền tảng có thể lập trình: ngoài tiền tệ còn chạy được ứng dụng, token, DeFi và nhiều thứ khác.",
      body: `
<h2>Điểm chung</h2>
<p>Cả hai đều là blockchain công khai, không cần xin phép, có đồng tiền gốc (BTC và ETH), dùng mật mã khóa công khai để quản lý tài khoản, và được vận hành bởi mạng lưới node phân tán trên toàn cầu. Bitcoin ra đời năm 2009; Ethereum ra mắt năm 2015 và lấy cảm hứng trực tiếp từ Bitcoin.</p>

<h2>Khác biệt chính</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Bitcoin</th><th>Ethereum</th></tr>
<tr><td>Mục tiêu chính</td><td>Tiền số, lưu trữ giá trị</td><td>Nền tảng lập trình được cho tiền, ứng dụng và tài sản số</td></tr>
<tr><td>Đồng thuận</td><td>Proof-of-work (đào)</td><td>Proof-of-stake (từ 2022)</td></tr>
<tr><td>Thời gian khối</td><td>~10 phút</td><td>12 giây (1 slot)</td></tr>
<tr><td>Cung tiền</td><td>Trần 21 triệu BTC</td><td>Không trần cố định; phát hành cho validator, base fee bị đốt</td></tr>
<tr><td>Lập trình</td><td>Script giới hạn, có chủ đích</td><td>Hợp đồng thông minh Turing-đầy đủ trên EVM</td></tr>
<tr><td>Mô hình dữ liệu</td><td>UTXO (các "đồng xu" chưa tiêu)</td><td>Tài khoản và số dư (account-based)</td></tr>
<tr><td>Năng lượng</td><td>Tiêu thụ điện lớn do đào</td><td>Rất thấp sau The Merge</td></tr>
</table></div>

<h2>Vì sao lại cần cả hai?</h2>
<p>Bitcoin chọn sự đơn giản và ổn định: thay đổi rất chậm, ít tính năng, tập trung vào việc làm tiền. Ethereum chọn tính linh hoạt: ai cũng có thể viết chương trình chạy trên mạng, nên hệ sinh thái có stablecoin, DeFi, NFT, DAO và các mạng Layer 2. Hai cách tiếp cận phục vụ những nhu cầu khác nhau.</p>
<div class="callout info"><b>Bạn có thể dùng BTC trên Ethereum</b><p>Có các token đại diện cho bitcoin trên Ethereum (ví dụ WBTC). Chúng cho phép dùng BTC trong ứng dụng DeFi, nhưng đi kèm rủi ro của bên giữ tài sản hoặc cầu nối.</p></div>`,
      keys: [
        "Bitcoin: tiền số đơn giản, PoW, khối ~10 phút, trần 21 triệu.",
        "Ethereum: nền tảng lập trình được, PoS, slot 12 giây, mô hình tài khoản.",
        "Ethereum có hợp đồng thông minh Turing-đầy đủ chạy trên EVM."
      ],
      quiz: [
        { q: "Mô hình dữ liệu của Ethereum là gì?", o: ["UTXO", "Dựa trên tài khoản (account-based)", "Cơ sở dữ liệu quan hệ", "Đồ thị DAG"], a: 1, e: "Ethereum lưu số dư theo tài khoản, còn Bitcoin dùng UTXO." },
        { q: "Khác biệt lớn nhất về chức năng giữa Ethereum và Bitcoin là gì?", o: ["Ethereum có thể chạy hợp đồng thông minh tổng quát", "Bitcoin nhanh hơn", "Ethereum có trần cung 21 triệu", "Bitcoin dùng proof-of-stake"], a: 0, e: "Ethereum có EVM chạy chương trình bất kỳ, Bitcoin chỉ có script giới hạn." },
        { q: "Thời gian giữa các khối trên Ethereum là:", o: ["~10 phút", "12 giây", "1 phút", "2 giây"], a: 1, e: "Ethereum có slot 12 giây; Bitcoin trung bình ~10 phút." }
      ]
    },
    {
      id: "ethereum-network",
      title: "Mạng Ethereum gồm những gì?",
      min: 7,
      src: ["/what-is-the-ethereum-network/", "/developers/docs/networks/"],
      tldr: "\"Mạng Ethereum\" gồm mạng chính (mainnet) nơi giá trị thật lưu thông, các mạng thử nghiệm (testnet) như Sepolia và Hoodi, cùng các mạng Layer 2 xây trên Ethereum. Tất cả được duy trì bởi các node chạy phần mềm client.",
      body: `
<h2>Mainnet</h2>
<p><strong>Mainnet</strong> là Ethereum "thật": ETH có giá trị, giao dịch là vĩnh viễn. Khi người ta nói "Ethereum" mà không nói gì thêm, thường là nói mainnet (còn gọi là Layer 1, L1).</p>

<h2>Testnet</h2>
<p>Testnet là bản sao của Ethereum dùng để thử nghiệm, ETH trên đó không có giá trị và có thể nhận miễn phí từ <strong>faucet</strong>. Các bản nâng cấp lớn luôn chạy trên testnet trước khi lên mainnet.</p>
<div class="table-wrap"><table>
<tr><th>Testnet</th><th>Dành cho</th></tr>
<tr><td>Sepolia</td><td>Testnet mặc định cho nhà phát triển ứng dụng và hợp đồng thông minh.</td></tr>
<tr><td>Hoodi</td><td>Thử nghiệm validator, staking và nâng cấp giao thức (thay thế Holesky từ 2025).</td></tr>
</table></div>
<p>Ngoài ra, lập trình viên thường chạy một <strong>mạng phát triển cục bộ</strong> trên máy (Hardhat, Anvil) để thử nghiệm nhanh.</p>

<h2>Layer 2</h2>
<p>Các mạng <strong>Layer 2 (L2)</strong> như Arbitrum, Optimism, Base, zkSync, Scroll, Linea xử lý giao dịch bên ngoài mainnet, gom chúng lại rồi đăng dữ liệu và bằng chứng lên Ethereum. Nhờ vậy phí rẻ hơn nhiều mà vẫn thừa hưởng bảo mật của Ethereum.</p>

<h2>Node và client</h2>
<p>Mạng tồn tại vì có hàng nghìn <strong>node</strong>. Mỗi node chạy hai phần mềm (client): một <strong>execution client</strong> (như Geth, Nethermind, Besu, Erigon, Reth) xử lý giao dịch và EVM, và một <strong>consensus client</strong> (như Prysm, Lighthouse, Teku, Nimbus, Lodestar, Grandine) lo đồng thuận proof-of-stake. Nhiều client do nhiều đội độc lập viết giúp mạng an toàn trước lỗi phần mềm.</p>
<div class="stack">
  <div><b>Ứng dụng</b>Ví, dapp, sàn… gửi yêu cầu qua JSON-RPC</div>
  <div><b>Layer 2</b>Rollup gom giao dịch, đăng dữ liệu lên L1</div>
  <div><b>Layer 1</b>Mainnet: đồng thuận, thực thi, thanh toán cuối cùng</div>
  <div><b>Node</b>Execution client + consensus client, do cộng đồng vận hành</div>
</div>
<div class="callout tip"><b>Chain ID</b><p>Mỗi mạng có một mã định danh riêng (chain ID) để chữ ký giao dịch không thể "phát lại" ở mạng khác. Mainnet có chain ID là <code>1</code>, Sepolia là <code>11155111</code>.</p></div>`,
      keys: [
        "Mainnet là mạng thật; testnet (Sepolia, Hoodi) dùng để thử nghiệm với ETH miễn phí.",
        "Layer 2 xử lý giao dịch rẻ hơn và đăng dữ liệu/bằng chứng lên Ethereum.",
        "Mỗi node chạy một execution client và một consensus client.",
        "Chain ID giúp chống phát lại giao dịch giữa các mạng; mainnet là 1."
      ],
      quiz: [
        { q: "Testnet nào được khuyến nghị cho lập trình viên ứng dụng?", o: ["Sepolia", "Ropsten", "Mainnet", "Bitcoin testnet"], a: 0, e: "Sepolia là testnet mặc định cho phát triển ứng dụng; Ropsten đã ngừng." },
        { q: "Một node Ethereum đầy đủ ngày nay cần chạy:", o: ["Chỉ execution client", "Chỉ consensus client", "Cả execution client và consensus client", "Một phần mềm đào"], a: 2, e: "Từ The Merge, node cần cả hai client giao tiếp qua Engine API." },
        { q: "Chain ID dùng để làm gì?", o: ["Tăng tốc giao dịch", "Ngăn một giao dịch đã ký bị phát lại trên mạng khác", "Xác định chủ sở hữu mạng", "Tính phí gas"], a: 1, e: "Chain ID được đưa vào chữ ký (EIP-155) để chống replay giữa các mạng." }
      ]
    },
    {
      id: "web3",
      title: "Web3 là gì?",
      min: 7,
      src: ["/web3/", "/developers/docs/web2-vs-web3/"],
      tldr: "Web3 là ý tưởng về một Internet nơi người dùng sở hữu dữ liệu, tài sản và danh tính của mình, với các ứng dụng chạy trên blockchain thay vì máy chủ của một công ty.",
      body: `
<h2>Ba giai đoạn của web</h2>
<div class="compare">
  <div><h4>Web1 · đọc</h4><p>Khoảng 1990–2004. Trang web tĩnh, phần lớn người dùng chỉ đọc nội dung.</p></div>
  <div><h4>Web2 · đọc + viết</h4><p>Từ ~2004. Mạng xã hội, nội dung do người dùng tạo, nhưng dữ liệu và doanh thu thuộc về nền tảng.</p></div>
  <div><h4>Web3 · đọc + viết + sở hữu</h4><p>Người dùng sở hữu tài sản số, danh tính và có tiếng nói trong cách vận hành ứng dụng.</p></div>
</div>
<p>Thuật ngữ "Web3" được Gavin Wood, đồng sáng lập Ethereum, đặt ra năm 2014.</p>

<h2>Các ý tưởng chính của Web3</h2>
<ul>
  <li><strong>Phi tập trung:</strong> quyền lực và dữ liệu không nằm trong tay một vài công ty lớn.</li>
  <li><strong>Không cần xin phép:</strong> ai cũng tham gia được, không ai bị loại trừ.</li>
  <li><strong>Thanh toán gốc:</strong> tiền được tích hợp sẵn (ETH, stablecoin), không cần qua ngân hàng hay cổng thanh toán.</li>
  <li><strong>Không cần tin tưởng bên thứ ba (trustless):</strong> quy tắc được thực thi bằng mã và đồng thuận, không dựa vào lời hứa của một công ty.</li>
</ul>

<h2>Sở hữu và danh tính</h2>
<p>Ở Web2, món đồ bạn mua trong game nằm trên máy chủ của nhà phát hành; tài khoản của bạn có thể bị khóa. Ở Web3, tài sản là token trong ví của bạn, có thể mang sang ứng dụng khác hoặc bán đi. Ví Ethereum cũng có thể là danh tính đăng nhập: thay vì "Đăng nhập bằng Google", bạn ký một tin nhắn bằng ví (Sign-In with Ethereum).</p>

<h2>Web2 và Web3 khi xây ứng dụng</h2>
<div class="table-wrap"><table>
<tr><th>Web2</th><th>Web3</th></tr>
<tr><td>Nền tảng có thể kiểm duyệt nội dung, khóa tài khoản</td><td>Hợp đồng thông minh không thể bị một bên đơn phương tắt</td></tr>
<tr><td>Thanh toán phụ thuộc ngân hàng, cổng thanh toán</td><td>Thanh toán bằng ETH/stablecoin trực tiếp</td></tr>
<tr><td>Máy chủ có thể sập</td><td>Mạng Ethereum luôn chạy</td></tr>
<tr><td>Nhanh, rẻ, dễ thay đổi</td><td>Mỗi thao tác ghi tốn phí gas; hợp đồng khó sửa sau khi triển khai</td></tr>
<tr><td>Trải nghiệm quen thuộc</td><td>Phải học về ví, khóa bí mật, phí gas</td></tr>
</table></div>

<h2>Giới hạn hiện tại</h2>
<p>Web3 còn nhiều thách thức: trải nghiệm người dùng phức tạp, phí giao dịch có thời điểm cao (đang được cải thiện nhờ Layer 2), lừa đảo nhiều, và khung pháp lý chưa rõ ràng ở nhiều nước. Đây là một lĩnh vực đang phát triển, không phải giải pháp cho mọi thứ.</p>`,
      keys: [
        "Web1 là đọc, Web2 là đọc + viết, Web3 thêm sở hữu.",
        "Web3 nhấn mạnh phi tập trung, không cần xin phép, thanh toán gốc và không cần tin bên thứ ba.",
        "Ví Ethereum vừa giữ tài sản vừa có thể là danh tính đăng nhập.",
        "Web3 còn hạn chế về UX, phí và lừa đảo."
      ],
      quiz: [
        { q: "Ai đặt ra thuật ngữ \"Web3\"?", o: ["Vitalik Buterin", "Gavin Wood", "Satoshi Nakamoto", "Tim Berners-Lee"], a: 1, e: "Gavin Wood, đồng sáng lập Ethereum, dùng từ Web3 năm 2014." },
        { q: "Điểm khác biệt cốt lõi của Web3 so với Web2 là:", o: ["Giao diện đẹp hơn", "Người dùng sở hữu tài sản số và danh tính", "Không cần Internet", "Miễn phí hoàn toàn"], a: 1, e: "Web3 thêm yếu tố sở hữu vào khả năng đọc và viết." },
        { q: "Hạn chế nào là đúng với Web3 hiện nay?", o: ["Không ai dùng được", "Trải nghiệm người dùng còn phức tạp và có nhiều lừa đảo", "Không có ứng dụng nào", "Không thể thanh toán"], a: 1, e: "UX và an toàn là những thách thức lớn mà hệ sinh thái đang giải quyết." }
      ]
    },
    {
      id: "smart-contracts-intro",
      title: "Hợp đồng thông minh",
      min: 7,
      src: ["/smart-contracts/"],
      tldr: "Hợp đồng thông minh là chương trình chạy trên Ethereum, tự động thực thi khi điều kiện được đáp ứng. Giống như một máy bán hàng tự động số: bỏ đúng tiền vào, nhận đúng món hàng, không cần người trung gian.",
      body: `
<h2>Máy bán hàng tự động số</h2>
<p>Nick Szabo đưa ra khái niệm "smart contract" từ thập niên 1990 và dùng ví dụ máy bán hàng tự động: bạn bỏ tiền, chọn món, máy tự trả hàng. Không cần nhân viên, không cần tin ai, quy tắc được "gắn" vào máy.</p>
<pre><code>tiền đủ + chọn món  →  máy trả món hàng
tiền thiếu          →  máy trả lại tiền</code></pre>
<p>Hợp đồng thông minh trên Ethereum làm điều tương tự nhưng với logic tùy ý: nếu A gửi đủ tiền trước hạn, chuyển quyền sở hữu cho A; nếu đến hạn mà chưa đủ, hoàn tiền.</p>

<h2>Đặc điểm</h2>
<ul>
  <li><strong>Không cần xin phép:</strong> ai cũng có thể viết và triển khai hợp đồng.</li>
  <li><strong>Công khai và kiểm tra được:</strong> mã đã triển khai nằm trên blockchain; ai cũng đọc được (thường kèm mã nguồn đã xác minh trên Etherscan).</li>
  <li><strong>Tự động, xác định:</strong> cùng đầu vào luôn cho cùng kết quả; không ai can thiệp giữa chừng.</li>
  <li><strong>Kết hợp được:</strong> hợp đồng có thể gọi hợp đồng khác, giống như ghép Lego.</li>
  <li><strong>Khó sửa:</strong> sau khi triển khai, mã thường không thể thay đổi (trừ khi được thiết kế để nâng cấp).</li>
</ul>

<h2>Ví dụ trong đời thực</h2>
<div class="compare">
  <div><h4>Stablecoin</h4><p>Hợp đồng ghi nhận ai giữ bao nhiêu USDC và cho phép chuyển cho nhau.</p></div>
  <div><h4>Sàn phi tập trung</h4><p>Uniswap dùng hợp đồng giữ quỹ thanh khoản và tự tính giá theo công thức.</p></div>
  <div><h4>Cho vay</h4><p>Aave tự động thanh lý khoản vay khi tài sản thế chấp giảm dưới ngưỡng.</p></div>
</div>

<h2>Giới hạn</h2>
<ul>
  <li><strong>Không tự lấy được dữ liệu bên ngoài.</strong> Hợp đồng không biết giá vàng hay kết quả bóng đá; cần <strong>oracle</strong> đưa dữ liệu vào.</li>
  <li><strong>Lỗi trong mã có thể mất tiền thật.</strong> Vì không sửa được dễ dàng, kiểm toán và kiểm thử rất quan trọng.</li>
  <li><strong>Giới hạn kích thước.</strong> Mã một hợp đồng hiện giới hạn khoảng 24 KB (EIP-170).</li>
</ul>
<div class="callout tip"><b>Muốn tự viết?</b><p>Học phần 07 hướng dẫn chi tiết: ngôn ngữ Solidity/Vyper, cấu trúc hợp đồng, kiểm thử, triển khai và bảo mật.</p></div>`,
      keys: [
        "Hợp đồng thông minh là chương trình trên Ethereum tự thực thi theo quy tắc trong mã.",
        "Công khai, xác định, kết hợp được, nhưng khó sửa sau khi triển khai.",
        "Cần oracle để lấy dữ liệu ngoài blockchain.",
        "Lỗi mã có thể gây mất tiền thật, nên bảo mật và kiểm toán rất quan trọng."
      ],
      quiz: [
        { q: "Ví dụ nổi tiếng mà Nick Szabo dùng để giải thích hợp đồng thông minh là:", o: ["Máy ATM", "Máy bán hàng tự động", "Két sắt", "Sổ tiết kiệm"], a: 1, e: "Máy bán hàng tự động: điều kiện đúng thì tự trả kết quả, không cần trung gian." },
        { q: "Hợp đồng thông minh muốn biết giá ETH/USD trên thị trường thì cần:", o: ["Tự truy cập Internet", "Một oracle cung cấp dữ liệu", "Hỏi validator", "Không thể làm được"], a: 1, e: "Hợp đồng chỉ đọc được dữ liệu trên chuỗi; oracle đưa dữ liệu bên ngoài vào." },
        { q: "\"Kết hợp được\" (composable) nghĩa là:", o: ["Hợp đồng có thể gọi và dùng lại các hợp đồng khác", "Hợp đồng có thể sửa bất cứ lúc nào", "Hợp đồng chạy trên nhiều blockchain cùng lúc", "Hợp đồng được viết bằng nhiều ngôn ngữ"], a: 0, e: "Các ứng dụng có thể ghép với nhau như Lego, ví dụ một ví gọi Uniswap rồi gửi token sang Aave." }
      ]
    },
    {
      id: "values",
      title: "Vì sao Ethereum tồn tại?",
      min: 5,
      src: ["/values/"],
      tldr: "Ethereum được xây dựng để tạo ra hạ tầng số trung lập, mở và chống kiểm duyệt, nơi quy tắc áp dụng như nhau cho tất cả và không ai có thể đơn phương thay đổi.",
      body: `
<h2>Vấn đề Ethereum muốn giải quyết</h2>
<p>Phần lớn hạ tầng số hiện nay do một số ít công ty và chính phủ kiểm soát. Họ có thể đóng băng tài khoản, thay đổi điều khoản, thu thập dữ liệu hoặc chặn người dùng ở một số quốc gia. Với hàng tỷ người không có tài khoản ngân hàng hoặc sống trong môi trường tiền tệ bất ổn, điều này càng nghiêm trọng.</p>

<h2>Các giá trị cốt lõi</h2>
<div class="table-wrap"><table>
<tr><th>Giá trị</th><th>Diễn giải</th></tr>
<tr><td>Trung lập đáng tin (credible neutrality)</td><td>Giao thức không thiên vị ai. Quy tắc giống nhau cho mọi người, từ cá nhân tới tập đoàn.</td></tr>
<tr><td>Chống kiểm duyệt</td><td>Không một bên nào có thể ngăn bạn sử dụng mạng.</td></tr>
<tr><td>Phi tập trung</td><td>Quyền lực được phân tán cho nhiều node, nhiều client, nhiều nhà phát triển.</td></tr>
<tr><td>Mã nguồn mở</td><td>Mọi người có thể đọc, kiểm tra, đóng góp và xây dựng trên nền tảng.</td></tr>
<tr><td>Quyền riêng tư</td><td>Người dùng nên kiểm soát thông tin của mình; quyền riêng tư đang được đưa vào lộ trình.</td></tr>
<tr><td>Bền vững dài hạn</td><td>Ưu tiên an toàn và độ tin cậy hơn là tốc độ thay đổi; các nâng cấp được cân nhắc kỹ.</td></tr>
</table></div>

<h2>Vì sao phi tập trung quan trọng?</h2>
<p>Phi tập trung không phải mục tiêu tự thân, mà là cách đạt được khả năng chống kiểm duyệt và chống bị thao túng. Đó là lý do cộng đồng Ethereum quan tâm đến việc giữ chi phí chạy node thấp, khuyến khích nhiều client khác nhau, và tránh để một nhóm staking hay một nhà cung cấp hạ tầng chiếm phần quá lớn.</p>
<div class="callout info"><b>Đánh đổi</b><p>Giữ phi tập trung khiến Ethereum mainnet không thể mở rộng đơn giản bằng cách dùng máy chủ cực mạnh. Đây là lý do lộ trình chọn hướng "Ethereum làm lớp bảo mật, Layer 2 lo tốc độ".</p></div>`,
      keys: [
        "Ethereum hướng tới hạ tầng số trung lập, mở, chống kiểm duyệt.",
        "Phi tập trung là phương tiện để đạt chống kiểm duyệt và độ tin cậy.",
        "Cộng đồng ưu tiên node rẻ, đa dạng client và tránh tập trung staking."
      ],
      quiz: [
        { q: "\"Trung lập đáng tin\" (credible neutrality) nghĩa là:", o: ["Ethereum Foundation quyết định ai được dùng", "Giao thức áp dụng quy tắc như nhau cho mọi người", "Giá ETH luôn ổn định", "Mọi giao dịch đều miễn phí"], a: 1, e: "Giao thức không ưu ái hay phân biệt bất kỳ ai." },
        { q: "Vì sao cộng đồng muốn chi phí chạy node thấp?", o: ["Để node chạy nhanh hơn", "Để nhiều người có thể tự kiểm chứng mạng, giữ phi tập trung", "Để tiết kiệm điện cho Ethereum Foundation", "Để tăng giá ETH"], a: 1, e: "Càng nhiều người chạy node, mạng càng khó bị kiểm soát." }
      ]
    },
    {
      id: "history",
      title: "Lịch sử và các bản nâng cấp",
      min: 9,
      src: ["/ethereum-history-founder-and-ownership/", "/ethereum-forks/"],
      tldr: "Vitalik Buterin đề xuất Ethereum năm 2013, mạng ra mắt ngày 30/7/2015. Từ đó Ethereum đã trải qua hàng loạt bản nâng cấp (hard fork), nổi bật là The Merge 2022 chuyển sang proof-of-stake.",
      body: `
<h2>Ra đời</h2>
<p>Cuối năm 2013, Vitalik Buterin, khi đó 19 tuổi và là người viết cho Bitcoin Magazine, công bố whitepaper Ethereum. Ông muốn có một blockchain với ngôn ngữ lập trình tổng quát, thay vì phải tạo một blockchain mới cho mỗi ứng dụng. Các đồng sáng lập ban đầu gồm Gavin Wood (tác giả Yellow Paper và ngôn ngữ Solidity), Joseph Lubin, Anthony Di Iorio, Charles Hoskinson, Mihai Alisie, Amir Chetrit, Jeffrey Wilcke.</p>
<p>Năm 2014, dự án gây quỹ bằng một đợt bán ETH công khai (thu khoảng 31.000 BTC). Ethereum Foundation, một tổ chức phi lợi nhuận tại Thụy Sĩ, được thành lập để hỗ trợ phát triển.</p>

<h2>Ai sở hữu Ethereum?</h2>
<p>Không ai cả. Ethereum Foundation tài trợ nghiên cứu và phát triển nhưng không kiểm soát mạng. Các thay đổi giao thức phải được đề xuất qua EIP, thảo luận công khai, và chỉ có hiệu lực khi các đội client triển khai và những người vận hành node tự nguyện nâng cấp.</p>

<h2>Dòng thời gian chính</h2>
<div class="table-wrap"><table>
<tr><th>Thời gian</th><th>Sự kiện</th><th>Ý nghĩa</th></tr>
<tr><td>30/7/2015</td><td>Frontier</td><td>Mainnet ra mắt, bắt đầu từ khối genesis.</td></tr>
<tr><td>3/2016</td><td>Homestead</td><td>Bản phát hành "ổn định" đầu tiên.</td></tr>
<tr><td>7/2016</td><td>DAO fork</td><td>Sau vụ hack The DAO (~3,6 triệu ETH), cộng đồng fork để hoàn tiền. Nhóm phản đối giữ chuỗi cũ, thành Ethereum Classic.</td></tr>
<tr><td>2017–2019</td><td>Byzantium, Constantinople, Istanbul</td><td>Giảm phần thưởng đào, tối ưu gas, thêm opcode và precompile.</td></tr>
<tr><td>12/2020</td><td>Beacon Chain</td><td>Chuỗi proof-of-stake chạy song song để chuẩn bị The Merge.</td></tr>
<tr><td>8/2021</td><td>London</td><td>EIP-1559: base fee bị đốt, phí dễ dự đoán hơn.</td></tr>
<tr><td>15/9/2022</td><td>The Merge (Paris)</td><td>Chuyển từ proof-of-work sang proof-of-stake; năng lượng giảm ~99,95%.</td></tr>
<tr><td>12/4/2023</td><td>Shapella</td><td>Cho phép rút ETH đã stake.</td></tr>
<tr><td>13/3/2024</td><td>Dencun</td><td>EIP-4844 (proto-danksharding): "blob" giúp phí Layer 2 giảm mạnh.</td></tr>
<tr><td>7/5/2025</td><td>Pectra</td><td>EIP-7702 (ví thường có tính năng ví thông minh), max stake 2048 ETH, thêm blob.</td></tr>
<tr><td>3/12/2025</td><td>Fusaka</td><td>PeerDAS, cơ chế BPO fork tăng blob dần, gas limit mặc định 60 triệu.</td></tr>
<tr><td>Dự kiến Q4/2026</td><td>Glamsterdam</td><td>ePBS, block-level access lists, định giá lại gas.</td></tr>
<tr><td>Dự kiến 2027</td><td>Hegotá</td><td>FOCIL (danh sách bắt buộc đưa vào khối), frame transactions.</td></tr>
</table></div>

<h2>Cách đặt tên nâng cấp</h2>
<p>Từ The Merge, mỗi nâng cấp thường gồm hai phần: phần lớp thực thi đặt theo tên thành phố từng tổ chức Devcon (Shanghai, Cancun, Prague, Osaka, Amsterdam, Bogotá) và phần lớp đồng thuận đặt theo tên ngôi sao (Capella, Deneb, Electra, Fulu, Gloas, Heze). Ghép lại thành Shapella, Dencun, Pectra, Fusaka, Glamsterdam, Hegotá.</p>`,
      keys: [
        "Vitalik Buterin công bố whitepaper cuối 2013; mainnet ra mắt 30/7/2015.",
        "DAO fork 2016 tạo ra Ethereum Classic.",
        "London 2021 (EIP-1559), The Merge 9/2022, Shapella 2023, Dencun 2024, Pectra 5/2025, Fusaka 12/2025.",
        "Tên nâng cấp = thành phố Devcon (thực thi) + ngôi sao (đồng thuận)."
      ],
      quiz: [
        { q: "Mainnet Ethereum ra mắt khi nào?", o: ["3/1/2009", "30/7/2015", "15/9/2022", "1/12/2020"], a: 1, e: "Frontier ra mắt ngày 30/7/2015." },
        { q: "Bản nâng cấp nào cho phép rút ETH đã stake?", o: ["The Merge", "Dencun", "Shapella", "London"], a: 2, e: "Shapella (4/2023) bật tính năng rút tiền staking." },
        { q: "Ethereum Classic ra đời từ sự kiện nào?", o: ["The Merge", "DAO fork 2016", "Vụ hack sàn Mt. Gox", "Bản nâng cấp London"], a: 1, e: "Một nhóm không đồng ý với việc fork hoàn tiền vụ The DAO và tiếp tục chuỗi cũ." },
        { q: "\"Pectra\" ghép từ hai tên nào?", o: ["Paris + Electra", "Prague + Electra", "Prague + Capella", "Pectra là tên một ngôi sao"], a: 1, e: "Prague (lớp thực thi, thành phố Devcon) + Electra (lớp đồng thuận, ngôi sao)." }
      ]
    },
    {
      id: "whitepaper",
      title: "Whitepaper Ethereum",
      min: 6,
      src: ["/whitepaper/"],
      tldr: "Whitepaper năm 2013 của Vitalik Buterin đề xuất một blockchain có ngôn ngữ lập trình Turing-đầy đủ, để bất kỳ ai cũng có thể viết ứng dụng như token, hợp đồng tài chính, tổ chức tự trị mà không cần tạo blockchain riêng.",
      body: `
<h2>Ý tưởng chính</h2>
<p>Bitcoin cho thấy có thể tạo ra tiền số không cần trung gian. Nhưng ngôn ngữ script của Bitcoin cố ý bị giới hạn. Muốn xây ứng dụng khác (ví dụ đăng ký tên miền, token, cá cược), người ta phải tạo một blockchain mới hoặc "chồng" lên Bitcoin một cách vụng về. Whitepaper đề xuất: tạo một blockchain có sẵn <strong>ngôn ngữ lập trình tổng quát</strong>, để mỗi ứng dụng chỉ là một hợp đồng.</p>

<h2>Các khái niệm được giới thiệu</h2>
<ul>
  <li><strong>Tài khoản:</strong> hai loại, tài khoản do khóa bí mật điều khiển (người dùng) và tài khoản hợp đồng (do mã điều khiển).</li>
  <li><strong>Tin nhắn và giao dịch:</strong> hợp đồng có thể gửi tin nhắn cho hợp đồng khác.</li>
  <li><strong>Hàm chuyển trạng thái:</strong> Ethereum là một máy trạng thái; mỗi giao dịch biến trạng thái cũ thành trạng thái mới.</li>
  <li><strong>Gas:</strong> mỗi bước tính toán tốn phí, giải quyết vấn đề vòng lặp vô hạn (bài toán dừng).</li>
</ul>

<h2>Các ứng dụng được dự đoán</h2>
<div class="compare">
  <div><h4>Token</h4><p>Tiền tệ phụ, tài sản đại diện, điểm thưởng. Ngày nay là ERC-20.</p></div>
  <div><h4>Phái sinh và stablecoin</h4><p>Hợp đồng tài chính tự động. Ngày nay là DeFi, DAI.</p></div>
  <div><h4>Danh tính và tên miền</h4><p>Hệ thống đăng ký tên. Ngày nay là ENS.</p></div>
  <div><h4>DAO</h4><p>Tổ chức tự trị phi tập trung, quỹ do thành viên bỏ phiếu.</p></div>
</div>

<h2>Đọc whitepaper hôm nay</h2>
<p>Whitepaper là tài liệu lịch sử. Nhiều chi tiết đã thay đổi: Ethereum không còn dùng proof-of-work, phí theo EIP-1559, lộ trình mở rộng tập trung vào rollup. Để biết đặc tả kỹ thuật hiện tại, xem Yellow Paper, consensus specs và execution specs.</p>`,
      keys: [
        "Whitepaper đề xuất blockchain có ngôn ngữ Turing-đầy đủ để mọi ứng dụng chỉ là một hợp đồng.",
        "Giới thiệu tài khoản, tin nhắn, máy trạng thái và gas.",
        "Dự đoán token, stablecoin, tên miền, DAO, những thứ ngày nay đã thành hiện thực."
      ],
      quiz: [
        { q: "Whitepaper đề xuất dùng \"gas\" để giải quyết vấn đề gì?", o: ["Tăng giá ETH", "Vòng lặp vô hạn và lạm dụng tài nguyên tính toán", "Đào coin nhanh hơn", "Bảo mật khóa bí mật"], a: 1, e: "Mỗi bước tính toán tốn gas, nên chương trình không thể chạy mãi mãi miễn phí." },
        { q: "Hai loại tài khoản trong whitepaper là:", o: ["Tài khoản tiết kiệm và tài khoản vãng lai", "Tài khoản do khóa bí mật điều khiển và tài khoản hợp đồng", "Tài khoản thợ đào và tài khoản người dùng", "Tài khoản L1 và tài khoản L2"], a: 1, e: "EOA (externally owned account) và contract account." }
      ]
    }
  ]
});
