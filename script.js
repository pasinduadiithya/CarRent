const myWhatsAppNumber = "94764124271";

const vehicles = [
    { name: "Toyota Prius", price: "Rs. 12,500 / Day", type: "Hybrid Luxury", img: "image/prius.png" },
    { name: "Suzuki Wagon R", price: "Rs. 7,500 / Day", type: "Economy Hybrid", img: "image/wagon_r.png" },
    { name: "Toyota Aqua", price: "Rs. 15,000 / Day", type: "Economy Hybrid", img: "image/aqua.png" },
    { name: "Honda Vezel", price: "Rs. 35,000 / Day", type: "Premium SUV", img: "image/HondaVezel.jpg" },
    { name: "Toyota KDH High Roof", price: "Rs. 35,000 / Day", type: "Luxury Van", img: "image/KDH.jpg" }
];

function loadVehicles() {
    const container = document.getElementById('car-list');
    if(!container) return;

    vehicles.forEach(car => {
        container.innerHTML += `
            <div class="card">
                <img src="${car.img}" alt="${car.name}">
                <div class="card-content">
                    <span style="background: #fdf6dc; color: #d3b325; padding: 4px 12px; border-radius: 20px; font-size: 0.8rem; font-weight: 700;">${car.type}</span>
                    <h3 style="margin-top: 10px;">${car.name}</h3>
                    <p class="price-tag">${car.price}</p>
                    <button class="btn-whatsapp" onclick="sendWhatsApp('${car.name}')">
                        <i class="fab fa-whatsapp"></i> Book Now
                    </button>
                </div>
            </div>`;
    });
}

function sendWhatsApp(carName) {
    const msg = `Hello CarVibes, I'm interested in booking the ${carName}.`;
    window.open(`https://wa.me/${94764124271}?text=${encodeURIComponent(msg)}`, '_blank');
}

window.onload = loadVehicles;