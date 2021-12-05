function countdown(end_time){
	(function(e){
		e.fn.countdown = function (t, n){
			function i(){
				eventDate = Date.parse(r.date) / 1e3;
				currentDate = Math.floor(e.now() / 1e3);
				//
				if(eventDate <= currentDate){
					n.call(this);
					clearInterval(interval)
				}
				//
				seconds = eventDate - currentDate;
				days = Math.floor(seconds / 86400);
				seconds -= days * 60 * 60 * 24;
				hours = Math.floor(seconds / 3600);
				seconds -= hours * 60 * 60;
				minutes = Math.floor(seconds / 60);
				seconds -= minutes * 60;
				//
				days == 1 ? thisEl.find(".timeRefDays").text("Days") : thisEl.find(".timeRefDays").text("日");
				hours == 1 ? thisEl.find(".timeRefHours").text("Hours") : thisEl.find(".timeRefHours").text("時");
				minutes == 1 ? thisEl.find(".timeRefMinutes").text("Mins") : thisEl.find(".timeRefMinutes").text("分");
				seconds == 1 ? thisEl.find(".timeRefSeconds").text("Secs") : thisEl.find(".timeRefSeconds").text("秒");
				//
				if(r["format"] == "on"){
					days = String(days).length >= 2 ? days : "0" + days;
					hours = String(hours).length >= 2 ? hours : "0" + hours;
					minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
					seconds = String(seconds).length >= 2 ? seconds : "0" + seconds
				}
				//

				if(!isNaN(eventDate)){
					thisEl.find(".days").text(days);
					thisEl.find(".hours").text(hours );
					thisEl.find(".minutes").text(minutes );
					thisEl.find(".seconds").text(seconds )
				}
				else{
					errorMessage = "Invalid date. Example: 03 November 2020 17:00:00";
					alert(errorMessage);
					console.log(errorMessage)
					console.log(r.date);
					clearInterval(interval)
				}
			}
			//
			var thisEl = e(this);
			var r = {
				date: null,
				format: null
			};
			//
			t && e.extend(r, t);
			i();
			interval = setInterval(i, 1e3)
		}
	})(jQuery);
	$("#countdown").countdown({
		date: end_time,
		format: "on"
	});
};


