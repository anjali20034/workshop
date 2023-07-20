<!-- Your HTML form goes here -->

<script>
    // Get references to the form elements
    const eventNameInput = document.getElementById('event-name');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('event-date');
    const technoCheckbox = document.getElementById('event-type-techno');
    const culturalCheckbox = document.getElementById('event-type-cultural');
    const venueDropdown = document.getElementById('venue');
    const bengaluruCheckbox = document.getElementById('organizer-bengaluru');
    const hyderabadCheckbox = document.getElementById('organizer-hyderabad');
    const vizagCheckbox = document.getElementById('organizer-vizag');
    const participantsInput = document.getElementById('participants');
    const artifactsInput = document.getElementById('artifacts');
    const tagsInput = document.getElementById('tags');

    // Event listener for form submission
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission for demonstration purposes

        // Get the selected event type
        let eventType;
        if (technoCheckbox.checked) {
            eventType = technoCheckbox.value;
        } else if (culturalCheckbox.checked) {
            eventType = culturalCheckbox.value;
        } else {
            eventType = ''; // No selection made
        }

        // Get the selected organizer(s)
        const organizers = [];
        if (bengaluruCheckbox.checked) {
            organizers.push(bengaluruCheckbox.value);
        }
        if (hyderabadCheckbox.checked) {
            organizers.push(hyderabadCheckbox.value);
        }
        if (vizagCheckbox.checked) {
            organizers.push(vizagCheckbox.value);
        }

        // Get the selected venue
        const selectedVenue = venueDropdown.value;

        // Get the entered tags and split them into an array
        const tags = tagsInput.value.split(',').map(tag => tag.trim());

        // Create an object with all the form data
        const formData = {
            eventName: eventNameInput.value,
            description: descriptionInput.value,
            date: dateInput.value,
            eventType: eventType,
            venue: selectedVenue,
            organizers: organizers,
            participants: participantsInput.value,
            artifacts: artifactsInput.value,
            tags: tags
        };

        // Here, you can perform additional actions with the form data, such as sending it to a server or displaying it on the page.
        // For this example, we'll log the data to the console.
        console.log(formData);
    });
</script>

