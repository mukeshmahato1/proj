
    function updateDateTime() {
      const dateElement = document.getElementById("date");
      const timeElement = document.getElementById("time");
      const expirationElement = document.getElementById("expirationHours");

      const now = new Date();
      const seconds = now.getSeconds();
      const expirationHours = 2;

      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();

      dateElement.textContent = formattedDate;
      timeElement.textContent = formattedTime;
      expirationElement.textContent = `${expirationHours - Math.floor(seconds / 3600)} hours ${59 - Math.floor(seconds / 60) % 60} minutes`;
    }

    // Update date, time, and expiration every second
    setInterval(updateDateTime, 1000);

    // Initial update
    updateDateTime();
