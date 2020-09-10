
	// orders all select funtion
	

	$('.orderManCheckBtn').click (function () {
     	var checkedStatus = this.checked;
	    $('.ordersNewTabTable tbody tr').find('th:first :checkbox').each(function () {
	        $(this).prop('checked', checkedStatus);
	    });
	});

	$('.orderManCheckBtn2').click (function () {
		var checkedStatus = this.checked;
	   $('.ordersNewTabTable tbody tr').find('th:first :checkbox').each(function () {
		   $(this).prop('checked', checkedStatus);
	   });
   });

   $('.orderManCheckBtn3').click (function () {
		var checkedStatus = this.checked;
		$('.ordersNewTabTable tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});

	$('.orderManCheckBtn4').click (function () {
		var checkedStatus = this.checked;
		$('.ordersNewTabTable tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});





	$('.inventoryCheckBtn1').click (function () {
		var checkedStatus = this.checked;
		$('.InventoryMainPageContentMain tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});

	$('.inventoryCheckBtn2').click (function () {
		var checkedStatus = this.checked;
		$('.InventoryMainPageContentMain tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});

	$('.inventoryCheckBtn3').click (function () {
		var checkedStatus = this.checked;
		$('.InventoryMainPageContentMain tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});

	$('.inventoryCheckBtn4').click (function () {
		var checkedStatus = this.checked;
		$('.InventoryMainPageContentMain tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});

	$('.inventoryCheckBtn5').click (function () {
		var checkedStatus = this.checked;
		$('.InventoryMainPageContentMain tbody tr').find('th:first :checkbox').each(function () {
			$(this).prop('checked', checkedStatus);
		});
	});


	// this is intregation search filter option
	function filterFunction() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("itregationInputFilter");
		filter = input.value.toUpperCase();
		div = document.getElementById("intregationDropdownMain");
		a = div.getElementsByTagName("a");
		for (i = 0; i < a.length; i++) {
		  txtValue = a[i].textContent || a[i].innerText;
		  if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		  } else {
			a[i].style.display = "none";
		  }
		}
	  }

	 // this is intregation search filter option2
	function filterFunctionNew() {
		var input, filter, ul, li, a, i;
		input = document.getElementById("itregationInputFilter2");
		filter = input.value.toUpperCase();
		div = document.getElementById("intregationDropdownMain2");
		a = div.getElementsByTagName("a");
		for (i = 0; i < a.length; i++) {
		  txtValue = a[i].textContent || a[i].innerText;
		  if (txtValue.toUpperCase().indexOf(filter) > -1) {
			a[i].style.display = "";
		  } else {
			a[i].style.display = "none";
		  }
		}
	  }

	  // this is for pophover functio
	  $(function () {
		$('.pophoverCustom').popover({
		  container: 'body',
		  trigger: 'hover',
		  fallbackPlacement: 'flip',
		  placement: 'right',
		})
		$('.pophoverCustom2').popover({
			container: 'body',
			trigger: 'hover',
			fallbackPlacement: 'flip',
			placement: 'right',
		  })
	  })

	