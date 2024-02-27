document.getElementById('connectWalletButton').addEventListener('click', async () => {
    try {
        // Check if the wallet is already connected
        if (window.ethereum && window.ethereum.selectedAddress) {
            console.log('Wallet already connected:', window.ethereum.selectedAddress);
            displayUserAddress(window.ethereum.selectedAddress);
        } else {
            // Request connection to the wallet
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const selectedAddress = accounts[0];

            console.log('Wallet connected:', selectedAddress);
            // Display the user's address
            displayUserAddress(selectedAddress);
            // Show the bet form
            document.getElementById('betForm').style.display = 'block';
        }
    } catch (error) {
        console.error('Wallet connection error:', error);
    }
});

function displayUserAddress(address) {
    const userDisplay = document.getElementById('userDisplay');
    userDisplay.textContent = `Wallet Address: ${address}`;
    userDisplay.classList.add('user-address'); // Optional: Add a class for styling
}
