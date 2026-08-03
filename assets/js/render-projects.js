(function () {
	"use strict";
	var CATEGORIES = window.PROJECT_CATEGORIES || [];

	function chipRow(tech) {
		if (!tech || !tech.length) return "";
		return '<div class="chip-row">' + tech.map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") + "</div>";
	}

	function thumb(project) {
		if (project.thumb) {
			return '<div class="project-thumb"><img src="' + project.thumb + '" alt="' + (project.thumbAlt || "") + '" loading="lazy" /></div>';
		}
		return '<div class="project-thumb placeholder"><span class="ph-label">Media coming soon</span></div>';
	}

	function links(project) {
		if (!project.links || !project.links.length) return "";
		return (
			'<div class="chip-row" style="margin-top:0.4rem;">' +
			project.links
				.map(function (l) {
					var attrs = l.external ? ' target="_blank" rel="noopener"' : "";
					return '<a href="' + l.href + '" class="btn btn-ghost btn-sm"' + attrs + ">" + l.label + "</a>";
				})
				.join("") +
			"</div>"
		);
	}

	function detailsBlock(project) {
		if (!project.details) return "";
		var d = project.details;
		var points = (d.points || []).map(function (p) { return "<li>" + p + "</li>"; }).join("");
		return (
			'<details class="case"><summary>Details</summary><div class="case-body">' +
			(d.why ? "<p>" + d.why + "</p>" : "") +
			(points ? "<ul>" + points + "</ul>" : "") +
			"</div></details>"
		);
	}

	function fullCard(project) {
		var roleHtml = project.role ? '<span class="role">' + project.role + "</span>" : "";
		var roleDetailHtml = project.roleDetail
			? '<p style="color:var(--text-faint); font-size:0.85rem;"><strong style="color:var(--text-dim);">My role:</strong> ' + project.roleDetail + "</p>"
			: "";
		var statusHtml = project.status ? '<span class="chip on" style="margin-bottom:0.5rem; display:inline-block;">' + project.status + "</span>" : "";
		return (
			'<article class="project-card reveal">' +
			thumb(project) +
			'<div class="project-card-body">' +
			statusHtml +
			roleHtml +
			"<h3>" + project.title + "</h3>" +
			'<p class="desc">' + project.summary + "</p>" +
			chipRow(project.tech) +
			roleDetailHtml +
			links(project) +
			detailsBlock(project) +
			"</div></article>"
		);
	}

	function renderFull(container) {
		var html = CATEGORIES.map(function (cat) {
			var grid = cat.compact ? "grid-4" : "grid-3";
			return (
				'<section class="container" id="' + cat.id + '">' +
				'<div class="section-head reveal">' +
				'<span class="eyebrow">' + cat.label + "</span>" +
				"<h2>" + cat.label + "</h2>" +
				(cat.description ? "<p>" + cat.description + "</p>" : "") +
				"</div>" +
				'<div class="' + grid + '">' +
				cat.projects.map(fullCard).join("") +
				"</div></section>"
			);
		}).join('<div class="section-border-top"></div>');
		container.innerHTML = html;
	}

	function teaserTile(cat) {
		var first = cat.projects[0];
		return (
			'<a class="highlight-card reveal" href="projects.html#' + cat.id + '" style="display:block;">' +
			'<div class="icon">→</div>' +
			"<h3>" + cat.label + "</h3>" +
			'<p>' + (cat.description || first.summary) + "</p>" +
			"</a>"
		);
	}

	function renderTeaser(container) {
		container.innerHTML = CATEGORIES.map(teaserTile).join("");
	}

	// Runs immediately at parse time (this script tag sits after the containers
	// in the DOM, and before main.js). main.js's reveal-on-scroll setup also runs
	// at parse time rather than waiting for DOMContentLoaded, so this injection
	// must complete first, in document order, for it to pick up these nodes.
	var full = document.querySelector("[data-projects-full]");
	var teaser = document.querySelector("[data-projects-teaser]");
	if (full) renderFull(full);
	if (teaser) renderTeaser(teaser);
})();
