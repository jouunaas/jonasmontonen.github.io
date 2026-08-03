/* Project data. Adding a new project or category only requires editing this file. */
window.PROJECT_CATEGORIES = [
	{
		id: "thalassophobia",
		label: "Flagship Game",
		description: "The commercial project the studio is built around.",
		projects: [
			{
				title: "Thalassophobia",
				thumb: "images/thalassophobia/screenshot-07.jpg",
				thumbAlt: "Four co-op divers facing a giant sea creature in Thalassophobia",
				summary: "A 1–4 player co-op underwater horror game built in Unreal Engine 5. Multiplayer gameplay architecture, AI-driven creatures, and procedural animation built from the ground up.",
				tech: ["Unreal Engine 5", "C++", "Multiplayer", "Behavior Trees", "Control Rig", "Steamworks"],
				role: "Founder & Lead Developer",
				links: [
					{ label: "Case study", href: "thalassophobia.html" },
					{ label: "Steam", href: "https://store.steampowered.com/app/2507690/Thalassophobia/", external: true }
				]
			}
		]
	},
	{
		id: "unreal-systems",
		label: "Unreal Engine Systems & Frameworks",
		description: "Reusable, commercial-track UE5 technology built alongside Thalassophobia. Not yet published as standalone products, engineered to eventually ship that way.",
		projects: [
			{
				title: "Unreal Engine Plugin Framework",
				summary: "A reusable gameplay framework featuring modular systems, reusable components, and scalable architecture, designed to accelerate development across multiple games.",
				tech: ["UE5", "C++", "Blueprints"],
				role: "Creator",
				details: {
					why: "Every new project was rebuilding the same gameplay scaffolding: actor components, interfaces, save/load hooks. This framework packages that scaffolding once as a plugin.",
					points: [
						"Designing components generic enough to reuse across genres without becoming over-abstracted.",
						"Keeping the framework Blueprint-exposable so design work doesn't require touching C++.",
						"Versioning the plugin across projects that diverge over time."
					]
				}
			},
			{
				title: "Modular AI Framework",
				summary: "A general-purpose AI framework focused on scalable NPC behavior, reusable Behavior Tree tasks, and modular AI architecture.",
				tech: ["UE5", "C++", "Behavior Trees"],
				role: "Creator",
				details: {
					why: "Supporting many different AI archetypes (creatures, NPCs, enemies) usually means duplicated Behavior Tree logic per type. This framework separates reusable tasks/services from per-archetype configuration.",
					points: [
						"Building Behavior Tree tasks generic enough to serve very different creature types.",
						"Keeping the tooling designer-friendly so tuning doesn't require an engineer.",
						"Balancing reusability against per-creature performance cost."
					]
				}
			},
			{
				title: "Control Rig & Procedural Animation Framework",
				summary: "Reusable procedural animation and Control Rig systems for creatures and characters, including foot placement, locomotion, and dynamic hit reactions.",
				tech: ["Control Rig", "Animation", "C++", "Blueprints"],
				role: "Creator",
				details: {
					why: "Built directly out of Thalassophobia's need for varied, believable sea-creature movement without hand-authoring a full animation set per creature type.",
					points: ["Procedural foot placement", "Creature locomotion", "Fish movement", "Multi-legged creatures", "Tentacle animation", "Dynamic hit reactions"]
				}
			},
			{
				title: "Multiplayer Gameplay Systems",
				summary: "A collection of multiplayer systems developed across various Unreal Engine projects, focused on replication and network-safe gameplay logic.",
				tech: ["UE5", "C++", "Replication"],
				role: "Creator",
				details: {
					why: "Focus areas across projects:",
					points: [
						"Replication patterns for shared gameplay state",
						"Multiplayer interactions (pickups, shared objectives, environmental triggers)",
						"Authority architecture: deciding what the server owns versus what clients can predict",
						"Network-safe gameplay systems that hold up under packet loss and host migration"
					]
				}
			},
			{
				title: "Procedural Gameplay Systems",
				summary: "Research and development into procedural generation and gameplay simulation: procedural environments, physics-driven gameplay, and world generation.",
				tech: ["UE5", "C++", "Procedural Generation"],
				role: "Creator",
				details: {
					why: "Ongoing R&D rather than a shipped feature set, exploring how much of Varattu Valo's future world-building can be systemic instead of hand-placed.",
					points: ["Procedural environments", "Physics-driven gameplay", "World generation", "Simulation systems"]
				}
			}
		]
	},
	{
		id: "ai-development",
		label: "AI Development",
		description: "Software engineering work applying AI to development itself: workflow tooling, documentation, and content pipelines.",
		projects: [
			{
				title: "AI Development Workflow Platform",
				summary: "Centralizes AI-assisted software development workflows: code generation, architecture planning, debugging, documentation, and project organization across large codebases, integrating multiple AI models into one consistent pipeline.",
				tech: ["Python", "LLM APIs", "MCP", "VS Code", "Claude Code", "Git"],
				roleDetail: "Designed the architecture, built the automation workflows, and integrated AI tooling into daily development. Continuously improving prompts, tooling, and workflow efficiency."
			},
			{
				title: "AI Documentation Pipeline",
				summary: "Automatically generates and maintains project documentation: technical references, architecture docs, and development guides produced directly from existing codebases.",
				tech: ["Python", "Markdown", "LLMs", "Git"],
				roleDetail: "Designed the documentation workflow, built the automation, and integrated it into active development projects."
			},
			{
				title: "AI Asset Generation Workflow",
				summary: "Speeds up production of development assets: documentation, planning material, reference content, and supporting resources, reducing repetitive manual work during development.",
				tech: ["Python", "LLM APIs", "Image generation tools", "Automation scripts"],
				roleDetail: "Designed and implemented the workflow, and integrated AI into the content creation pipeline."
			}
		]
	},
	{
		id: "desktop-apps",
		label: "Desktop Applications",
		description: "Standalone tools built outside of game development: content publishing, audio processing, and creator workflow software.",
		projects: [
			{
				title: "Creator Publishing Tool",
				status: "In development",
				summary: "A desktop application for managing content publishing: converts long-form video into short-form content and organizes publishing across multiple social platforms, streamlining a creator's workflow from editing to publishing.",
				tech: ["Python", "Qt", "Local automation", "Video processing libraries"],
				roleDetail: "Product design, software architecture, workflow design, and development."
			},
			{
				title: "Voice Processing Tool",
				summary: "Automates voice recording post-processing: cleans audio, applies consistent processing, and exports production-ready voice clips for game voice acting, trailers, devlogs, and social content.",
				tech: ["Python", "Qt", "Audio processing libraries", "Local AI-assisted workflow"],
				roleDetail: "Designed the production pipeline and processing workflow; leading development."
			},
			{
				title: "YouTube Metadata & Publishing Assistant",
				summary: "Generates optimized titles, descriptions, tags, and publishing metadata, preparing content for multiple platforms from a single interface.",
				tech: ["Python", "LLM APIs", "Platform APIs"],
				roleDetail: "Product design, workflow design, and development planning."
			}
		]
	},
	{
		id: "experiments",
		label: "Experiments & Prototypes",
		description: "Smaller personal and team projects built to learn specific systems, from before Varattu Valo Games.",
		compact: true,
		projects: [
			{
				title: "VR Survival Prototype",
				thumb: "images/experiments/vr-survival.jpg",
				thumbAlt: "Island environment built in Unreal Engine for a VR survival prototype",
				summary: "A small-team VR survival scenario built in UE5.1: a player stranded on an island managing fire-making, fishing, and hunger/thirst systems.",
				tech: ["Unreal Engine 5.1", "C++", "Blueprints", "VR"]
			},
			{
				title: "Early Souls-like Prototype",
				thumb: "images/experiments/souls-mmo-prototype.jpg",
				thumbAlt: "Quest and character UI screens from an early Unreal Engine RPG prototype",
				summary: "Early-stage systems for an open-world RPG with Souls-like combat, built with a small team: quest UI, character stat screens, and settings menus.",
				tech: ["Unreal Engine", "C++", "Blueprints"]
			},
			{
				title: "Sand Simulation",
				thumb: "images/experiments/sand-sim.jpg",
				thumbAlt: "Falling-sand style particle simulation with sand, water, and stone",
				summary: "A falling-sand style particle simulator: sand, cement, water, wood, and fire interacting under gravity, built to explore physics simulation from scratch.",
				tech: ["C++", "SFML"]
			},
			{
				title: "Real-Time 3D Renderer",
				thumb: "images/experiments/realtime-renderer.jpg",
				thumbAlt: "Textured 3D objects rendered with raw OpenGL",
				summary: "A from-scratch OpenGL renderer: 3D object rendering, camera controls, and heightmap-based terrain with texturing, no engine involved.",
				tech: ["C++", "OpenGL"]
			},
			{
				title: "2D Graphics Fundamentals",
				thumb: "images/experiments/opengl-graphics.jpg",
				thumbAlt: "Coursework exercise rendering shapes and textures with OpenGL",
				summary: "Coursework covering graphics fundamentals: shape rendering, image loading, and texture drawing using SFML and OpenGL.",
				tech: ["C++", "SFML", "OpenGL"]
			},
			{
				title: "2D Platformer Engine",
				thumb: "images/experiments/2d-platformer.jpg",
				thumbAlt: "A 2D platformer level with a player character and enemy",
				summary: "A 2D platformer engine with a built-in level editor: players can build custom levels and save them to file, in the spirit of Mario Maker-style creation tools.",
				tech: ["C++", "SFML"]
			}
		]
	}
];
