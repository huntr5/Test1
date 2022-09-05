module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
      ],
    
    daisyui: {
        themes: [
            {
                mytheme: {
                "primary": "#570DF8",
                "secondary": "#F000B8",
                "accent": "#37CDBE",
                "neutral": "#3D4451",
                "base-100": "#111111",
                "info": "#3ABFF8",
                "success": "#36D399",
                "warning": "#FBBD23",
                "error": "#F87272",
            },
          },
        ],
    },  
};


