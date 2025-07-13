document.getElementById('searchBar').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  // Add search logic here in the future
  console.log("Search query:", query);
});
