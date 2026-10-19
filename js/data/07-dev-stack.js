window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "dev-stack",
  no: 7,
  group: "Dành cho nhà phát triển",
  level: "Trung bình → Nâng cao",
  title: "Ethereum stack: xây dựng ứng dụng",
  desc: "Theo mục Ethereum stack của developer docs: ngôn ngữ và cấu trúc hợp đồng, biên dịch, kiểm thử, triển khai, xác minh, nâng cấp, bảo mật, framework, API, JSON-RPC, xác thực, dữ liệu và lưu trữ.",
  lessons: [
    {
      id: "stack-intro",
      title: "Các tầng của Ethereum stack",
      min: 5,
      src: ["/developers/docs/ethereum-stack/"],
      tldr: "Ethereum stack gồm 5 tầng từ dưới lên: EVM, hợp đồng thông minh, node Ethereum, API client và ứng dụng người dùng. Bạn không cần dùng hết; chọn công cụ phù hợp với mục tiêu.",
      body: `
<div class="stack">
  <div><b>Tầng 5 · Ứng dụng</b>Web, mobile, ví, bot: giao diện người dùng cuối</div>
  <div><b>Tầng 4 · Client API</b>viem, ethers.js, web3.py, alloy… bọc JSON-RPC thành hàm dễ dùng</div>
  <div><b>Tầng 3 · Node</b>Execution + consensus client; tự chạy hoặc dùng nhà cung cấp</div>
  <div><b>Tầng 2 · Hợp đồng</b>Solidity, Vyper… biên dịch thành bytecode</div>
  <div><b>Tầng 1 · EVM</b>Môi trường thực thi chung</div>
</div>
<h2>Bắt đầu từ đâu?</h2>
<ul>
  <li><strong>Muốn viết hợp đồng:</strong> học Solidity, dùng Remix để thử, sau đó Foundry hoặc Hardhat.</li>
  <li><strong>Muốn làm frontend:</strong> học viem/wagmi, cách kết nối ví và đọc dữ liệu.</li>
  <li><strong>Muốn có template hoàn chỉnh:</strong> Scaffold-ETH 2 có sẵn hợp đồng + Next.js + công cụ debug.</li>
  <li><strong>Muốn phân tích dữ liệu:</strong> Dune, The Graph, block explorer API.</li>
</ul>
<div class="callout tip"><b>Học bằng cách làm</b><p>ethereum.org gợi ý các nền tảng học tương tác như CryptoZombies, Speedrun Ethereum, Ethernaut (thử thách bảo mật), cùng mục Tutorials với hàng trăm hướng dẫn.</p></div>`,
      keys: [
        "Năm tầng: EVM → hợp đồng → node → client API → ứng dụng.",
        "Remix để thử nhanh; Foundry/Hardhat cho dự án thật; Scaffold-ETH cho full-stack."
      ],
      quiz: [
        { q: "viem và ethers.js thuộc tầng nào?", o: ["EVM", "Hợp đồng", "Client API", "Node"], a: 2, e: "Thư viện bọc JSON-RPC để ứng dụng gọi node." },
        { q: "Ethernaut là:", o: ["Một client", "Trò chơi thử thách bảo mật hợp đồng", "Một testnet", "Một ví"], a: 1, e: "Mỗi cấp là một hợp đồng có lỗ hổng cần khai thác." }
      ]
    },
    {
      id: "sc-languages",
      title: "Ngôn ngữ hợp đồng thông minh",
      min: 8,
      src: ["/developers/docs/smart-contracts/languages/", "/developers/docs/smart-contracts/"],
      tldr: "Solidity là ngôn ngữ phổ biến nhất (cú pháp giống JavaScript/C++). Vyper giống Python, ưu tiên đơn giản và dễ kiểm toán. Yul là ngôn ngữ trung gian cấp thấp để tối ưu. Tất cả đều biên dịch ra bytecode EVM.",
      body: `
<h2>Solidity</h2>
<ul>
  <li>Hướng đối tượng, kiểu tĩnh, hỗ trợ kế thừa, thư viện, kiểu dữ liệu phức tạp.</li>
  <li>Hệ sinh thái lớn nhất: tài liệu, thư viện OpenZeppelin, công cụ kiểm toán.</li>
  <li>Từ 0.8, tự kiểm tra tràn số.</li>
</ul>
<pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Counter {
    uint256 public count;
    event Incremented(address indexed by, uint256 newCount);

    function increment() external {
        count += 1;
        emit Incremented(msg.sender, count);
    }
}</code></pre>

<h2>Vyper</h2>
<ul>
  <li>Cú pháp Python, cố ý bỏ bớt tính năng (không kế thừa, không modifier, không inline assembly) để mã dễ đọc, khó viết sai.</li>
  <li>Được dùng bởi Curve, Lido và nhiều giao thức DeFi.</li>
</ul>
<pre><code># pragma version ^0.4.0
count: public(uint256)

@external
def increment():
    self.count += 1</code></pre>

<h2>Yul và Yul+</h2>
<p>Ngôn ngữ trung gian gần với opcode, có thể nhúng trong Solidity bằng <code>assembly { ... }</code>. Dùng khi cần tối ưu gas tối đa, nhưng dễ mắc lỗi.</p>

<h2>Các lựa chọn khác</h2>
<div class="table-wrap"><table>
<tr><th>Ngôn ngữ</th><th>Đặc điểm</th></tr>
<tr><td>Fe</td><td>Lấy cảm hứng từ Rust, an toàn kiểu mạnh.</td></tr>
<tr><td>Huff</td><td>Gần như viết opcode trực tiếp, cho tối ưu cực đoan.</td></tr>
<tr><td>Stylus (Arbitrum)</td><td>Viết bằng Rust/C/C++ biên dịch ra WASM, chạy song song EVM trên Arbitrum.</td></tr>
<tr><td>Cairo (Starknet)</td><td>Ngôn ngữ cho máy ảo chứng minh được, không phải EVM.</td></tr>
</table></div>

<h2>Chọn ngôn ngữ nào?</h2>
<p>Người mới nên bắt đầu với <strong>Solidity</strong> vì tài liệu và cộng đồng lớn nhất. Nếu quen Python và đề cao tính dễ kiểm toán, thử <strong>Vyper</strong>.</p>`,
      keys: [
        "Solidity: phổ biến nhất, giống JS/C++, có kế thừa; từ 0.8 tự kiểm tra tràn số.",
        "Vyper: giống Python, ít tính năng, dễ kiểm toán.",
        "Yul: ngôn ngữ trung gian cấp thấp, dùng trong assembly.",
        "Fe, Huff, Stylus, Cairo là các lựa chọn khác."
      ],
      quiz: [
        { q: "Ngôn ngữ nào có cú pháp giống Python và cố ý bỏ kế thừa?", o: ["Solidity", "Vyper", "Yul", "Huff"], a: 1, e: "Vyper ưu tiên sự đơn giản và dễ kiểm toán." },
        { q: "Từ Solidity 0.8, phép cộng tràn số sẽ:", o: ["Quay vòng về 0", "Tự động revert", "Bị bỏ qua", "Tạo số âm"], a: 1, e: "Checked arithmetic là mặc định từ 0.8." },
        { q: "Khối assembly { } trong Solidity dùng ngôn ngữ:", o: ["Vyper", "Yul", "Rust", "Python"], a: 1, e: "Inline assembly viết bằng Yul." }
      ]
    },
    {
      id: "sc-anatomy",
      title: "Cấu trúc một hợp đồng thông minh",
      min: 9,
      src: ["/developers/docs/smart-contracts/anatomy/"],
      tldr: "Một hợp đồng gồm dữ liệu (biến storage), hàm (thay đổi hoặc chỉ đọc trạng thái), sự kiện (log cho bên ngoài theo dõi) và constructor. Hiểu visibility, view/pure, payable và các biến môi trường như msg.sender là nền tảng.",
      body: `
<h2>Dữ liệu</h2>
<ul>
  <li><strong>Storage:</strong> biến cấp hợp đồng, lưu vĩnh viễn. Kiểu: <code>bool</code>, <code>uint256</code>, <code>int</code>, <code>address</code>, <code>bytes32</code>, <code>string</code>, <code>mapping</code>, <code>struct</code>, mảng.</li>
  <li><strong>Memory:</strong> biến tạm trong hàm, mất khi hàm kết thúc.</li>
  <li><strong>Calldata:</strong> tham số chỉ đọc của hàm external.</li>
</ul>

<h2>Biến môi trường thường dùng</h2>
<div class="table-wrap"><table>
<tr><th>Biến</th><th>Ý nghĩa</th></tr>
<tr><td><code>msg.sender</code></td><td>Địa chỉ gọi trực tiếp hàm này</td></tr>
<tr><td><code>msg.value</code></td><td>Số wei gửi kèm</td></tr>
<tr><td><code>block.timestamp</code></td><td>Thời gian của khối (giây)</td></tr>
<tr><td><code>block.number</code></td><td>Số khối</td></tr>
<tr><td><code>tx.origin</code></td><td>EOA khởi tạo giao dịch (không dùng để xác thực!)</td></tr>
</table></div>

<h2>Hàm</h2>
<ul>
  <li><strong>Visibility:</strong> <code>public</code>, <code>external</code> (chỉ gọi từ ngoài), <code>internal</code> (trong hợp đồng và hợp đồng con), <code>private</code> (chỉ trong hợp đồng).</li>
  <li><strong><code>view</code></strong>: đọc nhưng không sửa trạng thái; <strong><code>pure</code></strong>: không đọc cũng không sửa. Gọi từ ngoài không tốn gas.</li>
  <li><strong><code>payable</code></strong>: nhận được ETH.</li>
  <li><strong>Modifier:</strong> điều kiện dùng lại, ví dụ <code>onlyOwner</code>.</li>
  <li><strong><code>receive()</code>, <code>fallback()</code></strong>: xử lý ETH gửi trực tiếp hoặc lời gọi không khớp hàm nào.</li>
</ul>

<h2>Sự kiện</h2>
<p>Sự kiện ghi log rẻ hơn nhiều so với storage. Hợp đồng không đọc được log, nhưng ứng dụng bên ngoài lắng nghe hoặc truy vấn chúng. Tham số <code>indexed</code> (tối đa 3) cho phép lọc nhanh.</p>

<h2>Ví dụ đầy đủ</h2>
<pre><code>// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Piggybank {
    address public immutable owner;
    mapping(address => uint256) public deposits;

    event Deposited(address indexed from, uint256 amount);
    error NotOwner();

    constructor() {
        owner = msg.sender;          // chạy một lần khi triển khai
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    function deposit() external payable {
        deposits[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    function total() external view returns (uint256) {
        return address(this).balance;
    }

    function withdrawAll() external onlyOwner {
        (bool ok, ) = owner.call{value: address(this).balance}("");
        require(ok, "transfer failed");
    }
}</code></pre>
<div class="callout warn"><b>Đừng dùng tx.origin để xác thực</b><p>Nếu người dùng bị lừa gọi một hợp đồng độc hại, hợp đồng đó có thể gọi tiếp hợp đồng của bạn với tx.origin vẫn là người dùng. Luôn dùng msg.sender.</p></div>`,
      keys: [
        "Dữ liệu: storage (vĩnh viễn), memory (tạm), calldata (chỉ đọc).",
        "Visibility: public, external, internal, private; view/pure không sửa trạng thái; payable nhận ETH.",
        "Sự kiện rẻ, cho ứng dụng ngoài theo dõi; tối đa 3 tham số indexed.",
        "Dùng msg.sender, không dùng tx.origin để xác thực."
      ],
      quiz: [
        { q: "Hàm có từ khóa view:", o: ["Có thể sửa storage", "Chỉ đọc trạng thái, không sửa", "Nhận ETH", "Chỉ gọi được nội bộ"], a: 1, e: "Gọi view từ bên ngoài qua eth_call không tốn gas." },
        { q: "Hợp đồng có đọc được các sự kiện (log) đã phát không?", o: ["Có", "Không, log dành cho bên ngoài chuỗi", "Chỉ trong constructor", "Chỉ với indexed"], a: 1, e: "Log nằm trong receipt, không nằm trong trạng thái." },
        { q: "Vì sao không nên dùng tx.origin để kiểm tra quyền?", o: ["Tốn gas", "Hợp đồng độc hại trung gian có thể lợi dụng vì tx.origin vẫn là người dùng", "Đã bị xóa khỏi Solidity", "Chỉ có trên testnet"], a: 1, e: "Đây là kiểu tấn công phishing qua hợp đồng trung gian." },
        { q: "constructor chạy khi nào?", o: ["Mỗi lần gọi hợp đồng", "Một lần duy nhất khi triển khai", "Mỗi khối", "Khi hợp đồng nhận ETH"], a: 1, e: "Mã constructor nằm trong init code, không lưu lại trong runtime code." }
      ]
    },
    {
      id: "sc-lifecycle",
      title: "Biên dịch, kiểm thử, triển khai và xác minh",
      min: 9,
      src: ["/developers/docs/smart-contracts/compiling/", "/developers/docs/smart-contracts/testing/", "/developers/docs/smart-contracts/deploying/", "/developers/docs/smart-contracts/verifying/", "/developers/docs/smart-contracts/interacting/", "/developers/docs/smart-contracts/naming/"],
      tldr: "Biên dịch tạo ra bytecode và ABI. Kiểm thử bằng unit test, fuzz, invariant trước khi triển khai lên testnet rồi mainnet. Sau đó xác minh mã nguồn trên explorer để người dùng kiểm tra, và có thể đặt tên ENS cho hợp đồng.",
      body: `
<h2>Biên dịch</h2>
<p>Trình biên dịch (solc, vyper) tạo ra:</p>
<ul>
  <li><strong>Bytecode:</strong> init code (chạy một lần khi triển khai) và runtime code (lưu trên chuỗi).</li>
  <li><strong>ABI</strong> (Application Binary Interface): mô tả JSON các hàm, sự kiện, lỗi; frontend dùng để mã hóa lời gọi.</li>
</ul>
<pre><code>[{"type":"function","name":"increment","inputs":[],"outputs":[],"stateMutability":"nonpayable"}]</code></pre>

<h2>Kiểm thử</h2>
<div class="table-wrap"><table>
<tr><th>Kỹ thuật</th><th>Mô tả</th></tr>
<tr><td>Unit test</td><td>Kiểm tra từng hàm với đầu vào cụ thể.</td></tr>
<tr><td>Integration test</td><td>Kiểm tra nhiều hợp đồng tương tác, thường trên fork mainnet.</td></tr>
<tr><td>Fuzzing (property-based)</td><td>Sinh đầu vào ngẫu nhiên để tìm trường hợp vi phạm thuộc tính.</td></tr>
<tr><td>Invariant test</td><td>Gọi chuỗi hàm ngẫu nhiên, kiểm tra bất biến (ví dụ tổng số dư = totalSupply).</td></tr>
<tr><td>Phân tích tĩnh</td><td>Slither, Aderyn phát hiện mẫu lỗi phổ biến.</td></tr>
<tr><td>Formal verification</td><td>Chứng minh toán học rằng mã thỏa đặc tả (Certora, Halmos, SMTChecker).</td></tr>
<tr><td>Kiểm toán và bug bounty</td><td>Chuyên gia độc lập rà soát; thưởng cho người tìm lỗi.</td></tr>
</table></div>
<pre><code>// Foundry test
function testFuzz_Deposit(uint96 amount) public {
    vm.deal(address(this), amount);
    bank.deposit{value: amount}();
    assertEq(bank.deposits(address(this)), amount);
}</code></pre>

<h2>Triển khai</h2>
<ul>
  <li>Triển khai là một giao dịch có <code>to</code> rỗng, <code>data</code> là init code; tốn gas tỷ lệ với kích thước mã.</li>
  <li>Giới hạn kích thước runtime code ~24 KB (EIP-170), dự kiến tăng lên ~64 KB trong Glamsterdam.</li>
  <li>Công cụ: <code>forge script</code>, Hardhat Ignition, Remix.</li>
  <li>Dùng CREATE2 hoặc factory xác định để có cùng địa chỉ trên nhiều chuỗi.</li>
</ul>

<h2>Xác minh mã nguồn</h2>
<p>Bytecode khó đọc. <strong>Xác minh</strong> là biên dịch lại mã nguồn với cùng phiên bản và cài đặt, chứng minh nó khớp với bytecode trên chuỗi. Sourcify, Etherscan, Blockscout hỗ trợ việc này. Sourcify còn kiểm tra hash metadata để xác minh "khớp hoàn toàn" (full match).</p>

<h2>Tương tác và đặt tên</h2>
<ul>
  <li>Đọc: <code>eth_call</code> (miễn phí). Ghi: gửi giao dịch đã ký.</li>
  <li>Thư viện dùng ABI để mã hóa tham số và giải mã kết quả.</li>
  <li><strong>ENS</strong> có thể gắn tên cho hợp đồng (ví dụ <code>vault.myapp.eth</code>), có cả reverse record để explorer hiển thị tên.</li>
</ul>`,
      keys: [
        "Biên dịch ra bytecode (init + runtime) và ABI.",
        "Kiểm thử nhiều lớp: unit, integration, fuzz, invariant, phân tích tĩnh, formal verification, kiểm toán.",
        "Giới hạn kích thước mã ~24 KB (EIP-170).",
        "Xác minh mã trên Sourcify/Etherscan để người dùng tin tưởng; ENS đặt tên hợp đồng."
      ],
      quiz: [
        { q: "ABI dùng để làm gì?", o: ["Lưu storage", "Mô tả giao diện hàm/sự kiện để mã hóa và giải mã lời gọi", "Ký giao dịch", "Tính gas"], a: 1, e: "Frontend và thư viện dựa vào ABI." },
        { q: "Invariant testing kiểm tra điều gì?", o: ["Một đầu vào cụ thể", "Một thuộc tính luôn đúng sau mọi chuỗi thao tác ngẫu nhiên", "Kích thước bytecode", "Tốc độ mạng"], a: 1, e: "Ví dụ: tổng số dư luôn bằng totalSupply." },
        { q: "\"Xác minh hợp đồng\" trên explorer nghĩa là:", o: ["Kiểm toán bảo mật", "Chứng minh mã nguồn công bố biên dịch ra đúng bytecode trên chuỗi", "Đăng ký với chính phủ", "Mã hóa hợp đồng"], a: 1, e: "Xác minh không có nghĩa hợp đồng an toàn." },
        { q: "Giới hạn kích thước runtime code hiện tại theo EIP-170 là khoảng:", o: ["1 KB", "24 KB", "1 MB", "Không giới hạn"], a: 1, e: "24.576 byte." }
      ]
    },
    {
      id: "sc-upgrade-compose",
      title: "Nâng cấp, thư viện và khả năng kết hợp",
      min: 8,
      src: ["/developers/docs/smart-contracts/upgrading/", "/developers/docs/smart-contracts/libraries/", "/developers/docs/smart-contracts/composability/"],
      tldr: "Hợp đồng mặc định bất biến. Muốn \"nâng cấp\", người ta dùng mẫu proxy: một hợp đồng giữ dữ liệu và chuyển lời gọi tới hợp đồng logic có thể thay thế. Thư viện như OpenZeppelin giúp không phải viết lại từ đầu; tính kết hợp cho phép dùng lại cả hệ sinh thái.",
      body: `
<h2>Các cách thay đổi hành vi</h2>
<ul>
  <li><strong>Di chuyển hợp đồng (migration):</strong> triển khai bản mới, chuyển dữ liệu và yêu cầu người dùng dùng địa chỉ mới.</li>
  <li><strong>Tách dữ liệu và logic:</strong> hợp đồng storage riêng, hợp đồng logic có thể đổi.</li>
  <li><strong>Proxy:</strong> phổ biến nhất (xem dưới).</li>
  <li><strong>Strategy pattern:</strong> hợp đồng chính gọi tới module có thể thay.</li>
  <li><strong>Diamond (EIP-2535):</strong> một proxy chuyển tiếp tới nhiều "facet".</li>
</ul>

<h2>Proxy hoạt động thế nào?</h2>
<div class="flow arrows">
  <div><b>Người dùng</b>Gọi địa chỉ proxy (không đổi)</div>
  <div><b>Proxy</b>Giữ storage, <code>fallback</code> dùng DELEGATECALL</div>
  <div><b>Implementation</b>Chứa logic, có thể thay bằng bản mới</div>
</div>
<div class="table-wrap"><table>
<tr><th>Mẫu</th><th>Hàm nâng cấp nằm ở</th></tr>
<tr><td>Transparent proxy</td><td>Proxy; admin không gọi được logic để tránh xung đột hàm</td></tr>
<tr><td>UUPS (ERC-1822)</td><td>Implementation; proxy nhẹ hơn, nhưng quên hàm nâng cấp ở bản mới là khóa vĩnh viễn</td></tr>
<tr><td>Beacon proxy</td><td>Một beacon cho nhiều proxy cùng trỏ tới</td></tr>
</table></div>
<p>Vị trí lưu địa chỉ implementation theo chuẩn <strong>ERC-1967</strong> để tránh trùng storage.</p>
<div class="callout warn"><b>Rủi ro của nâng cấp</b><p>Ai nắm quyền nâng cấp có thể thay đổi logic tùy ý. Nên dùng multisig, timelock, hoặc quản trị DAO. Khi viết bản mới, không được đổi thứ tự biến storage (storage collision). Implementation dùng initializer thay cho constructor.</p></div>

<h2>Thư viện</h2>
<ul>
  <li><strong>OpenZeppelin Contracts:</strong> ERC-20, ERC-721, Ownable, AccessControl, ReentrancyGuard, proxy… đã được kiểm toán nhiều lần.</li>
  <li><strong>Solady, Solmate:</strong> tối ưu gas.</li>
  <li><strong>Từ khóa <code>library</code></strong> trong Solidity: hàm dùng lại, ví dụ SafeERC20, Math.</li>
</ul>
<p>Lời khuyên: đừng tự viết lại chuẩn token; dùng thư viện đã kiểm toán để tránh lỗi.</p>

<h2>Composability</h2>
<p>Ba tính chất giúp hợp đồng kết hợp: <strong>mô-đun</strong> (mỗi hợp đồng làm một việc), <strong>tự trị</strong> (chạy không cần ai), <strong>khám phá được</strong> (mã và giao diện công khai). Ví dụ: một DEX aggregator gọi nhiều sàn để tìm giá tốt nhất; một ví gom approve + swap + gửi vào vault trong một giao dịch.</p>`,
      keys: [
        "Proxy giữ storage và DELEGATECALL tới implementation có thể thay.",
        "Mẫu: transparent, UUPS, beacon, diamond; ERC-1967 chuẩn hóa slot lưu địa chỉ.",
        "Quyền nâng cấp nên qua multisig/timelock; không đổi thứ tự storage.",
        "Dùng thư viện đã kiểm toán như OpenZeppelin; composability nhờ mô-đun, tự trị, khám phá được."
      ],
      quiz: [
        { q: "Proxy nâng cấp dựa trên opcode nào?", o: ["CALL", "DELEGATECALL", "CREATE", "SELFDESTRUCT"], a: 1, e: "DELEGATECALL chạy logic của implementation trên storage của proxy." },
        { q: "Rủi ro khi nâng cấp implementation là:", o: ["Đổi thứ tự biến storage gây xung đột dữ liệu", "Proxy đổi địa chỉ", "Mất ABI", "Không tốn gas"], a: 0, e: "Biến mới phải được thêm vào cuối layout." },
        { q: "Trong UUPS, hàm nâng cấp nằm ở:", o: ["Proxy", "Implementation", "Beacon", "Ví admin"], a: 1, e: "Nếu bản mới quên hàm này, hợp đồng không nâng cấp được nữa." }
      ]
    },
    {
      id: "sc-security",
      title: "Bảo mật hợp đồng thông minh",
      min: 11,
      src: ["/developers/docs/smart-contracts/security/", "/developers/docs/smart-contracts/formal-verification/"],
      tldr: "Hợp đồng giữ tiền thật trong môi trường mà ai cũng có thể tấn công. Các lỗi kinh điển: reentrancy, kiểm soát truy cập sai, thao túng oracle, front-running, DoS, lỗi chữ ký. Phòng thủ nhiều lớp: thiết kế đơn giản, checks-effects-interactions, kiểm thử, kiểm toán, giám sát và kế hoạch ứng phó.",
      body: `
<h2>Reentrancy</h2>
<p>Hợp đồng gửi ETH (hoặc gọi ra ngoài) trước khi cập nhật trạng thái; kẻ tấn công dùng <code>receive()</code> để gọi lại hàm rút nhiều lần.</p>
<pre><code>// LỖI
function withdraw() external {
    uint256 bal = balances[msg.sender];
    (bool ok, ) = msg.sender.call{value: bal}("");   // gọi ra ngoài trước
    require(ok);
    balances[msg.sender] = 0;                          // cập nhật sau
}

// SỬA: checks-effects-interactions
function withdraw() external nonReentrant {
    uint256 bal = balances[msg.sender];
    require(bal > 0);                                  // checks
    balances[msg.sender] = 0;                          // effects
    (bool ok, ) = msg.sender.call{value: bal}("");     // interactions
    require(ok);
}</code></pre>

<h2>Các lỗ hổng phổ biến khác</h2>
<div class="table-wrap"><table>
<tr><th>Lỗi</th><th>Mô tả</th><th>Phòng tránh</th></tr>
<tr><td>Kiểm soát truy cập</td><td>Quên modifier, hàm initialize ai cũng gọi được.</td><td>Ownable/AccessControl, test quyền, khóa initializer.</td></tr>
<tr><td>Thao túng oracle</td><td>Dùng giá spot của một DEX; kẻ tấn công dùng flash loan đẩy giá.</td><td>Oracle phi tập trung, TWAP, nhiều nguồn.</td></tr>
<tr><td>Front-running / MEV</td><td>Kẻ khác thấy giao dịch trong mempool và chen lên trước.</td><td>Commit-reveal, slippage tối đa, private mempool.</td></tr>
<tr><td>Tràn số</td><td>Trước 0.8, phép toán quay vòng.</td><td>Solidity ≥0.8; cẩn thận với <code>unchecked</code>.</td></tr>
<tr><td>DoS</td><td>Vòng lặp không giới hạn, phụ thuộc lời gọi ngoài thành công.</td><td>Pull thay vì push payment, giới hạn vòng lặp.</td></tr>
<tr><td>Chữ ký</td><td>Thiếu nonce/chainId (replay), chữ ký biến dạng.</td><td>EIP-712, nonce, ECDSA từ OpenZeppelin.</td></tr>
<tr><td>DELEGATECALL không an toàn</td><td>Gọi delegate tới địa chỉ do người dùng cung cấp.</td><td>Chỉ delegate tới mã tin cậy.</td></tr>
<tr><td>Ngẫu nhiên giả</td><td>Dùng <code>block.timestamp</code>, <code>prevrandao</code> làm nguồn ngẫu nhiên.</td><td>VRF (oracle ngẫu nhiên có bằng chứng).</td></tr>
</table></div>

<h2>Quy trình bảo mật</h2>
<ul>
  <li><strong>Thiết kế:</strong> đơn giản nhất có thể, dùng thư viện chuẩn, đặc tả rõ bất biến.</li>
  <li><strong>Phát triển:</strong> kiểm thử phủ rộng, fuzz, invariant, phân tích tĩnh (Slither, Aderyn).</li>
  <li><strong>Trước triển khai:</strong> kiểm toán độc lập, cuộc thi kiểm toán (Code4rena, Sherlock, Cantina).</li>
  <li><strong>Sau triển khai:</strong> bug bounty (Immunefi), giám sát on-chain, cơ chế tạm dừng khẩn cấp, kế hoạch ứng phó sự cố.</li>
</ul>

<h2>Formal verification</h2>
<p>Thay vì thử nhiều trường hợp, xác minh hình thức chứng minh rằng mã thỏa một <strong>đặc tả</strong> cho <em>mọi</em> đầu vào. Các mức đặc tả: bất biến cấp cao ("không ai rút quá số dư"), thuộc tính hàm (pre/post-condition). Công cụ: Certora Prover, Halmos (symbolic testing với Foundry), Kontrol (K framework), SMTChecker trong solc. Hạn chế: đặc tả sai thì chứng minh vô nghĩa, và tốn công.</p>`,
      keys: [
        "Reentrancy: luôn checks-effects-interactions và ReentrancyGuard.",
        "Lỗi phổ biến: kiểm soát truy cập, oracle, front-running, DoS, chữ ký, delegatecall, ngẫu nhiên giả.",
        "Phòng thủ nhiều lớp: thiết kế đơn giản, test, phân tích tĩnh, kiểm toán, bug bounty, giám sát.",
        "Formal verification chứng minh mã thỏa đặc tả cho mọi đầu vào."
      ],
      quiz: [
        { q: "Mẫu checks-effects-interactions yêu cầu:", o: ["Gọi ra ngoài trước, cập nhật trạng thái sau", "Kiểm tra điều kiện, cập nhật trạng thái, rồi mới gọi ra ngoài", "Không gọi hợp đồng khác", "Chỉ dùng view"], a: 1, e: "Cập nhật trạng thái trước khi gọi ra ngoài để chặn reentrancy." },
        { q: "Dùng giá spot của một pool DEX làm oracle có rủi ro gì?", o: ["Không có rủi ro", "Kẻ tấn công dùng flash loan đẩy giá tạm thời", "Tốn gas nhiều", "Giá luôn bằng 0"], a: 1, e: "Nên dùng oracle phi tập trung hoặc TWAP." },
        { q: "Vì sao block.timestamp không phù hợp làm nguồn ngẫu nhiên?", o: ["Nó luôn bằng 0", "Người đề xuất khối có thể ảnh hưởng hoặc dự đoán được", "Nó bị mã hóa", "Nó không tồn tại"], a: 1, e: "Dùng VRF để có ngẫu nhiên kiểm chứng được." },
        { q: "EIP-712 giúp gì?", o: ["Ký dữ liệu có cấu trúc, có domain (chainId, hợp đồng) chống replay", "Tăng blob", "Ẩn giao dịch", "Nâng cấp proxy"], a: 0, e: "Ví hiển thị dữ liệu dễ đọc và chữ ký gắn với miền cụ thể." }
      ]
    },
    {
      id: "dev-tools",
      title: "Framework, mạng phát triển và IDE",
      min: 6,
      src: ["/developers/docs/frameworks/", "/developers/docs/development-networks/", "/developers/docs/ides/", "/developers/tools/"],
      tldr: "Framework như Foundry và Hardhat lo biên dịch, kiểm thử, chạy mạng cục bộ và triển khai. Remix là IDE trên trình duyệt để thử nhanh; VS Code với tiện ích Solidity dùng cho dự án lớn.",
      body: `
<h2>Framework phổ biến</h2>
<div class="table-wrap"><table>
<tr><th>Công cụ</th><th>Ngôn ngữ test</th><th>Điểm mạnh</th></tr>
<tr><td>Foundry (forge, cast, anvil, chisel)</td><td>Solidity</td><td>Rất nhanh, fuzz/invariant tích hợp, cheatcode mạnh.</td></tr>
<tr><td>Hardhat</td><td>TypeScript/JavaScript (và Solidity từ v3)</td><td>Hệ plugin lớn, Ignition để triển khai, debug console.log.</td></tr>
<tr><td>Ape</td><td>Python</td><td>Cho người quen Python.</td></tr>
<tr><td>Scaffold-ETH 2</td><td>-</td><td>Template full-stack: Foundry/Hardhat + Next.js + wagmi.</td></tr>
</table></div>
<pre><code>forge init my-project
forge build
forge test -vvv
anvil                      # mạng cục bộ, chain ID 31337
cast call &lt;addr&gt; "count()(uint256)"</code></pre>

<h2>Mạng phát triển cục bộ</h2>
<ul>
  <li><strong>Anvil</strong> (Foundry), <strong>Hardhat Network</strong>: khối được tạo tức thì, tài khoản có sẵn ETH, fork mainnet, chỉnh thời gian.</li>
  <li><strong>Kurtosis ethereum-package</strong>: dựng một testnet nhiều client đầy đủ để thử nghiệm giao thức.</li>
</ul>

<h2>IDE</h2>
<ul>
  <li><strong>Remix:</strong> chạy trên trình duyệt, không cần cài đặt, có biên dịch, triển khai, debug. Lý tưởng để học.</li>
  <li><strong>VS Code</strong> + tiện ích Solidity (Nomic Foundation), hoặc các trình soạn thảo khác hỗ trợ LSP.</li>
</ul>
<p>Trang "Builder tools" của ethereum.org liệt kê công cụ theo danh mục: framework, bảo mật, dữ liệu, hạ tầng, giáo dục.</p>`,
      keys: [
        "Foundry: nhanh, test bằng Solidity; Hardhat: plugin lớn, test bằng TS/JS.",
        "Anvil/Hardhat Network: mạng cục bộ, fork mainnet.",
        "Remix để học và thử nhanh; VS Code cho dự án lớn."
      ],
      quiz: [
        { q: "Trong Foundry, công cụ nào chạy mạng cục bộ?", o: ["forge", "cast", "anvil", "chisel"], a: 2, e: "forge build/test, cast gọi RPC, chisel là REPL Solidity." },
        { q: "IDE nào chạy trên trình duyệt, không cần cài đặt?", o: ["Remix", "IntelliJ", "Xcode", "Vim"], a: 0, e: "Remix IDE rất phù hợp cho người mới." }
      ]
    },
    {
      id: "apis",
      title: "API, JSON-RPC và xác thực",
      min: 9,
      src: ["/developers/docs/apis/javascript/", "/developers/docs/apis/backend/", "/developers/docs/apis/json-rpc/", "/developers/docs/ethereum-stack/authentication/", "/developers/docs/programming-languages/"],
      tldr: "Mọi client đều mở giao diện JSON-RPC chuẩn (eth_getBalance, eth_call, eth_sendRawTransaction…). Thư viện như viem, ethers.js, web3.py bọc lại cho dễ dùng. Đăng nhập bằng ví dùng chuẩn Sign-In with Ethereum.",
      body: `
<h2>JSON-RPC</h2>
<pre><code>curl -X POST -H "Content-Type: application/json" \\
  --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' \\
  http://localhost:8545
# {"jsonrpc":"2.0","id":1,"result":"0x14a3c2f"}</code></pre>
<div class="table-wrap"><table>
<tr><th>Phương thức</th><th>Công dụng</th></tr>
<tr><td><code>eth_blockNumber</code></td><td>Số khối mới nhất</td></tr>
<tr><td><code>eth_getBalance</code></td><td>Số dư của địa chỉ</td></tr>
<tr><td><code>eth_call</code></td><td>Gọi hàm chỉ đọc, không tạo giao dịch</td></tr>
<tr><td><code>eth_estimateGas</code></td><td>Ước lượng gas</td></tr>
<tr><td><code>eth_sendRawTransaction</code></td><td>Gửi giao dịch đã ký</td></tr>
<tr><td><code>eth_getTransactionReceipt</code></td><td>Kết quả giao dịch</td></tr>
<tr><td><code>eth_getLogs</code></td><td>Lọc sự kiện theo địa chỉ, topic, khoảng khối</td></tr>
<tr><td><code>eth_feeHistory</code></td><td>Lịch sử base fee và tip</td></tr>
<tr><td><code>eth_config</code></td><td>Cấu hình fork hiện tại (từ Fusaka)</td></tr>
</table></div>
<p>Tham số khối mặc định: <code>"latest"</code>, <code>"safe"</code>, <code>"finalized"</code>, <code>"pending"</code>, hoặc số khối hex. Số trong JSON-RPC được mã hóa hex có tiền tố 0x.</p>

<h2>Thư viện JavaScript</h2>
<pre><code>import { createPublicClient, http, formatEther } from "viem";
import { mainnet } from "viem/chains";

const client = createPublicClient({ chain: mainnet, transport: http() });
const wei = await client.getBalance({ address: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" });
console.log(formatEther(wei), "ETH");</code></pre>
<ul>
  <li><strong>viem</strong> (+ wagmi cho React): kiểu chặt chẽ TypeScript, nhẹ.</li>
  <li><strong>ethers.js</strong>: lâu đời, phổ biến.</li>
  <li><strong>web3.js</strong>: đã ngừng phát triển từ 2025, nên chuyển sang thư viện khác.</li>
</ul>

<h2>Ngôn ngữ backend</h2>
<div class="table-wrap"><table>
<tr><th>Ngôn ngữ</th><th>Thư viện</th></tr>
<tr><td>Python</td><td>web3.py, Ape</td></tr>
<tr><td>Rust</td><td>alloy, revm, Reth SDK</td></tr>
<tr><td>Go</td><td>go-ethereum (ethclient)</td></tr>
<tr><td>Java/Kotlin</td><td>web3j</td></tr>
<tr><td>.NET</td><td>Nethereum</td></tr>
<tr><td>Dart, Elixir, Ruby, Delphi</td><td>web3dart, ethereumex, eth.rb, Delphereum</td></tr>
</table></div>

<h2>Xác thực: Sign-In with Ethereum</h2>
<p>SIWE (EIP-4361) thay thế email/mật khẩu: máy chủ tạo một <strong>nonce</strong>, ví ký một thông điệp chuẩn chứa tên miền, địa chỉ, nonce, thời hạn; máy chủ kiểm tra chữ ký rồi tạo phiên đăng nhập.</p>
<pre><code>example.com wants you to sign in with your Ethereum account:
0xAbC…123

URI: https://example.com
Version: 1
Chain ID: 1
Nonce: 8f2k3l1x
Issued At: 2026-10-19T08:00:00Z</code></pre>
<p>Với ví hợp đồng, chữ ký được kiểm tra qua <strong>ERC-1271</strong> (<code>isValidSignature</code>) thay vì ecrecover.</p>`,
      keys: [
        "JSON-RPC: eth_call (đọc), eth_sendRawTransaction (ghi), eth_getLogs (sự kiện)…",
        "Tag khối: latest, safe, finalized, pending.",
        "JS: viem/wagmi, ethers.js; web3.js đã ngừng. Backend: web3.py, alloy, go-ethereum, web3j, Nethereum.",
        "SIWE (EIP-4361) để đăng nhập; ERC-1271 cho chữ ký ví hợp đồng."
      ],
      quiz: [
        { q: "Phương thức JSON-RPC nào gọi hàm view mà không tạo giao dịch?", o: ["eth_sendRawTransaction", "eth_call", "eth_getLogs", "eth_mining"], a: 1, e: "eth_call mô phỏng trên node, không tốn gas thật." },
        { q: "Tag khối \"finalized\" trả về:", o: ["Khối đang chờ", "Khối mới nhất", "Khối mới nhất đã được finalized", "Khối genesis"], a: 2, e: "Dùng khi cần chắc chắn khối không bị đảo ngược." },
        { q: "Chữ ký của ví hợp đồng (Safe) được kiểm tra bằng:", o: ["ecrecover", "ERC-1271 isValidSignature", "SIWE", "RLP"], a: 1, e: "Hợp đồng tự định nghĩa logic xác minh chữ ký." }
      ]
    },
    {
      id: "data-storage",
      title: "Dữ liệu, phân tích và lưu trữ",
      min: 7,
      src: ["/developers/docs/data-and-analytics/", "/developers/docs/data-and-analytics/block-explorers/", "/developers/docs/storage/"],
      tldr: "Đọc dữ liệu lịch sử trực tiếp từ node rất chậm, nên người ta dùng block explorer, indexer (The Graph, Ponder) và nền tảng phân tích (Dune). Lưu file lớn trên chuỗi rất đắt, nên dùng mạng lưu trữ phi tập trung như IPFS, Arweave, Filecoin, Swarm.",
      body: `
<h2>Block explorer</h2>
<p>Etherscan, Blockscout, Beaconcha.in cho phép tra cứu giao dịch, khối, địa chỉ, hợp đồng đã xác minh, validator. Đa số có API cho lập trình viên.</p>

<h2>Indexer và phân tích</h2>
<div class="table-wrap"><table>
<tr><th>Công cụ</th><th>Dùng cho</th></tr>
<tr><td>The Graph</td><td>Định nghĩa "subgraph": lắng nghe sự kiện, lưu vào cơ sở dữ liệu, truy vấn bằng GraphQL.</td></tr>
<tr><td>Ponder, Envio, Subsquid</td><td>Indexer tự host hoặc dịch vụ, viết bằng TypeScript.</td></tr>
<tr><td>Dune, Allium, Flipside</td><td>Truy vấn SQL trên dữ liệu blockchain đã giải mã, làm dashboard.</td></tr>
<tr><td>Google BigQuery</td><td>Bộ dữ liệu công khai của Ethereum.</td></tr>
</table></div>

<h2>Lưu trữ phi tập trung</h2>
<div class="table-wrap"><table>
<tr><th>Hệ thống</th><th>Mô hình duy trì</th><th>Đặc điểm</th></tr>
<tr><td>IPFS</td><td>Pinning (ai đó phải giữ)</td><td>Địa chỉ theo nội dung (CID); file biến mất nếu không ai pin.</td></tr>
<tr><td>Filecoin</td><td>Hợp đồng trả phí theo thời hạn</td><td>Thị trường lưu trữ có bằng chứng.</td></tr>
<tr><td>Arweave</td><td>Trả một lần, lưu vĩnh viễn</td><td>Phù hợp metadata NFT, lưu trữ lâu dài.</td></tr>
<tr><td>Swarm</td><td>Trả phí theo hợp đồng</td><td>Gắn liền hệ sinh thái Ethereum.</td></tr>
</table></div>
<p>Khi chọn, cân nhắc: độ bền (persistence), mức phi tập trung, khả năng chống kiểm duyệt, tính đồng thuận về dữ liệu.</p>
<div class="callout info"><b>Lưu gì trên chuỗi?</b><p>Chỉ lưu những gì hợp đồng cần để ra quyết định (số dư, quyền sở hữu, hash). Dữ liệu lớn để ngoài chuỗi, lưu hash hoặc CID trên chuỗi để kiểm chứng tính toàn vẹn.</p></div>`,
      keys: [
        "Block explorer: Etherscan, Blockscout, beaconcha.in.",
        "Indexer: The Graph (GraphQL), Ponder; phân tích SQL: Dune.",
        "Lưu trữ: IPFS (cần pin), Filecoin, Arweave (vĩnh viễn), Swarm.",
        "Chỉ lưu dữ liệu tối thiểu trên chuỗi; dùng hash/CID cho dữ liệu lớn."
      ],
      quiz: [
        { q: "File trên IPFS có thể biến mất khi:", o: ["Ethereum nâng cấp", "Không còn node nào pin file đó", "Hết 18 ngày", "Giá ETH giảm"], a: 1, e: "IPFS cần có người lưu (pin) nội dung." },
        { q: "The Graph cho phép truy vấn dữ liệu bằng:", o: ["SQL", "GraphQL", "JSON-RPC", "SSZ"], a: 1, e: "Subgraph lưu dữ liệu từ sự kiện và phục vụ qua GraphQL." }
      ]
    }
  ]
});
