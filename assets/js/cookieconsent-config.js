/** import '/built/cookieconsent.umd.js'; */

/**
 * All config. options available here:
 * https://cookieconsent.orestbida.com/reference/configuration-reference.html
 */
CookieConsent.run({

    categories: {
        necessary: {
            enabled: true,  // this category is enabled by default
            readOnly: true  // this category cannot be disabled
        },
        analytics: {}
    },

    language: {
        default: 'fr',
        translations: {
            fr: async () => {
                const res = await fetch('/assets/js/cc_fr.json');
                return await res.json();
            },
            en: async () => {
                const res = await fetch('/assets/js/cc_en.json');
                return await res.json();
            }
        }
    }
});