// Function to extract details of the clicked ticket
function extractTicketDetails(event) {
    const ticketDiv = event.target.closest('.ticket-class');  // Adjust the class selector to match the ticket container
    if (!ticketDiv) return;  // Return if the clicked element is not part of a ticket

    // Extract the required details from the ticket div
    const trainName = ticketDiv.querySelector('.train-name-class') ? ticketDiv.querySelector('.train-name-class').textContent.trim() : 'N/A';
    const source = ticketDiv.querySelector('.source-class') ? ticketDiv.querySelector('.source-class').textContent.trim() : 'N/A';
    const destination = ticketDiv.querySelector('.destination-class') ? ticketDiv.querySelector('.destination-class').textContent.trim() : 'N/A';
    const dayDeparture = ticketDiv.querySelector('.departure-class') ? ticketDiv.querySelector('.departure-class').textContent.trim() : 'N/A';
    const dateDeparture = ticketDiv.querySelector('.departure-date-class') ? ticketDiv.querySelector('.departure-date-class').textContent.trim() : 'N/A';
    const waitlistStatus = ticketDiv.querySelector('.waitlist-class') ? ticketDiv.querySelector('.waitlist-class').textContent.trim() : '0';

    // Package the extracted data
    const ticketData = {
        trainName,
        source,
        destination,
        dayDeparture,
        dateDeparture,
        waitlistStatus
    };

    // Log the extracted data to the console for debugging
    console.log('Extracted Ticket Details:', ticketData);

    // Send the ticket details to the popup or other parts of your extension
    chrome.runtime.sendMessage({ action: "setTicketData", data: ticketData });
}

// Add click event listener to all ticket elements
const ticketDivs = document.querySelectorAll('.ticket-class');  // Adjust the selector to match the ticket divs
ticketDivs.forEach(ticketDiv => {
    ticketDiv.addEventListener('click', extractTicketDetails);
});
