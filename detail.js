
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`http://localhost:3000/room?id=${id}`)
.then((res) => res.json())
.then((data) => {
    let html = '';

    for (const element of data) {
        html += `
        <div class="col-lg-6 col-md-8">
            <div class="card shadow-sm mb-4">
                <img src="${element.image}" class="card-img-top" alt="Room Image">
                <div class="card-body">
                    <h5 class="card-title text-center">Số phòng: ${element.id}</h5>  <!-- sửa ở đây -->
                    <p class="card-text">
                        <strong>Giảm giá:</strong> ${element.discount}%<br>
                        <strong>Giá phòng:</strong> ${element.price} VND<br>
                        <strong>Thời gian lưu trú:</strong> ${element.stayPeriod}
                    </p>
                    <div class="d-grid gap-2">
                        <a href="#" class="btn btn-primary btn-block">Đặt phòng ngay</a>
                    </div>
                </div>
            </div>
        </div>`;
    }

    document.getElementById('data').innerHTML = html;
});
