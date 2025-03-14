const DATA_URL = "https://raw.githubusercontent.com/Aptopass/Emoji_Subscriptions.json/main/Emoji_Subscriptions.json";

// Mock data as fallback
const mockData = [
    { walletAddress: "0x123", userName: "JohnDoe", referralCode: "JD123", uplineReferralCode: null },
    { walletAddress: "0x456", userName: "JaneDoe", referralCode: "JD456", uplineReferralCode: "JD123" },
    { walletAddress: "0x789", userName: "BobSmith", referralCode: "BS789", uplineReferralCode: "JD123" },
    { walletAddress: "0xABC", userName: "AliceLee", referralCode: "AL123", uplineReferralCode: "JD456" },
    { walletAddress: "0xDEF", userName: "TomBrown", referralCode: "TB456", uplineReferralCode: "JD456" },
    { walletAddress: "0xGHI", userName: "SaraKing", referralCode: "SK789", uplineReferralCode: "BS789" },
    { walletAddress: "0xJKL", userName: "MikeRoss", referralCode: "MR123", uplineReferralCode: "BS789" }
];

async function fetchUserCount(counterElementId = 'userCounter') {
    try {
        const response = await fetch(DATA_URL);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        if (!Array.isArray(data)) {
            throw new Error('Data is not an array. Invalid JSON format.');
        }
        document.getElementById(counterElementId).textContent = `Total Users: ${data.length}`;
        console.log('Fetched user count:', data.length);
    } catch (error) {
        console.error('Failed to fetch data:', error);
        document.getElementById(counterElementId).textContent = `Total Users: ${mockData.length} (Sample Data)`;
        console.log('Using mock data instead:', mockData.length);
    }
}

// Automatically fetch data on script load
window.addEventListener('load', () => fetchUserCount());
