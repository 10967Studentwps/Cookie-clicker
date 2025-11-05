// script.js
let cookies = 0;
let cursors = 0;
let grandmas = 0;
let farms = 0;
let mines = 0;
let factories = 0;
let banks = 0;
let temples = 0;
let wizardTowers = 0;
let shipments = 0;
let portals = 0;
let autoClickerActive = false;
let autoClickerInterval;

const countElement = document.getElementById('count');
const cursorCostElement = document.getElementById('cursorCost');
const grandmaCostElement = document.getElementById('grandmaCost');
const farmCostElement = document.getElementById('farmCost');
const mineCostElement = document.getElementById('mineCost');
const factoryCostElement = document.getElementById('factoryCost');
const bankCostElement = document.getElementById('bankCost');
const templeCostElement = document.getElementById('templeCost');
const wizardTowerCostElement = document.getElementById('wizardTowerCost');
const shipmentCostElement = document.getElementById('shipmentCost');
const portalCostElement = document.getElementById('portalCost');

const cursorCountElement = document.getElementById('cursorCount');
const grandmaCountElement = document.getElementById('grandmaCount');
const farmCountElement = document.getElementById('farmCount');
const mineCountElement = document.getElementById('mineCount');
const factoryCountElement = document.getElementById('factoryCount');
const bankCountElement = document.getElementById('bankCount');
const templeCountElement = document.getElementById('templeCount');
const wizardTowerCountElement = document.getElementById('wizardTowerCount');
const shipmentCountElement = document.getElementById('shipmentCount');
const portalCountElement = document.getElementById('portalCount');

// Cookie click functionality
document.getElementById('cookie').addEventListener('click', function() {
    cookies++;
    updateDisplay();
});

// Activate auto-clicker via button
document.getElementById('activateCheat').addEventListener('click', function() {
    toggleAutoClicker();
});

// Keyboard shortcut for auto-clicker (Ctrl+Shift+C)
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
        toggleAutoClicker();
    }
});

function toggleAutoClicker() {
    if (autoClickerActive) {
        clearInterval(autoClickerInterval);
        autoClickerActive = false;
        document.getElementById('activateCheat').textContent = 'Activate Auto-Clicker';
        document.getElementById('activateCheat').style.backgroundColor = '#8B4513';
    } else {
        autoClickerInterval = setInterval(function() {
            cookies++;
            updateDisplay();
        }, 100); // Click every 100ms
        autoClickerActive = true;
        document.getElementById('activateCheat').textContent = 'Deactivate Auto-Clicker';
        document.getElementById('activateCheat').style.backgroundColor = '#d32f2f';
    }
}

// Upgrade purchase functions
document.getElementById('buyCursor').addEventListener('click', function() {
    const cursorCost = 15;
    if (cookies >= cursorCost) {
        cookies -= cursorCost;
        cursors++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(cursorCost * 1.15);
        cursorCostElement.textContent = newCost;
    }
});

document.getElementById('buyGrandma').addEventListener('click', function() {
    const grandmaCost = 100;
    if (cookies >= grandmaCost) {
        cookies -= grandmaCost;
        grandmas++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(grandmaCost * 1.15);
        grandmaCostElement.textContent = newCost;
    }
});

document.getElementById('buyFarm').addEventListener('click', function() {
    const farmCost = 1100;
    if (cookies >= farmCost) {
        cookies -= farmCost;
        farms++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(farmCost * 1.15);
        farmCostElement.textContent = newCost;
    }
});

document.getElementById('buyMine').addEventListener('click', function() {
    const mineCost = 12000;
    if (cookies >= mineCost) {
        cookies -= mineCost;
        mines++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(mineCost * 1.15);
        mineCostElement.textContent = newCost;
    }
});

document.getElementById('buyFactory').addEventListener('click', function() {
    const factoryCost = 130000;
    if (cookies >= factoryCost) {
        cookies -= factoryCost;
        factories++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(factoryCost * 1.15);
        factoryCostElement.textContent = newCost;
    }
});

document.getElementById('buyBank').addEventListener('click', function() {
    const bankCost = 1400000;
    if (cookies >= bankCost) {
        cookies -= bankCost;
        banks++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(bankCost * 1.15);
        bankCostElement.textContent = newCost;
    }
});

document.getElementById('buyTemple').addEventListener('click', function() {
    const templeCost = 20000000;
    if (cookies >= templeCost) {
        cookies -= templeCost;
        temples++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(templeCost * 1.15);
        templeCostElement.textContent = newCost;
    }
});

document.getElementById('buyWizardTower').addEventListener('click', function() {
    const wizardTowerCost = 330000000;
    if (cookies >= wizardTowerCost) {
        cookies -= wizardTowerCost;
        wizardTowers++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(wizardTowerCost * 1.15);
        wizardTowerCostElement.textContent = newCost;
    }
});

document.getElementById('buyShipment').addEventListener('click', function() {
    const shipmentCost = 5100000000;
    if (cookies >= shipmentCost) {
        cookies -= shipmentCost;
        shipments++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(shipmentCost * 1.15);
        shipmentCostElement.textContent = newCost;
    }
});

document.getElementById('buyPortal').addEventListener('click', function() {
    const portalCost = 78000000000;
    if (cookies >= portalCost) {
        cookies -= portalCost;
        portals++;
        updateDisplay();
        // Increase cost for next purchase
        const newCost = Math.floor(portalCost * 1.15);
        portalCostElement.textContent = newCost;
    }
});

// Auto-generate cookies from upgrades
setInterval(function() {
    cookies += cursors * 0.1;
    cookies += grandmas * 1;
    cookies += farms * 8;
    cookies += mines * 47;
    cookies += factories * 260;
    cookies += banks * 1400;
    cookies += temples * 7800;
    cookies += wizardTowers * 44000;
    cookies += shipments * 260000;
    cookies += portals * 1600000;
    updateDisplay();
}, 1000);

function updateDisplay() {
    countElement.textContent = Math.floor(cookies);
    cursorCountElement.textContent = cursors;
    grandmaCountElement.textContent = grandmas;
    farmCountElement.textContent = farms;
    mineCountElement.textContent = mines;
    factoryCountElement.textContent = factories;
    bankCountElement.textContent = banks;
    templeCountElement.textContent = temples;
    wizardTowerCountElement.textContent = wizardTowers;
    shipmentCountElement.textContent = shipments;
    portalCountElement.textContent = portals;
}
