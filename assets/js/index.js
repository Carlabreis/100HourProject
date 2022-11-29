$("#add_dish").submit(function(event) {
  alert("Data Inserted Successfully!");
});

$("#update_dish").submit(function(event) {
  event.preventDefault();

  var unindexed_array = $(this).serializeArray();
  var data = {};

  $.map(unindexed_array, function(n, i) {
    data[n["name"]] = n["value"];
  });

  console.log(data);

  fetch(`http://localhost:3000/api/dishes/${data.id}`, {
    method: "PUT",
    body: new URLSearchParams(new FormData(event.currentTarget)).toString(),
    headers: {
      "content-type":"application/x-www-form-urlencoded"
    }
  })
  alert("Data Updated Successfully!");
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(function() {
    var id = $(this).attr("data-id");

    var request = {
      url: `http://localhost:3000/api/dishes/${id}`,
      method: "DELETE"
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done(function(response) {
        alert("Data Deleted Successfully!");
        location.reload();
      });
    }
  });
}
