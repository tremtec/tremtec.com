module.exports = {
    'colors': {
        'border': {
            'neutral-faded': '#eceef3', 
            'positive': '#007a1c', /* Positive border color. */
            'neutral': '#e6e8ef', /* Default border used for outlining elements. */
            'secondary': '#874ce6', /* Secondary border color. */
            'focus': '#5292ff', /* Border color for focus states. */
            'secondary-faded': '#d9c8f5', /* Secondary positive border color. */
            'primary': '#014ee1', /* Primary border color. */
            'primary-faded': '#d1e2ff', /* Subtle primary border color. */
            'positive-faded': '#b4e9c5', /* Subtle positive border color. */
        },
        'foreground': {
            'neutral': '#000000', /* Neutral foreground color. Use for icons and text. */
            'neutral-faded': '#606981', /* Subtle foreground color. Use for secondary or placeholder text. */
            'secondary': '#874ce6', /* Primary foreground color. Use for accent components and text. */
            'disabled': '#c6ccdb', /* Use for disabled foreground components and text. */
            'positive': '#007a1c', /* Positive foreground color. Use for positive components and text (i.e. Success message) */
            'primary': '#104fc6', 
        },
        'background': {
            'page': '#ffffff', /* Primary background for pages. */
            'secondary': '#874ce6', /* Background for components using a secondary (accent) color. */
            'neutral': '#f6f7f9', /* Secondary (alternate) background for pages or other components. */
            'secondary-highlighted': '#a275ea', /* Highlighted background for components using a secondary color, for example, a hover state. */
            'secondary-faded': '#f5f2fd', /* Light background for components used with secondary color. Can be combined with Foreground / Secondary. */
            'primary': '#014ee1', /* Background for primary components. */
            'positive': '#007a1c', /* Background for components used with a positive semantic meaning. */
            'primary-highlighted': '#1062fe', /* Highlighted background for primary components, for example, a hover state. */
            'positive-highlighted': '#35a24f', /* Highlighted background for positive components, for example, a hover state. */
            'primary-faded': '#ecf5ff', /* Light background for primary components. Can be combined with Foreground / Primary. */
            'positive-faded': '#ebfef6', /* Light background for components used with a positive semantic meaning. Can be combined with Foreground / Positive. */
            'blur': '#ffffffcc', /* For use in combination with Blur tokens. */
            'blur-neutral': '#606981cc', /* For use in combination with Blur tokens. */
        },
        'base': {
            'white': '#ffffff', 
            'black': '#000000', 
        },
        'base-green': {
            '700': '#007a1c', 
            '200': '#ebfef6', 
            '300': '#b4e9c5', 
            '500': '#6ac883', 
            '600': '#35a24f', 
        },
        'base-blue': {
            '700': '#014ee1', 
            '200': '#ecf5ff', 
            '300': '#d1e2ff', 
            '500': '#5292ff', 
            '600': '#1062fe', 
        },
        'base-gray': {
            '200': '#f6f7f9', 
            '300': '#e6e8ef', 
            '500': '#c6ccdb', 
            '600': '#7f8594', 
            '700': '#606981', 
        },
        'base-purple': {
            '200': '#f5f2fd', 
            '300': '#d9c8f5', 
            '500': '#be9ff0', 
            '600': '#a275ea', 
            '700': '#874ce6', 
        },
        'on-background': {
            'primary': '#ffffff', /* To be used on Primary and Primary Highlighted background colors. */
        },
    },
    'boxShadow': {
        'Raised': 'var(--shadow-raised)', 
        'Overlay': 'var(--shadow-overlay)', 
    }
}