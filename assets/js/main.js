(function () {
	"use strict";

	// Mobile nav toggle
	var toggle = document.querySelector(".nav-toggle");
	var body = document.body;
	if (toggle) {
		toggle.addEventListener("click", function () {
			var open = body.classList.toggle("nav-open");
			toggle.setAttribute("aria-expanded", open ? "true" : "false");
		});
		document.querySelectorAll(".nav-links a").forEach(function (link) {
			link.addEventListener("click", function () {
				body.classList.remove("nav-open");
				toggle.setAttribute("aria-expanded", "false");
			});
		});
	}

	// Reveal-on-scroll
	var revealEls = document.querySelectorAll(".reveal");
	if ("IntersectionObserver" in window && revealEls.length) {
		var io = new IntersectionObserver(
			function (entries) {
				entries.forEach(function (entry) {
					if (entry.isIntersecting) {
						entry.target.classList.add("in");
						io.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
		);
		revealEls.forEach(function (el) { io.observe(el); });
	} else {
		revealEls.forEach(function (el) { el.classList.add("in"); });
	}

	// Lightbox gallery
	var galleries = document.querySelectorAll("[data-gallery]");
	galleries.forEach(function (gallery) {
		var buttons = Array.prototype.slice.call(gallery.querySelectorAll("button[data-full]"));
		if (!buttons.length) return;

		var lightbox = document.createElement("div");
		lightbox.className = "lightbox";
		lightbox.setAttribute("role", "dialog");
		lightbox.setAttribute("aria-modal", "true");
		lightbox.setAttribute("aria-label", "Screenshot viewer");
		lightbox.innerHTML =
			'<button class="lightbox-close" aria-label="Close">&times;</button>' +
			'<button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>' +
			'<img alt="" />' +
			'<button class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>';
		document.body.appendChild(lightbox);

		var img = lightbox.querySelector("img");
		var closeBtn = lightbox.querySelector(".lightbox-close");
		var prevBtn = lightbox.querySelector(".lightbox-prev");
		var nextBtn = lightbox.querySelector(".lightbox-next");
		var current = 0;
		var lastFocused = null;

		function show(index) {
			current = (index + buttons.length) % buttons.length;
			var btn = buttons[current];
			img.src = btn.getAttribute("data-full");
			img.alt = btn.getAttribute("data-alt") || "";
		}

		function open(index) {
			lastFocused = document.activeElement;
			show(index);
			lightbox.classList.add("open");
			closeBtn.focus();
			document.addEventListener("keydown", onKey);
		}

		function close() {
			lightbox.classList.remove("open");
			document.removeEventListener("keydown", onKey);
			if (lastFocused) lastFocused.focus();
		}

		function onKey(e) {
			if (e.key === "Escape") close();
			if (e.key === "ArrowRight") show(current + 1);
			if (e.key === "ArrowLeft") show(current - 1);
		}

		buttons.forEach(function (btn, i) {
			btn.addEventListener("click", function () { open(i); });
		});
		closeBtn.addEventListener("click", close);
		prevBtn.addEventListener("click", function () { show(current - 1); });
		nextBtn.addEventListener("click", function () { show(current + 1); });
		lightbox.addEventListener("click", function (e) {
			if (e.target === lightbox) close();
		});
	});
})();
