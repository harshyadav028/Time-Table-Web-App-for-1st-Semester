const filterTimetable = (course) => {
    const timetableCells = document.querySelectorAll("td[data-course]");
    const venueInfo = document.getElementById("class-venue");
    let selectedVenues = [];

    if (course ==="all" ) {
        timetableCells.forEach(cell => {
            cell.style.display = '';
        });
        venueInfo.innerText = '';
    }else {
        timetableCells.forEach(cell => {
            if (cell.getAttribute('data-course') === course) {
                cell.style.display = '';
                const venue = cell.getAttribute("data-venue");
                if (!selectedVenues.includes(venue)) {
                    selectedVenues.push(venue);
                }
            }else {
                cell.style.visibility = 'hidden';
            }
        });

        venueInfo.innerText = `Venue for ${course}: ${selectedVenues.join(", ")}`;

    }
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("courseName").addEventListener('change', (event) => {
        filterTimetable(event.target.value);
    });

    filterTimetable("all");

});