window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "using",
  no: 2,
  group: "Dành cho mọi người",
  level: "Cơ bản",
  title: "Sử dụng Ethereum an toàn",
  desc: "Ví, tài khoản, cách có ETH, phí gas, Layer 2, cầu nối, ứng dụng và cách tự bảo vệ trước lừa đảo.",
  lessons: [
    {
      id: "wallets",
      title: "Ví Ethereum",
      min: 8,
      src: ["/wallets/", "/wallets/find-wallet/"],
      tldr: "Ví là ứng dụng giúp bạn quản lý tài khoản Ethereum: xem số dư, gửi nhận tiền, ký giao dịch và kết nối với ứng dụng. Tiền không nằm \"trong\" ví mà nằm trên blockchain; ví giữ chìa khóa để bạn điều khiển nó.",
      body: `
<h2>Ví, tài khoản và khóa khác nhau thế nào?</h2>
<div class="compare">
  <div><h4>Tài khoản</h4><p>Một "địa chỉ" trên Ethereum, ví dụ <code>0x71C7…976F</code>, có số dư và lịch sử giao dịch.</p></div>
  <div><h4>Khóa bí mật</h4><p>Con số bí mật chứng minh bạn là chủ tài khoản. Ai có khóa thì người đó điều khiển tiền.</p></div>
  <div><h4>Ví</h4><p>Phần mềm hoặc thiết bị giữ khóa, hiển thị số dư và giúp bạn ký giao dịch.</p></div>
</div>
<p>Vì tài sản nằm trên blockchain, bạn có thể mở cùng một tài khoản bằng ví khác bất cứ lúc nào, miễn là có khóa hoặc cụm từ khôi phục.</p>

<h2>Cụm từ khôi phục (seed phrase)</h2>
<p>Hầu hết ví tạo ra một <strong>cụm từ khôi phục</strong> gồm 12 hoặc 24 từ tiếng Anh. Từ cụm từ này có thể tạo lại mọi khóa bí mật của bạn.</p>
<div class="callout warn"><b>Quy tắc vàng</b><p>Không bao giờ nhập cụm từ khôi phục vào trang web, không chụp ảnh, không gửi cho ai, kể cả người tự nhận là "hỗ trợ kỹ thuật". Viết ra giấy và cất ở nơi an toàn. Ai có cụm từ này là có toàn bộ tiền của bạn.</p></div>

<h2>Tự giữ hay để bên khác giữ?</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Ví tự quản (non-custodial)</th><th>Ví lưu ký (custodial)</th></tr>
<tr><td>Ai giữ khóa?</td><td>Bạn</td><td>Sàn hoặc công ty</td></tr>
<tr><td>Ví dụ</td><td>MetaMask, Rabby, Rainbow, Coinbase Wallet, ví phần cứng</td><td>Tài khoản trên sàn giao dịch tập trung</td></tr>
<tr><td>Ưu điểm</td><td>Toàn quyền kiểm soát, dùng được mọi dapp</td><td>Quên mật khẩu vẫn khôi phục được</td></tr>
<tr><td>Rủi ro</td><td>Mất cụm từ khôi phục là mất tiền</td><td>Sàn có thể đóng băng, phá sản hoặc bị hack</td></tr>
</table></div>
<p>Câu nói quen thuộc trong cộng đồng: <em>"Not your keys, not your coins"</em>, không giữ khóa thì tiền không thực sự là của bạn.</p>

<h2>Các loại ví</h2>
<ul>
  <li><strong>Ví phần cứng</strong> (Ledger, Trezor, GridPlus…): khóa nằm trong thiết bị vật lý, không bao giờ rời khỏi máy. An toàn nhất cho số tiền lớn.</li>
  <li><strong>Ví di động:</strong> tiện dùng hằng ngày, có thể quét mã QR.</li>
  <li><strong>Ví tiện ích trình duyệt:</strong> dễ kết nối với dapp trên máy tính.</li>
  <li><strong>Ví thông minh (smart wallet):</strong> là một hợp đồng thông minh, hỗ trợ khôi phục qua người bảo hộ, giới hạn chi tiêu, trả phí gas bằng token khác, gom nhiều thao tác thành một. Sau EIP-7702 (Pectra), ví thường cũng có thể dùng những tính năng này.</li>
  <li><strong>Ví đa chữ ký (multisig)</strong> như Safe: cần nhiều người cùng ký, phù hợp cho quỹ chung, DAO, doanh nghiệp.</li>
</ul>

<h2>Chọn ví như thế nào?</h2>
<p>Trang "Find a wallet" của ethereum.org cho phép lọc theo các tiêu chí: mã nguồn mở, hỗ trợ ví phần cứng, hỗ trợ Layer 2, có thể mua tiền pháp định, có ENS, có khôi phục xã hội… Một gợi ý thực tế: dùng ví phần cứng cho khoản tiết kiệm, ví di động hoặc trình duyệt với số tiền nhỏ cho việc dùng hằng ngày.</p>`,
      keys: [
        "Tiền nằm trên blockchain; ví chỉ giữ khóa và giúp bạn ký giao dịch.",
        "Cụm từ khôi phục 12/24 từ = toàn bộ quyền sở hữu. Không bao giờ chia sẻ.",
        "Ví tự quản: bạn giữ khóa. Ví lưu ký: bên khác giữ.",
        "Ví phần cứng cho số tiền lớn; ví thông minh và multisig cho tính năng nâng cao."
      ],
      quiz: [
        { q: "Khi bạn \"có ETH trong ví\", ETH thực ra nằm ở đâu?", o: ["Trong điện thoại của bạn", "Trên blockchain Ethereum; ví chỉ giữ khóa", "Trên máy chủ của MetaMask", "Trong ví phần cứng"], a: 1, e: "Số dư được ghi trên blockchain. Ví giữ khóa để bạn điều khiển tài khoản." },
        { q: "Một người tự xưng \"hỗ trợ MetaMask\" xin cụm từ khôi phục để giúp bạn. Bạn nên:", o: ["Gửi cho họ để được hỗ trợ nhanh", "Chỉ gửi 6 từ đầu", "Từ chối, đó là lừa đảo", "Gửi qua email cho an toàn"], a: 2, e: "Không dịch vụ chính danh nào cần cụm từ khôi phục của bạn." },
        { q: "Ví đa chữ ký (multisig) phù hợp nhất cho:", o: ["Một người dùng mới chơi game", "Quỹ chung của nhóm hoặc DAO cần nhiều người duyệt", "Giao dịch tốc độ cao", "Đào coin"], a: 1, e: "Multisig yêu cầu M trên N người ký, giảm rủi ro một người bị mất khóa hoặc gian lận." },
        { q: "Rủi ro chính của ví lưu ký (custodial) là:", o: ["Bạn quên cụm từ khôi phục", "Bên giữ khóa có thể đóng băng, phá sản hoặc bị hack", "Phí gas cao hơn", "Không xem được số dư"], a: 1, e: "Khi người khác giữ khóa, bạn phụ thuộc vào họ." }
      ]
    },
    {
      id: "use-a-wallet",
      title: "Tạo tài khoản và dùng ví",
      min: 7,
      src: ["/guides/how-to-create-an-ethereum-account/", "/guides/how-to-use-a-wallet/", "/guides/"],
      tldr: "Tạo tài khoản chỉ mất vài phút: cài ví, sao lưu cụm từ khôi phục, rồi chia sẻ địa chỉ để nhận tiền. Khi dùng dapp, bạn sẽ \"kết nối ví\" và \"ký\" các yêu cầu; hãy đọc kỹ mỗi lần ký.",
      body: `
<h2>Các bước tạo tài khoản</h2>
<div class="flow arrows">
  <div><b>1 · Chọn ví</b>Tải từ trang chính thức hoặc kho ứng dụng.</div>
  <div><b>2 · Tạo ví mới</b>Ví sinh ra cụm từ khôi phục.</div>
  <div><b>3 · Sao lưu</b>Viết cụm từ ra giấy, xác nhận lại.</div>
  <div><b>4 · Nhận địa chỉ</b>Địa chỉ bắt đầu bằng 0x, 42 ký tự.</div>
</div>
<p>Tạo tài khoản là miễn phí và không cần gửi giao dịch nào. Địa chỉ của bạn tồn tại ngay khi khóa được tạo, kể cả khi chưa từng xuất hiện trên blockchain.</p>

<h2>Gửi và nhận</h2>
<ul>
  <li><strong>Nhận:</strong> chia sẻ địa chỉ hoặc mã QR. Địa chỉ là công khai, chia sẻ an toàn.</li>
  <li><strong>Gửi:</strong> nhập địa chỉ người nhận, số tiền, kiểm tra mạng (Ethereum hay Layer 2 nào), xem phí, rồi xác nhận.</li>
  <li><strong>Kiểm tra mạng:</strong> cùng một địa chỉ dùng được trên mainnet và các mạng EVM khác, nhưng số dư trên mỗi mạng là riêng biệt. Gửi nhầm mạng có thể khiến người nhận không thấy tiền.</li>
</ul>
<div class="callout tip"><b>Mẹo</b><p>Khi gửi số tiền lớn tới địa chỉ mới, hãy gửi thử một khoản nhỏ trước. Kiểm tra cả ký tự đầu và cuối của địa chỉ vì có kiểu lừa đảo dùng địa chỉ trông giống (address poisoning).</p></div>

<h2>Kết nối với ứng dụng</h2>
<p>Khi bấm "Connect wallet" trên một dapp, ví chỉ chia sẻ địa chỉ công khai của bạn. Việc này không tốn phí và không cho dapp quyền lấy tiền. Rủi ro đến ở bước sau: <strong>ký</strong>.</p>

<h2>Ba loại yêu cầu ký</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Ví dụ</th><th>Có tốn gas?</th><th>Cần cảnh giác</th></tr>
<tr><td>Ký tin nhắn</td><td>Đăng nhập bằng Ethereum (SIWE)</td><td>Không</td><td>Đọc nội dung; tin nhắn khó hiểu có thể là chữ ký cho phép chuyển token (permit).</td></tr>
<tr><td>Phê duyệt token (approve)</td><td>Cho Uniswap dùng USDC của bạn</td><td>Có</td><td>"Unlimited approval" cho phép hợp đồng rút toàn bộ token đó bất cứ lúc nào.</td></tr>
<tr><td>Giao dịch</td><td>Gửi ETH, swap, mint NFT</td><td>Có</td><td>Xem bản mô phỏng kết quả nếu ví hỗ trợ.</td></tr>
</table></div>

<h2>Thu hồi quyền truy cập token</h2>
<p>Các quyền đã approve vẫn tồn tại sau khi bạn rời trang. Định kỳ kiểm tra và thu hồi bằng công cụ như revoke.cash hoặc mục "Token approvals" trên Etherscan. Thu hồi là một giao dịch nhỏ, tốn một ít gas.</p>

<h2>Tên dễ nhớ với ENS</h2>
<p>Ethereum Name Service cho phép gắn tên như <code>ban.eth</code> với địa chỉ. Người khác có thể gửi tiền tới tên thay vì chuỗi 0x dài.</p>`,
      keys: [
        "Tạo tài khoản miễn phí, không cần giao dịch; địa chỉ có dạng 0x + 40 ký tự hex.",
        "Một địa chỉ dùng trên nhiều mạng EVM, nhưng số dư mỗi mạng riêng biệt.",
        "Kết nối ví chỉ chia sẻ địa chỉ; ký approve hoặc permit mới là bước có rủi ro.",
        "Định kỳ thu hồi các approval không còn dùng."
      ],
      quiz: [
        { q: "Bấm \"Connect wallet\" trên một trang web sẽ:", o: ["Cho trang quyền rút tiền của bạn", "Chỉ chia sẻ địa chỉ công khai", "Tốn phí gas", "Gửi cụm từ khôi phục cho trang"], a: 1, e: "Kết nối chỉ cho trang biết địa chỉ. Các quyền khác đòi hỏi bạn ký thêm." },
        { q: "\"Unlimited approval\" cho một hợp đồng nghĩa là:", o: ["Hợp đồng có thể chuyển toàn bộ số token đó của bạn bất cứ lúc nào", "Bạn được miễn phí gas", "Hợp đồng không thể bị hack", "Chỉ dùng được một lần"], a: 0, e: "Quyền này tồn tại cho tới khi bạn thu hồi; nếu hợp đồng bị hack, token có thể mất." },
        { q: "Vì sao nên gửi thử một khoản nhỏ khi chuyển tới địa chỉ mới?", o: ["Để được giảm phí", "Để xác nhận địa chỉ và mạng đúng trước khi gửi số lớn", "Vì Ethereum yêu cầu", "Để kích hoạt tài khoản người nhận"], a: 1, e: "Giao dịch không thể đảo ngược; thử trước giúp tránh mất số tiền lớn." }
      ]
    },
    {
      id: "get-eth",
      title: "Cách có ETH",
      min: 5,
      src: ["/get-eth/"],
      tldr: "Bạn có thể mua ETH trên sàn tập trung, qua dịch vụ mua trực tiếp trong ví, đổi token khác trên sàn phi tập trung, hoặc nhận từ người khác. Sau khi mua, cân nhắc rút về ví tự quản.",
      body: `
<h2>Các cách phổ biến</h2>
<div class="table-wrap"><table>
<tr><th>Cách</th><th>Mô tả</th><th>Lưu ý</th></tr>
<tr><td>Sàn tập trung (CEX)</td><td>Đăng ký, xác minh danh tính (KYC), nạp tiền pháp định, mua ETH.</td><td>Sàn giữ khóa cho tới khi bạn rút. Chọn sàn được cấp phép tại nơi bạn sống.</td></tr>
<tr><td>Mua trong ví (on-ramp)</td><td>Nhiều ví tích hợp dịch vụ mua bằng thẻ hoặc chuyển khoản.</td><td>Phí thường cao hơn sàn; tiền vào thẳng ví của bạn.</td></tr>
<tr><td>Sàn phi tập trung (DEX)</td><td>Đổi token bạn đang có lấy ETH qua Uniswap, CoW Swap…</td><td>Cần có sẵn tài sản trên chuỗi và một ít ETH để trả gas (hoặc dùng ví hỗ trợ trả gas bằng token).</td></tr>
<tr><td>P2P hoặc nhận lương</td><td>Nhận trực tiếp từ người khác.</td><td>Chỉ cần chia sẻ địa chỉ.</td></tr>
<tr><td>Staking hoặc đóng góp</td><td>Nhận ETH từ phần thưởng staking, grant, bounty.</td><td>Xem học phần 04 về staking.</td></tr>
</table></div>

<h2>Sau khi có ETH</h2>
<ul>
  <li><strong>Rút về ví tự quản</strong> nếu bạn định giữ lâu dài hoặc dùng dapp.</li>
  <li><strong>Chọn đúng mạng khi rút:</strong> nhiều sàn cho rút thẳng lên Layer 2 (Arbitrum, Base, Optimism…) với phí thấp hơn mainnet.</li>
  <li><strong>Giữ một ít ETH cho phí gas</strong> trên mạng bạn dùng.</li>
</ul>
<div class="callout warn"><b>Thận trọng</b><p>ethereum.org không khuyến nghị đầu tư. Giá ETH biến động mạnh. Không bao giờ đầu tư số tiền bạn không chấp nhận mất, và cảnh giác với lời hứa lợi nhuận "đảm bảo".</p></div>`,
      keys: [
        "Mua trên sàn tập trung, on-ramp trong ví, đổi trên DEX, hoặc nhận trực tiếp.",
        "Sàn giữ khóa cho đến khi bạn rút về ví tự quản.",
        "Rút thẳng lên Layer 2 giúp tiết kiệm phí; luôn giữ ít ETH để trả gas."
      ],
      quiz: [
        { q: "Khi ETH còn nằm trên sàn tập trung, ai giữ khóa?", o: ["Bạn", "Sàn", "Ethereum Foundation", "Không ai"], a: 1, e: "Đó là ví lưu ký; bạn chỉ có quyền đòi sàn trả." },
        { q: "Vì sao cần giữ một ít ETH trong ví?", o: ["Để ví không bị khóa", "Để trả phí gas khi giao dịch", "Để nhận airdrop", "Để tài khoản không bị xóa"], a: 1, e: "Phần lớn giao dịch phải trả gas bằng ETH." }
      ]
    },
    {
      id: "gas-users",
      title: "Phí gas là gì?",
      min: 7,
      src: ["/gas/"],
      tldr: "Gas là đơn vị đo lượng tính toán một giao dịch cần. Phí = lượng gas dùng × (base fee + tip). Base fee tự điều chỉnh theo độ bận của mạng và bị đốt; tip trả cho người đề xuất khối.",
      body: `
<h2>Vì sao phải trả phí?</h2>
<p>Mỗi giao dịch bắt hàng nghìn node trên thế giới phải tính toán và lưu dữ liệu. Phí gas trả cho tài nguyên đó và ngăn kẻ xấu spam mạng hoặc chạy vòng lặp vô hạn.</p>

<h2>Công thức</h2>
<pre><code>phí = gas đã dùng × (base fee + priority fee)</code></pre>
<p>Ví dụ: chuyển ETH đơn giản dùng <strong>21.000 gas</strong>. Nếu base fee là 2 gwei và tip là 0,1 gwei:</p>
<pre><code>21.000 × 2,1 gwei = 44.100 gwei = 0,0000441 ETH</code></pre>
<div class="table-wrap"><table>
<tr><th>Thành phần</th><th>Ai quyết định</th><th>Đi đâu</th></tr>
<tr><td>Base fee</td><td>Giao thức tự tính theo độ đầy của khối trước</td><td>Bị đốt</td></tr>
<tr><td>Priority fee (tip)</td><td>Bạn chọn (ví gợi ý)</td><td>Người đề xuất khối</td></tr>
<tr><td>Max fee</td><td>Bạn đặt mức trần</td><td>Phần dư được hoàn lại</td></tr>
</table></div>

<h2>Base fee tự điều chỉnh</h2>
<p>Mỗi khối có một mức gas mục tiêu bằng một nửa giới hạn. Nếu khối trước đầy hơn mục tiêu, base fee tăng tối đa 12,5%; nếu vơi hơn, base fee giảm. Nhờ vậy phí dễ dự đoán, và khi mạng vắng thì rất rẻ.</p>

<h2>Thao tác nào tốn nhiều gas?</h2>
<ul>
  <li>Chuyển ETH: 21.000 gas (rẻ nhất).</li>
  <li>Chuyển token ERC-20: khoảng 45.000–65.000 gas.</li>
  <li>Swap trên DEX, mint NFT: thường 100.000–300.000 gas trở lên.</li>
  <li>Ghi dữ liệu mới vào bộ nhớ hợp đồng là thao tác đắt nhất.</li>
</ul>

<h2>Cách giảm phí</h2>
<ul>
  <li><strong>Dùng Layer 2:</strong> phí thường chỉ bằng một phần nhỏ so với mainnet.</li>
  <li><strong>Giao dịch lúc mạng vắng</strong> (theo dõi bằng công cụ gas tracker).</li>
  <li><strong>Không đặt tip quá cao</strong> nếu không cần nhanh.</li>
</ul>
<div class="callout info"><b>Giao dịch thất bại vẫn mất phí</b><p>Nếu giao dịch hết gas hoặc bị hợp đồng từ chối (revert), phần gas đã dùng vẫn bị tính vì node đã tốn công tính toán.</p></div>`,
      keys: [
        "Phí = gas dùng × (base fee + tip); chuyển ETH tốn 21.000 gas.",
        "Base fee do giao thức tính và bị đốt; tip trả cho người đề xuất khối.",
        "Base fee thay đổi tối đa 12,5% mỗi khối tùy độ đầy so với mục tiêu.",
        "Layer 2 là cách hiệu quả nhất để giảm phí."
      ],
      quiz: [
        { q: "Một giao dịch chuyển ETH thông thường tốn bao nhiêu gas?", o: ["1.000", "21.000", "100.000", "1.000.000"], a: 1, e: "21.000 gas là lượng gas cố định cho một lần chuyển ETH cơ bản." },
        { q: "Base fee của giao dịch đi đâu?", o: ["Cho validator", "Bị đốt", "Cho Ethereum Foundation", "Hoàn lại người gửi"], a: 1, e: "Base fee bị đốt theo EIP-1559; tip mới trả cho người đề xuất khối." },
        { q: "Nếu khối trước đầy hơn mục tiêu, base fee của khối tiếp theo sẽ:", o: ["Giảm", "Giữ nguyên", "Tăng tối đa 12,5%", "Tăng gấp đôi"], a: 2, e: "Cơ chế EIP-1559 điều chỉnh tối đa ±12,5% mỗi khối." },
        { q: "Giao dịch bị revert có mất phí không?", o: ["Không, được hoàn toàn bộ", "Có, phần gas đã dùng vẫn bị tính", "Chỉ mất tip", "Tùy ví"], a: 1, e: "Node vẫn phải tính toán tới lúc revert, nên gas đã dùng bị tính." }
      ]
    },
    {
      id: "security",
      title: "An toàn và phòng chống lừa đảo",
      min: 9,
      src: ["/security/"],
      tldr: "Trên Ethereum, bạn là ngân hàng của chính mình: giao dịch không thể đảo ngược và không có tổng đài để gọi. Bảo vệ cụm từ khôi phục, kiểm tra kỹ trước khi ký và nhận diện các kiểu lừa đảo phổ biến.",
      body: `
<h2>Nguyên tắc nền tảng</h2>
<ul>
  <li><strong>Không ai cần cụm từ khôi phục hay khóa bí mật của bạn.</strong> Không có ngoại lệ.</li>
  <li><strong>Giao dịch không thể hoàn tác.</strong> Gửi nhầm hay ký nhầm là mất.</li>
  <li><strong>Lời mời quá hấp dẫn thường là lừa đảo.</strong> "Gửi 1 ETH nhận lại 2 ETH" luôn là lừa đảo.</li>
  <li><strong>Không ai "hỗ trợ" bạn qua tin nhắn riêng.</strong> Admin thật không nhắn trước.</li>
</ul>

<h2>Các kiểu lừa đảo phổ biến</h2>
<div class="table-wrap"><table>
<tr><th>Kiểu</th><th>Cách hoạt động</th><th>Cách phòng</th></tr>
<tr><td>Giveaway giả</td><td>Video hoặc tài khoản giả người nổi tiếng hứa nhân đôi số ETH bạn gửi.</td><td>Không ai tặng tiền theo kiểu này.</td></tr>
<tr><td>Hỗ trợ giả</td><td>Kẻ gian giả làm nhân viên ví/sàn trên Discord, Telegram, xin cụm từ khôi phục.</td><td>Không bao giờ chia sẻ cụm từ; chỉ dùng kênh hỗ trợ chính thức.</td></tr>
<tr><td>Trang phishing</td><td>Trang giả giao diện dapp, yêu cầu ký approve hoặc permit để rút sạch token.</td><td>Lưu dấu trang (bookmark) địa chỉ chính thức; đọc kỹ yêu cầu ký.</td></tr>
<tr><td>Airdrop/NFT lạ</td><td>Token lạ xuất hiện trong ví kèm link "nhận thưởng".</td><td>Bỏ qua; không tương tác với token không rõ nguồn gốc.</td></tr>
<tr><td>Address poisoning</td><td>Kẻ gian gửi giao dịch 0 đồng từ địa chỉ giống địa chỉ bạn hay dùng để bạn copy nhầm.</td><td>Luôn kiểm tra toàn bộ địa chỉ, dùng sổ địa chỉ hoặc ENS.</td></tr>
<tr><td>"Nâng cấp ETH"</td><td>Yêu cầu gửi ETH để "chuyển sang ETH2" hoặc sau một hard fork.</td><td>ETH không bao giờ cần nâng cấp.</td></tr>
<tr><td>Lừa đảo đầu tư, tình cảm</td><td>Làm quen lâu dài rồi dụ đầu tư vào nền tảng giả ("pig butchering").</td><td>Không đầu tư theo lời người quen qua mạng.</td></tr>
</table></div>

<h2>Bảo vệ tài khoản</h2>
<ul>
  <li>Dùng <strong>ví phần cứng</strong> cho số tiền lớn.</li>
  <li>Tách ví: một ví "nóng" để thử dapp mới với ít tiền, một ví "lạnh" để giữ tài sản.</li>
  <li>Bật <strong>xác thực hai lớp</strong> bằng ứng dụng hoặc khóa bảo mật (không dùng SMS) cho tài khoản sàn.</li>
  <li>Chỉ tải ví từ trang chính thức; kiểm tra kỹ tên miền.</li>
  <li>Định kỳ <strong>thu hồi approval</strong> không dùng nữa.</li>
  <li>Dùng ví có <strong>mô phỏng giao dịch</strong> để xem trước tài sản nào sẽ rời khỏi ví.</li>
</ul>
<div class="callout tip"><b>Trước khi ký, tự hỏi</b><p>Mình có chủ động bắt đầu thao tác này không? Trang này có đúng tên miền không? Ví đang hiển thị tài sản nào sẽ bị chuyển đi? Nếu không chắc, đừng ký.</p></div>`,
      keys: [
        "Không ai cần cụm từ khôi phục của bạn; giao dịch không thể hoàn tác.",
        "Lừa đảo phổ biến: giveaway giả, hỗ trợ giả, phishing, address poisoning, \"nâng cấp ETH\".",
        "Ví phần cứng, tách ví nóng/lạnh, thu hồi approval, mô phỏng giao dịch giúp giảm rủi ro."
      ],
      quiz: [
        { q: "Address poisoning là gì?", o: ["Virus phá hỏng ví", "Kẻ gian gửi giao dịch từ địa chỉ trông giống địa chỉ quen để bạn copy nhầm", "Hack node Ethereum", "Làm giả ENS"], a: 1, e: "Luôn đối chiếu toàn bộ địa chỉ, đừng copy từ lịch sử giao dịch." },
        { q: "Một video livestream có \"Vitalik\" hứa trả gấp đôi số ETH bạn gửi. Đó là:", o: ["Chương trình airdrop chính thức", "Lừa đảo giveaway", "Phần thưởng staking", "Quỹ của Ethereum Foundation"], a: 1, e: "Đây là một trong những kiểu lừa đảo lâu đời và phổ biến nhất." },
        { q: "Cách xác thực hai lớp nào nên tránh cho tài khoản sàn?", o: ["Ứng dụng xác thực", "Khóa bảo mật phần cứng", "SMS", "Passkey"], a: 2, e: "SMS dễ bị tấn công chiếm SIM (SIM swap)." }
      ]
    },
    {
      id: "layer-2-users",
      title: "Layer 2 cho người dùng",
      min: 8,
      src: ["/layer-2/", "/layer-2/learn/", "/layer-2/networks/"],
      tldr: "Layer 2 là các mạng chạy \"phía trên\" Ethereum: xử lý giao dịch nhanh và rẻ, rồi đăng dữ liệu và bằng chứng về Ethereum để thừa hưởng bảo mật. Phổ biến nhất là rollup (optimistic và zero-knowledge).",
      body: `
<h2>Vì sao cần Layer 2?</h2>
<p>Ethereum mainnet ưu tiên bảo mật và phi tập trung, nên số giao dịch mỗi giây có hạn. Khi nhu cầu cao, phí tăng. Thay vì làm mainnet "to" hơn và khó chạy node hơn, Ethereum chọn mở rộng bằng Layer 2: mainnet đóng vai trò tòa án và sổ cái cuối cùng, còn L2 xử lý khối lượng giao dịch lớn.</p>

<h2>Rollup hoạt động thế nào?</h2>
<div class="flow arrows">
  <div><b>Người dùng</b>Gửi giao dịch lên L2</div>
  <div><b>Sequencer</b>Sắp xếp, thực thi, nén hàng nghìn giao dịch</div>
  <div><b>Đăng lên L1</b>Dữ liệu (blob) + gốc trạng thái mới</div>
  <div><b>Ethereum</b>Đảm bảo dữ liệu có sẵn và xác minh tính đúng</div>
</div>
<div class="compare">
  <div><h4>Optimistic rollup</h4><p>Mặc định cho rằng giao dịch đúng; ai cũng có thể gửi <strong>fraud proof</strong> trong thời gian thử thách (thường ~7 ngày). Ví dụ: Arbitrum, Optimism, Base.</p></div>
  <div><h4>ZK rollup</h4><p>Gửi kèm <strong>validity proof</strong> (bằng chứng toán học) cho mỗi lô; được xác minh ngay trên L1. Ví dụ: zkSync, Starknet, Scroll, Linea.</p></div>
</div>

<h2>Lợi ích và đánh đổi</h2>
<ul>
  <li><strong>Phí thấp</strong>, đặc biệt sau Dencun (blob) và Fusaka (PeerDAS) khiến chi phí đăng dữ liệu giảm mạnh.</li>
  <li><strong>Nhanh:</strong> xác nhận gần như tức thì từ sequencer.</li>
  <li><strong>Cùng địa chỉ, cùng ví:</strong> hầu hết L2 tương thích EVM.</li>
  <li><strong>Đánh đổi:</strong> nhiều L2 còn sequencer tập trung, có hội đồng bảo mật có quyền nâng cấp hợp đồng. Rút từ optimistic rollup về L1 qua cầu chính thức mất khoảng 7 ngày.</li>
</ul>

<h2>Đánh giá mức độ trưởng thành</h2>
<p>Trang L2BEAT xếp L2 theo các "Stage":</p>
<div class="table-wrap"><table>
<tr><th>Stage</th><th>Ý nghĩa</th></tr>
<tr><td>Stage 0</td><td>Hệ thống chứng minh chưa hoàn chỉnh hoặc chưa hoạt động; người vận hành có quyền lớn.</td></tr>
<tr><td>Stage 1</td><td>Có hệ thống chứng minh hoạt động; hội đồng bảo mật chỉ can thiệp khi có lỗi.</td></tr>
<tr><td>Stage 2</td><td>Hoàn toàn do mã điều khiển; người dùng có đủ thời gian rút trước mọi nâng cấp.</td></tr>
</table></div>

<h2>Cách bắt đầu dùng L2</h2>
<ul>
  <li>Rút trực tiếp từ sàn lên L2 (rẻ và đơn giản nhất).</li>
  <li>Hoặc dùng cầu (bridge) để chuyển ETH từ mainnet sang L2.</li>
  <li>Thêm mạng L2 vào ví (thường chỉ cần một cú bấm trên trang của dự án hoặc chainlist).</li>
</ul>`,
      keys: [
        "Layer 2 xử lý giao dịch ngoài mainnet và đăng dữ liệu/bằng chứng về Ethereum.",
        "Optimistic rollup dùng fraud proof (thời gian thử thách ~7 ngày); ZK rollup dùng validity proof.",
        "Blob (Dencun) và PeerDAS (Fusaka) giúp phí L2 giảm mạnh.",
        "Xem Stage trên L2BEAT để đánh giá mức độ phi tập trung của một L2."
      ],
      quiz: [
        { q: "Optimistic rollup đảm bảo tính đúng của giao dịch bằng cách nào?", o: ["Gửi bằng chứng ZK cho mỗi lô", "Cho phép ai cũng gửi fraud proof trong thời gian thử thách", "Tin tưởng sequencer tuyệt đối", "Đào khối riêng"], a: 1, e: "Mặc định đúng, nhưng có thể bị thách thức bằng fraud proof." },
        { q: "Vì sao rút từ Arbitrum về mainnet qua cầu chính thức mất khoảng 7 ngày?", o: ["Do quy định pháp lý", "Do thời gian thử thách của fraud proof", "Do mạng chậm", "Do phí cao"], a: 1, e: "Phải chờ hết cửa sổ thử thách để chắc chắn không có gian lận." },
        { q: "Ethereum chọn mở rộng bằng Layer 2 chủ yếu vì:", o: ["Muốn giữ mainnet dễ chạy node, phi tập trung", "Không thể nâng cấp mainnet", "L2 do Ethereum Foundation sở hữu", "L2 không cần bảo mật"], a: 0, e: "Tăng mainnet quá mức sẽ khiến chạy node đắt đỏ và tập trung hóa." },
        { q: "Trên L2BEAT, Stage 2 nghĩa là:", o: ["L2 mới ra mắt", "Rollup do mã điều khiển hoàn toàn, người dùng có thời gian rút trước nâng cấp", "L2 có phí cao nhất", "L2 không còn hoạt động"], a: 1, e: "Stage 2 là mức trưởng thành cao nhất về phi tập trung." }
      ]
    },
    {
      id: "bridges-users",
      title: "Cầu nối blockchain",
      min: 6,
      src: ["/bridges/"],
      tldr: "Cầu nối (bridge) cho phép chuyển tài sản và dữ liệu giữa các blockchain, ví dụ từ Ethereum sang một Layer 2. Cầu rất hữu ích nhưng cũng là nơi xảy ra nhiều vụ hack lớn, nên hãy hiểu cầu mình dùng tin tưởng vào điều gì.",
      body: `
<h2>Vì sao cần cầu?</h2>
<p>Mỗi blockchain là một hệ thống riêng, không tự biết điều gì xảy ra ở chuỗi khác. Cầu giải quyết bài toán này. Cách phổ biến là <strong>khóa và đúc (lock and mint)</strong>: khóa tài sản ở chuỗi nguồn, đúc ra một token đại diện ở chuỗi đích. Khi đi ngược lại thì đốt token đại diện và mở khóa tài sản gốc.</p>

<h2>Các loại cầu</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Tin tưởng vào</th><th>Ví dụ</th></tr>
<tr><td>Cầu chính thức của rollup (canonical)</td><td>Bảo mật của chính rollup và Ethereum</td><td>Arbitrum Bridge, Base Bridge</td></tr>
<tr><td>Cầu tin cậy (trusted)</td><td>Một nhóm người vận hành giữ tài sản hoặc ký xác nhận</td><td>Nhiều cầu đa chuỗi dùng multisig</td></tr>
<tr><td>Cầu không cần tin (trust-minimized)</td><td>Mã và bằng chứng mật mã, light client</td><td>Cầu dùng bằng chứng ZK</td></tr>
<tr><td>Cầu thanh khoản / intent</td><td>Người cung cấp thanh khoản ứng tiền trước ở chuỗi đích</td><td>Across và các dịch vụ tương tự</td></tr>
</table></div>

<h2>Rủi ro</h2>
<ul>
  <li><strong>Lỗi hợp đồng:</strong> cầu giữ lượng tài sản khổng lồ nên là mục tiêu hấp dẫn của hacker.</li>
  <li><strong>Khóa người vận hành bị lộ:</strong> nhiều vụ hack lớn xảy ra vì kẻ tấn công chiếm được đủ khóa ký.</li>
  <li><strong>Token đại diện mất giá trị</strong> nếu tài sản bị khóa ở chuỗi nguồn bị đánh cắp.</li>
</ul>
<div class="callout tip"><b>Lời khuyên</b><p>Với Layer 2, ưu tiên cầu chính thức hoặc rút thẳng từ sàn lên L2. Với cầu khác, tìm hiểu mô hình tin cậy, lịch sử kiểm toán và lịch sử sự cố.</p></div>`,
      keys: [
        "Cầu chuyển tài sản giữa các chuỗi, thường theo mô hình khóa và đúc.",
        "Mỗi loại cầu có giả định tin cậy khác nhau: rollup chính thức, multisig, ZK, thanh khoản.",
        "Cầu là mục tiêu hack lớn; ưu tiên cầu chính thức của rollup."
      ],
      quiz: [
        { q: "Mô hình \"lock and mint\" hoạt động thế nào?", o: ["Đốt tài sản ở cả hai chuỗi", "Khóa tài sản ở chuỗi nguồn, đúc token đại diện ở chuỗi đích", "Gửi tài sản qua email", "Đổi tài sản lấy tiền mặt"], a: 1, e: "Token đại diện có giá trị vì tài sản gốc đang được khóa." },
        { q: "Nhiều vụ hack cầu lớn xảy ra vì:", o: ["Ethereum bị tấn công 51%", "Kẻ tấn công chiếm được khóa ký của người vận hành hoặc lợi dụng lỗi hợp đồng", "Người dùng quên mật khẩu", "Phí gas quá cao"], a: 1, e: "Cầu tin cậy phụ thuộc vào một nhóm khóa; lộ khóa là mất tài sản." }
      ]
    },
    {
      id: "dapps-users",
      title: "Ứng dụng phi tập trung (dapp)",
      min: 5,
      src: ["/apps/", "/developers/docs/dapps/"],
      tldr: "Dapp là ứng dụng có phần logic chạy bằng hợp đồng thông minh trên blockchain. Bạn dùng dapp bằng ví thay vì tài khoản email và mật khẩu.",
      body: `
<h2>Dapp khác ứng dụng thường ở đâu?</h2>
<div class="compare">
  <div><h4>Ứng dụng thường</h4><ul><li>Logic và dữ liệu trên máy chủ công ty</li><li>Đăng nhập bằng email/mật khẩu</li><li>Công ty có thể khóa tài khoản</li></ul></div>
  <div><h4>Dapp</h4><ul><li>Logic quan trọng nằm trong hợp đồng thông minh</li><li>Đăng nhập bằng ví</li><li>Hợp đồng chạy kể cả khi giao diện web bị gỡ</li></ul></div>
</div>

<h2>Các nhóm ứng dụng phổ biến</h2>
<ul>
  <li><strong>Tài chính:</strong> sàn DEX, cho vay, stablecoin, quản lý tài sản.</li>
  <li><strong>Sưu tầm và nghệ thuật:</strong> chợ NFT, nền tảng cho nghệ sĩ.</li>
  <li><strong>Mạng xã hội:</strong> Farcaster, Lens, nơi bạn sở hữu danh sách người theo dõi.</li>
  <li><strong>Game:</strong> vật phẩm là token thuộc về người chơi.</li>
  <li><strong>Quản trị:</strong> bỏ phiếu DAO (Snapshot, Tally).</li>
  <li><strong>Danh tính:</strong> ENS, chứng chỉ, bằng chứng nhân thân.</li>
</ul>
<p>Trang "Apps" của ethereum.org liệt kê ứng dụng theo danh mục và theo mạng (mainnet, các L2).</p>

<h2>Dùng dapp một cách cẩn thận</h2>
<ul>
  <li>Kiểm tra tên miền, ưu tiên ứng dụng lâu năm, có kiểm toán.</li>
  <li>Bắt đầu với số tiền nhỏ.</li>
  <li>Hiểu rằng "phi tập trung" không có nghĩa "không rủi ro": lỗi hợp đồng, oracle bị thao túng, hoặc quản trị bị chiếm quyền đều có thể xảy ra.</li>
</ul>`,
      keys: [
        "Dapp = giao diện + hợp đồng thông minh; đăng nhập bằng ví.",
        "Hợp đồng vẫn chạy kể cả khi giao diện web bị gỡ.",
        "Phi tập trung không đồng nghĩa không rủi ro."
      ],
      quiz: [
        { q: "Điều gì xảy ra với hợp đồng của một dapp nếu trang web giao diện bị gỡ?", o: ["Hợp đồng bị xóa", "Hợp đồng vẫn chạy trên Ethereum, có thể dùng qua giao diện khác", "Tài sản bị khóa vĩnh viễn", "Ethereum Foundation tắt hợp đồng"], a: 1, e: "Giao diện chỉ là một cách truy cập; hợp đồng tồn tại trên blockchain." },
        { q: "Bạn đăng nhập vào dapp bằng:", o: ["Email và mật khẩu", "Ví Ethereum", "Số điện thoại", "Tài khoản ngân hàng"], a: 1, e: "Ví đóng vai trò danh tính và công cụ ký." }
      ]
    },
    {
      id: "privacy-users",
      title: "Quyền riêng tư trên Ethereum",
      min: 6,
      src: ["/privacy/ethereum/", "/roadmap/privacy/"],
      tldr: "Ethereum mặc định là công khai: ai cũng thấy số dư và lịch sử giao dịch của một địa chỉ. Địa chỉ không ghi tên bạn, nhưng có thể bị liên kết với danh tính thật. Có các công cụ và hướng nghiên cứu để cải thiện quyền riêng tư.",
      body: `
<h2>Công khai, nhưng là bí danh</h2>
<p>Ethereum là <strong>bí danh (pseudonymous)</strong> chứ không ẩn danh. Địa chỉ không chứa tên, nhưng khi bạn rút tiền từ sàn đã KYC, công khai tên ENS hoặc đăng địa chỉ lên mạng xã hội, mọi giao dịch của địa chỉ đó có thể bị gắn với bạn.</p>

<h2>Những gì bị lộ</h2>
<ul>
  <li>Số dư, token, NFT của địa chỉ.</li>
  <li>Toàn bộ lịch sử giao dịch và các địa chỉ bạn từng tương tác.</li>
  <li>Siêu dữ liệu: nhà cung cấp RPC có thể thấy địa chỉ IP và những gì bạn truy vấn.</li>
</ul>

<h2>Cách cải thiện</h2>
<ul>
  <li><strong>Dùng nhiều địa chỉ</strong> cho các mục đích khác nhau.</li>
  <li><strong>Chạy node riêng</strong> hoặc dùng RPC tôn trọng quyền riêng tư.</li>
  <li><strong>Bằng chứng không tiết lộ (zero-knowledge proof):</strong> chứng minh bạn đủ 18 tuổi hay là công dân một nước mà không lộ thông tin khác.</li>
  <li><strong>Ứng dụng giao dịch riêng tư</strong> (privacy pools, các L2 tập trung vào riêng tư) dùng ZK để tách liên kết giữa tiền gửi và tiền rút, có cơ chế chứng minh tiền không đến từ nguồn xấu.</li>
</ul>

<h2>Lộ trình quyền riêng tư</h2>
<p>ethereum.org mô tả ba hướng: <strong>đọc riêng tư</strong> (giấu bạn đang truy vấn gì), <strong>ghi riêng tư</strong> (giao dịch chống kiểm duyệt và rò rỉ siêu dữ liệu), và <strong>chứng minh riêng tư</strong> (chỉ tiết lộ tối thiểu thông tin cần thiết bằng ZK). Các đề xuất như FOCIL (EIP-7805) và frame transactions (EIP-8141) là một phần nền tảng cho hướng này.</p>`,
      keys: [
        "Ethereum mặc định công khai và bí danh, không ẩn danh.",
        "Địa chỉ dễ bị liên kết với danh tính qua sàn KYC, ENS, mạng xã hội, RPC.",
        "ZK proof cho phép chứng minh mà không tiết lộ; lộ trình gồm đọc, ghi, chứng minh riêng tư."
      ],
      quiz: [
        { q: "Ethereum là ẩn danh hay bí danh?", o: ["Ẩn danh hoàn toàn", "Bí danh: địa chỉ không ghi tên nhưng có thể bị liên kết với danh tính", "Bắt buộc ghi tên thật", "Chỉ ẩn danh trên L2"], a: 1, e: "Mọi giao dịch công khai; chỉ cần một liên kết là lộ lịch sử." },
        { q: "Zero-knowledge proof giúp gì cho quyền riêng tư?", o: ["Mã hóa toàn bộ blockchain", "Chứng minh một điều là đúng mà không tiết lộ dữ liệu gốc", "Xóa lịch sử giao dịch", "Tăng tốc giao dịch"], a: 1, e: "Ví dụ chứng minh đủ tuổi mà không lộ ngày sinh." }
      ]
    }
  ]
});
