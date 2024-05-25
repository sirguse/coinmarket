async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coincap.io/v2/assets/bitcoin');
        const data = await response.json();
        const crypto = data.data;

        console.log('Fetched data:', crypto);

        const priceUsd = parseFloat(crypto.priceUsd);
        const changePercent1Hr = parseFloat(crypto.changePercent1Hr);
        const changePercent24Hr = parseFloat(crypto.changePercent24Hr);
        const changePercent7D = parseFloat(crypto.changePercent7D);
        const marketCapUsd = parseFloat(crypto.marketCapUsd);
        const volumeUsd24Hr = parseFloat(crypto.volumeUsd24Hr);
        const supply = parseFloat(crypto.supply);

        document.getElementById('price').innerText = isNaN(priceUsd) ? 'N/A' : `$${priceUsd.toFixed(2)}`;
        document.getElementById('change1h').innerHTML = isNaN(changePercent1Hr) ? 'N/A' : `<i class="fa-solid fa-${changePercent1Hr < 0 ? 'sort-down' : 'caret-up'}"></i>${changePercent1Hr.toFixed(2)}%`;
        document.getElementById('change24h').innerHTML = isNaN(changePercent24Hr) ? 'N/A' : `<i class="fa-solid fa-${changePercent24Hr < 0 ? 'sort-down' : 'caret-up'}"></i>${changePercent24Hr.toFixed(2)}%`;
        document.getElementById('change7d').innerHTML = isNaN(changePercent7D) ? 'N/A' : `<i class="fa-solid fa-${changePercent7D < 0 ? 'sort-down' : 'caret-up'}"></i>${changePercent7D.toFixed(2)}%`;
        document.getElementById('marketcap').innerText = isNaN(marketCapUsd) ? 'N/A' : `$${marketCapUsd.toLocaleString()}`;
        document.getElementById('volume').innerText = isNaN(volumeUsd24Hr) ? 'N/A' : `$${volumeUsd24Hr.toLocaleString()}`;
        document.getElementById('supply').innerText = isNaN(supply) ? 'N/A' : `${supply.toLocaleString()} BTC`;
        document.getElementById('sparkline').src = `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg`;
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
}

fetchCryptoData();
setInterval(fetchCryptoData, 1000);