export interface IColor {
    background: {
        default: string;
    };

    text: {
        main: string;
        focus: string;
    };

    transparent: {
        main: string;
    };

    white: {
        main: string;
        focus: string;
    };

    black: {
        light: string;
        main: string;
        focus: string;
    };

    primary: {
        main: string;
        focus: string;
    };

    secondary: {
        main: string;
        focus: string;
    };

    info: {
        main: string;
        focus: string;
    };

    success: {
        main: string;
        focus: string;
    };

    warning: {
        main: string;
        focus: string;
    };

    error: {
        main: string;
        focus: string;
    };

    light: {
        main: string;
        focus: string;
    };

    dark: {
        main: string;
        focus: string;
    };

    grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    };

    gradients: {
        primary: {
            main: string;
            state: string;
        };

        secondary: {
            main: string;
            state: string;
        };

        info: {
            main: string;
            state: string;
        };

        success: {
            main: string;
            state: string;
        };

        warning: {
            main: string;
            state: string;
        };

        error: {
            main: string;
            state: string;
        };

        light: {
            main: string;
            state: string;
        };

        dark: {
            main: string;
            state: string;
        };
    };

    socialMediaColors: {
        facebook: {
            main: string;
            dark: string;
        };

        twitter: {
            main: string;
            dark: string;
        };

        instagram: {
            main: string;
            dark: string;
        };

        linkedin: {
            main: string;
            dark: string;
        };

        pinterest: {
            main: string;
            dark: string;
        };

        youtube: {
            main: string;
            dark: string;
        };

        vimeo: {
            main: string;
            dark: string;
        };

        slack: {
            main: string;
            dark: string;
        };

        dribbble: {
            main: string;
            dark: string;
        };

        github: {
            main: string;
            dark: string;
        };

        reddit: {
            main: string;
            dark: string;
        };

        tumblr: {
            main: string;
            dark: string;
        };
    };

    alertColors: {
        primary: {
            main: string;
            state: string;
            border: string;
        };

        secondary: {
            main: string;
            state: string;
            border: string;
        };

        info: {
            main: string;
            state: string;
            border: string;
        };

        success: {
            main: string;
            state: string;
            border: string;
        };

        warning: {
            main: string;
            state: string;
            border: string;
        };

        error: {
            main: string;
            state: string;
            border: string;
        };

        light: {
            main: string;
            state: string;
            border: string;
        };

        dark: {
            main: string;
            state: string;
            border: string;
        };
    };

    badgeColors: {
        primary: {
            background: string;
            text: string;
        };

        secondary: {
            background: string;
            text: string;
        };

        info: {
            background: string;
            text: string;
        };

        success: {
            background: string;
            text: string;
        };

        warning: {
            background: string;
            text: string;
        };

        error: {
            background: string;
            text: string;
        };

        light: {
            background: string;
            text: string;
        };

        dark: {
            background: string;
            text: string;
        };
    };

    inputColors: {
        borderColor: { main: string; focus: string };
        boxShadow: string;
        error: string;
        success: string;
    };

    sliderColors: {
        thumb: { borderColor: string };
    };

    circleSliderColors: {
        background: string;
    };

    tabs: {
        indicator: { boxShadow: string };
    };
}
