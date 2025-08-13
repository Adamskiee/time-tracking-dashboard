const currents = document.querySelectorAll(".current-hrs");
const previouses = document.querySelectorAll(".previous-hrs");
const previousTimes = document.querySelectorAll(".previous-time");
const filters = document.getElementById("filters");

let currentRange = "weekly";

const setActive = (btn) => {
    filters.querySelectorAll(".filter-btn.active").forEach((active) => {
        active.classList.remove('active');
    });
    btn.classList.add('active');
    updateDashboard();
}

const updateDashboard = async () => {
    previousTimes.forEach(previousTime => {
        previousTime.textContent = currentRange !== "daily" ? "Last " + currentRange.slice(0, currentRange.length-2) : "Yesterday";
    });
    const datas = await getData();
    datas.forEach((data, index) => {
        const {current, previous} = data.timeframes[currentRange];
        currents[index].textContent = generateHr(current);
        previouses[index].textContent = generateHr(previous);
    })
}

const generateHr = (hr) => {
    if(hr > 1) {
        hr = hr+"hrs";
    }
    else if(hr > 0) {
        hr = hr+"hr";
    }
    else {
        hr = "N/A";
    }
    return hr;
}

const getData = async () => {
    try{
        return (await fetch('./data.json')).json();
    }catch(err) {
        return null;
    }
}

filters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if(!btn) return;
    const range = btn.dataset.range;
    if(range === currentRange) return;

    currentRange = range;
    setActive(btn);
})

const initial = filters.querySelector(`[data-range="${currentRange}"]`);
setActive(initial);