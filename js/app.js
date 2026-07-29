// Main App JS for CryptoForge Demo

let isLoggedIn = false;
let currentUser = null;

// Mock user data
const mockUser = {
    name: "Alex Rivera",
    email: "alex@crypto.com",
    balance: 12480.75,
    portfolio: [
        { asset: "BTC", amount: 0.45, value: 28500 },
        { asset: "ETH", amount: 3.2, value: 8200 },
        { asset: "USDT", amount: 3200, value: 3200 }
    ],
    referrals: 12,
    referralCode: "CRYPTOALEX24"
};

// Navigation
function navigateTo(page) {
    if (!isLoggedIn && (page === 'dashboard' || page === 'referrals')) {
        showLoginModal();
        return;
    }
    
    if (page === 'dashboard') {
        window.location.href = 'dashboard.html';
    } else if (page === 'referrals') {
        window.location.href = 'referrals.html';
    } else {
        alert(`Navigating to ${page} section (demo)`);
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) menu.classList.toggle('hidden');
}

// Login Modal
function showLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function hideLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function login() {
    isLoggedIn = true;
    currentUser = mockUser;
    hideLoginModal();
    alert(`Welcome back, ${mockUser.name}!`);
    setTimeout(() => {
        window.location.href = 'dashboard.html';
    }, 800);
}

function register() {
    alert("Registration form would open here. Welcome to CryptoForge!");
    setTimeout(() => {
        isLoggedIn = true;
        currentUser = mockUser;
        window.location.href = 'dashboard.html';
    }, 500);
}

// Logout
function logout() {
    isLoggedIn = false;
    currentUser = null;
    window.location.href = 'index.html';
}

// Mock withdrawal
function initiateWithdrawal() {
    if (!isLoggedIn) {
        alert("Please login first");
        return;
    }
    const amount = prompt("Enter withdrawal amount (USD):", "500");
    if (amount) {
        alert(`Withdrawal request for $${amount} submitted successfully!\nIt will be processed in 24-48 hours to your linked wallet.`);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    if (mobileBtn) {
        mobileBtn.addEventListener('click', toggleMobileMenu);
    }
    
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            hideLoginModal();
        }
    });
    
    console.log('%cCryptoForge Demo Loaded 🚀', 'color: #facc15; font-size: 16px; font-weight: bold');
});