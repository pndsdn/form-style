$(function() {
	$("#check-input").on("click", function() {
		if ($(this).is(':checked'))
		{
			$("#pass-input").attr('type', 'text');
		}
		else
		{
			$("#pass-input").attr('type', 'password');
		}
	});
})