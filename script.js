function filterData() {
  event.preventDefault();
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  console.log(startdate);
  console.log(enddate);
}

async function fetchData() {
  try {
      const response = await fetch('https://compute.samford.edu/zohauth/clients/datajson/1');
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

      // Clear any existing rows in the table body
      tableBody.innerHTML = '';

      // Iterate over the data and create rows
      data.forEach(item => {
          const row = tableBody.insertRow();
          const cellPitchNo = row.insertCell(0);
          const cellDate = row.insertCell(1);
          const cellTime = row.insertCell(2);
          const cellBatter = row.insertCell(3);
          const cellBalls = row.insertCell(4);
          const cellStrikes = row.insertCell(5);
          const cellOuts = row.insertCell(6);
          const cellPitchCall = row.insertCell(7);
          const cellKorBB = row.insertCell(8);
          const cellRelSpeed = row.insertCell(9);
          const cellSpinRate = row.insertCell(10);
          const cellSpinAxis = row.insertCell(11);

          // Replace these with actual property names from the API response
          cellPitchNo.innerHTML = `<a href="details.html?id=${item.PitchNo}">Pitch ${item.PitchNo}</a>`;
          cellDate.textContent = item.Date || 'N/A';
          cellTime.textContent = item.Time || 'N/A';
          cellBatter.textContent = item.Batter || 'N/A';
          cellBalls.textContent = item.Balls || 'N/A';
          cellStrikes.textContent = item.Strikes || 'N/A';
          cellOuts.textContent = item.Outs || 'N/A';
          cellPitchCall.textContent = item.PitchCall || 'N/A';
          cellKorBB.textContent = item.KorBB || 'N/A';
          cellRelSpeed.textContent = item.RelSpeed || 'N/A';
          cellSpinRate.textContent = item.SpinRate || 'N/A';
          cellSpinAxis.textContent = item.SpinAxis || 'N/A';
      });
  } catch (error) {
      console.error('Fetch error:', error);
      const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
      tableBody.innerHTML = '<tr><td colspan="12">Error fetching data</td></tr>';
  }
}

// Call the fetchData function when the page loads
window.onload = fetchData;