const filterTimetable = (course) => {
    const timetableCells = document.querySelectorAll("td[data-course]");
    const venueInfo = document.getElementById("class-venue");
    let selectedVenues = [];

    if (course === "all") {
        // Show all cells and reset their content
        timetableCells.forEach(cell => {
            cell.style.display = '';  // Reset the display property for all cells
            cell.innerHTML = cell.getAttribute("data-original-content");  // Restore original content
        });
        venueInfo.innerText = '';  // Clear the venue info
    } else {
        timetableCells.forEach(cell => {
            if (cell.getAttribute('data-course') === course) {
                cell.style.display = '';  // Show relevant cells
                cell.innerHTML = cell.getAttribute("data-original-content");  // Restore original content
                const venue = cell.getAttribute("data-venue");  // Get the venue info
                if (!selectedVenues.includes(venue)) {
                    selectedVenues.push(venue);  // Add unique venue to the list
                }
            } else {
                // Instead of hiding, clear the content of non-relevant cells but keep the structure
                cell.style.display = '';  // Ensure the cell stays visible (keeps table structure)
                cell.innerHTML = "";  // Clear the content of irrelevant cells
            }
        });

        // Display the venue information for the selected course
        venueInfo.innerText = `Venue for ${course}: ${selectedVenues.join(", ")}`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listener to the course dropdown
    document.getElementById("courseName").addEventListener('change', (event) => {
        filterTimetable(event.target.value);  // Filter timetable on course selection
    });

    // Store the original content of each cell for later restoration
    document.querySelectorAll("td[data-course]").forEach(cell => {
        cell.setAttribute("data-original-content", cell.innerHTML);  // Save the original content
    });

    filterTimetable("all");  // Show all courses by default on page load
});
