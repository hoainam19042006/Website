document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // 1. KHO DỮ LIỆU SƠ CỨU (DATABASE)
    // ==========================================
    const guidesData = {
        'hoc-di-vat': {
            title: 'Sơ cứu hóc dị vật (Nghiệm pháp Heimlich)',
            steps: [
                { num: 1, title: 'Xác định tình trạng', desc: 'Hỏi nạn nhân "Bạn có bị nghẹn không?". Nếu họ có thể nói hoặc ho mạnh, hãy khuyến khích họ tự ho để đẩy dị vật ra. Nếu họ không thể nói, thở rít hoặc ôm cổ, hãy bắt đầu sơ cứu ngay.', img: '../SoCuu/image/xacdinhtinhtrang.png' },
                { num: 2, title: 'Vỗ lưng (5 lần)', desc: 'Đứng phía sau, hơi nghiêng nạn nhân về phía trước. Dùng gót bàn tay vỗ mạnh 5 lần vào vùng giữa hai xương bả vai của nạn nhân.', img: '../SoCuu/image/volung.png' },
                { num: 3, title: 'Ép bụng (5 lần)', desc: 'Vòng hai tay ôm quanh eo nạn nhân. Đặt một nắm tay ngay trên rốn. Dùng tay kia nắm lấy và ép mạnh vào trong và hướng lên trên như muốn nhấc nạn nhân lên.', img: '../SoCuu/image/epbung.png' }
            ]
        },
        'cam-mau': {
            title: 'Sơ cứu cầm máu vết thương khẩn cấp',
            steps: [
                { num: 1, title: 'Ấn trực tiếp lên vết thương', desc: 'Sử dụng một miếng gạc sạch hoặc vải sạch ấn trực tiếp lên vết thương đang chảy máu để giảm thiểu lượng máu mất đi.', img: '../SoCuu/image/cammau.png' },
                { num: 2, title: 'Nâng cao vùng bị thương', desc: 'Nếu vết thương ở tay hoặc chân, hãy nâng cao vùng bị thương lên cao hơn tim của nạn nhân để giảm áp lực máu dồn về đó.', img: '../SoCuu/image/nangcaochan.png' },
                { num: 3, title: 'Băng cố định', desc: 'Dùng băng cuộn băng ép chặt miếng gạc lại. Lưu ý không băng quá chặt làm tím tái vùng chi phía dưới vết thương.', img: '../SoCuu/image/bangbo.png' }
            ]
        },
        'bong': {
            title: 'Sơ cứu bỏng nhiệt (Nước sôi, lửa, bề mặt nóng)',
            steps: [
                { num: 1, title: 'Làm mát vết bỏng', desc: 'Ngâm hoặc xả trực tiếp vùng bị bỏng dưới vòi nước mát (không dùng nước đá) trong khoảng 15-20 phút để giảm nhiệt độ và giảm đau.', img: '../SoCuu/image/lammatvetbong.png' },
                { num: 2, title: 'Tháo bỏ đồ trang sức, quần áo', desc: 'Nhẹ nhàng cởi bỏ quần áo hoặc nhẫn, vòng trước khi vùng bỏng bắt đầu sưng nề lên.', img: '../SoCuu/image/vetbong.png' },
                { num: 3, title: 'Che phủ vết bỏng', desc: 'Dùng gạc vô trùng hoặc khăn sạch, ẩm che nhẹ lên vết bỏng. Tuyệt đối không bôi kem đánh răng hay các chất lạ lên vết bỏng.', img: '../SoCuu/image/chevetbong.png' }
            ]
        },
        'ngat-xiu': {
            title: 'Sơ cứu người bị ngất xỉu đột ngột',
            steps: [
                { num: 1, title: 'Kiểm tra an toàn và phản ứng', desc: 'Đặt nạn nhân nằm ngửa ở nơi thoáng mát. Kiểm tra xem họ còn thở và có phản ứng hay không.', img: '../SoCuu/image/ngatxiu.png' },
                { num: 2, title: 'Nâng cao chân', desc: 'Nâng hai chân của nạn nhân lên cao khoảng 30cm so với mặt đất để giúp máu lưu thông về não tốt hơn.', img: '../SoCuu/image/nangcaochansocuu.png' },
                { num: 3, title: 'Nới lỏng quần áo và chờ hồi phục', desc: 'Nới lỏng cổ áo, thắt lưng. Nếu nạn nhân nôn mửa, hãy đỡ họ nằm nghiêng sang một bên (tư thế hồi phục) để tránh tắc đường thở.', img: '../SoCuu/image/namnghieng.png' }
            ]
        }
    };

    // ==========================================
    // 2. LOGIC CLICK CHUYỂN ĐỔI BÀI HƯỚNG DẪN
    // ==========================================
    const cards = document.querySelectorAll('.fa-card');
    const mainGuideContainer = document.querySelector('.fa-main-guide');
    // Reload lại trang và danh mục đang chọn
    const savedSituation = localStorage.getItem('activeSituation');
    if (savedSituation && guidesData[savedSituation] && mainGuideContainer) {
        renderFirstAidGuide(guidesData[savedSituation]);
    }

    if (cards.length > 0 && mainGuideContainer) {
        cards.forEach(card => {
            card.addEventListener('click', function () {
                // Lấy định danh tình huống từ thẻ vừa click
                const situationKey = this.getAttribute('data-situation');

                // Nếu tồn tại dữ liệu cho tình huống này, tiến hành render
                if (guidesData[situationKey]) {
                    renderFirstAidGuide(guidesData[situationKey]);
                    
                    localStorage.setItem('activeSituation', situationKey); // Lưu lại tình huống đang chọn để reload sau này
                }
            });
        });
    }

    // Hàm tái tạo cấu trúc HTML dựa trên dữ liệu đầu vào
    function renderFirstAidGuide(data) {
        // Tạo tiêu đề bài viết
        let htmlContent = `<h2 class="fa-guide-title">${data.title}</h2>`;

        // Lặp qua từng bước để xây dựng các khối `.fa-step`
        data.steps.forEach(step => {
            htmlContent += `
                <div class="fa-step">
                    <div class="fa-step-num">${step.num}</div>
                    <div class="fa-step-content">
                        <h3>${step.title}</h3>
                        <p>${step.desc}</p>
                        <div class="fa-img-box">
                            <img src="${step.img}" alt="${step.title}" class="fa-step-img" onerror="this.style.display='none'">
                        </div>
                    </div>
                </div>
            `;
        });

        // Thay thế toàn bộ nội dung cũ trong container bằng HTML mới tạo
        mainGuideContainer.innerHTML = htmlContent;

        // Cuộn màn hình xuống phần chi tiết mượt mà (Tùy chọn UX)
        mainGuideContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ==========================================
    // 3. CÁC TÍNH NĂNG KHÁC (TÌM KIẾM & GỌI 115)
    // ==========================================
    const searchBtn = document.getElementById('faSearchBtn');
    const searchInput = document.getElementById('faSearchInput');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function () {
            const query = searchInput.value.trim().toLowerCase();
            if (query !== '') {
                // Logic tìm kiếm cơ bản bằng cách giả lập click vào các thẻ tương ứng
                if (query.includes('hóc') || query.includes('vật')) cards[0].click();
                else if (query.includes('máu') || query.includes('cầm')) cards[1].click();
                else if (query.includes('bỏng')) cards[2].click();
                else if (query.includes('ngất') || query.includes('xỉu')) cards[3].click();
                else alert('Không tìm thấy hướng dẫn phù hợp. Vui lòng gọi 115 nếu khẩn cấp!');
            } else {
                alert('Vui lòng nhập tình huống khẩn cấp bạn đang gặp phải!');
            }
        });

        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') searchBtn.click();
        });
    }

    const callBtn = document.getElementById('faCallBtn');
    if (callBtn) {
        callBtn.addEventListener('click', function () {
            if (confirm('Bạn có chắc chắn muốn gọi Cấp cứu 115 ngay bây giờ?')) {
                window.location.href = 'tel:115'; // Kích hoạt chức năng gọi điện thực tế
            }
        });
    }
});