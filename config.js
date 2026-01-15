/**
 * LinkHub Configuration
 * Customize your link-in-bio page by editing this file
 */

const CONFIG = {
    // Theme: "default", "dark", "minimal", "ocean", "sunset", "forest"
    theme: "default",

    // Profile
    profile: {
        name: "Parsa Faraji",
        bio: "EECS @ UC Berkeley | ML Researcher | Building cool stuff",
        avatar: "https://avatars.githubusercontent.com/u/parsa-faraji" // or leave empty for initials
    },

    // Social Icons (shown below bio)
    socials: [
        {
            platform: "github",
            url: "https://github.com/parsa-faraji"
        },
        {
            platform: "linkedin",
            url: "https://linkedin.com/in/parsa-faraji-alamouti-942338272"
        },
        {
            platform: "email",
            url: "mailto:your@email.com"
        }
    ],

    // Links (main buttons)
    links: [
        {
            title: "My Portfolio",
            url: "https://parsa-faraji.github.io/portfolio",
            icon: "🌐"
        },
        {
            title: "Neural Network Playground",
            url: "https://github.com/parsa-faraji/neural-network-playground",
            icon: "🧠"
        },
        {
            title: "TransferAble - Student Transfer Platform",
            url: "https://github.com/parsa-faraji/TransferAble",
            icon: "🎓"
        },
        {
            title: "Connect on LinkedIn",
            url: "https://linkedin.com/in/parsa-faraji-alamouti-942338272",
            icon: "💼"
        },
        {
            title: "View My Resume",
            url: "#",
            icon: "📄"
        }
    ]
};

window.CONFIG = CONFIG;
