export const sidebar = [
    {
        text: "Local Enviornment",
        prefix: "/guide/local-enviornment/",
        link: "/guide/local-enviornment/windows/",
        collapsable: true,
        children: [
            {
                text: 'Windows',
                link: "windows/",
            },
            {
                text: 'Linux',
                link: "linux/",
            }
        ],
    },
    {
        text: "Architecture",
        prefix: "/guide/architecture/",
        link: "/guide/architecture/pantsbuild/",
        collapsable: true,
        children: [                    
            {
                text: 'APISIX',
                link: "apisix/",
            },
            {
                text: 'Pantsbuild',
                link: "pantsbuild/",
            },
        ],
    }, 
    {
        text: "Database",
        prefix: "/guide/database/",
        link: "/guide/database/alembic/",
        collapsable: true,
        children: [
            {
                text: 'Alembic',
                link: "alembic/",
            }                    
        ],
    },
]