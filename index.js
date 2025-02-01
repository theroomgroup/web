// แสดงปีปัจจุบันใน footer
const currentYear = new Date().getFullYear();
document.getElementById('year').textContent = currentYear;

function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.classList.toggle('show');
}

// ปิด dropdown เมื่อคลิกนอก dropdown
window.onclick = function(event) {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (!event.target.matches('.globe-icon') && dropdownContent.classList.contains('show')) {
        dropdownContent.classList.remove('show');
    }
}

// ฟังก์ชันเพื่อเลื่อนลงไปยัง main
function scrollToMain() {
    const mainSection = document.querySelector('main');
    mainSection.scrollIntoView({ behavior: 'smooth' });
}

// เพิ่ม event listener ให้กับ globe-icon
document.querySelector('.globe-icon').addEventListener('click', function(event) {
    toggleDropdown(); // เปิด/ปิด dropdown
    scrollToMain(); // เลื่อนลงไปยัง main
    event.stopPropagation(); // หยุดการแพร่กระจายของเหตุการณ์
});
