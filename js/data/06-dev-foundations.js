window.COURSE = window.COURSE || [];
window.COURSE.push({
  id: "dev-foundations",
  no: 6,
  group: "Dành cho nhà phát triển",
  level: "Trung bình → Nâng cao",
  title: "Kiến thức nền tảng cho nhà phát triển",
  desc: "Theo mục Foundational topics của developer docs: máy trạng thái Ethereum, tài khoản, giao dịch, khối, EVM và opcode, gas, node và client, mạng, cơ chế đồng thuận và proof-of-stake chi tiết.",
  lessons: [
    {
      id: "dev-intro",
      title: "Ethereum dưới góc nhìn kỹ thuật",
      min: 8,
      src: ["/developers/docs/intro-to-ethereum/", "/developers/docs/dapps/", "/developers/docs/web2-vs-web3/"],
      tldr: "Về kỹ thuật, Ethereum là một máy trạng thái được nhân bản: mọi node cùng giữ một trạng thái và cùng áp dụng các giao dịch theo đúng thứ tự trong khối. EVM là \"CPU\" chung để chạy hợp đồng; đồng thuận PoS quyết định thứ tự khối.",
      body: `
<h2>Các khái niệm nền</h2>
<div class="table-wrap"><table>
<tr><th>Khái niệm</th><th>Định nghĩa ngắn</th></tr>
<tr><td>Blockchain</td><td>Cơ sở dữ liệu công khai được cập nhật và chia sẻ giữa nhiều máy tính; dữ liệu nhóm theo khối, mỗi khối tham chiếu khối trước bằng hash.</td></tr>
<tr><td>Trạng thái (state)</td><td>Ánh xạ từ mọi địa chỉ tới dữ liệu tài khoản (số dư, nonce, mã, storage).</td></tr>
<tr><td>Giao dịch</td><td>Yêu cầu thay đổi trạng thái, được ký bằng khóa bí mật.</td></tr>
<tr><td>EVM</td><td>Máy ảo chạy mã hợp đồng, xác định (deterministic) trên mọi node.</td></tr>
<tr><td>Node</td><td>Máy chạy phần mềm client, giữ bản sao trạng thái và xác minh khối.</td></tr>
<tr><td>Đồng thuận</td><td>Cơ chế để các node thống nhất khối nào là hợp lệ và chuỗi nào là chuẩn.</td></tr>
<tr><td>Ether</td><td>Tài sản gốc dùng trả gas và stake.</td></tr>
</table></div>

<h2>Ethereum là máy trạng thái</h2>
<pre><code>Trạng thái(N) + Giao dịch trong khối(N+1)  →  Trạng thái(N+1)
       Y(S, T) = S'   // hàm chuyển trạng thái của Yellow Paper</code></pre>
<p>Vì EVM xác định, mọi node trung thực áp dụng cùng giao dịch lên cùng trạng thái sẽ ra cùng kết quả. Đồng thuận chỉ cần thống nhất <em>thứ tự</em> giao dịch.</p>

<h2>Kiến trúc một dapp</h2>
<div class="stack">
  <div><b>Frontend</b>Web/mobile (React, Next.js…) hiển thị dữ liệu, tạo giao dịch</div>
  <div><b>Ví</b>Ký giao dịch và tin nhắn (EIP-1193 provider, EIP-6963 phát hiện ví)</div>
  <div><b>Thư viện</b>viem, ethers.js, web3.py… gọi JSON-RPC</div>
  <div><b>Node / RPC</b>Node riêng hoặc nhà cung cấp (Infura, Alchemy…)</div>
  <div><b>Hợp đồng</b>Logic và dữ liệu cốt lõi trên chuỗi</div>
  <div><b>Hạ tầng phụ</b>Indexer (The Graph), lưu trữ (IPFS), oracle</div>
</div>

<h2>Web2 và Web3 khi phát triển</h2>
<ul>
  <li><strong>Đọc dữ liệu miễn phí, ghi dữ liệu tốn gas.</strong> Thiết kế để tối thiểu số lần ghi.</li>
  <li><strong>Mã không sửa được sau khi triển khai</strong> (trừ khi dùng mẫu proxy).</li>
  <li><strong>Mọi thứ công khai:</strong> không lưu bí mật trong hợp đồng, kể cả biến <code>private</code>.</li>
  <li><strong>Môi trường đối kháng:</strong> giả định mọi người dùng có thể là kẻ tấn công; tiền thật đang nằm trong hợp đồng.</li>
  <li><strong>Không có cron job:</strong> hợp đồng chỉ chạy khi có giao dịch gọi đến; tự động hóa cần bot hoặc dịch vụ keeper.</li>
</ul>`,
      keys: [
        "Ethereum là máy trạng thái được nhân bản: S + T → S'.",
        "EVM xác định; đồng thuận chỉ cần thống nhất thứ tự giao dịch.",
        "Dapp = frontend + ví + thư viện + RPC + hợp đồng + hạ tầng phụ.",
        "Ghi tốn gas, mã khó sửa, mọi dữ liệu công khai, môi trường đối kháng."
      ],
      quiz: [
        { q: "Vì sao mọi node trung thực ra cùng một trạng thái?", o: ["Vì Ethereum Foundation đồng bộ", "Vì EVM xác định và các node áp dụng giao dịch theo cùng thứ tự", "Vì dùng chung một máy chủ", "Vì giao dịch được mã hóa"], a: 1, e: "Determinism + thứ tự thống nhất = cùng kết quả." },
        { q: "Biến khai báo private trong Solidity có bí mật không?", o: ["Có, chỉ chủ hợp đồng đọc được", "Không, mọi dữ liệu trên chuỗi đều đọc được", "Chỉ bí mật trên L2", "Có nếu mã hóa bằng keccak"], a: 1, e: "private chỉ chặn hợp đồng khác truy cập qua mã, không ẩn dữ liệu." },
        { q: "Hợp đồng thông minh có tự chạy theo lịch được không?", o: ["Có, giống cron", "Không, chỉ chạy khi có giao dịch hoặc lời gọi kích hoạt", "Có, mỗi 12 giây", "Chỉ trên testnet"], a: 1, e: "Cần bot/keeper gửi giao dịch để kích hoạt." }
      ]
    },
    {
      id: "accounts",
      title: "Tài khoản",
      min: 8,
      src: ["/developers/docs/accounts/"],
      tldr: "Ethereum có hai loại tài khoản: tài khoản do người dùng sở hữu (EOA) được điều khiển bằng khóa bí mật, và tài khoản hợp đồng được điều khiển bằng mã. Mỗi tài khoản có 4 trường: nonce, balance, codeHash, storageRoot.",
      body: `
<h2>Hai loại tài khoản</h2>
<div class="table-wrap"><table>
<tr><th></th><th>EOA (externally owned account)</th><th>Tài khoản hợp đồng</th></tr>
<tr><td>Điều khiển bởi</td><td>Khóa bí mật</td><td>Mã hợp đồng</td></tr>
<tr><td>Tạo ra</td><td>Miễn phí, chỉ cần sinh khóa</td><td>Tốn gas khi triển khai</td></tr>
<tr><td>Khởi tạo giao dịch</td><td>Có</td><td>Không (chỉ phản hồi khi được gọi)</td></tr>
<tr><td>Có mã</td><td>Không (trừ khi ủy quyền qua EIP-7702)</td><td>Có</td></tr>
</table></div>

<h2>Bốn trường của tài khoản</h2>
<ul>
  <li><code>nonce</code>: với EOA là số giao dịch đã gửi; với hợp đồng là số hợp đồng đã tạo. Chống phát lại giao dịch.</li>
  <li><code>balance</code>: số wei tài khoản đang có.</li>
  <li><code>codeHash</code>: hash của mã EVM. EOA có hash của chuỗi rỗng.</li>
  <li><code>storageRoot</code>: gốc của cây Merkle Patricia chứa storage của tài khoản (rỗng với EOA).</li>
</ul>

<h2>Khóa và địa chỉ</h2>
<div class="flow arrows">
  <div><b>Khóa bí mật</b>Số ngẫu nhiên 256 bit (64 ký tự hex)</div>
  <div><b>Khóa công khai</b>Nhân điểm trên đường cong secp256k1 (ECDSA)</div>
  <div><b>Keccak-256</b>Hash khóa công khai</div>
  <div><b>Địa chỉ</b>20 byte cuối, thêm 0x</div>
</div>
<pre><code>private key: 0xf4a2b9…(32 byte)
address:     0x5e97870f263700f46aa00d967821199b9bc5a120</code></pre>
<p>Địa chỉ thường được viết với chữ hoa/thường xen kẽ theo <strong>EIP-55 checksum</strong> để phát hiện lỗi gõ.</p>

<h2>Địa chỉ hợp đồng</h2>
<ul>
  <li><strong>CREATE:</strong> <code>keccak256(rlp([sender, nonce]))</code>, 20 byte cuối. Phụ thuộc nonce của người tạo.</li>
  <li><strong>CREATE2:</strong> <code>keccak256(0xff ++ sender ++ salt ++ keccak256(init_code))</code>. Biết trước địa chỉ trước khi triển khai, cùng địa chỉ trên nhiều chuỗi.</li>
</ul>

<h2>Khóa của validator</h2>
<p>Validator dùng loại khóa khác: <strong>BLS12-381</strong>, cho phép gộp hàng nghìn chữ ký thành một, rất quan trọng khi có hàng trăm nghìn validator bỏ phiếu mỗi epoch.</p>
<div class="callout info"><b>Ví thông minh là tài khoản hợp đồng</b><p>Safe, ví ERC-4337 là tài khoản hợp đồng; người dùng điều khiển chúng gián tiếp. EIP-7702 làm mờ ranh giới: một EOA có thể gắn mã ủy quyền nhưng vẫn giữ khóa gốc.</p></div>`,
      keys: [
        "EOA điều khiển bằng khóa, khởi tạo được giao dịch; hợp đồng điều khiển bằng mã.",
        "Trường tài khoản: nonce, balance, codeHash, storageRoot.",
        "Địa chỉ = 20 byte cuối của keccak256(public key); EIP-55 checksum.",
        "CREATE phụ thuộc nonce; CREATE2 dùng salt để biết trước địa chỉ.",
        "Validator dùng khóa BLS12-381 để gộp chữ ký."
      ],
      quiz: [
        { q: "Trường nào ngăn một giao dịch đã ký bị gửi lại nhiều lần?", o: ["balance", "nonce", "codeHash", "storageRoot"], a: 1, e: "Mỗi giao dịch dùng một nonce, tăng dần." },
        { q: "Địa chỉ EOA được tạo bằng cách nào?", o: ["Chọn ngẫu nhiên 20 byte", "20 byte cuối của keccak256 khóa công khai", "Hash của tên người dùng", "Do validator cấp"], a: 1, e: "Khóa bí mật → khóa công khai (secp256k1) → keccak256 → 20 byte cuối." },
        { q: "Ưu điểm của CREATE2 là:", o: ["Rẻ hơn CREATE", "Biết trước địa chỉ hợp đồng dựa trên salt và init code", "Không cần gas", "Hợp đồng có thể sửa"], a: 1, e: "Địa chỉ không phụ thuộc nonce nên dự đoán được." },
        { q: "Hợp đồng có thể tự khởi tạo một giao dịch không?", o: ["Có", "Không, chỉ EOA (hoặc tài khoản có quyền ký) mới khởi tạo; hợp đồng chỉ chạy khi được gọi", "Có nếu có ETH", "Chỉ trên L2"], a: 1, e: "Hợp đồng có thể gọi hợp đồng khác, nhưng chỉ trong một giao dịch do EOA bắt đầu." }
      ]
    },
    {
      id: "transactions",
      title: "Giao dịch",
      min: 9,
      src: ["/developers/docs/transactions/"],
      tldr: "Giao dịch là chỉ thị đã ký từ một tài khoản, làm thay đổi trạng thái Ethereum. Có nhiều loại (0 đến 4), gồm các trường như nonce, to, value, data, giới hạn gas và phí. Sau khi gửi, giao dịch vào mempool, được đưa vào khối rồi được finalized.",
      body: `
<h2>Các trường của giao dịch EIP-1559 (loại 2)</h2>
<div class="table-wrap"><table>
<tr><th>Trường</th><th>Ý nghĩa</th></tr>
<tr><td><code>chainId</code></td><td>Mạng đích (1 = mainnet), chống phát lại.</td></tr>
<tr><td><code>nonce</code></td><td>Số thứ tự giao dịch của người gửi.</td></tr>
<tr><td><code>to</code></td><td>Địa chỉ nhận. Để trống nghĩa là triển khai hợp đồng.</td></tr>
<tr><td><code>value</code></td><td>Số wei chuyển đi.</td></tr>
<tr><td><code>data</code> (input)</td><td>Dữ liệu tùy ý; với lời gọi hợp đồng là selector hàm + tham số mã hóa ABI.</td></tr>
<tr><td><code>gasLimit</code></td><td>Lượng gas tối đa được dùng.</td></tr>
<tr><td><code>maxPriorityFeePerGas</code></td><td>Tip tối đa cho người đề xuất khối.</td></tr>
<tr><td><code>maxFeePerGas</code></td><td>Tổng phí tối đa mỗi gas (base fee + tip).</td></tr>
<tr><td><code>accessList</code></td><td>Danh sách địa chỉ và slot storage sẽ truy cập (tùy chọn).</td></tr>
<tr><td><code>v, r, s</code></td><td>Chữ ký ECDSA; từ đó suy ra địa chỉ người gửi.</td></tr>
</table></div>

<h2>Các loại giao dịch</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Tên</th><th>Giới thiệu bởi</th></tr>
<tr><td>0x00</td><td>Legacy</td><td>Ban đầu, dùng <code>gasPrice</code></td></tr>
<tr><td>0x01</td><td>Access list</td><td>EIP-2930 (Berlin)</td></tr>
<tr><td>0x02</td><td>Dynamic fee</td><td>EIP-1559 (London), phổ biến nhất</td></tr>
<tr><td>0x03</td><td>Blob</td><td>EIP-4844 (Dencun), mang blob cho rollup</td></tr>
<tr><td>0x04</td><td>Set code</td><td>EIP-7702 (Pectra), EOA ủy quyền cho mã</td></tr>
</table></div>
<p>Các loại được bọc theo chuẩn <strong>typed transaction envelope</strong> (EIP-2718): <code>TransactionType || TransactionPayload</code>.</p>

<h2>Ba mục đích</h2>
<ul>
  <li><strong>Chuyển ETH:</strong> <code>to</code> là EOA, <code>data</code> rỗng.</li>
  <li><strong>Gọi hợp đồng:</strong> <code>data</code> chứa selector (4 byte đầu của keccak256 chữ ký hàm, ví dụ <code>transfer(address,uint256)</code> → <code>0xa9059cbb</code>) + tham số.</li>
  <li><strong>Triển khai hợp đồng:</strong> <code>to</code> rỗng, <code>data</code> là init code.</li>
</ul>

<h2>Vòng đời giao dịch</h2>
<div class="flow arrows">
  <div><b>Ký</b>Ví ký bằng khóa bí mật</div>
  <div><b>Phát</b>Gửi tới node qua <code>eth_sendRawTransaction</code></div>
  <div><b>Mempool</b>Lan truyền giữa các node, chờ</div>
  <div><b>Vào khối</b>Builder/proposer chọn, thường theo tip</div>
  <div><b>Justified → Finalized</b>Sau ~2 epoch</div>
</div>
<p>Sau khi thực thi, mỗi giao dịch có <strong>receipt</strong>: trạng thái (thành công/thất bại), gas đã dùng, các <strong>log</strong> (sự kiện) phát ra. Ứng dụng thường lắng nghe log để cập nhật giao diện.</p>
<div class="callout tip"><b>Giao dịch kẹt?</b><p>Gửi giao dịch mới cùng nonce với phí cao hơn (thường +10% trở lên) để thay thế; hoặc gửi 0 ETH cho chính mình với nonce đó để "hủy".</p></div>`,
      keys: [
        "Trường chính: chainId, nonce, to, value, data, gasLimit, maxFee, maxPriorityFee, chữ ký.",
        "Loại 0 legacy, 1 access list, 2 EIP-1559, 3 blob, 4 set code (EIP-7702).",
        "Selector hàm = 4 byte đầu keccak256 của chữ ký hàm.",
        "Vòng đời: ký → mempool → vào khối → finalized; receipt chứa trạng thái, gas, log."
      ],
      quiz: [
        { q: "Giao dịch triển khai hợp đồng có trường to như thế nào?", o: ["Địa chỉ 0x0…0", "Để trống", "Địa chỉ người gửi", "Địa chỉ của EVM"], a: 1, e: "to rỗng báo hiệu tạo hợp đồng; data là init code." },
        { q: "Giao dịch loại 0x03 dùng để:", o: ["Chuyển ETH", "Mang blob dữ liệu cho rollup", "Ủy quyền mã cho EOA", "Access list"], a: 1, e: "Loại 3 do EIP-4844 giới thiệu." },
        { q: "Selector của hàm transfer(address,uint256) được tính từ:", o: ["Tên hợp đồng", "4 byte đầu của keccak256(\"transfer(address,uint256)\")", "SHA-256 của mã nguồn", "Nonce của người gửi"], a: 1, e: "Kết quả là 0xa9059cbb." },
        { q: "Cách thường dùng để thay một giao dịch đang kẹt là:", o: ["Đợi 7 ngày", "Gửi giao dịch mới cùng nonce với phí cao hơn", "Xóa ví", "Gọi Ethereum Foundation"], a: 1, e: "Node chỉ chấp nhận một giao dịch cho mỗi nonce; phí cao hơn sẽ thay thế." },
        { q: "Ứng dụng biết một token đã được chuyển thường bằng cách:", o: ["Đọc log/sự kiện Transfer trong receipt", "Hỏi validator", "Đọc blob", "Kiểm tra email"], a: 0, e: "Sự kiện được ghi trong log của receipt và có thể lọc qua eth_getLogs." }
      ]
    },
    {
      id: "blocks",
      title: "Khối",
      min: 8,
      src: ["/developers/docs/blocks/"],
      tldr: "Khối là nhóm giao dịch kèm hash của khối trước. Mỗi slot 12 giây có một validator được chọn để đề xuất khối; 32 slot tạo thành một epoch. Một khối gồm phần đồng thuận (beacon block) bọc lấy phần thực thi (execution payload).",
      body: `
<h2>Slot và epoch</h2>
<div class="table-wrap"><table>
<tr><th>Đơn vị</th><th>Độ dài</th><th>Ghi chú</th></tr>
<tr><td>Slot</td><td>12 giây</td><td>Tối đa một khối; slot có thể trống nếu người đề xuất offline.</td></tr>
<tr><td>Epoch</td><td>32 slot = 6,4 phút</td><td>Mọi validator active bỏ phiếu một lần mỗi epoch.</td></tr>
<tr><td>Finality</td><td>~2 epoch ≈ 12,8 phút</td><td>Khi checkpoint được 2/3 stake phê chuẩn hai lần liên tiếp.</td></tr>
</table></div>

<h2>Cấu trúc khối</h2>
<p><strong>Beacon block</strong> (lớp đồng thuận) có <code>slot</code>, <code>proposer_index</code>, <code>parent_root</code>, <code>state_root</code> và <code>body</code>:</p>
<ul>
  <li><code>randao_reveal</code>: đóng góp vào nguồn ngẫu nhiên RANDAO để chọn người đề xuất tương lai.</li>
  <li><code>graffiti</code>: 32 byte tùy ý của người đề xuất.</li>
  <li><code>attestations</code>: phiếu bầu của validator.</li>
  <li><code>proposer_slashings</code>, <code>attester_slashings</code>: bằng chứng vi phạm.</li>
  <li><code>voluntary_exits</code>, <code>bls_to_execution_changes</code>, <code>sync_aggregate</code>.</li>
  <li><code>execution_payload</code>: phần thực thi.</li>
  <li><code>blob_kzg_commitments</code>, <code>execution_requests</code> (deposit, rút, gom validator từ Pectra).</li>
</ul>
<p><strong>Execution payload</strong> (lớp thực thi) gồm: <code>parent_hash</code>, <code>fee_recipient</code>, <code>state_root</code>, <code>receipts_root</code>, <code>logs_bloom</code>, <code>prev_randao</code>, <code>block_number</code>, <code>gas_limit</code>, <code>gas_used</code>, <code>timestamp</code>, <code>extra_data</code>, <code>base_fee_per_gas</code>, <code>block_hash</code>, <code>transactions</code>, <code>withdrawals</code>, <code>blob_gas_used</code>, <code>excess_blob_gas</code>.</p>

<h2>Khối được tạo ra thế nào?</h2>
<div class="flow arrows">
  <div><b>Chọn người đề xuất</b>Ngẫu nhiên theo RANDAO, có trọng số theo số dư</div>
  <div><b>Xây payload</b>Execution client gom giao dịch (hoặc nhận từ builder qua MEV-Boost)</div>
  <div><b>Ký và phát</b>Consensus client bọc thành beacon block, ký BLS</div>
  <div><b>Kiểm tra</b>Node khác thực thi lại, attest nếu hợp lệ</div>
</div>

<h2>Kích thước khối</h2>
<p>Khối bị giới hạn theo gas, không theo số giao dịch. Mỗi khối có gas mục tiêu bằng nửa gas limit; gas limit được validator điều chỉnh dần (tăng từ 30 triệu lên 45 triệu trong 2025, và mặc định 60 triệu từ Fusaka). Từ Fusaka còn có giới hạn kích thước khối thực thi khoảng 10 MiB.</p>`,
      keys: [
        "Slot 12 giây, epoch 32 slot (6,4 phút), finality ~2 epoch.",
        "Beacon block bọc execution payload; body chứa attestation, slashing, exit, sync aggregate…",
        "Người đề xuất được chọn ngẫu nhiên bằng RANDAO.",
        "Khối giới hạn theo gas: mục tiêu = nửa gas limit; mặc định 60M từ Fusaka."
      ],
      quiz: [
        { q: "Một epoch gồm bao nhiêu slot?", o: ["12", "32", "64", "128"], a: 1, e: "32 slot × 12 giây = 6,4 phút." },
        { q: "Nguồn ngẫu nhiên để chọn người đề xuất khối là:", o: ["Hash của giá ETH", "RANDAO", "Thời gian máy tính", "Ethereum Foundation"], a: 1, e: "Mỗi người đề xuất đóng góp randao_reveal vào giá trị ngẫu nhiên chung." },
        { q: "Trường nào thuộc execution payload?", o: ["randao_reveal", "base_fee_per_gas", "graffiti", "sync_aggregate"], a: 1, e: "base_fee_per_gas nằm ở phần thực thi." },
        { q: "Kích thước khối Ethereum được giới hạn chủ yếu bằng:", o: ["Số giao dịch", "Gas limit", "Số byte cố định 1 MB", "Số validator"], a: 1, e: "Mỗi khối có giới hạn tổng gas." }
      ]
    },
    {
      id: "evm",
      title: "EVM và opcode",
      min: 10,
      src: ["/developers/docs/evm/", "/developers/docs/evm/opcodes/"],
      tldr: "Ethereum Virtual Machine là máy ảo kiểu ngăn xếp (stack) với từ 256 bit. Nó chạy bytecode của hợp đồng, có memory tạm thời, storage lâu dài, calldata chỉ đọc, và mỗi opcode tốn một lượng gas xác định.",
      body: `
<h2>Mô hình của EVM</h2>
<div class="compare">
  <div><h4>Stack</h4><p>Tối đa 1024 phần tử, mỗi phần tử 256 bit. Opcode lấy toán hạng từ đỉnh stack.</p></div>
  <div><h4>Memory</h4><p>Mảng byte tạm thời, mất sau mỗi lời gọi; chi phí mở rộng tăng bậc hai.</p></div>
  <div><h4>Storage</h4><p>Ánh xạ 256 bit → 256 bit, lưu vĩnh viễn trong trạng thái; đắt nhất.</p></div>
  <div><h4>Transient storage</h4><p>Như storage nhưng tự xóa cuối giao dịch (TSTORE/TLOAD, EIP-1153, Dencun). Rẻ, hữu ích cho khóa reentrancy.</p></div>
  <div><h4>Calldata</h4><p>Dữ liệu đầu vào chỉ đọc của lời gọi.</p></div>
  <div><h4>Code</h4><p>Bytecode bất biến của hợp đồng.</p></div>
</div>

<h2>Một số opcode tiêu biểu</h2>
<div class="table-wrap"><table>
<tr><th>Opcode</th><th>Mã</th><th>Chức năng</th><th>Gas (gần đúng)</th></tr>
<tr><td>ADD</td><td>0x01</td><td>Cộng hai giá trị trên stack</td><td>3</td></tr>
<tr><td>MUL</td><td>0x02</td><td>Nhân</td><td>5</td></tr>
<tr><td>KECCAK256</td><td>0x20</td><td>Hash vùng memory</td><td>30 + 6/word</td></tr>
<tr><td>CALLER</td><td>0x33</td><td>Địa chỉ gọi trực tiếp (msg.sender)</td><td>2</td></tr>
<tr><td>SLOAD</td><td>0x54</td><td>Đọc storage</td><td>100 (ấm) / 2100 (lạnh)</td></tr>
<tr><td>SSTORE</td><td>0x55</td><td>Ghi storage</td><td>tới ~20.000+</td></tr>
<tr><td>TLOAD / TSTORE</td><td>0x5C / 0x5D</td><td>Transient storage</td><td>100</td></tr>
<tr><td>PUSH0</td><td>0x5F</td><td>Đẩy 0 lên stack (Shanghai)</td><td>2</td></tr>
<tr><td>CLZ</td><td>0x1E</td><td>Đếm bit 0 đầu (Fusaka)</td><td>thấp</td></tr>
<tr><td>CALL / DELEGATECALL / STATICCALL</td><td>0xF1 / 0xF4 / 0xFA</td><td>Gọi hợp đồng khác</td><td>tùy</td></tr>
<tr><td>CREATE / CREATE2</td><td>0xF0 / 0xF5</td><td>Tạo hợp đồng</td><td>32.000+</td></tr>
<tr><td>REVERT</td><td>0xFD</td><td>Hủy thay đổi, trả dữ liệu lỗi</td><td>0</td></tr>
</table></div>

<h2>Ví dụ bytecode</h2>
<pre><code>PUSH1 0x02   // stack: [2]
PUSH1 0x03   // stack: [3, 2]
ADD          // stack: [5]
PUSH1 0x00
SSTORE       // storage[0] = 5</code></pre>

<h2>Các kiểu gọi</h2>
<ul>
  <li><strong>CALL:</strong> chạy mã của hợp đồng đích trong ngữ cảnh của chính nó.</li>
  <li><strong>DELEGATECALL:</strong> chạy mã của hợp đồng khác nhưng trên storage, msg.sender và msg.value của hợp đồng gọi. Nền tảng của proxy nâng cấp và thư viện.</li>
  <li><strong>STATICCALL:</strong> gọi chỉ đọc, cấm thay đổi trạng thái.</li>
</ul>

<h2>Precompile</h2>
<p>Hợp đồng đặc biệt ở địa chỉ cố định, chạy mã gốc của client cho các phép mật mã đắt: <code>0x01</code> ecrecover, <code>0x02</code> SHA-256, <code>0x05</code> MODEXP, <code>0x06–0x08</code> đường cong BN254 (dùng cho SNARK), <code>0x0a</code> KZG point evaluation (blob), <code>0x0b–0x11</code> BLS12-381 (Pectra), <code>0x100</code> P-256 (Fusaka).</p>
<div class="callout info"><b>Triển khai EVM</b><p>Mỗi execution client có bản EVM riêng: Geth (Go), Nethermind (C#), Besu (Java), Erigon (Go), revm trong Reth (Rust), evmone (C++). Ngoài ra, nhiều L2 tương thích EVM và zkEVM chứng minh việc thực thi EVM bằng ZK.</p></div>`,
      keys: [
        "EVM là máy stack, từ 256 bit, stack tối đa 1024.",
        "Vùng dữ liệu: memory (tạm), storage (vĩnh viễn, đắt), transient storage (xóa cuối giao dịch), calldata (chỉ đọc).",
        "DELEGATECALL chạy mã khác trên storage của hợp đồng gọi: nền tảng của proxy.",
        "Precompile cho mật mã: ecrecover, SHA-256, BN254, KZG, BLS12-381, P-256."
      ],
      quiz: [
        { q: "Kích thước một từ (word) trong EVM là:", o: ["32 bit", "64 bit", "256 bit", "512 bit"], a: 2, e: "256 bit giúp xử lý hash keccak và số lớn thuận tiện." },
        { q: "Vùng dữ liệu nào lưu vĩnh viễn và đắt nhất?", o: ["Memory", "Stack", "Storage", "Calldata"], a: 2, e: "Storage nằm trong trạng thái toàn cầu nên ghi rất tốn gas." },
        { q: "DELEGATECALL khác CALL ở chỗ:", o: ["Không tốn gas", "Chạy mã của hợp đồng đích nhưng trên storage và ngữ cảnh của hợp đồng gọi", "Chỉ đọc", "Tạo hợp đồng mới"], a: 1, e: "Đây là cơ chế của mẫu proxy nâng cấp." },
        { q: "Transient storage (EIP-1153) có đặc điểm:", o: ["Lưu vĩnh viễn", "Tự xóa khi kết thúc giao dịch, rẻ hơn storage", "Chỉ đọc", "Lưu trong blob"], a: 1, e: "Phù hợp cho khóa reentrancy và dữ liệu tạm giữa các lời gọi." }
      ]
    },
    {
      id: "gas-dev",
      title: "Gas chi tiết",
      min: 8,
      src: ["/developers/docs/gas/"],
      tldr: "Gas đo công tính toán của từng opcode. EIP-1559 tách phí thành base fee (đốt, tự điều chỉnh) và priority fee (tip). Truy cập storage và tài khoản lần đầu trong giao dịch tốn \"giá lạnh\" cao hơn; blob có thị trường gas riêng.",
      body: `
<h2>Công thức EIP-1559</h2>
<pre><code>phí thực trả mỗi gas = min(maxFeePerGas, baseFee + maxPriorityFeePerGas)
tổng phí            = gasUsed × phí thực trả mỗi gas
hoàn lại            = (maxFeePerGas − phí thực trả) × gasUsed</code></pre>
<p>Base fee của khối tiếp theo:</p>
<pre><code>baseFee_next = baseFee × (1 + 1/8 × (gasUsed − gasTarget) / gasTarget)</code></pre>
<p>Khối đầy hoàn toàn (gấp đôi mục tiêu) làm base fee tăng 12,5%; khối trống làm giảm 12,5%.</p>

<h2>Gas limit của giao dịch</h2>
<ul>
  <li>Chi phí nội tại (intrinsic): 21.000 gas cho mọi giao dịch, cộng thêm theo byte calldata (16 gas/byte khác 0, 4 gas/byte 0; EIP-7623 tăng giá với giao dịch chủ yếu chứa dữ liệu).</li>
  <li>Nếu hết gas giữa chừng: mọi thay đổi bị hủy, gas đã dùng vẫn mất.</li>
  <li>Phần gas thừa so với <code>gasLimit</code> được hoàn lại.</li>
  <li>Từ Fusaka, một giao dịch không được vượt quá 2<sup>24</sup> ≈ 16,7 triệu gas.</li>
  <li>Dùng <code>eth_estimateGas</code> để ước lượng trước.</li>
</ul>

<h2>Truy cập ấm và lạnh (EIP-2929)</h2>
<div class="table-wrap"><table>
<tr><th>Thao tác</th><th>Lạnh (lần đầu trong giao dịch)</th><th>Ấm (đã truy cập)</th></tr>
<tr><td>SLOAD</td><td>2.100</td><td>100</td></tr>
<tr><td>Truy cập tài khoản (BALANCE, EXTCODESIZE, CALL…)</td><td>2.600</td><td>100</td></tr>
</table></div>
<p><strong>Access list</strong> (EIP-2930) cho phép khai báo trước để "làm ấm" với giá rẻ hơn một chút.</p>

<h2>Ghi storage (SSTORE)</h2>
<ul>
  <li>0 → khác 0: khoảng 20.000 gas (đắt nhất, vì tạo dữ liệu mới vĩnh viễn).</li>
  <li>Khác 0 → khác 0: khoảng 2.900 gas.</li>
  <li>Khác 0 → 0: được hoàn một phần; tổng hoàn tối đa 1/5 gas đã dùng (EIP-3529).</li>
</ul>

<h2>Blob gas</h2>
<p>Blob có base fee riêng, điều chỉnh theo số blob so với mục tiêu, độc lập với gas thường. Fusaka thêm giá sàn liên kết với base fee thực thi (EIP-7918).</p>

<h2>Mẹo tối ưu gas cho lập trình viên</h2>
<ul>
  <li>Gói nhiều biến nhỏ vào cùng một slot 32 byte.</li>
  <li>Đọc storage vào biến cục bộ thay vì đọc nhiều lần.</li>
  <li>Dùng <code>calldata</code> cho tham số mảng chỉ đọc; dùng <code>immutable</code>, <code>constant</code>.</li>
  <li>Phát sự kiện thay vì lưu dữ liệu không cần đọc trên chuỗi.</li>
  <li>Dùng custom error thay vì chuỗi revert dài.</li>
</ul>`,
      keys: [
        "Phí = gasUsed × min(maxFee, baseFee + tip); dư được hoàn.",
        "Base fee thay đổi tối đa ±12,5% mỗi khối theo độ lệch so với mục tiêu.",
        "Truy cập lạnh đắt hơn ấm (SLOAD 2.100 vs 100); SSTORE 0→khác 0 ~20.000.",
        "Hoàn gas tối đa 1/5; blob có thị trường phí riêng; giới hạn ~16,7M gas mỗi giao dịch."
      ],
      quiz: [
        { q: "maxFeePerGas = 50 gwei, baseFee = 30 gwei, tip tối đa = 2 gwei. Phí thực trả mỗi gas là:", o: ["50 gwei", "32 gwei", "30 gwei", "2 gwei"], a: 1, e: "min(50, 30 + 2) = 32 gwei; 18 gwei mỗi gas được hoàn." },
        { q: "SLOAD một slot lần đầu trong giao dịch tốn khoảng:", o: ["100 gas", "2.100 gas", "20.000 gas", "21.000 gas"], a: 1, e: "Truy cập lạnh 2.100, các lần sau 100." },
        { q: "Thao tác SSTORE nào đắt nhất?", o: ["Khác 0 → 0", "0 → khác 0", "Khác 0 → khác 0", "Đọc storage"], a: 1, e: "Tạo dữ liệu mới vĩnh viễn trong trạng thái." },
        { q: "Hoàn gas (refund) tối đa bằng bao nhiêu phần gas đã dùng?", o: ["1/2", "1/5", "Toàn bộ", "Không có hoàn"], a: 1, e: "EIP-3529 giảm mức trần xuống 1/5." }
      ]
    },
    {
      id: "nodes-clients",
      title: "Node và client",
      min: 10,
      src: ["/developers/docs/nodes-and-clients/", "/developers/docs/nodes-and-clients/node-architecture/", "/developers/docs/nodes-and-clients/client-diversity/", "/developers/docs/nodes-and-clients/nodes-as-a-service/", "/developers/docs/nodes-and-clients/light-clients/", "/developers/docs/nodes-and-clients/archive-nodes/", "/developers/docs/nodes-and-clients/bootnodes/"],
      tldr: "Một node Ethereum gồm execution client (giao dịch, EVM, trạng thái) và consensus client (PoS, fork choice), nói chuyện với nhau qua Engine API. Có full node, archive node, light client. Đa dạng client giúp mạng chống lỗi phần mềm.",
      body: `
<h2>Kiến trúc node</h2>
<div class="stack">
  <div><b>Validator client</b>(Tùy chọn) Giữ khóa, ký attestation và khối</div>
  <div><b>Consensus client</b>Beacon chain, fork choice, mạng p2p libp2p</div>
  <div><b>Engine API</b>JSON-RPC có xác thực JWT, cổng 8551</div>
  <div><b>Execution client</b>Mempool, EVM, trạng thái, JSON-RPC cho ứng dụng (cổng 8545), mạng p2p devp2p</div>
</div>
<p>Consensus client gọi <code>engine_newPayload</code> để execution client kiểm tra khối và <code>engine_forkchoiceUpdated</code> để cập nhật đầu chuỗi hoặc yêu cầu xây khối mới.</p>

<h2>Các client</h2>
<div class="table-wrap"><table>
<tr><th>Execution</th><th>Ngôn ngữ</th><th>Consensus</th><th>Ngôn ngữ</th></tr>
<tr><td>Geth</td><td>Go</td><td>Prysm</td><td>Go</td></tr>
<tr><td>Nethermind</td><td>C# .NET</td><td>Lighthouse</td><td>Rust</td></tr>
<tr><td>Besu</td><td>Java</td><td>Teku</td><td>Java</td></tr>
<tr><td>Erigon</td><td>Go</td><td>Nimbus</td><td>Nim</td></tr>
<tr><td>Reth</td><td>Rust</td><td>Lodestar</td><td>TypeScript</td></tr>
<tr><td></td><td></td><td>Grandine</td><td>Rust</td></tr>
</table></div>

<h2>Vì sao đa dạng client quan trọng?</h2>
<ul>
  <li>Nếu một client có lỗi và chiếm <strong>trên 1/3</strong> validator, mạng có thể không finalize được.</li>
  <li>Nếu một client lỗi chiếm <strong>trên 2/3</strong>, nó có thể finalize một chuỗi sai; validator dùng client đó sẽ bị phạt nặng khi muốn quay lại.</li>
  <li>Vì vậy khuyến nghị: không client nào nên vượt 33%, và người vận hành nên chọn client thiểu số.</li>
</ul>

<h2>Các loại node</h2>
<div class="table-wrap"><table>
<tr><th>Loại</th><th>Lưu gì</th><th>Dùng khi</th></tr>
<tr><td>Full node</td><td>Trạng thái gần đây, xác minh mọi khối</td><td>Phổ biến nhất, đủ cho ví và staking</td></tr>
<tr><td>Archive node</td><td>Mọi trạng thái lịch sử (nhiều TB)</td><td>Block explorer, phân tích, truy vấn trạng thái quá khứ</td></tr>
<tr><td>Light client</td><td>Chỉ header, kiểm tra bằng sync committee</td><td>Thiết bị yếu, trình duyệt, ví di động</td></tr>
</table></div>
<p><strong>Light client</strong> theo dõi <em>sync committee</em> gồm 512 validator, đổi mỗi 256 epoch (~27 giờ), ký mỗi header. Nhờ đó có thể xác minh dữ liệu mà không phải tải cả chuỗi (ví dụ Helios).</p>

<h2>Đồng bộ</h2>
<ul>
  <li><strong>Execution:</strong> snap sync (tải trạng thái gần đây + bằng chứng), full sync (thực thi lại từ đầu).</li>
  <li><strong>Consensus:</strong> checkpoint sync từ một trạng thái tin cậy gần đây (vài phút), hoặc từ genesis (rất lâu).</li>
</ul>

<h2>Bootnode và node-as-a-service</h2>
<ul>
  <li><strong>Bootnode:</strong> node có địa chỉ cố định, ghi sẵn trong client, giúp node mới tìm peer đầu tiên.</li>
  <li><strong>Node-as-a-service</strong> (Infura, Alchemy, QuickNode…): tiện, mở rộng tốt, nhưng bạn phụ thuộc và tin bên thứ ba, giảm quyền riêng tư.</li>
</ul>`,
      keys: [
        "Node = execution client + consensus client (+ validator client), nối qua Engine API (JWT, cổng 8551).",
        "Client EL: Geth, Nethermind, Besu, Erigon, Reth. CL: Prysm, Lighthouse, Teku, Nimbus, Lodestar, Grandine.",
        "Không client nào nên vượt 1/3; vượt 2/3 với lỗi có thể finalize chuỗi sai.",
        "Full, archive, light client; sync committee 512 validator ~27 giờ.",
        "Bootnode giúp tìm peer; NaaS tiện nhưng phải tin bên thứ ba."
      ],
      quiz: [
        { q: "Execution client và consensus client giao tiếp qua:", o: ["Engine API", "Email", "REST công khai", "Blob"], a: 0, e: "Engine API là JSON-RPC có xác thực JWT." },
        { q: "Nếu một client có lỗi chiếm hơn 2/3 validator, rủi ro là:", o: ["Phí tăng nhẹ", "Có thể finalize chuỗi sai", "Không có gì", "Chỉ ảnh hưởng testnet"], a: 1, e: "Đây là lý do đa dạng client rất quan trọng." },
        { q: "Light client xác minh header dựa vào:", o: ["Toàn bộ trạng thái", "Chữ ký của sync committee", "Thợ đào", "Bootnode"], a: 1, e: "Sync committee 512 validator ký mỗi header." },
        { q: "Loại node cần cho block explorer muốn truy vấn số dư ở khối bất kỳ trong quá khứ:", o: ["Light client", "Full node", "Archive node", "Bootnode"], a: 2, e: "Archive lưu toàn bộ trạng thái lịch sử." }
      ]
    },
    {
      id: "networks-dev",
      title: "Mạng cho nhà phát triển",
      min: 5,
      src: ["/developers/docs/networks/", "/developers/docs/development-networks/"],
      tldr: "Phát triển thường đi qua ba môi trường: mạng cục bộ trên máy (Hardhat, Anvil), testnet công khai (Sepolia cho ứng dụng, Hoodi cho staking) rồi mainnet hoặc L2. Mỗi mạng có chain ID riêng.",
      body: `
<h2>Ba môi trường</h2>
<div class="flow arrows">
  <div><b>Cục bộ</b>Hardhat Network, Anvil: tức thì, reset được, fork mainnet</div>
  <div><b>Testnet</b>Sepolia, Hoodi: ETH miễn phí từ faucet</div>
  <div><b>Production</b>Mainnet hoặc L2</div>
</div>

<h2>Bảng tham khảo</h2>
<div class="table-wrap"><table>
<tr><th>Mạng</th><th>Chain ID</th><th>Ghi chú</th></tr>
<tr><td>Ethereum mainnet</td><td>1</td><td>Giá trị thật</td></tr>
<tr><td>Sepolia</td><td>11155111</td><td>Testnet cho ứng dụng; tập validator có kiểm soát</td></tr>
<tr><td>Hoodi</td><td>560048</td><td>Testnet cho validator, staking, nâng cấp</td></tr>
<tr><td>Hardhat / Anvil cục bộ</td><td>31337</td><td>Mặc định của công cụ</td></tr>
</table></div>
<p>Các L2 cũng có testnet riêng (Arbitrum Sepolia, Base Sepolia, OP Sepolia…) thường thanh toán trên Sepolia.</p>

<h2>Fork mainnet</h2>
<p>Hardhat và Anvil có thể <strong>fork mainnet</strong> tại một khối: bạn có bản sao trạng thái thật trên máy, gọi được Uniswap, Aave thật mà không tốn tiền. Rất hữu ích để kiểm thử tích hợp.</p>
<pre><code>anvil --fork-url https://eth-mainnet.example/rpc --fork-block-number 21000000</code></pre>

<h2>Mạng riêng</h2>
<p>Doanh nghiệp có thể chạy mạng riêng (private) hoặc liên minh (consortium) tương thích Ethereum, thường dùng proof-of-authority. Ngày nay xu hướng là dùng L2 riêng thanh toán trên mainnet thay vì mạng tách biệt.</p>`,
      keys: [
        "Cục bộ (Hardhat/Anvil) → testnet (Sepolia, Hoodi) → mainnet/L2.",
        "Chain ID: mainnet 1, Sepolia 11155111, Hoodi 560048, cục bộ 31337.",
        "Fork mainnet giúp kiểm thử với trạng thái thật miễn phí."
      ],
      quiz: [
        { q: "Chain ID của Sepolia là:", o: ["1", "5", "11155111", "31337"], a: 2, e: "31337 là mặc định của Hardhat/Anvil." },
        { q: "Lợi ích của fork mainnet trên máy cục bộ là:", o: ["Nhận ETH thật", "Kiểm thử với trạng thái và hợp đồng thật mà không tốn tiền", "Tăng tốc mainnet", "Bỏ qua gas trên mainnet"], a: 1, e: "Bạn tương tác với bản sao trạng thái mainnet." }
      ]
    },
    {
      id: "consensus-mechanisms",
      title: "Cơ chế đồng thuận: PoW, PoA và PoS",
      min: 8,
      src: ["/developers/docs/consensus-mechanisms/", "/developers/docs/consensus-mechanisms/pow/", "/developers/docs/consensus-mechanisms/pow/mining/", "/developers/docs/consensus-mechanisms/pow/mining/mining-algorithms/ethash/", "/developers/docs/consensus-mechanisms/poa/", "/developers/docs/consensus-mechanisms/pos/pos-vs-pow/"],
      tldr: "Cơ chế đồng thuận gồm hai phần: chống Sybil (ai được quyền tạo khối) và quy tắc chọn chuỗi (chuỗi nào là chuẩn). Ethereum từng dùng proof-of-work với thuật toán Ethash, nay dùng proof-of-stake. Proof-of-authority thường dùng cho mạng riêng.",
      body: `
<h2>Đồng thuận giải quyết điều gì?</h2>
<p>Trong một mạng mở, bất kỳ ai cũng có thể tạo nhiều danh tính giả (tấn công Sybil). Cơ chế đồng thuận buộc người tham gia bỏ ra một nguồn lực khan hiếm (điện năng, hoặc vốn đặt cọc) và đưa ra quy tắc để mọi node chọn cùng một chuỗi.</p>

<h2>Proof-of-work (2015–2022)</h2>
<ul>
  <li>Thợ đào thử liên tục các giá trị <strong>nonce</strong> để hash của khối nhỏ hơn mục tiêu độ khó.</li>
  <li>Thuật toán <strong>Ethash</strong> (phát triển từ Dagger-Hashimoto) cần nhiều bộ nhớ (DAG vài GB) để chống ASIC, giúp GPU thông thường đào được.</li>
  <li>Quy tắc chọn chuỗi: chuỗi có <strong>tổng độ khó</strong> lớn nhất.</li>
  <li>Phần thưởng giảm dần: 5 ETH → 3 ETH (Byzantium) → 2 ETH (Constantinople).</li>
  <li>"Difficulty bomb" tăng độ khó theo thời gian để thúc đẩy chuyển sang PoS.</li>
</ul>

<h2>Proof-of-authority</h2>
<p>Một danh sách cố định các "người có thẩm quyền" được ký khối (ví dụ Clique). Nhanh và đơn giản, nhưng tập trung, nên chủ yếu dùng cho mạng riêng hoặc testnet cũ.</p>

<h2>Proof-of-stake (từ 2022)</h2>
<div class="table-wrap"><table>
<tr><th></th><th>Proof-of-work</th><th>Proof-of-stake</th></tr>
<tr><td>Chống Sybil bằng</td><td>Năng lượng, phần cứng</td><td>ETH đặt cọc</td></tr>
<tr><td>Hình phạt gian lận</td><td>Mất chi phí điện (gián tiếp)</td><td>Bị slash trực tiếp</td></tr>
<tr><td>Chọn chuỗi</td><td>Tổng độ khó lớn nhất</td><td>LMD-GHOST + Casper FFG (Gasper)</td></tr>
<tr><td>Finality</td><td>Xác suất (chờ nhiều khối)</td><td>Kinh tế (sau ~2 epoch)</td></tr>
<tr><td>Năng lượng</td><td>Rất cao</td><td>Rất thấp</td></tr>
<tr><td>Tấn công 51%</td><td>Thuê/mua phần cứng</td><td>Mua lượng lớn ETH và có thể bị tiêu hủy</td></tr>
</table></div>
<div class="callout info"><b>Lợi thế phục hồi của PoS</b><p>Trong PoW, kẻ tấn công vẫn giữ phần cứng và có thể tấn công lại. Trong PoS, cộng đồng có thể slash hoặc đốt ETH của kẻ tấn công, khiến tấn công lặp lại cực kỳ tốn kém.</p></div>`,
      keys: [
        "Đồng thuận = chống Sybil + quy tắc chọn chuỗi.",
        "PoW dùng Ethash (cần nhiều bộ nhớ), chọn chuỗi có tổng độ khó lớn nhất.",
        "PoA: danh sách người ký cố định, dùng cho mạng riêng.",
        "PoS: đặt cọc ETH, slashing trực tiếp, finality kinh tế, ít năng lượng."
      ],
      quiz: [
        { q: "Thuật toán đào của Ethereum trước The Merge là:", o: ["SHA-256", "Ethash", "Scrypt", "Equihash"], a: 1, e: "Ethash cần nhiều bộ nhớ để chống ASIC." },
        { q: "Trong PoW, chuỗi chuẩn là chuỗi có:", o: ["Nhiều giao dịch nhất", "Tổng độ khó lớn nhất", "Nhiều validator nhất", "Mới nhất"], a: 1, e: "Còn PoS dùng Gasper." },
        { q: "Ưu điểm phục hồi của PoS so với PoW khi bị tấn công:", o: ["Kẻ tấn công có thể bị slash, mất cọc", "Không thể bị tấn công", "Đào lại nhanh hơn", "Không cần validator"], a: 0, e: "Kẻ tấn công PoW giữ lại phần cứng để tấn công tiếp." }
      ]
    },
    {
      id: "pos-gasper",
      title: "Proof-of-stake: Gasper và finality",
      min: 12,
      src: ["/developers/docs/consensus-mechanisms/pos/", "/developers/docs/consensus-mechanisms/pos/gasper/", "/developers/docs/consensus-mechanisms/pos/attestations/", "/developers/docs/consensus-mechanisms/pos/block-proposal/", "/developers/docs/consensus-mechanisms/pos/weak-subjectivity/"],
      tldr: "Validator được chia thành các ủy ban để attest mỗi epoch. Gasper kết hợp LMD-GHOST (chọn đầu chuỗi theo phiếu mới nhất) và Casper FFG (finalize các checkpoint khi có 2/3 stake). Node mới đồng bộ từ một checkpoint gần đây do weak subjectivity.",
      body: `
<div class="callout analogy"><b>Hình dung đơn giản</b><p>Hãy coi các validator như một <strong>hội đồng rất đông người</strong>, và mỗi thành viên đã đặt cọc ETH. Cứ mỗi <strong>12 giây</strong> (một slot), một thành viên được bốc thăm để đề xuất trang sổ mới, tức là một khối. Cứ mỗi <strong>32 slot, khoảng 6,4 phút</strong> (một epoch), mỗi thành viên bỏ phiếu đúng một lần.</p><p>Mỗi lá phiếu trả lời cùng lúc hai câu hỏi:</p><ul>
  <li><strong>"Trang mới nhất là trang nào?"</strong> Giống như đứng ở ngã ba và đi theo hướng mà nhiều người vừa chọn nhất, tính theo số tiền cọc. Đây là phần <strong>LMD-GHOST</strong>.</li>
  <li><strong>"Mốc nào đã được chốt?"</strong> Giống như biên bản họp: khi hai mốc liên tiếp đều được ít nhất 2/3 tiền cọc ký xác nhận, mốc trước được đóng dấu và không ai sửa được nữa. Đây là phần <strong>Casper FFG</strong>.</li>
</ul></div>

<h2>Validator và ủy ban</h2>
<ul>
  <li>Mỗi epoch, validator active được xáo trộn ngẫu nhiên (RANDAO) và chia vào các <strong>ủy ban</strong> (committee), mỗi slot có một hoặc nhiều ủy ban, mỗi ủy ban tối thiểu 128 validator.</li>
  <li>Mỗi validator attest đúng một lần mỗi epoch, trong slot được giao.</li>
  <li>Một số validator được chọn làm <strong>aggregator</strong> để gộp chữ ký BLS trước khi đưa vào khối.</li>
</ul>

<h2>Attestation chứa gì?</h2>
<div class="table-wrap"><table>
<tr><th>Thành phần</th><th>Bỏ phiếu cho</th></tr>
<tr><td><code>beacon_block_root</code></td><td>Khối đầu chuỗi (head) mà validator thấy (phiếu LMD-GHOST)</td></tr>
<tr><td><code>source</code></td><td>Checkpoint đã justified gần nhất</td></tr>
<tr><td><code>target</code></td><td>Checkpoint của epoch hiện tại (phiếu FFG)</td></tr>
<tr><td><code>slot</code>, <code>index</code></td><td>Vị trí ủy ban (từ Pectra, index nằm ngoài dữ liệu ký)</td></tr>
</table></div>

<h2>Casper FFG: justify và finalize</h2>
<p>Khối đầu tiên của mỗi epoch là <strong>checkpoint</strong>.</p>
<div class="flow arrows">
  <div><b>Epoch N</b>Checkpoint được ≥2/3 stake bỏ phiếu → <em>justified</em></div>
  <div><b>Epoch N+1</b>Checkpoint kế tiếp cũng justified</div>
  <div><b>Kết quả</b>Checkpoint N trở thành <em>finalized</em></div>
</div>
<p>Muốn đảo ngược khối đã finalized, ít nhất 1/3 tổng stake phải ký mâu thuẫn và sẽ bị slash. Đây là "finality kinh tế".</p>

<h2>LMD-GHOST: chọn đầu chuỗi</h2>
<p><em>Latest Message Driven Greedy Heaviest Observed SubTree</em>: bắt đầu từ checkpoint finalized, ở mỗi nhánh chọn nhánh có tổng trọng số (stake) phiếu mới nhất lớn nhất. Cơ chế <strong>proposer boost</strong> tạm thời cộng trọng số cho khối đúng hạn để chống một số tấn công tái tổ chức.</p>

<h2>Đề xuất khối</h2>
<p>Mỗi slot, một validator được chọn ngẫu nhiên với xác suất tỷ lệ với số dư hiệu dụng. Từ Fusaka (EIP-7917), danh sách người đề xuất của epoch tiếp theo được xác định trước, hỗ trợ các dịch vụ preconfirmation.</p>

<h2>Ví dụ: giao dịch của Minh được "chốt" thế nào</h2>
<div class="story"><b>Từng bước</b><p>Minh gửi 1 ETH lên một sàn giao dịch.</p><ol>
  <li><strong>Giây 0:</strong> validator được bốc thăm cho slot này đề xuất một khối có chứa giao dịch của Minh.</li>
  <li><strong>Vài giây sau:</strong> ủy ban của slot đó (ít nhất 128 validator) xem khối và bỏ phiếu "đây là đầu chuỗi", và cả mạng nhanh chóng đi theo khối này. Ví của Minh đã báo "thành công", nhưng về lý thuyết khối vẫn có thể bị thay thế.</li>
  <li><strong>Khoảng 6 đến 13 phút sau:</strong> checkpoint đầu tiên nằm sau khối của Minh nhận được phiếu của ít nhất 2/3 tổng stake và trở thành <em>justified</em>.</li>
  <li><strong>Khoảng 13 đến 19 phút sau:</strong> checkpoint kế tiếp cũng được justified, nên checkpoint trước nó trở thành <em>finalized</em>, kéo theo khối của Minh. Từ lúc này, muốn đảo ngược giao dịch thì ít nhất 1/3 tổng stake (hàng triệu ETH) phải ký gian lận và sẽ bị slash.</li>
</ol><p><strong>Vì sao sàn bắt bạn chờ?</strong> Nhiều sàn chờ thêm một số khối, có khi chờ đến lúc finalized, rồi mới cộng tiền, để chắc chắn giao dịch không thể bị đảo ngược.</p></div>

<h2>Weak subjectivity</h2>
<p>Trong PoS, kẻ có khóa cũ của validator đã rút có thể tạo một lịch sử giả dài từ quá khứ (tấn công tầm xa). Vì vậy node mới (hoặc node offline quá lâu) cần đồng bộ từ một <strong>weak subjectivity checkpoint</strong> gần đây lấy từ nguồn tin cậy (bạn bè, nhiều block explorer, checkpoint sync endpoint). Khoảng an toàn hiện vào cỡ hai tuần và sẽ ngắn lại khi hàng chờ thoát thay đổi.</p>
<div class="callout analogy"><b>Hình dung đơn giản</b><p>Bạn đi xa nhiều năm rồi trở về làng. Có người đưa bạn một cuốn sổ lịch sử "chính thức", nhưng cuốn sổ đó có thể do các thành viên hội đồng cũ viết lại. Họ đã rút tiền cọc nên không còn gì để mất. Cách an toàn là hỏi vài người bạn tin cậy "biên bản được đóng dấu gần nhất là gì?", rồi bắt đầu đọc từ đó.</p></div>`,
      keys: [
        "Validator chia ủy ban (≥128), attest mỗi epoch một lần; aggregator gộp chữ ký BLS.",
        "Attestation gồm phiếu head (LMD-GHOST) và source/target (Casper FFG).",
        "Hai checkpoint justified liên tiếp → checkpoint trước finalized; đảo ngược cần 1/3 stake bị slash.",
        "Weak subjectivity: node mới đồng bộ từ checkpoint gần đây đáng tin."
      ],
      quiz: [
        { q: "Gasper là sự kết hợp của:", o: ["Ethash và Clique", "LMD-GHOST và Casper FFG", "PBS và FOCIL", "RLP và SSZ"], a: 1, e: "LMD-GHOST chọn head, Casper FFG finalize." },
        { q: "Một checkpoint được justified khi:", o: ["Có 1/3 stake bỏ phiếu", "Có ít nhất 2/3 tổng stake bỏ phiếu", "Có một khối mới", "Ethereum Foundation duyệt"], a: 1, e: "Ngưỡng siêu đa số 2/3." },
        { q: "Weak subjectivity checkpoint dùng để chống:", o: ["Phí gas cao", "Tấn công tầm xa (long-range) bằng khóa validator cũ", "Spam mempool", "Mất blob"], a: 1, e: "Node mới cần một điểm khởi đầu đáng tin gần đây." },
        { q: "Mỗi ủy ban attestation có tối thiểu bao nhiêu validator?", o: ["8", "32", "128", "512"], a: 2, e: "Tối thiểu 128 để khó bị kẻ tấn công chiếm đa số." }
      ]
    },
    {
      id: "pos-rewards",
      title: "Phần thưởng, hình phạt và tấn công trong PoS",
      min: 9,
      src: ["/developers/docs/consensus-mechanisms/pos/rewards-and-penalties/", "/developers/docs/consensus-mechanisms/pos/attack-and-defense/", "/developers/docs/consensus-mechanisms/pos/keys/", "/developers/docs/consensus-mechanisms/pos/faqs/"],
      tldr: "Validator được thưởng khi bỏ phiếu đúng và kịp thời, bị trừ nhẹ khi bỏ lỡ, và bị slash khi ký mâu thuẫn. Nếu mạng không finalize được, inactivity leak dần làm giảm stake của validator offline để khôi phục đa số 2/3.",
      body: `
<h2>Cấu trúc phần thưởng</h2>
<p>Phần thưởng cơ bản tỷ lệ với số dư hiệu dụng và tỷ lệ nghịch với căn bậc hai tổng stake. Phần thưởng được chia theo trọng số (tổng 64):</p>
<div class="table-wrap"><table>
<tr><th>Thành phần</th><th>Trọng số</th></tr>
<tr><td>Timely source (phiếu source đúng, kịp thời)</td><td>14</td></tr>
<tr><td>Timely target</td><td>26</td></tr>
<tr><td>Timely head</td><td>14</td></tr>
<tr><td>Sync committee</td><td>2</td></tr>
<tr><td>Đề xuất khối (proposer)</td><td>8</td></tr>
</table></div>
<p>Bỏ lỡ phiếu source/target sẽ bị trừ tương đương phần thưởng lẽ ra nhận. Người đề xuất khối còn nhận <strong>priority fee</strong> và MEV ở lớp thực thi.</p>

<h2>Slashing</h2>
<p>Ba hành vi bị slash:</p>
<ul>
  <li>Đề xuất hai khối khác nhau cho cùng một slot.</li>
  <li>Attest hai khối khác nhau cho cùng target (double vote).</li>
  <li>Attest "bao quanh" một attestation khác (surround vote).</li>
</ul>
<p>Hậu quả: khoản phạt ban đầu (từ Pectra là 1/4096 số dư hiệu dụng), bị buộc thoát, sau khoảng 18 ngày chịu thêm <strong>phạt tương quan</strong> tỷ lệ với tổng stake bị slash trong cùng thời kỳ, và chỉ rút được sau khoảng 36 ngày. Một validator bị slash đơn lẻ mất ít; nếu rất nhiều validator bị slash cùng lúc (dấu hiệu tấn công phối hợp), họ có thể mất toàn bộ.</p>

<h2>Inactivity leak</h2>
<p>Nếu quá 4 epoch không finalize được (hơn 1/3 stake offline), validator không bỏ phiếu bị trừ ngày càng nặng, cho tới khi phần còn online lại chiếm ≥2/3 và chuỗi finalize trở lại.</p>

<h2>Các kịch bản tấn công</h2>
<div class="table-wrap"><table>
<tr><th>Tỷ lệ stake của kẻ tấn công</th><th>Có thể làm gì</th></tr>
<tr><td>Nhỏ</td><td>Tái tổ chức ngắn (reorg) nếu may mắn về thời điểm; proposer boost hạn chế điều này.</td></tr>
<tr><td>≥ 33%</td><td>Ngăn finality; nhưng sẽ bị inactivity leak tiêu hao nếu không bỏ phiếu.</td></tr>
<tr><td>≥ 50%</td><td>Chi phối fork choice, kiểm duyệt khối của người khác.</td></tr>
<tr><td>≥ 66%</td><td>Finalize chuỗi tùy ý; cộng đồng chỉ còn cách phối hợp xã hội (fork thiểu số) để phạt.</td></tr>
</table></div>
<p>Phòng thủ cuối cùng là <strong>tầng xã hội</strong>: cộng đồng có thể đồng ý chọn chuỗi trung thực và đốt stake kẻ tấn công.</p>

<h2>Khóa trong PoS</h2>
<ul>
  <li><strong>Khóa ký BLS</strong>: online, ký phiếu và khối.</li>
  <li><strong>Withdrawal credentials</strong>: địa chỉ thực thi (0x01/0x02) nhận ETH rút.</li>
  <li>Khóa sinh theo chuẩn EIP-2333/2334 từ một cụm từ khôi phục (EIP-2335 cho keystore).</li>
</ul>`,
      keys: [
        "Trọng số thưởng: source 14, target 26, head 14, sync 2, proposer 8 (tổng 64).",
        "Slash khi: đề xuất 2 khối/slot, double vote, surround vote.",
        "Phạt tương quan càng nặng khi nhiều validator bị slash cùng lúc.",
        "Inactivity leak khôi phục finality khi >1/3 offline.",
        "33% ngăn finality, 50% chi phối fork choice, 66% finalize tùy ý; tầng xã hội là phòng thủ cuối."
      ],
      quiz: [
        { q: "Thành phần nào có trọng số phần thưởng lớn nhất?", o: ["Timely head", "Timely target", "Sync committee", "Proposer"], a: 1, e: "Target chiếm 26/64." },
        { q: "Hành vi nào KHÔNG bị slash?", o: ["Đề xuất hai khối cho cùng slot", "Double vote", "Offline vài giờ", "Surround vote"], a: 2, e: "Offline chỉ bị trừ nhẹ, không bị slash." },
        { q: "Inactivity leak xảy ra khi:", o: ["Phí gas quá cao", "Mạng không finalize được quá 4 epoch", "Validator rút tiền", "Có hard fork"], a: 1, e: "Leak làm giảm stake của validator offline để phần online đạt 2/3." },
        { q: "Kẻ tấn công nắm ≥ 1/3 stake có thể:", o: ["Đánh cắp ETH của mọi người", "Ngăn mạng finalize", "Tạo ETH vô hạn", "Đổi luật EVM"], a: 1, e: "Finality cần 2/3, nên 1/3 đủ để cản." }
      ]
    }
  ]
});
