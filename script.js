// HTTP request to the API
fetch("https://date.nager.at/api/v3/PublicHolidays/2023/AT")
  .then((response) => response.json())
  .then((data) => {
    // Each holidays add it to the list
    data.forEach((holiday) => {
      const listItem = document.createElement("li");
      const holidayDate = new Date(holiday.date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const holidayName = document.createTextNode(
        `${holiday.localName} (${holidayDate})`
      );
      listItem.appendChild(holidayName);
      document.getElementById("holiday-list").appendChild(listItem);
    });
  })
  .catch((error) => console.error(error));
